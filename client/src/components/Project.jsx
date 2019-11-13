import React from 'react';
import { getProject } from '../services/api-helper.js';


export default class Project extends React.Component {
  state = {
    currentProject: null,
    owner: false,
    member: false
  }

  componentDidMount = async () => {
    await this.currentProject()
    this.teamCheck()
  }

  currentProject = async () => {
    const currentProject = await getProject(this.props.projectId)
    this.setState({
      currentProject
    })
    console.log(currentProject)
  }

  teamCheck = () => {
    const team = this.state.currentProject.users.find(user => {
      return user.id === this.props.currentUser.id
    })
    if (team) {
      if (team.teams.is_leader) {
        this.setState({
          owner: true
        })
      }
      if (team.teams.is_member) {
        this.setState({
          member: true
        })
      }
    }
  }

  render() {
    return (
      <></>
    )
  }
}