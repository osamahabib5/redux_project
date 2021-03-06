import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux'
function CakeContainer(props) {
    return (
        <div>
            <h2>Number of cakes - {props.numofCakes}</h2>
            <button onClick={props.buyCake}>Buy cakes</button>
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
        buyCake: () => dispatch(buyCake())
    }
}

//connect function connects react function to the redux store

export default connect(mapStatetoprops, mapDispatchtoProps)(CakeContainer)
