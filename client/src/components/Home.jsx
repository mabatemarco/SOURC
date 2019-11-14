import React from 'react';
import GroupPic from '../images/group.jpg';
import { Link } from 'react-router-dom';

export default function Home(props) {

  return (

    <div className="home" >

      <div className="homeContent">

        {props.projects &&
          props.projects.map(project => (
            <div className="cards" key={project.id}>

              <Link to={`projects/${project.id}`} >
                {project.image_url ? <img src={project.image_url} alt="current project" /> :
                  <img src={GroupPic} alt="" />}
              </Link>

              <h2>{project.name}</h2>
              <p>{project.description}</p>
            </div>
          ))
        }

      </div>

    </div>

  )
}