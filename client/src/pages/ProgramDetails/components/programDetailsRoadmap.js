/* eslint-disable no-template-curly-in-string */
import React from 'react'
import '../styles/programDetailsRoadmap.css'
import HtmlImage from '../assets/Introduction to HTML.png'
import Goal from '../assets/Group 815.png'
import PlacementWeek from '../assets/Placement Week.png'
import ReactDevelopment from '../assets/React Development.png'
import WorkingWithCss from '../assets/Working with CSS Properties.png'
import WorkingWithBootstrap from '../assets/Working with Bootstrap.png'
import HandlingJavascript from '../assets/Handling Javascript Functions.png'
import RoadImg from '../assets/Roadmap.png'
import RoadMapBG from '../assets/Roadmap BG.png'

import RoadMapMobile from '../assets/ProgramDetailsRoadmapMobile.png'

export default function ProgramDetailsRoadmap(props) {


    const roadmapCardData = [
        {
            imgsrc: HtmlImage,
            bullets: props.roadmap[0]
        },
        {
            imgsrc: WorkingWithCss,
            bullets: props.roadmap[1]
        },
        {
            imgsrc: WorkingWithBootstrap,
            bullets: props.roadmap[2]
        },
        {
            imgsrc: HandlingJavascript,
            bullets: props.roadmap[3]
        },
        {
            imgsrc: ReactDevelopment,
            bullets: props.roadmap[4]
        },
        {
            imgsrc: PlacementWeek,
            bullets: props.roadmap[5]
        }
    ]

    const RoadMapCard = ({ imgsrc, bullets, Module }) => {
        return (
            <div className='roadmap-card'>
                {/* <div className='roadmap-card-img'>
                    <img src={imgsrc} alt='roadmap-card' />
                </div>
                <div className='roadmap-bullets'>
                    <ul>
                        {bullets.map((bullet) => (
                            <li>{bullet}1</li>
                        ))}
                    </ul>
                </div> */}
                <p className='module-text'>{Module}</p>
                <div className='roadmap-card-container'>
                    <div className='roadmap-card-img'>
                        <img src={imgsrc} alt='roadmap-card' />
                    </div>
                    <div className='roadmap-bullets'>
                        <ul>
                            {bullets.map((bullet) => (
                                <li>{bullet}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className='program-details-roadmap'>
            <div className='roadmap-background'>
                <img src={RoadMapBG} alt='Roadmap-bg' />
            </div>
            <h1>Journey towards your dream Job</h1>
            <div className='roadmap-container'>
                <div className='road-img'>
                    <img src={RoadImg} alt='Road' />
                </div>
                <div className='roadmap-columns'>
                    <div className='roadmap-column1'>
                        {roadmapCardData.slice(0, 2).map((card, index) => (
                            <div className={index === 0 ? 'roadmap-card-container' : 'roadmap-card-container2'}>
                                <RoadMapCard imgsrc={card.imgsrc} bullets={card.bullets} Module={"Module " + (index + 1)} />
                            </div>
                        ))}
                    </div>
                    <div className='roadmap-column2'>
                        {roadmapCardData.slice(2, 4).map((card, index) => (
                            <div className={index === 0 ? 'roadmap-card-container' : 'roadmap-card-container2'}>
                                {/* <p className='roadmap-image-tagline'>{!index ? <span dangerouslySetInnerHTML={{ __html: 'Working with <span class="orange-text">Bootstrap</span>' }}></span> : <span dangerouslySetInnerHTML={{ __html: 'Handling <span class="orange-text">JavaScript</span> Functions' }}></span>}</p> */}
                                <RoadMapCard imgsrc={card.imgsrc} bullets={card.bullets} Module={"Module " + (index + 3)} />

                            </div>
                        ))}
                    </div>
                    <div className='roadmap-column3'>
                        {roadmapCardData.slice(4, 6).map((card, index) => (
                            <div className={index === 0 ? 'roadmap-card-container' : 'roadmap-card-container2'}>
                                {/* <p className='roadmap-image-tagline'>{!index ? <span dangerouslySetInnerHTML={{ __html: '<span class="orange-text">React</span> Development' }}></span> : <span dangerouslySetInnerHTML={{ __html: '<span class="orange-text">Placement</span> Week' }}></span>}</p> */}
                                <RoadMapCard imgsrc={card.imgsrc} bullets={card.bullets} Module={"Module " + (index + 5)} />
                            </div>
                        ))}
                        <div className='roadmap-final-card'>
                            <p className='roadmap-image-tagline'>Get <span className='orange-text'>Placed</span></p>
                            <div className='roadmap-card-img'>
                                <img src={Goal} alt='roadmap-card' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* mobile bg */}

            <div className='roadmap-container-mobile'>

                <div className='roadmap-modules-mobile'>
                    {roadmapCardData.map((card, index) => (
                        <div className='roadmap-module-card'>
                            <p className='module-text'>{"Module " + (index + 1)}</p>
                            <div className='roadmap-card-img-mobile'>
                                <img src={card.imgsrc} alt='roadmap-card' />
                            </div>
                            <div className='roadmap-bullets'>
                                <ul>
                                    {card.bullets.map((bullet) => (
                                        <li>{bullet}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='road-img-mobile'>
                    <img src={RoadMapMobile} alt='Road' />
                </div>
            </div>

        </div>
    )
}
