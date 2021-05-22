import React from "react";
import {reduxForm} from "redux-form";
import {createField, Input} from "../../common/FormsControls/FormsControls";
import {required} from "../../../utils/Validators/validators";

const LoginForm = ({handleSubmit, error}) => {
   return (
       <form onSubmit={handleSubmit}>
           {createField("Email", "email", [required], Input)}
           {createField("Password", "password", [required], Input, {type: "password"})}
           {createField(null, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}
           { error && <div className="form-summary-error">
               {error}
           </div>}
           <div>
               <button>Login</button>
           </div>
       </form>
   )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);


export default LoginReduxForm;