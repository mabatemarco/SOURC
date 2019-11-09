import React from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage'
import Animation from './components/Animation'
import Header from './components/Header'
import Footer from './components/Footer'
import Register from './components/Register'
import LoggedIn from './components/LoggedIn'
import Welcome from './components/Welcome'
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
      role: '',
      about_me: ''
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

  handleLogin = async (loginData) => {
    const currentUser = await loginUser(loginData);
    this.setState({ currentUser })
  }

  handleRegister = async (registerData) => {
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


        <Header />
        <Animation />
        {currentUser ? <LoggedIn /> : <Welcome />}
        <Footer />

      </div>
    );
  }
}

