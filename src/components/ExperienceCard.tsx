"use client";

import Image from "next/image";
import Link from "next/link";
import { useFavorites } from "@/components/FavoritesProvider";
import type { Experience } from "@/types/experience";

type ExperienceCardProps = {
  experience: Experience;
  href?: string;
};

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export default function ExperienceCard({
  experience,
  href = `/experiences/${experience.id}`,
}: ExperienceCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorited = isFavorite(experience.id);
  const favoriteGlyph = favorited ? "\u2665" : "\u2661";

  return (
    <article className="group relative flex h-full flex-col overflow-hidden border border-stone-300/80 bg-[#fffdf8] shadow-[0_16px_40px_rgba(21,21,21,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(21,21,21,0.13)]">
      <Link
        href={href}
        className="flex h-full flex-col focus:outline-none focus-visible:ring-4 focus-visible:ring-[#b69b5e]/35"
      >
        <div className="relative aspect-[16/11] overflow-hidden bg-stone-200 sm:aspect-[5/4]">
          <Image
            src={experience.imageUrl}
            alt={`${experience.title} in ${experience.destination}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

          <div className="absolute left-3 top-3 flex max-w-[calc(100%-4.5rem)] items-center gap-3 sm:left-4 sm:top-4">
            <span className="bg-[#f7f3eb]/95 px-2.5 py-1 text-[0.64rem] font-black uppercase tracking-[0.12em] text-[#151515] shadow-sm backdrop-blur sm:text-[0.68rem] sm:tracking-[0.16em]">
              {experience.category}
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-4 sm:p-5">
          <div className="flex items-start justify-between gap-3">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-stone-500 sm:text-xs">
              {experience.destination}
            </p>
            <p className="shrink-0 text-xs font-black text-[#777536] sm:text-sm">
              {experience.rating.toFixed(1)}
            </p>
          </div>

          <h2 className="mt-2.5 text-xl font-black leading-tight tracking-tight text-[#151515] sm:text-2xl">
            {experience.title}
          </h2>

          <p className="mt-3 line-clamp-3 text-sm leading-6 text-stone-600">
            {experience.description}
          </p>

          <div className="mt-auto flex items-end justify-between gap-4 border-t border-stone-200 pt-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-stone-400">
                Starting from
              </p>
              <p className="mt-1 text-2xl font-black text-[#151515]">
                {currencyFormatter.format(experience.price)}
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-stone-400">
                Rating
              </p>
              <p className="mt-1 text-lg font-black text-[#777536]">
                {experience.rating.toFixed(1)}
              </p>
            </div>
          </div>
        </div>
      </Link>

      <button
        type="button"
        aria-label={
          favorited
            ? `Remove ${experience.title} from favorites`
            : `Add ${experience.title} to favorites`
        }
        aria-pressed={favorited}
        onClick={() => toggleFavorite(experience.id)}
        className={`absolute right-3 top-3 z-10 grid size-9 place-items-center border text-lg shadow-lg backdrop-blur transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#b69b5e]/35 sm:right-4 sm:top-4 sm:size-10 ${
          favorited
            ? "border-[#b69b5e] bg-[#b69b5e] text-[#151515] shadow-black/15"
            : "border-white/70 bg-white/90 text-[#151515] shadow-black/10 hover:border-[#b69b5e] hover:text-[#777536]"
        }`}
      >
        <span aria-hidden>{favoriteGlyph}</span>
      </button>
    </article>
  );
}
