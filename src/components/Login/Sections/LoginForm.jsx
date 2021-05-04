import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControls";
import {required} from "../../../utils/Validators/validators";

const LoginForm = (props) => {
   return (
       <form onSubmit={props.handleSubmit}>
           <div>
               <Field placeholder="Login" name="login"
                      validate={[required]}
                      component={Input}/>
           </div>
           <div>
               <Field placeholder="Password" name="password"
                      validate={[required]}
                      component={Input}/>
           </div>
           <div>
               <label>
                   <Field name="rememberMe" type="checkbox"
                          component={Input}/>
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