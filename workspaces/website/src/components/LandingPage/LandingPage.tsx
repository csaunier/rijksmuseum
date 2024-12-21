import type { FunctionComponent } from "react"
import LogoComponent from "../../assets/logo.svg?react"

import styles from "./LandingPage.module.css"
import { Button } from "@rijksmuseum/library/Button"

export const LandingPage: FunctionComponent = () => {
  return (
    <main className={styles.wrapper}>
      <h1 className={styles.title}>
        Welcome to <span className={styles.highlight}>Rijks Museum</span>
        <br />
        <span className={styles.minor}>
          for <span className={styles.accent}>WorkLife</span>
        </span>
      </h1>
      <Button as="a" href="/collection">
        Let's explore
      </Button>
      <LogoComponent className={styles.logo} aria-hidden />
    </main>
  )
}
