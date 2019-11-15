import React from 'react';
import { getProject, apply, approve } from '../services/api-helper.js';
import { Link } from 'react-router-dom'
// import GroupPic from '../images/group.jpg'


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

  componentDidMount = async () => {
    await this.currentProject();
    if (this.props.currentUser) {
      this.teamCheck();
      this.getApplicants();
      this.getMembers();
      this.getLeader()
    }
  }

  currentProject = async () => {

    const currentProject = await getProject(this.props.projectId)
    this.setState({
      currentProject
    })

  }

  teamCheck = () => {
    if (this.state.currentProject) {
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

  approve = async (e) => {
    console.log(e.target.value, this.state.currentProject.id)
    const currentProject = await approve(this.state.currentProject.id, e.target.value)
    this.setState({
      currentProject
    })
    if (this.props.currentUser) {
      this.teamCheck();
      this.getApplicants();
      this.getMembers();
      this.getLeader()
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
                  <img src={'https://media.giphy.com/media/6d5uiY7qMnZ9m/source.gif'} alt="" />}
              </div>
              <div className="right">
                <div className="project-text">
                  <h2>{this.state.currentProject.name}</h2>
                  <h3>Created By
                    {this.state.leader &&
                      <Link to={`/profiles/${this.state.leader.id}`}>
                        {' ' + this.state.leader.name}
                      </Link>}
                  </h3>
                  <p className="project-description">{this.state.currentProject.description}</p>
                  {this.state.isMember &&
                    <div className="project-links">
                      <p className="git"><strong>Github: </strong>{this.state.currentProject.github}</p>
                      <p className="slack"> <strong>Slack:</strong> {this.state.currentProject.slack}</p>
                    </div>
                  }
                  {this.state.isApplicant === false && <button onClick={this.apply}>Apply!</button>}
                </div>
                <div className="project-members">
                  <div className="members">
                    <h3>Members</h3>
                    {this.state.members.map(member => (
                      <Link to={`/profiles/${member.id}`}>
                        {member.name}
                      </Link>
                    ))}
                  </div>
                  {this.state.isLeader &&
                    <div className="applicants">
                      <h3>Applicants</h3>
                      {this.state.applicants.map(applicant => (
                        <>
                          <Link to={`/profiles/${applicant.id}`}>
                            {applicant.name}
                          </Link>
                          <button onClick={this.approve} value={applicant.id}>Add to team</button>
                        </>
                      ))}
                    </div>
                  }
                </div>
              </div>
            </div>
          )}
      </>
    )
  }
}