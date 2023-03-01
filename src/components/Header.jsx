import React, {useState, useContext} from "react"
import "@styles/Header.scss"

import DesktopMenu from "@components/DesktopMenu"
import MobileMenu from "@components/MobileMenu"
import ShoppingCart from "@containers/ShoppingCart"

import AppContext from "@context/AppContext"

import iconMenu from "@icons/icon_menu.svg"
import Logo from "@logos/logo_yard_sale.svg"
import shoppingCart from "@icons/icon_shopping_cart.svg"

const Header = () => {

    const [toggleOrders, setToggleOrders ] = useState(false)
    const [dToggle, setDToggle] = useState(false)
    const [mToggle, setMToggle] = useState(false)

    const {state} = useContext(AppContext)

    const DesktopHandleToggle = () => {
        setDToggle(!dToggle)
    }

    const MobileHandleToggle = () => {
        setMToggle(!mToggle)
    }

    const OrdersHandleToggle = () => {
        setToggleOrders(!toggleOrders)
    }

    return (
        <nav>
            <img src={iconMenu} alt="menu" className="menu" onClick={MobileHandleToggle} />
            {mToggle && <MobileMenu/>}

            <div className="navbar-left">
                <img src={Logo} alt="logo" className="logoHeader" />

                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Furnitures</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </div>

            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={DesktopHandleToggle}>platzi@example.com</li>
                    
                    <li className="navbar-shopping-cart" onClick={OrdersHandleToggle}>
                        <img src={shoppingCart} alt="shopping cart"/>
                        {state.cart.length > 0 ? <div>{state.cart.length}</div>  : null }
                    </li>
                    {toggleOrders && <ShoppingCart  onClose={OrdersHandleToggle} />}
                </ul>
            </div>   
            {dToggle && <DesktopMenu/>}         
        </nav>
    )
}

export default Header