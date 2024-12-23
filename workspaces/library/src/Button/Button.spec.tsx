import { Button } from "./Button"
import { render, screen } from "@testing-library/react"
import { expect } from "vitest"

describe("Button component", () => {
  it("should render", () => {
    render(<Button>button</Button>)
    expect(screen.getByRole("button", { name: /button/ })).toBeInTheDocument()
  })

  it("should render as a link", () => {
    render(
      <Button as="a" href="/">
        link
      </Button>
    )
    expect(screen.getByRole("link", { name: /link/ })).toBeInTheDocument()
  })
})
