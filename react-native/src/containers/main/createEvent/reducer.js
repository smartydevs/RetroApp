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
      location : {
        ...state.location
      },
      showTime: !state.showTime
    }
  }
  if (action.type === 'toggleDate') {
    return {
      ...state,
      location : {
        ...state.location
      },
      showDate: !state.showDate
    }
  }
  if (action.type === 'startDate') {
    return  {
      ...state,
      location : {
        ...state.location
      },
      startDate: action.payload,
      showDate: false,
      showTime: false
    }
  }
  return {
    ...state,
    [action.type]: action.payload,
  }
}
