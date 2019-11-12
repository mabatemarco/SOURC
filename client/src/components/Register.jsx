import React from 'react'

export default function Register(props) {
  return (
    <form id="register" onSubmit={props.handleRegisterSubmit} >

      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        id="username"
        value={props.registerData.username}
        onChange={props.handleRegisterChange}
      />
      <br />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        value={props.registerData.password}
        onChange={props.handleRegisterChange}
      />
      <br />

      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={props.registerData.name}
        onChange={props.handleRegisterChange}
      />
      <br />

      <label htmlFor="email_address">Email</label>
      <input
        type="text"
        name="email_address"
        id="email_address"
        value={props.registerData.email_address}
        onChange={props.handleRegisterChange}
      />
      <br />

      <label htmlFor="role">Role</label>
      <select
        type="text"
        name="role"
        id="role"
        onChange={props.handleRegisterChange}
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
        value={props.registerData.image_url}
        onChange={props.handleRegisterChange}
      />
      <br />


      <label htmlFor="about_me">About Me</label>
      <input
        type="text"
        name="about_me"
        id="about_me"
        value={props.about_me}
        onChange={props.handleRegisterChange}
      />
      <br />

      <input type="submit" value="Submit" />

    </form >
  )
}