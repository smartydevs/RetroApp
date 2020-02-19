import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  setProfile: ['profile']
})

export const ProfileTypes = Types
export const ProfileActions = Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  firstName: '',
  lastName: '',
  amount: null,
  userId: null
})

/* ------------- Reducers ------------- */

export const setProfile = (state, {profile}) => {
  return state.merge({ ...profile })
}
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_PROFILE]: setProfile
})
