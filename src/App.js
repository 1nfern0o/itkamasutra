import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header/header.jsx";
import Menu from "./components/Menu/menu.jsx";
import Profile from "./components/Profile/profile.jsx";
import UsersContainer from "./components/Users/usersContainer";
import DialogsContainer from "./components/Dialogs/dialogsContainer";

function App(props) {
    return (
        <Router>
            <div className="app__wrapper">
                <Header/>
                <Menu/>
                <div className="app__wrapper_content">
                    <Switch>
                        <Route exact path="/dialogs">
                            <DialogsContainer />
                        </Route>
                        <Route exact path="/profile">
                            <Profile />
                        </Route>
                        <Route exact path="/users">
                            <UsersContainer />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
