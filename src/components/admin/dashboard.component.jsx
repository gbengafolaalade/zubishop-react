import React, { useState } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import { Layout, Menu, Button, Dropdown, Typography, Space } from "antd";
import {
  HomeOutlined,
  GoldOutlined,
  GiftOutlined,
  ShoppingOutlined,
  UserOutlined,
  BookOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DownOutlined,
} from "@ant-design/icons";

import Logo from "../../assets/images/logobg.png";
import LogoSM from "../../assets/images/logo.png";

import "antd/dist/antd.css";
import AdminRoutes from "./admin.routes";

const AdminDashboard = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  const { Header, Sider, Content } = Layout;
  const { SubMenu } = Menu;
  const { Title } = Typography;
  let { url } = useRouteMatch();

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const menu = (
    <Menu>
      <Menu.Item key="1">Logout</Menu.Item>
      <Menu.Item key="2">Settings</Menu.Item>
    </Menu>
  );

  return (
    <>
      <Router>
        <Layout style={{ height: "100vh" }}>
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            style={{ overflow: "auto", height: "100vh" }}
          >
            {collapsed ? (
              <div
                style={{
                  height: 52,
                  background: "#fff",
                  margin: 16,
                }}
              >
                <img src={LogoSM} alt="logo" height={52} />
              </div>
            ) : (
              <img src={Logo} alt="logo" height={75} style={{ margin: 24 }} />
            )}

            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1" icon={<HomeOutlined />}>
                <NavLink to="/shop/admin/dashboard">Home</NavLink>
              </Menu.Item>
              <SubMenu key="sub1" icon={<GoldOutlined />} title="Collection">
                <Menu.Item key="5">
                  <NavLink to={`${url}/add-collection`}>Add Collection</NavLink>
                </Menu.Item>
                <Menu.Item key="6">
                  <NavLink to={`${url}/collections`}>Collections</NavLink>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<GiftOutlined />} title="Catalogue">
                <Menu.Item key="7">
                  <NavLink to={`${url}/add-product`}>Add Product</NavLink>
                </Menu.Item>
                <Menu.Item key="8">
                  <NavLink to={`${url}/products`}>Products</NavLink>
                </Menu.Item>
              </SubMenu>
              <Menu.Item key="2" icon={<ShoppingOutlined />}>
                <NavLink to={`${url}/orders`}>Orders</NavLink>
              </Menu.Item>
              <Menu.Item key="3" icon={<UserOutlined />}>
                <NavLink to={`${url}/users`}>Users</NavLink>
              </Menu.Item>
              <Menu.Item key="4" icon={<BookOutlined />}>
                <NavLink to={`${url}/posts`}>Post</NavLink>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              <Space direction="horizontal" size={"large"} align="baseline">
                {collapsed ? (
                  <MenuUnfoldOutlined
                    style={{ color: "#fff" }}
                    onClick={toggle}
                  />
                ) : (
                  <MenuFoldOutlined
                    style={{ color: "#fff" }}
                    onClick={toggle}
                  />
                )}

                <Switch>
                  {AdminRoutes.map((route, index) => (
                    <Route
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      children={
                        <Title level={3} style={{ color: "#fff" }}>
                          <route.name />
                        </Title>
                      }
                    />
                  ))}
                </Switch>
              </Space>
              <div style={{ float: "right", paddingRight: 16 }}>
                <Dropdown overlay={menu}>
                  <Space align="center">
                    <Button
                      type="primary"
                      shape="round"
                      icon={<UserOutlined />}
                    >
                      <span>Username</span>
                      <DownOutlined />
                    </Button>
                  </Space>
                </Dropdown>
              </div>
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
                height: "100vh",
                overflow: "scroll",
              }}
            >
              <Switch>
                {AdminRoutes.map((route, index) => {
                  return (
                    <Route
                      key={index}
                      exact={route.exact}
                      path={route.path}
                      children={<route.main {...props} />}
                      {...props}
                    />
                  );
                })}
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Router>
    </>
  );
};

export default AdminDashboard;
