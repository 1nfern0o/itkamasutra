import React from "react";
import "./profile.css"
import ProfileInfo from "./Sections/ProfileInfo/ProfileInfo.jsx";
import PostsContainer from "./Sections/Posts/postsContainer";

const Profile = () => {
    return (
        <div className="content">
            <ProfileInfo />
            <PostsContainer />
        </div>
    )
}

export default Profile;
