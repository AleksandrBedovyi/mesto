//Object with info of classes elements 
config = {
    form: '.popup__form',
    input: '.popup__field',
    submitButton: '.button_save',
    inactiveButton: 'button_disabled',
    inputError: 'popup__field_error',
    error: 'form__input-error_active',
}

//function which show error message of inputs when condition is passed
const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.add(config.inputError);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(config.error);
};

//function which hide error message of inputs when condition is passed
const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.remove(config.inputError);
    errorElement.classList.remove(config.error);
    errorElement.textContent = ' ';
};

//function which check state validity of fields (input)
const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
};

//Listener for form: change button state, add listener every field in form, add listenr for reseting form
function setEventListeners(formElement) {
    const inputList = Array.from(formElement.querySelectorAll(config.input));
    const buttonElement = formElement.querySelector(config.submitButton);
    toggleButtonState(inputList, buttonElement);

    formElement.addEventListener('reset', () => {
        setTimeout(() => {
            toggleButtonState(inputList, buttonElement);
        }, 0);
    });

    inputList.forEach(inputElement => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
};

//Function which enable validation for every form
function enableValidation(config) {
    const formList = Array.from(document.querySelectorAll(config.form));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        setEventListeners(formElement, config);
    });
};

enableValidation(config);

//Function which check state of inputs: if one of them is true return false
function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

//Function which activate or diactivate submit button
function toggleButtonState(inputList, buttonElement) {
    if (hasInvalidInput(inputList)) {
        buttonElement.disabled = true;
        buttonElement.classList.add(config.inactiveButton);
    } else {
        buttonElement.disabled = false;
        buttonElement.classList.remove(config.inactiveButton);
    };
}