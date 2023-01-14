//Initializing variables
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const editButton = document.querySelector('.button_edit');
const addButton = document.querySelector('.button_add');
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const closeButtonEditForm = document.querySelector('.button_close-edit');
const closeButtonAddForm = document.querySelector('.button_close-add');
const profileForm = document.querySelector('.popup__form')
let profileName = document.querySelector('.profile__name');
let profilePosition = document.querySelector('.profile__position');
let formElements = document.forms.editProfileForm;
let popupFieldName = formElements.elements.popupFormTextName;
let popupFieldPosition = formElements.elements.popupFormTextPosition;

//function which open any popup
function popupOpen(popup) {
    popup.classList.add('popup_opened');
}
//function which close any popup
function popupClose(popup) {
    popup.classList.remove('popup_opened');
}

//function сhanges to profile info
function handleFormSubmit(evt) {
    evt.preventDefault();
    let valuePopupFieldName = popupFieldName.value;
    let valuePopupFieldPosition = popupFieldPosition.value;
    profileName.textContent = `${valuePopupFieldName}`;
    profilePosition.textContent = `${valuePopupFieldPosition}`;
    popupClose(popupEdit);
}

profileForm.addEventListener('submit', handleFormSubmit);

editButton.addEventListener('click', (event) => {
    let valueProfileName = profileName.innerHTML;
    let valueProfilePosition = profilePosition.innerHTML;
    popupOpen(popupEdit);
    popupFieldName.value = `${valueProfileName}`;
    popupFieldPosition.value = `${valueProfilePosition}`;
});

//Listener of button which add a place
addButton.addEventListener('click', (event) => {
    let valueInputNamePlace;
    let valueInputLinkPlace;
    popupOpen(popupAdd);
});

//Listener of button which close a popup_edit
closeButtonEditForm.addEventListener('click', (event) => {
    popupClose(popupEdit);
});

//Listener of button which close a popup_add
closeButtonAddForm.addEventListener('click', (event) => {
    popupClose(popupAdd);
});
