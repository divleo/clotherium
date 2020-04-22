import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

function App() {
  return (
    <div className="app-container">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={() => 'HATS PAGE'} />
      </Switch>
    </div>
  );
}

export default App;
