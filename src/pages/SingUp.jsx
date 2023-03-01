import React from "react"
import "@styles/SingUp.scss"

const SingUp = () => {
    return (
        <div className="sing-up">
            <div className="sing-up-container">
                <h1 className="title">Sing Up</h1>

                <form action="/" className="form">
                    <div>
                        <label htmlFor="name" className="label">Name</label>
                        <input type="text" id="name" placeholder="Teff" className="input input-name" />

                        <label htmlFor="email" className="label">Email</label>
                        <input type="text" id="email" placeholder="platzi@example.com" className="input input-email" />

                        <label htmlFor="password" className="label">Password</label>
                        <input type="password" id="password" placeholder="*********" className="input input-password" />
                    </div>

                    <input type="submit" value="Create" className="primary-button sing-up-button" />
                </form>
            </div>
        </div>
    )
}

export default SingUp