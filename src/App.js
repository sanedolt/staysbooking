import { Layout } from "antd";
import React from "react";
import LoginPage from "./components/LoginPage";
import HostHomePage from "./components/HostHomePage";
import GuestHomePage from "./components/GuestHomePage";
import Headers from "./components/Headers";

const {Content } = Layout;
 
class App extends React.Component {
  state = {
    authed: false,
    asHost: false,
  };
 
  componentDidMount() {
    const authToken = localStorage.getItem("authToken");
    const asHost = localStorage.getItem("asHost") === "true";
    this.setState({
      authed: authToken !== null,
      asHost,
    });
  }
 
  handleLoginSuccess = (token, asHost) => {
    localStorage.setItem("authToken", token);
    localStorage.setItem("asHost", asHost);
    this.setState({
      authed: true,
      asHost,
    });
  };
 
  handleLogOut = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("asHost");
    this.setState({
      authed: false,
    });
  };
 
  renderContent = () => {
    if (!this.state.authed) {
      return <LoginPage handleLoginSuccess={this.handleLoginSuccess} />;
    }
 
    if (this.state.asHost) {
      return <HostHomePage />;
    }
 
    return <GuestHomePage />;
  };
 
  render() {
    return (
      <Layout style={{ height: "100vh" }}>
        <Headers auth={this.state.authed} handleLogOut={this.handleLogOut}/>;
        <Content
          style={{ height: "calc(100% - 64px)", margin: 20, overflow: "auto" }}
        >
          {this.renderContent()}
        </Content>
      </Layout>
    );
  }
}
 
export default App;