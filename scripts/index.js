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
const profileForm = document.querySelector('.popup__form');
const placeFormAdd = document.querySelector('.popup__form_add');
let profileName = document.querySelector('.profile__name');
let profilePosition = document.querySelector('.profile__position');
let formElements = document.forms.editProfileForm;
let popupFieldName = formElements.elements.popupFormTextName;
let popupFieldPosition = formElements.elements.popupFormTextPosition;
const placeContainer = document.querySelector('.elements');
const placeCard = document
    .querySelector('.place-template')
    .content
    .querySelector('.element');

//function which open any popup
function popupOpen(popup) {
    popup.classList.add('popup_opened');
}
//function which close any popup
function popupClose(popup) {
    popup.classList.remove('popup_opened');
}

//function create card of place
function createCard(name, photo) {
    const card = placeCard.cloneNode(true);
    let placeName = card.querySelector('.element__name');
    let placePhoto = card.querySelector('.element__photo');
    placeName.textContent = name;
    placePhoto.setAttribute('src', photo);

    return card;
}

//function render cards of places .elements
function renderCards() {
    initialCards.forEach(item => {
        const card = placeCard.cloneNode(true);
        let placeName = card.querySelector('.element__name');
        let placePhoto = card.querySelector('.element__photo');
        placeName.textContent = item.name;
        placePhoto.setAttribute('src', item.link);
        placeContainer.append(card);
    });
}

renderCards();

//handler submit of edit form (profile form)
function profileFormSubmit(evt) {
    evt.preventDefault();
    let valuePopupFieldName = popupFieldName.value;
    let valuePopupFieldPosition = popupFieldPosition.value;
    profileName.textContent = `${valuePopupFieldName}`;
    profilePosition.textContent = `${valuePopupFieldPosition}`;
    popupClose(popupEdit);
}

profileForm.addEventListener('submit', profileFormSubmit);

function addPlaceFormSubmit(evt) {
    evt.preventDefault();
    let formValuePlaceName = placeFormAdd.elements.namePlace.value;
    let formValueLinkPhoto = placeFormAdd.elements.popupAddLinkToImageOfPlace.value;
    let card = createCard(formValuePlaceName, formValueLinkPhoto);
    placeContainer.prepend(card);
    popupClose(popupAdd);
}

placeFormAdd.addEventListener('submit', addPlaceFormSubmit );

editButton.addEventListener('click', (event) => {
    let valueProfileName = profileName.innerHTML;
    let valueProfilePosition = profilePosition.innerHTML;
    popupOpen(popupEdit);
    popupFieldName.value = `${valueProfileName}`;
    popupFieldPosition.value = `${valueProfilePosition}`;
});

//Listener of button which add a place
addButton.addEventListener('click', (event) => {
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
