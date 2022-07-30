function formValidate() {

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirmpassword").value;
    var error = document.getElementById("error");
    var text = "";



    if (username.length < 10 ) {
        text = "Please enter a valid username";
        error.innerHTML = text;
        return false;

    } 

    else if (email.indexOf("@") == -1 || email.length < 12 ) {
        text = "Please enter a valid email";
        error.innerHTML = text;
        return false;

    } 

    else if (phone.length != 11 || isNaN(phone) ) {
        text = "Please enter a valid phone";
        error.innerHTML = text;
        return false;

    } 
    
    else if (password.length < 10) {
        text = "Please enter a valid password";
        error.innerHTML = text;
        return false;
    } 

    else if (confirmpassword == "") {
        text = "Please confirm your password";
        error.innerHTML = text;
        return false;
    } 

    else if (confirmpassword != password) {
        text = "Password does not match";
        error.innerHTML = text;
        return false;
    } 
    

    else {
        alert("Done");
        return true;
    }

}


