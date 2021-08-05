import React from 'react';
import Title from "../Title/Title";
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import { PetConsumer } from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';
import './Cart.css';
//The cart component
class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.contextValue={}
    
  }
 setMyState=contextValue=>{this.contextValue=contextValue}
 render() {
    return (
      <section>
        <PetConsumer>
        {value => {
        this.setMyState(value)
          const { cart } = value;
          if (cart.length > 0) {
            return (
              <React.Fragment>
                <Title name="your" title="your cart" />
                <CartColumns />
                <CartList value={value} />
                <CartTotals pets={this.props.pets} value={value} history={this.props.history} cart = {cart}/>
              </React.Fragment>
            );
          } else {
            return <EmptyCart />;
          }
        }}
        </PetConsumer>
      </section>
    );
  }
}

export default Cart;