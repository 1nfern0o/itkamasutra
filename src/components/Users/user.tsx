import React, {FC} from "react";
import "./users.css";
import {NavLink} from "react-router-dom";
import { UserType } from "../../types/types";

type PropsType = {
    user: UserType
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

const User: FC<PropsType> = ({user, followingInProgress, unfollow, follow}) => {
    return (
            <div className="user">
                <span>
                    <div>
                        <NavLink to={"/profile/" + user.id}>
                            <img className="user__avatar" src={`${user.photos.small != null ? user.photos.small : "https://images.pexels.com/photos/1312023/pexels-photo-1312023.jpeg?cs=srgb&dl=pexels-michael-morse-1312023.jpg&fm=jpg"}`} alt=""/>
                        </NavLink>
                    </div>
                    <div>
                        { user.followed
                            ? <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={ () => { unfollow(user.id); }}>UnFollow</button>
                            :  <button disabled={followingInProgress.some(id => id === user.id)}
                                       onClick={ () => { follow(user.id); }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{user.id}</div>
                        <div>{`user.location.country`}</div>
                        <div>{`user.location.city`}</div>
                    </span>
                </span>
            </div>
    );
}

export default User;