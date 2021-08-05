import React, { Component } from 'react';
import customersComments from '../../data/commentsData.json';
class GetAllProducts extends Component {
    state = {
        products: []
      };
    componentDidMount() {
        this.getAllProducts();
    }
    // setPetsList = () => {
    //     this.setState(()=>{
    //       return {comments: customersComments.customersComments};
    //     });
    // }
    getAllProducts = (state, action) => {
      // let products; 
        fetch("http://localhost:3000/products/getAll", {
          method: "GET",
          headers: {
            //'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("token")),
            "Content-Type": "application/json",
            "access-control-allow-origin": "*",
          },
        }).then(res=>res.json())
        .then((res)=>{this.setState(()=>{
          return {products: res};
        });  });
        
   }
       render(){
           return(
           <>
            <h2>Products Details:</h2>
            <ul>
              {this.state.products.map(product => (<li key={product.id}>
                <h3>_id (usefull for deletion): {product._id}</h3>
               <h3>id: {product.id}</h3>
              <h3>title: {product.title}</h3>
              <h3>image: {product.image}</h3>
              <h3>info: {product.info}</h3>
              <h3>price: {product.price}</h3>
              <h3>stock: {product.stock}</h3>
              <h3>code: {product.code}</h3>
              </li>))} 
            </ul>
            </>
           )
        }
}
export default GetAllProducts;