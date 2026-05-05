"use client";

import { useFavorites } from "@/components/FavoritesProvider";

type FavoriteActionButtonProps = {
  experienceId: string;
  experienceTitle: string;
};

export default function FavoriteActionButton({
  experienceId,
  experienceTitle,
}: FavoriteActionButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorited = isFavorite(experienceId);

  return (
    <button
      type="button"
      aria-pressed={favorited}
      aria-label={
        favorited
          ? `Remove ${experienceTitle} from favorites`
          : `Add ${experienceTitle} to favorites`
      }
      onClick={() => toggleFavorite(experienceId)}
      className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition hover:-translate-y-0.5 ${
        favorited
          ? "bg-rose-500 text-white hover:bg-rose-600"
          : "bg-slate-950 text-white hover:bg-slate-800"
      }`}
    >
      <span aria-hidden>{favorited ? "♥" : "♡"}</span>
      {favorited ? "Saved to favorites" : "Save to favorites"}
    </button>
  );
}
