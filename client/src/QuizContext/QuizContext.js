import React from 'react';

const QuizContext = React.createContext({

    houseGuest: '',
    questions: [],
    questionNumber: null,
    totalRight: '',
    totalWrong: '',
    confirmAnswer: () => {}
})

export default QuizContext;