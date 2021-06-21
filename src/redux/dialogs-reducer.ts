const SEND_MESSAGE = "SEND_MESSAGE";

type DialogType = {
    id: number,
    name: string
};

type MessageType = {
    id: number,
    message: string
}

let initialState = {
    dialogsData: [
        {
            id: 1,
            name: "Roman"
        },
        {
            id: 2,
            name: "Dimych"
        },
        {
            id: 3,
            name: "Petro"
        },
        {
            id: 4,
            name: "Andrey"
        }
    ] as Array<DialogType>,
    messagesData: [
        {
            id: 1,
            message: "Hi world!"
        },
        {
            id: 2,
            message: "Hi wrld!"
        },
        {
            id: 3,
            message: "Yo"
        }
    ] as Array<MessageType>
}

export type initialStateType = typeof initialState;

const dialogsReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 6, message: body}],

            };
        }
        default:
            return state;
    }
};

type sendMessageCreatorType = {
    type: typeof SEND_MESSAGE,
    newMessageBody: string
}

export const sendMessageCreator = (newMessageBody: string):sendMessageCreatorType => ({
    type: SEND_MESSAGE,
    newMessageBody
});

export default dialogsReducer;