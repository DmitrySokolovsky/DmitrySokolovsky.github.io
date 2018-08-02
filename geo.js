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

        function error() {
            alert(err);
        }

        var options = {
            enableHighAccuracy: false,
            //timeout: 5000,
            maximumAge: 0
        };

        var currentNavId = navigator.geolocation.watchPosition(success, error, options);
    }
}