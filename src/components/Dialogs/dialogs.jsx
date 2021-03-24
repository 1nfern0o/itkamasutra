import React from "react";
import "./dialogs.css";
import DialogItem from "./Sections/DialogItem/dialogItem.jsx";
import MessageItem from "./Sections/Message/message.jsx";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);
    let messageElements = state.messagesData.map(message => <MessageItem message={message.message} key={message.id} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageCLick = () => {
        props.sendMessage();
    };

    let onNewMessageChange = (e) => {
       let body = e.target.value;
       props.updateNewMessageBody(body);
    };

    return (
        <div className="dialogs">
            <div className="dialogs__items">
                { dialogsElements }
            </div>
            <div className="messages">
                <div>{ messageElements }</div>
                <div>
                    <div>
                        <textarea value={newMessageBody}
                                  onChange={onNewMessageChange}
                                  placeholder="Enter your message"/>
                    </div>
                    <div>
                        <button onClick={onSendMessageCLick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;