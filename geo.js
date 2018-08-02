window.onload = function() {
    if ("geolocation" in navigator) {
        console.log("YES");
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log(position.coords.latitude, position.coords.longitude);
            var lat = document.getElementById("currentPosition-lat");
            lat.innerHTML(position.coords.latitude);
            var lon = document.getElementById("currentPosition-lon");
            lon.innerHTML(position.coords.longitude);
        });
    }
}