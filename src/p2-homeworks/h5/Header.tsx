import React from "react";
import './Header.css'
import {NavLink} from "react-router-dom";

function Header() {
  return (
    <div className='header'>
      <nav>
        <ul>
          <li><NavLink to='/' className={'navlink'}>Prejunior</NavLink></li>
          <li><NavLink to='/junior' className={'navlink'}>Junior</NavLink></li>
          <li><NavLink to='/junior++' className={'navlink'}>Junior++</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
