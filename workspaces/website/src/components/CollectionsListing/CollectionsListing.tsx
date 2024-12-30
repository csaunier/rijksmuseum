import { type FunctionComponent, useContext } from "react"
import { CollectionsContext } from "../../contexts/CollectionsContext"
import { EmptyStates } from "../EmptyStates/EmptyStates"

import styles from "./CollectionsListing.module.css"

export const CollectionsListing: FunctionComponent = () => {
  const { data, error } = useContext(CollectionsContext)

  // API is in error
  if (error) {
    return (
      <EmptyStates>
        An error occurred. Please don't contact me !
        <br />
        API respond : {error.message}
      </EmptyStates>
    )
  }

  // Api has not yet answered
  if (!data) {
    return <EmptyStates>...Loading</EmptyStates>
  }

  // Api answers no collections
  if (data?.pages[0]?.count === 0) {
    return <EmptyStates>No collections to display</EmptyStates>
  }

  return (
    <ul className={styles.wrapper}>
      {data?.pages.map((page) => {
        return page.collections.map((collection) => {
          return (
            <li className={styles.item} key={collection.objectNumber}>
              <a href={collection.links.web}>
                <figure className={styles.imageWrapper}>
                  {collection.hasImage && collection.showImage && (
                    <img
                      className={styles.image}
                      src={collection.webImage.url}
                      alt={collection.title}
                    />
                  )}
                  <figcaption className={styles.imageTitle}>{collection.longTitle}</figcaption>
                </figure>
              </a>
            </li>
          )
        })
      })}
    </ul>
  )
}
