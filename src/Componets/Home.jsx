import React from 'react';
import logo from '../assets/logo.png'
import Exit from './Exit';
import { Note } from './Note';
const Home = ({ currentUser }) => {

  return (
    <>
      <Exit />
      <img src="" alt="" />
      <div id="div-logo"> <img id="img-logo" src={logo} alt="img" className="home-img" /> </div>
      <Note />
    </>
  )
}

export default Home;
