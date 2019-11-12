import React from 'react';
import './App.css';
import { Link, Route, withRouter } from 'react-router-dom';
import Animation from './components/Animation'
import Header from './components/Header'
import Footer from './components/Footer'
import Register from './components/Register'
import LoggedIn from './components/LoggedIn'
import Welcome from './components/Welcome'
import Login from './components/Login'
import { verifyUser, loginUser, registerUser } from './services/api-helper'

export default class App extends React.Component {
  state = {
    currentUser: null,
    loginData: {
      username: '',
      password: ''
    },
    registerData: {
      username: '',
      password: '',
    },
    showLogin: false
  }

  componentDidMount() {
    this.handleVerify()
  }

  handleVerify = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser })
    }
  }

  handleLoginChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      loginData: {
        ...prevState.loginData,
        [name]: value
      }
    }))
  }

  handleShowLogin = () => {
    this.setState(prevState => ({
      showLogin: !prevState.showLogin
    }))
  }

  handleLoginSubmit = async (loginData) => {
    const currentUser = await loginUser(loginData);
    this.setState({ currentUser })
  }

  handleRegisterChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      registerData: {
        ...prevState.registerData,
        [name]: value
      }
    }))
  }

  handleRegisterSubmit = async (registerData) => {
    const currentUser = await registerUser(registerData);
    this.setState({ currentUser })
  }

  handleLogout = () => {
    this.setState({
      currentUser: null
    })
    localStorage.removeItem('authToken')
  }

  render() {
    return (
      <div className="app">
        {/* <Header
          currentUser={this.state.currentUser}
          handleLoginSubmit={this.handleLoginSubmit}
          handleShowLogin={this.handleShowLogin}
          handleLogout={this.handleLogout}
          handleShowLogin={this.handleShowLogin}
        /> */}
        <Animation />
        {this.state.showLogin &&
          <Login
            handleLoginChange={this.handleLoginChange}
            handleLoginSubmit={this.handleLoginSubmit}
            handleShowLogin={this.handleShowLogin}
          />}
        {this.state.currentUser ?
          <LoggedIn /> :
          <Welcome
            handleLoginSubmit={this.handleLoginSubmit}
            handleShowLogin={this.handleShowLogin}
          />}
        <Route path='/register' render={() => (
          <Register
            handleRegisterSubmit={this.handleRegisterSubmit}
            handleShowLogin={this.handleShowLogin}

          />
        )}
        />
        <Footer />

      </div>
    );
  }
}

