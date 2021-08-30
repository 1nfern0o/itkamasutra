import React, {FC} from "react";
import "./message.css";

type PropsType = {
    message: string
};

const MessageItem: FC<PropsType> = (props) => {
    return (
        <div className="messages__item">
            <span>{props.message}</span>
        </div>
    )
}

export default MessageItem;