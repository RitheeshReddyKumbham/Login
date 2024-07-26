import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    userName: '',
    password: '',
    errMsg: '',
  }
  onSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }
  onChangeName = event => {
    this.setState({userName: event.target.value})
  }
  onChangePassword = event => {
    this.setState({userName: event.target.value})
  }
  submitForm = async event => {
    event.preventDefault()
    const {userName, password, errMsg} = this.state
    const userDetails = {userName, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccess()
    } else {
      this.setState({errMsg: "User name doesn't exist"})
    }
  }
  renderPassword = () => {
    const {password} = this.state
    return (
      <>
        <label className="name-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          className="input"
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }
  renderUserName = () => {
    const {userName} = this.state
    return (
      <>
        <label className="name-label" htmlFor="username">
          USERNAME
        </label>
        <input
          className="input"
          type="text"
          placeholder="Username"
          id="username"
          value={userName}
          onChange={this.onChangeName}
        />
      </>
    )
  }
  render() {
    const {errMsg} = this.state
    return (
      <div className="login-page">
        <img
          className="photo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
        />
        <div className="login-card">
          <form onSubmit={this.submitForm}>
            <img
              className="logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />
            <div className="inp-cont">{this.renderUserName()}</div>
            <div className="inp-cont">{this.renderPassword()}</div>
            <p className="err">{errMsg}</p>
            <button className="login">Login</button>
          </form>
        </div>
      </div>
    )
  }
}
export default LoginForm
