import React, { useState, useEffect } from 'react';

import CardComponent from './cardComponent';
import '../styles/popularPrograms.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import RoadMapBG from '../assets/Roadmap BG.png'

import card_img_0 from '../assets/program_card_images/fullstackp.png';
import card_img_1 from '../assets/program_card_images/frontendp.png';
import card_img_2 from '../assets/program_card_images/backendp.png';
import card_img_3 from '../assets/program_card_images/uiuxp.png';
import card_img_4 from '../assets/program_card_images/aip.png';
import card_img_5 from '../assets/program_card_images/dsp.png';
import card_img_6 from '../assets/program_card_images/pythonp.png';
import card_img_7 from '../assets/program_card_images/javap.png';
import card_img_8 from '../assets/program_card_images/qap.png';
import card_img_9 from '../assets/program_card_images/devopsp.png';
import card_img_10 from '../assets/program_card_images/mobile.png';
import card_img_11 from '../assets/program_card_images/mobiosp.png';
import data from '../assets/json_data/program_details_info_in_json.json'

let imgdata = {
  "0": card_img_0,
  "1": card_img_1,
  "2": card_img_2,
  "3": card_img_3,
  "4": card_img_4,
  "5": card_img_5,
  "6": card_img_6,
  "7": card_img_7,
  "8": card_img_8,
  "9": card_img_9,
  "10": card_img_10,
  "11": card_img_11
}

const cardData1 = data.slice(0, 6);
const cardData2 = data.slice(6, 12);

const cardWidth = 16;

export default function PopularCourses() {
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [CurrentTile1, setCurrentTile1] = useState(cardData1[0]);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [CurrentTile2, setCurrentTile2] = useState(cardData2[0]);

  const handleLeftArrowClick1 = () => {
    setCurrentIndex1((prevIndex) => (prevIndex === 0 ? cardData1.length - 1 : prevIndex - 1));
  };

  const handleRightArrowClick1 = () => {
    if (currentIndex1 == cardData1.length - 2) {
      setCurrentIndex1(0);
    }
    else {
      setCurrentIndex1((prevIndex) => (prevIndex === cardData1.length - 1 ? 0 : prevIndex + 1));
    }
  };

  const handleLeftArrowClick2 = () => {
    setCurrentIndex2((prevIndex) => (prevIndex === 0 ? cardData2.length - 1 : prevIndex - 1));
  };

  const handleRightArrowClick2 = () => {
    if (currentIndex2 == cardData2.length - 2) {
      setCurrentIndex2(0);
    }
    else {
      setCurrentIndex2((prevIndex) => (prevIndex === cardData2.length - 1 ? 0 : prevIndex + 1));
    }
  };

  const transformValue1 = `translateX(-${currentIndex1 * cardWidth}rem)`;
  const transformValue2 = `translateX(-${currentIndex2 * cardWidth}rem)`;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  // Add a resize event listener when the component mounts
  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth);

    // Remove the event listener when the component unmounts to prevent memory leaks
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);


  // Add a resize event listener when the component mounts
  useEffect(() => {
    setCurrentTile1(cardData1[currentIndex1]);
  }, [currentIndex1]);

  useEffect(() => {
    setCurrentTile2(cardData2[currentIndex2]);
  }, [currentIndex2]);

  return (
    <div className='popular-programs-section'>
      <div className='roadmap-background'>
        <img src={RoadMapBG} alt='Roadmap-bg' />
      </div>
      <div className="popular-course-container">
        <div className='course-list'>
          <h1>Popular Programs</h1>

          {windowWidth <= 468 ?

            <>
              <div className="arrow left-arrow" onClick={handleLeftArrowClick1}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </div>
              <CardComponent
                key={currentIndex1}
                title={CurrentTile1.title}
                imageSrc={imgdata[CurrentTile1.courseId]}
                purchases={0}
                star={CurrentTile1.rating}
                period={CurrentTile1.period}
              />
              <div className="arrow right-arrow" onClick={handleRightArrowClick1}>
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
            </>

            :
            <>
              <div className="arrow left-arrow" onClick={handleLeftArrowClick1}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </div>
              <div className="cards-container" style={{ transform: transformValue1 }}>

                {cardData1.map((card, index) => (
                  <>
                    <CardComponent
                      key={index}
                      title={card.title}
                      imageSrc={imgdata[card.courseId]}
                      purchases={0}
                      star={card.rating}
                      period={card.period}
                    />
                  </>
                ))}
              </div>

              <div className="arrow right-arrow" onClick={handleRightArrowClick1}>
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
            </>
          }
        </div>
      </div>



      {/* Second one */}

      <div className="popular-course-container">
        <div className='course-list'>

          {windowWidth <= 468 ?

            <>
              <div className="arrow left-arrow arrow-container2" onClick={handleLeftArrowClick2}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </div>
              <CardComponent
                key={currentIndex2}
                title={CurrentTile2.title}
                imageSrc={imgdata[CurrentTile2.courseId]}
                purchases={"1000+"}
                star={CurrentTile2.rating}
                period={CurrentTile2.period}
              />
              <div className="arrow right-arrow arrow-container2" onClick={handleRightArrowClick2} >
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
            </>

            :
            <>
              <div className="arrow left-arrow arrow-container2" onClick={handleLeftArrowClick2}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </div>
              <div className="cards-container" style={{ transform: transformValue2 }}>

                {cardData2.map((card, index) => (
                  <CardComponent
                    key={index}
                    title={card.title}
                    imageSrc={imgdata[card.courseId]}
                    purchases={0}
                    star={card.rating}
                    period={card.period}
                  />
                ))}
              </div>

              <div className="arrow right-arrow arrow-container2" onClick={handleRightArrowClick2} >
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
            </>
          }
        </div>
      </div>

    </div>
  );
};