import type { FunctionComponent, PropsWithChildren } from "react"
import { Header } from "../Header/Header"

export const Layout: FunctionComponent<PropsWithChildren> = (props) => {
  const { children } = props
  return (
    <>
      <Header />
      {children}
    </>
  )
}
