import { request } from "@/util";
import { Season } from "@/models";
import { useQuery } from "@tanstack/react-query";

export function useShowSeasons(showId: number) {
  return useQuery({
    queryKey: ["showSeasons", showId],
    queryFn: () => getShowSeasons(showId),
    enabled: !!showId,
    staleTime: 5 * 60 * 1000,
    cacheTime: 15 * 60 * 1000,
  });
}

export function getShowSeasons(showId: number) {
  return request<Season[]>(`/shows/${showId}/seasons`);
}
