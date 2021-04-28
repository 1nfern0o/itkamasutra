import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
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
    newPostText: "it-roman",
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likes: 0,
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ""
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return  {
                ...state,
                newPostText: action.newText
            };
        }

        case SET_USER_PROFILE: {
            return  {
                ...state,
                profile: action.profile
            };
        }

        case SET_STATUS: {
            return  {
                ...state,
                status: action.status
            };
        }

        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
});
export const setStatus = (status) => ({
    type: SET_STATUS,
    status
});
export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId).then( response => {
            dispatch(setUserProfile(response.data));
        });
    };
};
export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then( response => {
            dispatch(setStatus(response.data));
        });
    };
};

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.getProfile(status).then( response => {
            if (response.data.resutCode === 0) {
                dispatch(setStatus(status));
            }
        });
    };
};
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});

export default profileReducer;