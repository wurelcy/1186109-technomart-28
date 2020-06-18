/*var popup = document.querySelector(".pop-up");*/

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
    if (cartPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      cartPopup.classList.remove("modal-show");
      cartPopup.classList.remove("modal-error");
    }
  }
});
