import React from "react";
import Users from "./users";
import {connect} from "react-redux";
import {followActionCreator, setUserActionCreator, unfollowActionCreator} from "../../redux/users-reducer";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUserActionCreator(users));
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Users);