var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_RawanGempa_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Rawan Gempa",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/RawanGempa_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11699708.484463, -980791.907642, 12757508.484463, -655550.259907]
                            })
                        });
var format_TitikGempa5mag902022_3 = new ol.format.GeoJSON();
var features_TitikGempa5mag902022_3 = format_TitikGempa5mag902022_3.readFeatures(json_TitikGempa5mag902022_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikGempa5mag902022_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikGempa5mag902022_3.addFeatures(features_TitikGempa5mag902022_3);
var lyr_TitikGempa5mag902022_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TitikGempa5mag902022_3, 
                style: style_TitikGempa5mag902022_3,
                interactive: true,
    title: 'Titik Gempa > 5 mag (90-2022)<br />\
    <img src="styles/legend/TitikGempa5mag902022_3_0.png" /> 5 - 5,5<br />\
    <img src="styles/legend/TitikGempa5mag902022_3_1.png" /> 5,5 - 6<br />\
    <img src="styles/legend/TitikGempa5mag902022_3_2.png" /> 6 - 6,5<br />\
    <img src="styles/legend/TitikGempa5mag902022_3_3.png" /> 6,5 - 7<br />\
    <img src="styles/legend/TitikGempa5mag902022_3_4.png" /> 7 - 7,5<br />'
        });
var format_StrukturGeologi_4 = new ol.format.GeoJSON();
var features_StrukturGeologi_4 = format_StrukturGeologi_4.readFeatures(json_StrukturGeologi_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StrukturGeologi_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StrukturGeologi_4.addFeatures(features_StrukturGeologi_4);
var lyr_StrukturGeologi_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StrukturGeologi_4, 
                style: style_StrukturGeologi_4,
                interactive: true,
    title: 'Struktur Geologi<br />\
    <img src="styles/legend/StrukturGeologi_4_0.png" /> Kelurusan<br />\
    <img src="styles/legend/StrukturGeologi_4_1.png" /> Lipatan<br />\
    <img src="styles/legend/StrukturGeologi_4_2.png" /> Patahan<br />'
        });
var format_BatasKabupaten_5 = new ol.format.GeoJSON();
var features_BatasKabupaten_5 = format_BatasKabupaten_5.readFeatures(json_BatasKabupaten_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKabupaten_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKabupaten_5.addFeatures(features_BatasKabupaten_5);
var lyr_BatasKabupaten_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasKabupaten_5, 
                style: style_BatasKabupaten_5,
                interactive: true,
                title: '<img src="styles/legend/BatasKabupaten_5.png" /> Batas Kabupaten'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_RawanGempa_2.setVisible(true);lyr_TitikGempa5mag902022_3.setVisible(true);lyr_StrukturGeologi_4.setVisible(true);lyr_BatasKabupaten_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OpenStreetMap_1,lyr_RawanGempa_2,lyr_TitikGempa5mag902022_3,lyr_StrukturGeologi_4,lyr_BatasKabupaten_5];
lyr_TitikGempa5mag902022_3.set('fieldAliases', {'time': 'time', 'latitude': 'latitude', 'longitude': 'longitude', 'depth': 'depth', 'mag': 'mag', 'magType': 'magType', 'nst': 'nst', 'gap': 'gap', 'dmin': 'dmin', 'rms': 'rms', 'net': 'net', 'id': 'id', 'updated': 'updated', 'place': 'place', 'type': 'type', 'horizontal': 'horizontal', 'depthError': 'depthError', 'magError': 'magError', 'magNst': 'magNst', 'status': 'status', 'locationSo': 'locationSo', 'magSource': 'magSource', });
lyr_StrukturGeologi_4.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'objectid_2': 'objectid_2', 'objectid': 'objectid', 'fcode': 'fcode', 'namobj': 'namobj', 'klsstr': 'klsstr', 'remark': 'remark', 'metadata': 'metadata', 'srs_id': 'srs_id', 'st_length_': 'st_length_', 'st_length1': 'st_length1', 'Shape_Leng': 'Shape_Leng', });
lyr_BatasKabupaten_5.set('fieldAliases', {'WADMKK': 'Kabupaten', 'WADMPR': 'Provinsi', });
lyr_TitikGempa5mag902022_3.set('fieldImages', {'time': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'depth': 'TextEdit', 'mag': 'TextEdit', 'magType': 'TextEdit', 'nst': 'TextEdit', 'gap': 'TextEdit', 'dmin': 'TextEdit', 'rms': 'TextEdit', 'net': 'TextEdit', 'id': 'TextEdit', 'updated': 'TextEdit', 'place': 'TextEdit', 'type': 'TextEdit', 'horizontal': 'TextEdit', 'depthError': 'TextEdit', 'magError': 'TextEdit', 'magNst': 'TextEdit', 'status': 'TextEdit', 'locationSo': 'TextEdit', 'magSource': 'TextEdit', });
lyr_StrukturGeologi_4.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'objectid_2': 'TextEdit', 'objectid': 'TextEdit', 'fcode': 'TextEdit', 'namobj': 'TextEdit', 'klsstr': 'TextEdit', 'remark': 'TextEdit', 'metadata': 'TextEdit', 'srs_id': 'TextEdit', 'st_length_': 'TextEdit', 'st_length1': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_BatasKabupaten_5.set('fieldImages', {'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', });
lyr_TitikGempa5mag902022_3.set('fieldLabels', {'time': 'header label', 'latitude': 'header label', 'longitude': 'inline label', 'depth': 'inline label', 'mag': 'inline label', 'magType': 'inline label', 'nst': 'inline label', 'gap': 'inline label', 'dmin': 'inline label', 'rms': 'inline label', 'net': 'inline label', 'id': 'inline label', 'updated': 'inline label', 'place': 'inline label', 'type': 'inline label', 'horizontal': 'inline label', 'depthError': 'inline label', 'magError': 'inline label', 'magNst': 'inline label', 'status': 'inline label', 'locationSo': 'inline label', 'magSource': 'inline label', });
lyr_StrukturGeologi_4.set('fieldLabels', {'OBJECTID_1': 'inline label', 'objectid_2': 'inline label', 'objectid': 'inline label', 'fcode': 'inline label', 'namobj': 'inline label', 'klsstr': 'inline label', 'remark': 'inline label', 'metadata': 'inline label', 'srs_id': 'inline label', 'st_length_': 'inline label', 'st_length1': 'inline label', 'Shape_Leng': 'inline label', });
lyr_BatasKabupaten_5.set('fieldLabels', {'WADMKK': 'inline label', 'WADMPR': 'inline label', });
lyr_BatasKabupaten_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});