"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";
import type { ReactNode } from "react";

type FavoritesContextValue = {
  favoriteIds: string[];
  favoriteCount: number;
  isFavorite: (experienceId: string) => boolean;
  toggleFavorite: (experienceId: string) => void;
};

const FavoritesContext = createContext<FavoritesContextValue | null>(null);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  const value = useMemo<FavoritesContextValue>(
    () => ({
      favoriteIds,
      favoriteCount: favoriteIds.length,
      isFavorite: (experienceId) => favoriteIds.includes(experienceId),
      toggleFavorite: (experienceId) => {
        setFavoriteIds((currentFavoriteIds) =>
          currentFavoriteIds.includes(experienceId)
            ? currentFavoriteIds.filter((id) => id !== experienceId)
            : [...currentFavoriteIds, experienceId],
        );
      },
    }),
    [favoriteIds],
  );

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("useFavorites must be used within FavoritesProvider");
  }

  return context;
}
