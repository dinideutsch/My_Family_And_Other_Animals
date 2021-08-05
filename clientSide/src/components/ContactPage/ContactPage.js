import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
import './ContactPage.css';
import about from '../../images/about.jpg'
import React, { useState } from 'react';
import {validateEmail,validateName} from './Valid';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_G8pMkXn4Q4wjg5wTyAv7b");
//This is the componet of the contact page, where the customer can send a message to the store and get an email back 
function ContactPage(props) {
  const [value, setValue] = useState(
    {
      name: '',
      email: '',
      subject: '',
      content: ''
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
  const addComment = async () => {
    await fetch("http://localhost:3000/comments/createComment/", {
      method: "POST",
      headers: {
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
    if(validateEmail(value.email)===true&&validateName(value.name)===true&&value.name!==''&&value.email!==''){
        setError(false);
        setSuccess(true);
        addComment();
        fetch("http://localhost:3000/comments/email/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(value)
        });
      //   emailjs.send('service_ss985nh', 'template_vi2pfpe', 
      //   {
      //     customer_address: value.email,
      //     customer_name: value.name,
      //     subject: value.subject
      // },
      //   'user_G8pMkXn4Q4wjg5wTyAv7b');
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
        Contact us
      </h2>
      <p className="text-green text-center w-responsive mx-auto pb-5">
         We at "My Family And Other Animals" would love to hear from you, and help you eith anything we can.
        just write your comments down here, and we will respond the fastest we can.
      </p>
      <MDBRow>
        <MDBCol lg="5" className="lg-0 mb-4">
          <MDBCard>
            <MDBCardBody>
              <div className="form-header blue accent-1">
                <h3 className="mt-2">
                  <MDBIcon icon="envelope" /> Write to us:
                </h3>
              </div>
              <p className="dark-grey-text">
                           If you fill your details here, we'll send you back an email
              </p>
              <div className="md-form">
                <MDBInput
                  icon="user"
                  label="Your name"
                  iconClass="grey-text"
                  type="text"
                  id="form-name"
                  onChange={(event) => onInputChange(event, "name")} />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="envelope"
                  label="Your email"
                  iconClass="grey-text"
                  type="text"
                  id="form-email"
                  onChange={(event) => onInputChange(event, "email")} />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="tag"
                  label="Subject"
                  iconClass="grey-text"
                  type="text"
                  id="form-subject"
                  onChange={(event) => onInputChange(event, "subject")} />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="pencil-alt"
                  label="content"
                  iconClass="grey-text"
                  type="textarea"
                  id="form-text"
                  onChange={(event) => onInputChange(event, "content")} />
              </div>
              <div className="text-center">
              {error===true && (<p>one or more of the details above is incorrect. please fix it and try again</p>)}
              {success===true && (<p>you submitted successfully! we will send you an email soon, so you can keep on contact us.</p>)}
                <MDBBtn onClick={submit} color="light-blue">Submit</MDBBtn>
           </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <div className="col-lg-7">
          <img
            className="about-img img-fluid rounded mb-4 mb-lg-0"
            src={about}
            alt="" />
        </div>
      </MDBRow>
    </section>
  );
}

export default ContactPage;

