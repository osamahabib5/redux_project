//STATE
const redux = require('redux');
const createStore = redux.createStore;
//redux thunk
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')

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
//REDUCER
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
                error: action.payload
            }
    }
}
//async action creator
//the function can also dispatch regular actions
const fetchUsers = () => {   //thunkMiddleware returns a function instead of an object unlike an action creator
    return function (dispatch) {
        dispatch(fetchUsersRequest())     //the function needs not to be pure 
        //this function is used to get from an api and dispatch an action
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
            //response.data is the array of users
            const users = response.data.map(user => user.id)
            dispatch(fetchUsersSuccess(users))
        }).catch(error => {
            //error is the error message
            dispatch(fetchUsersFailure(error.message))
        })
    }
}
//redux store
const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(() => { console.log(store.getState()) })
store.dispatch(fetchUsers())
