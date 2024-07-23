import React from "react";
import { Link } from 'react-router-dom';

interface MenuProps {
  isOpen: Boolean;
  closeMenu: () => void;
}

const Menu: React.FC<MenuProps> = ({isOpen, closeMenu}) => {
  return ( 
    <div className={`links osh-header-menu ${isOpen ? 'active-menu' : ''}`} onClick={closeMenu}>
     <Link to="/about" className="header-links" onClick={closeMenu}>ABOUT</Link>
     <Link to="/shop" className="header-links" onClick={closeMenu}>SHOP</Link>
     <Link to="/african" className="header-links" onClick={closeMenu}>AFRICAN</Link>
     <Link to="/artisanal" className="header-links" onClick={closeMenu}>ARTISANAL</Link>
     <Link to="/chocolate" className="header-links" onClick={closeMenu}>CHOCOLATE</Link>
     <Link to="mailto:info@bilitanonne.com" className="header-links" onClick={closeMenu}>CONTACT</Link>
  </div>
  // use the links above <Link to="#african" className="header-links" onClick={closeMenu}>AFRICAN</Link> 
  // <p id="african">Hyperlinks are utilized by a web browser to move from one page to another...</p> to jump to a section of the page
   );
}
 
export default Menu;