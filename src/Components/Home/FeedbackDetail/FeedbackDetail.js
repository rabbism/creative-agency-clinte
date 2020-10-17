import React from 'react';
import './FeedbackDetail.css';

const FeedbackDetail = ({ feedback}) => {
    return (
        <div className="card shadow-sm card-component-style">
            <div style={{borderBottom: 'none'}} className="card-header d-flex  align-items-center">
                <img className="mx-3" src={feedback.img} alt="" width="60"/>
                <div>
                    <h6 className="text-primary">{feedback.name}</h6>
                    {
                        feedback.rank ? <p className="m-0">{feedback.rank}</p> : <p className="m-0">CSO, I-BOOK</p>
                        
                    }
                </div>
            </div>
            <div className="card-body">
                <p className="card-text text-secondary mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum animi placeat, atque facere sapiente deleniti.</p>
            </div>
            
       </div>
    );
};

export default FeedbackDetail;