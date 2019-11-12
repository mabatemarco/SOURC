import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import { getProjects, getUsers } from '../services/api-helper.js'
import Profile from './Profile'
import Project from './Project'
import Home from './Home'
import Header from './Header'
import CreateProject from './CreateProject'

class LoggedIn extends React.Component {
  state = {
    currentUser: null,
    projects: null,
    users: null
  }

  componentDidMount = () => {
    this.setState({
      currentUser: this.props.currentUser,
      projects: null,
    })
    this.getProjects()
    this.getUsers()
  }

  getProjects = async () => {
    const projects = await getProjects();
    this.setState({
      projects
    })
  }

  getUsers = async () => {
    const users = await getUsers();
    this.setState({
      users
    })
  }

  render() {
    return (
      <div class="loggedin">
        <Header />
        <Route exact path="/" render={() => (
          <Home
            projects={this.state.projects}
          />
        )} />
        <Route path="/projects/:id" render={(props) => (
          <Project id={parseInt(props.match.params.id)}
          />
        )} />
        <Route path='projects/create' render={() => (
          <CreateProject />
        )} />
        <Route path="/profile/:id" render={(props) => (
          <Profile profile={this.state.users.find(user => {
            return user.id === parseInt(props.match.params.id)
          })}
            currentUser={this.state.currentUser}
          />
        )} />
      </div >
    )
  }
}

export default LoggedIn