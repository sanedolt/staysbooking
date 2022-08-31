import React, {Component} from 'react';
import { Layout, Menu, Dropdown, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Header } = Layout;

class Headers extends Component {

    userMenu = (
        <Menu>
          <Menu.Item key="logout" onClick={this.props.handleLogOut}>
            Log Out
          </Menu.Item>
        </Menu>
      );
    render() {
        return (
            <Header style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ fontSize: 16, fontWeight: 600, color: "white" }}>
              Stays Booking
            </div>
            {this.props.auth && (
              <div>
                <Dropdown trigger="click" overlay={this.userMenu}>
                  <Button icon={<UserOutlined />} shape="circle" />
                </Dropdown>
              </div>
            )}
          </Header>
        );
    }
}
export default Headers;
