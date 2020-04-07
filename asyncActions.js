//STATE
const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    loading: false,
    users: [],
    error: ''
}

//ACTIONS
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

//ACTION CREATORS 
const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}
const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}
const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

//REDUCERS
const reducer = (state = initialState, action) => {
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
                error: payload.error
            }
    }
}

const store = createStore(store)
