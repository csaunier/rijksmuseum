import { type FunctionComponent, type PropsWithChildren, useState } from "react"
import { CollectionsContext } from "./CollectionsContext"
import { useGetCollections } from "../hooks/useGetCollections"
import { useSearchParams } from "react-router-dom"

export const CollectionsProvider: FunctionComponent<PropsWithChildren> = (props) => {
  const { children } = props
  const [searchParams, setSearchParams] = useSearchParams()
  const [search, setSearch] = useState(searchParams.get("query") || "")

  const pageSize = 20

  const { data, error, isFetching, fetchNextPage, hasNextPage } = useGetCollections({
    search,
    pageSize,
  })

  const enhancedSetSearch = (value: string) => {
    setSearch(value)
    setSearchParams(value ? { query: value } : {})
  }

  const context = {
    data,
    error,
    isFetching,
    fetchNextPage,
    hasNextPage,
    setSearch: enhancedSetSearch,
  }

  return <CollectionsContext.Provider value={context}>{children}</CollectionsContext.Provider>
}
