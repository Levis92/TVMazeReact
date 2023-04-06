import { useQuery } from "@tanstack/react-query";
import { ShowResponse } from "@/models";
import { request } from "@/util";

export function useSearchShows(search: string) {
  return useQuery({
    queryKey: ["search", search],
    queryFn: () => searchShows(search),
    enabled: !!search.length,
    staleTime: 5 * 60 * 1000,
    cacheTime: 15 * 60 * 1000,
    keepPreviousData: true,
  });
}

export function searchShows(search: string) {
  return request<ShowResponse[]>(
    `/search/shows?q=${encodeURIComponent(search)}`
  );
}
