import React, { useState, useContext } from 'react';
import { withRouter } from "react-router";

import Scorecard from '../Scorecard/Scorecard';
import Questions from '../Questions/Questions';
import QuizContext from '../QuizContext/QuizContext';

const QuizSection = () => {

    

    const value = useContext(QuizContext)
    return (
        <div className='quiz-page'>
          <h3>Welcome {value.houseGuest}</h3>
        <Scorecard />
        <Questions />

        </div>
    )
}

export default withRouter(QuizSection);
