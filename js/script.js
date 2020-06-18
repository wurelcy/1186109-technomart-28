
var popup = document.querySelector(".pop-up");

var feedbackLink = document.querySelector(".write-button");
var feedbackPopup = document.querySelector(".modal-feedback");
var feedbackClose = feedbackPopup.querySelector(".modal-close");
var feedbackName = feedbackPopup.querySelector(".your-name");
var feedbackEmail = feedbackPopup.querySelector(".email");
var feedbackText = feedbackPopup.querySelector(".message-us");

var mapLink = document.querySelector(".map-link");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

var slideFwdButton = document.querySelector(".next-btn");
var slideBackButton = document.querySelector(".previous-btn");
var slideHummerdrill = document.querySelector(".hammerdrill-slide");
var slideDrill = document.querySelector(".drill-slide");
var indicatorFirst = document.querySelector(".first-indicator");
var indicatorSecond = document.querySelector(".second-indicator");

var serviceSlideButtons = document.querySelectorAll(".service-btn");
var serviceSlides = document.querySelectorAll(".service-slide");
var serviceActive = document.querySelector(".service-active");
var slideActive = document.querySelector(".current-service");

/*Feedback*/

feedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal-show");
  feedbackName.focus();
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show");
  loginPopup.classList.remove("modal-error");
});

feedbackPopup.addEventListener("submit", function (evt) {
  if (!feedbackName.value || !feedbackEmail.value || !feedbackText.value) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-error");
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add("modal-error");
  }
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

/*Esc*/

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

/*Features Slider*/

 slideBackButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (slideHummerdrill.classList.contains('current-slide')) {
    slideHummerdrill.classList.toggle("current-slide");
    slideDrill.classList.toggle("current-slide");

    indicatorFirst.classList.toggle("current-indicator");
    indicatorSecond.classList.toggle("current-indicator");
  }
});

slideFwdButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (slideDrill.classList.contains('current-slide')) {
    slideDrill.classList.toggle("current-slide");
    slideHummerdrill.classList.toggle("current-slide");

    indicatorFirst.classList.toggle("current-indicator");
    indicatorSecond.classList.toggle("current-indicator");
  }
});

/*Service Slider*/

serviceSlideButtons.forEach(function(slideButton, index) {
  if (slideButton.classList.contains('service-active')) {
    serviceActive = slideButton;
  }
  slideButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    serviceActive.classList.remove("service-active");
    serviceActive = slideButton;
    slideButton.classList.add('service-active');
    serviceSlides.forEach(function(slide, slideIndex) {
      if (slide.classList.contains('current-service')) {
        slideActive = slide;
      }
      if (index == slideIndex){
        slideActive.classList.remove("current-service");
        slideActive = slide;
        slide.classList.add('current-service');
      }
      });
    });
  });
