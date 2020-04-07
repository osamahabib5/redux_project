import { combineReducers } from 'redux';
import cakeReducer from './cakes/cakeReducer';
import IceCreamReducer from './iceCream/iceCreamReducer';
import userReducer from './users/userReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: IceCreamReducer,
    users: userReducer
})

export default rootReducer