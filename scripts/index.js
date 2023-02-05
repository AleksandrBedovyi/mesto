

//function set image and text for popupview
function popupViewSetAttribute(name, image) {
    imageOfPopupView.setAttribute('src', image);
    imageOfPopupView.setAttribute('alt', `Фото ${name}`)
    nameOfPopupView.textContent = name;
}

//function which open any popup (add class)
function popupOpen(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keyup', isEscape);
}
//function which close any popup (remove class)
function popupClose(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keyup', isEscape);
}


//function create card of place
function createCard(name, photo) {
    const card = placeCard.cloneNode(true);
    const placeName = card.querySelector('.element__name');
    const placePhoto = card.querySelector('.element__photo');
    const buttonLiked = card.querySelector('.button_heart');
    const buttonRemove = card.querySelector('.button_remove');
    placeName.textContent = name;
    placePhoto.setAttribute('src', photo);
    buttonLiked.addEventListener('click', likedCard);
    buttonRemove.addEventListener('click', removeCard);
    placePhoto.addEventListener('click', (evt) => {
        const valuePlaceName = placeName.textContent;
        const valuePlaceImage = placePhoto.getAttribute('src');
        popupViewSetAttribute(valuePlaceName, valuePlaceImage);
        popupOpen(popupPlaceImageView);
    });

    return card;
}

//function liked card
function likedCard(evt) {
    evt.target.classList.toggle('button_heart_active');
}

//function remove card
function removeCard(evt) {
    const elementForRemove = evt.target.parentElement;
    elementForRemove.remove();
}

//function render cards of places .elements
function renderCards() {
    initialCards.forEach(item => {
        const createdCard = createCard(item.name, item.link);
        placeContainer.append(createdCard);
    });
}

renderCards();

//handler submit of edit form (profile form)
function profileFormSubmit(evt) {
    evt.preventDefault();
    const valuePopupFieldName = popupFieldName.value;
    const valuePopupFieldPosition = popupFieldPosition.value;
    profileName.textContent = `${valuePopupFieldName}`;
    profilePosition.textContent = `${valuePopupFieldPosition}`;
    popupClose(popupProfileEdit);
}

profileForm.addEventListener('submit', profileFormSubmit);

function addPlaceFormSubmit(evt) {
    evt.preventDefault();
    const formValuePlaceName = placeFormAdd.elements.namePlace.value;
    const formValueLinkPhoto = placeFormAdd.elements.popupAddLinkToImageOfPlace.value;
    const card = createCard(formValuePlaceName, formValueLinkPhoto);
    placeContainer.prepend(card);
    popupClose(popupPlaceAdd);
    evt.target.reset();
}

placeFormAdd.addEventListener('submit', addPlaceFormSubmit);

buttonEdit.addEventListener('click', (event) => {
    const valueProfileName = profileName.textContent;
    const valueProfilePosition = profilePosition.textContent;
    popupOpen(popupProfileEdit);
    popupFieldName.value = `${valueProfileName}`;
    popupFieldPosition.value = `${valueProfilePosition}`;
});

//Listener of button which add a place
buttonAdd.addEventListener('click', (event) => {
    popupOpen(popupPlaceAdd);
});

//Listener of button which close a popup_edit
buttonClosePopupProfile.addEventListener('click', (event) => {
    popupClose(popupProfileEdit);
});

//Listeners of button which close a popup_add
buttonClosePopupPlace.addEventListener('click', (event) => {
    popupClose(popupPlaceAdd);
});

buttonClosePopupView.addEventListener('click', (event) => {
    popupClose(popupPlaceImageView);
});


popups.forEach((popup) => {
    popup.addEventListener('click', (event) => {
        if (event.target.classList.contains('popup')) {
            popupClose(popup);
        }
    })
});


const isEscape = (evt) => {
    evt.preventDefault();
    if (evt.key === 'Escape') {
        const activePopup = document.querySelector('.popup_opened');
        popupClose(activePopup);
    };
};


