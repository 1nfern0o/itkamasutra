import { Button } from "antd";
import React, {FC, useEffect, useState} from "react";

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

const Messages: FC<{ wsChannel: WebSocket | null }> = ({ wsChannel }) => {
    const [messages, setMassages] = useState<ChatMessageType[]>([]);

    useEffect(() => {
        const messageHandler = (e: MessageEvent) => {
            let newMessages = JSON.parse(e.data);
            setMassages((prevMessages) => [...prevMessages, ...newMessages]);
        };

        wsChannel?.addEventListener('message', messageHandler);

        return () => {
            wsChannel?.removeEventListener('message', messageHandler);
        }
    }, [wsChannel]);

    return (
        <div style={{ height: '400px', overflowY: 'auto' }}>
            {messages.map((m, index: number) => <Message key={index} message={m} />)}
        </div>
    )
};

const AddMessageForm: FC<{ wsChannel: WebSocket | null }> = ({ wsChannel }) => {
    const [message, setMessage] = useState('');
    const [readyStatus, setReadyStatus] = useState<"pending" | "ready">("pending");

    useEffect(()=> {
        const openHandler = () => {
            setReadyStatus('ready');
        };

        wsChannel?.addEventListener('open', openHandler);

        return () => {
            wsChannel?.removeEventListener('open', openHandler);
        }
    }, [wsChannel]);

    const sendMessage = () => {
        if (!message) {
            return;
        }
        wsChannel?.send(message);
        setMessage('');
    };

    return (
        <div>
            AddMessageForm
            <div>
                <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message} />
            </div>
            <div>
                <Button disabled={wsChannel === null || readyStatus !== "ready"} onClick={sendMessage}>Send</Button>
            </div>
        </div>
    )
};

const Chat: FC = () => {
    const [wsChannel, setWsChannel] = useState<WebSocket | null>(null);

    useEffect(() => {
        let ws: WebSocket;

        const closeHandler = () => {
            console.log('close WS');
            setTimeout(createChanel, 3000);
        }

        function createChanel() {
            ws?.removeEventListener('close' , closeHandler);
            ws?.close();

            ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
            ws.addEventListener('close', closeHandler);
            setWsChannel(ws);
        }

        createChanel();

        return () => {
            ws.removeEventListener('close', closeHandler);
            ws.close();
        };
    },[]);

    return (
        <div>
            <Messages wsChannel={wsChannel} />
            <AddMessageForm wsChannel={wsChannel} />
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