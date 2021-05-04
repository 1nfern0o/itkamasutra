const SEND_MESSAGE = "SEND_MESSAGE";

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
    ],
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
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 6, message: body}]
            };
        }
        default:
            return state;
    }
};

export const sendMessageCreator = (newMessageBody) => ({
    type: SEND_MESSAGE,
    newMessageBody
});

export default dialogsReducer;