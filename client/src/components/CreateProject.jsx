import React from 'react'

export default function CreateProject(props) {
  return (
    <div className="new-project-pg">
      <h1>Create Your New Project Below</h1>
      <form id="project" onSubmit={props.handleProjectSubmit} >

        <label htmlFor="name">Project Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={props.projectData.name}
          onChange={props.handleProjectChange}
        />
        <br />

        <label htmlFor="description">Description</label>
        <textarea
          type="textarea"
          name="description"
          id="description"
          value={props.projectData.description}
          onChange={props.handleProjectChange}
        />
        <br />

        <label htmlFor="image_url">Image</label>
        <input
          type="text"
          name="image_url"
          id="image_url"
          value={props.projectData.image_url}
          onChange={props.handleProjectChange}
        />
        <br />

        <label htmlFor="github">Github Address</label>
        <input
          type="text"
          name="github"
          id="github"
          value={props.projectData.github}
          onChange={props.handleProjectChange}
        />
        <br />

        <label htmlFor="slack">Slack Channel</label>
        <input
          type="text"
          name="slack"
          id="slack"
          value={props.projectData.slack}
          onChange={props.handleProjectChange}
        />
        <br />

        <input type="submit" value="Submit" />

      </form >
    </div>
  )
}