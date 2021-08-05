import React from 'react';
import {PetConsumer} from '../../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from '../Button/Button';
function Details() {
    return (
      <PetConsumer>
        {value => {
          const {id,img,info,price,title,inCart,stock,code}=
          value.petDetails;
          let image = require('../../images/'+`${img}`);
          return (
            <div className="container py-5">
              <div className="row">
              <div className="col-10 mx-auto text-center
               text-slanted brown-text my-5">
                 <h1>{title}</h1>
               </div>
            </div>
            <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3
               text-capitalize">
               <img src={image.default} className="img-fluid" alt="pet"/>
              </div> 
               <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                {code===1 && <h2>I'm a : {title}</h2>}
                {code !==1 && <h2>It's a : {title}</h2>}
                <h4 className="brown-text">
                 <strong>
                   price : <span>$</span>{price}
                 </strong>
                </h4>
                {code===1 && <h2>some info about me: </h2>}
                {code===2 && <h2>size: </h2>}
                {code===3 && <h2>amount: </h2>}
                <p className="text-muted lead">{info}</p>
                {/*buttons*/}
                <div>
                  <Link to="/store">
                    <ButtonContainer>
                      back to store
                    </ButtonContainer>
                  </Link>
                  {stock > 0 && (
                 <ButtonContainer
                   disabled={inCart ? true :false}
                   onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                  }}
                  >
                    {inCart ? "in cart":"add to cart"}
                  </ButtonContainer>)}
                  {stock === 0 && (<span className="text-uppercase">not in stock</span>)}
                </div>
              </div>  
            </div>
          </div>
          );
       }}
      </PetConsumer>
    );
  }

  
  export default Details;