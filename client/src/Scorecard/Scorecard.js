import React from 'react';
import Timer from '../Timer/Timer';

const Scorecard = () => {

    return(
        <div className='scorecard'>
        
          <p>There are 21 questons</p>
          <p>Answer all before time runs OUT!</p>
          <Timer />
        </div>
    )
}

export default Scorecard;