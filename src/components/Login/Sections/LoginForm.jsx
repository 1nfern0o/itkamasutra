import React from "react";
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
   return (
       <form onSubmit={props.handleSubmit}>
           <div>
               <Field placeholder="Login" name="login" component="input"/>
           </div>
           <div>
               <Field placeholder="Password" name="password" component="input"/>
           </div>
           <div>
               <label>
                   <Field name="rememberMe" type="checkbox" component="input"/>
                   <span>remember me</span>
               </label>
           </div>
           <div>
               <button>Login</button>
           </div>
       </form>
   )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);


export default LoginReduxForm;