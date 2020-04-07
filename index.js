const redux = require('redux');
const reduxLogger = require('redux-logger');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware; //apply middleware

//for combining multiple reducers
const BUY_CAKE = 'BUY_CAKE'; //ACTION
const BUY_ICECREAM = 'BUY_ICECREAM'; //ACTION
function buyCake() {  //buyCake is an action creator which returns an action object that has a type in this
    //case BUY_CAKE
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

function buyIcecream() {
    return {
        type: BUY_ICECREAM
    }
}


//for multiple reducers
const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIcecreams: 20
};

const cakeReducer = (state = initialCakeState, action) => {     //reducer function
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,    //making a copy of the objecta nd then update it
            numOfCakes: state.numOfCakes - 1   //using single reducer to handle multiple actions
        }
        default: return state
    }

}

const IceCreamReducer = (state = initialIceCreamState, action) => {     //reducer function
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIcecreams: state.numOfIcecreams - 1
        }
        default: return state
    }

}

//store of the state. It accepts the parameter that is the reducer method


const rootReducer = combineReducers({  //this methd accepts an object
    cake: cakeReducer,   //defining key
    icecream: IceCreamReducer
})
const store = createStore(rootReducer, applyMiddleware(logger));
console.log('Initial State', store.getState()); //get state 
//below line outputs the store anytime the store updates
store.subscribe(() => { })  //step 4
//step 3
const unsubscribe = store.dispatch(buyCake()) //it will take action creator as the parameter
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
unsubscribe