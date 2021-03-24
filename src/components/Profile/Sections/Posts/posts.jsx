import React from "react";
import "./posts.css";
import Post from "../Post/post.jsx";

const Posts = (props) => {
    let postElements = props.postsData.map(post => <Post message={post.message} key={post.id} likes={post.likes} />);

    const newPostElement = React.createRef();

    const onAddPosts = () => {
        props.addPosts();
        //props.dispatch(addPostActionCreator()); Находится в postsContainer для того чтобы очистить posts от dispatch
    };

    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
       // let action =  updateNewPostTextActionCreator(text);  Находится в postsContainer для того чтобы очистить posts от dispatch
       // props.dispatch(action);
    };

    return (
        <div className="post">
            <h3>my post</h3>
            <div>
                <div>
                    <textarea onChange={ onPostChange } ref={newPostElement}
                              value={props.newPostText} />
                </div>
                <div>
                    <button onClick={ onAddPosts }>Add post</button>
                </div>
            </div>
            <div className="posts">
                {postElements}
            </div>
        </div>

    );
};

export default Posts;