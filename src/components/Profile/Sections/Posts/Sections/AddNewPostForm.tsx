import React from "react";
import { FC } from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../../utils/Validators/validators";
import {createField, GetStringKeys, Textarea} from "../../../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

type PropsType = {};

export type AddPostFormValuesType = {
    newPostText: string
};

type AddPostFormValuesTypeKeys = GetStringKeys<AddPostFormValuesType>;

const AddNewPostForm: FC<InjectedFormProps<AddPostFormValuesType, PropsType> & PropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {createField<AddPostFormValuesTypeKeys>("Post message...", "newPostText", [required, maxLength10], Textarea)}
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
};

export default reduxForm<AddPostFormValuesType, PropsType>({form: "profileAddNewPostForm"})(AddNewPostForm);