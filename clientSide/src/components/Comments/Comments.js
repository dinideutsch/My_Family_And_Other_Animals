import React, { Component } from 'react';
import customersComments from '../../data/commentsData.json';
class Comments extends Component {
    state = {
        comments: []
      };
    componentDidMount() {
      try{
       this.getAllComments();
      }catch{alert("This page is unauthorized for you");}
    }
    getAllComments = (state, action) => {
          fetch("http://localhost:3000/comments/getAll", {
              method: "GET",
              headers: {
                'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("token")),
                "Content-Type": "application/json",
                "access-control-allow-origin": "*",
              },
            }).then(res=>res.json())
            .then((res)=>{this.setState(()=>{
              return {comments: res};
            });  });
            
       };
       render(){
           return(
           <>
            <h2>Customers Comments:</h2>
            <ul>
              {this.state.comments.map(comment => (<li key={comment.id}>
               <h3>customer name: {comment.name}</h3>
              <h3>customer email: {comment.email}</h3>
              <h3>subject: {comment.subject}</h3>
              <h3>content: {comment.content}</h3>
              </li>))} 
            </ul>
            </>
           )
        }
}
export default Comments;