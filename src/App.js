import React, { useState } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './components/Landing';

function App() {
  const [user, setUser] = useState(false);

  /*
  const handleLogin = e => {
    console.log('setUser');
    e.preventDefault();
    setUser(true);
  }
  */

  const handleLogout = e => {
    e.preventDefault();
    setUser(false);
  }

  const createSession = () => {
    var number = Math.floor(Math.random() * 10);
    fetch('http://numbersapi.com/' + number)
      .then(response => {
        console.log('response', response);
        response.text().then((text) => {
          console.log('body', text);
          var index = text.indexOf(' ');
          if (index < 0) {
            setUser(false);
          } else {
            var str = text.substring(0, index);
            console.log('str', '"' + str + '"');
            var status = parseInt(str) % 2 === 0;
            console.log('status', status);
            setUser(status);
          }
        });
      });
  }

  return (
    <div className="App">
      <Router>
        <Route exact path='/:target/:client' render={props => <Landing {...props} user={user} createSession={createSession} />} />
      </Router>
    </div>
  );

  /*
  return (
    <div className="App">
      <Router>
        <Route exact path='/:whereTo/:id' render={props => <Landing {...props} user={user} createSession={createSession} />} />
        <ProtectedRoute exact path='/dashboard' user={user} handleLogout={handleLogout} component={Dashboard} />
        <Route exact path='/unauthorized' component={Unauthorized} />
      </Router>
    </div>
  );
  */


}

export default App;