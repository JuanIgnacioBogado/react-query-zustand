import { Card } from './components/Card';
import { useFetchRepositories } from './hooks/useRepos';
import { useFavoriteReposStore } from './store/favoriteRepos';

export const App = () => {
  const { data: repos, isLoading } = useFetchRepositories('juanignaciobogado');
  const { favoriteReposIds } = useFavoriteReposStore();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {repos?.map(repo => (
        <Card
          {...{
            repo,
            isFavorite: favoriteReposIds.includes(repo.id),
            key: repo.id
          }}
        />
      ))}
    </div>
  );
};
