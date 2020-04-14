import gql from 'graphql-tag'

const SAVE_MEMBER_AVATAR = gql`
  mutation saveMemberAvatar($avatar: Upload!) {
    saveMemberAvatar(avatar: $avatar)
  }
`

const UPDATE_USER_INFO = gql`
  mutation updateUserInfo($userInfo: UserInfoInput!) {
    updateUserInfo(userInfo: $userInfo)
  }
`

export { SAVE_MEMBER_AVATAR, UPDATE_USER_INFO }
