import React from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import Footer from './components/Footer'
import Register from './components/Register'
import LoggedIn from './components/LoggedIn'
import Welcome from './components/Welcome'
import Login from './components/Login';
import { verifyUser, loginUser, registerUser, getUser, editUser } from './services/api-helper'


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
    falseLogin: false,
    profile: null,
    profileData: {
      username: '',
      password_digest: '',
      name: '',
      email_address: '',
      role: '',
      about_me: '',
      image_url: ''
    }
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

  setFormData = () => {
    if (this.state.profile) {
      const {
        username,
        password_digest,
        name,
        email_address,
        role,
        about_me,
        image_url
      } = this.state.profile

      this.setState({
        profileData: {
          username,
          password_digest,
          name,
          email_address,
          role,
          about_me,
          image_url
        }
      })
    }
  }

  handleEditChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      profileData: {
        ...prevState.profileData,
        [name]: value
      }
    })
    )
  }

  handleEditSubmit = async (e) => {
    e.preventDefault()
    const profile = await editUser(this.state.profile.id, this.state.profileData);
    this.setState({ profile })
    this.props.history.push(`/profiles/${this.state.profile.id}`)
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
              handleLogout={this.handleLogout}
              profileData={this.state.profileData}
              handleEditChange={this.handleEditChange}
              handleEditSubmit={this.handleEditSubmit}
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