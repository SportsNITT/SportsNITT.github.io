import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';
import './achievements.css';
import achievements from '../../data/achievements.json';

function Achievements() {
  const achvms= achievements.achivements;
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === achvms.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? achvms.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const cards = achvms.map((item) => {
    return (
      
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.id}
      >
    
    <div style={{backgroundColor:"black", display:"block"}}>
        <img src={item.src} alt={item.altText} className="image"/>
        <h1 className="title">{item.title}</h1>
        <p className="desc">{item.desc} </p>
        <p className="content">{item.content}</p>
        </div>

      </CarouselItem>
    );
  });

  return (
             <Carousel
              activeIndex={activeIndex}
              next={next}
              previous={previous}
              
            >
              <CarouselIndicators items={achvms} activeIndex={activeIndex} onClickHandler={goToIndex} />
              {cards}
              <CarouselControl  direction="prev" directionText="Previous" onClickHandler={previous} />
              <CarouselControl  direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
          
  );
}

export default Achievements;