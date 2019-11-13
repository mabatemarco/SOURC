import React from 'react'

export default function Login(props) {
  return (
    <div className='log-overlay'>
      <form id="login-modal" onSubmit={props.handleLoginSubmit} >
        <div className="top">
          <span onClick={props.handleShowLogin}>X</span>
          {props.falseLogin && <p>Sorry, your login info is incorrect!</p>}
        </div>
        <div className="pair">
          <label htmlFor='username'>Username</label>
          <input name='username' type='text' value={props.loginData.usernamd} onChange={props.handleLoginChange} />
        </div>
        <div className="pair">

          <label htmlFor='password'>Password</label>
          <input name='password' type='password' value={props.loginData.password} onChange={props.handleLoginChange} />

          <input id="login-submit" type='submit' value='Log in' />
        </div>

      </form>
    </div>
  )
}