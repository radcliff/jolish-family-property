var parcels;

parcels = {
  "type": "FeatureCollection",
  "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },

  "features": [
    { "type": "Feature", "properties": { "longitude": -122.405801, "latitude": 37.790342, "block\/lot": "286001", "address": null, "zipcode": null }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -122.405896214309365, 37.79023578922169 ], [ -122.405934122933346, 37.790419823120516 ], [ -122.405705193251151, 37.790449009639886 ], [ -122.405667284044412, 37.790264975686753 ], [ -122.405896214309365, 37.79023578922169 ] ] ] } },
    { "type": "Feature", "properties": { "longitude": -122.413270, "latitude": 37.780700, "block\/lot": "351113", "address": null, "zipcode": null },  "geometry": { "type": "Polygon", "coordinates": [ [ [ -122.413056935680729, 37.78067462304432 ], [ -122.413240791601055, 37.780529243908362 ], [ -122.413483645576846, 37.780726059941983 ], [ -122.413298173007576, 37.780870128284263 ], [ -122.413056935680729, 37.78067462304432 ] ] ] } },
    { "type": "Feature", "properties": { "longitude": -122.437804, "latitude": 37.796508, "block\/lot": "0538020B", "address": null, "zipcode": null }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -122.437810187037968, 37.79631571702209 ], [ -122.437885599119198, 37.79668856588961 ], [ -122.437797466323417, 37.796699779809153 ], [ -122.437722055832054, 37.796326931768206 ], [ -122.437810187037968, 37.79631571702209 ] ] ] } },
    { "type": "Feature", "properties": { "longitude": -122.421120, "latitude": 37.791658, "block\/lot": "622004", "address": null, "zipcode": null }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -122.421230206277315, 37.79174221636022 ], [ -122.421048241297001, 37.791765343075234 ], [ -122.421009547483777, 37.79157425441975 ], [ -122.421191548547228, 37.791551311016121 ], [ -122.421230206277315, 37.79174221636022 ] ] ] } },
    { "type": "Feature", "properties": { "longitude": -122.466490, "latitude": 37.762512, "block\/lot": "1764017", "address": "1381 9th Avenue", "zipcode": null }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -122.466651611211546, 37.762470625720177 ], [ -122.466656400375825, 37.762539178883216 ], [ -122.466328261505893, 37.762553588424119 ], [ -122.466323472595747, 37.76248503344631 ], [ -122.4665134474089, 37.76247669181879 ], [ -122.466651611211546, 37.762470625720177 ] ] ] } },
    { "type": "Feature", "properties": { "longitude": -122.460285, "latitude": 37.755464, "block\/lot": "2676021", "address": "121 Devonshire Way", "zipcode": 94131 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -122.460221316752992, 37.755365618276237 ], [ -122.46040647368801, 37.755455276695464 ], [ -122.460385263101301, 37.755575764181458 ], [ -122.460133190864738, 37.755446757119628 ], [ -122.460150922093618, 37.755428680074296 ], [ -122.460162452544637, 37.755417454557772 ], [ -122.460174227877758, 37.755406389891874 ], [ -122.460186244855578, 37.755395492439028 ], [ -122.460198500002932, 37.755384759553287 ], [ -122.460221316752992, 37.755365618276237 ] ] ] } },
    { "type": "Feature", "properties": { "longitude": -122.451861, "latitude": 37.749826, "block\/lot": "2833003", "address": "19 Starview Way", "zipcode": null }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -122.451694657332965, 37.749780887088953 ], [ -122.452042682780714, 37.749778536576116 ], [ -122.452042229941256, 37.749869172439766 ], [ -122.451667094499541, 37.749871706062407 ], [ -122.451671277384833, 37.749852966956105 ], [ -122.451673935204468, 37.749842538993832 ], [ -122.451676822150532, 37.749832148693329 ], [ -122.45167993720689, 37.7498218005775 ], [ -122.451683279309805, 37.749811497367631 ], [ -122.451686847395706, 37.749801241784951 ], [ -122.451690640400997, 37.749791036550803 ], [ -122.451694657332965, 37.749780887088953 ] ] ] } },
    { "type": "Feature", "properties": { "longitude": -122.450101, "latitude": 37.749702, "block\/lot": "2823B019", "address": "26 Skyview Way", "zipcode": 94131 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -122.450235677189383, 37.749617802956706 ], [ -122.450204891024839, 37.749785876746905 ], [ -122.449984024782253, 37.749789531639202 ], [ -122.449984171822678, 37.749759326374523 ], [ -122.449983653821462, 37.749729124003125 ], [ -122.449982473261343, 37.749698932594981 ], [ -122.44998062931586, 37.749668763879711 ], [ -122.449976463594695, 37.749622092455965 ], [ -122.450235677189383, 37.749617802956706 ] ] ] } },
    { "type": "Feature", "properties": { "longitude": -122.450315, "latitude": 37.750561, "block\/lot": "2823C006", "address": "55 Skyview Way", "zipcode": 94131 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -122.450158852227744, 37.750516310112182 ], [ -122.450481870789503, 37.750514132953093 ], [ -122.450481807550304, 37.750604765924422 ], [ -122.450138316364431, 37.750607081790704 ], [ -122.450148479799992, 37.750559790233908 ], [ -122.450158852227744, 37.750516310112182 ] ] ] } },
    { "type": "Feature", "properties": { "longitude": -122.452410, "latitude": 37.749767, "block\/lot": "2834014", "address": "319 Panorama Drive", "zipcode": 94131 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -122.452219343502563, 37.749721443648475 ], [ -122.452599824975465, 37.749721231361207 ], [ -122.452600967338114, 37.749811860634829 ], [ -122.452220485401114, 37.749812072925771 ], [ -122.452219343502563, 37.749721443648475 ] ] ] } },
    { "type": "Feature", "properties": { "longitude": -122.452241, "latitude": 37.753902, "block\/lot": "2787009", "address": "672 Panorama Drive", "zipcode": 94131 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -122.452219100280146, 37.753757158752663 ], [ -122.452366694054845, 37.75400824157343 ], [ -122.452262393426096, 37.754046104107267 ], [ -122.45211583004496, 37.753794655319552 ], [ -122.452219100280146, 37.753757158752663 ] ] ] } },
    { "type": "Feature", "properties": { "longitude": -122.451925, "latitude": 37.753541, "block\/lot": "2791004", "address": "661 Panorama Drive", "zipcode": 94131 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -122.451875581658442, 37.753411928862839 ], [ -122.451907378691089, 37.753400319836459 ], [ -122.452048537251486, 37.753643934810654 ], [ -122.451944806122754, 37.753681599282103 ], [ -122.451801952232685, 37.753438812556915 ], [ -122.451875581658442, 37.753411928862839 ] ] ] } },
    { "type": "Feature", "properties": { "longitude": -122.453198, "latitude": 37.731799, "block\/lot": "3095055", "address": "798 Monterey Boulevard 1A", "zipcode": 94127 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -122.453330876016409, 37.731935208574399 ], [ -122.453067946004978, 37.731936412318518 ], [ -122.453065158403561, 37.73166281065533 ], [ -122.453329602447951, 37.731661698058147 ], [ -122.453330876016409, 37.731935208574399 ] ] ] } },
    { "type": "Feature", "properties": { "longitude": -122.420141, "latitude": 37.765330, "block\/lot": "3554008", "address": "3012 16th Street", "zipcode": 94103 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -122.420229454770123, 37.765127652320977 ], [ -122.420258409953846, 37.765430043364717 ], [ -122.420172171753549, 37.765435252307618 ], [ -122.420185282390648, 37.765572173611666 ], [ -122.420074335379084, 37.765578876375237 ], [ -122.420048002749482, 37.765303870283255 ], [ -122.420032270536268, 37.765139563066626 ], [ -122.420229454770123, 37.765127652320977 ] ] ] } },
    { "type": "Feature", "properties": { "longitude": -122.420295, "latitude": 37.765372, "block\/lot": "3554010", "address": "3030 16th Street", "zipcode": 94103 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -122.420350187500702, 37.765120359187343 ], [ -122.42037652234194, 37.765395366102993 ], [ -122.420392255347394, 37.765559672365498 ], [ -122.420185282390648, 37.765572173611666 ], [ -122.420172171753549, 37.765435252307618 ], [ -122.420258409953846, 37.765430043364717 ], [ -122.420229454770123, 37.765127652320977 ], [ -122.420350187500702, 37.765120359187343 ] ] ] } },
    { "type": "Feature", "properties": { "longitude": -122.420436, "latitude": 37.765474, "block\/lot": "3554053", "address": "83 Weise Street", "zipcode": 94103 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -122.420480007385279, 37.765389113574066 ], [ -122.420495740664876, 37.765553421624666 ], [ -122.420392255347394, 37.765559672365498 ], [ -122.42037652234194, 37.765395366102993 ], [ -122.420480007385279, 37.765389113574066 ] ] ] } },
    { "type": "Feature", "properties": { "longitude": -122.419046, "latitude": 37.763856, "block\/lot": "3570048", "address": "2073 Mission Street", "zipcode": 94110 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -122.419043512351351, 37.763822144225095 ], [ -122.419404236664334, 37.763800357783161 ], [ -122.419410790534329, 37.763868817606358 ], [ -122.419048596984823, 37.763890694674075 ], [ -122.418687872128956, 37.763912480027422 ], [ -122.418681318897981, 37.763844019263686 ], [ -122.418784803081152, 37.763837769103539 ], [ -122.418871039524376, 37.763832561174119 ], [ -122.419043512351351, 37.763822144225095 ] ] ] } },
    { "type": "Feature", "properties": { "longitude": -122.412687, "latitude": 37.752814, "block\/lot": "3640070", "address": "3036 24th Street", "zipcode": 94110 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -122.412720205084014, 37.752667587356825 ], [ -122.412740887098906, 37.752883850770793 ], [ -122.412747629076307, 37.752954338372206 ], [ -122.412654297423643, 37.752959950078029 ], [ -122.412626882985563, 37.752673291717578 ], [ -122.412720205084014, 37.752667587356825 ] ] ] } },
    { "type": "Feature", "properties": { "longitude": -122.416879, "latitude": 37.755706, "block\/lot": "3615010", "address": "1096 South Van Ness Ave", "zipcode": 94110 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -122.41704082025619, 37.755765474578268 ], [ -122.416730394567722, 37.755784149126761 ], [ -122.416717292024217, 37.755647227206737 ], [ -122.417027717143952, 37.755628552692293 ], [ -122.41704082025619, 37.755765474578268 ] ] ] } },
    { "type": "Feature", "properties": { "longitude": -122.392176, "latitude": 37.786063, "block\/lot": "3765126", "address": "425 1st Street #1902", "zipcode": 94015 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -122.392058736557658, 37.786598941570951 ], [ -122.391873812632426, 37.786451981855016 ], [ -122.391772412447281, 37.786292293160315 ], [ -122.392059618400253, 37.786065246115726 ], [ -122.391724560593488, 37.785798974303752 ], [ -122.392061666198217, 37.785532477267594 ], [ -122.392732950211666, 37.786065944688417 ], [ -122.392444879202657, 37.786293679593449 ], [ -122.39239584457134, 37.786332442717111 ], [ -122.392058736557658, 37.786598941570951 ] ] ] } },
    { "type": "Feature", "properties": { "longitude": -122.410539, "latitude": 37.752482, "block\/lot": "4269029", "address": "2917 24th Street", "zipcode": 94110 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -122.410479324299743, 37.752345234381799 ], [ -122.410572452743608, 37.752339690767499 ], [ -122.410599063442518, 37.752618712974417 ], [ -122.41050594132048, 37.752624339413465 ], [ -122.410491859712309, 37.752476683053544 ], [ -122.410479324299743, 37.752345234381799 ] ] ] } },
    { "type": "Feature", "properties": { "longitude": -122.433508, "latitude": 37.741936, "block\/lot": "7537016", "address": "2432 Castro Street", "zipcode": 94131 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -122.433686136028641, 37.741890756340503 ], [ -122.433692815603919, 37.741959210141275 ], [ -122.433330766076693, 37.741981484811099 ], [ -122.433324087990741, 37.741913031872272 ], [ -122.433686136028641, 37.741890756340503 ] ] ] } }
  ]
}