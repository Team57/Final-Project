var ourLoc = [20.5937, 78.9629];
var mymap = L.map('mymap').setView(ourLoc, 4);
var mapbox_key = "pk.eyJ1IjoicmF2ZW5jbGF3MTk5OSIsImEiOiJjamt3bzFyMjgwc21vM3BxMjVqaXh3eTc4In0.YvsYMTBfJhXbVGh3oQyFfQ";

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token='+mapbox_key, {
		maxZoom: 18,
		id: 'mapbox.streets'
	}).addTo(mymap);

var india_marker = L.marker([20.5937, 78.9629]).addTo(mymap);
india_marker.bindPopup("<p>Women suffer from domestic violence.</p><p>Men are allowed to divorce their wives just by reciting 'I divorce you' three times.</p><p>Women and girls with disabilities struggle to seek justice for violence against them.");

var pakistan_marker = L.marker([30.3753,69.3451]).addTo(mymap);
pakistan_marker.bindPopup("<p>Men are still allowed to beat their wives.</p><p>21% of girls get married before the age of 18.</p><p>Violence against women in Pakistan includes rape, murder, acid attacks, and domestic violence.</p><p>Women are also victims of honor killing, which involves family members killing each other and not receiving any consequences.");

var afghanistan_marker = L.marker([33.9391,67.7100]).addTo(mymap);
afghanistan_marker.bindPopup("In Afghanistan, men are allowed to forbid their women from the leaving the house.");

var egypt_marker = L.marker([26.8206,30.8025]).addTo(mymap);
egypt_marker.bindPopup("In Egypt, if a man kills his wife, he will receive more lenient punishment than the consequences of murder in other situations.");

var nigeria_marker = L.marker([9.0820,8.6753]).addTo(mymap);
nigeria_marker.bindPopup("In Nigeria, women can be legally assaulted by a man if that man is her husband.");

var argentina_latlng = L.latLng(-36.61667,-64.28333)
var argentina_marker = L.marker(argentina_latlng).addTo(mymap);
argentina_marker.bindPopup("Argentina has yet to pass a law that would legalize abortion.");

var saudiarabia_marker = L.marker([23.8859,45.0792]).addTo(mymap);
saudiarabia_marker.bindPopup("Saudi Arabia has rested several women's rights activists.");

var america_latlng = L.latLng(37.697948,-97.641144)
var america_marker = L.marker(america_latlng).addTo(mymap);
america_marker.bindPopup("America still has yet to pass the Equal Rights Amendment, which would guarantee equal legal rights to all American citizens regardless of gender.");
