<script>
            function setupMap() {

lat = 38.8903605;
lng = -77.09900;

document.getElementById("latlng").value = `(38.890360, -77.09900)`;


var map = L.map('map').setView([lat, lng], 12);

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
</script>