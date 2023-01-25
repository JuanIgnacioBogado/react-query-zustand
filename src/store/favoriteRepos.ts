import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type favoriteReposState = {
  favoriteReposIds: number[];
  addFavoriteRepo: (id: number) => void;
  removeFavoriteRepo: (id: number) => void;
};

export const useFavoriteReposStore = create(
  persist<favoriteReposState>(
    (set, get) => ({
      favoriteReposIds: [],
      addFavoriteRepo: id =>
        set({ favoriteReposIds: [...get().favoriteReposIds, id] }),
      removeFavoriteRepo: id =>
        set({
          favoriteReposIds: get().favoriteReposIds.filter(
            repoID => repoID !== id
          )
        })
    }),
    {
      name: 'favorite-repos'
    }
  )
);
