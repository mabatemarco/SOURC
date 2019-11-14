import React from 'react';
import { Link, Route } from 'react-router-dom';
import { getUser, getUsers } from '../services/api-helper.js';
import { imgPro } from '../images/imgHolder.png';

export default class Profile extends React.Component {
  state = {
    profile: null

  }
  
  componentDidMount =  async () => {
   await this.currentProfile()
 
  }
  currentProfile = async () => {
      const profile = await getUser(this.props.id)
      this.setState({
        profile
      })
      console.log(profile)
    
  }

  render() {
    return (
      <div className='pro-pg'>
        <h1 className='pro-title'>Profile</h1>
        {
          this.state.profile && (
            <div className='name-pro'>
              <h2 id='name'>{this.state.profile.username}</h2>
              <div className="pro-image">
                {this.state.profile.image_url ? <img className='profile-img' src={this.state.profile.image_url} alt="current project" /> :
                  <img className='profile-img' src={imgPro} alt="profile silhouette" />}
              </div>
            
            
            
            </div>





          )





        }


      </div>
    )
  }
}


/* <img className='pro-img' src={pro} alt='profile silhouette' width='300px' /> */
