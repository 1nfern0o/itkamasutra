import React from "react";
import "./ProfileInfo.css";
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatus from "../ProfileStatus/ProfileStatus";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img className="content__img" src="https://images.pexels.com/photos/2478248/pexels-photo-2478248.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt=""/>
            </div>
            <div className="description-block">
                <img src={profile.photos.large} alt=""/>
                <div className="description-block__contact">
                    <ul>
                        <li>{profile.contacts.facebook}</li>
                        <li>{profile.contacts.website}</li>
                        <li>{profile.contacts.vk}</li>
                        <li>{profile.contacts.twitter}</li>
                        <li>{profile.contacts.instagram}</li>
                        <li>{profile.contacts.youtube}</li>
                        <li>{profile.contacts.github}</li>
                    </ul>
                </div>
                <ProfileStatus status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;