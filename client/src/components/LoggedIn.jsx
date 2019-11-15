import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import { getProjects, getUsers, createProject, getUser, editUser, verifyUser } from '../services/api-helper.js';
import Profile from './Profile';
import Project from './Project';
import Home from './Home';
import Header from './Header';
import CreateProject from './CreateProject';
import About from '../components/About';
import EditProfile from '../components/EditProfile';

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

  componentdidMount = async () => {
    this.getProjects()
      await this.getUser()
      await this.currentProfile()
      await this.setFormData()
    
  }

  componentDidUpdate = async (prevProps, prevState) => {
    if (this.props !== prevProps) {
      await this.getProjects()
      // await this.getUser()
    }
  }

  getProjects = async () => {
    const projects = await getProjects();
    this.setState({
      projects
    })
  }

  getUser = async () => {
    if (this.props.currentUser) {
      const currentUser = await getUser(this.props.currentUser.id)
      this.setState({
        currentUser
      })
    }
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
    e.preventDefault();
    const newProfile = await editUser();
    this.setState({ newProfile })

  }


  render() {
    return (
      <div className="loggedin">
        <Header
          handleLogout={this.props.handleLogout}
          currentUser={this.props.currentUser}
        />
        {this.state.projects &&
          <Route exact path="/" render={() => (
            <Home
              projects={this.state.projects}
            />
          )} />
        }
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
            id={props.match.params.id}
            currentUser={this.props.currentUser}
          />
        )} />
        <Route path='/about' render={() => (<About />)} />


        <Route exact path='/editprofile' render={(props) => (
                <EditProfile
                  handleEditChange={this.props.handleEditChange}
                  handleEditSubmit={this.props.handleEditSubmit}
                  profileData={this.props.profileData} />)} />
      </div >
    )
  }
}

export default withRouter(LoggedIn)