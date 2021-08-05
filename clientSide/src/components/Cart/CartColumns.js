import React from 'react';
//the component of the cart's columns
function CartColumns() {
    return (
      <div className="container-fluid text-center d-none d-lg-block">
          <div className="row">
              <div className="col-10 mx-auto col-lg-2">
                  <p className="text-uppercase mx-5">pets</p>
              </div>
              <div className="col-10 mx-auto col-lg-2">
                  <p className="text-uppercase mx-5">name</p>
              </div>
              <div className="col-10 mx-auto col-lg-2">
                  <p className="text-uppercase mx-5">price</p>
              </div>
              <div className="col-10 mx-auto col-lg-2">
                  <p className="text-uppercase mx-5">quantity</p>
              </div>
              <div className="col-10 mx-auto col-lg-2">
                  <p className="text-uppercase mx-5">remove</p>
              </div>
              <div className="col-10 mx-auto col-lg-2">
                  <p className="text-uppercase mx-5">total</p>
              </div>
          </div>
     </div>
    );
  }
  
  export default CartColumns;