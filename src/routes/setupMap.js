function setupMap() {

    console.log('test')

lat = 37.98346;
lng = -97.91016;

document.getElementById("latlng").value = `(37.98346, -97.91016)`;


var map = L.map('map').setView([lat, lng], 4);

marker = L.marker([lat, lng]).addTo(map);



L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var popup = L.popup();

function onMapClick(e) {
console.log(e);
marker
.setLatLng(e.latlng);

document.getElementById("latlng").value = `(${e.latlng.lat.toFixed(5)}, ${e.latlng.lng.toFixed(5)})`;

console.log(document.getElementById("latlng"))


}

map.on('click', onMapClick);
}