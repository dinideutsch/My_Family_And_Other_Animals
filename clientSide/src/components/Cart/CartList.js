import React from 'react';
import CartItem from './CartItem';
function CartList({value}) {
    const {cart} = value;
    return (
      <div className="container-fluid">
        {cart.map(pet => {
          return <CartItem key={pet.id} pet={pet} value={value}/>;
        })}
       </div>
    );
  }
  
  export default CartList;