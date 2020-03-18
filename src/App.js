import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { createMuiTheme, ThemeProvider  } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import NavBar from './navbar/navbar';
import Home from './home/home';
import Portfolio from './portfolio/portfolio';
import Contact from './contact/contact';
import Footer from './footer/footer';
import './App.css';

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: pink[300],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
      </ThemeProvider>
  );
}

export default App;
