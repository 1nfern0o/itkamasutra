import React, {memo} from "react";
import "./posts.css";
import Post from "../Post/post.jsx";
import AddPostForm from "./Sections/AddNewPostForm";

const Posts = memo(props => {
    let postElements = props.postsData.map(post => <Post message={post.message} key={post.id} likes={post.likes} />);

    let addNewMessage = (values) => {
        props.addPosts(values.newPostText);
    };

    return (
        <div className="post">
            <h3>my post</h3>
            <AddPostForm onSubmit={addNewMessage}/>
            <div className="posts">
                {postElements}
            </div>
        </div>

    );
});

export default Posts;