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
import Dialogs from "./components/Dialogs/dialogs.jsx";

function App(props) {
    return (
        <Router>
            <div className="app__wrapper">
                <Header/>
                <Menu/>
                <div className="app__wrapper_content">
                    <Switch>
                        <Route exact path="/profile">
                            <Profile
                                profilePage={props.state.profilePage}
                                dispatch={props.dispatch} />
                        </Route>
                        <Route exact path="/dialogs">
                            <Dialogs store={props.store} />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
