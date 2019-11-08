import React from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import Animation from './components/Animation'
import Header from './components/Header'
import Footer from './components/Footer'
import Register from './components/Register'
import LoggedIn from './components/LoggedIn'
import Welcome from './components/Welcome'

class App extends React.Component {
  state = {

  }

  render() {
    return (
      <div className="app">
        <Header/>
      </div>
    );
  }
}

export default App;
