import { type FunctionComponent, useContext } from "react"
import { CollectionsContext } from "../../contexts/CollectionsContext"

export const CollectionsListing: FunctionComponent = () => {
  const { data } = useContext(CollectionsContext)

  if (!data) {
    return "...Loading"
  }

  if (data?.pages[0]?.count === 0) {
    return "No collections to display"
  }

  return (
    <>
      <ul>
        {data?.pages.map((page) => {
          return page.collections.map((collection) => {
            return <li key={collection.objectNumber}>{collection.title}</li>
          })
        })}
      </ul>
    </>
  )
}
