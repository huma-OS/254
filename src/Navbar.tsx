import React from 'react';
// import { useState } from 'react';
import Menu from './Menu';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  // const [menuOpen, setMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setMenuOpen(!menuOpen);
  // }

  // const closeMenu = () => {
  //   setMenuOpen(false);
  // };

return (
// class="osh-header"
<nav className="navbar">
  <div className="osh-header-titles-all">
    <a href="http://bilitanonne.com/" className="header-brand-link">
    <img src="/img/B-LOGO-blk.jpg" alt="bilitanonne african artisanal chocolate icon logo" className="brand-icon-header" />
      <div className="osh-header-titles">
        <h1 className="titles-title">BILITANONNE</h1>
        <p className="titles-title-jd">AFRICAN ARTISANAL CHOCOLATE</p>
      </div>
    </a>
  </div>
  {/* <div className={`osh-header-menu-btn ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
    <div className="osh-header-menu-btn-burger"></div>
  </div> */}
        <Link to="/subscribe" className="osh-header-menu-btn">
        <button 
          className="subscribe-cta" 
          // onClick={() => window.open('https://eu.jotform.com/242234028147349', '_blank')}
        >
          SUBSCRIBE
        </button>
        </Link>

  {/* class="osh-header-menu" */}
  {/* <Menu isOpen={menuOpen} closeMenu={closeMenu}/> */}
</nav>
);
}

export default Navbar;