import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
//This is the "about" component of our store - here we will give the customer some information about the store.
function About() {
    return (
      <div className="about">
          <title>About - myfamilyandotheranimals.com</title>
          <meta name="description" content="" />
          <link rel="canonical" href="http://mysite.com/example" />
        <div className="container">
          <div className="row align-items-center my-5">
           <MDBCol lg="7">
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "400px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3392.1371405707037!2d35.1853895!3d31.7667453!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d7bd3fc2cab5%3A0x442af6ff42c71fec!2z15nXpteX16cg15HXqNeV15nXkNeoIDEzLCDXmdeo15XXqdec15nXnQ!5e0!3m2!1siw!2sil!4v1615911476241!5m2!1siw!2sil"
              title="This is a unique title"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
          <br />
          <MDBRow className="text-center">
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="map-marker-alt" />
              </MDBBtn>
              <p className="blue-text">Yitzhak Breuer 13, Jerusalem</p>
              <p className="blue-text mb-md-0">Israel</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="phone" />
              </MDBBtn>
              <p className="blue-text">+ 972 53 415 8443</p>
              <p className="blue-text mb-md-0">Sun - Fri, 8:00-22:00</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="envelope" />
              </MDBBtn>
              <p className="blue-text">info@gmail.com</p>
              <p className="blue-text mb-md-0">sale@gmail.com</p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
            <div className="col-lg-5">
              <h1 className="font-weight-light">About My Family And Other Animals:</h1>
              <p>
              "My Family And Other Animals" is proud to be the most cozy, loving and nurturing 
              pets' boutique in the world, that is being a home for a rich variety of friendly 
              and cheerful animals, ready to be your best friends! 
              Here you will find dogs, cats, 
              fish - and almost any other animal you would like to add to your very own zoo, 
              besides human beings, which you will need to purchase at another store...
             </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default About;