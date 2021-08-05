import { React, useEffect, useState } from "react";
// import admins from '../../data/admins.json'
import './Login.css';
import '../../App.css';
// import { IsValidAdminDetails } from '../Validations/Validation.js';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { withRouter } from "react-router";


const Login = (props) => {
  const { history } = props;
  const [state, setState] = useState({
    name: '',
    password: '',
    errors: {
    name: '',
    password: '',
    admins: '',
   }
  });
  const [admins,setAdmins]=useState();
  const handlerClick = () => {
    history.push('./admin');
  }
  function onInputChange(field, event) {
    setState({ ...state, [field]: event.target.value });
    console.log(state);
  }
 useEffect(() => { 
      fetch("http://localhost:3000/admins/getAll", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "access-control-allow-origin": "*",
          },
        }).then(res=>res.json())
        .then((res)=>setAdmins(res));
     },[]);
  
  function IsValidAdminDetails(name, password) {
       for (let index = 0; index < admins.length; index++) {
          if (password.length === 0 && name.length === 0) {
              return "Name and password required";
          }
          else if (name.length === 0) {
              return "Name required";
          }
          else if (password.length === 0) {
              return "Password required";

          }
          if (admins[index].name === name) {
          
              if (admins[index].password === password) {
                
                  return;
              }
              else
                  return "Password incorrect"
          };

      }
      return "Name incorrect"
}

  function validate(event) {
    const { name, password } = state;
    const errors = {};
    errors.admins = IsValidAdminDetails(name, password)

    if (!errors.admins) {
      fetch("http://localhost:3000/admins/login", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({name,password})
        }).then(response => response.json())
        .then(data => localStorage.setItem ('token', JSON.stringify(data.token)))
         handlerClick();
    }
    setState({ ...state, errors: errors });
    event.preventDefault();
  }
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form id="login">
            <p className="h5 text-center mb-4">SIGN IN</p>
            <div className="grey-text">
              <MDBInput label="Type admin name" icon="user" group type="text" validate error="wrong" value={state.name} onChange={(e) => onInputChange('name', e)}
                success="right" />
              <MDBInput label="Type your password" icon="lock" group type="password" validate value={state.password} onChange={(e) => onInputChange('password', e)} />
            </div>

            <br />
            {state.errors.admins && <div className="error">{state.errors.admins}</div>}
            <div className="text-center" onClick={validate}>
              <MDBBtn className="sendButton" type="submit">Login</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};




export default withRouter(Login);