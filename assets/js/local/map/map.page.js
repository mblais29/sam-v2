/****************************************
	GLOBAL VARIABLES
****************************************/
var mapOnLoadCenter = new L.LatLng(44.7155137,-98.173828125);
var mapOnLoadZoom = 3;
var popup = L.popup();
var searchControl = L.esri.Geocoding.geosearch();
var results = L.layerGroup();

$(function() {
	setMapHeightWidth();
	
	$(window).on("resize", function() {
		setMapHeightWidth();
		map.invalidateSize();
	});
	
	
	/****************************************
	ADDING GOOGLE MAP LAYERS
	****************************************/
	var map = L.map('map', {center: mapOnLoadCenter, zoom: mapOnLoadZoom});
		
	var esriStreet = new L.esri.basemapLayer('Streets', {detectRetina: true});
	var esriTopo = new L.esri.basemapLayer('Topographic', {detectRetina: true});
	var esriImagery = new L.esri.basemapLayer('Imagery', {detectRetina: true});
	//var esriTerrain = new L.esri.basemapLayer('Terrain', {detectRetina: true});
	
	var baseMaps = {
	    'Street': esriStreet,
	    'Imagery':esriImagery, 
	    //'Terrain': esriTerrain,
	    'Topographic': esriTopo
	};
	
	/****************************************
	BASEMAP LAYERS AND LAYER CONTROL FOR LEGEND
	****************************************/
	map.addLayer(esriStreet);
	//map.on('click', onMapClick);
	layerControl = L.control.layers(baseMaps, {}, {sortLayers: true});
	layerControl.addTo(map);
	
	/****************************************
	ADD LEAFLET-DRAW
	****************************************/
	
	 var editableLayers = new L.FeatureGroup();
	 
	 var options = {
	    position: 'topleft',
	    draw: {
	        polyline: false, /*{
	            shapeOptions: {
	                color: '#f357a1',
	                weight: 10
	            }
	        },*/
	        polygon: {
	            allowIntersection: true, // Restricts shapes to simple polygons
	            shapeOptions: {
	                color: '#FF0000'
	            }
	        },
	        circle: false, // Turns off (false) this drawing tool
	        rectangle: false, /*{
	            shapeOptions: {
	                clickable: false
	            }
	        },*/
	        marker: true,
	        circlemarker: false
	    },
	    edit: {
	        featureGroup: editableLayers, //REQUIRED!!
	        remove: true
	    }
	};
	
	var drawControl = new L.Control.Draw(options);
	
	drawControl._toolbars.edit.disable =  function () {
	  if (!this.enabled()) {
	    /* If you need to do something right as the
	       edit tool is enabled, do it here right
	       before the return */
	    return;
	  }
	
	  this._activeMode.handler.revertLayers();
	  /* If you need to do something when the
	     cancel button is pressed and the edits
	     are reverted, do it here. */
	    if(editedLayerType == "Polygon" || editedLayerType == "polygon"){
	    	editableLayers.clearLayers();
	    }
	    
	  L.Toolbar.prototype.disable.call(this);
	};
	
	map.addControl(drawControl);
	
	/****************************************
	ADD ESRI GEOCODING SERVICE API
	****************************************/
	
	searchControl.addTo(map);
	results.addTo(map);
	
	searchControl.on('results', function(data){
		results.clearLayers();
		console.log(data);
	    for (var i = data.results.length - 1; i >= 0; i--) {
	      var searchedResults = L.marker(data.results[i].latlng).bindPopup('<b>Address: </b>' + data.results[i].text + '<br><b>Latitude:  </b>' + data.results[i].latlng.lat + '<br><b>Longitude:  </b>' + data.results[i].latlng.lng);
          searchedResults.on('contextmenu', function(){
          	results.removeLayer(this);
          	layerControl.removeLayer(results);
          });
          results.addLayer(searchedResults);
          layerControl.addOverlay(results, 'Searched Address');
		}
	});
	
	map.on('draw:created', function (e) {
		var type = e.layerType,
			layer = e.layer;
		editableLayers.addLayer(layer);
		if(!map.hasLayer(editableLayers)){
			map.addLayer(editableLayers);
			layerControl.addOverlay(editableLayers, 'Drawn Asset');
		}else{
			
		}
		
	});
	
	map.on('draw:edited', function (e) {
		
	});
	
	map.on('draw:deleted', function (e) {
		editableLayers.clearLayers();
		map.removeLayer(editableLayers);
		layerControl.removeLayer(editableLayers);
	});
	
	map.on('draw:editstop', function(){
		
	});
	
	/****************************************
	MAP MOVE ACTIONS
	****************************************/
	
	map.on('moveend', function(){
		
	});
	
	map.invalidateSize();
});


function onMapClick(e) {
	popup
		.setLatLng(e.latlng)
		.setContent("You clicked the map at " + e.latlng.toString())
		.openOn(map);
}

function setMapHeightWidth(){
	/* 36 is the header and footer padding summed together 16px each */
	var height = $(window).height() - $('#page-header').outerHeight() - $('#page-footer').outerHeight();
	$("#map").height(height).width($(window).outerWidth()).css("zIndex", "1");
}
