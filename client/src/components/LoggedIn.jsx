import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import { getProjects } from '../services/api-helper.js'
import Profile from './Profile'
import Project from './Project'
import Home from './Home'

class LoggedIn extends React.Component {
  state = {
    currentUser: null
  }

  componentDidMount = () => {
    this.setState({
      currentUser: this.props.currentUser,
      projects: null,
    })
    this.getProjects()
  }

  getProjects = async () => {
    const projects = await getProjects();
    this.setState({
      projects
    })
  }

  render() {
    return (
      <div class="loggedin">
        <Route exact path="/" render={() => (
          <Home />
        )} />
        <button onClick={this.props.handleLogout}>Log Out</button>
      </div>
    )
  }
}

export default LoggedIn