import React, { useState, useEffect, useRef } from 'react';
import CardComponent from './cardComponent';
import '../styles/popularPrograms.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import RoadMapBG from '../assets/Roadmap BG.png';
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
import data from '../assets/json_data/program_details_info_in_json.json';

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
};

const cardData1 = data.slice(0, 6);
const cardData2 = data.slice(6, 12);

const cardWidth = 16;

export default function PopularCourses() {
  const [currentPage1, setCurrentPage1] = useState(0);
  const [currentPage2, setCurrentPage2] = useState(0);
  const containerRef1 = useRef(null); // Reference to the first container of cards
  const containerRef2 = useRef(null); // Reference to the second container of cards

  const handleLeftArrowClick1 = () => {
    setCurrentPage1((prevPage) => (prevPage === 0 ? cardData1.length - 2 : prevPage - 1));
  };

  const handleRightArrowClick1 = () => {
    setCurrentPage1((prevPage) => (prevPage === cardData1.length - 2 ? 0 : prevPage + 1));
  };

  const handleLeftArrowClick2 = () => {
    setCurrentPage2((prevPage) => (prevPage === 0 ? cardData2.length - 2 : prevPage - 1));
  };

  const handleRightArrowClick2 = () => {
    setCurrentPage2((prevPage) => (prevPage === cardData2.length - 2 ? 0 : prevPage + 1));
  };

  const transformValue1 = `translateX(-${currentPage1 * cardWidth}rem)`;
  const transformValue2 = `translateX(-${currentPage2 * cardWidth}rem)`;

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

  // Add a scroll event listener to the first container of cards
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef1.current) {
        const container = containerRef1.current;
        const cardWidth = container.offsetWidth;
        const scrollLeft = container.scrollLeft;
        let newPage = Math.floor((scrollLeft + cardWidth / 2) / cardWidth);

        if (newPage < 0) {
          newPage = 0;
        } else if (newPage >= cardData1.length) {
          newPage = cardData1.length - 1;
        }

        setCurrentPage1(newPage);
      }
    };

    if (containerRef1.current) {
      containerRef1.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (containerRef1.current) {
        containerRef1.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [cardData1]);

  // Add a scroll event listener to the second container of cards
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef2.current) {
        const container = containerRef2.current;
        const cardWidth = container.offsetWidth;
        const scrollLeft = container.scrollLeft;
        let newPage = Math.floor((scrollLeft + cardWidth / 2) / cardWidth);

        if (newPage < 0) {
          newPage = 0;
        } else if (newPage >= cardData2.length) {
          newPage = cardData2.length - 1;
        }

        setCurrentPage2(newPage);
      }
    };

    if (containerRef2.current) {
      containerRef2.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (containerRef2.current) {
        containerRef2.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [cardData2]);

  return (
    <div className='popular-programs-section'>
      <div className='roadmap-background'>
        <img src={RoadMapBG} alt='Roadmap-bg' />
      </div>
      <div className="popular-course-container">
        <div className='course-list'>
          <h1><span className='orange-text'>Popular</span> Programs</h1>

          {windowWidth <= 468 ?
            <>
              <div
                className='programs-scroll'
                ref={containerRef1}
              >
                {cardData1.map((card, index) => (
                  <div
                    key={index}
                    className={`card ${index % 3 === 2 ? 'card-margin-right' : ''}`} // Add margin to every 3rd card
                  >
                    <CardComponent
                      key={index}
                      title={card.title}
                      imageSrc={imgdata[card.courseId]}
                      purchases={0}
                      star={card.rating}
                      period={card.period}
                      gradientColors={card.gradientColors}
                      className={
                        index === currentPage1 ? '' : 'program-card-hidden'
                      }
                    />
                  </div>
                ))}
              </div>
              <div className='landing-pagination-dots'>
                {cardData1.map((_, index) => (
                  <span
                    key={index}
                    className={index === currentPage1 ? 'landing-active-dot' : 'landing-dot'}
                    onClick={() => {
                      setCurrentPage1(index);
                      if (containerRef1.current) {
                        const container = containerRef1.current;
                        const cardWidth = container.offsetWidth;
                        container.scrollLeft = index * cardWidth;
                      }
                    }}
                  ></span>
                ))}
              </div>
            </>
            :
            <>
              <div className="arrow left-arrow" onClick={handleLeftArrowClick1}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </div>
              <div className="cards-container" style={{ transform: transformValue1 }}>
                {cardData1.map((card, index) => (
                  <CardComponent
                    key={index}
                    title={card.title}
                    imageSrc={imgdata[card.courseId]}
                    purchases={0}
                    star={card.rating}
                    period={card.period}
                    gradientColors={card.gradientColors}
                  />
                ))}
              </div>
              <div className="arrow right-arrow" onClick={handleRightArrowClick1}>
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
            </>
          }
        </div>
      </div>
      <div className="popular-course-container">
        <div className='course-list'>
          {windowWidth <= 468 ?
            <>
              <div
                className='programs-scroll'
                ref={containerRef2}
              >
                {cardData2.map((card, index) => (
                  <div
                    key={index}
                    className={`card ${index % 3 === 2 ? 'card-margin-right' : ''}`} // Add margin to every 3rd card
                  >
                    <CardComponent
                      key={index}
                      title={card.title}
                      imageSrc={imgdata[card.courseId]}
                      purchases={0}
                      star={card.rating}
                      period={card.period}
                      gradientColors={card.gradientColors}
                      className={
                        index === currentPage2 ? '' : 'program-card-hidden'
                      }
                    />
                  </div>
                ))}
              </div>
              <div className='landing-pagination-dots'>
                {cardData2.map((_, index) => (
                  <span
                    key={index}
                    className={index === currentPage2 ? 'landing-active-dot' : 'landing-dot'}
                    onClick={() => {
                      setCurrentPage2(index);
                      if (containerRef2.current) {
                        const container = containerRef2.current;
                        const cardWidth = container.offsetWidth;
                        container.scrollLeft = index * cardWidth;
                      }
                    }}
                  ></span>
                ))}
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
                    gradientColors={card.gradientColors}
                  />

                ))}
              </div>
              <div className="arrow right-arrow arrow-container2" onClick={handleRightArrowClick2}>
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
            </>
          }
        </div>

      </div>
    </div>

  );
}
