"use strict";
//grab all elements need by their id's
const nameInput = document.getElementById("fName");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const comments = document.getElementById("message");
const errorName = document.getElementById("fNameError");
const errorEmail = document.getElementById("emailError");
const errorPhone = document.getElementById("phoneError");
const errorMessage = document.getElementById("commentsError");
const successMessage = document.getElementById("formSuccess");

function checkForm(e) {
    //prevent default for submission
    e.preventDefault();

    let valid = true;
    //declare regex for email and phone for late use
    const emailCheck = /^\S+@\S+\.\S+$/.test(emailInput.value.trim());
    const phoneCheck = /^\d{3}-\d{3}-\d{4}$/.test(phoneInput.value.trim());

    //check that name is not an empty string
    if(nameInput.value.trim() === "") {
        errorName.classList.add("showError");
        valid = false;
    } else {
        errorName.classList.remove("showError");
    }
    //check that email is not an empty string and passes regex
    if(emailInput.value.trim() === "" || !emailCheck) {
        errorEmail.classList.add("showError");
        valid = false;
    } else {
        errorEmail.classList.remove("showError");
    }
    //check that phone is not an empty string and passes regex
    if(phoneInput.value.trim() === "" || !phoneCheck) {
        errorPhone.classList.add("showError");
        valid = false;
    } else {
        errorPhone.classList.remove("showError");
    }
    //check that comments is not an empty string
    if(comments.value.trim() === "") {
        errorMessage.classList.add("showError");
        valid =false;
    } else {
        errorMessage.classList.remove("showError");
    }
    //if all form inputs pass create a customer object and display success message
    if(valid){
        const customer = createCustomer();
        successMessage.textContent = `Thank you ${customer.name}! Your form has been submitted and we will get back to you as soon as possible`; 
        document.getElementById("form").reset();
    }


}
//function to create a customer object based on valid inputs from formCheck
function createCustomer() {
    return {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        phone: phoneInput.value.trim(),
        comments: comments.value.trim(),
    };
}


//event handler for checkForm
document.getElementById("form").addEventListener("submit", checkForm);

