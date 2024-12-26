import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import { BrowserRouter, Routes, Route } from "react-router"

import "./index.css"
import { LandingPage } from "./components/LandingPage/LandingPage"
import "@fontsource-variable/inter"
import { Collections } from "./components/Collections/Collections"
import { Layout } from "./components/Layout/Layout"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<Layout />}>
          <Route path="/collections" element={<Collections />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
