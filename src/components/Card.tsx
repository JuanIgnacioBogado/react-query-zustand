import { memo } from 'react';
import { shallow } from 'zustand/shallow';

import { Repository } from '../hooks/types';
import { useFavoriteReposStore } from '../store/favoriteRepos';

type CardProps = {
  repo: Repository;
  isFavorite: boolean;
};

export const Card = memo(({ repo: { id, name }, isFavorite }: CardProps) => {
  const { addFavoriteRepo, removeFavoriteRepo } = useFavoriteReposStore(
    ({ addFavoriteRepo, removeFavoriteRepo }) => ({
      addFavoriteRepo,
      removeFavoriteRepo
    }),
    shallow
  );

  const toggleFavoriteRepoId = () => isFavorite ? removeFavoriteRepo(id) : addFavoriteRepo(id);

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={toggleFavoriteRepoId}>
        {isFavorite ? 'Dislike' : 'Like'}
      </button>
    </div>
  );
});
