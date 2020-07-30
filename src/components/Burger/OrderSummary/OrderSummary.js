import React from 'react'
import Aux from '../../../hoc/aux'

function OrderSummary(props) {
    const ingredientSummary=Object.keys(props.ingredient)
                            .map(x=>{
                                return <li key={x}>{x}: {props.ingredient[x]}</li>
                            })

    return (
        <Aux>
            <h3>Your order is Ready</h3>
            <p>An awesome burger with following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
        </Aux>
    )
}

export default OrderSummary
