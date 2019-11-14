import React from 'react';
import { getProject, apply } from '../services/api-helper.js';
import GroupPic from '../images/group.jpg'


export default class Project extends React.Component {
  state = {
    currentProject: null,
    isLeader: false,
    isMember: false,
    isApplicant: false,
    edit: false,
    applicants: [],
    members: [],
    leader: null
  }

  componentdidMount = async () => {

      await this.currentProject();
  
    if (this.props.currentUser) {
      this.teamCheck();
      this.getApplicants();
      this.getMembers();
      this.getLeader()
    }
  }

  componentDidUpdate = async (prevProps, prevState) => {
    if (this.props !== prevProps) {
      if (this.props.projectId) {
        await this.currentProject();
      }
      if (this.props.currentUser) {
        this.teamCheck();
        this.getApplicants();
        this.getMembers();
        this.getLeader()
      }
    }
  }

  currentProject = async () => {
    if (this.props.projectId) {
      const currentProject = await getProject(this.props.projectId)
      this.setState({
        currentProject
      })
    }
  }

  teamCheck = () => {
    const team = this.state.currentProject.users.find(user => {
      return user.id === this.props.currentUser.id
    })
    if (team) {
      if (team.teams.is_leader) {
        this.setState({
          isLeader: true
        })
      }
      if (team.teams.is_member) {
        this.setState({
          isMember: true
        })
      }
      this.setState({
        isApplicant: true
      })
    }
  }

  getApplicants = () => {
    const applicants = this.state.currentProject.users.filter(user => {
      return user.teams.is_member === false
    });
    this.setState({
      applicants
    })
  }

  getMembers = () => {
    const members = this.state.currentProject.users.filter(user => {
      return user.teams.is_member === true
    });
    this.setState({
      members
    })
  }

  getLeader = () => {
    const leader = this.state.currentProject.users.find(user => {
      return user.teams.is_leader === true;
    });
    this.setState({
      leader
    })
  }

  apply = async (prevState) => {
    const currentProject = await apply(this.state.currentProject.id, this.props.currentUser.id)
    this.setState(prevState => ({
      currentProject,
      isApplicant: true,
      applicants: [...prevState.applicants, this.props.currentUser]
    }))
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
                <div className="profile-text">
                  <h2>{this.state.currentProject.name}</h2>
                  <h3>Created By {this.state.leader && this.state.leader.name}</h3>
                  <p>{this.state.currentProject.description}</p>
                  {this.state.isMember &&
                    <div className="project-links">
                      <p className="git">Github: {this.state.currentProject.github}</p>
                      <p className="slack"> Slack: {this.state.currentProject.slack}</p>
                    </div>
                  }
                  {this.state.isApplicant === false && <button onClick={this.apply}>Apply!</button>}
                </div>
              </div>
            </div>
          )}
      </>
    )
  }
}