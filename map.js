var map;
var ourLoc;
var view;

function init(){
  ourLoc = ol.proj.fromLonLat([-73.9768, 40.7535]);

  view = new ol.View({
    center: ourLoc,
    zoom: 6
  });

  map = new ol.Map({
    target: "map",
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    loadTilesWhileAnimating: true,
    view: view
  })
}
function panHome() {
  view.animate({
    center:ourLoc,
    duration:1000
  })
}

function panToLocation(){
  var countryName =
   document.getElementById("country-name").value
   if (countryName==""){
     alert("Please type in a country name!")
   }
   var query = "https://restcountries.eu/rest/v2/name/" +
   countryName + "?fullText=true";

   query = query.replace(/ /g,"%20");

   var countryRequest = new XMLHttpRequest();
   countryRequest.open("GET",query,false);
   countryRequest.send();


   var countryInformation = JSON.parse(countryRequest.responseText);




   var lon = countryInformation[0].latlng[1];
   var lat = countryInformation[0].latlng[0];
   var location = ol.proj.fromLonLat([lon,lat]);

   view.animate({
     center: location,
     duration: 2000
   });


}

window.onload = init;
