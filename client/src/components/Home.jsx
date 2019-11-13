import React from 'react';
import GroupPic from '../images/group.jpg';

export default function Home(props) {

  return (

    <div className="home" >

      <div className="homeContent">

        {props.projects &&
          props.projects.map(project => (
            <div className="cards" key={project.name}>
              {project.img_url ? <img src={project.image_url} alt="current project" /> :
                <img src={GroupPic} alt=""/>}
              <h2>{project.name}</h2>
              <p>{project.description}</p>
            </div>
          ))
        }
        
      </div>

    </div>

  )
}