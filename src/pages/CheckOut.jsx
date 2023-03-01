import React from "react"
import "@styles/CheckOut.scss"

import ShoppingCartItem from "@components/ShoppingCartItem"

const MyOrder = () => {
    return (
        <div className="checkout">
            <div className="checkout-container">
                <h1 className="title">My order</h1>

                <div className="checkout-content">
                    <div className="order">
                        <p>
                            <span>03.25.21</span>
                            <span>6 articles</span>
                        </p>
                        <p>$560.00</p>
                    </div>
                    <ShoppingCartItem/>

                </div>
            </div>
        </div>
    )
}

export default MyOrder