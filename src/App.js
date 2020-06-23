import React, { useState } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

// components
import Navbar from './components/Navbar';
import Header from './components/Header';
import Catagories from './components/Catagories';
import Featured from './components/Featured';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Browse from './components/Browse';

function App() {
  const [query, setQuery] = useState('');
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Header query={query} setQuery={setQuery} />
            <Catagories />
            <Featured />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/browse">
            <Browse query={query} setQuery={setQuery} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
