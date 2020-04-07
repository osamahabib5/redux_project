import { combineReducers } from 'redux';
import cakeReducer from './cakes/cakeReducer';
import IceCreamReducer from './iceCream/iceCreamReducer';

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: IceCreamReducer
})

export default rootReducer