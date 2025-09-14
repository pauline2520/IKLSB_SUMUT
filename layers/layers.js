var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Toba_1 = new ol.format.GeoJSON();
var features_Toba_1 = format_Toba_1.readFeatures(json_Toba_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Toba_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Toba_1.addFeatures(features_Toba_1);
var lyr_Toba_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Toba_1, 
                style: style_Toba_1,
                popuplayertitle: 'Toba',
                interactive: true,
                title: '<img src="styles/legend/Toba_1.png" /> Toba'
            });
var format_TapanuliUtara_2 = new ol.format.GeoJSON();
var features_TapanuliUtara_2 = format_TapanuliUtara_2.readFeatures(json_TapanuliUtara_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TapanuliUtara_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TapanuliUtara_2.addFeatures(features_TapanuliUtara_2);
var lyr_TapanuliUtara_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TapanuliUtara_2, 
                style: style_TapanuliUtara_2,
                popuplayertitle: 'Tapanuli Utara',
                interactive: true,
                title: '<img src="styles/legend/TapanuliUtara_2.png" /> Tapanuli Utara'
            });
var format_TapanuliTengah_3 = new ol.format.GeoJSON();
var features_TapanuliTengah_3 = format_TapanuliTengah_3.readFeatures(json_TapanuliTengah_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TapanuliTengah_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TapanuliTengah_3.addFeatures(features_TapanuliTengah_3);
var lyr_TapanuliTengah_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TapanuliTengah_3, 
                style: style_TapanuliTengah_3,
                popuplayertitle: 'Tapanuli Tengah',
                interactive: true,
                title: '<img src="styles/legend/TapanuliTengah_3.png" /> Tapanuli Tengah'
            });
var format_TapanuliSelatan_4 = new ol.format.GeoJSON();
var features_TapanuliSelatan_4 = format_TapanuliSelatan_4.readFeatures(json_TapanuliSelatan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TapanuliSelatan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TapanuliSelatan_4.addFeatures(features_TapanuliSelatan_4);
var lyr_TapanuliSelatan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TapanuliSelatan_4, 
                style: style_TapanuliSelatan_4,
                popuplayertitle: 'Tapanuli Selatan',
                interactive: true,
                title: '<img src="styles/legend/TapanuliSelatan_4.png" /> Tapanuli Selatan'
            });
var format_Simalungun_5 = new ol.format.GeoJSON();
var features_Simalungun_5 = format_Simalungun_5.readFeatures(json_Simalungun_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Simalungun_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Simalungun_5.addFeatures(features_Simalungun_5);
var lyr_Simalungun_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Simalungun_5, 
                style: style_Simalungun_5,
                popuplayertitle: 'Simalungun',
                interactive: true,
                title: '<img src="styles/legend/Simalungun_5.png" /> Simalungun'
            });
var format_SerdangBedagai_6 = new ol.format.GeoJSON();
var features_SerdangBedagai_6 = format_SerdangBedagai_6.readFeatures(json_SerdangBedagai_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SerdangBedagai_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SerdangBedagai_6.addFeatures(features_SerdangBedagai_6);
var lyr_SerdangBedagai_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SerdangBedagai_6, 
                style: style_SerdangBedagai_6,
                popuplayertitle: 'Serdang Bedagai',
                interactive: true,
                title: '<img src="styles/legend/SerdangBedagai_6.png" /> Serdang Bedagai'
            });
var format_Samosir_7 = new ol.format.GeoJSON();
var features_Samosir_7 = format_Samosir_7.readFeatures(json_Samosir_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Samosir_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Samosir_7.addFeatures(features_Samosir_7);
var lyr_Samosir_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Samosir_7, 
                style: style_Samosir_7,
                popuplayertitle: 'Samosir',
                interactive: true,
                title: '<img src="styles/legend/Samosir_7.png" /> Samosir'
            });
var format_PakpakBarat_8 = new ol.format.GeoJSON();
var features_PakpakBarat_8 = format_PakpakBarat_8.readFeatures(json_PakpakBarat_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PakpakBarat_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PakpakBarat_8.addFeatures(features_PakpakBarat_8);
var lyr_PakpakBarat_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PakpakBarat_8, 
                style: style_PakpakBarat_8,
                popuplayertitle: 'Pakpak Barat',
                interactive: true,
                title: '<img src="styles/legend/PakpakBarat_8.png" /> Pakpak Barat'
            });
var format_PadangLawasUtara_9 = new ol.format.GeoJSON();
var features_PadangLawasUtara_9 = format_PadangLawasUtara_9.readFeatures(json_PadangLawasUtara_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PadangLawasUtara_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PadangLawasUtara_9.addFeatures(features_PadangLawasUtara_9);
var lyr_PadangLawasUtara_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PadangLawasUtara_9, 
                style: style_PadangLawasUtara_9,
                popuplayertitle: 'Padang Lawas Utara',
                interactive: true,
                title: '<img src="styles/legend/PadangLawasUtara_9.png" /> Padang Lawas Utara'
            });
var format_PadangLawas_10 = new ol.format.GeoJSON();
var features_PadangLawas_10 = format_PadangLawas_10.readFeatures(json_PadangLawas_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PadangLawas_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PadangLawas_10.addFeatures(features_PadangLawas_10);
var lyr_PadangLawas_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PadangLawas_10, 
                style: style_PadangLawas_10,
                popuplayertitle: 'Padang Lawas',
                interactive: true,
                title: '<img src="styles/legend/PadangLawas_10.png" /> Padang Lawas'
            });
var format_NiasUtara_11 = new ol.format.GeoJSON();
var features_NiasUtara_11 = format_NiasUtara_11.readFeatures(json_NiasUtara_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NiasUtara_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NiasUtara_11.addFeatures(features_NiasUtara_11);
var lyr_NiasUtara_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NiasUtara_11, 
                style: style_NiasUtara_11,
                popuplayertitle: 'Nias Utara',
                interactive: true,
                title: '<img src="styles/legend/NiasUtara_11.png" /> Nias Utara'
            });
var format_NiasSelatan_12 = new ol.format.GeoJSON();
var features_NiasSelatan_12 = format_NiasSelatan_12.readFeatures(json_NiasSelatan_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NiasSelatan_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NiasSelatan_12.addFeatures(features_NiasSelatan_12);
var lyr_NiasSelatan_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NiasSelatan_12, 
                style: style_NiasSelatan_12,
                popuplayertitle: 'Nias Selatan',
                interactive: true,
                title: '<img src="styles/legend/NiasSelatan_12.png" /> Nias Selatan'
            });
var format_NiasBarat_13 = new ol.format.GeoJSON();
var features_NiasBarat_13 = format_NiasBarat_13.readFeatures(json_NiasBarat_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NiasBarat_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NiasBarat_13.addFeatures(features_NiasBarat_13);
var lyr_NiasBarat_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NiasBarat_13, 
                style: style_NiasBarat_13,
                popuplayertitle: 'Nias Barat',
                interactive: true,
                title: '<img src="styles/legend/NiasBarat_13.png" /> Nias Barat'
            });
var format_Nias_14 = new ol.format.GeoJSON();
var features_Nias_14 = format_Nias_14.readFeatures(json_Nias_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nias_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nias_14.addFeatures(features_Nias_14);
var lyr_Nias_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nias_14, 
                style: style_Nias_14,
                popuplayertitle: 'Nias',
                interactive: true,
                title: '<img src="styles/legend/Nias_14.png" /> Nias'
            });
var format_MandailingNatal_15 = new ol.format.GeoJSON();
var features_MandailingNatal_15 = format_MandailingNatal_15.readFeatures(json_MandailingNatal_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MandailingNatal_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MandailingNatal_15.addFeatures(features_MandailingNatal_15);
var lyr_MandailingNatal_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MandailingNatal_15, 
                style: style_MandailingNatal_15,
                popuplayertitle: 'Mandailing Natal',
                interactive: true,
                title: '<img src="styles/legend/MandailingNatal_15.png" /> Mandailing Natal'
            });
var format_Langkat_16 = new ol.format.GeoJSON();
var features_Langkat_16 = format_Langkat_16.readFeatures(json_Langkat_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Langkat_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Langkat_16.addFeatures(features_Langkat_16);
var lyr_Langkat_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Langkat_16, 
                style: style_Langkat_16,
                popuplayertitle: 'Langkat',
                interactive: true,
                title: '<img src="styles/legend/Langkat_16.png" /> Langkat'
            });
var format_LabuhanbatuUtara_17 = new ol.format.GeoJSON();
var features_LabuhanbatuUtara_17 = format_LabuhanbatuUtara_17.readFeatures(json_LabuhanbatuUtara_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LabuhanbatuUtara_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LabuhanbatuUtara_17.addFeatures(features_LabuhanbatuUtara_17);
var lyr_LabuhanbatuUtara_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LabuhanbatuUtara_17, 
                style: style_LabuhanbatuUtara_17,
                popuplayertitle: 'Labuhanbatu Utara',
                interactive: true,
                title: '<img src="styles/legend/LabuhanbatuUtara_17.png" /> Labuhanbatu Utara'
            });
var format_LabuhanbatuSelatan_18 = new ol.format.GeoJSON();
var features_LabuhanbatuSelatan_18 = format_LabuhanbatuSelatan_18.readFeatures(json_LabuhanbatuSelatan_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LabuhanbatuSelatan_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LabuhanbatuSelatan_18.addFeatures(features_LabuhanbatuSelatan_18);
var lyr_LabuhanbatuSelatan_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LabuhanbatuSelatan_18, 
                style: style_LabuhanbatuSelatan_18,
                popuplayertitle: 'Labuhanbatu Selatan',
                interactive: true,
                title: '<img src="styles/legend/LabuhanbatuSelatan_18.png" /> Labuhanbatu Selatan'
            });
var format_Labuhanbatu_19 = new ol.format.GeoJSON();
var features_Labuhanbatu_19 = format_Labuhanbatu_19.readFeatures(json_Labuhanbatu_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Labuhanbatu_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Labuhanbatu_19.addFeatures(features_Labuhanbatu_19);
var lyr_Labuhanbatu_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Labuhanbatu_19, 
                style: style_Labuhanbatu_19,
                popuplayertitle: 'Labuhanbatu',
                interactive: true,
                title: '<img src="styles/legend/Labuhanbatu_19.png" /> Labuhanbatu'
            });
var format_KotaTebingTinggi_20 = new ol.format.GeoJSON();
var features_KotaTebingTinggi_20 = format_KotaTebingTinggi_20.readFeatures(json_KotaTebingTinggi_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaTebingTinggi_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaTebingTinggi_20.addFeatures(features_KotaTebingTinggi_20);
var lyr_KotaTebingTinggi_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaTebingTinggi_20, 
                style: style_KotaTebingTinggi_20,
                popuplayertitle: 'Kota Tebing Tinggi',
                interactive: true,
                title: '<img src="styles/legend/KotaTebingTinggi_20.png" /> Kota Tebing Tinggi'
            });
var format_KotaTanjungBalai_21 = new ol.format.GeoJSON();
var features_KotaTanjungBalai_21 = format_KotaTanjungBalai_21.readFeatures(json_KotaTanjungBalai_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaTanjungBalai_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaTanjungBalai_21.addFeatures(features_KotaTanjungBalai_21);
var lyr_KotaTanjungBalai_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaTanjungBalai_21, 
                style: style_KotaTanjungBalai_21,
                popuplayertitle: 'Kota Tanjung Balai',
                interactive: true,
                title: '<img src="styles/legend/KotaTanjungBalai_21.png" /> Kota Tanjung Balai'
            });
var format_KotaSibolga_22 = new ol.format.GeoJSON();
var features_KotaSibolga_22 = format_KotaSibolga_22.readFeatures(json_KotaSibolga_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaSibolga_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaSibolga_22.addFeatures(features_KotaSibolga_22);
var lyr_KotaSibolga_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaSibolga_22, 
                style: style_KotaSibolga_22,
                popuplayertitle: 'Kota Sibolga',
                interactive: true,
                title: '<img src="styles/legend/KotaSibolga_22.png" /> Kota Sibolga'
            });
var format_KotaPematangSiantar_23 = new ol.format.GeoJSON();
var features_KotaPematangSiantar_23 = format_KotaPematangSiantar_23.readFeatures(json_KotaPematangSiantar_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaPematangSiantar_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaPematangSiantar_23.addFeatures(features_KotaPematangSiantar_23);
var lyr_KotaPematangSiantar_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaPematangSiantar_23, 
                style: style_KotaPematangSiantar_23,
                popuplayertitle: 'Kota Pematang Siantar',
                interactive: true,
                title: '<img src="styles/legend/KotaPematangSiantar_23.png" /> Kota Pematang Siantar'
            });
var format_KotaPadangSidempuan_24 = new ol.format.GeoJSON();
var features_KotaPadangSidempuan_24 = format_KotaPadangSidempuan_24.readFeatures(json_KotaPadangSidempuan_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaPadangSidempuan_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaPadangSidempuan_24.addFeatures(features_KotaPadangSidempuan_24);
var lyr_KotaPadangSidempuan_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaPadangSidempuan_24, 
                style: style_KotaPadangSidempuan_24,
                popuplayertitle: 'Kota Padang Sidempuan',
                interactive: true,
                title: '<img src="styles/legend/KotaPadangSidempuan_24.png" /> Kota Padang Sidempuan'
            });
var format_KotaMedan_25 = new ol.format.GeoJSON();
var features_KotaMedan_25 = format_KotaMedan_25.readFeatures(json_KotaMedan_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaMedan_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaMedan_25.addFeatures(features_KotaMedan_25);
var lyr_KotaMedan_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaMedan_25, 
                style: style_KotaMedan_25,
                popuplayertitle: 'Kota Medan',
                interactive: true,
                title: '<img src="styles/legend/KotaMedan_25.png" /> Kota Medan'
            });
var format_KotaGunungsitoli_26 = new ol.format.GeoJSON();
var features_KotaGunungsitoli_26 = format_KotaGunungsitoli_26.readFeatures(json_KotaGunungsitoli_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaGunungsitoli_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaGunungsitoli_26.addFeatures(features_KotaGunungsitoli_26);
var lyr_KotaGunungsitoli_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaGunungsitoli_26, 
                style: style_KotaGunungsitoli_26,
                popuplayertitle: 'Kota Gunungsitoli',
                interactive: true,
                title: '<img src="styles/legend/KotaGunungsitoli_26.png" /> Kota Gunungsitoli'
            });
var format_KotaBinjai_27 = new ol.format.GeoJSON();
var features_KotaBinjai_27 = format_KotaBinjai_27.readFeatures(json_KotaBinjai_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaBinjai_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaBinjai_27.addFeatures(features_KotaBinjai_27);
var lyr_KotaBinjai_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaBinjai_27, 
                style: style_KotaBinjai_27,
                popuplayertitle: 'Kota Binjai',
                interactive: true,
                title: '<img src="styles/legend/KotaBinjai_27.png" /> Kota Binjai'
            });
var format_Karo_28 = new ol.format.GeoJSON();
var features_Karo_28 = format_Karo_28.readFeatures(json_Karo_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Karo_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Karo_28.addFeatures(features_Karo_28);
var lyr_Karo_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Karo_28, 
                style: style_Karo_28,
                popuplayertitle: 'Karo',
                interactive: true,
                title: '<img src="styles/legend/Karo_28.png" /> Karo'
            });
var format_HumbangHasungdutan_29 = new ol.format.GeoJSON();
var features_HumbangHasungdutan_29 = format_HumbangHasungdutan_29.readFeatures(json_HumbangHasungdutan_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HumbangHasungdutan_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HumbangHasungdutan_29.addFeatures(features_HumbangHasungdutan_29);
var lyr_HumbangHasungdutan_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HumbangHasungdutan_29, 
                style: style_HumbangHasungdutan_29,
                popuplayertitle: 'Humbang Hasungdutan',
                interactive: true,
                title: '<img src="styles/legend/HumbangHasungdutan_29.png" /> Humbang Hasungdutan'
            });
var format_DeliSerdang_30 = new ol.format.GeoJSON();
var features_DeliSerdang_30 = format_DeliSerdang_30.readFeatures(json_DeliSerdang_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DeliSerdang_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeliSerdang_30.addFeatures(features_DeliSerdang_30);
var lyr_DeliSerdang_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DeliSerdang_30, 
                style: style_DeliSerdang_30,
                popuplayertitle: 'Deli Serdang',
                interactive: true,
                title: '<img src="styles/legend/DeliSerdang_30.png" /> Deli Serdang'
            });
var format_Dairi_31 = new ol.format.GeoJSON();
var features_Dairi_31 = format_Dairi_31.readFeatures(json_Dairi_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dairi_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dairi_31.addFeatures(features_Dairi_31);
var lyr_Dairi_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dairi_31, 
                style: style_Dairi_31,
                popuplayertitle: 'Dairi',
                interactive: true,
                title: '<img src="styles/legend/Dairi_31.png" /> Dairi'
            });
var format_Asahan_32 = new ol.format.GeoJSON();
var features_Asahan_32 = format_Asahan_32.readFeatures(json_Asahan_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Asahan_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Asahan_32.addFeatures(features_Asahan_32);
var lyr_Asahan_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Asahan_32, 
                style: style_Asahan_32,
                popuplayertitle: 'Asahan',
                interactive: true,
                title: '<img src="styles/legend/Asahan_32.png" /> Asahan'
            });
var format_Batubara_33 = new ol.format.GeoJSON();
var features_Batubara_33 = format_Batubara_33.readFeatures(json_Batubara_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batubara_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batubara_33.addFeatures(features_Batubara_33);
var lyr_Batubara_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batubara_33, 
                style: style_Batubara_33,
                popuplayertitle: 'Batubara',
                interactive: true,
                title: '<img src="styles/legend/Batubara_33.png" /> Batubara'
            });
var format_BatasKabupatenSumateraUtara_34 = new ol.format.GeoJSON();
var features_BatasKabupatenSumateraUtara_34 = format_BatasKabupatenSumateraUtara_34.readFeatures(json_BatasKabupatenSumateraUtara_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKabupatenSumateraUtara_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKabupatenSumateraUtara_34.addFeatures(features_BatasKabupatenSumateraUtara_34);
var lyr_BatasKabupatenSumateraUtara_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKabupatenSumateraUtara_34, 
                style: style_BatasKabupatenSumateraUtara_34,
                popuplayertitle: 'Batas Kabupaten Sumatera Utara',
                interactive: true,
                title: '<img src="styles/legend/BatasKabupatenSumateraUtara_34.png" /> Batas Kabupaten Sumatera Utara'
            });
var group_Kabupaten = new ol.layer.Group({
                                layers: [lyr_Toba_1,lyr_TapanuliUtara_2,lyr_TapanuliTengah_3,lyr_TapanuliSelatan_4,lyr_Simalungun_5,lyr_SerdangBedagai_6,lyr_Samosir_7,lyr_PakpakBarat_8,lyr_PadangLawasUtara_9,lyr_PadangLawas_10,lyr_NiasUtara_11,lyr_NiasSelatan_12,lyr_NiasBarat_13,lyr_Nias_14,lyr_MandailingNatal_15,lyr_Langkat_16,lyr_LabuhanbatuUtara_17,lyr_LabuhanbatuSelatan_18,lyr_Labuhanbatu_19,lyr_KotaTebingTinggi_20,lyr_KotaTanjungBalai_21,lyr_KotaSibolga_22,lyr_KotaPematangSiantar_23,lyr_KotaPadangSidempuan_24,lyr_KotaMedan_25,lyr_KotaGunungsitoli_26,lyr_KotaBinjai_27,lyr_Karo_28,lyr_HumbangHasungdutan_29,lyr_DeliSerdang_30,lyr_Dairi_31,lyr_Asahan_32,lyr_Batubara_33,],
                                fold: 'open',
                                title: 'Kabupaten'});

lyr_GoogleSatellite_0.setVisible(true);lyr_Toba_1.setVisible(true);lyr_TapanuliUtara_2.setVisible(true);lyr_TapanuliTengah_3.setVisible(true);lyr_TapanuliSelatan_4.setVisible(true);lyr_Simalungun_5.setVisible(true);lyr_SerdangBedagai_6.setVisible(true);lyr_Samosir_7.setVisible(true);lyr_PakpakBarat_8.setVisible(true);lyr_PadangLawasUtara_9.setVisible(true);lyr_PadangLawas_10.setVisible(true);lyr_NiasUtara_11.setVisible(true);lyr_NiasSelatan_12.setVisible(true);lyr_NiasBarat_13.setVisible(true);lyr_Nias_14.setVisible(true);lyr_MandailingNatal_15.setVisible(true);lyr_Langkat_16.setVisible(true);lyr_LabuhanbatuUtara_17.setVisible(true);lyr_LabuhanbatuSelatan_18.setVisible(true);lyr_Labuhanbatu_19.setVisible(true);lyr_KotaTebingTinggi_20.setVisible(true);lyr_KotaTanjungBalai_21.setVisible(true);lyr_KotaSibolga_22.setVisible(true);lyr_KotaPematangSiantar_23.setVisible(true);lyr_KotaPadangSidempuan_24.setVisible(true);lyr_KotaMedan_25.setVisible(true);lyr_KotaGunungsitoli_26.setVisible(true);lyr_KotaBinjai_27.setVisible(true);lyr_Karo_28.setVisible(true);lyr_HumbangHasungdutan_29.setVisible(true);lyr_DeliSerdang_30.setVisible(true);lyr_Dairi_31.setVisible(true);lyr_Asahan_32.setVisible(true);lyr_Batubara_33.setVisible(true);lyr_BatasKabupatenSumateraUtara_34.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_Kabupaten,lyr_BatasKabupatenSumateraUtara_34];
lyr_Toba_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Suitabilit': 'Suitabilit', 'Suitabil_1': 'Suitabil_1', 'Index_Clim': 'Index_Clim', 'Index_Soil': 'Index_Soil', 'Index_Topo': 'Index_Topo', 'Index_Acce': 'Index_Acce', 'Index_Envi': 'Index_Envi', });
lyr_TapanuliUtara_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Suitabilit': 'Suitabilit', 'Suitabil_1': 'Suitabil_1', 'Index_Clim': 'Index_Clim', 'Index_Soil': 'Index_Soil', 'Index_Topo': 'Index_Topo', 'Index_Acce': 'Index_Acce', 'Index_Envi': 'Index_Envi', });
lyr_TapanuliTengah_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Suitabilit': 'Suitabilit', 'Suitabil_1': 'Suitabil_1', 'Index_Clim': 'Index_Clim', 'Index_Soil': 'Index_Soil', 'Index_Topo': 'Index_Topo', 'Index_Acce': 'Index_Acce', 'Index_Envi': 'Index_Envi', });
lyr_TapanuliSelatan_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Suitabilit': 'Suitabilit', 'Suitabil_1': 'Suitabil_1', 'Index_Clim': 'Index_Clim', 'Index_Soil': 'Index_Soil', 'Index_Topo': 'Index_Topo', 'Index_Acce': 'Index_Acce', 'Index_Envi': 'Index_Envi', });
lyr_Simalungun_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Suitabilit': 'Suitabilit', 'Suitabil_1': 'Suitabil_1', 'Index_Clim': 'Index_Clim', 'Index_Soil': 'Index_Soil', 'Index_Topo': 'Index_Topo', 'Index_Acce': 'Index_Acce', 'Index_Envi': 'Index_Envi', });
lyr_SerdangBedagai_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Suitabilit': 'Suitabilit', 'Suitabil_1': 'Suitabil_1', 'Index_Clim': 'Index_Clim', 'Index_Soil': 'Index_Soil', 'Index_Topo': 'Index_Topo', 'Index_Acce': 'Index_Acce', 'Index_Envi': 'Index_Envi', });
lyr_Samosir_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Suitabilit': 'Suitabilit', 'Suitabil_1': 'Suitabil_1', 'Index_Clim': 'Index_Clim', 'Index_Soil': 'Index_Soil', 'Index_Topo': 'Index_Topo', 'Index_Acce': 'Index_Acce', 'Index_Envi': 'Index_Envi', });
lyr_PakpakBarat_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Suitabilit': 'Suitabilit', 'Suitabil_1': 'Suitabil_1', 'Index_Clim': 'Index_Clim', 'Index_Soil': 'Index_Soil', 'Index_Topo': 'Index_Topo', 'Index_Acce': 'Index_Acce', 'Index_Envi': 'Index_Envi', });
lyr_PadangLawasUtara_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Suitabilit': 'Suitabilit', 'Suitabil_1': 'Suitabil_1', 'Index_Clim': 'Index_Clim', 'Index_Soil': 'Index_Soil', 'Index_Topo': 'Index_Topo', 'Index_Acce': 'Index_Acce', 'Index_Envi': 'Index_Envi', });
lyr_PadangLawas_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Suitabilit': 'Suitabilit', 'Suitabil_1': 'Suitabil_1', 'Index_Clim': 'Index_Clim', 'Index_Soil': 'Index_Soil', 'Index_Topo': 'Index_Topo', 'Index_Acce': 'Index_Acce', 'Index_Envi': 'Index_Envi', });
lyr_NiasUtara_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Suitabilit': 'Suitabilit', 'Suitabil_1': 'Suitabil_1', 'Index_Clim': 'Index_Clim', 'Index_Soil': 'Index_Soil', 'Index_Topo': 'Index_Topo', 'Index_Acce': 'Index_Acce', 'Index_Envi': 'Index_Envi', });
lyr_NiasSelatan_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Suitabilit': 'Suitabilit', 'Suitabil_1': 'Suitabil_1', 'Index_Clim': 'Index_Clim', 'Index_Soil': 'Index_Soil', 'Index_Topo': 'Index_Topo', 'Index_Acce': 'Index_Acce', 'Index_Envi': 'Index_Envi', });
lyr_NiasBarat_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Suitabilit': 'Suitabilit', 'Suitabil_1': 'Suitabil_1', 'Index_Clim': 'Index_Clim', 'Index_Soil': 'Index_Soil', 'Index_Topo': 'Index_Topo', 'Index_Acce': 'Index_Acce', 'Index_Envi': 'Index_Envi', });
lyr_Nias_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Suitabilit': 'Suitabilit', 'Suitabil_1': 'Suitabil_1', 'Index_Clim': 'Index_Clim', 'Index_Soil': 'Index_Soil', 'Index_Topo': 'Index_Topo', 'Index_Acce': 'Index_Acce', 'Index_Envi': 'Index_Envi', });
lyr_MandailingNatal_15.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Suitabilit': 'Suitabilit', 'Suitabil_1': 'Suitabil_1', 'Index_Clim': 'Index_Clim', 'Index_Soil': 'Index_Soil', 'Index_Topo': 'Index_Topo', 'Index_Acce': 'Index_Acce', 'Index_Envi': 'Index_Envi', });
lyr_Langkat_16.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Suitabilit': 'Suitabilit', 'Suitabil_1': 'Suitabil_1', 'Index_Clim': 'Index_Clim', 'Index_Soil': 'Index_Soil', 'Index_Topo': 'Index_Topo', 'Index_Acce': 'Index_Acce', 'Index_Envi': 'Index_Envi', });
lyr_LabuhanbatuUtara_17.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Suitabilit': 'Suitabilit', 'Suitabil_1': 'Suitabil_1', 'Index_Clim': 'Index_Clim', 'Index_Soil': 'Index_Soil', 'Index_Topo': 'Index_Topo', 'Index_Acce': 'Index_Acce', 'Index_Envi': 'Index_Envi', });
lyr_LabuhanbatuSelatan_18.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Suitabilit': 'Suitabilit', 'Suitabil_1': 'Suitabil_1', 'Index_Clim': 'Index_Clim', 'Index_Soil': 'Index_Soil', 'Index_Topo': 'Index_Topo', 'Index_Acce': 'Index_Acce', 'Index_Envi': 'Index_Envi', });
lyr_Labuhanbatu_19.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Suitabilit': 'Suitabilit', 'Suitabil_1': 'Suitabil_1', 'Index_Clim': 'Index_Clim', 'Index_Soil': 'Index_Soil', 'Index_Topo': 'Index_Topo', 'Index_Acce': 'Index_Acce', 'Index_Envi': 'Index_Envi', });
lyr_KotaTebingTinggi_20.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Suitabilit': 'Suitabilit', 'Suitabil_1': 'Suitabil_1', 'Index_Clim': 'Index_Clim', 'Index_Soil': 'Index_Soil', 'Index_Topo': 'Index_Topo', 'Index_Acce': 'Index_Acce', 'Index_Envi': 'Index_Envi', });
lyr_KotaTanjungBalai_21.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Suitabilit': 'Suitabilit', 'Suitabil_1': 'Suitabil_1', 'Index_Clim': 'Index_Clim', 'Index_Soil': 'Index_Soil', 'Index_Topo': 'Index_Topo', 'Index_Acce': 'Index_Acce', 'Index_Envi': 'Index_Envi', });
lyr_KotaSibolga_22.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Suitabilit': 'Suitabilit', 'Suitabil_1': 'Suitabil_1', 'Index_Clim': 'Index_Clim', 'Index_Soil': 'Index_Soil', 'Index_Topo': 'Index_Topo', 'Index_Acce': 'Index_Acce', 'Index_Envi': 'Index_Envi', });
lyr_KotaPematangSiantar_23.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Suitabilit': 'Suitabilit', 'Suitabil_1': 'Suitabil_1', 'Index_Clim': 'Index_Clim', 'Index_Soil': 'Index_Soil', 'Index_Topo': 'Index_Topo', 'Index_Acce': 'Index_Acce', 'Index_Envi': 'Index_Envi', });
lyr_KotaPadangSidempuan_24.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Suitabilit': 'Suitabilit', 'Suitabil_1': 'Suitabil_1', 'Index_Clim': 'Index_Clim', 'Index_Soil': 'Index_Soil', 'Index_Topo': 'Index_Topo', 'Index_Acce': 'Index_Acce', 'Index_Envi': 'Index_Envi', });
lyr_KotaMedan_25.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Suitabilit': 'Suitabilit', 'Suitabil_1': 'Suitabil_1', 'Index_Clim': 'Index_Clim', 'Index_Soil': 'Index_Soil', 'Index_Topo': 'Index_Topo', 'Index_Acce': 'Index_Acce', 'Index_Envi': 'Index_Envi', });
lyr_KotaGunungsitoli_26.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Suitabilit': 'Suitabilit', 'Suitabil_1': 'Suitabil_1', 'Index_Clim': 'Index_Clim', 'Index_Soil': 'Index_Soil', 'Index_Topo': 'Index_Topo', 'Index_Acce': 'Index_Acce', 'Index_Envi': 'Index_Envi', });
lyr_KotaBinjai_27.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Suitabilit': 'Suitabilit', 'Suitabil_1': 'Suitabil_1', 'Index_Clim': 'Index_Clim', 'Index_Soil': 'Index_Soil', 'Index_Topo': 'Index_Topo', 'Index_Acce': 'Index_Acce', 'Index_Envi': 'Index_Envi', });
lyr_Karo_28.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Suitabilit': 'Suitabilit', 'Suitabil_1': 'Suitabil_1', 'Index_Clim': 'Index_Clim', 'Index_Soil': 'Index_Soil', 'Index_Topo': 'Index_Topo', 'Index_Acce': 'Index_Acce', 'Index_Envi': 'Index_Envi', });
lyr_HumbangHasungdutan_29.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Suitabilit': 'Suitabilit', 'Suitabil_1': 'Suitabil_1', 'Index_Clim': 'Index_Clim', 'Index_Soil': 'Index_Soil', 'Index_Topo': 'Index_Topo', 'Index_Acce': 'Index_Acce', 'Index_Envi': 'Index_Envi', });
lyr_DeliSerdang_30.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Suitabilit': 'Suitabilit', 'Suitabil_1': 'Suitabil_1', 'Index_Clim': 'Index_Clim', 'Index_Soil': 'Index_Soil', 'Index_Topo': 'Index_Topo', 'Index_Acce': 'Index_Acce', 'Index_Envi': 'Index_Envi', });
lyr_Dairi_31.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Suitabilit': 'Suitabilit', 'Suitabil_1': 'Suitabil_1', 'Index_Clim': 'Index_Clim', 'Index_Soil': 'Index_Soil', 'Index_Topo': 'Index_Topo', 'Index_Acce': 'Index_Acce', 'Index_Envi': 'Index_Envi', });
lyr_Asahan_32.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Suitabilit': 'Suitabilit', 'Suitabil_1': 'Suitabil_1', 'Index_Clim': 'Index_Clim', 'Index_Soil': 'Index_Soil', 'Index_Topo': 'Index_Topo', 'Index_Acce': 'Index_Acce', 'Index_Envi': 'Index_Envi', });
lyr_Batubara_33.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Suitabilit': 'Suitabilit', 'Suitabil_1': 'Suitabil_1', 'Index_Clim': 'Index_Clim', 'Index_Soil': 'Index_Soil', 'Index_Topo': 'Index_Topo', 'Index_Acce': 'Index_Acce', 'Index_Envi': 'Index_Envi', });
lyr_BatasKabupatenSumateraUtara_34.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Toba_1.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'LUASWH': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'Shape_Leng': '', 'Shape_Area': '', 'Suitabilit': '', 'Suitabil_1': '', 'Index_Clim': '', 'Index_Soil': '', 'Index_Topo': '', 'Index_Acce': '', 'Index_Envi': '', });
lyr_TapanuliUtara_2.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'LUASWH': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'Shape_Leng': '', 'Shape_Area': '', 'Suitabilit': '', 'Suitabil_1': '', 'Index_Clim': '', 'Index_Soil': '', 'Index_Topo': '', 'Index_Acce': '', 'Index_Envi': '', });
lyr_TapanuliTengah_3.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'LUASWH': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'Shape_Leng': '', 'Shape_Area': '', 'Suitabilit': '', 'Suitabil_1': '', 'Index_Clim': '', 'Index_Soil': '', 'Index_Topo': '', 'Index_Acce': '', 'Index_Envi': '', });
lyr_TapanuliSelatan_4.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'LUASWH': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'Shape_Leng': '', 'Shape_Area': '', 'Suitabilit': '', 'Suitabil_1': '', 'Index_Clim': '', 'Index_Soil': '', 'Index_Topo': '', 'Index_Acce': '', 'Index_Envi': '', });
lyr_Simalungun_5.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'LUASWH': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'Shape_Leng': '', 'Shape_Area': '', 'Suitabilit': '', 'Suitabil_1': '', 'Index_Clim': '', 'Index_Soil': '', 'Index_Topo': '', 'Index_Acce': '', 'Index_Envi': '', });
lyr_SerdangBedagai_6.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'LUASWH': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'Shape_Leng': '', 'Shape_Area': '', 'Suitabilit': '', 'Suitabil_1': '', 'Index_Clim': '', 'Index_Soil': '', 'Index_Topo': '', 'Index_Acce': '', 'Index_Envi': '', });
lyr_Samosir_7.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'LUASWH': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'Shape_Leng': '', 'Shape_Area': '', 'Suitabilit': '', 'Suitabil_1': '', 'Index_Clim': '', 'Index_Soil': '', 'Index_Topo': '', 'Index_Acce': '', 'Index_Envi': '', });
lyr_PakpakBarat_8.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'LUASWH': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'Shape_Leng': '', 'Shape_Area': '', 'Suitabilit': '', 'Suitabil_1': '', 'Index_Clim': '', 'Index_Soil': '', 'Index_Topo': '', 'Index_Acce': '', 'Index_Envi': '', });
lyr_PadangLawasUtara_9.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'LUASWH': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'Shape_Leng': '', 'Shape_Area': '', 'Suitabilit': '', 'Suitabil_1': '', 'Index_Clim': '', 'Index_Soil': '', 'Index_Topo': '', 'Index_Acce': '', 'Index_Envi': '', });
lyr_PadangLawas_10.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'LUASWH': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'Shape_Leng': '', 'Shape_Area': '', 'Suitabilit': '', 'Suitabil_1': '', 'Index_Clim': '', 'Index_Soil': '', 'Index_Topo': '', 'Index_Acce': '', 'Index_Envi': '', });
lyr_NiasUtara_11.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'LUASWH': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'Shape_Leng': '', 'Shape_Area': '', 'Suitabilit': '', 'Suitabil_1': '', 'Index_Clim': '', 'Index_Soil': '', 'Index_Topo': '', 'Index_Acce': '', 'Index_Envi': '', });
lyr_NiasSelatan_12.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'LUASWH': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'Shape_Leng': '', 'Shape_Area': '', 'Suitabilit': '', 'Suitabil_1': '', 'Index_Clim': '', 'Index_Soil': '', 'Index_Topo': '', 'Index_Acce': '', 'Index_Envi': '', });
lyr_NiasBarat_13.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'LUASWH': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'Shape_Leng': '', 'Shape_Area': '', 'Suitabilit': '', 'Suitabil_1': '', 'Index_Clim': '', 'Index_Soil': '', 'Index_Topo': '', 'Index_Acce': '', 'Index_Envi': '', });
lyr_Nias_14.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'LUASWH': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'Shape_Leng': '', 'Shape_Area': '', 'Suitabilit': '', 'Suitabil_1': '', 'Index_Clim': '', 'Index_Soil': '', 'Index_Topo': '', 'Index_Acce': '', 'Index_Envi': '', });
lyr_MandailingNatal_15.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'LUASWH': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'Shape_Leng': '', 'Shape_Area': '', 'Suitabilit': '', 'Suitabil_1': '', 'Index_Clim': '', 'Index_Soil': '', 'Index_Topo': '', 'Index_Acce': '', 'Index_Envi': '', });
lyr_Langkat_16.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'LUASWH': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'Shape_Leng': '', 'Shape_Area': '', 'Suitabilit': '', 'Suitabil_1': '', 'Index_Clim': '', 'Index_Soil': '', 'Index_Topo': '', 'Index_Acce': '', 'Index_Envi': '', });
lyr_LabuhanbatuUtara_17.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'LUASWH': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'Shape_Leng': '', 'Shape_Area': '', 'Suitabilit': '', 'Suitabil_1': '', 'Index_Clim': '', 'Index_Soil': '', 'Index_Topo': '', 'Index_Acce': '', 'Index_Envi': '', });
lyr_LabuhanbatuSelatan_18.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'LUASWH': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'Shape_Leng': '', 'Shape_Area': '', 'Suitabilit': '', 'Suitabil_1': '', 'Index_Clim': '', 'Index_Soil': '', 'Index_Topo': '', 'Index_Acce': '', 'Index_Envi': '', });
lyr_Labuhanbatu_19.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'LUASWH': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'Shape_Leng': '', 'Shape_Area': '', 'Suitabilit': '', 'Suitabil_1': '', 'Index_Clim': '', 'Index_Soil': '', 'Index_Topo': '', 'Index_Acce': '', 'Index_Envi': '', });
lyr_KotaTebingTinggi_20.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'LUASWH': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'Shape_Leng': '', 'Shape_Area': '', 'Suitabilit': '', 'Suitabil_1': '', 'Index_Clim': '', 'Index_Soil': '', 'Index_Topo': '', 'Index_Acce': '', 'Index_Envi': '', });
lyr_KotaTanjungBalai_21.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'LUASWH': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'Shape_Leng': '', 'Shape_Area': '', 'Suitabilit': '', 'Suitabil_1': '', 'Index_Clim': '', 'Index_Soil': '', 'Index_Topo': '', 'Index_Acce': '', 'Index_Envi': '', });
lyr_KotaSibolga_22.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'LUASWH': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'Shape_Leng': '', 'Shape_Area': '', 'Suitabilit': '', 'Suitabil_1': '', 'Index_Clim': '', 'Index_Soil': '', 'Index_Topo': '', 'Index_Acce': '', 'Index_Envi': '', });
lyr_KotaPematangSiantar_23.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'LUASWH': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'Shape_Leng': '', 'Shape_Area': '', 'Suitabilit': '', 'Suitabil_1': '', 'Index_Clim': '', 'Index_Soil': '', 'Index_Topo': '', 'Index_Acce': '', 'Index_Envi': '', });
lyr_KotaPadangSidempuan_24.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'LUASWH': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'Shape_Leng': '', 'Shape_Area': '', 'Suitabilit': '', 'Suitabil_1': '', 'Index_Clim': '', 'Index_Soil': '', 'Index_Topo': '', 'Index_Acce': '', 'Index_Envi': '', });
lyr_KotaMedan_25.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'LUASWH': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'Shape_Leng': '', 'Shape_Area': '', 'Suitabilit': '', 'Suitabil_1': '', 'Index_Clim': '', 'Index_Soil': '', 'Index_Topo': '', 'Index_Acce': '', 'Index_Envi': '', });
lyr_KotaGunungsitoli_26.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'LUASWH': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'Shape_Leng': '', 'Shape_Area': '', 'Suitabilit': '', 'Suitabil_1': '', 'Index_Clim': '', 'Index_Soil': '', 'Index_Topo': '', 'Index_Acce': '', 'Index_Envi': '', });
lyr_KotaBinjai_27.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'LUASWH': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'Shape_Leng': '', 'Shape_Area': '', 'Suitabilit': '', 'Suitabil_1': '', 'Index_Clim': '', 'Index_Soil': '', 'Index_Topo': '', 'Index_Acce': '', 'Index_Envi': '', });
lyr_Karo_28.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'LUASWH': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'Shape_Leng': '', 'Shape_Area': '', 'Suitabilit': '', 'Suitabil_1': '', 'Index_Clim': '', 'Index_Soil': '', 'Index_Topo': '', 'Index_Acce': '', 'Index_Envi': '', });
lyr_HumbangHasungdutan_29.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'LUASWH': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'Shape_Leng': '', 'Shape_Area': '', 'Suitabilit': '', 'Suitabil_1': '', 'Index_Clim': '', 'Index_Soil': '', 'Index_Topo': '', 'Index_Acce': '', 'Index_Envi': '', });
lyr_DeliSerdang_30.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'LUASWH': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'Shape_Leng': '', 'Shape_Area': '', 'Suitabilit': '', 'Suitabil_1': '', 'Index_Clim': '', 'Index_Soil': '', 'Index_Topo': '', 'Index_Acce': '', 'Index_Envi': '', });
lyr_Dairi_31.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'LUASWH': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'Shape_Leng': '', 'Shape_Area': '', 'Suitabilit': '', 'Suitabil_1': '', 'Index_Clim': '', 'Index_Soil': '', 'Index_Topo': '', 'Index_Acce': '', 'Index_Envi': '', });
lyr_Asahan_32.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'LUASWH': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'Shape_Leng': '', 'Shape_Area': '', 'Suitabilit': '', 'Suitabil_1': '', 'Index_Clim': '', 'Index_Soil': '', 'Index_Topo': '', 'Index_Acce': '', 'Index_Envi': '', });
lyr_Batubara_33.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Suitabilit': 'TextEdit', 'Suitabil_1': 'TextEdit', 'Index_Clim': 'TextEdit', 'Index_Soil': 'TextEdit', 'Index_Topo': 'TextEdit', 'Index_Acce': 'TextEdit', 'Index_Envi': 'TextEdit', });
lyr_BatasKabupatenSumateraUtara_34.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Toba_1.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Suitabilit': 'no label', 'Suitabil_1': 'no label', 'Index_Clim': 'no label', 'Index_Soil': 'no label', 'Index_Topo': 'no label', 'Index_Acce': 'no label', 'Index_Envi': 'no label', });
lyr_TapanuliUtara_2.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Suitabilit': 'no label', 'Suitabil_1': 'no label', 'Index_Clim': 'no label', 'Index_Soil': 'no label', 'Index_Topo': 'no label', 'Index_Acce': 'no label', 'Index_Envi': 'no label', });
lyr_TapanuliTengah_3.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Suitabilit': 'no label', 'Suitabil_1': 'no label', 'Index_Clim': 'no label', 'Index_Soil': 'no label', 'Index_Topo': 'no label', 'Index_Acce': 'no label', 'Index_Envi': 'no label', });
lyr_TapanuliSelatan_4.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Suitabilit': 'no label', 'Suitabil_1': 'no label', 'Index_Clim': 'no label', 'Index_Soil': 'no label', 'Index_Topo': 'no label', 'Index_Acce': 'no label', 'Index_Envi': 'no label', });
lyr_Simalungun_5.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Suitabilit': 'no label', 'Suitabil_1': 'no label', 'Index_Clim': 'no label', 'Index_Soil': 'no label', 'Index_Topo': 'no label', 'Index_Acce': 'no label', 'Index_Envi': 'no label', });
lyr_SerdangBedagai_6.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Suitabilit': 'no label', 'Suitabil_1': 'no label', 'Index_Clim': 'no label', 'Index_Soil': 'no label', 'Index_Topo': 'no label', 'Index_Acce': 'no label', 'Index_Envi': 'no label', });
lyr_Samosir_7.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Suitabilit': 'no label', 'Suitabil_1': 'no label', 'Index_Clim': 'no label', 'Index_Soil': 'no label', 'Index_Topo': 'no label', 'Index_Acce': 'no label', 'Index_Envi': 'no label', });
lyr_PakpakBarat_8.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Suitabilit': 'no label', 'Suitabil_1': 'no label', 'Index_Clim': 'no label', 'Index_Soil': 'no label', 'Index_Topo': 'no label', 'Index_Acce': 'no label', 'Index_Envi': 'no label', });
lyr_PadangLawasUtara_9.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Suitabilit': 'no label', 'Suitabil_1': 'no label', 'Index_Clim': 'no label', 'Index_Soil': 'no label', 'Index_Topo': 'no label', 'Index_Acce': 'no label', 'Index_Envi': 'no label', });
lyr_PadangLawas_10.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Suitabilit': 'no label', 'Suitabil_1': 'no label', 'Index_Clim': 'no label', 'Index_Soil': 'no label', 'Index_Topo': 'no label', 'Index_Acce': 'no label', 'Index_Envi': 'no label', });
lyr_NiasUtara_11.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Suitabilit': 'no label', 'Suitabil_1': 'no label', 'Index_Clim': 'no label', 'Index_Soil': 'no label', 'Index_Topo': 'no label', 'Index_Acce': 'no label', 'Index_Envi': 'no label', });
lyr_NiasSelatan_12.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Suitabilit': 'no label', 'Suitabil_1': 'no label', 'Index_Clim': 'no label', 'Index_Soil': 'no label', 'Index_Topo': 'no label', 'Index_Acce': 'no label', 'Index_Envi': 'no label', });
lyr_NiasBarat_13.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Suitabilit': 'no label', 'Suitabil_1': 'no label', 'Index_Clim': 'no label', 'Index_Soil': 'no label', 'Index_Topo': 'no label', 'Index_Acce': 'no label', 'Index_Envi': 'no label', });
lyr_Nias_14.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Suitabilit': 'no label', 'Suitabil_1': 'no label', 'Index_Clim': 'no label', 'Index_Soil': 'no label', 'Index_Topo': 'no label', 'Index_Acce': 'no label', 'Index_Envi': 'no label', });
lyr_MandailingNatal_15.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Suitabilit': 'no label', 'Suitabil_1': 'no label', 'Index_Clim': 'no label', 'Index_Soil': 'no label', 'Index_Topo': 'no label', 'Index_Acce': 'no label', 'Index_Envi': 'no label', });
lyr_Langkat_16.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Suitabilit': 'no label', 'Suitabil_1': 'no label', 'Index_Clim': 'no label', 'Index_Soil': 'no label', 'Index_Topo': 'no label', 'Index_Acce': 'no label', 'Index_Envi': 'no label', });
lyr_LabuhanbatuUtara_17.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Suitabilit': 'no label', 'Suitabil_1': 'no label', 'Index_Clim': 'no label', 'Index_Soil': 'no label', 'Index_Topo': 'no label', 'Index_Acce': 'no label', 'Index_Envi': 'no label', });
lyr_LabuhanbatuSelatan_18.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Suitabilit': 'no label', 'Suitabil_1': 'no label', 'Index_Clim': 'no label', 'Index_Soil': 'no label', 'Index_Topo': 'no label', 'Index_Acce': 'no label', 'Index_Envi': 'no label', });
lyr_Labuhanbatu_19.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Suitabilit': 'no label', 'Suitabil_1': 'no label', 'Index_Clim': 'no label', 'Index_Soil': 'no label', 'Index_Topo': 'no label', 'Index_Acce': 'no label', 'Index_Envi': 'no label', });
lyr_KotaTebingTinggi_20.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Suitabilit': 'no label', 'Suitabil_1': 'no label', 'Index_Clim': 'no label', 'Index_Soil': 'no label', 'Index_Topo': 'no label', 'Index_Acce': 'no label', 'Index_Envi': 'no label', });
lyr_KotaTanjungBalai_21.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Suitabilit': 'no label', 'Suitabil_1': 'no label', 'Index_Clim': 'no label', 'Index_Soil': 'no label', 'Index_Topo': 'no label', 'Index_Acce': 'no label', 'Index_Envi': 'no label', });
lyr_KotaSibolga_22.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Suitabilit': 'no label', 'Suitabil_1': 'no label', 'Index_Clim': 'no label', 'Index_Soil': 'no label', 'Index_Topo': 'no label', 'Index_Acce': 'no label', 'Index_Envi': 'no label', });
lyr_KotaPematangSiantar_23.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Suitabilit': 'no label', 'Suitabil_1': 'no label', 'Index_Clim': 'no label', 'Index_Soil': 'no label', 'Index_Topo': 'no label', 'Index_Acce': 'no label', 'Index_Envi': 'no label', });
lyr_KotaPadangSidempuan_24.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Suitabilit': 'no label', 'Suitabil_1': 'no label', 'Index_Clim': 'no label', 'Index_Soil': 'no label', 'Index_Topo': 'no label', 'Index_Acce': 'no label', 'Index_Envi': 'no label', });
lyr_KotaMedan_25.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Suitabilit': 'no label', 'Suitabil_1': 'no label', 'Index_Clim': 'no label', 'Index_Soil': 'no label', 'Index_Topo': 'no label', 'Index_Acce': 'no label', 'Index_Envi': 'no label', });
lyr_KotaGunungsitoli_26.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Suitabilit': 'no label', 'Suitabil_1': 'no label', 'Index_Clim': 'no label', 'Index_Soil': 'no label', 'Index_Topo': 'no label', 'Index_Acce': 'no label', 'Index_Envi': 'no label', });
lyr_KotaBinjai_27.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Suitabilit': 'no label', 'Suitabil_1': 'no label', 'Index_Clim': 'no label', 'Index_Soil': 'no label', 'Index_Topo': 'no label', 'Index_Acce': 'no label', 'Index_Envi': 'no label', });
lyr_Karo_28.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Suitabilit': 'no label', 'Suitabil_1': 'no label', 'Index_Clim': 'no label', 'Index_Soil': 'no label', 'Index_Topo': 'no label', 'Index_Acce': 'no label', 'Index_Envi': 'no label', });
lyr_HumbangHasungdutan_29.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Suitabilit': 'no label', 'Suitabil_1': 'no label', 'Index_Clim': 'no label', 'Index_Soil': 'no label', 'Index_Topo': 'no label', 'Index_Acce': 'no label', 'Index_Envi': 'no label', });
lyr_DeliSerdang_30.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Suitabilit': 'no label', 'Suitabil_1': 'no label', 'Index_Clim': 'no label', 'Index_Soil': 'no label', 'Index_Topo': 'no label', 'Index_Acce': 'no label', 'Index_Envi': 'no label', });
lyr_Dairi_31.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Suitabilit': 'no label', 'Suitabil_1': 'no label', 'Index_Clim': 'no label', 'Index_Soil': 'no label', 'Index_Topo': 'no label', 'Index_Acce': 'no label', 'Index_Envi': 'no label', });
lyr_Asahan_32.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Suitabilit': 'no label', 'Suitabil_1': 'no label', 'Index_Clim': 'no label', 'Index_Soil': 'no label', 'Index_Topo': 'no label', 'Index_Acce': 'no label', 'Index_Envi': 'no label', });
lyr_Batubara_33.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Suitabilit': 'no label', 'Suitabil_1': 'no label', 'Index_Clim': 'no label', 'Index_Soil': 'no label', 'Index_Topo': 'no label', 'Index_Acce': 'no label', 'Index_Envi': 'no label', });
lyr_BatasKabupatenSumateraUtara_34.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_BatasKabupatenSumateraUtara_34.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});