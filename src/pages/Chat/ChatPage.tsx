import { Button } from "antd";
import React, {FC, useEffect, useState } from "react";
import { ChatMessageType } from "../../api/chat-api";
import {useDispatch, useSelector} from "react-redux";
import {sendMessage, startMessagesListening, stopMessagesListening} from "../../redux/chat-reducer";
import {AppStateType} from "../../redux/redux-store";

const Message: FC<{ message: ChatMessageType }> = ({ message }) => {

    return (
        <div>
            <img src={message.photo} alt="avatar" style={{ width: '30px' }} />
            <b>{message.userName}</b>
            <br/>
            <p>
                {message.message}
            </p>
            <hr/>
        </div>
    )
};

const Messages: FC = () => {
    const messages = useSelector((state: AppStateType) => state.chat.messages);

    return (
        <div style={{ height: '400px', overflowY: 'auto' }}>
            {messages.map((m, index) => <Message key={index} message={m} />)}
        </div>
    )
};

const AddMessageForm: FC = () => {
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();


    const sendMessageHandler = () => {
        if(!message) {
            return;
        }

        dispatch(sendMessage(message));
        setMessage('');
    }


    return (
        <div>
            <div>
                <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message} />
            </div>
            <div>
                <Button disabled={false} onClick={sendMessageHandler}>Send</Button>
            </div>
        </div>
    )
};

const Chat: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startMessagesListening());
        return () => {
            dispatch(stopMessagesListening());
        };
    }, []);

    return (
        <div>
            <Messages />
            <AddMessageForm />
        </div>
    )
};

const ChatPage: FC = () => {
    return (
        <div>
            <Chat />
        </div>
    )
};

export default ChatPage;