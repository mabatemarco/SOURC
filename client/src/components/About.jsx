import React from 'react';
import Image1 from '../images/Chris.JPG';
import Image2 from '../images/Mike.png';
import Image3 from '../images/Yohlanna.jpg'

export default function About(props) {

  return (
    <div className="container">

      <h1 id='abt-title'>About <span>Us</span></h1>

      <div className="card ">
        <div className='inner'>
          <div className='cardFront'>
            <img src={Image2} width='100%' height='100%' alt="Mike's Profile Picture" />
          </div>
          <div className="cardBack">
            <h2>Mike Abatemarco</h2>
            <h3>Junior Junior Developer</h3>
            <div className='social-links'>
              <a href='https://github.com/mabatemarco' target='_blank' ><i class="im im-github"></i></a>
              <a href='https://www.linkedin.com/in/mikeabatemarco/' target='_blank' ><i class="im im-linkedin"></i></a>
              <a href='https://www.instagram.com/freshhotnog/' target='_blank' ><i class="im im-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className='inner'>
          <div className='cardFront'>
            <img src={Image1} width='100%' height='100%' alt="Christopher's Profile Picture" />
          </div>
          <div className="cardBack">
            <h2>Christopher Cordero</h2>
            <h3>Junior Software Engineer</h3>
            <div className='social-links'>
              <a href='https://git.generalassemb.ly/Cordero' target='_blank' ><i class="im im-github"></i></a>
              <a href='https://www.linkedin.com/in/christopher-cordero/' target='_blank' ><i class="im im-linkedin"></i></a>
              <a href='https://www.instagram.com/el_quesoblanco/' target='_blank' ><i class="im im-instagram"></i></a>
              <a href='https://twitter.com/QuesoBlanco97' target='_blank' ><i class="im im-twitter"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className='inner'>
          <div className='cardFront'>
            <img src={Image3} width='100%' height='100%' alt="Yohlanna's Profile Picture" />
          </div>
          <div className="cardBack">
            <h2>Yohlanna Cort</h2>
            <h3>Junior Software Developer</h3>
            <div className='social-links'>
              <a href='https://github.com/lanna817/' target='_blank' ><i class="im im-github"></i></a>
              <a href='https://www.linkedin.com/in/yohlannacort/' target='_blank' ><i class="im im-linkedin"></i></a>
              <a href='https://www.instagram.com/?hl=en' target='_blank' ><i class="im im-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>

    </div >

  )
}
