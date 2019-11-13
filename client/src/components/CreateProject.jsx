import React from 'react'

export default function CreateProject(props) {
  return (
    <form id="register" onSubmit={props.handleRegisterSubmit} >

      <label htmlFor="name">Project Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={props.projetData.name}
        onChange={props.handleRegisterChange}
      />
      <br />

      <label htmlFor="description">Description</label>
      <input
        type="textarea"
        name="description"
        id="description"
        value={props.projetData.description}
        onChange={props.handleRegisterChange}
      />
      <br />

      <label htmlFor="image_url">Image</label>
      <input
        type="text"
        name="image_url"
        id="image_url"
        value={props.projetData.image_url}
        onChange={props.handleRegisterChange}
      />
      <br />

      <label htmlFor="github">Github Address</label>
      <input
        type="text"
        name="github"
        id="github"
        value={props.projetData.github}
        onChange={props.handleRegisterChange}
      />
      <br />

      <label htmlFor="slack">Slack Channel</label>
      <input
        type="text"
        name="slack"
        id="slack"
        value={props.projetData.slack}
        onChange={props.handleRegisterChange}
      />
      <br />

      <input type="submit" value="Submit" />

    </form >
  )
}