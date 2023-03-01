import React from "react"
import "@styles/ProductCard.scss"

import useGetProducts from "@hooks/useGetProducts"
import ProductItem from "@components/ProductItem"

const API = "https://api.escuelajs.co/api/v1/products"

const ProductCard = () => {

    const products = useGetProducts(API)

    return (
        <section className="main-container">

            <div className="cards-container">   
                {products.map(product => (
                    <ProductItem product={product} key={product.id }/>
                ))}             
            </div>
            
        </section>
    )
}

export default ProductCard