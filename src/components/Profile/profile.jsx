import React from "react";
import "./profile.css"
import ProfileInfo from "./Sections/ProfileInfo/ProfileInfo.jsx";
import PostsContainer from "./Sections/Posts/postsContainer";

const Profile = (props) => {
    return (
        <div className="content">
            <ProfileInfo />
            <PostsContainer store={props.store} />
        </div>
    )
}

export default Profile;
