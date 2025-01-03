import { createContext } from "react"
import type { GetCollections } from "../api/endpoints"
import type {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query"

export type CollectionsContextType = {
  data: InfiniteData<GetCollections, unknown> | undefined
  error: Error | null
  isFetching: boolean
  fetchNextPage: (
    options?: FetchNextPageOptions
  ) => Promise<InfiniteQueryObserverResult<InfiniteData<GetCollections, unknown>, Error>>
  hasNextPage: boolean
  setSearch: (value: string) => void
}
export const CollectionsContext = createContext<CollectionsContextType>({
  data: undefined,
  error: null,
  isFetching: false,
  fetchNextPage: () => Promise.reject(),
  hasNextPage: false,
  setSearch: () => {},
})
