import { CollectionsListing } from "./CollectionsListing"
import { render, screen } from "@testing-library/react"
import { CollectionsContext, type CollectionsContextType } from "../../contexts/CollectionsContext"
import { expect, vitest } from "vitest"

const context: CollectionsContextType = {
  setSearch: vitest.fn(),
  hasNextPage: false,
  fetchNextPage: vitest.fn(),
  data: undefined,
  error: null,
  isFetching: false,
}

describe("CollectionsListing", () => {
  it("should render loading state", () => {
    render(
      <CollectionsContext.Provider value={context}>
        <CollectionsListing />
      </CollectionsContext.Provider>
    )

    expect(screen.getByText("...Loading")).toBeInTheDocument()
  })

  it("should render error state", () => {
    context.error = Error("Error 2024 !")

    render(
      <CollectionsContext.Provider value={context}>
        <CollectionsListing />
      </CollectionsContext.Provider>
    )

    expect(screen.getByText(/Error 2024 !/)).toBeInTheDocument()
  })

  it("should render empty state", () => {
    context.error = null
    context.data = { pages: [{ collections: [], count: 0 }], pageParams: [] }

    render(
      <CollectionsContext.Provider value={context}>
        <CollectionsListing />
      </CollectionsContext.Provider>
    )

    expect(screen.getByText("No collections to display")).toBeInTheDocument()
  })

  it("should render collections", () => {
    context.data = {
      pages: [
        {
          collections: [
            {
              title: "title",
              hasImage: true,
              headerImage: {
                guid: "guid",
                height: 100,
                url: "url",
                offsetPercentageX: 0,
                offsetPercentageY: 0,
                width: 100,
              },
              links: {
                self: "self",
                web: "web",
              },
              longTitle: "longTitle",
              objectNumber: "0",
              permitDownload: true,
              principalOrFirstMaker: "principalOrFirstMaker",
              productionsPlaces: ["productionsPlaces"],
              showImage: true,
              webImage: {
                guid: "guid",
                height: 100,
                url: "url",
                offsetPercentageX: 0,
                offsetPercentageY: 0,
                width: 100,
              },
              id: "0",
            },
          ],
          count: 1,
        },
      ],
      pageParams: [],
    }

    render(
      <CollectionsContext.Provider value={context}>
        <CollectionsListing />
      </CollectionsContext.Provider>
    )

    expect(screen.getByText("longTitle")).toBeInTheDocument()
    expect(screen.getByRole("img", { name: "title" })).toBeInTheDocument()
  })
})
