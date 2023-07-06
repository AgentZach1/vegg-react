import React from 'react';
import CardItem from './CardItem';
import CardItemStatic from './CardItemStatic';
import './Cards.css';
import OnePagerPNG from '../images/onepager.png';
import WhitePaperPNG from '../images/whitepaper.png';
import WebsiteBackground from '../images/websiteBackground.jpg';
import JeffSchool from '../images/jeff_school.jpg';
import Greenhouse from '../images/greenhouse.jpg';

function Cards() {
  return (
    <div className='cards'>
        <h1>Read more about us!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src={Greenhouse} 
                    text='Learn about the team'
                    label='Our Team'
                    path='/ourteam'
                    />
                    <CardItem 
                    src={JeffSchool} 
                    text='Our Pilot Project: The Jefferson School'
                    label='Jefferson School'
                    path='/pilotproject'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItemStatic 
                    src={OnePagerPNG}
                    text='Read our one pager'
                    label='One Pager'
                    path='/onepager.pdf'
                    />
                    <CardItemStatic 
                    src={WhitePaperPNG}
                    text='Read our white paper'
                    label='White Paper'
                    path='/whitepaper.pdf'
                    />
                    <CardItem
                    src={WebsiteBackground}
                    text='Get in contact with us'
                    label='Sign Up'
                    path='/sign-up'
                    />
                </ul>
            </div>   
        </div>
    </div>
  )
}

export default Cards