var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DEPARTAMENTO_1 = new ol.format.GeoJSON();
var features_DEPARTAMENTO_1 = format_DEPARTAMENTO_1.readFeatures(json_DEPARTAMENTO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DEPARTAMENTO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DEPARTAMENTO_1.addFeatures(features_DEPARTAMENTO_1);
var lyr_DEPARTAMENTO_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DEPARTAMENTO_1, 
                style: style_DEPARTAMENTO_1,
                popuplayertitle: 'DEPARTAMENTO',
                interactive: true,
                title: '<img src="styles/legend/DEPARTAMENTO_1.png" /> DEPARTAMENTO'
            });

lyr_OSMStandard_0.setVisible(true);lyr_DEPARTAMENTO_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_DEPARTAMENTO_1];
lyr_DEPARTAMENTO_1.set('fieldAliases', {'fid': 'fid', 'NOMBDEP': 'Nombre del departamento:', 'COUNT': 'Número de distritos:', 'FIRST_IDDP': 'UBIGEO del departamento:', 'HECTARES': 'Superficie en Ha:', 'enlaces': 'Información del departamento:', 'fotos': 'Fotos turísticas del departamento:', 'videos': 'video promocional del departamento:', });
lyr_DEPARTAMENTO_1.set('fieldImages', {'fid': 'Hidden', 'NOMBDEP': 'TextEdit', 'COUNT': 'TextEdit', 'FIRST_IDDP': 'TextEdit', 'HECTARES': 'TextEdit', 'enlaces': 'TextEdit', 'fotos': 'ExternalResource', 'videos': 'TextEdit', });
lyr_DEPARTAMENTO_1.set('fieldLabels', {'NOMBDEP': 'header label - always visible', 'COUNT': 'header label - always visible', 'FIRST_IDDP': 'header label - always visible', 'HECTARES': 'header label - always visible', 'enlaces': 'header label - always visible', 'fotos': 'header label - always visible', 'videos': 'header label - always visible', });
lyr_DEPARTAMENTO_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});