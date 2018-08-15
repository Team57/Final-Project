var map;
var ourLoc;
var view;

function init(){
  ourLoc = ol.proj.fromLonLat([ 78.9629, 20.5937]);

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
  // Marker code for India
  var pos_India = ol.proj.fromLonLat([78.9629, 20.5937]);
  var markerIndia = new ol.Overlay({
       position: pos_India,
       positioning: 'center-center',
       element: document.getElementById('marker-India'),
       stopEvent: false
     });
     map.addOverlay(markerIndia);

     var india = new ol.Overlay({
        position: pos_India,
        element: document.getElementById('india')
      });
      map.addOverlay(india);

      // Popup showing the position the user clicked
      var popup_India = new ol.Overlay({
        id: 'India',
        element: document.getElementById('popup-India')
      });
      map.addOverlay(popup_India);
    //END marker code for India

    //Marker code for Pakistan
    var pos_Pakistan = ol.proj.fromLonLat([ 69.3451,30.3753]);
    var markerPakistan = new ol.Overlay({
         position: pos_Pakistan,
         positioning: 'center-center',
         element: document.getElementById('marker-Pakistan'),
         stopEvent: false
       });
       map.addOverlay(markerPakistan);

       var pakistan = new ol.Overlay({
          position: pos_Pakistan,
          element: document.getElementById('pakistan')
        });
        map.addOverlay(pakistan);

        // Popup showing the position the user clicked
        var popup_Pakistan= new ol.Overlay({
          element: document.getElementById('popup-Pakistan')
        });
        map.addOverlay(popup_Pakistan);
        //end marker

      // Marker code for Afghanistan
      var pos_Afghanistan = ol.proj.fromLonLat([ 67.7100,33.9391]);
      var markerAfghanistan= new ol.Overlay({
           position: pos_Afghanistan,
           positioning: 'center-center',
           element: document.getElementById('marker-Afghanistan'),
           stopEvent: false
         });
         map.addOverlay(markerAfghanistan);

         var Afghanistan = new ol.Overlay({
            position: pos_Afghanistan,
            element: document.getElementById('afghanistan')
          });
          map.addOverlay(Afghanistan);

          // Popup showing the position the user clicked
          var popup_afghanistan= new ol.Overlay({
            element: document.getElementById('popup-Afghanistan')
          });
          map.addOverlay(popup_afghanistan);
          //end marker

        //Marker code for Egypt
        var pos_Egypt = ol.proj.fromLonLat([ 30.8025, 26.8206]);
        var markerEgypt= new ol.Overlay({
             position: pos_Egypt,
             positioning: 'center-center',
             element: document.getElementById('marker-Egypt'),
             stopEvent: false
           });
           map.addOverlay(markerEgypt);

           var Egypt = new ol.Overlay({
              position: pos_Egypt,
              element: document.getElementById('egypt')
            });
            map.addOverlay(Egypt);

            // Popup showing the position the user clicked
            var popup_egypt= new ol.Overlay({
              element: document.getElementById('popup-egypt')
            });
            map.addOverlay(popup_egypt);
            //end marker

        //Marker code for Nigeria
        var pos_Nigeria = ol.proj.fromLonLat([8.6753, 9.0820]);
        var markerNigeria= new ol.Overlay({
             position: pos_Nigeria,
             positioning: 'center-center',
             element: document.getElementById('marker-Nigeria'),
             stopEvent: false
           });
           map.addOverlay(markerNigeria);

           var Nigeria = new ol.Overlay({
              position: pos_Nigeria,
              element: document.getElementById('nigeria')
            });
            map.addOverlay(Nigeria);

            // Popup showing the position the user clicked
            var popup_nigeria= new ol.Overlay({
              element: document.getElementById('popup-nigeria')
            });
            map.addOverlay(popup_nigeria);
            //end marker

     $('.marker').on('click', function(evt) {
        var title = evt.target.title;
        var popup = window.map.getOverlayById(title);
        var element = popup.getElement();
        var coordinate = JSON.parse(evt.target.dataset.coord);
        var data = evt.target.dataset.popup;
        $(element).popover('dispose');
        popup.setPosition(coordinate);
        $(element).popover({
          placement: 'top',
          animation: false,
          html: true,
          content: data
        });
        $(element).popover('show');
      });
}

function panHome() {
  view.animate({
    center:ourLoc,
    duration:1000
  })
}


window.onload = init;
