const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
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
    ],
    newMessageBody: "",
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.body
            };
        }

        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messagesData: [...state.messagesData, {id: 6, message: body}]
            };
        }
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
});

export default dialogsReducer;