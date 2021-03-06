import React from "react";
import "./message.css";

const MessageItem = (props) => {
    return (
        <div className="messages__item">
            <span>{props.message}</span>
        </div>
    )
}

export default MessageItem;