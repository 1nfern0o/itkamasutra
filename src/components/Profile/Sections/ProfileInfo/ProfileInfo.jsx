import React from "react";
import "./ProfileInfo.css";

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img className="content__img" src="https://images.pexels.com/photos/2478248/pexels-photo-2478248.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt=""/>
            </div>
            <div className="description-block">
                ava + descr
            </div>
        </div>
    )
}

export default ProfileInfo;