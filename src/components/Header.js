// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import './header.css'

const Header = () => {
  return (
      <header className='header'>
          <h1>Call a Friend</h1>
          <p>Your friendly contact app</p>
          <br/>
      </header>
  )
}

export default Header;