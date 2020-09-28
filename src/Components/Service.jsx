import React from 'react'
import Card from './Card';
import customData from './CustomApi';

function Service() {
    return (
        <>
        <div className="my-5">
            <h1 className="text-center"> Our Services</h1>
        </div>
            
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-md-10 mx-auto">
                    <div className="row gy-4">
                        {
                            customData.map((value, key) => {
                                return (
                                    <Card
                                        key={key}
                                        title={value.title}
                                        imgSrc={value.imgSrc}
                                    />
                                    )    
                            })
                        }  
                    </div>
                </div>
            </div>
        </div>

            
        </>
    )
}

export default Service;
