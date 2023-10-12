import React from 'react'
import '../styles/services.css'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Services() {

    const tableData = [
        {
            col1: 'Real Work Experience',
            col2: faXmark,
            col3: faXmark,
            col4: faCheck
        },
        { 
            col1: 'Live Sessions and Mentorships',
            col2: faXmark,
            col3: faCheck,
            col4: faCheck
        },
        {
            col1: 'Carrer Guidance',
            col2: faXmark,
            col3: faXmark,
            col4: faCheck
        },
        {
            col1: 'True Project Based Learning',
            col2: faXmark,
            col3: faCheck,
            col4: faCheck
        },
        {
            col1: 'Soft Skills',
            col2: faXmark,
            col3: faXmark,
            col4: faCheck
        },
        {
            col1: 'Job-Ready Portfolio',
            col2: faXmark,
            col3: faXmark,
            col4: faCheck
        },
        {
            col1: 'Placement Guarantee',
            col2: faXmark,
            col3: faXmark,
            col4: faCheck
        },
    ];

    return (
        <div className='services-section'>
            <div className='table'>
                <table className="custom-table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Video Courses</th>
                            <th>Bootcamps</th>
                            <th className="last-column">1-on-1 Training</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((rowData, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'odd-row' : 'even-row'}>
                                <td className='first-column'>{rowData.col1}</td>
                                <td><FontAwesomeIcon icon={rowData.col2} className="services-check-icon" /></td>
                                <td><FontAwesomeIcon icon={rowData.col3} className="services-check-icon" /></td>
                                <td className="last-column"><FontAwesomeIcon icon={rowData.col4} className="services-check-icon" /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
