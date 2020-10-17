import React, { useEffect, useState } from 'react';
import customer1 from '../../../images/customer-1.png';
import customer2 from '../../../images/customer-2.png';
import customer3 from '../../../images/customer-3.png';
import FeedbackDetail from '../FeedbackDetail/FeedbackDetail';
import './FeedBack.css';

// const feedbackData = [
//     {
//         name: 'Nash Patrik',
//         img: customer1,
//         rank: 'CEO, MANPOL'
//     },
//     {
//         name: 'Miriam Barmon',
//         img: customer2,
//         rank: 'CEO, FREELAND'
//     },
//     {
//         name: 'Bria Malone',
//         img: customer3,
//         rank: 'CEO, DARAZZ'
//     }
// ];

const FeedBack = () => {
    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        fetch('https://stark-castle-58192.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => {
            setFeedback(data)
        })
    }, [])

    
    
    // heroku = 'https://stark-castle-58192.herokuapp.com/'


    // const handleAddProduct = () => {

    //     fetch('https://stark-castle-58192.herokuapp.com/addReview', {
    //         method: 'POST',
    //         headers: { 
    //             'Content-Type': 'application/json'
    //         },
    //         // body: JSON.stringify(fakeData[0])
    //         body: JSON.stringify(feedbackData)
    //     })
    // }
    return (
        <section className="feedback my-5">
           <div className="container">
               <div className="section-header text-center">
                    <h3>Client <span style={{color: '#7AB259'}}>FeedBack</span></h3>
               </div>
               <div className="card-deck mt-5">
                    {
                        feedback.map(feedback => <FeedbackDetail feedback={feedback} key={feedback.name}/>)
                    }
               </div>
           </div>
       </section>
    );
};

export default FeedBack;