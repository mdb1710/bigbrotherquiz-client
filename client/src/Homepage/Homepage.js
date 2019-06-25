import React, { useState, useContext } from 'react';
import { withRouter } from "react-router";
import QuizContext from '../QuizContext/QuizContext';
import { Link } from 'react-router-dom';

import './Homepage.css';



const Homepage = () => {
    const value = useContext(QuizContext)
    const[houseGuest, setHouseGuest] = useState('');
    const[welcomeMessage, setWelcomeMessage] = useState('')

    

    const handleGuestChange = (e) => {
        e.preventDefault();
        
        value.houseGuest = houseGuest;
        
        console.log('houseguest is', houseGuest, 'context houseGuest is',value.houseGuest);

        setWelcomeMessage (() => {
            return (
                <div className="start-quiz p-4 flex-column ">
         <h3 className='col-xs-4 mt-55 my-2 mx-4'>Welcome {houseGuest}, you may now enter the House</h3>
         <Link to='/quiz'>
         <button className="btn btn-success btn-outline-light text-center mt-55 my-2 mx-4"type='submit'>Start Now</button>
         </Link>
         
         </div>
            )
        })

        return welcomeMessage;
     
        
    }

    

    
    // setHouseGuest({
    //     houseGuest: name
    // })
    // console.log(houseGuest);

    return (
        <div className='home mb-10 d-flex flex-lg-column'>
         <h2 className='mt-2 shadow-sm text-center w-100 h-100'>How Much Do You Know Big Brother</h2>
         <div className='intro row justify-content-center mb-10 mt-10'>
         <p className="col-md-2 mt-6">Test Your knowledge of your favorite summer guilty pleasure here</p>
         <p className="col-md-2 mt-15">Answer each questions to see how much you really know - remember to expect the unexpected</p>
         </div>
         <div className='start d-flex justify-content-center rounded-lg form-group'>
         <form onSubmit={handleGuestChange}>
         <label className='houseGuest' htmlFor='houseGuest' name='houseGuest'>
           <h3 className='my-3'>Enter Your Name, Houseguest</h3>
           <input type='text'  className='form-control' placeholder='Danielle Reyes' onChange={e => setHouseGuest(e.target.value)} required/>
           
         </label>

         
         <button type='submit' className='mx-15'onSubmit={handleGuestChange}>Enter</button>
      
         
         </form><br />
         
         
          
         </div>
         <div className='d-flex justify-content-center'>
           {welcomeMessage}
         </div>
        </div>
    )
}

export default withRouter(Homepage);