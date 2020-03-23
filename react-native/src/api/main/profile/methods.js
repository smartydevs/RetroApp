import ApiClient from '../../client'
import { SAVE_MEMBER_AVATAR } from './mutations'

const { currentInstance } = ApiClient

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

export { saveMemberAvatar }
