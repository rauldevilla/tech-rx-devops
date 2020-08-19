import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Survey from './components/Survey';
import UserSessionContextProvider from './contexts/UserContext';

function App() {

  return (
    <div className="App">
      <UserSessionContextProvider>
        <Router>
          <Route exact path='/start/:userToken' render={props => <Landing {...props}/>}/>
          <Route exact path='/survey/:id' render={props => <Survey {...props} />} />
        </Router>
      </UserSessionContextProvider>
    </div>
  );


}

export default App;