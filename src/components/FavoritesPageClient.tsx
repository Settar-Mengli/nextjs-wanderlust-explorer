"use client";

import Link from "next/link";
import ExperienceCard from "@/components/ExperienceCard";
import { useFavorites } from "@/components/FavoritesProvider";
import type { Experience } from "@/types/experience";

type FavoritesPageClientProps = {
  experiences: Experience[];
};

export default function FavoritesPageClient({
  experiences,
}: FavoritesPageClientProps) {
  const { favoriteIds, favoriteCount } = useFavorites();
  const favoriteExperiences = experiences.filter((experience) =>
    favoriteIds.includes(experience.id),
  );

  if (favoriteExperiences.length === 0) {
    return (
      <section className="mx-auto flex min-h-[64vh] w-full max-w-5xl items-center">
        <div className="w-full overflow-hidden border border-stone-300 bg-[#fffdf8] shadow-[0_20px_60px_rgba(21,21,21,0.09)]">
          <div className="grid gap-0 lg:grid-cols-[1fr_0.75fr]">
            <div className="p-6 sm:p-10 lg:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#777536]">
                Saved escapes
              </p>
              <h1 className="mt-4 max-w-2xl text-3xl font-black leading-tight tracking-tight sm:text-5xl">
                Your favorites list is ready when inspiration strikes.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">
                Tap the heart on any experience card to build a shortlist for
                your next trip. Favorites live in React state for this browsing
                session.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/experiences"
                  className="inline-flex items-center justify-center border border-[#151515] bg-[#151515] px-6 py-3 text-sm font-black text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-white hover:text-[#151515]"
                >
                  Browse experiences
                </Link>
                <Link
                  href="/profile"
                  className="inline-flex items-center justify-center border border-stone-300 px-6 py-3 text-sm font-black text-stone-700 transition hover:-translate-y-0.5 hover:bg-[#f7f3eb]"
                >
                  View profile
                </Link>
              </div>
            </div>

            <aside className="bg-[#050815] p-6 text-white sm:p-10 lg:p-12">
              <div className="flex h-full min-h-64 flex-col justify-between border border-white/10 bg-white/10 p-6 backdrop-blur">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d8c184]">
                    Current favorites
                  </p>
                  <p className="mt-4 text-5xl font-black">{favoriteCount}</p>
                  <p className="mt-2 text-sm text-white/70">
                    saved experiences
                  </p>
                </div>
                <p className="mt-10 text-sm leading-6 text-white/70">
                  No localStorage or backend is used, so favorites reset when
                  the app session refreshes.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto w-full max-w-7xl">
      <header className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#777536]">
            Saved escapes
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
            Your favorite experiences.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">
            This shortlist is powered entirely by React state and updates as
            you tap hearts across the explorer.
          </p>
        </div>

        <div className="border border-stone-300 bg-[#fffdf8] p-5 shadow-[0_16px_40px_rgba(21,21,21,0.06)]">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-stone-400">
            Saved experiences
          </p>
          <p className="mt-2 text-4xl font-black text-[#151515]">
            {favoriteExperiences.length}
          </p>
        </div>
      </header>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {favoriteExperiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
}
