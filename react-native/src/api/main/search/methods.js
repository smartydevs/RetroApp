import ApiClient from '../../client'
import { SEARCH_EVENTS } from './queries'

const { currentInstance } = ApiClient

const searchEvents = async searchInput => {
  try {
    const { data } = await currentInstance().query({
      query: SEARCH_EVENTS,
      variables: {
        searchInput,
      },
    })

    return {
      isOk: true,
      data,
    }
  } catch (error) {
    return {
      isOk: false,
      data: error,
    }
  }
}

export { searchEvents }
