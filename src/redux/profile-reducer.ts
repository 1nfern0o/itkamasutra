import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from 'redux-form';
import {PhotosType, PostType, ProfileType} from "../types/types";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";



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
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
    newPostText: ''
};

export type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any): InitialStateType => {
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

        case SAVE_PHOTO_SUCCESS: {
            return  {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType
            };
        }

        default:
            return state;
    }
};

type AddPostActionCreatorType = {
    type: typeof ADD_POST,
    newPostText: string
};
export const addPostActionCreator = (newPostText: string): AddPostActionCreatorType => ({
    type: ADD_POST,
    newPostText
});

type SetUserProfileType = {
    type: typeof SET_USER_PROFILE,
    profile: ProfileType
};
export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({
    type: SET_USER_PROFILE,
    profile
});

type SetStatusType = {
    type: typeof SET_STATUS,
    status: string
};
export const setStatus = (status: string): SetStatusType => ({
    type: SET_STATUS,
    status
});

type DeletePostType = {
    type: typeof DELETE_POST,
    postId: number
};
export const deletePost = (postId: number): DeletePostType => ({
    type: DELETE_POST,
    postId
});

type SavePhotoSuccessType = {
    type: typeof SAVE_PHOTO_SUCCESS,
    photos: PhotosType
};
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessType => ({
    type: SAVE_PHOTO_SUCCESS,
    photos
});


export const getUserProfile = (userId: number) => async (dispatch: any) => {
    const response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
};
export const getStatus = (userId: number) => async (dispatch: any) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
};

export const updateStatus = (status: any) => async (dispatch: any) => {
    try {
        const response = await profileAPI.getProfile(status);
        if (response.data.resutCode === 0) dispatch(setStatus(status));
    } catch(error) {
        console.log(error);
    }

};

export const savePhoto = (file: any) => async (dispatch: any) => {
    const response = await  profileAPI.savePhoto(file);
    if (response.data.resutCode === 0) dispatch(savePhotoSuccess(response.data.date.photos));
};

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId;
    const response = await  profileAPI.saveProfile(profile);
    if (response.data.resutCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit("edit-profile", {_error: response.data.message[0] }));
        // dispatch(stopSubmit("edit-profile", {"contacts": {"facebook": response.data.message[0]} }));
        return Promise.reject(response.data.message[0]);
    }
};

export default profileReducer;