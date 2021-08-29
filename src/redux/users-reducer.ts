import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";
import {UserType} from "../types/types";
import {BaseThunkType, InferActionsTypes} from "./redux-store";
import { Dispatch } from "redux";

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>, // array of users ids
};

const usersReducer = (state = initialState, action: ActionsTypes): InitialState => {
    switch (action.type) {
        case "SN/USERS/FOLLOW": {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {follow: true} )
                // users: state.users.map( user => {
                //     if (user.id === action.userId) {
                //         return {
                //             ...user,
                //             followed: true
                //         }
                //     }
                //     return user;
                // }),
            }
        }

        case "SN/USERS/UNFOLLOW": {
            return  {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {follow: false} )
            };
        }

        case "SN/USERS/SET_USERS": {
            return {
                ...state,
                users: action.users
            }
        }

        case "SN/USERS/SET_CURRENT_PAGE": {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }

        case "SN/USERS/SET_TOTAL_USERS_COUNT": {
            return {
                ...state,
                totalUsersCount: action.count
            }
        }

        case "SN/USERS/TOGGLE_IS_FETCHING": {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case "SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS": {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
};

export const actions = {
    followSuccess: (userId: number) => ({
        type: "SN/USERS/FOLLOW",
        userId
    } as const),

    unfollowSuccess: (userId: number) => ({
        type: "SN/USERS/UNFOLLOW",
        userId
    } as const),

    setUsers: (users: Array<UserType>) => ({
        type: "SN/USERS/SET_USERS",
        users
    } as const),

    setCurrentPage: (currentPage: number) => ({
        type: "SN/USERS/SET_CURRENT_PAGE",
        currentPage
    } as const),

    setTotalUsersCount: (totalUsersCount: number) => ({
        type: "SN/USERS/SET_TOTAL_USERS_COUNT",
        count: totalUsersCount
    } as const),

    toggleIsFetching: (isFetching: boolean) => ({
        type: "SN/USERS/TOGGLE_IS_FETCHING",
        isFetching
    } as const),

    toggleFollowingProgress: (isFetching: boolean, userId: number) => ({
        type: "SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS",
        isFetching,
        userId
    } as const),
};


export const requestUsers =
    (page: number, pageSize: number): ThunkType =>
    async (dispatch) => {
    dispatch(actions.toggleIsFetching(true));
    dispatch(actions.setCurrentPage(page));

    let response = await usersAPI.getUsers(page, pageSize);

    dispatch(actions.toggleIsFetching(false));
    dispatch(actions.setUsers(response.items));
    dispatch(actions.setTotalUsersCount(response.totalCount));
};

const _followUnfollowFlow = async (
    dispatch: Dispatch<ActionsTypes>, userId: number, apiMethod: any,
    actionCreator: (userId: number) => ActionsTypes) => {

    dispatch(actions.toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId);

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(actions.toggleFollowingProgress(false, userId));
}

export const follow = (userId: number): ThunkType => async (dispatch) => {
    _followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), actions.followSuccess);
};

export const unfollow = (userId: number): ThunkType => async (dispatch) => {
    _followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), actions.unfollowSuccess);
};

export default usersReducer;

type InitialState = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsTypes>;