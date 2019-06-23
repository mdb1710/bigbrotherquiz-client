import React from 'react';
import Timer from '../Timer/Timer';

const Scorecard = () => {

    return(
        <div className='scorecard'>
        
          <p>Question 1 of 20</p>
          <p>Current Score: 0</p>
          <Timer />
        </div>
    )
}

export default Scorecard;