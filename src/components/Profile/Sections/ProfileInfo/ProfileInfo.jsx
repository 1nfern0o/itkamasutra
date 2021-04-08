import React from "react";
import "./ProfileInfo.css";
import Preloader from "../../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    debugger
    return (
        <div>
            <div>
                <img className="content__img" src="https://images.pexels.com/photos/2478248/pexels-photo-2478248.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt=""/>
            </div>
            <div className="description-block">
                <img src={props.profile.photos.large} alt=""/>
                <div className="description-block__contact">
                    <ul>
                        <li>{props.profile.contacts.facebook}</li>
                        <li>{props.profile.contacts.website}</li>
                        <li>{props.profile.contacts.vk}</li>
                        <li>{props.profile.contacts.twitter}</li>
                        <li>{props.profile.contacts.instagram}</li>
                        <li>{props.profile.contacts.youtube}</li>
                        <li>{props.profile.contacts.github}</li>
                    </ul>
                </div>
                ava + descr
            </div>
        </div>
    )
}

export default ProfileInfo;