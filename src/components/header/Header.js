import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to = '/'><img src="" className="header__icon" alt="" /></Link>
            </div>
        </div>
    )
}

export default Header