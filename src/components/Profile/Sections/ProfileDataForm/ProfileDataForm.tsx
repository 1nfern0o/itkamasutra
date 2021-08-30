import React, {FC} from 'react';
import {createField, GetStringKeys, Input, Textarea} from "../../../common/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import {ProfileType} from "../../../../types/types";

type PropsType = {
    profile: ProfileType
};

type ProfileTypeKeys = GetStringKeys<ProfileType>;

const ProfileDataForm: FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div><button>save</button></div>
            { error && <div className="form-summary-error">
                {error}
            </div>}
            <div>
                <div>
                    <b>Full name</b>: {createField<ProfileTypeKeys>('Full name', 'fullName', [], Input)}
                </div>
                <div>
                    <b>Looking for a job:</b> {createField<ProfileTypeKeys>('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
                </div>
                <div>
                    <b>My professional skills:</b> {createField<ProfileTypeKeys>('My professional skills', 'lookingForAJobDescription', [], Textarea)}
                </div>
                <div>
                    <b>About me:</b> {createField<ProfileTypeKeys>('About me', 'aboutMe', [], Textarea)}
                </div>

            </div>
            <div className="description-block__contact">
                <b>Contacts:</b>
                <ul className="contact-social">
                    {Object.keys(profile.contacts).map(key => (
                        <li key={key} className="contact-social__tem">
                            {/* TODO: create some solition for embedded objects*/}
                            <b>{key}: {createField(key, 'contacts.' + key, [], Input)}</b>
                        </li>
                    ))}

                </ul>
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm<ProfileType, PropsType>({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;