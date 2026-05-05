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
      <section className="mx-auto flex min-h-[68vh] w-full max-w-5xl items-center">
        <div className="w-full overflow-hidden rounded-lg bg-white shadow-[0_22px_70px_rgba(15,23,42,0.10)]">
          <div className="grid gap-0 lg:grid-cols-[1fr_0.75fr]">
            <div className="p-8 sm:p-12">
              <p className="text-sm font-semibold uppercase text-teal-700">
                Saved escapes
              </p>
              <h1 className="mt-4 max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">
                Your favorites list is ready when inspiration strikes.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
                Tap the heart on any experience card to build a shortlist for
                your next trip. Favorites live in React state for this browsing
                session.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/experiences"
                  className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  Browse experiences
                </Link>
                <Link
                  href="/profile"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-50"
                >
                  View profile
                </Link>
              </div>
            </div>

            <aside className="bg-slate-950 p-8 text-white sm:p-12">
              <div className="flex h-full min-h-72 flex-col justify-between rounded-lg border border-white/10 bg-white/10 p-6 backdrop-blur">
                <div>
                  <p className="text-sm font-semibold uppercase text-amber-200">
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
          <p className="text-sm font-semibold uppercase text-teal-700">
            Saved escapes
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">
            Your favorite experiences.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            This shortlist is powered entirely by React state and updates as
            you tap hearts across the explorer.
          </p>
        </div>

        <div className="rounded-lg bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
          <p className="text-xs font-semibold uppercase text-slate-400">
            Saved experiences
          </p>
          <p className="mt-2 text-4xl font-black text-slate-950">
            {favoriteExperiences.length}
          </p>
        </div>
      </header>

      <div className="mt-10 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
        {favoriteExperiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
}
