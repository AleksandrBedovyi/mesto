const buttonEdit = document.querySelector('.button_edit');
const buttonAdd = document.querySelector('.button_add');
const popupProfileEdit = document.querySelector('.popup_edit');
const popupPlaceAdd = document.querySelector('.popup_add');
const popupPlaceImageView = document.querySelector('.popup_view');
const imageOfPopupView = popupPlaceImageView.querySelector('.popup__image');
const nameOfPopupView = popupPlaceImageView.querySelector('.popup__name');
const buttonClosePopupProfile = document.querySelector('.button_close-edit');
const buttonClosePopupPlace = document.querySelector('.button_close-add');
const buttonClosePopupView = document.querySelector('.button_close-view');
const profileForm = document.querySelector('.popup__form');
const placeFormAdd = document.querySelector('.popup__form_add');
const profileName = document.querySelector('.profile__name');
const profilePosition = document.querySelector('.profile__position');
const formElements = document.forms.editProfileForm;
const popupFieldName = formElements.elements.popupFormTextName;
const popupFieldPosition = formElements.elements.popupFormTextPosition;
const placeContainer = document.querySelector('.elements');
const placeCard = document
    .querySelector('.place-template')
    .content
    .querySelector('.element');
const popups = document.querySelectorAll('.popup');