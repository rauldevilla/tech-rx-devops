import React, { useState } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';

function App() {
  const [user, setUser] = useState(false);

  const handleLogin = e => {
    e.preventDefault();
    setUser(true);
  }

  return (
    <div className="App">
      <Router>
        <Route exact path='/' handleLogin={handleLogin} render={props => <Landing {...props} user={user.toString()} handleLogin={handleLogin} />} />
        <Route exact path='/dashboard' component={Dashboard} />
      </Router>
    </div>
  );
}

export default App;