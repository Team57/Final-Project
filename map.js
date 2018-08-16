var ourLoc = [20.5937, 78.9629];
var mymap = L.map('mymap').setView(ourLoc, 4);
var mapbox_key = "pk.eyJ1IjoicmF2ZW5jbGF3MTk5OSIsImEiOiJjamt3bzFyMjgwc21vM3BxMjVqaXh3eTc4In0.YvsYMTBfJhXbVGh3oQyFfQ";

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token='+mapbox_key, {
		maxZoom: 18,
		id: 'mapbox.streets'
	}).addTo(mymap);

var india_marker = L.marker([20.5937, 78.9629]).addTo(mymap);
india_marker.bindPopup("Women suffer from domestic violence.");


    // //Marker code for Pakistan
    // var pos_Pakistan = ol.proj.fromLonLat([ 69.3451,30.3753]);
    // var markerPakistan = new ol.Overlay({
    //      position: pos_Pakistan,
    //      positioning: 'center-center',
    //      element: document.getElementById('marker-Pakistan'),
    //      stopEvent: false
    //    });
    //    map.addOverlay(markerPakistan);
    //
    //    var pakistan = new ol.Overlay({
    //       position: pos_Pakistan,
    //       element: document.getElementById('pakistan')
    //     });
    //     map.addOverlay(pakistan);
    //
    //     // Popup showing the position the user clicked
    //     var popup_Pakistan= new ol.Overlay({
    //       element: document.getElementById('popup-Pakistan')
    //     });
    //     map.addOverlay(popup_Pakistan);
    //     //end marker
    //
    //   // Marker code for Afghanistan
    //   var pos_Afghanistan = ol.proj.fromLonLat([ 67.7100,33.9391]);
    //   var markerAfghanistan= new ol.Overlay({
    //        position: pos_Afghanistan,
    //        positioning: 'center-center',
    //        element: document.getElementById('marker-Afghanistan'),
    //        stopEvent: false
    //      });
    //      map.addOverlay(markerAfghanistan);
    //
    //      var Afghanistan = new ol.Overlay({
    //         position: pos_Afghanistan,
    //         element: document.getElementById('afghanistan')
    //       });
    //       map.addOverlay(Afghanistan);
    //
    //       // Popup showing the position the user clicked
    //       var popup_afghanistan= new ol.Overlay({
    //         element: document.getElementById('popup-Afghanistan')
    //       });
    //       map.addOverlay(popup_afghanistan);
    //       //end marker
    //
    //     //Marker code for Egypt
    //     var pos_Egypt = ol.proj.fromLonLat([ 30.8025, 26.8206]);
    //     var markerEgypt= new ol.Overlay({
    //          position: pos_Egypt,
    //          positioning: 'center-center',
    //          element: document.getElementById('marker-Egypt'),
    //          stopEvent: false
    //        });
    //        map.addOverlay(markerEgypt);
    //
    //        var Egypt = new ol.Overlay({
    //           position: pos_Egypt,
    //           element: document.getElementById('egypt')
    //         });
    //         map.addOverlay(Egypt);
    //
    //         // Popup showing the position the user clicked
    //         var popup_egypt= new ol.Overlay({
    //           element: document.getElementById('popup-egypt')
    //         });
    //         map.addOverlay(popup_egypt);
    //         //end marker
    //
    //     //Marker code for Nigeria
    //     var pos_Nigeria = ol.proj.fromLonLat([8.6753, 9.0820]);
    //     var markerNigeria= new ol.Overlay({
    //          position: pos_Nigeria,
    //          positioning: 'center-center',
    //          element: document.getElementById('marker-Nigeria'),
    //          stopEvent: false
    //        });
    //        map.addOverlay(markerNigeria);
    //
    //        var Nigeria = new ol.Overlay({
    //           position: pos_Nigeria,
    //           element: document.getElementById('nigeria')
    //         });
    //         map.addOverlay(Nigeria);
    //
    //         // Popup showing the position the user clicked
    //         var popup_nigeria= new ol.Overlay({
    //           element: document.getElementById('popup-nigeria')
    //         });
    //         map.addOverlay(popup_nigeria);
    //         //end marker
    //
    //  $('.marker').on('click', function(evt) {
    //     var title = evt.target.title;
    //     var popup = window.map.getOverlayById(title);
    //     //var poppy = popup.getElement();
    //     var pop = $('#' + title);
    //     var element = evt.target;
    //     var coordinate = JSON.parse(evt.target.dataset.coord);
    //     var data = evt.target.dataset.popup;
    //     $(element).popover('dispose');
    //     popup.setPosition(coordinate);
    //     $(element).popover({
    //       placement: 'top',
    //       animation: false,
    //       html: true,
    //       content: data
    //     });
    //     $(element).popover('show');
    //   });
