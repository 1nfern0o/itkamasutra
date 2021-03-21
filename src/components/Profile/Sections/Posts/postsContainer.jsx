import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";
import Posts from "./posts";
import {connect} from "react-redux";


/*const PostsContainer = () => {

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
};*/

const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPosts: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;