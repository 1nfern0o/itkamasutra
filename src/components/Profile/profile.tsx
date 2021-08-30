import React from "react";
import "./profile.css"
import ProfileInfo from "./Sections/ProfileInfo/ProfileInfo";
import PostsContainer from "./Sections/Posts/postsContainer";
import { FC } from "react";
import {ProfileType} from "../../types/types";

type PropsType = {
    profile: ProfileType | null,
    status: string,
    updateStatus: (status: string) => void,
    isOwner: boolean,
    savePhoto: (file: File) => void,
    saveProfile: (profile: ProfileType) => Promise<any>
};

const Profile: FC<PropsType> = (props) => {
    return (
        <div className="content">
            <ProfileInfo savePhoto={props.savePhoto}
                         isOwner={props.isOwner}
                         profile={props.profile}
                         status={props.status}
                         saveProfile={props.saveProfile}
                         updateStatus={props.updateStatus} />
            <PostsContainer />
        </div>
    )
}

export default Profile;
