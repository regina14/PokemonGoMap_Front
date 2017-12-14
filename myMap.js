function loadMapScenario() {
    var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {});
    var pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), { icon: 'https://raw.githubusercontent.com/chenditc-bittiger/pokemon_week3_fronend/master/images/pushpin_images/pokemon/2.png',
        anchor: new Microsoft.Maps.Point(12, 39) });
    map.entities.push(pushpin);

}
