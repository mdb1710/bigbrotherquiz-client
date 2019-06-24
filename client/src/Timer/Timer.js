import React, { useState, useEffect } from 'react';

const Timer = () => {

   const[seconds, setSeconds] = useState(30);
   const[clockTimer, setClockTimer] = useState(0);

//    useEffect(() => {
//        handleCountdown();
//    })
   

   const handleCountdown = (e) => {
    e.preventDefault();
    console.log('Countdown has started');
    if (clockTimer === 0 && seconds > 0) {
        intervalHandle = setInterval(countdown, 1000);

        setClockTimer(intervalHandle);
        
    } 
    
   }

   const countdown = () => {
       
       setSeconds(
           seconds => seconds - 1
       )
       
       if (seconds === clockTimer) {
           clearInterval(intervalHandle)
       }

   }

   let secondsRemaining;
   let intervalHandle;


   

    return (
       
        <div className='start-timer'>
          <p>{seconds} seconds remaining</p>
          <button onClick={handleCountdown}>Start</button>
        </div>
       
    )
}

export default Timer;