export const reducer = (state, action) => {
    return {
        ...state,
        [action.type]: action.payload,
    }
}
