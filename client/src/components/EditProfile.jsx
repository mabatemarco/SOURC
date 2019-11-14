import React from 'react';
import { Link } from 'react-router-dom';

export default function EditProfile(props) {
  return (
    <>
      {
        props.profileData &&
        <div className='edit-pg'>
          <h1>Edit Profile</h1>
          <form id='edit-data' handleEditSubmit={props.handleEditSubmit}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              value={props.profileData.username}
              onChange={props.handleEditChange}
            />
            <br />

            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={props.profileData.name}
              onChange={props.handleEditChange}
            />
            <br />

            <label htmlFor="email_address">Email</label>
            <input
              type="text"
              name="email_address"
              id="email_address"
              value={props.profileData.email_address}
              onChange={props.handleEditChange}
            />
            <br />

            <label htmlFor="role">Role</label>
            <select
              type="text"
              name="role"
              id="role"
              onChange={props.handleEditChange}
            >
              <option value='ux'>UX</option>
              <option value='se'>Software Engineer</option>
            </select>
            <br />

            <label htmlFor="image_url">Image Url</label>
            <input
              type="text"
              name="image_url"
              id="image_url"
              value={props.profileData.image_url}
              onChange={props.handleEditChange}
            />
            <br />


            <label htmlFor="about_me">About Me</label>
            <textarea
              name="about_me"
              id="about_me"
              value={props.profileData.about_me}
              onChange={props.handleEditChange}
            />
            <br />

            <input type="submit" value="Submit" />

          </form >


        </div>
      }
    </>
  )





}
