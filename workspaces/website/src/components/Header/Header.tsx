import LogoComponent from "../../assets/logo.svg?react"
import { NavLink } from "react-router"

import styles from "./Header.module.css"

export const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink className={styles.link} to="/">
        <LogoComponent className={styles.logo} aria-label="Home page" />
      </NavLink>
    </header>
  )
}
