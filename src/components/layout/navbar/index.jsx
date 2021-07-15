import React from 'react';
import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { DarkSwitch, NavbarElement, NavbarList, NavbarLogo } from './style';
import logo from '../../../assets/img/logo-sm.png';

const Navbar = ({ isDark, siteTitle, toggleDark }) => (
  <nav>
    <div className='container'>
      <NavbarElement>
          <NavbarLogo>
            <h3>
              <Link to='/'>
                <img src={logo} alt={siteTitle} />
              </Link>
            </h3>
          </NavbarLogo>
          <div className='main-navigation'>
            <NavbarList>
              <li><AnchorLink to='/#about' className='lined-link' activeClassName='active'> <span> About </span> </AnchorLink></li> 
              <li><Link to='/coding' className='lined-link' activeClassName='active'> <span> Coding </span> </Link></li>  
              <li><Link to='/speaking' className='lined-link' activeClassName='active'> <span> Speaking </span> </Link></li>  
              <li><Link to='/writing' className='lined-link' activeClassName='active'>  <span> Writing </span> </Link></li>
              <DarkSwitch>
                <label class='switch'>
                  <FontAwesomeIcon icon='adjust' />
                  <div>
                    <input
                      type='checkbox'
                      onChange={() => toggleDark()}
                      checked={!!isDark}
                    />
                    <span class='slider round'></span>
                  </div>
                </label>
              </DarkSwitch>
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
