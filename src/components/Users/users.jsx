import React from "react";
import "./users.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./user";

const Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, followingInProgress, unfollow, follow}, ...props) => {
    return (
        <div>
            <Paginator currentPage={currentPage}
                       onPageChanged={onPageChanged}
                       totalUsersCount={totalUsersCount}
                       pageSize={pageSize}/>
            <div>
                {users.map(user => (
                    <User user={user}
                         followingInProgress={followingInProgress}
                         follow={follow}
                         unfollow={unfollow}
                         key={user.id}
                     />
                ))}
            </div>
        </div>
    );
}

export default Users;