var link = document.querySelector(".feedback-btn");
var popup = document.querySelector(".modal-feedback");  
var close = document.querySelector(".modal-content-close"); 
var overlay = document.querySelector(".modal-overlay");
var tap = document.querySelector("#btn-1");

link.addEventListener("click", function() {
  popup.classList.add("modal-feedback-show");
  overlay.classList.add("modal-overlay-show");
}); 

function closeFeedback() {
  if (popup.classList.contains("modal-feedback-show")) {
      popup.classList.remove("modal-feedback-show");}
  if (overlay.classList.contains("modal-overlay-show")) {
      overlay.classList.remove("modal-overlay-show");
}} 

close.addEventListener("click", function(event) {
  event.preventDefault();
  closeFeedback();
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    closeFeedback();
    }
});

ymaps.ready(init);
 
function init(){     
 
    var myMap;
 
    myMap = new ymaps.Map("map", {
        center: [59.9393, 30.3292],
        zoom: 16,
        controls: []
    });
 
    myMap.behaviors.disable('scrollZoom');
     
    var myPlacemark = new ymaps.Placemark([59.9386, 30.3230] , {},
        { iconLayout: 'default#image',
          iconImageHref: 'img/pin.png',
          iconImageSize: [230, 146],
          iconImageOffset: [-45, -147] });     
 
    myMap.geoObjects.add(myPlacemark);
 
}



