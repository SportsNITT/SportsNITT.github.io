import React, { useState } from 'react';
import './achievements.css';
import achievementsData from '../../data/achievements.json';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ResponsiveGrid from './cards';

function Achievements() {
  console.log(achievementsData['achievements'],"yeys")
  return (
    <div>
    <div className="carousel-wrapper">
      <Carousel showArrows={true} dynamicHeight={false}>

      {achievementsData['achievements'].map((achv) => {
        return (
          <div className="image-achv">
            <img src= {achv.src} />
            <p className="legend">{achv.content}</p>
          </div>
        )
      })}
      </Carousel>
    </div>
    <ResponsiveGrid/>
    </div>
          
  );
}

export default Achievements;