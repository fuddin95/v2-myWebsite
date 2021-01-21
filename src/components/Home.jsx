import React ,{useState}from "react";
import {Link} from "react-router-dom"

function Home (){
    const [clickState,setClickState]=useState(false);
    
    function handleClick(){ 
        return (setClickState(!clickState));
    }

    return(
        
        <div className='home'>
        <h1>Welcome to my portfolio website</h1>
        <p> Feel free to browse around and learn more about me.</p>
      </div>

    );
}

export default Home;