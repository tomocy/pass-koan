var name = "Your id";
var password = "Your password";

pass(name, password);

function pass(name, pass) {
    const nameInputName = "USER_ID";
    const passwordInputName = "USER_PASSWORD";
    const submitButtonName = "cmdForm.Submit";
    
    var nameInput = document.getElementsByName(nameInputName)[0];
    set(nameInput, name);

    var passwordInput = document.getElementsByName(passwordInputName)[0];
    set(passwordInput, pass);

    var submitButton = document.getElementsByName(submitButtonName)[0];
    submitButton.click();
}

function set(elem, value) {
    elem.value = value;
}