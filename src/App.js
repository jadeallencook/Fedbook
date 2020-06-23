import React from 'react';
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

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Header />
            <Catagories />
            <Featured />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
