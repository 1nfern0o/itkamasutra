import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../../utils/Validators/validators";

const maxLength50 = maxLengthCreator(50)

const AddDialogForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required, maxLength50]} name="newPostText" placeholder="Enter your message"/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
};

let AddDialogFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddDialogForm);

export default AddDialogFormRedux;