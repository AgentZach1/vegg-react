import React from 'react';
//import { Button } from './Button';
import './Footer.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { VeggIcon } from './VeggIcon';



function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <VeggIcon className='footer-subscription-heading' size={100} color='white'/>
            <p className='footer-subscription-heading'>
                Get in contact with us
            </p>
            <p className='footer-subscription-text'>
                29 West Main Street.
            </p>
            <p className='footer-subscription-text'>
                Pulaski, VA 24031
            </p>
            <p className='footer-subscription-text'>
                540-599-7480
            </p>
            <p className='footer-subscription-text'>
                cjournell@vegginc.com
            </p>
            
        </section>
        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <Link to="/vegginc" className='social-logo'>
                        VEGG <VeggIcon className='footer-subscription-heading' color='white'/>
                    </Link>
                </div>
                <small className='website-rights'>Vegg Inc. c 2020</small>
                <div className='social-icons'>
                    <Link 
                    to="/vegginc"
                    target='_blank'
                    aria-label='Instagram'
                    className='social-icon-link instagram'>
                        <FontAwesomeIcon icon={faInstagram}/>
                    </Link>
                    <Link 
                    to="/vegginc"
                    target='_blank'
                    aria-label='LinkedIn'
                    className='social-icon-link linkedin'>
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </Link>
                    <Link 
                    to="/vegginc"
                    target='_blank'
                    aria-label='Facebook'
                    className='social-icon-link facebook'>
                        <FontAwesomeIcon icon={faFacebook}/>
                    </Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer