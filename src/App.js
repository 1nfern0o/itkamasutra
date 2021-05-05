import React, {Component} from "react";
import {
    Switch,
    Route, withRouter
} from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu/menu.jsx";
import UsersContainer from "./components/Users/usersContainer";
import DialogsContainer from "./components/Dialogs/dialogsContainer";
import ProfileContainer from "./components/Profile/profileContainer";
import HeaderContainer from "./components/Header/headerContainer";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app__wrapper">
                <HeaderContainer />
                <Menu/>
                <div className="app__wrapper_content">
                    <Switch>
                        <Route path="/dialogs">
                            <DialogsContainer />
                        </Route>
                        <Route path="/profile/:userId?">
                            <ProfileContainer />
                        </Route>
                        <Route path="/users">
                            <UsersContainer />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
