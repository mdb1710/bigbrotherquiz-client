import React from 'react';
import { withRouter } from "react-router";

const Homepage = () => {

    const handleGuestChange = (e) => {
        let name = e.target.value
        console.log(name);
    }

    return (
        <div className='home'>
         <h2>How Much Do You Know Big Brother</h2>
         <div className='intro'>
         <p>Test Your knowledge of your favorite summer guilty pleasure here</p>
         <p>Answer each questions to see how much you really know - remember to expect the unexpected</p>
         </div>
         <div className='start'>
         <form>
         <label className='houseGuest' htmlFor='houseGuest' name='houseGuest'>
           <h3>Enter Your Name, Houseguest</h3>
           <input type='text'  placeholder='Danielle Reyes' onChange={handleGuestChange}/>
           
         </label>
         <button type='submit'>Start Now</button>
         </form>
         </div>
        </div>
    )
}

export default withRouter(Homepage);