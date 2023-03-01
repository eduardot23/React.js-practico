import React from "react"
import "@styles/ProductDetail.scss"

import ProductInfo from "@components/ProductInfo"

import Close from "@icons/icon_close.png"

const ProductDetail = () => {
    return (
        <aside className="product-detail">
            <div className="product-detail-close">
                <img src={Close} alt="close" />
            </div>
            <ProductInfo/>
        </aside>
    )
}

export default ProductDetail