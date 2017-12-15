var map_manager = {
    "map" : null,
    "map_items" : []
}

map_manager.map_items = [
    {
      "pokemon_id" : 13,
      "expire" : 1523287244000,
      "longitude" : -111.862240,
      "latitude" : 32.8596651,
    },
    {
      "pokemon_id" : 27,
      "expire" : 1513987244000,
      "longitude" : -111.862240,
      "latitude" : 33.289580,
    }
]

function query_pokemon_data(){
    var bounds = map_manager.map.getBounds();
    var apigClient = apigClientFactory.newClient();
    
    var params = {
        north: bounds.getNorth(),
        south: bounds.getSouth(),
        west: bounds.getWest(),
        east: bounds.getEast(),
    };
    console.log("north: "+  bounds.getNorth())
    console.log("south: "+  bounds.getSouth())
    console.log("east: "+  bounds.getEast())
    console.log("west: "+  bounds.getWest())
    
    var body = { };
    var additionalParams = { };
    
    apigClient.mapPokemonGet(params, body, additionalParams)
        .then(function(result){
            //This is where you would put a success callback
            console.log("hrere" + result.data)
            map_manager.map_items = result.data; 
        }).catch( function(result){
            //This is where you would put an error callback
            console.log(result)
        });  
}
//add count_down time as title for each pokemon
function get_counter_down_time_from_timpstamp(expire){
    var now_time = new Date().getTime() / 1000;
    var time_left = expire /1000 - now_time;   // unit: second
    var second = Math.floor(time_left % 60);
    var minute = Math.floor(time_left / 60);
    return minute + ":" + second;
}

function loadMapScenario() {
    var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {});
    map_manager.map = map
    window.setInterval(query_pokemon_data,1000);
    window.setInterval(refresh_pokemon, 1000);
}

function refresh_pokemon(){
    var layer = new Microsoft.Maps.Layer();
    var pushpins = [];
    
    for (var i in map_manager.map_items){
        var map_item = map_manager.map_items[i];
        console.log(map_item);
        var count_down = get_counter_down_time_from_timpstamp(map_item['expire'])
        var iconUrl = 'https://raw.githubusercontent.com/chenditc-bittiger/pokemon_week3_fronend/master/images/pushpin_images/pokemon/'+ map_item['pokemon_id'] + '.png';    
        var pushpin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(map_item["latitude"], map_item["longitude"]), 
                                                 {title: count_down, 
                                                 icon: iconUrl});
        pushpins.push(pushpin);
    }
    layer.add(pushpins);
    map_manager.map.layers.clear();
    map_manager.map.layers.insert(layer);
    //return layer;
}
    


