import axios from "axios";
import {securityAPI} from "./security-api";
import {profileAPI} from "./profile-api";
import {usersAPI} from "./users-api";
import {authAPI} from "./auth-api";
import {UserType} from "../types/types";

export const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "c4158ed8-d0fa-48f5-978e-b07ad1bf0132"
    }
});

export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}

export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}

export enum ResultCodeForCaptchaEnum {
    CaptchaIsRequired = 10
}

export type GetItemsType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}

export {
    securityAPI,
    profileAPI,
    usersAPI,
    authAPI,
}