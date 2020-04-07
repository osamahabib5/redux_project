import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux/index';
function HooksCakeContainer() {
    const numofCakes = useSelector(state => state.cake.numofCakes)
    const dispatch = useDispatch()    //returns a reference for redux function from the redux store
    return (
        <div>
            <h2>No of cakes - {numofCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cakes</button>
        </div>
    )
}

export default HooksCakeContainer
