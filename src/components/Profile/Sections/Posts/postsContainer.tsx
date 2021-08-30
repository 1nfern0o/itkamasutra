import {actions} from "../../../../redux/profile-reducer";
import Posts, {DispatchPropsType, MapPropsType} from "./posts";
import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";

const mapStateToProps = (state: AppStateType) => {
    return {
        postsData: state.profilePage.postsData
    }
};



const PostsContainer = connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {
    addPosts: actions.addPostActionCreator
})(Posts);

export default PostsContainer;