import React from 'react'
import './index.css'
class Header extends React.Component{
  render(){
    return(
      <header>
      <div class='header-container container-flex'>
        <div class='title'>
          <h1>Jan Wojtach</h1>
          <p>Backend Developer</p>
        </div>
        <ul>
          <li><a href="#"><img src="./001-facebook.png" alt='bo' /></a></li>
          <li><a href="https://www.linkedin.com/in/jan-wojtach-1205141b5/"><img src="./002-linkedin.png" alt='bo' /></a></li>
          <li><a href="#"><img src="./003-google-plus.png" alt='bo' /></a></li>
          <li><a href="https://github.com/YannVoytaa"><img src="./004-github.png" alt='bo' /></a></li>

        </ul>
      </div>
    </header>
    )
  }
}

export default Header;
