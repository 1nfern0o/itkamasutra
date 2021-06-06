import React from 'react';
import {createField, Input, Textarea} from "../../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div><button>save</button></div>
            { error && <div className="form-summary-error">
                {error}
            </div>}
            <div>
                <div>
                    <b>Full name</b>: {createField('Full name', 'fullName', [], Input)}
                </div>
                <div>
                    <b>Looking for a job:</b> {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
                </div>
                <div>
                    <b>My professional skills:</b> {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
                </div>
                <div>
                    <b>About me:</b> {createField('About me', 'aboutMe', [], Textarea)}
                </div>

            </div>
            <div className="description-block__contact">
                <b>Contacts:</b>
                <ul className="contact-social">
                    {Object.keys(profile.contacts).map(key => (
                        <li key={key} className="contact-social__tem">
                            <b>{key}: {createField(key, 'contacts.' + key, [], Input)}</b>
                        </li>
                    ))}

                </ul>
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;