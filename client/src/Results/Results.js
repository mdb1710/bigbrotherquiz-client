import React, { useContext, useState }from 'react';
import { withRouter } from 'react-router';
import QuizContext from '../QuizContext/QuizContext';
import { Link } from 'react-router-dom';

const Results = () => {

  const value = useContext(QuizContext)
  const[status, setStatus] = useState('')

  
  const checkStatus = () => {
    let score = value.totalRight - value.totalWrong
    switch(true) {
      case (score > 19):
        setStatus('You are the HOH');
        break;
      case (score > 16):
        setStatus('You are in the power alliance')
        break;
      case(score > 11):
        setStatus('You need the power of Veto');
        break;
      case (score > 8):
        setStatus('You need to make some deals fast');
        break;
      default:
        setStatus('Watch the rest of the season from home');
        break;         
    }
  }
    
  

    return (
        <div className='quiz-results'>
          <p>Results will go here</p>
          <p>Total Right is {value.totalRight}</p>
          <p>Total Wrong is {value.totalWrong}</p>
          <button onClick={checkStatus}>See Your Status In the House</button>
          <div className='status-display'>
            {status}
          </div>
          <Link to='/quiz'>
            <button className='my-3'>Try Again</button>
          </Link>
        </div>
    )
}

export default withRouter(Results);