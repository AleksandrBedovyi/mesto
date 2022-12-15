const editButton = document.querySelector('.button_edit');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.button_close');
const saveButton = document.querySelector('.button_save');
let profileName = document.querySelector('.profile__name');
let profilePosition = document.querySelector('.profile__position');
let popupFieldName = document.querySelector('.popup__field_text-name');
let popupFieldPosition = document.querySelector('.popup__field_text-position');

function handleFormSubmit(evt) {
    evt.preventDefault();
    let valuePopupFieldName = popupFieldName.value;
    let valuePopupFieldPosition = popupFieldPosition.value;

    profileName.textContent = `${valuePopupFieldName}`;
    profilePosition.textContent = `${valuePopupFieldPosition}`;
    popup.classList.remove('popup_opened');
}
saveButton.addEventListener('click', handleFormSubmit);

editButton.addEventListener('click', (event) => {
    let valueProfileName = profileName.innerHTML;
    let valueProfilePosition = profilePosition.innerHTML;
    popup.classList.add('popup_opened');
    popupFieldName.value = `${valueProfileName}`;
    popupFieldPosition.value = `${valueProfilePosition}`;
});

closeButton.addEventListener('click', (event) => {
    popup.classList.remove('popup_opened');
});


