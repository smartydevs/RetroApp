import ApiClient from '../../client'
import { GET_CATEGORIES } from './queries'
import { ADD_MEMBER_CATEGORIES } from './mutations'

const { currentInstance } = ApiClient

export const getCategories = async () => {
  try {
    const { data } = await currentInstance().query({
      query: GET_CATEGORIES,
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

export const addMemberCategories = async ({ categories, email }) => {
  try {
    const { data } = await currentInstance().mutate({
      mutation: ADD_MEMBER_CATEGORIES,
      variables: {
        categories,
        email,
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
