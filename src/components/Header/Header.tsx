import React, {FC} from "react"
import "./header.css";
import {Link} from "react-router-dom";
import {Avatar, Button, Col, Layout, Menu, Row} from "antd";
import {UserOutlined} from '@ant-design/icons';
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentUserLogin, selectIsAuth } from "../../redux/auth-selectors";
import {logout} from "../../redux/auth-reducer";

export const Header: FC = () => {

    const isAuth = useSelector(selectIsAuth);
    const login = useSelector(selectCurrentUserLogin);

    const dispatch = useDispatch();

    const logoutCallback = () => {
        dispatch(logout());
    }

    const {Header} = Layout;

    return (
        <Header>
            <Row>
                <Col span={18}>
                    <Menu theme="dark" mode="horizontal">
                        <Menu.Item key='1'>
                            <Link to="/developers">Developers</Link>
                        </Menu.Item>
                    </Menu>
                </Col>
                { isAuth
                    ? <>
                        <Col span={1}>
                            <Avatar alt={login || ''} style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                        </Col>
                        <Col span={5}>
                            <Button onClick={logoutCallback}>Log out</Button>
                        </Col>
                    </>
                    : <Col span={6}>
                        <Button>
                            <Link to='/login'>Login</Link>
                        </Button>
                    </Col>
                }
            </Row>
        </Header>
    );
};