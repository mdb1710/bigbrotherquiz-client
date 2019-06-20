import React, { useState, useContext } from 'react';
import { withRouter } from "react-router";
import QuizContext from '../QuizContext/QuizContext';
import { Link } from 'react-router-dom';



const Homepage = () => {
    const value = useContext(QuizContext)
    const[houseGuest, setHouseGuest] = useState('');

    const handleGuestChange = (e) => {
        e.preventDefault();
        value.houseGuest = houseGuest;
        
        console.log('houseguest is', houseGuest, 'context houseGuest is',value.houseGuest);
     
        
    }

    

    
    // setHouseGuest({
    //     houseGuest: name
    // })
    // console.log(houseGuest);

    return (
        <div className='home'>
         <h2>How Much Do You Know Big Brother</h2>
         <div className='intro'>
         <p>Test Your knowledge of your favorite summer guilty pleasure here</p>
         <p>Answer each questions to see how much you really know - remember to expect the unexpected</p>
         </div>
         <div className='start'>
         <form onSubmit={handleGuestChange}>
         <label className='houseGuest' htmlFor='houseGuest' name='houseGuest'>
           <h3>Enter Your Name, Houseguest</h3>
           <input type='text'  placeholder='Danielle Reyes' onChange={e => setHouseGuest(e.target.value)}/>
           
         </label>

         
         <button type='submit'>Enter</button>
      
         
         </form>
         <div className="start-quiz hidden">
         <p>Welcome {houseGuest}, you may now enter the Big Brother Quiz House</p>
         <Link to='/quiz'>
         <button type='submit'>Start Now</button>
         </Link>
         
         </div>
         </div>
        </div>
    )
}

export default withRouter(Homepage);