import React, {Component} from "react";
import "./users.css";
import * as axios from "axios";

class UsersApi extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then( response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then( response => {
                this.props.setUsers(response.data.items)
            });
    };

    render() {
        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];

        for (let i = 1; i < pageCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div>
                    {pages.map(p => (
                        <span className={`user__page-number ${this.props.currentPage === p && "user__page-select"}`}
                        onClick={(e) => { this.onPageChanged(p);}}>{p}</span>
                    ))}
                </div>

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