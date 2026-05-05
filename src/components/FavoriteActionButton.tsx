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
  const favoriteGlyph = favorited ? "\u2665" : "\u2661";

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
      className={`mt-6 inline-flex w-full items-center justify-center gap-3 border px-6 py-3 text-sm font-black transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#b69b5e]/35 ${
        favorited
          ? "border-[#b69b5e] bg-[#b69b5e] text-[#151515]"
          : "border-[#151515] bg-[#151515] text-white hover:bg-white hover:text-[#151515]"
      }`}
    >
      <span aria-hidden className="text-base leading-none">
        {favoriteGlyph}
      </span>
      {favorited ? "Saved to favorites" : "Save to favorites"}
    </button>
  );
}
