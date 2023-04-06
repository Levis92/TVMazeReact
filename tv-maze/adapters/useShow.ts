import {useQuery} from '@tanstack/react-query';
import {request} from '@/util';
import {Show} from '@/models';

export function useShow(showId: number) {
  return useQuery({
    queryKey: ['show', showId],
    queryFn: () => getShow(showId),
    enabled: !!showId,
    staleTime: 5 * 60 * 1000,
    cacheTime: 15 * 60 * 1000,
  });
}

export function getShow(showId: number) {
  return request<Show>(`/shows/${showId}`);
}
