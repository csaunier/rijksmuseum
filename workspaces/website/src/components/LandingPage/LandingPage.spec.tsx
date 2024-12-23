import { LandingPage } from "./LandingPage"
import { render, screen } from "@testing-library/react"
import { expect } from "vitest"

describe("LandingPage component", () => {
  it("should render", () => {
    render(<LandingPage />)
    screen.getByRole("heading", { name: /Welcome to Rijks Museum for WorkLife/, level: 1 })
    expect(
      screen.getByRole("heading", { name: /Welcome to Rijks Museum for WorkLife/, level: 1 })
    ).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /Let's explore/ }))
  })
})
