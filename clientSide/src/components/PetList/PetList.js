import React, { Component } from 'react';
import Pet from '../Pet/Pet';
import Title from '../Title/Title';
import {PetConsumer} from '../../context'
function PetList() {
    return (
      <React.Fragment>
       <div className="py-5">
         <div className="container">
          <Title title="our pets"/>
          <div className="row"/>
            <PetConsumer>
              {value => {
                return value.pets.map(pet=>{
                 return pet.code===1 && <Pet key={pet.id} pet={pet}/>
                })
              }}
            </PetConsumer>
         </div>
       </div>
      </React.Fragment>
    );
  }
  
  export default PetList;