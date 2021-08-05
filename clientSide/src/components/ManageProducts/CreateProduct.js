import React, { useState } from 'react';
import { MDBCard, MDBCardBody, MDBBtn, MDBInput } from "mdbreact";
function CreateProduct(props) {
  const [value, setValue] = useState(
    {
      id:'',
      title: '',
      image:'',
      info:'',
      stock: '',
      cost:'',
      code:''
    }
  );
  //This function saves the customer details
  function onInputChange(event, field) {
    setValue({ ...value, [field]: event.target.value });
  }
  function onCreation(){
    createProduct();
  }
  const createProduct = async () => {
    fetch("http://localhost:3000/products/createProduct/", {
        method: "POST",
        headers: {
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("token")),
        "Content-Type": "application/json",
        },
        body: JSON.stringify(value)
        })
};



  return (
        <MDBCard>
        <MDBCardBody>
          <div className="form-header blue accent-1">
            <h3 className="mt-2">
               Put the id of the product you want to delete:
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
          <div className="md-form">
            <MDBInput
              icon="tag"
              label="product title"
              iconClass="grey-text"
              type="text"
              id="form-name"
              onChange={(event) => onInputChange(event, "title")} />
          </div>
          <div className="md-form">
            <MDBInput
              icon="tag"
              label="product image"
              iconClass="grey-text"
              type="text"
              id="form-name"
              onChange={(event) => onInputChange(event, "image")} />
          </div>
          <div className="md-form">
            <MDBInput
              icon="tag"
              label="product info"
              iconClass="grey-text"
              type="text"
              id="form-name"
              onChange={(event) => onInputChange(event, "info")} />
          </div>
          <div className="md-form">
            <MDBInput
              icon="tag"
              label="amount in stock"
              iconClass="grey-text"
              type="text"
              id="form-name"
              onChange={(event) => onInputChange(event, "stock")} />
          </div>
          <div className="md-form">
            <MDBInput
              icon="tag"
              label="product cost"
              iconClass="grey-text"
              type="text"
              id="form-name"
              onChange={(event) => onInputChange(event, "cost")} />
          </div>
          <div className="md-form">
            <MDBInput
              icon="tag"
              label="product code"
              iconClass="grey-text"
              type="text"
              id="form-name"
              onChange={(event) => onInputChange(event, "code")} />
          </div>
          <div className="text-center">
            <MDBBtn onClick={onCreation} color="light-blue">Add</MDBBtn>
       </div>
        </MDBCardBody>
      </MDBCard>
    );
  }
  
  export default CreateProduct;