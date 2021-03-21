import React from "react";
import "./dialogs.css";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let onSendMessageCLick = () => {
        props.store.dispatch(sendMessageCreator());
    };

    let onNewMessageChange = (body) => {
       props.store.dispatch(updateNewMessageBodyCreator(body));
    };

    return (<Dialogs
        updateNewMessageBody={onNewMessageChange}
        sendMessage={onSendMessageCLick}
        dialogsPage={state}
    />)
}

export default DialogsContainer;