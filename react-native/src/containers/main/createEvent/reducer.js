import { Platform } from 'react-native'

export const initialState = {
  startDate: new Date(),
  location: {
    addressName: ''
  },
  showDate: false,
  showTime: false
}

export const reducer = (state, action) => {
  if (action.type === 'location') {
    return {
      ...state,
      location: {
        addressName: action.payload,
      },
    }
  }
  if (action.type === 'clear') {
    return initialState
  }
  if (action.type === 'toggleTime') {
    return {
      ...state,
      location: {
        ...state.location
      },
      showTime: !state.showTime
    }
  }
  if (action.type === 'toggleDate') {
    return {
      ...state,
      location: {
        ...state.location
      },
      showDate: !state.showDate
    }
  }
  if (action.type === 'setDate') {
    const newDate = new Date(action.payload.getFullYear(), action.payload.getMonth(), action.payload.getDate(), state.startDate.getHours(), state.startDate.getMinutes());
    return {
      ...state,
      location: {
        ...state.location
      },
      startDate: newDate,
      showDate: Platform.OS === "ios"
    }
  }
  if (action.type === 'setTime') {
    const newDate = new Date(state.startDate.getFullYear(), state.startDate.getMonth(), state.startDate.getDate(), action.payload.getHours(), action.payload.getMinutes())
    return {
      ...state,
      location: {
        ...state.location,
      },
      startDate: newDate,
      showTime: Platform.OS === "ios"
    }
  }
  return {
    ...state,
    [action.type]: action.payload,
  }
}
