import React from 'react';

const QuizContext = React.createContext({

    houseGuest: '',
    questions: [],
    questionNumber: null,
    totalRight: 0,
    totalWrong: 0,
    confirmAnswer: () => {},
    correctAnswers: []
})

export default QuizContext;