import React, {FC, memo} from "react";
import "./posts.css";
import Post from "../Post/post";
import AddNewPostForm, {AddPostFormValuesType} from "./Sections/AddNewPostForm";
import {PostType} from "../../../../types/types";

export type MapPropsType = {
    postsData: Array<PostType>,
};

export type DispatchPropsType = {
    addPosts: (newPostText: string) => void,
}

const Posts: FC<MapPropsType & DispatchPropsType> = props => {
    let postElements = [...props.postsData].reverse().map(post => <Post message={post.message} key={post.id} likes={post.likes} />);

    let addNewMessage = (values: AddPostFormValuesType) => {
        props.addPosts(values.newPostText);
    };

    return (
        <div className="post">
            <h3>my post</h3>
            <AddNewPostForm onSubmit={addNewMessage}/>
            <div className="posts">
                {postElements}
            </div>
        </div>

    );
};

const PostsMemorized = memo(Posts);

export default PostsMemorized;