import React, {useContext} from "react"
import AppContext from "@context/AppContext"
import ProductItem from "@components/ProductItem"

import "@styles/OrderItem.scss"

import Close from "@icons/icon_close.png"

const OrderItem = (props) => {

    const {product, indexValue} = props

    const {removeFromCart} = useContext(AppContext)

    const handleRemove = product => {
        removeFromCart(product)

        const add = document.getElementById("add" + product.id)
        const remove = document.getElementById("remove" + product.id)
         
        add.style.display = "flex"
        remove.style.display = "none"   
    }

    return (
        <div className="order-item">
            <figure>
                <img src= {product.images[0]} alt="product-image" />
            </figure>
            <p>{product.title}</p>
            <p>${product.price}</p>
            <img className="closeButton" src={Close} alt="close" onClick={() => handleRemove(product)} />
        </div>
    )
}

export default OrderItem