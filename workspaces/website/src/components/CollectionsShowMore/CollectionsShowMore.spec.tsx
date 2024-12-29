import { CollectionShowMore } from "./CollectionShowMore"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { CollectionsContext, type CollectionsContextType } from "../../contexts/CollectionsContext"
import { expect, vitest } from "vitest"

const user = userEvent.setup()

const fetchNextPage = vitest.fn()
const context: CollectionsContextType = {
  setSearch: vitest.fn(),
  hasNextPage: false,
  fetchNextPage,
  data: undefined,
  isFetching: false,
}

describe("CollectionsShowMore", () => {
  it("should not render if no next page", () => {
    render(
      <CollectionsContext.Provider value={context}>
        <CollectionShowMore />
      </CollectionsContext.Provider>
    )

    expect(screen.queryByRole("button")).not.toBeInTheDocument()
  })

  it("should render with default wording", () => {
    context.hasNextPage = true

    render(
      <CollectionsContext.Provider value={context}>
        <CollectionShowMore />
      </CollectionsContext.Provider>
    )

    expect(screen.queryByRole("button")).toBeInTheDocument()
  })

  it("should call fetchNextPage function", async () => {
    render(
      <CollectionsContext.Provider value={context}>
        <CollectionShowMore />
      </CollectionsContext.Provider>
    )

    const button = screen.getByRole("button", { name: "Show next collections" })
    await user.click(button)
    expect(fetchNextPage).toHaveBeenCalled()
  })

  it("should render with loading wording", () => {
    context.isFetching = true

    render(
      <CollectionsContext.Provider value={context}>
        <CollectionShowMore />
      </CollectionsContext.Provider>
    )

    expect(screen.queryByRole("button")).toBeInTheDocument()
  })
})
