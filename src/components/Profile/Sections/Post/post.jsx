import React from "react";
import "./post.css";

const Post = (props) => {
    return (
        <div className="post__item">
            <img className="post__item_img" src="https://www.serietotaal.nl/images/nieuws/t/6fbi52rzy3ly-full.jpg" alt=""/>
            <span>{props.message}</span>
            <div>
                <span>like</span>
                <span>{props.likes}</span>
            </div>
        </div>
    )
}

export default Post;