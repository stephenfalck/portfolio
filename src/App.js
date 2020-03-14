import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBar from './navbar/navbar';
import Home from './home/home';
import Portfolio from './portfolio/portfolio';
import Contact from './contact/contact';
import Footer from './footer/footer';
import './App.css';

function App() {
  return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
  );
}

export default App;
