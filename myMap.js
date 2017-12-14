var map_manager = {
    "map" : null,
    "map_items" : []
}

map_manager.map_items = [
    {
      "pokemon_id" : 13,
      "expire" : 1523287244,
      "longitude" : -111.862240,
      "latitude" : 32.8596651,
    },
    {
      "pokemon_id" : 27,
      "expire" : 1513987244,
      "longitude" : -111.862240,
      "latitude" : 33.289580,
    }
]

function get_counter_down_time_from_timpstamp(expire){
    var now_time = new Date().getTime() / 1000;
    var time_left = epoch / 1000 - now_time;   // unit: second
    var second = Math.floor(time_left % 60);
    var minute = Math.floor(time_left / 60);
    return minute + ":" + second;
}

function loadMapScenario() {
    var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {});
    for (var i in map_manager.map_items){
        var map_item = map_manager.map_items[i];
        var count_down = get_counter_down_time_from_timpstamp(map_item['expire'])
        var iconUrl = 'https://raw.githubusercontent.com/chenditc-bittiger/pokemon_week3_fronend/master/images/pushpin_images/pokemon/'+ map_item['pokemon_id'] + '.png';
        console.log(iconUrl);

        var pushpin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(map_item["latitude"], map_item["longitude"]), 
                                                 {title: count_down, 
                                                 icon: iconUrl});
        map.entities.push(pushpin);
    }
    
}
    


