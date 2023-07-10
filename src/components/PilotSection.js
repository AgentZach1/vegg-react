import React from 'react';
import './PilotSection.css'
import '../App.css';
import jeffSchool from '../images/jeff_school.jpg';
import ceaWestWing from '../images/cea_west_wing.jpeg';

function PilotSection() {
    return (
        <div className='pilot-container'>
            <div className="div-up">
                <h1 className='pilotproject'> The Jefferson School</h1>
                
            </div>
            <div className="div-down">
                <img src={jeffSchool} alt="the jefferson school" />
                <p>The Jefferson School, located in downtown Pulaski, VA is the pilot project of the Vegg, Inc. concept. The old elementary school is approximately 25,000 square feet with an auditorium and two classroom wings, one of which has collapsed. The building is located in Pulaski's downtown industrial area and is within the towns historic district and opportunity zone. The floorplan of the school presents a perfect opportunity to use the large, central auditorium as the main vertical farming area. The wing that is still standing will be research and development space for a few preselected tenants, and the fallen wing will be converted into greenhouse space. </p>
            </div>
            
            <div className='research-container'>
                <div className='text-container'>
                    <h1>Our Research</h1>
                </div>
                <div className="pic-container">
                    <img src={ceaWestWing} alt="the west wing" />
                </div>
                <div className="text-container">
                    <p>Prior to starting construction on the Jefferson School, Vegg, Inc. will use space in the building to perform research on their recycled carbon and ammonia application. Along with partners MOVA Technology and PodFarms, a small scale growing area will be set up with a controlled environment,. This area will be used to test our application of CO2 captured directly from the air. This research is a key part of Vegg, Inc's concept and will lead us to the first carbon negative farming operation. </p>
                </div>
            </div>
        </div>
    );
}

export default PilotSection;