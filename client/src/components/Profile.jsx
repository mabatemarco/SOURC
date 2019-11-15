import React from 'react';
import { Link, Route } from 'react-router-dom';
import EditProfile from './EditProfile';
import { getUser, getUsers, editUser, deleteUser } from '../services/api-helper.js';
import { proimg } from '../images/proimg.png';

export default class Profile extends React.Component {
  state = {
    profile: null,
    isOwner: false,
    

  }

  componentDidMount = async () => {
    await this.currentProfile()
    this.ownerPro()
  
  }

  currentProfile = async () => {
    const profile = await getUser(this.props.id)
    this.setState({
      profile
    })
  }
  componentDidUpdate = async (prevProps) => {
    if (this.props !== prevProps) {
      await this.currentProfile()
      this.ownerPro()
    }
  }


  ownerPro = async () => {
    if (this.props.currentUser) {
      if (parseInt(this.props.id) === this.props.currentUser.id) {
        this.setState({
          isOwner: true
        })
      }
      console.log(this.props.currentUser.id)
    }
  }


  render() {
    return (
      <div className='pro-pg'>
        <h1 className='pro-title'>Profile</h1>
        {
          this.state.profile && (
            <div className='name-pro'>
              <div className="pro-image">
                {this.state.profile.image_url ? <img className='profile-img' src={this.state.profile.image_url} alt="current project" /> :
                  <img className='profile-img' src={proimg} alt="profile silhouette" />}
              </div>
              <h3 className='role'>{this.state.profile.role}</h3>
              <h2 id='name'>{this.state.profile.username}</h2>
              <p className='bio'>{this.state.profile.about_me}</p>
              <p className='bio'>Contact: <span id='email'>{this.state.profile.email_address}</span></p>
              {this.state.isOwner &&
                <div className='edit-delbtn'>

                  <Link to={`/editprofile`} >
                    <button id='edit-btn'>Edit Profile</button>
                  </Link>
                  <button id='del-btn'>Delete </button>
                </div>

              }

            <div className='projectuser'>
                <h1>{}</h1>
              </div>
            </div>
          )
          
        

        }


      </div>
    )
  }
}


