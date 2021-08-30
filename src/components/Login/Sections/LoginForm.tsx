import React, {FC} from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, GetStringKeys, Input} from "../../common/FormsControls/FormsControls";
import {required} from "../../../utils/Validators/validators";

type LoginFormOwnProps = {
    captchaUrl: string | null
}

export type LoginFormValuesType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
}

type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>;

const LoginForm: FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({handleSubmit, error, captchaUrl}) => {
   return (
       <form onSubmit={handleSubmit}>
           {createField<LoginFormValuesTypeKeys>("Email", "email", [required], Input)}
           {createField<LoginFormValuesTypeKeys>("Password", "password", [required], Input, {type: "password"})}
           {createField<LoginFormValuesTypeKeys>(undefined, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}
           {captchaUrl && <img src={captchaUrl} alt={captchaUrl} /> }
           {captchaUrl && createField<LoginFormValuesTypeKeys>("Symbols from image", "captcha", [required], Input, {}) }
           { error && <div className="form-summary-error">
               {error}
           </div>}
           <div>
               <button>Login</button>
           </div>
       </form>
   )
};

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login'})(LoginForm);


export default LoginReduxForm;