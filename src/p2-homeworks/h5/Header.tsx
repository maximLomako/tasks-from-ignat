import React, {useEffect, useState} from "react";
import './Header.css'
import {NavLink} from "react-router-dom";

function Header() {

  const [showHeader, setShowHeader] = useState(false)

  useEffect(() => {
    setShowHeader(true);
  });




  return (
    <div className={showHeader ? 'header header__active' : 'header'}>
      <nav>
        <ul>
          <li><NavLink to='/pre-junior'  className={'navlink'} activeClassName="activeLink">Prejunior</NavLink></li>
          <li><NavLink to='/junior' className={'navlink'} activeClassName="activeLink">Junior</NavLink></li>
          <li><NavLink to='/junior++' className={'navlink'} activeClassName="activeLink">Junior++</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
