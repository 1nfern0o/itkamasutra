import React from "react";
import "./profile.css"
import Posts from "./Sections/Posts/posts.jsx";
import ProfileInfo from "./Sections/ProfileInfo/ProfileInfo.jsx";

const Profile = (props) => {
    return (
        <div className="content">
            <ProfileInfo />
            <Posts
                postsData={props.profilePage.postsData}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch} />
        </div>
    )
}

export default Profile;
