import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn, MDBInput } from "mdbreact";
import React, { useState } from 'react';
import {validateEmail,validateName} from '../ContactPage/Valid';
//This is the componet of the contact page, where the customer can send a message to the store and get an email back 
function AddAdmin() {
  const [value, setValue] = useState(
    {
      name: '',
      password: ''
    }
  );
  //The state that notes there is an error in the customer details
  const [error, setError]= useState(
    {
      error: false
    }
  );
//The state that notes that all of the customer details are fine
  const [success, setSuccess]= useState(
    {
      success: false
    }
  );
  //This is a function that adds the comment to a list' so we have it saved for future use if we wiil need
  const addAdmin = async () => {

    await fetch(" http://localhost:3000/admins/createAdmin/", {
      method: "POST",
      headers: {
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("token")),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    });
  };
//This function saves the customer details
  function onInputChange(event, field) {
    setValue({ ...value, [field]: event.target.value });
  }
  //This function takes care of what need to happen after submitting
  function submit() {
    //In case the details are fine, mark it in the proper states and send an email
    if(validateEmail(value.password)===true&&validateName(value.name)===true&&value.name!==''&&value.password!==''){
        setError(false);
        setSuccess(true);
        addAdmin(value);
    }
    //In case there was a mistake, set the error state
    else{ 
      setError(true);
      setSuccess(false);
    }
  }
  return (
    <section className="my-5">
      <h2 className="text-green h1-responsive font-weight-bold text-center my-5">
        Register A New Admin
      </h2>
      <MDBRow>
        <MDBCol lg="5" className="lg-0 mb-4">
          <MDBCard>
            <MDBCardBody>
              <div className="form-header blue accent-1">
              </div>
              <p className="dark-grey-text">
                 Write the admin name and password here:
              </p>
              <div className="md-form">
                <MDBInput
                  icon="user"
                  label="admin's name"
                  iconClass="grey-text"
                  type="text"
                  id="form-name"
                  onChange={(event) => onInputChange(event, "name")} />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="lock"
                  label="choose an email acount as password"
                  iconClass="grey-text"
                  group type="password"
                  id="form-password"
                  onChange={(event) => onInputChange(event, "password")} />
              </div>
              <div className="text-center">
              {error===true && (<p>one or more of the details above is incorrect. please fix it and try again</p>)}
              {success===true && (<p>your request has been send succesfully! try to login to see if you are a new administrator.</p>)}
                <MDBBtn onClick={submit} color="light-blue">Register</MDBBtn>
           </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        {/* <div className="col-lg-7">
          <img
            className="about-img img-fluid rounded mb-4 mb-lg-0"
            src={about}
            alt="" />
        </div> */}
      </MDBRow>
    </section>
  );
}
export default AddAdmin;