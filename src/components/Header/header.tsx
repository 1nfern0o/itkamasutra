import React, {FC} from "react"
import "./header.css";
import {NavLink} from "react-router-dom";

export type MapPropsType = {
    isAuth: boolean,
    login: string | null,
};

export type DispatchPropsType = {
    logout: () => void,
};

const Header: FC<MapPropsType & DispatchPropsType> = (props) => {
    return (
        <header className="header">
            <img className="logo" src="https://image.neoseo.com.ua/image/catalog/foto_statti/topsovetovposozdanijubesplatnogologotipadljasajta/logo-design.png" alt="Logo header"/>
            <div className="login-block">
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink className="login-block__link" to={"/login"}>Login</NavLink>
                }
            </div>
        </header>
    );
}

export default Header;