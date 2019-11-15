import React from 'react';
import { Link, Route } from 'react-router-dom';
import EditProfile from './EditProfile';
import { getUser, deleteUser } from '../services/api-helper.js';
import Blank from '../images/blnk.png';


export default class Profile extends React.Component {
  state = {
    profile: null,
    isOwner: false

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


  ownerPro = async () => {
    if (this.props.currentUser) {
      if (parseInt(this.props.id) === this.props.currentUser.id) {
        this.setState({
          isOwner: true
        })
      }
    }
  }





  render() {
    return (
      <div className='pro-pg'>

        <h1 className='pro-title'>View.<span>Profile</span></h1>

        {
          this.state.profile && (
            <div className='name-pro'>
              <div className="pro-image">
                {this.state.profile.image_url ? <img src={this.state.profile.image_url} width='318px' height='auto' alt="current project" /> :
                  <img src={Blank} width='318px' height='auto' alt="man walking" />}
                <h2 id='name'>{this.state.profile.username}</h2>
              </div>
              <div className='brief-pro'>
                <h3 className='role'>Type: {this.state.profile.role}</h3>
                <p className='bio'>Bio: {this.state.profile.about_me}</p>
                <p className='bio'>Email: <span id='email'>{this.state.profile.email_address}</span></p>
                {this.state.isOwner &&
                  <div className='edit-delbtn'>

                    <Link to={`/editprofile`} >
                      <button id='edit-btn'>Edit Profile</button>
                    </Link>
                    <button value={this.state.profile.id} onClick={this.props.deleteProfile} id='del-btn'>Delete </button>
                  </div>

                }
              </div>

            </div>
          )
        }




      </div>






    )
  }
}


