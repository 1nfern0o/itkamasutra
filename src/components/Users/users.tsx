import React, { FC } from "react";
import "./users.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./user";
import {UserType} from "../../types/types";

type PropsType = {
    currentPage: number,
    onPageChanged: (pageNumber: number) => void,
    totalUsersCount: number,
    pageSize: number,
    users: Array<UserType>,
    followingInProgress: Array<number>,
    unfollow: (userId: number) => void,
    follow: (userId: number) => void
}

const Users: FC<PropsType> = ({
                                  currentPage,
                                  onPageChanged,
                                  totalUsersCount,
                                  pageSize,
                                  users,
                                  followingInProgress,
                                  unfollow,
                                  follow,
                                  ...props
}) => {
    return (
        <div>
            <Paginator currentPage={currentPage}
                       onPageChanged={onPageChanged}
                       totalItemsCount={totalUsersCount}
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