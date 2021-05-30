import React, {Component, lazy} from "react";
import {
    Switch,
    Route, withRouter, BrowserRouter as Router
} from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu/menu.jsx";
import UsersContainer from "./components/Users/usersContainer";
import HeaderContainer from "./components/Header/headerContainer";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspence";

const DialogsContainer = lazy(() => import('./components/Dialogs/dialogsContainer'));
const ProfileContainer = lazy(() => import('./components/Profile/profileContainer'));

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
                            {withSuspense(DialogsContainer)}
                        </Route>
                        <Route path="/profile/:userId?">
                            {withSuspense(ProfileContainer)}
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

const AppContainer =  compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);;

const SamuraiJSApp = (props) => {
    return <Router>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </Router>
};

export default SamuraiJSApp;