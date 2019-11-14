import React from 'react';
import './App.css';
import { Link, Route, withRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Register from './components/Register';
import LoggedIn from './components/LoggedIn';
import Welcome from './components/Welcome';
import Login from './components/Login';
// import Animation from './components/Animation';
import { verifyUser, loginUser, registerUser } from './services/api-helper'

class App extends React.Component {
  state = {
    currentUser: null,
    loginData: {
      username: '',
      password: ''
    },
    registerData: {
      username: '',
      password: '',
      name: '',
      email_address: '',
      role: '',
      about_me: '',
      image_url: ''
    },
    showLogin: false,
    falseLogin: false
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

  handleLoginSubmit = async (e) => {
    e.preventDefault()
    const currentUser = await loginUser(this.state.loginData);
    if (currentUser.error) {
      this.setState({
        falseLogin: true
      })
    } else {
      this.setState({
        currentUser,
        showLogin: false
      })
      this.props.history.push('/')

    }
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

  handleRegisterSubmit = async (e) => {
    e.preventDefault()
    const currentUser = await registerUser(this.state.registerData);
    this.setState({ currentUser })
    this.props.history.push('/')
  }

  handleLogout = () => {
    this.setState({
      currentUser: null
    })
    localStorage.removeItem('authToken')
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="app">

        {this.state.showLogin &&
          <Login
            handleLoginChange={this.handleLoginChange}
            handleLoginSubmit={this.handleLoginSubmit}
            handleShowLogin={this.handleShowLogin}
            loginData={this.state.loginData}
            falseLogin={this.state.falseLogin}
          />}
        {this.state.currentUser ?
          <Route path='/' render={() => (
            <LoggedIn
              currentUser={this.state.currentUser}
              handleLogout = {this.handleLogout}
            />
          )} />
          :
          <Route exact path='/' render={() => (
            <Welcome
              handleShowLogin={this.handleShowLogin}
            />)}
          />}
        <Route path='/register' render={() => (
          <Register
            handleRegisterSubmit={this.handleRegisterSubmit}
            handleRegisterChange={this.handleRegisterChange}
            registerData={this.state.registerData}
          />
        )}
        />
        <Footer />

      </div>
    );
  }
}

export default withRouter(App)