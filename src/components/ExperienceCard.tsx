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

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-white/70 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.10)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(15,23,42,0.18)]">
      <Link href={href} className="flex h-full flex-col">
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
          <Image
            src={experience.imageUrl}
            alt={`${experience.title} in ${experience.destination}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

          <div className="absolute left-5 top-5 flex max-w-[calc(100%-5.5rem)] items-center gap-3">
            <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900 shadow-sm backdrop-blur">
              {experience.category}
            </span>
          </div>

          <div className="absolute bottom-5 left-5 right-5">
            <p className="text-sm font-medium text-white/80">
              {experience.destination}
            </p>
            <h2 className="mt-2 text-2xl font-semibold leading-7 text-white">
              {experience.title}
            </h2>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-5 p-5">
          <p className="line-clamp-3 text-sm leading-6 text-slate-600">
            {experience.description}
          </p>

          <div className="mt-auto flex items-end justify-between gap-4 border-t border-slate-100 pt-5">
            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
                Starting from
              </p>
              <p className="mt-1 text-2xl font-bold text-slate-950">
                {currencyFormatter.format(experience.price)}
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs font-semibold uppercase text-slate-400">
                Rating
              </p>
              <p className="mt-1 text-lg font-bold text-amber-600">
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
        className={`absolute right-5 top-5 z-10 grid size-11 place-items-center rounded-full text-xl shadow-lg backdrop-blur transition hover:-translate-y-0.5 ${
          favorited
            ? "bg-rose-500 text-white shadow-rose-950/20"
            : "bg-white/90 text-slate-700 shadow-slate-950/10 hover:text-rose-500"
        }`}
      >
        <span aria-hidden>{favorited ? "♥" : "♡"}</span>
      </button>
    </article>
  );
}
