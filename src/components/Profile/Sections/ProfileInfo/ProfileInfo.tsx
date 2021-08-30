import React, {ChangeEvent, FC, useState} from "react";
import "./ProfileInfo.css";
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import ProfileDataForm from "../ProfileDataForm/ProfileDataForm";
import {ContactsType, ProfileType} from "../../../../types/types";

type PropsType = {
    profile: ProfileType | null,
    status: string,
    updateStatus: (newStatus: string) => void,
    isOwner: boolean,
    savePhoto: (file: File) => void,
    saveProfile: (profile: ProfileType) => Promise<any>
}

const ProfileInfo: FC<PropsType> = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files?.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData: ProfileType) => {
        // TODO: remove then
       saveProfile(formData).then(() => {
           setEditMode(false);
       })
    };

    return (
        <div>
            <div>
                <img className="content__img" src="https://images.pexels.com/photos/2478248/pexels-photo-2478248.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt=""/>
            </div>
            <div className="description-block">
                <img className="description-block__avatar" src={profile.photos.large || "https://images.pexels.com/photos/4126255/pexels-photo-4126255.jpeg?cs=srgb&dl=pexels-wesley-carvalho-4126255.jpg&fm=jpg"} alt=""/>
                { isOwner && <input type="file" onChange={onMainPhotoSelected}/> }
                { editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                    : <ProfileData goToEditMode={() => {setEditMode(true)}} profile={profile} isOwner={isOwner} />}
                <ProfileStatus status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

type ProfileDataPropsType = {
    profile: ProfileType,
    isOwner: boolean,
    goToEditMode: () => void
}

const ProfileData: FC<ProfileDataPropsType> = ({profile, isOwner,goToEditMode}) => {
    return (
        <>
            {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
            <div>
                <div>
                    <b>Full name</b>: {profile.fullName}
                </div>
                <div>
                    <b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
                </div>
                { profile.lookingForAJob &&
                <div>
                    <b>My professional skills</b>: {profile.lookingForAJobDescription}
                </div>
                }
                <div>
                    <b>About me :</b> {profile.aboutMe}
                </div>

            </div>
            <div className="description-block__contact">
                <b>Contacts:</b>
                <ul className="contact-social">
                    {Object.keys(profile.contacts).map(key => (
                        <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]}/>
                    ))}

                </ul>
            </div>
        </>
    )
}

type ContactPropsType = {
    contactTitle: string,
    contactValue: string,
}

const Contact: FC<ContactPropsType> = ({contactTitle, contactValue}) => {
    return <li className="contact-social__item"><b>{contactTitle}:</b> {contactValue}</li>;
}

export default ProfileInfo;