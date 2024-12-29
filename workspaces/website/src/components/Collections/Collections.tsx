import { type FunctionComponent } from "react"
import { CollectionsSearch } from "../CollectionsSearch/CollectionsSearch"
import { CollectionShowMore } from "../CollectionsShowMore/CollectionShowMore"
import { CollectionsListing } from "../CollectionsListing/CollectionsListing"
import { CollectionsProvider } from "../../contexts/CollectionsProvider"

import styles from "./Collections.module.css"

export const Collections: FunctionComponent = () => {
  return (
    <main className={styles.main}>
      <CollectionsProvider>
        <h1 className={styles.title}>Collections</h1>
        <CollectionsSearch />
        <CollectionsListing />
        <CollectionShowMore />
      </CollectionsProvider>
    </main>
  )
}
