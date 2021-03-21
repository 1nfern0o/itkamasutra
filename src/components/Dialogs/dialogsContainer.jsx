import React from "react";
import "./dialogs.css";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {

    return <StoreContext.Consumer>
        { (store) => {
            let onSendMessageCLick = () => {
                store.dispatch(sendMessageCreator());
            };

            let onNewMessageChange = (body) => {
                store.dispatch(updateNewMessageBodyCreator(body));
            };
            return <Dialogs
                updateNewMessageBody={onNewMessageChange}
                sendMessage={onSendMessageCLick}
                dialogsPage={store.getState().dialogsPage}
            />
        }
    }
        </StoreContext.Consumer>

};

export default DialogsContainer;