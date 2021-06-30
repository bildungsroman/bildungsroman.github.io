import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { NavbarElement, NavbarList, NavbarLogo } from './style';

const Navbar = ({ siteTitle }) => (
  <nav>
    <div className='container'>
      <NavbarElement>
          <NavbarLogo>
            <h3>
              <Link to='/'>
                <span className='align-middle'> {siteTitle} </span>
              </Link>
            </h3>
          </NavbarLogo> 
          <div className='main-navigation'>
            <NavbarList>
              <li><Link to='/' className='lined-link' activeClassName='active'> <span> About </span> </Link></li> 
              <li><Link to='/repositories' className='lined-link' activeClassName='active'> <span> Github </span> </Link></li>  
              <li><Link to='/works' className='lined-link' activeClassName='active'> <span> Speaking </span> </Link></li>  
              <li><Link to='/blog' className='lined-link' activeClassName='active'>  <span> Writing </span> </Link></li>
            </NavbarList>
          </div>
      </NavbarElement>
    </div>
  </nav>
);

Navbar.propTypes = {
  siteTitle: PropTypes.string
}

Navbar.defaultProps = {
  siteTitle: 'Anna Spysz'
}

export default Navbar;
