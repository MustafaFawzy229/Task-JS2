function formValidate() {

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var error = document.getElementById("error");
    var text = "";



    if (email.indexOf("@") == -1 || email.length < 12 ) {
        text = "Please enter a valid email or phone";
        error.innerHTML = text;
        return false;

    } 
    
    else if (password.length < 10) {
        text = "Please enter a valid password";
        error.innerHTML = text;
        return false;
    } 
    

    else {
        alert("Done");
        return true;
    }

}


