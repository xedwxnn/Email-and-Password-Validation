const emailInputEl = document.getElementById('inputEmail');
const passwordInputEl = document.getElementById('inputPassword');
const errorEmailEl = document.getElementById('errorMessageEmail').parentElement;
const errorPassEl = document.getElementById('errorMessagePassword').parentElement;

function validateEmailAndPassword() {
    if(emailInputEl.value === 'admin' || emailInputEl.value === '') {
        errorEmailEl.classList.remove('active');
    }

    else {
        errorEmailEl.classList.add('active');
    }

    if(passwordInputEl.value === 'admin' || passwordInputEl.value === '') {
        errorPassEl.classList.remove('active');
    }

    else {
        errorPassEl.classList.add('active');
    }
}

emailInputEl.addEventListener('input', validateEmailAndPassword);
passwordInputEl.addEventListener('input', validateEmailAndPassword);