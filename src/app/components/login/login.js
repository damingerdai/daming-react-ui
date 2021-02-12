import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import "./login.scss";

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.login = this.login.bind(this);
  }

  handleUsernameChange($event) {
    this.setState({
      username: $event.target.value,
    });
  }

  handlePasswordChange($event) {
    this.setState({
      password: $event.target.value,
    });
  }

  isDisable() {
      return !this.state.username || !this.state.password;
  }

  login() {
      console.log('test');
  }

  render() {
    return (
      <React.Fragment>
        <div className="box">
          <div className="content">
            <div className="card">
              <h3 className="title">登录页面</h3>
              <form noValidate autoComplete="off" className="form">
                <TextField
                  className="w-full"
                  id="username"
                  label="用户名"
                  variant="outlined"
                  value={this.state.username}
                  onChange={this.handleUsernameChange}
                  required
                />
                <div className="divider"></div>
                <TextField
                  className="w-full"
                  id="password"
                  label="密 码"
                  type="password"
                  variant="outlined"
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                  required
                />
              </form>
              <div className="action">
                <Button variant="contained" color="primary" disabled={this.isDisable()} onClick={this.login}>
                  登录
                </Button>
                {/* <Button variant="contained">取消</Button> */}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
