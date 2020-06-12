
var popup = document.querySelector(".pop-up");

var feedbackLink = document.querySelector(".write-button");
var feedbackPopup = document.querySelector(".modal-feedback");
var feedbackClose = feedbackPopup.querySelector(".modal-close");

var mapLink = document.querySelector(".map-link");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

var slideFwdButton = document.querySelector(".next-btn");
var slideBackButton = document.querySelector(".previous-btn");
var slide = document.querySelector(".slider-item");
var slideHummerdrill = document.querySelector(".hammerdrill-slide");
var slideDrill = document.querySelector(".drill-slide");

var cartLink = document.querySelector(".cart-btn");
var cartPopup = document.querySelector(".modal-cart");
var cartClose = cartPopup.querySelector(".modal-close");

/*Feedback*/

feedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal-show");
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show");
});

/*Map*/

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

/*Cart*/

cartLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.add("modal-show");
});

cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

/*Slider*/

slideFwdButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (slideHummerdrill.classList.contains('current-slide')) {
    slideHummerdrill.classList.toggle("current-slide");
    slideDrill.classList.toggle("current-slide");
  }
});

slideBackButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (slideDrill.classList.contains('current-slide')) {
    slideDrill.classList.toggle("current-slide");
    slideHummerdrill.classList.toggle("current-slide");
  }
});
