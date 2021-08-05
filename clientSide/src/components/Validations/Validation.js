import ordering from '../../data/admins.json'

function isValidEmail(email) {
    if (email.length === 0) {
        return "This field is required";
    }
    const emailre = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;
    if (!email.match(emailre))
        return "Invalid email address";
    return;

}

function isValidPhonenumber(phonenumber) {
    if (phonenumber.length === 0) {
        return "This field is required";
    }
    if (phonenumber.length > 10 || phonenumber.length < 9) {
        return "The phone number length is incorrect";
    }
    const num = /^0?(([23489]{1}\d{7})|[5]{1}\d{8})$/
    if (!phonenumber.match(num))
        return "Invalid phone number";
    return;
}
getAllAdmins = (state, action) => {
    let admins; 
    fetch("http://localhost:3000/admins/getAll", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "access-control-allow-origin": "*",
        },
      }).then(res=>res.json())
      .then((res)=>{this.setState(()=>{
        return {admins: res};
      });  });
      
 }

function IsValidAdminDetails(name, password) {

    for (let index = 0; index < ordering.admin.length; index++) {
        if (password.length === 0 && name.length === 0) {
            return "Name and password required";
        }
        else if (name.length === 0) {
            return "Name required";
        }
        else if (password.length === 0) {
            return "Password required";

        }
        if (ordering.admin[index].name === name) {
         
            if (ordering.admin[index].password === password) {
               
                return;
            }
            else
                return "Password incorrect"
        };

    }
    return "Name incorrect"
}

function isValidNewPassword(password) {
    if (password.length === 0) {
        return "This field is required";
    }
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}/;
    if (!password.match(passw))
        return "The password must contain at least one lowercase letter, one uppercase letter and one number, 6-12 characters long";
    return;

}

function isValidName(username) {
    if (username.length === 0) {
        return "This field is required";
    }
    if (username.length < 2)
        return "Name length is invalid";
    if (typeof username !== "undefined") {
        if (username.match("^[A-Za-z\u0590-\u05FF ]+$")) {
            return null;
        }
        return "Non-standard name";
    }
    return "Non-standard name";
}

function isValidSecondPassword(password, validatepassword) {
    if (validatepassword.length === 0) {
        return "This field is required";
    }
    if (password !== validatepassword) {
        return "Password authentication is incorrect"
    }
    return;
}
export {
    isValidName,
    isValidPhonenumber,
    isValidEmail,
    isValidNewPassword,
    isValidSecondPassword,
    IsValidAdminDetails
}