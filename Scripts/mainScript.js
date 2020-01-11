// JavaScript source code

//Author: Noah Gumm
//Date: 09/29/19

//Bool to make sure error message won't stack
var error = false;

//All of the input fields stored in variables
var nameInput = document.getElementById("nameInput");
var emailInput = document.getElementById("email");
var phoneNumberInput = document.getElementById("phoneNumber");
var genderRadio = document.getElementsByName("genderRadio");
var contactSelect = document.getElementById("contactSelect");

//Make sure no element is selected in the radio by deselecting the first
document.getElementById("maleRadio").checked = false;

//Make sure the input fields are empty
nameInput.value = "";
emailInput.value = "";
phoneNumberInput.value = "";

//Hide the error div
var errorDiv = document.getElementById("errorDiv");
errorDiv.style.display = "none";

//Onclick event for the submit button that calls an anonymous function to validate the form
document.getElementById("submit").addEventListener("click", function () {

    //Check to make sure no fields are blank
    if (nameInput.value == "" || emailInput.value == "" || phoneNumberInput.value == "" || !TestRadio(genderRadio)) {
        if (error == false) {
            //Change the error div display to block and add some html
            errorDiv.style.display = "block";
            errorDiv.innerHTML += "<h4>Required fields<br/>are missing</h4>";
            error = true;
        }
    }
    else {
        //Hide the error div if all boxes are filled
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
        error = false;
    }

    //Check each individual textbox and highlight it if a value hasn't been chosen
    if (nameInput.value == "" || !TestName(nameInput.value)) {
        nameInput.style.backgroundColor = "rgba(255, 15, 15, 75%)";
    }
    else {
        nameInput.style.backgroundColor = "white";
    }

    if (emailInput.value == "" || !TestEmail(emailInput.value)) {
        emailInput.style.backgroundColor = "rgba(255, 15, 15, 75%)";
    }
    else {
        emailInput.style.backgroundColor = "white";
    }

    //Check phone number for correct input
    if (phoneNumberInput.value == "" || !TestPhoneNumber(phoneNumberInput.value)) {
        phoneNumberInput.style.backgroundColor = "rgba(255, 15, 15, 75%)";
    }
    else {
        phoneNumberInput.style.backgroundColor = "white";
    }

    //Make sure radio has been selected
    if (!TestRadio(genderRadio)) {
        genderRadio.style.backgroundColor = "rgba(255, 15, 15, 75%)";
    }
    else {
        genderRadio.style.backgroundColor = "white";
    }

});

//Check the email with a regular expression
function TestEmail(email){
    var regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regExp.test(String(email).toLowerCase());
}

//Check the name with a regular expression
function TestName(name) {
    var regExp = /^[a-zA-Z]{6,}$/;
    return regExp.test(String(name).toLowerCase());
}

//Check the phone number with a regular expression
function TestPhoneNumber(num) {
    var regExp = /^[1-9]\d{2}-\d{3}-\d{4}/;
    return regExp.test(String(num).toLowerCase());
}

//Check the radio options to see if any have been selected
function TestRadio(radio) {
    for (option in radio) {
        if (radio[option].checked == true) {
            return true;
        }
    }

    return false;
}
