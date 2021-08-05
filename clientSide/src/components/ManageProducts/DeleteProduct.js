import React, { useState } from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
function DeleteProduct(props) {
  const [value, setValue] = useState(
    {
      id: ''
    }
  );
  //This function saves the customer details
  function onInputChange(event, field) {
    setValue({ ...value, [field]: event.target.value });
  }
  function onDelete(){
    deleteProduct();
  }
  const deleteProduct = async () => {

    await fetch("http://localhost:3000/products/deleteProduct/", {
      method: "DELETE",
      headers: {
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("token")),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    });
  };
  return (
        <MDBCard>
        <MDBCardBody>
          <div className="form-header blue accent-1">
            <h3 className="mt-2">
               Put the _id of the product you want to delete:
            </h3>
          </div>
          <div className="md-form">
            <MDBInput
              icon="tag"
              label="product id"
              iconClass="grey-text"
              type="text"
              id="form-name"
              onChange={(event) => onInputChange(event, "id")} />
          </div>
          <div className="text-center">
            <MDBBtn onClick={onDelete} color="light-blue">Delete</MDBBtn>
       </div>
        </MDBCardBody>
      </MDBCard>
    );
  }
  
  export default DeleteProduct;