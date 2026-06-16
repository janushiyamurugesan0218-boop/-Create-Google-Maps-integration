// This function is automatically called when the Google Maps script finishes loading
function initMap() {
    // 1. Specify the coordinates (Example: New York City)
    const locationCoordinates = { lat: 40.7128, lng: -74.0060 };

    // 2. Create the map inside the 'map' div element
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12, // Zoom levels go from 1 (world view) to 20 (street level)
        center: locationCoordinates,
    });

    // 3. Add a marker pointing directly to the coordinates
    const marker = new google.maps.Marker({
        position: locationCoordinates,
        map: map,
        title: "Hello from New York City!" // Text shown when hovering over the marker
    });
}