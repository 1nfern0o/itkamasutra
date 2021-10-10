import React, {FC, useEffect} from "react";
import "./users.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import UsersSearchForm from "./UsersSearchForm";
import {FilterType, requestUsers} from "../../redux/users-reducer";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers,
    getUsersFilter
} from "../../redux/users-selectors";


export const Users: FC = () => {

    const users = useSelector(getUsers);
    const totalUsersCount = useSelector(getTotalUsersCount);
    const currentPage = useSelector(getCurrentPage);
    const pageSize = useSelector(getPageSize);
    const filter = useSelector(getUsersFilter);
    const followingInProgress = useSelector(getFollowingInProgress);

    const dispatch = useDispatch();

    const onPageChanged = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize, filter));
    };

    const onFilterChanged = (filter: FilterType) => {
        dispatch(requestUsers(1, pageSize, filter));
    };

    const follow = (userId: number) => {
        dispatch(follow(userId));
    };
    const unfollow = (userId: number) => {
        dispatch(unfollow(userId));
    };

    useEffect(() => {
        dispatch(requestUsers(currentPage, pageSize, filter));
    }, [])

    return (
        <div>
            <UsersSearchForm onFilterChanged={onFilterChanged} />
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
};