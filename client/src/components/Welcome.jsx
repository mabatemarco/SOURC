import React from 'react';
import image from '../images/logowte.png'


export default function Welcome(props) {
  const {loginData} = props
  return (
    <div className='welcome-pg'>
<button id='btn-log'>Log in</button>
    {/* <img id='logo-collab' src={image} width='110px' height='110px'   alt='sourc logo' /> */}
      <h1 className='title'>Collaborate with Software Developers and UX/I designers on projects.</h1>
      <div className='welcome-para'>
      <h2>Join teams.</h2>
      <h2>Build your network.</h2>
        <h2>Socialize.</h2>
        <h2>Find a S( )urc!</h2>
      </div>
      <button onClick='' id='btn-sign'>Sign Up</button>
      
      {/* <form onSubmit={handleSubmit} >
        <label htmlFor='username'>Username</label>
        <input name='username' type='text' value={loginData} onChange={handleChange} />

        <label htmlFor='password'>Password</label>
        <input name='password' type='password' value={loginData} onChange={handleChange} />

        <input type='submit' value='Log in' />

      </form> */}
    
    </div>
  )
}