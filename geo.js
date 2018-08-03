window.onload = function() {
    var lat = document.getElementById("currentPosition-lat");
    var lon = document.getElementById("currentPosition-lon");
    var label = document.getElementById("lonlat"); 
    if ("geolocation" in navigator) {
        console.log("YES");
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log(position.coords.latitude, position.coords.longitude);
            lat.innerHTML = position.coords.latitude;
            lon.innerHTML = position.coords.longitude;
        });

        var count = 1;

        function success(pos) {
            var crd = pos.coords;
            lat.innerHTML = crd.latitude;
            lon.innerHTML = crd.longitude; 
            count++;
            label.innerHTML = count;
        }

        function error(err) {
            alert(err);
        }

        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };

        var currentNavId = navigator.geolocation.watchPosition(success, error, options);
    }
}
function initMap() {
    // The location of Uluru
    var uluru = {lat: 53.908622099999995, lng: 30.3225663};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 15, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
}

function getPos() {
    var that = this;
    navigator.geolocation.getCurrentPosition(function(position) {
        this.lat = position.coords.latitude;
        this.lon = position.coords.longitude;
        return {
            lat: position.coords.latitude,
            lon: position.coords.longitude
        };
    });

    
}