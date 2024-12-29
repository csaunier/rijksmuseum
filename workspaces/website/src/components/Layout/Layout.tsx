import type { FunctionComponent } from "react"
import { Header } from "../Header/Header"
import { Outlet } from "react-router"

export const Layout: FunctionComponent = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
