import React from "react";
import "./posts.css";
import Post from "../Post/post.jsx";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";



const Posts = (props) => {
    let postElements = props.postsData.map(post => <Post message={post.message} likes={post.likes} />);

    const newPostElement = React.createRef();

    const addPosts = () => {
        props.dispatch(addPostActionCreator());
    };

    const onPostChange = () => {
        let text = newPostElement.current.value;
        let action =  updateNewPostTextActionCreator(text);
        props.dispatch(action);
    };

    return (
        <div className="post">
            <h3>my post</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={ onPostChange }/>
                </div>
                <div>
                    <button onClick={ addPosts }>Add post</button>
                </div>
            </div>
            <div className="posts">
                {postElements}
            </div>
        </div>

    );
};

export default Posts;