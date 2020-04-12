export const initialState = {
  startDate: new Date(),
}

export const reducer = (state, action) => {
  console.log('type', action.type)
  console.log('payload', action.payload)
  if (action.type === 'location') {
    return {
      ...state,
      location: {
        addressName: action.payload,
      },
    }
  }
  return {
    ...state,
    [action.type]: action.payload,
  }
}
