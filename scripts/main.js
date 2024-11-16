const logContainer = document.getElementById('log-container');
const emailInputLogEl = document.getElementById('inputEmailLog');
const passwordInputLogEl = document.getElementById('inputPasswordLog');
const errorEmailLogEl = document.getElementById('errorMessageEmailLog').parentElement;
const errorPassLogEl = document.getElementById('errorMessagePasswordLog').parentElement;
const buttonLog = document.getElementById('buttonLog');

const RegContainer = document.getElementById('reg-container');
const userRegEl = document.getElementById('inputName');
const emailInputRegEl = document.getElementById('inputEmailReg');
const passwordInputRegEl = document.getElementById('inputPasswordReg');
const errorEmailRegEl = document.getElementById('errorMessageEmailReg').parentElement;
const errorPassRegEl = document.getElementById('errorMessagePasswordReg').parentElement;
const buttonReg = document.getElementById('buttonReg');

function validateEmailAndPassword() {
    if(emailInputLogEl.value === 'admin' || emailInputLogEl.value === '') {
        errorEmailLogEl.classList.remove('active');
    }

    else {
        errorEmailLogEl.classList.add('active');
    }

    if(passwordInputLogEl.value === 'admin' || passwordInputLogEl.value === '') {
        errorPassLogEl.classList.remove('active');
    }

    else {
        errorPassLogEl.classList.add('active');
    }

    if(passwordInputRegEl.value.length > 8 || passwordInputRegEl.value === '') {
        errorPassRegEl.classList.remove('active');
    }

    else {
        errorPassRegEl.classList.add('active');
    }
}

emailInputLogEl.addEventListener('input', validateEmailAndPassword);
passwordInputLogEl.addEventListener('input', validateEmailAndPassword);

passwordInputRegEl.addEventListener('input', validateEmailAndPassword);

function showHidePassword() {
    if(passwordInputLogEl.type === 'password' || passwordInputRegEl.type === 'password') {
        passwordInputLogEl.type = 'text';
        passwordInputRegEl.type = 'text';
    }

    else {
        passwordInputLogEl.type = 'password';
        passwordInputRegEl.type = 'password';
    }
}

function redirectToLog() {
    RegContainer.classList.add('blur-out');

    setTimeout(() => {
        RegContainer.classList.remove('active', 'blur-out');
        logContainer.classList.add('active');
        logContainer.classList.add('blur-in');

        userRegEl.value = ''
        emailInputRegEl.value = '';
        passwordInputRegEl.value = '';
        validateEmailAndPassword();

        buttonReg.classList.remove('active');
        buttonLog.classList.add('active');

        setTimeout(() => {
            logContainer.classList.remove('blur-in');
        }, 600);
    }, 600);
}

function redirectToReg() {
    logContainer.classList.add('blur-out');
    
    setTimeout(() => {
        logContainer.classList.remove('active', 'blur-out');
        RegContainer.classList.add('active');
        RegContainer.classList.add('blur-in');

        emailInputLogEl.value = '';
        passwordInputLogEl.value = '';
        validateEmailAndPassword();

        buttonReg.classList.add('active');
        buttonLog.classList.remove('active');

        setTimeout(() => {
            RegContainer.classList.remove('blur-in');
        }, 600);
    }, 600);
}