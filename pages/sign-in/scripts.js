
const form = document.querySelector('.login');
const inputsLogin = document.querySelectorAll('.input-login-form');
const btnLogin = document.querySelector('button');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let result;
    for (const input of inputsLogin) {

        if (input.value.length > 0) {
            console.log(input.value);
            result = true;
        } else {
            result = false;
            console.log(input.value);
        }
    }

    if (result) {
        window.location = '../main/index.html'
    }

})