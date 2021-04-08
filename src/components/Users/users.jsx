import React from "react";
import "./users.css";
import {NavLink} from "react-router-dom";

const Users = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i < pageCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(p => (
                    <span className={`user__page-number ${props.currentPage === p && "user__page-select"}`}
                          onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
                ))}
            </div>

            {props.users.map(user => (
                <div className="user" key={user.id}>
                    <span>
                        <div>
                            <NavLink to={"/profile/" + user.id}>
                                <img className="user__avatar" src={`${user.photos.small != null ? user.photos.small : "https://images.pexels.com/photos/1312023/pexels-photo-1312023.jpeg?cs=srgb&dl=pexels-michael-morse-1312023.jpg&fm=jpg"}`} alt=""/>
                            </NavLink>
                        </div>
                        <div>
                            { user.followed
                                ? <button onClick={ () => {props.unfollow(user.id)}}>UnFollow</button>
                                :  <button onClick={ () => {props.follow(user.id)}}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.fullName}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{`user.location.country`}</div>
                            <div>{`user.location.city`}</div>
                        </span>
                    </span>
                </div>
            ))}
        </div>
    );
}

export default Users;