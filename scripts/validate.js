const config = {
    form: '.popup__form',
    input: '.popup__field',
    submitButton: '.button_save',
    inactiveButtonClass: '.button_disabled',
    inputErrorClass: '.popup__field_error',
    errorClass: 'form__input-error'
};

const forms = Array.from(document.querySelectorAll(`${config.form}`));
const inputs = Array.from(document.querySelectorAll(`${config.input}`));
const buttons = Array.from(document.querySelectorAll(`${config.submitButton}`));

//function check validity state of input
const validInput = (input) => {
    if (input.validity.valid) {
        disableInputError(input);
    } else {
        enableInputError(input);
    }
}


//function add class of error to input
const enableInputError = (input) => {
    input.classList.add('popup__field_error');
}

//function remove class of error from imput
const disableInputError = (input) => {
    input.classList.remove('popup__field_error');
}

//function validate every input in inputs 
const enableValidate = (inputs) => {
    inputs.forEach((input) => {
        input.addEventListener('input', (evt) => {
            validInput(input);
        });
    })
}

enableValidate(inputs);

//function enable submit button
const enableSubmitButton = (button) => {
    button.classList.remove('.button_disabled');
}

//function disable submit button
const disableSubmitButton = (button) => {
    button.classList.add('.button_disabled');
}







