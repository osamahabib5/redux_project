import React from 'react'
import { connect } from 'react-redux'
function ItemContainer(props) {
    return (
        <div>
            <h2>Item -{props.item} </h2>
        </div>
    )
}
const mapStatetoProps = (state, ownProps) => {  //own props define props that own component have
    const itemState = ownProps.cake ? state.cake.numofCakes : state.icecream.numofIceCreams
    return {
        item: itemState
    }
}

export default connect(mapStatetoProps)(ItemContainer)
