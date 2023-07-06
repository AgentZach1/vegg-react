import React from 'react';
import './TeamSection.css'
import '../App.css';
import { VeggIcon } from './VeggIcon';

function TeamSection() {
  return (
    <div className='team-container'>
        <VeggIcon color='darkgreen' size={200}/>
        <h1>Our Advisory Board</h1>
        <p>Vegg, Inc. has put together an advisory board coposed of several leading industry experts with experience in the fields of Agriculture, Biology, Engineering, Real Estate Development, Managmeent, Tax Credits/Grants, Government Affairs, and Corporate Law.</p>
    </div>
  )
}

export default TeamSection;