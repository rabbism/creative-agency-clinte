import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
       <section className="container contact my-5 py-5">
           <div className="container d-flex">
               <div className="col-md-5 mx-auto">
                    <h3 style={{color: '#2D2D2D'}}>Let us Handle Your <br/> Project, Professionally</h3>
                    <p className='mt-3'>With Well Written Codes, We build amazing apps for all platforms. Mobile and Web app in General.</p>
               </div>
               <div className="col-md-5 mx-auto">
                   <form action="">
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Your Email Address"/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Your Name/Company Name"/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                       </div>
                       <div className="form-group text-left">
                           <button type="button" className="btn btn-primary"> Send</button>
                       </div>
                   </form>
               </div>
           </div>
           <p className='text-center mt-5'> &copy; copyright Orange Lab 2020</p>
       </section>
    );
};

export default Contact;