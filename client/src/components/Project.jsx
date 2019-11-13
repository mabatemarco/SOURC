import React from 'react';
import { getProject } from '../services/api-helper.js';
import GroupPic from '../images/group.jpg'


export default class Project extends React.Component {
  state = {
    currentProject: null,
    owner: false,
    member: false,
    edit: false
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
      <>
        {
          this.state.currentProject && (
            <div className="project">
              <div className="left">
                {this.state.currentProject.image_url ? <img src={this.state.currentProject.image_url} alt="current project" /> :
                  <img src={GroupPic} alt="" />}
              </div>
              <div className="right">
                <h2>{this.state.currentProject.name}</h2>
                <p>{this.state.currentProject.description}</p>
                {this.state.member ?
                  <>
                    <p className="git">Github: {this.state.currentProject.github}</p>
                    <p className="slack"> Slack: {this.state.currentProject.slack}</p>
                  </>
                  :
                  <button>Apply!</button>
                }
              </div>
            </div>
          )}
      </>
    )
  }
}