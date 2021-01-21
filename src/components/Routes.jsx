import React from "react";
import Home from "./Home";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import { NavLink, Switch, Route } from 'react-router-dom';

function Routes(){

    return (
        <>
        <nav>
    <ul>
      <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/about'>About</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/contact'>Contact</NavLink></li>
    </ul>
  </nav>
  
  <Switch>
    <Route exact path='/' ><Home /></Route>
    <Route exact path='/about'><About /></Route>
    <Route exact path='/contact'><Contact/></Route>
  </Switch>
       </> );
}


export default Routes;