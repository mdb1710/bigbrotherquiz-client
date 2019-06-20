import React from 'react';
import { Route, Link } from 'react-router-dom';
import Homepage from './Homepage/Homepage';


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Big Brother Quiz App - Season One</h1>
      </header>
      <main>
      <Route 
      path='/'
      component={Homepage}/>
      </main>
    </div>
  );
}

export default App;
