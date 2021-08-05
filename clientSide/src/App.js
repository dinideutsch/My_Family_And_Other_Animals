import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react';
import {Switch, Route} from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Cart from './components/Cart/Cart';
import PetList from './components/PetList/PetList';
import CageList from './components/CageList/CageList';
import FoodList from './components/FoodList/FoodList';
import Details from './components/Details/Details';
import Error from './components/Error/Error';
import Modal from './components/Modal/Modal';
import Home from './components/Home/Home';
import Store from './components/Store/Store';
import Admin from './components/Admin/Admin';
import Login from './components/Login/Login';
import About from './components/About/About';
import Comments from './components/Comments/Comments';
import AddAdmin from './components/AddAdmin/AddAdmin';
import ContactPage from './components/ContactPage/ContactPage';
import GetAllProducts from './components/ManageProducts/GetAllProducts';
import GetAllOrders from './components/ManageProducts/GetAllOrders';
import DeleteProduct from './components/ManageProducts/DeleteProduct';
import CreateProduct from './components/ManageProducts/CreateProduct';
function App() {
  return (
    <React.Fragment>
     <Nav/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/store" component={Store}/>
        <Route path="/petlist" component={PetList}/>
        <Route path="/cagelist" component={CageList}/>
        <Route path="/foodlist" component={FoodList}/>
        <Route path="/details" component={Details}/>
        <Route path="/contact page" component={ContactPage}/>
        <Route path="/about" component={About}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/login" component={Login}/>
        <Route path ="/admin" component = {Admin}/>
        <Route path ="/addAdmin" component = {AddAdmin}/>
        <Route path ="/comments" component = {Comments}/>
        <Route path ="/createProduct" component = {CreateProduct}/>
        <Route path ="/deleteProduct" component = {DeleteProduct}/>
        <Route path ="/getAllProducts" component = {GetAllProducts}/>
        <Route path ="/getAllOrders" component = {GetAllOrders}/>
        <Route component={Error}/>
      </Switch>
      <Modal/> 
    </React.Fragment>
  );
}

export default App;
 