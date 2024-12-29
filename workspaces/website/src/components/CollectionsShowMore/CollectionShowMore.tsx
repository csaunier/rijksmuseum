import { type FunctionComponent, useContext } from "react"
import { Button } from "@rijksmuseum/library/Button"
import { CollectionsContext } from "../../contexts/CollectionsContext"

export const CollectionShowMore: FunctionComponent = () => {
  const { fetchNextPage, hasNextPage, isFetching } = useContext(CollectionsContext)

  const handleNextPage = () => {
    fetchNextPage()
  }

  if (!hasNextPage) return null
  return (
    <Button onClick={handleNextPage} disabled={isFetching}>
      {isFetching ? "Loading next collections" : "Show next collections"}
    </Button>
  )
}
