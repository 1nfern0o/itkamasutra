import {InferActionsTypes} from "./redux-store";

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

const dialogsReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "SN/DIALOGS/SEND_MESSAGE": {
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


export const actions = {
    sendMessageCreator: (newMessageBody: string) => ({
        type: "SN/DIALOGS/SEND_MESSAGE",
        newMessageBody
    } as const)
}

export default dialogsReducer;

export type initialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>;