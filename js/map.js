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