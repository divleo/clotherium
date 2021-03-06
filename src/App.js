import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';

import Home from './pages/home/home.component';
import Shop from './pages/shop/shop.component';
import Sign from './pages/sign/sign.component';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/sign" component={Sign} />
      </Switch>
    </div>
  );
}

export default App;
