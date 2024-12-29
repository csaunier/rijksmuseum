import { CollectionsSearch } from "./CollectionsSearch"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { CollectionsContext, type CollectionsContextType } from "../../contexts/CollectionsContext"
import { expect, vitest } from "vitest"
import { BrowserRouter } from "react-router"

const user = userEvent.setup()

const setSearch = vitest.fn()
const context: CollectionsContextType = {
  setSearch,
  hasNextPage: false,
  fetchNextPage: vitest.fn(),
  data: undefined,
  isFetching: false,
}

describe("CollectionsSearch", () => {
  it("should render", () => {
    render(
      <BrowserRouter>
        <CollectionsContext.Provider value={context}>
          <CollectionsSearch />
        </CollectionsContext.Provider>
      </BrowserRouter>
    )

    expect(screen.getByRole("button", { name: "Search" })).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toBeInTheDocument()
  })

  it("should call setSearch function", async () => {
    render(
      <BrowserRouter>
        <CollectionsContext.Provider value={context}>
          <CollectionsSearch />
        </CollectionsContext.Provider>
      </BrowserRouter>
    )

    const button = screen.getByRole("button", { name: "Search" })
    const textBox = screen.getByRole("textbox")

    await user.type(textBox, "rembrandt")
    await user.click(button)

    expect(setSearch).toHaveBeenCalledWith("rembrandt")
  })
})
