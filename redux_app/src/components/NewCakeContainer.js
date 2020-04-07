import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux'
function NewCakeContainer(props) {
    const [number, setNumber] = useState(1)

    return (
        <div>
            <h2>Number of cakes - {props.numofCakes}</h2>
            <input type='text' value={number} onChange={e => setNumber(e.target.value)} />
            <button onClick={() => props.buyCake(number)}>Buy {number} cakes</button>
        </div>
    )
}

//state from redux store is mapped to our component props , in our case we got numOfCakes
const mapStatetoprops = state => {
    return {
        numofCakes: state.cake.numofCakes
    }
}

//maps actioncreator as props in our component 
const mapDispatchtoProps = dispatch => {
    return {
        buyCake: number => dispatch(buyCake(number))
    }
}

//connect function connects react function to the redux store

export default connect(mapStatetoprops, mapDispatchtoProps)(NewCakeContainer)
