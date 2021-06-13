import React from "react";
import "./menu.css";
import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <nav className="menu">
            <ul className="menu__list">
                <li>
                    <NavLink to="/profile" className="menu__item-link">Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/dialogs" className="menu__item-link">Messages</NavLink>
                </li>
                <li>
                    <NavLink to="/users" className="menu__item-link">Users</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;