import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu/menu.jsx";
import UsersContainer from "./components/Users/usersContainer";
import DialogsContainer from "./components/Dialogs/dialogsContainer";
import ProfileContainer from "./components/Profile/profileContainer";
import HeaderContainer from "./components/Header/headerContainer";
import Login from "./components/Login/Login";

const App = () => {
    return (
        <Router>
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
        </Router>
    );
}

export default App;
