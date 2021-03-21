import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";
import Posts from "./posts";
import StoreContext from "../../../../StoreContext";


const PostsContainer = () => {

    return (
        <StoreContext.Consumer>
            { (store) => {
                let state = store.getState();
                const addPosts = () => {
                    store.dispatch(addPostActionCreator());
                };

                const onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
                };
                return <Posts updateNewPostText={onPostChange}
                              addPosts={addPosts}
                              postsData={state.profilePage.postsData}
                              newPostText={state.profilePage.newPostText}/>

            }
        }
        </StoreContext.Consumer>
    );
};

export default PostsContainer;