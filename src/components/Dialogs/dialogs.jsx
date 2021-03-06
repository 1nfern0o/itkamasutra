import React from "react";
import "./dialogs.css";
import DialogItem from "./Sections/DialogItem/dialogItem.jsx";
import MessageItem from "./Sections/Message/message.jsx";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messageElements = state.messagesData.map(message => <MessageItem message={message.message} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageCLick = () => {
        props.store.dispatch(sendMessageCreator());
    };

    let onNewMessageChange = (e) => {
       let body = e.target.value;
       props.store.dispatch(updateNewMessageBodyCreator(body));
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