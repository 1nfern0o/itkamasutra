import React, {Component, lazy} from "react";
import {
    Switch,
    Route, withRouter, BrowserRouter, Redirect
} from 'react-router-dom';
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
    catchAllUnhandledErrors = (reason, promise) => {
        alert("Some error occured ");
        console.log("reason", reason);
        console.log("promise", promise);
    }
    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
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
                        <Route exact path="/">
                            {() => <Redirect to="/profile" />}
                        </Route>
                        <Route path="/dialogs">
                            {withSuspense(DialogsContainer)}
                        </Route>
                        <Route path="/profile/:userId?">
                            {withSuspense(ProfileContainer)}
                        </Route>
                        <Route path="/users">
                            <UsersContainer pageTitle="Page Title" />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="*">
                            <div>404 NOT FOUND</div>
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
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
};

export default SamuraiJSApp;