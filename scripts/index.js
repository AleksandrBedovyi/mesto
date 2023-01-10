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
const popup = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const closeButton = document.querySelector('.button_close');
const profileForm = document.querySelector('.popup__form')
let profileName = document.querySelector('.profile__name');
let profilePosition = document.querySelector('.profile__position');
let formElements = document.forms.editProfileForm;
let popupFieldName = formElements.elements.popupFormTextName;
let popupFieldPosition = formElements.elements.popupFormTextPosition;

function popupOpenAddForm() {
    popupAdd.classList.add('popup_opened');
}

function popupOpenEditForm() {
    popupEdit.classList.add('popup_opened');
}

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
    popupOpenEditForm();
    popupFieldName.value = `${valueProfileName}`;
    popupFieldPosition.value = `${valueProfilePosition}`;
});

addButton.addEventListener('click', (event) => {
    popupOpenAddForm();
});

closeButton.addEventListener('click', (event) => {
    popupClose();
});

