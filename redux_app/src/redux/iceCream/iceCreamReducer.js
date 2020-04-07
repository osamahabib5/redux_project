import BUY_ICECREAM from './iceCreamTypes'
const initialState = {
    numofIceCreams: 10
}
const IceCreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numofIceCreams: state.numofIceCreams - 1
        }
        default: return state
    }
}

export default IceCreamReducer
