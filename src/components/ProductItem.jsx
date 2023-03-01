import React, {useContext} from "react"
import "@styles/ProductItem.scss"

import AppContext from "@context/AppContext"

import AddToCart from "@icons/bt_add_to_cart.svg"
import AddedToCart from "@icons/bt_added_to_cart.svg"


const ProductItem = ({product}) => {

    const {addToCart} = useContext(AppContext)
    const {removeFromCart} = useContext(AppContext)

    const AddClick = item => {
        addToCart(item)

        const add = document.getElementById("add" + product.id)
        const remove = document.getElementById("remove" + product.id)
         
        add.style.display = "none"
        remove.style.display = "flex"        

    }

    const RemoverClick = product => {
        removeFromCart(product)

        const add = document.getElementById("add" + product.id)
        const remove = document.getElementById("remove" + product.id)
         
        add.style.display = "flex"
        remove.style.display = "none"   
    }

    return {
        RemoverClick
    },
    (
        <div className="product-card">
            <img src={product.images[0]} alt={product.title} />
                <div className="product-info">
                    <div>
                        <p>${product.price}</p>
                        <p>{product.title}</p>
                    </div>
                    <figure className="buttonCart" onClick={() =>  AddClick (product)}  id={"add" + product.id} >
                        <img src={AddToCart} alt="añadir al carrito" />
                    </figure>
                    <figure className="buttonCart" onClick={() =>  RemoverClick (product)}  id={"remove" + product.id} >
                        <img src={AddedToCart} alt="remover del carrito" />
                    </figure>
                </div>
        </div>
    ) 
    
}

export default ProductItem