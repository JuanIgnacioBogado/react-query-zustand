import { useQuery, QueryFunctionContext } from '@tanstack/react-query';
import { api } from '../api/github';
import { Repository } from './types';

const fetchRepos = async ({
  queryKey: [_, username]
}: QueryFunctionContext) => {
  const { data } = await api.get<Repository[]>(`/users/${username}/repos`);
  return data;
};

export const useFetchRepositories = (username: string) => useQuery(['repos', username], fetchRepos);
