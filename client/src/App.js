import React ,{ useState } from 'react';
import { Route, Link } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import QuizSection from './QuizSection/QuizSection';
import Results from './Results/Results';

import QuizContext from './QuizContext/QuizContext';


const App = () => {

  const contextValue = {
    houseGuest: '',
    questions: [],
    questionNumber: null,
    totalRight: '',
    totalWrong: ''
  }

  return (
    <div className="App">
      
      <header className="App-header">
        <h1 className='text-center'>Big Brother Quiz App - Season One</h1>
      </header>
      
      <main>
      <QuizContext.Provider value={contextValue}>
      <Route 
       exact path='/'
      component={Homepage}/>
      <Route 
      path='/quiz'
      component={QuizSection}/>
      <Route 
      path='/results'
      component={Results}/>
      </QuizContext.Provider>
      </main>
    </div>
  );
}

export default App;
