import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import "@styles/global.css"

import Layout from "@containers/Layout"
import AppContext from "@context/AppContext"
import useInitialState from "@hooks/useInitialState"

import Home from "@pages/Home"
import NotFound from "@pages/NotFound"
import Login from "@pages/Login"
import PasswordRecovery from "@pages/PasswordRecovery"
import NewPassword from "@pages/NewPassword"
import SingUp from "@pages/SingUp"
import MyAccount from "@pages/MyAccount"
import MyOrders from "@pages/MyOrders"
import SendEmail from "@pages/SendEmail"
import CheckOut from "@pages/CheckOut"



const App = () => {

    const initialState = useInitialState()

    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route exact path="/" element={<Home/>} />
                        <Route exact path="/login" element={<Login/>} />
                        <Route exact path="/password-recovery" element={<PasswordRecovery/>} />
                        <Route exact path="/new-password" element ={<NewPassword/>}  />
                        <Route exact path="/send-email" element = {<SendEmail/>}/>
                        <Route exact path="/sing-up" element={<SingUp/>} />
                        <Route exact path="/my-account" element= {<MyAccount/>} />
                        <Route exact path="/my-orders" element= {<MyOrders/>} />
                        <Route exact path="/check-out" element= {<CheckOut/>} />
                        <Route path="*" element={<NotFound/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export default App