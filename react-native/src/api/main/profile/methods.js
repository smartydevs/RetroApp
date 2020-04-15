import ApiClient from '../../client'
import { SAVE_MEMBER_AVATAR, UPDATE_USER_INFO } from './mutations'
import { GET_USER_INFO } from './queries'

const { currentInstance } = ApiClient

const getUserInfo = async userId => {
  try {
    const { data } = await currentInstance().query({
      query: GET_USER_INFO,
      variables: { userId },
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

const saveMemberAvatar = async input => {
  try {
    const { data } = await currentInstance().mutate({
      mutation: SAVE_MEMBER_AVATAR,
      variables: {
        avatar: input,
      },
    })

    return {
      data,
      isOk: true,
    }
  } catch (error) {
    return {
      isOk: false,
      data: error,
    }
  }
}

const updateUserInfo = async userInfo => {
  try {
    const { data } = await currentInstance().mutate({
      mutation: UPDATE_USER_INFO,
      variables: { userInfo },
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

export { saveMemberAvatar, updateUserInfo, getUserInfo }
