import type { FunctionComponent, PropsWithChildren } from "react"

import styles from "./EmptyStates.module.css"

export const EmptyStates: FunctionComponent<PropsWithChildren> = (props) => {
  const { children } = props

  return <div className={styles.block}>{children}</div>
}
