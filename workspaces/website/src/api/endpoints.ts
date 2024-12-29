const KEY = "8CdYztey"
const ENDPOINT = `https://www.rijksmuseum.nl/api/en/collection?key=${KEY}`

type Collection = {
  links: {
    self: string
    web: string
  }
  id: string
  objectNumber: string
  title: string
  hasImage: boolean
  principalOrFirstMaker: string
  longTitle: string
  showImage: boolean
  permitDownload: boolean
  webImage: {
    guid: string
    offsetPercentageX: number
    offsetPercentageY: number
    width: number
    height: number
    url: string
  }
  headerImage: {
    guid: string
    offsetPercentageX: number
    offsetPercentageY: number
    width: number
    height: number
    url: string
  }
  productionsPlaces: string[]
}
type Collections = Collection[]
export type GetCollections = {
  collections: Collections
  count: number
}

type GetCollectionsParams = {
  search: string
  pageParam: number
  pageSize: number
}

export const getCollections = async (params: GetCollectionsParams): Promise<GetCollections> => {
  const { pageParam, search, pageSize } = params

  let enhanceEndpoint = `${ENDPOINT}&ps=${pageSize}&p=${pageParam}`

  if (search) {
    enhanceEndpoint = `${enhanceEndpoint}&q=${search}`
  }

  return fetch(enhanceEndpoint, {
    method: "GET",
  })
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      return {
        collections: data.artObjects,
        count: data.count,
      }
    })
    .catch((err) => {
      throw Error(err)
    })
}
