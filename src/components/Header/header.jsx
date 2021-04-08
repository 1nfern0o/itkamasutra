import React from "react"
import "./header.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className="header">
            <img className="logo" src="https://image.neoseo.com.ua/image/catalog/foto_statti/topsovetovposozdanijubesplatnogologotipadljasajta/logo-design.png" alt="Logo header"/>
            <div className="login-block">
                {props.isAuth
                    ? props.login
                    : <NavLink className="login-block__link" to={"/login"}>Login</NavLink>
                }
            </div>
        </header>
    );
}

export default Header;