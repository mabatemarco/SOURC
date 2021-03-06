import React from 'react';
// import GroupPic from '../images/group.jpg';
import { Link } from 'react-router-dom';

export default function Home(props) {

  return (
    <>
      <h2 className='projects-heading'>Join <span>or</span> View <span>Current </span>Projects </h2>
      <div className="home" >

        <div className="homeContent">

          {props.projects &&
            props.projects.map(project => (
              <div className="cards" key={project.id}>

                <Link to={`projects/${project.id}`} >
                  {project.image_url ? <img src={project.image_url} alt="current project" /> :
                    <img src={'https://media.giphy.com/media/6d5uiY7qMnZ9m/source.gif'} alt="" />}
                </Link>

                <h2>{project.name}</h2>
                <p>{project.description}</p>
              </div>
            ))
          }

        </div>

      </div>
    </>
  )
}