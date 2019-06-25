import React, { useState, useContext, useEffect }from 'react';
import { Link } from 'react-router-dom';
import testQuestions from '../TestQuestions';
import QuizContext from '../QuizContext/QuizContext';
import './Questions.css';

const Questions = () => {

    const value = useContext(QuizContext);
    
    
    const[totalRight, setTotalRight] = useState(0);
    const[totalWrong, setTotalWrong] = useState(0);
    const[isCorrect, setIsCorrect] = useState(<span></span>);
    const[answered, setAnswered] = useState(false);

    

    const handleCheckAnswer = (e) => {
        
        let checkedAnswer = e.target.value;
        let checkedNumber = e.target.id - 1;
        
        console.log(checkedAnswer, 'was clicked - is it right?');
        if(checkedAnswer === value.correctAnswers[checkedNumber]){
            setTotalRight(totalRight + 1)
            value.totalRight = totalRight
            console.log('You got it right!')
            console.log(totalRight, value.totalRight)
        } else {
            setTotalWrong(totalWrong + 1)
            value.totalWrong = totalWrong
            console.log('You got it wrong')
            console.log(totalWrong, value.totalWrong)
        }
        setAnswered(true);
        
    }

    const newQuestions = testQuestions.map ((q, index) => {
        let answer = q.correctAnswer
        let qNumber = q.id;
        
        if(q.answered === false){
            return (
             
                <div key={index} id={qNumber}>
                 <h3>{qNumber}. What season did {q.name} first appear?</h3>
                 <form>
                 {q.answers.map((answer, i) => {
                     return (
                         <div className='radio' key={i}>
                           <label htmlFor='season'>
                             <input type='radio' name='season' value={answer} id={qNumber} onClick={handleCheckAnswer} required/>{answer}
                             
                           </label>
                           
                         </div>
                         
                     )
                 })}
                 </form>
                 
                 
                
    
                </div>
                   
                 
             )
        } else {
            return (
                <div key={index} className='correct'>
                  <p></p>
               </div>
            )
        }
        
    });

    

    useEffect(() => {
        
        
        
        
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

          <div className='score-check'>
           <Link to='/results'>
             <button>Check Your Score</button>
           </Link>
          </div>
          
        </div>

    )
}

export default Questions;