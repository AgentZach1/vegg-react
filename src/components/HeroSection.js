import React from 'react';
import {ButtonStatic} from './ButtonStatic';
import './HeroSection.css';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faBook } from '@fortawesome/free-solid-svg-icons';
// import backVideo from '../videos/video-2.mp4';

function HeroSection() {
  return (
    <div className='hero-container'>
        {/* <video src={backVideo} autoPlay loop muted /> */}
        <h1>Novel Infrastructure Solutions to Indoor Farming</h1>
        <p>Vegg, Inc. is an AgTech company located in Pulaski, VA providing technological solutions to modern-day farming and sustainability issues. Utilizing innovative methods in agriculture, climate technology advancements, and the revitalization of abandoned school buildings, our company aims to deliver the first Climate-Smart certified facility for vertical farming companies.</p>
        <div className="hero-btns">
            <ButtonStatic className='btns' buttonStyle='btn--primary' buttonSize='btn--large' path='/onepager.pdf'>
            <FontAwesomeIcon icon={faBook}/> Read our one pager
            </ButtonStatic>
            <ButtonStatic className='btns' buttonStyle='btn--primary' buttonSize='btn--large' path='/whitepaper.pdf'>
                Read our white paper <FontAwesomeIcon icon={faBookOpen}/>
            </ButtonStatic>
        </div>
    </div>
  );
}

export default HeroSection;