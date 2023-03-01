import React from "react"
import "@styles/MyOrders.scss"

import Order from "@components/Order"

const MyOrders = () => {
    return (
        <div className="my-order">
            <div className="my-order-container">
                <h1 className="title">My orders</h1>

                <div className="my-order-content">
                    <Order/>
                </div>
            </div>
        </div>
    )
}

export default MyOrders