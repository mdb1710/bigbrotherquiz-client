import React, { useState } from 'react';

const Timer = () => {

   const[seconds, setSeconds] = useState(30);
   const[clockTimer, setClockTimer] = useState(0);
   

   const handleCountdown = (e) => {
    e.preventDefault();
    console.log('Countdown has started');
    if (clockTimer === 0 && seconds > 0) {
        setClockTimer(setInterval(countdown, 1000));
    }
    console.log(clockTimer);
   }

   const countdown = () => {
       
       setSeconds(
           seconds - 1
       )
       if (seconds === 0) {
           clearInterval(clockTimer)
       }

   }

   let secondsRemaining;
   let intervalHandle;

   const tick =() => {
    
    setInterval(tick, 1000)
   }
    

   

    return (
       
        <div className='start-timer'>
          <p>{seconds} seconds remaining</p>
          <button onClick={handleCountdown}>Start</button>
        </div>
       
    )
}

export default Timer;