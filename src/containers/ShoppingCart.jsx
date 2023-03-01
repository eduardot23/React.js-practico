import React, {useState, useContext} from "react"
import "@styles/ShoppingCart.scss"
import AppContext from "@context/AppContext"

import OrderItem from "@components/OrderItem"

import Arrow from "@icons/flechita.svg"

const ShoppingCart = (props) => {

    const {state} = useContext(AppContext)

    const sumTotal = () => {
        const reducer = (acumulador, currentValue) => acumulador + currentValue.price
        const sum = state.cart.reduce(reducer, 0)
        return sum
    }

    return (
        <aside className="product-detail">
            <div className="title-container">
                <img className="arrow" src={Arrow} alt="arrow" onClick={props.onClose} />
                <p className="title">Shopping cart</p>
            </div>

            <div className="my-order-content">

                {state.cart.map((product) => (
                    <OrderItem product={product} key={product.id}    />
                ))}

            </div>    
            <div className="order">

                <p>
                    <span>Total</span>
                </p>
                <p>
                    ${sumTotal()}
                </p>
               
            </div>

            <button className="primary-button">
                    Checkout
            </button>
        </aside>
    )
}

export default ShoppingCart