import React, { useState } from 'react'

function Contact() {

    const [data, setData] = useState({
        fullName: "",
        phoneNo: "",
        email: "",
        message: ""
    });


    const InputEvent = (event) => {
        const { name, value } = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name]:value,
            }
        })
    };
        

    const formSubmit = (e) => {
        e.preventDefault();
        alert("you entered");
    };

    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Me </h1>
            </div>

            <div className="container contactMe">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}>
                        <div className="form-group mb-3">
                            <label for="exampleInputEmail1">Full Name</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            name="fullName"
                            value={data.fullName}
                            onChange={InputEvent}
                            placeholder="Enter your name" />
                        </div>

                        <div className="form-group mb-3">
                            <label for="exampleInputEmail1">Contact No</label>
                            <input 
                            type="number" 
                            className="form-control" 
                            id="exampleInputEmail1" aria-describedby="emailHelp" 
                            name="phoneNo"
                            value={data.phoneNo}
                            onChange={InputEvent}
                            placeholder="phone no" />
                        </div>    
                        <div className="form-group mb-3">
                            <label for="exampleInputEmail1">Email</label>
                            <input 
                            type="Email" 
                            className="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            name="email"
                            value={data.email}
                            onChange={InputEvent}
                            placeholder="your Email" />
                        </div>     
                        <div className="form-group mb-3">
                            <label for="exampleFormControlTextarea1">Message</label>
                            <textarea 
                            className="form-control" 
                            id="exampleFormControlTextarea1" 
                            rows="4" 
                            name="message"
                            value={data.message}
                            onChange={InputEvent}        
                            placeholder="your message">        
                            </textarea>
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                        </form> 
                    </div>
                </div>
            </div>        
        </>
    )
}

export default Contact;
