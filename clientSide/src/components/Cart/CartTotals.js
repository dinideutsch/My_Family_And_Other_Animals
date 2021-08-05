import React from 'react';
import {Link} from 'react-router-dom';
import PayPalButton from '../PayPal/PayPalButton';
import './Cart.css';
function CartTotals({value,history}) {
    const{cartSubTotal,cartTax,cartTotal, clearCart,pets,cart} = value;
    return (
        <React.Fragment>
         <div className="container">
             <div className="row">
                 <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8
                 text-capitalize text-right">
                <Link to="/store">
                    <button className="btn btn-outline-danger text-uppercase
                    mb-3 px-5" type="button" onClick={() => clearCart()}>clear cart</button>
                </Link>
                <h5>
                    <span className="text-title">subtotal :</span>
                    <strong>${cartSubTotal}</strong>
                </h5>
                <h5>
                    <span className="text-title">tax :</span>
                    <strong>${cartTax}</strong>
                </h5>
                <h5>
                    <span className="text-title">total :</span>
                    <strong>${cartTotal}</strong>
                </h5>
                <h4 className="text-title text-uppercase text-muted mt-3 mb2">
                    By clicking on this button you can pay securely 
                    by paypal, and choose the shipping address to which 
                    the pets you bought will arrive, if you do not have yet 
                    a paypal account, - do not worry. Here you can also create 
                    a new one for yourself</h4>
                   <PayPalButton pets={pets} total={cartTotal} clearCart={clearCart} history={history} cart = {cart} />
                 </div>
             </div>
         </div>
        </React.Fragment>
    );
  }
  
  export default CartTotals;