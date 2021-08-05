import React, {Component} from "react"
import {ModalContainer} from './ModalContainer';
import {PetConsumer} from '../../context';
import {ButtonContainer} from '../Button/Button';
import {Link} from "react-router-dom"; 
export default class Modal extends Component {
   render(){
       return(
           <PetConsumer>
               {(value) => {
                   const {modalIsOpen,closeModal}=value;
                   const {img, title, price} = value.modalPet;
                   let image = require('../../images/'+`${img}`);
                   if(!modalIsOpen){
                       return null;
                   }
                   else{
                      return(
                         <ModalContainer>
                           <div className = "container">
                             <div className="row">
                                 <div id ="modal" className="col-8 mx-auto col-md-6 col-lg-4
                                 text-center text-capitalize p-5">
                                     <h2>This {title} is yours!</h2>
                                     <img src={image.default} className="img-fluid" alt="pet"/>
                                     <h5 className="text-muted">price : $ {price}</h5>
                                     <Link to="/store">
                                         <ButtonContainer  onClick={() => closeModal()}>
                                            Back To store
                                         </ButtonContainer>
                                     </Link>
                                     <Link to="/cart">
                                         <ButtonContainer  onClick={() => closeModal()}>
                                             Go to cart
                                         </ButtonContainer>
                                     </Link>
                                 </div>
                             </div>
                           </div>
                        </ModalContainer>
                       );
                   }
               }}
           </PetConsumer>
       );
   }
};