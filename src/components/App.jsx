import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

import Routes from "./Routes.jsx";


function App (){
  return (
    <div className='app'>
    
    <h1>Portfolio Website</h1>
    <Routes />
    
   </div>
  );
}

export default App;
