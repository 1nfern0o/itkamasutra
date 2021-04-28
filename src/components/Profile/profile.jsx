import React from "react";
import "./profile.css"
import ProfileInfo from "./Sections/ProfileInfo/ProfileInfo.jsx";
import PostsContainer from "./Sections/Posts/postsContainer";

const Profile = (props) => {
    return (
        <div className="content">
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
            <PostsContainer />
        </div>
    )
}

export default Profile;
