(function() {
  var baselayers = getBaselayers();
  var layers = getLayers();

  var map = L.map("map", {
    center: [50.8398, 4.4247],
    zoom: 11,
    layers: [baselayers["NGI Basemap 1873"]],
    attributionControl: false
  });
  layers["OpenStreetMap Roads"].addTo(map);

  map.addControl(new L.Control.Scale({
    maxWidth: 200, 
    position: 'bottomleft', 
    imperial: false
  }));

  L.Control.geocoder({
    position: "topleft"
  }).addTo(map);
  
  L.control.layers(baselayers, layers).addTo(map);
  
  L.control
    .attribution({
      prefix:
        '<a target="_blank" href="https://github.com/osmbe/historical-map">Source code available</a>.' +
        '<a target="_blank" href="https://github.com/osmbe/historical-map/issues">Post Issues or comments here</a> or <a href="mailto:joost.schouppe@gmail.com">contact the author</a>.'
    })
    .addTo(map);

  L.control
    .locate({
      locateOptions: { enableHighAccuracy: true },
      drawCircle: true,
      locateOptions: { maxZoom: 17 }
    })
    .addTo(map);

  var all = {};
  Object.keys(baselayers).map(name => {
    all[name.replace(/[^a-z0-9]/gi, "")] = baselayers[name];
  });
  Object.keys(layers).map(name => {
    all[name.replace(/[^a-z0-9]/gi, "")] = layers[name];
  });

  var hash = new L.Hash(map, all);
})();
