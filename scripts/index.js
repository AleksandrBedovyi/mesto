const editButton = document.querySelector('.button__edit');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.button__close');
const saveButton = document.querySelector('.button__save');
let profileName = document.querySelector('.profile__name'); //use innerHtml to get value
let profilePosition = document.querySelector('.profile__position'); //use innerHtml to get value
let popupFieldName = document.querySelector('.popup__field-name');
let popupFieldPosition = document.querySelector('.popup__field-position');

editButton.addEventListener('click', (event) => {
    let valueProfileName = profileName.innerHTML;
    let valueProfilePosition = profilePosition.innerHTML;
    popup.classList.add('popup_opened');
    document.querySelector('.popup__field-name').value = `${valueProfileName}`;
    document.querySelector('.popup__field-position').value = `${valueProfilePosition}`;
});

closeButton.addEventListener('click', (event) => {
    popup.classList.remove('popup_opened');
});

function handleFormSubmit(evt) {
    evt.preventDefault(); 
    let valuePopupFieldName = popupFieldName.value;
    let valuePopupFieldPosition = popupFieldPosition.value;

    profileName.textContent = `${valuePopupFieldName}`;
    profilePosition.textContent = `${valuePopupFieldPosition}`;
    popup.classList.remove('popup_opened');
}
saveButton.addEventListener('click', handleFormSubmit);
