import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";

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
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likes: 0,
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ""
            }
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

        case DELETE_POST: {
            return  {
                ...state,
                postsData: state.postsData.filter(p => p.id !== action.postId)
            };
        }

        default:
            return state;
    }
};

export const addPostActionCreator = (newPostText) => ({
    type: ADD_POST,
    newPostText
});
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
});
export const setStatus = (status) => ({
    type: SET_STATUS,
    status
});

export const deletePost = (postId) => ({
    type: DELETE_POST,
    postId
});
export const getUserProfile = (userId) => async (dispatch) => {
    const response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
};
export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
    const response = await  profileAPI.getProfile(status);
    if (response.data.resutCode === 0) dispatch(setStatus(status));
};

export default profileReducer;