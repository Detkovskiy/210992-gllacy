ymaps.ready(init);
 
function init(){     
 
    var myMap;
 
    myMap = new ymaps.Map("map", {
        center: [59.9394, 30.3298],
        zoom: 16,
        controls: []
    });
 
    myMap.behaviors.disable('scrollZoom');
     
    var myPlacemark = new ymaps.Placemark([59.9386, 30.3230] , {},
        { iconLayout: 'default#image',
          iconImageHref: 'img/icon/pin.svg',
          iconImageSize: [80, 146],
          iconImageOffset: [-45, -147] });     
 
    myMap.geoObjects.add(myPlacemark);
 
}