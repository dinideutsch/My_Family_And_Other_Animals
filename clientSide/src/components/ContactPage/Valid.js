function validateName(name) {
    if (name === "" || /^[A-Za-z\s]+$/.test(name)) { //all the characters must be from A-Z.
        return true;
    }; 
    return false;
}
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;   //email format
    if (re.test(email) || email === "")
        return true; 
    return false;
}
export {
    validateName,
    validateEmail
}