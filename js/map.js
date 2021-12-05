var linkMap = document.querySelector(".contacts-button-map");
var popupMap = document.querySelector(".modal-map");
var closeMap = popupMap.querySelector(".modal-close");

linkMap.addEventListener("click", function (evt) {
   evt.preventDefault();
   console.log("Откриваем Карта-попап");
   popupMap.classList.add("modal-show");
});
closeMap.addEventListener("click", function (evt) {
   evt.preventDefault();
   console.log("Закриваем Карта-попап");
   popupMap.classList.remove("modal-show");
});