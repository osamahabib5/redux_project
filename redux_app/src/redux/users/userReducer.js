import {
    FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS
} from './UserTypes'
const initialState = {
    loading: false,
    users: [],
    error: ''
}
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:  //fetch the data
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:   //load the users
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:   //load the error
            return {
                loading: false,
                users: [],
                error: action.payload
            }
        default: return state
    }
}
export default userReducer;
