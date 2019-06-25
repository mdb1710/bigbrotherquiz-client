import React, { useState, useEffect } from 'react';

const Timer = () => {

   const[seconds, setSeconds] = useState(30);
   const[clockTimer, setClockTimer] = useState(null);


   const handleCountdown = (e) => {
    e.preventDefault();
    console.log('Countdown has started');
    
    if (!clockTimer  && seconds > 0) {
        intervalHandle = setInterval(countdown, 1000);

        setClockTimer(intervalHandle);
        
       
        
    } 

    
    
   }

   const stopCountdown = (e) => {
       e.preventDefault()
       console.log('Countdown has stopped');
       setSeconds(30);
       clearInterval(clockTimer)
   }

   
   let counter = 30;
   const countdown = () => {
       
       
       setSeconds(
           seconds => seconds - 1
       )
       counter--
       console.log('counter', counter);
       if (counter < 0) {
        clearInterval(clockTimer);
        // console.log('Countdown has stopped');
        setSeconds('No more');
        // counter = 30;
        
       }

   }

   useEffect(() => {
       if (seconds === 0) {
           return () => clearInterval(clockTimer)
       }
   }, [seconds, clockTimer])

   let secondsRemaining;
   let intervalHandle;


   

    return (
       
        <div className='start-timer'>
          <p>{seconds} seconds remaining</p>
          <button onClick={handleCountdown}>Start</button>
          <button onClick={stopCountdown}>Stop</button>
        </div>
       
    )
}

export default Timer;