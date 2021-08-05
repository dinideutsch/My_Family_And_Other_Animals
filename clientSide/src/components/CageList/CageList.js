import React, { Component } from 'react';
import Pet from '../Pet/Pet';
import Title from '../Title/Title';
import {PetConsumer} from '../../context'
//This is the component of the cages' class
function CageList() {
    return (
      <React.Fragment>
       <div className="py-5">
         <div className="container">
          <Title title="Home Sweet Home"/>
          <div className="row"/>
            <PetConsumer>
              {value => {
                return value.pets.map(pet=>{
                 return pet.code===2 && <Pet key={pet.id} pet={pet}/>
                })
              }}
            </PetConsumer>
         </div>
       </div>
      </React.Fragment>
    );
  }
  
  export default CageList;