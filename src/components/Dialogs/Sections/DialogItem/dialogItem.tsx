import React, {FC} from "react";
import "./dialogItem.css";
import {NavLink} from "react-router-dom";

type PropsType = {
    id: number,
    name: string
};

const DialogItem: FC<PropsType> = (props) => {
    return (
        <div className="dialogs__item">
            <NavLink to={`dialogs/${props.id}`}>{props.name} </NavLink>
        </div>
    )
}

export default DialogItem;