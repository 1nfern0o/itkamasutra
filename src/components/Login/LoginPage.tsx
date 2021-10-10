import React, {FC} from "react";
import "./login.css";
import LoginForm from "./Sections/LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import { AppStateType } from "../../redux/redux-store";
import { LoginFormValuesType } from "./Sections/LoginForm";

export const LoginPage: FC = () => {
    const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl);
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth);

    const dispatch = useDispatch();

    const onSubmit = (formData: LoginFormValuesType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha));
    };

    if (isAuth) {
        return <Redirect to="/profile" />
    }
    return (
        <div>
            <h1>login</h1>
            <LoginForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </div>
    )
};