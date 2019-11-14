import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import { getProjects, getUsers, createProject, getUser } from '../services/api-helper.js';
import Profile from './Profile';
import Project from './Project';
import Home from './Home';
import Header from './Header';
import CreateProject from './CreateProject';

class LoggedIn extends React.Component {
  state = {
    currentUser: null,
    projects: null,
    projectData: {
      name: '',
      description: '',
      image_url: '',
      github: '',
      slack: ''
    }
  }

  componentDidMount = async () => {
    const currentUser = await getUser(this.props.currentUser.id)
    this.setState({
      currentUser,
      projects: null,
    })
    await this.getProjects()
  }

  getProjects = async () => {
    const projects = await getProjects();
    this.setState({
      projects
    })
  }

  handleProjectChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      projectData: {
        ...prevState.projectData,
        [name]: value
      }
    }))
  }

  handleProjectSubmit = async (e) => {
    e.preventDefault()
    const newProject = await createProject(this.state.currentUser.id, this.state.projectData);
    this.setState(prevState => ({
      projects: [newProject, ...prevState.projects]
    }))
    this.props.history.push('/')
    this.setState({
      projectData: {
        name: '',
        description: '',
        image_url: '',
        github: '',
        slack: ''
      }
    })
  }

  render() {
    return (
      <div className="loggedin">
        <Header
          handleLogout={this.props.handleLogout}
          currentUser={this.state.currentUser}
        />
        <Route exact path="/" render={() => (
          <Home
            projects={this.state.projects}
          />
        )} />
        <Route path="/projects/:id" render={(props) => {
          return <Project
            projectId={props.match.params.id}
            currentUser={this.state.currentUser}
          />
        }} />
        <Route path='/projects/create' render={() => (
          <CreateProject
            projectData={this.state.projectData}
            handleProjectChange={this.handleProjectChange}
            handleProjectSubmit={this.handleProjectSubmit}
          />
        )} />
        <Route path="/profiles/:id" render={(props) => (
          <Profile
            id={props.match.params.id} />
        )} />
      </div >
    )
  }
}

export default withRouter(LoggedIn)