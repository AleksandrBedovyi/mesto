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

const isValid = (form, input) => {
    if (input.validity.valid) {
        hideInputError(form, input);
    } else {
        showInputError(form, input, input.validationMessage);
    }
}

const hasInvalidInput = (inputs) => {
    return inputs.some((input) => {
        const result = !input.validity.valid;
        return result;
    })
}

const showInputError = (form, input, errorMessage) => {
    const errorElement = form.querySelector('.form__input-error');
    input.classList.add('popup__field_error');
    errorElement.textContent = errorMessage;
}

const hideInputError = (form, input) => {
    const errorElement = form.querySelector('.form__input-error');
    input.classList.remove('popup__field_error');
    errorElement.textContent = '';
}

const toggleButtonState = (inputs, button) => {
    if (!hasInvalidInput(inputs)) {
        button.classList.remove('button_disabled');
        button.removeAttribute('disabled');
    } else {
        button.classList.add('button_disabled');
        button.setAttribute('disabled', true);
    }
}

const setEventListener = (form) => {
    const button = form.querySelector('.button_save');
    toggleButtonState(inputs, button);
    inputs.forEach((input) => {
        input.addEventListener('input', () => {
            isValid(form, input);
            toggleButtonState(inputs, button);
        });
    });
}

const enableValidation = () => {
    forms.forEach((form) => {
        setEventListener(form);
    });
}

enableValidation();
