function initMap() {
    var opt = {
        center: {lat: -25, lng: 150},
        zoom: 12
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'), opt);
}