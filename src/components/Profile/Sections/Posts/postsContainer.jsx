import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";
import Posts from "./posts";



const PostsContainer = (props) => {

    let state = props.store.getState();

    const addPosts = () => {
        props.store.dispatch(addPostActionCreator());
    };

    const onPostChange = (text) => {
            let action =  updateNewPostTextActionCreator(text);
            props.store.dispatch(action);
    };

    return (<Posts updateNewPostText={onPostChange}
                   addPosts={addPosts}
                   postsData={state.profilePage.postsData}
                   newPostText={state.profilePage.newPostText}
    />);
};

export default PostsContainer;