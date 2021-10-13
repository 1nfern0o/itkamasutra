import React, {Component, ComponentType, FC, lazy} from "react";
import { Switch, Route, withRouter, BrowserRouter, Redirect, Link } from 'react-router-dom';
import "./App.css";
import "antd/dist/antd.css";
import UsersPage from "./components/Users/UsersPage";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store, {AppStateType} from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspence";
import {LoginPage} from "./components/Login/LoginPage";
import {Layout, Menu, Breadcrumb} from "antd";
import {UserOutlined} from '@ant-design/icons';
import { Header } from "./components/Header/Header";

const {SubMenu} = Menu;
const {Content, Footer, Sider} = Layout;

const DialogsContainer = lazy(() => import('./components/Dialogs/dialogsContainer'));
const ProfileContainer = lazy(() => import('./components/Profile/profileContainer'));
const ChatPage = lazy(() => import('./pages/Chat/ChatPage'));

type MapPropsType = ReturnType<typeof mapStateToProps>;
type DispatchPropsType = {
    initializeApp: () => void
};

const SuspendedDialogs = withSuspense(DialogsContainer);
const SuspendedProfile = withSuspense(ProfileContainer);
const SuspendedChatPage = withSuspense(ChatPage);

class App extends Component<MapPropsType & DispatchPropsType> {
    catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
        alert("Some error occured ");
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
            <Layout>
                <Header />
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                        <Sider className="site-layout-background" width={200}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%'}}
                            >
                                <SubMenu key="sub1" icon={<UserOutlined />} title="My Profile">
                                    <Menu.Item key='1'>
                                        <Link to="/profile">Profile</Link>
                                    </Menu.Item>
                                    <Menu.Item key='2'>
                                        <Link to="/dialogs">Messages</Link>
                                    </Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" icon={<UserOutlined />} title="Developer">
                                    <Menu.Item key='3'>
                                        <Link to="/developers">Developers</Link>
                                    </Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" icon={<UserOutlined />} title="Chat">
                                    <Menu.Item key='4'>
                                        <Link to="/chat">Chat</Link>
                                    </Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            <Switch>
                                <Route exact path="/">
                                    {() => <Redirect to="/profile"/>}
                                </Route>
                                <Route path="/dialogs">
                                    <SuspendedDialogs/>
                                </Route>
                                <Route path="/profile/:userId?">
                                    <SuspendedProfile/>
                                </Route>
                                <Route path="/developers">
                                    <UsersPage pageTitle="Page Title"/>
                                </Route>
                                <Route path="/login">
                                    <LoginPage/>
                                </Route>
                                <Route path="/chat">
                                    <SuspendedChatPage />
                                </Route>
                                <Route path="*">
                                    <div>404 NOT FOUND</div>
                                </Route>
                            </Switch>
                        </Content>
                    </Layout>
                </Content>
                <Footer>Samurai Social Network @2021 Create by Inferno</Footer>
            </Layout>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
});

const AppContainer = compose<ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp: FC = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
};

export default SamuraiJSApp;