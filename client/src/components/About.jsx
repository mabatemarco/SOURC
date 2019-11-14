import React from 'react';
import Image from '../images/Cordero.jpg';

export default function About(props) {

  return (
      <div className="container">

        <div className="cardWrap">

          <div className="card-one">

            <div className="cardImg">
              <img src="" alt="profile pic" />
            </div>

            <ul className="social-icons">
              <li><a href=""></a></li>
              <li><a href=""></a></li>
              <li><a href=""></a></li>
              <li><a href=""></a></li>
            </ul>

            <div className="details">
              <h2>Mike Abatemarco
              <br />
                <span className="job-title">
                  JOB TITLE
                </span>
              </h2>
            </div>
          </div>
        </div>

        <div className="cardWrap">

          <div className="card-two">

            <div className="cardImg">
              <img src={Image} width='100%' height='100%' alt="profile pic" />
            </div>

            <ul className="social-icons">
              <li><a href=""></a></li>
              <li><a href=""></a></li>
              <li><a href=""></a></li>
              <li><a href=""></a></li>
            </ul>

            <div className="details">
              <h2>Christopher Cordero
              <br />
                <span className="job-title">Junior Software Engineer</span>
              </h2>
            </div>
          </div>
        </div>


        <div className="cardWrap">

          <div className="card-three">

            <div className="cardImg">
              <img src="" alt="profile pic" />
            </div>

            <ul className="social-icons">
              <li><a href=""></a></li>
              <li><a href=""></a></li>
              <li><a href=""></a></li>
              <li><a href=""></a></li>
            </ul>

            <div className="details">
              <h2>Yohlanna Cort
              <br />
                <span class="job-title">JOB TITLE</span>
              </h2>

            </div>
          </div>
        </div>
      </div>

  )
}
