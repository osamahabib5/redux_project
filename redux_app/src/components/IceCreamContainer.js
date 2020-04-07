import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from '../redux'

function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of Ice Creams - {props.numofIceCreams}</h2>
            <button onClick={props.buyIceCream}>Buy IceCreams</button>
        </div>
    )
}

//state from redux store is mapped to our component props , in our case we got numOfCakes
const mapStatetoprops = state => {
    return {
        numofIceCreams: state.icecream.numofIceCreams
    }
}

//maps actioncreator as props in our component 
const mapDispatchtoProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

//connect function connects react function to the redux store

export default connect(mapStatetoprops, mapDispatchtoProps)(IceCreamContainer)
