import React, { Component } from "react";
import {petDetails} from "./data/data";
// import storeInventory from './data/petsData.json';
const PetContext = React.createContext();
class PetProvidor extends Component {
  state = {
    pets: [],
    petDetails: petDetails,
    cart: [],
    modalIsOpen: false,
    modalPet: petDetails,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0 
  };
  componentDidMount() {
    //this.setPetsList();
    this.getAllProducts();
  }

  
  getAllProducts = (state, action) => {
      fetch("http://localhost:3000/products/getAll", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "access-control-allow-origin": "*",
          },
        }).then(res=>res.json())
        .then((res)=>{this.setState(()=>{
          return {pets: res};
        });  });
        
   }
  //This function finds a pet or any oyher item in the store, using id
  getPet = id => {
    const pet = this.state.pets.find(item => item.id===id);
    return pet;
  }
  handleDetail = id => {
    const pet = this.getPet(id);
    this.setState(()=>{
      return {petDetails:pet}
    })
  };
  addToCart = id => {
    //here we create a copy of the item
    let tempPets = [...this.state.pets];
    const index = tempPets.indexOf(this.getPet(id));
    const pet = tempPets[index];
    //if there is enough in stock, add it to cart
    if(pet.stock>0){
       pet.inCart = true;
       pet.count = 1;
       pet.stock -= 1;
       const price = pet.price;
       pet.total = price;
    }
    //if not, sign it
    else{
      pet.title = "not in stock";
      return;
    }
    //then set the new states, and add the price to the cart totals
    this.setState(() => {
      return { pets: tempPets, cart: [...this.state.cart, pet] };
      },
      () => {
        this.addTotals();
    });
    console.log(this.state.pets);
  };
  //This function opens the modal that matchs the pet with the correct id 
  openModal = id => {
    const pet = this.getPet(id);
    this.setState(()=>{
      return {modalPet: pet, modalIsOpen: true}
    })
  };
  closeModal = () =>{
    this.setState(() =>{
        return {modalIsOpen: false}
    })
  };
  //This function increments the amount of the item in the cart
  increment = (id) => {
    //here we get a copy of the cart and the list of products
    let tempCart = [...this.state.cart];
    let tempArray = [...this.state.pets];
    const index1 = tempArray.indexOf(this.getPet(id));
    let incrementedPet = tempArray[index1];
    //and the item we want to increment in the copied-arrays
    const selectedPet = tempCart.find(pet=>pet.id === id);
    const index = tempCart.indexOf(selectedPet);
    const pet = tempCart[index];
    //if there is enough of it in the stock, increment' otherwise - ignore 
    if(pet.stock>0){
      incrementedPet.stock -= 1;
      pet.count = pet.count+1;
      pet.total = pet.count * pet.price;
      //set the new states
      this.setState(()=>{return{
        cart:[...tempCart],
        pets:[...tempArray]  
        //and add the price to the cart totals
    };},()=>{this.addTotals()});
   }
  };
  //This function decrements the amount of the item in the cart
  decrement = id => {
    //here we get a copy of the cart and the list of products
    let tempArray = [...this.state.pets];
    const index1 = tempArray.indexOf(this.getPet(id));
    let decrementedPet = tempArray[index1];
    let tempCart = [...this.state.cart];
    //and the item we want to decrement in the copied-arrays
    const selectedPet = tempCart.find(pet=>pet.id === id);
    const index = tempCart.indexOf(selectedPet);
    const pet = tempCart[index];
    decrementedPet.stock += 1;
    pet.count = pet.count - 1;
    //if there was only one in the cart, remove the item
    if(pet.count === 0){
      this.removePet(id);
      //otherwise, set the new states
    }else{
      pet.total= pet.count * pet.price;
      this.setState(
        ()=>{
          return{
            cart:[...tempCart],
            pets:[...tempArray]  
          };
       },() => {
         //and reduce the cart totals
        this.addTotals();
       }
     );
    };

  };
  //This function removes an item from the cart
  removePet = id => {
     //here we get a copy of the cart and the list of products
    let tempArray = [...this.state.pets];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(pet => pet.id !== id);
    const index = tempArray.indexOf(this.getPet(id));
    //and the item we want to remove in the copied-arrays
    let removedPet = tempArray[index];
    removedPet.inCart = false;
    removedPet.stock +=removedPet.count;
    removedPet.count = 0;
    removedPet.total = 0;
    //set the new states
    this.setState(()=>{
      return{
        cart:[...tempCart],
        pets:[...tempArray]  
      };
    },
    () => {
      //and reduce the price from the cart totals
      this.addTotals();
    });

  };
  
  clearCart = () => {
    this.state.cart.forEach(pet=>{this.removePet(pet.id)});
  };

  //This function sets the cart totals respectively with the items in the cart
  addTotals = () => {
    let subTotal=0;
    this.state.cart.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(()=>{
      return{
        cartSubTotal:subTotal,
        cartTax: tax,
        cartTotal: total
      };
    });
  };
  render(){
    return (
        <PetContext.Provider value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removePet: this.removePet,
          clearCart: this.clearCart
        }}>
          {this.props.children}
        </PetContext.Provider>
     );
  }
}
const PetConsumer = PetContext.Consumer;
export { PetProvidor, PetConsumer };