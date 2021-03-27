import React, {Component} from "react";
import "./users.css";
import * as axios from "axios";

class UsersApi extends Component {
    constructor(props) {
        super(props);

        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then( response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {
        return (
            <div>

                {this.props.users.map(user => (
                    <div className="user" key={user.id}>
                    <span>
                        <div>
                            <img className="user__avatar" src={`${user.photos.small != null ? user.photos.small : "https://images.pexels.com/photos/1312023/pexels-photo-1312023.jpeg?cs=srgb&dl=pexels-michael-morse-1312023.jpg&fm=jpg"}`} alt=""/>
                        </div>
                        <div>
                            { user.followed
                                ? <button onClick={ () => {this.props.unfollow(user.id)}}>UnFollow</button>
                                :  <button onClick={ () => {this.props.follow(user.id)}}>Follow</button>}
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{user.fullName}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{`user.location.country`}</div>
                            <div>{`user.location.city`}</div>
                        </span>
                    </span>
                    </div>
                ))}
            </div>
        );
    }
};

export default UsersApi;