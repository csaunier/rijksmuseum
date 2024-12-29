import { type FunctionComponent } from "react"
import { CollectionsSearch } from "../CollectionsSearch/CollectionsSearch"
import { CollectionShowMore } from "../CollectionsShowMore/CollectionShowMore"
import { CollectionsListing } from "../CollectionsListing/CollectionsListing"
import { CollectionsProvider } from "../../contexts/CollectionsProvider"

export const Collections: FunctionComponent = () => {
  return (
    <CollectionsProvider>
      <h1>Collections</h1>
      <CollectionsSearch />
      <CollectionsListing />
      <CollectionShowMore />
    </CollectionsProvider>
  )
}
