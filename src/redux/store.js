import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            postsData: [
                {
                    id: 1,
                    message: "Hi, who are u?",
                    likes: 12
                },
                {
                    id: 2,
                    message: "Hi, who are u Doe?",
                    likes: 1
                },
                {
                    id: 3,
                    message: "Hi, who are John?",
                    likes: 129
                }
            ],
            newPostText: 'it-roman',
        },
        dialogsPage: {
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

        },
        sidebar: {},
    },
    _callSubscriber() {
        console.log("State change");
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;  // observer наблюдатель addEventListener // publisher-subscriber
    },

    dispatch(action) {  // { type: 'ADD-POST' }
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
};

window.store = store;

export default store;