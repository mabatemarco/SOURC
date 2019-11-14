import React from 'react';
import { Link, Route } from 'react-router-dom';
import EditProfile from './EditProfile';
import { getUser, getUsers, editUser, deleteUser } from '../services/api-helper.js';
import { proimg } from '../images/proimg.png';

export default class Profile extends React.Component {
  state = {
    profile: null,
    isOwner: false,
    // profileData: {
    //   username: '',
    //   password_digest: '',
    //   name: '',
    //   email_address: '',
    //   role: '',
    //   about_me: '',
    //   image_url: ''
    // }

  }

  componentDidMount = async () => {
    await this.currentProfile()
    this.ownerPro()
    this.setFormData()
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

  // setFormData = () => {
  //   if (this.state.profile) {
  //     const {
  //       username,
  //       password_digest,
  //       name,
  //       email_address,
  //       role,
  //       about_me,
  //       image_url
  //     } = this.state.profile

  //     this.setState({
  //       profileData: {
  //         username,
  //         password_digest,
  //         name,
  //         email_address,
  //         role,
  //         about_me,
  //         image_url
  //       }
  //     })
  //   }
  // }


  handleEditChange = (e) => {
    const { name, value } = e.target;
    // const edit = editUser(this.props.profile.id, this.state.data)
    this.setState(prevState => ({
      profileData: {
        ...prevState.data,
        [name]: value

      }
    })
    )
  }

  handleEditSubmit = async (e) => {
    e.preventDefault();
    const newProfile = await editUser(this.state.profileData);
    this.setState({ newProfile })
    this.props.history.push('/')

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
              <h2 id='name'>{this.state.profile.username}</h2>
              <p className='bio'>{this.state.profile.about_me}</p>
              <p className='bio'>Contact: <span id='email'>{this.state.profile.email_address}</span></p>
              {this.state.isOwner &&
                <div className='edit-delbtn'>
                  <Link to={`/editprofile`} >
                    <button className='edit-btn'>Edit Profile</button>
                  </Link>
                  <button className='del-btn'>Delete Profile</button>

                </div>

              }

              <Route exact path='/editprofile' render={(props) => (
                <EditProfile
                  handleEditChange={this.handleEditChange}
                  handleEditSubmit={this.handleEditSubmit}
                  profileData={this.state.profileData} />)} />

            </div>




          )




        }


      </div>
    )
  }
}


