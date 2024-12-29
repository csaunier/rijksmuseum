import { type FunctionComponent, useContext } from "react"
import { Button } from "@rijksmuseum/library/Button"
import { CollectionsContext } from "../../contexts/CollectionsContext"

import styles from "./CollectionsShowMore.module.css"

export const CollectionShowMore: FunctionComponent = () => {
  const { fetchNextPage, hasNextPage, isFetching } = useContext(CollectionsContext)

  const handleNextPage = () => {
    fetchNextPage()
  }

  if (!hasNextPage) return null

  return (
    <div className={styles.wrapper}>
      <Button onClick={handleNextPage} disabled={isFetching}>
        {isFetching ? "Loading next collections" : "Show next collections"}
      </Button>
    </div>
  )
}
