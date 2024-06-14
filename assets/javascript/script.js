const form = document.getElementById("form");
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation= document.getElementById("password-confirmation");

form.addEventListener("submit", (event) => {
    event.preventDefault();

   checkForm();
})

firstName.addEventListener("blur", () => {
    checkInputFirstName();
})

lastName.addEventListener("blur", () => {
    checkInputLastName();
})

username.addEventListener("blur", () => {
    checkInputUsername();
})

email.addEventListener("blur", () => {
    checkInputEmail();
})


function checkInputFirstName(){
    const firstNameValue = firstName.value;

    if(firstNameValue === ""){
        errorInput(firstName, "First name is required!")
    }else{
        const formItem = firstName.parentElement;
        formItem.className = "form-content"
    }
}
function checkInputLastName(){
    const lastNameValue = lastName.value;

    if(lastNameValue === ""){
        errorInput(lastName, "Last name is required!")
    }else{
        const formItem = lastName.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputUsername(){
    const usernameValue = username.value;

    if(usernameValue === ""){
        errorInput(username, "Username is required!")
    }else{
        const formItem = username.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputEmail(){
    const emailValue = email.value;

    if(emailValue === ""){
        errorInput(email, "Email is required!")
    }else{
        const formItem = email.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputPassword(){
    const passwordValue = password.value;

    if(passwordValue === ""){
        errorInput(password, "Password is required!")
    }else if(passwordValue.length < 8){
        errorInput(password, "Password must contain at least 8 characters")
    }else{
        const formItem = password.parentElement;
        formItem.classList = "form-content"
    }
}

function checkInputPasswordConfirmation(){
    const passwordValue = password.value;
    const confirmationPasswordValue = passwordConfirmation.value;

    if(confirmationPasswordValue === ""){
        errorInput(passwordConfirmation, "The password confirmation is required")
    }else if(confirmationPasswordValue !== passwordValue){
        errorInput(passwordConfirmation,"The password entered does not match")
    }else{
        const formItem = passwordConfirmation.parentElement;
        formItem.className = "form-content"
    }
}

function checkForm(){
    checkInputFirstName();
    checkInputLastName();
    checkInputUsername();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConfirmation();

    const formItems = form.querySelectorAll(".form-content")

    const isValid = [...formItems].every(() => {
        return formItems.className === "form-content"
    });
    if(isValid){
        alert("Successfully submitted")
    }
}

function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className = "form-content error"
}
