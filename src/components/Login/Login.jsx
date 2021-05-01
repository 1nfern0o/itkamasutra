import React from "react";
import "./login.css";
import LoginForm from "./Sections/LoginForm";

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>login</h1>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    )
};

export default Login;