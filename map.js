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
<<<<<<< HEAD
saudiarabia_marker.bindPopup("Saudi Arabia has arrested several women's rights activists.");

 var australia_latlng = L.latLng(-23.700552,133.882675);
 var australia_marker = L.marker(australia_latlng).addTo(mymap);
 australia_marker.bindPopup("Argentina has yet to pass a law that would legalize abortion.");
//var brazil_latlng = L.latLng(‎-23.533773,-46.625290)
//var brazil_marker = L.marker(brazil_marker).addTo(mymap);
//brazil_marker.bindPopup("Argentina has yet to pass a law that would legalize abortion.");
=======
saudiarabia_marker.bindPopup("Saudi Arabia has rested several women's rights activists.");

var australia_latlng = L.latLng(-23.700552,133.882675);
var australia_marker = L.marker(australia_latlng).addTo(mymap);
australia_marker.bindPopup("<p>One in three Australian women will experience violence in an intimate relationship, and one in five women have experienced sexual violence since the age of 15.</p> <p> Additionally, domestic violence is the biggest cause of homelessness for Australian women.In 2015-2016 the average Australian woman was reaching retirement with an average of $113,660 less superannuation than the average male</p>");

var brazil_marker = L.marker([-14.235004,-51.925282]).addTo(mymap);
brazil_marker.bindPopup("Women suffered violence ranging from threats and beatings to attempted murder.Well over half of the attackers were current or former spouses or partners");
>>>>>>> 9c0bb9020454e3358868f36b13caa1b86f186903

var venezuela_marker = L.marker([6.423750,-66.589729]).addTo(mymap);
venezuela_marker.bindPopup("<p>Violence against women to include such activities as sexual and verbal assault, forced prostitution, and trafficking—and was groundbreaking at the time.</p><p>Second highest rate of pregnancy and the highest death rate cause by failure of abortion or gun violence.</p><p>They are in poverty, violence, hunger, malnutrition and poor health.Women would sell their hair for currency.</p>");

var peru_marker = L.marker([-9.189967,-75.015152]).addTo(mymap);
peru_marker.bindPopup(" Women have been killed in Peru in “femicides” (the killing of a woman in certain contexts, including domestic violence and gender-based discrimination)")

var bolivia_marker = L.marker([-16.290154,-63.588654]).addTo(mymap);
bolivia_marker.bindPopup("Laws prevent girls from attaining higher levels of schooling in Bolivia, including domestic care work, early pregnancy, and the need for income.")

var columbia_latlng = L.latLng(4.526914,-74.067519);
var columbia_marker = L.marker(columbia_latlng).addTo(mymap);
columbia_marker.bindPopup("Lack of training and poor implementation of treatment protocols impede timely access to medical services and create obstacles for women and girls seeking post-violence care. ")

var america_latlng = L.latLng(37.697948,-97.641144)
var america_marker = L.marker(america_latlng).addTo(mymap);
america_marker.bindPopup("America still has yet to pass the Equal Rights Amendment, which would guarantee equal legal rights to all American citizens regardless of gender.");
