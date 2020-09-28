import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Service from './Components/Service';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
// import Footer from './Components/Footer';

function App() {
  return (
    <>
    <Navbar />

    <Switch>
      <Route exact path="/"> <Home />  </Route>
      <Route exact path="/contact"> <Contact />  </Route>
      <Route exact path="/about"> <About />  </Route>
      <Route exact path="/service"> <Service /> </Route>
      <Redirect to="/" />
    </Switch>
    {/* <Footer /> */}
    </>
  );
}

export default App;
