import React, { Component } from 'react';
import Pet from '../Pet/Pet';
import Title from '../Title/Title';
import {PetConsumer} from '../../context'
function FoodList() {
    return (
      <React.Fragment>
       <div className="py-5">
         <div className="container">
          <Title title="And In The Menu..."/>
          <div className="row"/>
            <PetConsumer>
              {value => {
                return value.pets.map(pet=>{
                 return pet.code===3 && <Pet key={pet.id} pet={pet}/>
                })
              }}
            </PetConsumer>
         </div>
       </div>
      </React.Fragment>
    );
  }
  
  export default FoodList;