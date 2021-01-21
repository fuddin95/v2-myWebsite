import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";//A js file containing JSON
import "./Dropdown.css"
function Dropdown (){
   const [clickState,setClickState]= useState(false);
   
   const handleClick = ()=> setClickState(!clickState);
    
    return(<div>
        <ul onClick={handleClick} 
        className={clickState?"dropdown-menu clicked": "dropdown-menu"}
        />
        {MenuItems.map((item,index)=>{
            return (
                <li key={index}>
                    <Link 
                    className={item.cName} 
                    to={item.path}
                    onClick= {()=>setClickState(false)}
                    >
                    {item.title}
                    </Link>
                </li>

            )
        })}
    </div>

    );
}

export default Dropdown;