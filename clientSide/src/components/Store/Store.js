import React from 'react';
import {Link} from 'react-router-dom';
import food from "../../images/food.jpg"
import cages from "../../images/cages.jpg"
import pets from "../../images/pets.jpg"
import './Store.css';
function Store(props) {
    return (
    <div className="row ">
       <div className="col store-col">
     < Link to="/petlist">
        <img className="store-img" src={pets}></img>
        <p className="store-link">Pets</p>
      </Link>
      </div>
      <div className="col store-col">
     <Link to="/foodlist">
        <img className="store-img" src={food}></img>
        <p className="store-link">Food</p>
        </Link>
        </div>
        <div className="col store-col">
        <Link to="/cagelist">
        <img className="store-img" src={cages}></img>
        <p className="store-link">Cage&Care</p>
        </Link>
        </div>
    </div>

    );
  }
  
  export default Store;