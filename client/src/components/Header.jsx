import React from 'react';

export default function Header(props) {
  return (
    <nav>
      <button onClick={props.handleShowLogin}>login</button>
      <button onClick={props.handleLogout}>Log Out</button>
    </nav>
  )
}