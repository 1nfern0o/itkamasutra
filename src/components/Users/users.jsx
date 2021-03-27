import React, {Component} from "react";
import "./users.css";

class Users extends Component {
    constructor(props) {
        super(props);
    }
     getUsers = () => {
        if (this.props.users.length === 0) {
             this.props.setUsers([

                 {
                     id: 1,
                     followed: true,
                     photoUrs: "https://images.pexels.com/photos/1456951/pexels-photo-1456951.jpeg?cs=srgb&dl=pexels-hannah-nelson-1456951.jpg&fm=jpg",
                     fullName: "Roman I.",
                     status: "I am a boss",
                     location: {
                         city: "Kiev",
                         country: "Ukraine"
                     }
                 },
                 {
                     id: 2,
                     followed: true,
                     photoUrs: "https://images.pexels.com/photos/1456951/pexels-photo-1456951.jpeg?cs=srgb&dl=pexels-hannah-nelson-1456951.jpg&fm=jpg",
                     fullName: "Oksana T.",
                     status: "I am a bosss",
                     location: {
                         city: "Kiev",
                         country: "Ukraine"
                     }
                 },
                 {
                     id: 3,
                     followed: false,
                     photoUrs: "https://images.pexels.com/photos/1456951/pexels-photo-1456951.jpeg?cs=srgb&dl=pexels-hannah-nelson-1456951.jpg&fm=jpg",
                     fullName: "Valera K.",
                     status: "Noob here",
                     location: {
                         city: "Moscow",
                         country: "Russia"
                     }
                 },
                 {
                     id: 4,
                     followed: true,
                     photoUrs: "https://images.pexels.com/photos/1456951/pexels-photo-1456951.jpeg?cs=srgb&dl=pexels-hannah-nelson-1456951.jpg&fm=jpg",
                     fullName: "Oksana T.",
                     status: "I am a bosss",
                     location: {
                         city: "Kiev",
                         country: "Ukraine"
                     }
                 },
             ])
         }
     }

    render() {
        return (
            <div>
                <button onClick={this.getUsers}>Get users</button>
                {this.props.users.map(user => (
                    <div className="user" key={user.id}>
                    <span>
                        <div>
                            <img className="user__avatar" src={user.photoUrs} alt=""/>
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
                            <div>{user.location.country}</div>
                            <div>{user.location.city}</div>
                        </span>
                    </span>
                    </div>
                ))}
            </div>
        );
    }
}

export default Users;