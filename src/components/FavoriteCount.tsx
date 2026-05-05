"use client";

import { useFavorites } from "@/components/FavoritesProvider";

export default function FavoriteCount() {
  const { favoriteCount } = useFavorites();

  return favoriteCount;
}
