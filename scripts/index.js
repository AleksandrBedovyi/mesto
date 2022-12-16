const editButton = document.querySelector('.button_edit');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.button_close');
const profileForm = document.querySelector('.popup__form')
let profileName = document.querySelector('.profile__name');
let profilePosition = document.querySelector('.profile__position');
let popupFieldName = document.querySelector('.popup__field_user_name');
let popupFieldPosition = document.querySelector('.popup__field_user_position');

function popupClose() {
    popup.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    let valuePopupFieldName = popupFieldName.value;
    let valuePopupFieldPosition = popupFieldPosition.value;

    profileName.textContent = `${valuePopupFieldName}`;
    profilePosition.textContent = `${valuePopupFieldPosition}`;
    popupClose();
}
profileForm.addEventListener('submit', handleFormSubmit);

editButton.addEventListener('click', (event) => {
    let valueProfileName = profileName.innerHTML;
    let valueProfilePosition = profilePosition.innerHTML;
    popup.classList.add('popup_opened');
    popupFieldName.value = `${valueProfileName}`;
    popupFieldPosition.value = `${valueProfilePosition}`;
});


closeButton.addEventListener('click', (event) => {
    popupClose();
});
