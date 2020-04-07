import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream, buyCake } from '../redux'
function ItemContainer(props) {
    return (
        <div>
            <h2>Item -{props.item} </h2>
            <button onClick={props.buyItem} >Buy Items</button>
        </div>
    )
}
const mapStatetoProps = (state, ownProps) => {  //own props define props that own component have
    const itemState = ownProps.cake ? state.cake.numofCakes : state.icecream.numofIceCreams
    return {
        item: itemState
    }
}

const dispatchtoProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake ?
        () => dispatch(buyCake()) : () => dispatch(buyIceCream())
    return {
        buyItem: dispatchFunction
    }
}

export default connect(mapStatetoProps, dispatchtoProps)(ItemContainer)
