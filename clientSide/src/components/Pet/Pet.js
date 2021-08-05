import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {PetConsumer} from "../../context";
import './Pet.css';
function Pet(props) {
    const {id, title,img,inCart,price, stock}=props.pet||{};
    let image = require('../../images/'+`${img}`);
    return (
      <div className="pet-wrapper col-9 mx-auto col-md-6 col-lg-3">
        <div className="card">
          
          <PetConsumer>
            {value => ( <div className="img-container p-5" onClick={() => 
              value.handleDetail(id)
           }
          >
            <Link to="/details">
              <img src={image.default} alt="" className="card-img-top"/>
            </Link>
            {stock > 0 &&(
              <button className="cart-btn" disabled={inCart? true: false}
              onClick={()=>{
                value.addToCart(id);
                value.openModal(id);
              }}>
              {inCart?(<p className="text-capitalize mb-0" disabled>in cart</p>)
              :(<i className="fas fa-cart-plus"/>
              )}
            </button>)}
            {stock === 0 &&(<button className="cart-btn">
              <p className="text-capitalize mb-0" disabled>not in stock</p>
               <i className="fas fa-cart-plus"/>
            </button>)}
           </div>
            )}
          </PetConsumer>
          {/*card footer*/}
          <div className="card-footr d-flex justify-content-between">
            <p className="align-self-center mb-0">
              {title}
            </p>
            <h5 className="brown-text font-italic mb-0">
              <span className="mr-1">$</span>
              {price}
            </h5>
          </div>
        </div>
      </div>
    );
  }
  export default Pet;