import React from 'react'
import Header from './header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import _TinderCards from './TinderCards'
import TinderCards from 'react-tinder-card'
import SwipeButtons from './SwipeButtons'


import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
        <Route path="/chat">
            <p>Chat</p>
          </Route>
          <Route path="/">
            <_TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
