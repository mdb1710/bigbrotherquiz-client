import React, { useState, useContext, useEffect }from 'react';

import testQuestions from '../TestQuestions';
import QuizContext from '../QuizContext/QuizContext';
import './Questions.css';

const Questions = () => {

    const value = useContext(QuizContext);

    const newQuestions = testQuestions.map ((q, index) => {
         return (
             
            <div key={index}>
             <h3>What season did {q.name} first appear?</h3>
             <form>
             {q.answers.map((answer, i) => {
                 return (
                     <div className='radio' key={i}>
                       <label htmlFor='season'>
                         <input type='radio' name='season' value={answer}/>{answer}
                       </label>
                     </div>
                 )
             })}
             </form>
             
             
            

            </div>
               
             
         )
    });

    console.log(newQuestions);

    useEffect(() => {
        value.questions = testQuestions;
        console.log(value.questions[0].name)
        const layout = value.questions.map ((q, index) => {
            console.log(q.name);
            return (
                
            <div key={index}>
             <h3>{q.name}</h3>
            

            </div>
               
             
            )
        })

        console.log(layout);
        
        
    })

    // const options = value.questions.answers.map(answer => {
    //     return (
    //         <form key={answer[0]}>
    //          <label>
    //           <input type='radio' />{answer[0]}
    //          </label>
    //          <label>
    //           <input type='radio' />{answer[1]}
    //          </label>
    //          <label>
    //           <input type='radio' />{answer[2]}
    //          </label>
    //          <label>
    //           <input type='radio' />{answer[3]}
    //          </label>
    //          <button type='submit'>Submit</button>
    //         </form>
    //     )
    // })
    

    /* 
     <h3>Danielle Reyes -- Which Season</h3>
          <form>
            <label>
            <input type='radio' />Season 11
            </label>
            <label>
            <input type='radio' />Season 14
            </label>
            <label>
            <input type='radio' />Season 5
            </label>
            <label>
            <input type='radio' />Season 3
            </label>
            
           
          </form>
    
    
    */

    return(
        <div className='questions'>
          
          
          {newQuestions}
          
        </div>

    )
}

export default Questions;