import { Button } from "antd";
import React, {FC, useEffect, useState} from "react";

const wsChannel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');

type ChatMessageType = {
    message: string,
    photo: string,
    userId: number,
    userName: string,
}

const Message: FC<{message: ChatMessageType}> = ({ message }) => {

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
    const [messages, setMassages] = useState<ChatMessageType[]>([]);

    useEffect(() => {
        wsChannel.addEventListener('message', (e: MessageEvent) => {
            let newMessages = JSON.parse(e.data);
            setMassages((prevMessages) => [...prevMessages, ...newMessages]);
        });
    }, []);

    return (
        <div style={{ height: '400px', overflowY: 'auto' }}>
            {messages.map((m, index: number) => <Message key={index} message={m} />)}
        </div>
    )
};

const AddMessageForm: FC = () => {

    const [message, setMessage] = useState('');

    const sendMessage = () => {
        if (!message) {
            return;
        }
        wsChannel.send(message);
        setMessage('');
    };

    return (
        <div>
            AddMessageForm
            <div>
                <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message} />
            </div>
            <div>
                <Button onClick={sendMessage}>Send</Button>
            </div>
        </div>
    )
};

const Chat: FC = () => {
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