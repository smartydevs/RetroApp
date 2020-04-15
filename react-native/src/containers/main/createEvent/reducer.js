export const initialState = {
  startDate: new Date(),
  location: {
    addressName: ''
  }
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
  return {
    ...state,
    [action.type]: action.payload,
  }
}
