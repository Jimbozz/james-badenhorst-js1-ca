const form = document.querySelector("form");
const firstNameError = document.querySelector("#firstNameError");
const lastNameError = document.querySelector("#lastNameError");
const subjectError = document.querySelector("#subjectError");
const emailError = document.querySelector("#emailError");
const addressError = document.querySelector("#addressError");
const message = document.querySelector("#message");
const button = document.querySelector("button");

function formValidation(event) {

    event.preventDefault();

    const firstName = document.querySelector("#firstName");
    const lastName = document.querySelector("#lastName");
    const subject = document.querySelector("#subject");
    const email = document.querySelector("#email");
    const address = document.querySelector("#address");

    if(checkLength(firstName.value, 0) === true) {
        firstNameError.style.display = "none";
    }
    else {
        firstNameError.style.display = "block";
    }
    if(checkLength(lastName.value, 0) === true) {
        lastNameError.style.display = "none";
    }
    else {
        lastNameError.style.display = "block";
    }
    if(checkLength(subject.value, 9) === true) {
        subjectError.style.display = "none";
    }
    else {
        subjectError.style.display = "block";
    }
    if(validateEmail(email.value) === true) {
        emailError.style.display = "none";
    }
    else {
        emailError.style.display = "block";
    }
    if(checkLength(address.value, 24) === true) {
        addressError.style.display = "none";
    }
    else {
        addressError.style.display = "block";
    }
    if (checkLength(firstName.value, 0) && checkLength(lastName.value, 0) && checkLength(subject.value, 9) && validateEmail(email.value) && checkLength(address.value, 24) === true) {

        form.onsubmit = function formSuccess() {
    
                form.innerHTML = `<div class="success-message">Your form was successfully submitted.</div>`
                
            }
    }
    else {
        return false;
    }
}

form.addEventListener("submit", formValidation);


////////////// Validation Functions

function checkLength(value, length) {
    if(value.trim().length >= length) {
        return true;
    }
    else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const matches = regEx.test(email);
    return matches;
}

// Disabled button


// function acceptForm() {
//     // if all inputs pass validation enable the button
    // if (checkLength(firstName.value, 0) && checkLength(lastName.value, 0) && checkLength(subject.value, 9) && validateEmail(email.value) && checkLength(address.value, 24)) {
    //     return true;
    // } else {
    //     // clear the message
    //     return false;
    //     // disable button
        
    // }
// }




//Form success


// form.onsubmit = function formSuccess() {
    
//     form.innerHTML = `<div class="success-message">Your form was successfully submitted</div>`
    
// }

//Information not getting passed to the browser!!!!!!
