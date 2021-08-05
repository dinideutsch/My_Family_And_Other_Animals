import React, { Component } from 'react';
class GetAllOrders extends Component {
    state = {
        orders: []
      };
    componentDidMount() {
      try{
        this.getAllOrders();
      }catch{alert("This page is unauthorized for you");}

    }
    
    getAllOrders = (state, action) => {
       
      fetch("http://localhost:3000/orders/getAll", {
          method: "GET",
          headers: {
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("token")),
            "Content-Type": "application/json",
            "access-control-allow-origin": "*",
          },
        }).then(res=>res.json())
        .then((res)=>{this.setState(()=>{
          return {orders: res};
        });  });
        
   }
       render(){
           return(
           <>
            <h2>Orders Details:</h2>
            <ul>
              {this.state.orders.map((order,index) =>
              <div>
              <h2>order #{index+1}</h2>
              <ul>
              {order.cart.map(product => (<li key={product.id}>
               <h3>id: {product.id}</h3>
              <h3>title: {product.title}</h3>
              <h3>price: {product.price}</h3>
              <h3>count: {product.count}</h3>
              <h3>total: {product.total}</h3>
              <h3>stock: {product.stock}</h3>
              <h3>code: {product.code}</h3>
              </li>))}</ul></div>)} 
           </ul>
            </>
           )
        
        }
}
export default GetAllOrders;