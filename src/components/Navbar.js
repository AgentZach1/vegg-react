import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import {Button} from './Button';
import { VeggIcon } from './VeggIcon';
import { useLocation } from 'react-router-dom';

function Navbar() {
  const [click, setClick] = useState(false);

  const [button, setButton] = useState(true);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
        setButton(false);
    } else {
        setButton(true);
    }
  };
  
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/vegginc" className="navbar-logo" onClick={closeMobileMenu}>
                    VEGG <VeggIcon size={60}/>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <FontAwesomeIcon icon={click ? faTimes : faBars} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/vegginc' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/vegginc/pilotproject' className='nav-links' onClick={closeMobileMenu}>
                            Our Pilot Project
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/vegginc/ourteam' className='nav-links' onClick={closeMobileMenu}>
                            Our Team
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/vegginc/sign-up' className='nav-links-mobile' onClick={closeMobileMenu} >
                            Sign Up
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
            </div>
        </nav>
    </>
  )
}

export default Navbar;