import { useInfiniteQuery } from "@tanstack/react-query"
import { getCollections } from "../api/endpoints"

type UseGetCollections = {
  search: string
  pageSize: number
}
export const useGetCollections = (params: UseGetCollections) => {
  const { search, pageSize } = params

  return useInfiniteQuery({
    queryKey: ["collections", search],
    queryFn: (params) => {
      return getCollections({ search, pageParam: params.pageParam, pageSize })
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.count < pageSize || lastPage.count < lastPageParam * pageSize) return null
      return lastPageParam + 1
    },
    refetchOnWindowFocus: false,
    staleTime: 1_000 * 60,
    gcTime: 1_000 * 120,
  })
}
