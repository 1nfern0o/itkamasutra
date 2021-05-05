import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControls";
import {required} from "../../../utils/Validators/validators";

const LoginForm = (props) => {
   return (
       <form onSubmit={props.handleSubmit}>
           <div>
               <Field placeholder="Email" name="email"
                      type="email"
                      validate={[required]}
                      component={Input}/>
           </div>
           <div>
               <Field placeholder="Password" name="password"
                      type="password"
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
           { props.error && <div className="form-summary-error">
               {props.error}
           </div>}
           <div>
               <button>Login</button>
           </div>
       </form>
   )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);


export default LoginReduxForm;