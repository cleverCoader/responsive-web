import React from 'react';
import './Home.css';
import './Components.css';
import { NavLink } from 'react-router-dom';
import './Common.css'

//contact No: 9518369954

function Common({name,name2,name3,name4,btnName,visit, topic,imgSrc}) {
    return (
        <>
            <section id="header" className="d-flex aligh-items-center">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column ">
                            <h1> {name} <strong className="brand-name" > {topic} </strong> </h1>
                            <h2 className="my-3">
                                {name2} <strong> {name3} </strong> {name4}
                            </h2>
                            <div className="mt-3">
                                <NavLink to={visit} className="btn-get-started">
                                    {btnName}
                                </NavLink> 
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={imgSrc} alt="home img" className="img-fluid animated" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}

export default Common;
