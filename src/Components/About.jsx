import React from 'react';
import './Home.css';
import Home1 from "../images/bg1-2.svg";
import './Components.css';
import Common from './Common';

//contact No: 9518369954

function About() {
    return (
        <>
            <Common
                name="Know More About Me" 
                imgSrc={Home1}
                visit="/contact"
                btnName="Contact Now"
            />
        </>
    )
}

export default About;
