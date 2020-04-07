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

//state from redux store is mapped to our component props called numofCakes
const mapStatetoprops = state => {
    return {
        numofCakes: state.numofCakes
    }
}

//map dispatch of actioncreator to prop in our component 
const mapDispatchtoProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

//connect functions to react by using connect function 

export default connect(mapStatetoprops, mapDispatchtoProps)(CakeContainer)
