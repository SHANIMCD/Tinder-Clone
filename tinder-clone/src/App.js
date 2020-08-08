import React from 'react'
import Header from './header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import _TinderCards from './TinderCards'
import SwipeButtons from './SwipeButtons'
import Chats from './Chats'
import ChatScreen from './ChatScreen'
import Profile from './profile'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/chats/:person">
        <Header backButton="/chats" />
            <ChatScreen />
          </Route>
        <Route path="/chats">
        <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/profile">
          <Header backButton="/"/>
           <Profile /> 
          </Route>
          <Route path="/">
          <Header />
            <_TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
