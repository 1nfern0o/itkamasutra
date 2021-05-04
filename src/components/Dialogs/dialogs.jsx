import React from "react";
import "./dialogs.css";
import DialogItem from "./Sections/DialogItem/dialogItem.jsx";
import MessageItem from "./Sections/Message/message.jsx";
import {Redirect} from "react-router-dom";
import AddDialogFormRedux from "./Sections/AddPostForm/AddDialogForm";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);
    let messageElements = state.messagesData.map(message => <MessageItem message={message.message} key={message.id} />);

    let addNewMessage = (values) => {
        props.sendMessage(values.newPostText);
    };

    if(!props.isAuth) return <Redirect to="/login"/>;

    return (
        <div className="dialogs">
            <div className="dialogs__items">
                { dialogsElements }
            </div>
            <div className="messages">
                <div>{ messageElements }</div>
                <AddDialogFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}



export default Dialogs;