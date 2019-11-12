import React from 'react';
import image from '../images/logotrsp.png'


export default function Welcome(props) {
  const { loginData } = props
  return (
    <div className='welcome-pg'>

      <h1 className='title-wel'>Collaborate with Software Developers and UX/I designers on projects.</h1>
      <div className='welcome-para'>

      <h2>Join teams.</h2>
      <h2>Build your network.</h2>
        <h2>Update your portfolio.</h2>

        <h2>Find a S(/ )urc!</h2>
      </div>
      <button onClick='' id='btn-sign'>Sign Up</button>
    </div>
  )
}