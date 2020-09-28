import React from 'react';
import './Home.css';
import './Components.css';
import Common from './Common';
import imgHome from "../images/bg1-2.svg";


//contact No: 9518369954

function Home() {
    return (
        <>
            <Common
                name="grow you knowledge on"
                name2="Build everything in Just React as its very powerful "
                name3="Library"
                name4="of Javascript"
                topic="ReactJs" 
                imgSrc={imgHome}
                visit="/service"
                btnName="Get Started "
            />
        </>
    )
}

export default Home;
