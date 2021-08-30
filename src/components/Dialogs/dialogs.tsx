import React, {FC} from "react";
import "./dialogs.css";
import DialogItem from "./Sections/DialogItem/dialogItem";
import MessageItem from "./Sections/Message/message";
import AddDialogFormRedux from "./Sections/AddPostForm/AddDialogForm";
import { InitialStateType } from "../../redux/dialogs-reducer";

type OwnPropsType = {
    dialogsPage: InitialStateType
    sendMessage: (messageText: string) => void
};
export type NewMessageFormValuesType = {
    newPostText: string
};

const Dialogs: FC<OwnPropsType> = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);
    let messageElements = state.messagesData.map(message => <MessageItem message={message.message} key={message.id} />);

    let addNewMessage = (values: {newPostText: string}) => {
        props.sendMessage(values.newPostText);
    };

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