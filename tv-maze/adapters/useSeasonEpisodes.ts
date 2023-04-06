import { request } from "@/util/request";
import { Episode } from "@/models";
import { useQueries } from "@tanstack/react-query";

export function useSeasonEpisodes(seasonIds: number[] | undefined) {
  return useQueries({
    queries:
      seasonIds?.map((id) => ({
        queryKey: ["seasonEpisodes", id],
        queryFn: () => getSeasonEpisodes(id),
        enabled: !!id,
        staleTime: 5 * 60 * 1000,
        cacheTime: 15 * 60 * 1000,
      })) ?? [],
  });
}

export function getSeasonEpisodes(seasonId: number) {
  return request<Episode[]>(`/seasons/${seasonId}/episodes`);
}
