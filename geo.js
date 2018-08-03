function initMap() {
    navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position.coords.latitude, position.coords.longitude);

        this.uluru = {lat: position.coords.latitude, lng: position.coords.longitude};
    
        this.map = new google.maps.Map(
        document.getElementById('map'), {zoom: 14, center: this.uluru});
    
        this.marker = new google.maps.Marker({position: this.uluru, map: this.map});
    });
    // The location of Uluru  

    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
    
    navigator.geolocation.watchPosition(success,error,options);
    
    function success(pos) {
        document.getElementById("currentPosition-lat").innerHTML = pos.coords.latitude;
        document.getElementById("currentPosition-lon").innerHTML = pos.coords.longitude;
        this.marker = null;
        this.uluru = {lat: pos.coords.latitude, lng: pos.coords.longitude};
        this.marker = new google.maps.Marker({position: this.uluru, map: this.map});
    }

    function error(err) {
        console.log(err);
    }

    id = navigator.geolocation.watchPosition(success, error, options);
}

function getPos() {
    navigator.geolocation.getCurrentPosition(function(position) {
        this.lat = position.coords.latitude;
        this.lon = position.coords.longitude;
        return {
            lat: position.coords.latitude,
            lon: position.coords.longitude
        };
    });    
}