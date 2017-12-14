var map_manager = {
    "map" : null,
    "map_items" : []
}

map_manager.map_items = [
    {
      "pokemon_id" : 12,
      "expire" : 1513290358,
      "longitude" : -111.862240,
      "latitude" : 34.7596651,
    },
    {
      "pokemon_id" : 2,
      "expire" : 1513600358,
      "longitude" : -111.862240,
      "latitude" : 32.7596651,
    }
]

function loadMapScenario() {
    var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {});
    for (var i in map_manager.map_items){
        var map_item = map_manager.map_items[i];
        var iconUrl = 'https://raw.githubusercontent.com/chenditc-bittiger/pokemon_week3_fronend/master/images/pushpin_images/pokemon/'+ map_item['pokemon_id'] + '.png';
        //console.log(iconUrl);
        var pushpin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(map_item["latitude"], map_item["longitude"])), 
                                                 {icon: iconUrl});
        map.entities.push(pushpin);
    }
    

}
