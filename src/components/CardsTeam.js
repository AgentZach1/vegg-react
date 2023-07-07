import React from 'react';
import CardItemStatic from './CardItemStatic';
import './Cards.css';
import Cody from '../images/cody_journell.jpg';
import Luke from '../images/luke_allison.jpg';
import Xander from '../images/alexander_yurista.jpg';
import Zach from '../images/ZachHeadshot.jpg';

function CardsTeam() {
  return (
    <div className='cards'>
        <h1 className='ourteam'>Our Team</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItemStatic 
                    src={Cody} 
                    text='Cody Journell'
                    subtext="Growing up on a southwest Virginia far, Cody began his journey into agriculture. Additionally, as an Alumnus of Virginia Tech's Pamplin School of Business, Cody has joined his background in agriculture with his love for entrepreneurship. Through innovative technology and a mission to rebuild our country's rural communities, Cody aims to bring Vegg, Inc. to the masses and make a huge impact on rural America along the way."
                    label='CEO'
                    path='https://www.linkedin.com/in/cody-journell-8677602b'
                    />
                    <CardItemStatic 
                    src={Luke} 
                    text='Luke Allison'
                    subtext="Luke grew up on a small farm in Tazewell, VA before graduating and attending Virginia Tech. In 2017 he graduated with a Bachelor of Science in Forestry Resources and Environmental Conservation. After graduating he invested in multiple residential properties in Pulaski, VA and became a member of West Main Development, the pilot project of Downtown Pulaski's historic revitalization. He is currently working on multiple restoration projects in Virginia with a focus on rural community revitalization and environmental stewardship. "
                    label='Vice President'
                    path='https://www.linkedin.com/in/luke-allison-33a080b6/'
                    />
                    
                </ul>
                <ul className='cards__items'>
                    <CardItemStatic 
                    src= {Xander}
                    text='Alexander Yurista'
                    subtext="Alexander, originally from a small town in Vermont, graduated from Virginia Tech in 2022, receiving a Bachelor of Science in Civil Engineering with a focus in Environmental Engineering. Alexander first started working on historic revitalization projects as an intern in 2021, learning about the environmental considerations in construction and redevelopment. It was through his internship that he first discovered an interest in community impact projects, and found he could combine it with his passion for environmental preservation. "
                    label='Project Manager'
                    path='https://www.linkedin.com/in/alexander-yurista-3453b2232/'
                    />
                    <CardItemStatic 
                    src={Zach} 
                    text='Zachary Weiss'
                    subtext="Zach is an senior studying computer science at VT"
                    label='Intern'
                    path='https://connect.weiss.land'
                    />
                
                </ul>
            </div>   
        </div>
    </div>
  )
}

export default CardsTeam;