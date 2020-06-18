var popup = document.querySelector(".pop-up");

var cartLink = document.querySelectorAll(".cart-btn");
var cartPopup = document.querySelector(".modal-cart");
var cartClose = cartPopup.querySelector(".modal-close");
var cartContinue = cartPopup.querySelector(".close-link");

/*Cart*/

cartLink.forEach(function(item) {
  item.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.add("modal-show");
  });
});

cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
});

cartContinue.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
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
