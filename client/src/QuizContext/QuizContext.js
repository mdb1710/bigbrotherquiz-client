import React from 'react';

const QuizContext = React.createContext({

    houseGuest: '',
    questions: [],
    questionNumber: null,
    totalRight: 0,
    totalWrong: 0,
    time: null,
    display: true,
    confirmAnswer: () => {},
    correctAnswers: []
})

export default QuizContext;