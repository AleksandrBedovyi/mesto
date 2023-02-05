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
const showInputError = (formElement, inputElement, errorMessage, validationConfig) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.add(validationConfig.inputError);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validationConfig.error);
};

//function which hide error message of inputs when condition is passed
const hideInputError = (formElement, inputElement, validationConfig) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.remove(validationConfig.inputError);
    errorElement.classList.remove(validationConfig.error);
    errorElement.textContent = ' ';
};

//function which check state validity of fields (input)
const checkInputValidity = (formElement, inputElement, validationConfig) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, validationConfig);
    } else {
        hideInputError(formElement, inputElement, validationConfig);
    }
};

//Listener for form: change button state, add listener every field in form, add listenr for reseting form
function setEventListeners(formElement, validationConfig) {
    const inputList = Array.from(formElement.querySelectorAll(validationConfig.input));
    const buttonElement = formElement.querySelector(validationConfig.submitButton);
    toggleButtonState(inputList, buttonElement, validationConfig);

    formElement.addEventListener('reset', () => {
        setTimeout(() => {
            toggleButtonState(inputList, buttonElement, validationConfig);
        }, 0);
    });

    inputList.forEach(inputElement => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement, validationConfig);
            toggleButtonState(inputList, buttonElement, validationConfig);
        });
    });
};

//Function which enable validation for every form
function enableValidation(validationConfig) {
    const formList = Array.from(document.querySelectorAll(validationConfig.form));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        setEventListeners(formElement, validationConfig);
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
function toggleButtonState(inputList, buttonElement, validationConfig) {
    if (hasInvalidInput(inputList)) {
        buttonElement.disabled = true;
        buttonElement.classList.add(validationConfig.inactiveButton);
    } else {
        buttonElement.disabled = false;
        buttonElement.classList.remove(validationConfig.inactiveButton);
    };
}