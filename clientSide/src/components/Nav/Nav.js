import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import '../../App.css';
import {ButtonContainer} from "../Button/Button";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact';
function Nav() {
    return (
      <NavWraper className="navbar navbar-expand-sm bg-dark navbar-dark px-sm-5">
        <Link to="/" className="nav-links" >
          🏠home page
        </Link>
        <Link to='/store' className="nav-links">
          🛒store
       </Link>
       <Link to='/petlist' className="nav-links">
          🐶pets
       </Link>
       <Link to='/foodlist' className="nav-links">
          🍽food 
       </Link>
       <Link to='/cagelist' className="nav-links">
          🧊cage&care
       </Link>
        <Link to='/contact page' className="nav-links">
          💌Keep in touch
       </Link>
        <Link to='/about' className="nav-links">
          📝about
       </Link>
       <Link to='/cart' className='ml-auto'>
         <ButtonContainer>
           <span className="mr-2">
            <i className="fas fa-cart-plus"/>
           </span>
           your cart
         </ButtonContainer>
       </Link>
       <MDBNavbarNav right className="nav-right collaps">
                <MDBNavItem className="nav-admin">
                  <MDBNavLink className="admin-link" to="/login"><MDBIcon className="admin-icon" />  ADMIN</MDBNavLink>
                </MDBNavItem>
       </MDBNavbarNav>
      
      </NavWraper> 
    );
  }
  const NavWraper =  styled.nav`
  background:var(--mainGreen);
  .nav-link{
    color:var(--mainWhite)!important;
    font-size:1.3rem;
    text-transform: capitalize;
 }
  `;
 

 export default Nav;  
  
  