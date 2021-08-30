import React, {FC} from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, GetStringKeys, Textarea} from '../../../common/FormsControls/FormsControls';
import {maxLengthCreator, required} from "../../../../utils/Validators/validators";
import {NewMessageFormValuesType} from "../../dialogs";

const maxLength50 = maxLengthCreator(50);

type NewMessageFormValuesTypeKeys = GetStringKeys<NewMessageFormValuesType>;
type PropsType = {};

const AddDialogForm: FC<InjectedFormProps<NewMessageFormValuesType, PropsType> & PropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {createField<NewMessageFormValuesTypeKeys>("Enter your message", 'newPostText', [required, maxLength50], Textarea)}
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
};

// TODO: Need delete ts-ignore
// @ts-ignore
export default reduxForm<NewMessageFormValuesType>({form: "dialogAddMessageForm"})(AddDialogForm);