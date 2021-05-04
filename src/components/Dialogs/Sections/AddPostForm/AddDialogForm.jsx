import React from "react";
import {Field, reduxForm} from "redux-form";

const AddDialogForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newPostText" placeholder="Enter your message"/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
};

let AddDialogFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddDialogForm);

export default AddDialogFormRedux;