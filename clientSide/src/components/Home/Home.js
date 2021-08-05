import React from 'react';
import pets from '../../images/homepets.jpg';
import './Home.css';
import {Link} from "react-router-dom";
function Home() {
    return (
       <div className="home">
             <img src={pets} className="img-fluid" alt=""/>
             <div className= "button-wrapper">
             <Link to='/store'>
             <button className="home-button">let's start shopping!</button>
             </Link> 
             </div>
       </div>
    );
  }
  
  export default Home;