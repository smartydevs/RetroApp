import gql from 'graphql-tag'

const SAVE_MEMBER_AVATAR = gql`
  mutation saveMemberAvatar($avatar: Upload!) {
    saveMemberAvatar(avatar: $avatar)
  }
`

export { SAVE_MEMBER_AVATAR }
