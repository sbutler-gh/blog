<!-- svelte-ignore a11y-missing-attribute -->
<script>
  import { object_without_properties } from "svelte/internal";
import PlainSubscribe from "/src/lib/PlainSubscribe.svelte";
import ShareButton from "/src/lib/ShareButton.svelte";
import TopMatter from "/src/lib/TopMatter.svelte";  

let title = "Native Plant Nurseries Near You";
let description = "Find a native plant his holiday season, and celebrate it.  We need them.";
let og_image = "/native-tree-og-3.jpg";
let local_url = "native-plant-seed-nursery-directory"
let domain = "https://sambutler.us"
let full_url = {domain} + "/" + {local_url};
</script>
<html>
<head>
<script src='https://unpkg.com/@turf/turf@6/turf.min.js'></script>
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
crossorigin=""/>
 <!-- Make sure you put this AFTER Leaflet's CSS -->
</head>
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
crossorigin=""></script>
<script>
console.log('loading geojson');

let geojson = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "3E Tree Farms and Wetland Nursery Inc",
        "Address": "248 CR, Loxahatchee, FL, 33470",
        "City": "Loxahatchee",
        "State": "FL",
        "Zip Code": "33470",
        "Country": "USA",
        "Contact": "Irene Goltzena",
        "Phone": "561.718.3069",
        "Fax": "888.773.4458",
        "Email": "native3etrees@aol.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail\nInternet\nContract",
        "Product": "Plants",
        "Latitude": "26.726784",
        "Longitude": "-80.320037",
        "County": "Palm Beach County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.320037,
          26.726784
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "5 Star Trees LTD ",
        "Address": "112th Street, Foothills County, AB, T1V 1N3",
        "City": "Foothills County",
        "State": "AB",
        "Zip Code": "T1V 1N3",
        "Country": "Canada",
        "Contact": "Jordan Peoples",
        "Phone": "403.256.2089",
        "Email": "info@5startrees.com",
        "Website": "https://www.5startrees.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nInternet",
        "Product": "Plants",
        "Latitude": "39.657355",
        "Longitude": "-76.371332",
        "County": "Harford County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.371332,
          39.657355
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "A Great SW Saguaro and Tree | Arizona Native Plant Specialist",
        "Address": "31632 N 43rd St, Cave Creek, AZ, 85331",
        "City": "Cave Creek",
        "State": "AZ",
        "Zip Code": "85331",
        "Country": "USA",
        "Contact": "Bart Chrader",
        "Phone": "480.483.8355",
        "Fax": "480.488.3233",
        "Email": "gswcactus@gmail.com",
        "Website": "https://gswcactus.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "33.773041",
        "Longitude": "-111.989587",
        "Street": "N 43rd St",
        "County": "Maricopa County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.989587,
          33.773041
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "A Quality Plant",
        "Address": "1998 19th Ave NE, Ruskin, FL, 33570",
        "City": "Ruskin",
        "State": "FL",
        "Zip Code": "33570",
        "Country": "USA",
        "Contact": "Rob Pittman",
        "Phone": "866.998.9393",
        "Fax": "813.645.8268",
        "Email": "robp@aqualityplant.com",
        "Website": "http://www.aqualityplant.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "27.735293",
        "Longitude": "-82.406798",
        "Street": "19th Ave NE",
        "County": "Hillsborough County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.406798,
          27.735293
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "A Touch O' Green Landscape & Gardens LLC",
        "Address": "7205 Holly Fern Cove, Austin, TX, 78750",
        "City": "Austin",
        "State": "TX",
        "Zip Code": "78750",
        "Country": "USA",
        "Contact": "Bridget",
        "Phone": "512.736.4859",
        "Fax": "512.349.2712",
        "Email": "toglg@sbcglobal.net",
        "Website": "http://www.touchogreenlandscapes.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "30.379116",
        "Longitude": "-97.797237",
        "Street": "Holly Fern Cv",
        "County": "Travis County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.797237,
          30.379116
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "A Waldbart & Sons Nursery",
        "Address": "5517 N Hwy 67, Florissant, MO, 63034",
        "City": "Florissant",
        "State": "MO",
        "Zip Code": "63034",
        "Country": "USA",
        "Contact": "Jack Cunningham",
        "Phone": "314.741.3121",
        "Fax": "314.741.3825",
        "Email": "Waldbartnursery@sbcglobal.net",
        "Website": "http://www.waldbartnursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "38.823447",
        "Longitude": "-90.256308",
        "Street": "N Highway 67th St",
        "County": "St. Louis County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.256308,
          38.823447
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "ALCLA Native Plants",
        "Address": "253147 Bearspaw Rd, Calgary, AB, T3L 2P5",
        "City": "Calgary",
        "State": "AB",
        "Zip Code": "T3L 2P5",
        "Country": "Canada",
        "Contact": "Latifa Pelletier-Ahmed or Ben Hartney",
        "Phone": "403.889.4795",
        "Email": "alclanativeplants@gmail.com",
        "Email 2": "ALCLA@telus.net",
        "Website": "http://www.alclanativeplants.com",
        "Nursery Type": "Private",
        "Business Type": "Retail\nMail\nContract",
        "Product": "Plants\nSeeds\nServices",
        "Established": "1992",
        "Hours": "Visits by appointment only, in office M-F 9-5",
        "Latitude": "0",
        "Longitude": "0"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          0,
          0
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "AT James Tree Company",
        "Address": "3562 W Wapato Rd, Wapato, WA, 98951",
        "City": "Wapato",
        "State": "WA",
        "Zip Code": "98951",
        "Country": "USA",
        "Contact": "Cindy James",
        "Phone": "509.728.8535",
        "Fax": "509.877.7132",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "46.448108",
        "Longitude": "-120.503473",
        "Street": "W Wapato Rd",
        "County": "Yakima County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.503473,
          46.448108
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "ATL Urban Farms",
        "Address": "6976 Frix Rd, Cumming, GA, 30028",
        "City": "Cumming",
        "State": "GA",
        "Zip Code": "30028",
        "Country": "USA",
        "Contact": "Bret Bowlin",
        "Phone": "770.886.9334",
        "Fax": "770.886.5170",
        "Email": "mountainvalley@bellsouth.net",
        "Website": "https://atlurbanfarms.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "34.269676",
        "Longitude": "-84.249275",
        "Street": "Frix Rd",
        "County": "Forsyth County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.249275,
          34.269676
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "ATS Partners LLC",
        "Address": "2514 Vada Rd, Bainbridge, GA, 39817",
        "City": "Bainbridge",
        "State": "GA",
        "Zip Code": "39817",
        "Country": "USA",
        "Contact": "Chuck Whittaker",
        "Phone": "229.246.2662",
        "Fax": "229.248.1108",
        "Email": "cwhittakerjr@yahoo.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants\nSeeds",
        "Established": "1997",
        "Hours": "7-3:30",
        "Latitude": "30.930006",
        "Longitude": "-84.531131",
        "Street": "Vada Rd",
        "County": "Decatur County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.531131,
          30.930006
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Abbott's Nursery",
        "Address": "2781 Scio Church Rd, Ann Arbor, MI, 48103",
        "City": "Ann Arbor",
        "State": "MI",
        "Zip Code": "48103",
        "Country": "USA",
        "Phone": "734.665.8733",
        "Website": "http://www.abbottsnursery.com/",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "42.254714",
        "Longitude": "-83.785132",
        "Street": "Scio Church Rd",
        "County": "Washtenaw County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.785132,
          42.254714
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Abraczinskas Nurseries Inc",
        "Address": "346 Numidia Dr, Catawissa, PA, 17820",
        "City": "Catawissa",
        "State": "PA",
        "Zip Code": "17820",
        "Country": "USA",
        "Contact": "Peter Abraczinskas",
        "Phone": "570.356.2323",
        "Fax": "570.356.2366",
        "Email": "abs@sunlink.net",
        "Email 2": "info@abraczinskas.com",
        "Website": "https://www.facebook.com/Abraczinskas-Nurseries-Inc-245335685501328/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nMail",
        "Product": "Plants",
        "Latitude": "40.925666",
        "Longitude": "-76.442326",
        "Street": "Numidia Dr",
        "County": "Columbia County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.442326,
          40.925666
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Action Theory Landscape and Nursery",
        "Address": "22401 SW 130 Ave, Goulds, FL, 33170",
        "City": "Goulds",
        "State": "FL",
        "Zip Code": "33170",
        "Country": "USA",
        "Contact": "Claude",
        "Phone": "305.257.2244",
        "Fax": "305.257.5438",
        "Email": "croatta@yahoo.com",
        "Website": "http://www.actiontheorynursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "25.558799",
        "Longitude": "-80.402833",
        "Street": "SW 130th Ave",
        "County": "Miami-Dade County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.402833,
          25.558799
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Adkins Arboretum",
        "Address": "12610 Eveland Rd, Ridgely, MD, 21660",
        "City": "Ridgely",
        "State": "MD",
        "Zip Code": "21660",
        "Country": "USA",
        "Contact": "Joann Healey",
        "Phone": "410.634.2847",
        "Fax": "410.634.2878",
        "Email": "info@adkinsarboretum.org",
        "Website": "http://www.adkinsarboretum.org",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Established": "1985",
        "Hours": "M-Sun 10-4",
        "Latitude": "38.955415",
        "Longitude": "-75.938035",
        "Street": "Eveland Rd",
        "County": "Caroline County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.938035,
          38.955415
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Agrecol Native Nursery",
        "Address": "10101 N Casey Rd, Evansville, WI, 53536",
        "City": "Evansville",
        "State": "WI",
        "Zip Code": "53536",
        "Country": "USA",
        "Phone": "608.223.3571",
        "Fax": "608.884.4640",
        "Email": "ecosolutions@agrecol.com",
        "Website": "http://www.agrecol.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail\nInternet\nContract",
        "Product": "Plants\nSeeds",
        "Established": "1991",
        "Hours": "8:00AM-5:00PM  M-F",
        "Latitude": "42.818921",
        "Longitude": "-89.191715",
        "Street": "N Casey Rd",
        "County": "Rock County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.191715,
          42.818921
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "AgriCycle Farms",
        "Address": "PO Box 1656, Delta Junction, AK, 99737-1656",
        "City": "Delta Junction",
        "State": "AK",
        "Zip Code": "99737-1656",
        "Country": "USA",
        "Phone": "907.895.2076",
        "Fax": "906.895.2076",
        "Email": "mikepurv@wildak.net",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "64.03778",
        "Longitude": "-145.73222",
        "County": "Southeast Fairbanks Census Area"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -145.73222,
          64.03778
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Agua Fria Nursery",
        "Address": "1409 Agua Fria St, Santa Fe, NM, 87505-0907",
        "City": "Santa Fe",
        "State": "NM",
        "Zip Code": "87505-0907",
        "Country": "USA",
        "Contact": "Bob Pennington",
        "Phone": "505.983.4831",
        "Fax": "505.983.3593",
        "Email": "aguafrianr@aol.com",
        "Website": "https://aguafrianursery.com/",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "35.679941",
        "Longitude": "-105.966803",
        "Street": "Agua Fria St",
        "County": "Santa Fe County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -105.966803,
          35.679941
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Ahakhav Tribal Preserve",
        "Address": "25401 Rodeo Rd, Parker, AZ, 85344",
        "City": "Parker",
        "State": "AZ",
        "Zip Code": "85344",
        "Country": "USA",
        "Contact": "Joe Sims",
        "Phone": "928.669.2664",
        "Fax": "928.669.8024",
        "Email": "joe.sims@crit-nsn.gov",
        "Email 2": "charley.land@crit-nsn.gov",
        "Nursery Type": "Tribal",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "34.131089",
        "Longitude": "-114.322084",
        "Street": "Rodeo Rd",
        "County": "LA Paz County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -114.322084,
          34.131089
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Aikane Nursery",
        "Address": "PO Box 459, Kapa'au, HI, 96755",
        "City": "Kapa'au",
        "State": "HI",
        "Zip Code": "96755",
        "Country": "USA",
        "Contact": "Becky Tarties",
        "Phone": "808.889.5906",
        "Fax": "808.889.0032",
        "Email": "info@aikanenursery.com",
        "Website": "http://aikanenursery.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "20.226101",
        "Longitude": "-155.776957",
        "County": "Hawaii County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -155.776957,
          20.226101
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Aileen's Nursery - Po'o Wai U",
        "Address": "942 W Kawailani St, Hilo, HI, 96720",
        "City": "Hilo",
        "State": "HI",
        "Zip Code": "96720",
        "Country": "USA",
        "Contact": "Aileen Yeh",
        "Phone": "808.936.2671",
        "Email": "ayeh@hawaii.rr.com",
        "Website": "https://hawaiiwoodproducts.com/vendor/aileens-nursery-hawaii-agriculture-research-center/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "19.684593",
        "Longitude": "-155.094983",
        "Street": "W Kawailani St",
        "County": "Hawaii County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -155.094983,
          19.684593
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Alaska Dept of Natural Resources - Plant Materials Center Forest Nursery",
        "Address": "5310 Bodenburg Spur Rd, Palmer, AK, 99645",
        "City": "Palmer",
        "State": "AK",
        "Zip Code": "99645",
        "Country": "USA",
        "Contact": "Alicia Holladay",
        "Phone": "907.745.4469",
        "Fax": "907.746.1568",
        "Email": "alicia.holladay@alaska.gov",
        "Website": "http://www.plants.alaska.gov/nativeplantindex.htm",
        "Nursery Type": "State",
        "Product": "Plants\nSeeds",
        "Latitude": "61.521763",
        "Longitude": "-149.084623",
        "Street": "S S Bodenburg Spur Spur",
        "County": "Matanuska-Susitna Borough"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -149.084623,
          61.521763
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Alaska Greenhouses Inc",
        "Address": "1301 Muldoon Rd, Anchorage, AK, 99504",
        "City": "Anchorage",
        "State": "AK",
        "Zip Code": "99504",
        "Country": "USA",
        "Phone": "907.333.6970",
        "Fax": "907.333.8330",
        "Website": "https://www.facebook.com/AlaskaGreenhouse/",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "61.209811",
        "Longitude": "-149.733441",
        "Street": "Muldoon Rd",
        "County": "Anchorage Municipality"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -149.733441,
          61.209811
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Alberta Nurseries and Seeds Ltd",
        "Address": "Hwy 587, Bowden, AB, T0M 0K0",
        "City": "Bowden",
        "State": "AB",
        "Zip Code": "T0M 0K0",
        "Country": "Canada",
        "Contact": "Chris Bergeren",
        "Phone": "403.224.3545",
        "Fax": "403.224.2455",
        "Email": "dectool@telusplanet.net",
        "Website": "http://marketland.net/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants\nSeeds",
        "Latitude": "0",
        "Longitude": "0"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          0,
          0
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Aldrich Berry Farm & Nursery Inc",
        "Address": "190 Aldrich Rd, Mossyrock, WA, 98564",
        "City": "Mossyrock",
        "State": "WA",
        "Zip Code": "98564",
        "Country": "USA",
        "Contact": "Glenn Aldrich",
        "Phone": "360.983.3138",
        "Fax": "360.983.8588",
        "Email": "galdrich@tds.net",
        "Website": "http://www.aldrichberryfarm.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nContract",
        "Product": "Plants",
        "Latitude": "46.528657",
        "Longitude": "-122.501442",
        "Street": "Aldrich Rd",
        "County": "Lewis County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.501442,
          46.528657
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Aldridge Nursery Inc",
        "Address": "10440 Jarratt Rd, Atascosa, TX, 78002",
        "City": "Atascosa",
        "State": "TX",
        "Zip Code": "78002",
        "Country": "USA",
        "Contact": "Tom",
        "Phone": "210.622.3491",
        "Fax": "210.622.5327",
        "Email": "aldridge.nursery99@gmail.com",
        "Website": "https://www.aldridgenurseryinc.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "29.281272",
        "Longitude": "-98.698644",
        "Street": "Jarratt Rd",
        "County": "Bexar County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -98.698644,
          29.281272
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Alexander Landscaping & Plant Farm",
        "Address": "830 S Flamingo Rd, Davie, FL, 33325",
        "City": "Davie",
        "State": "FL",
        "Zip Code": "33325",
        "Country": "USA",
        "Contact": "Bryan Tozzie",
        "Phone": "954.472.5039",
        "Email": "alexfarm@comcast.net",
        "Website": "http://www.alexfarm.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail",
        "Product": "Plants",
        "Latitude": "26.112318",
        "Longitude": "-80.313646",
        "Street": "S Flamingo Rd",
        "County": "Broward County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.313646,
          26.112318
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "All Native Garden Center & Plant Nursery",
        "Address": "300 Center Rd, Fort Myers, FL, 33907-1513",
        "City": "Fort Myers",
        "State": "FL",
        "Zip Code": "33907-1513",
        "Country": "USA",
        "Contact": "John Sibley",
        "Phone": "239.939.9663",
        "Fax": "239.936.8504",
        "Email": "nolawn@earthlink.net",
        "Website": "http://www.nolawn.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "26.578625",
        "Longitude": "-81.863608",
        "Street": "Center Rd",
        "County": "Lee County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.863608,
          26.578625
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Allendan Seed",
        "Address": "1966 175th Ln, Winterset, IA, 50273-8500",
        "City": "Winterset",
        "State": "IA",
        "Zip Code": "50273-8500",
        "Country": "USA",
        "Contact": "Dan Allen",
        "Phone": "515.462.1241",
        "Fax": "515.462.4084",
        "Email": "allendan@allendanseed.com",
        "Website": "http://www.allendanseed.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Seeds",
        "Established": "1980",
        "Hours": "M-F 8-5",
        "Latitude": "41.395282",
        "Longitude": "-94.058729",
        "Street": "175th Ln",
        "County": "Madison County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.058729,
          41.395282
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Alpha Nurseries",
        "Address": "3737 65th St, Holland, MI, 49423",
        "City": "Holland",
        "State": "MI",
        "Zip Code": "49423",
        "Country": "USA",
        "Contact": "Jeff Busscher",
        "Phone": "269.857.7804",
        "Fax": "269.857.8162",
        "Email": "info@alphanurseries.com",
        "Website": "http://www.alphanurseries.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Hours": "7:30-5:00 M-F, some Saturdays in Spring",
        "Latitude": "42.690856",
        "Longitude": "-86.182546",
        "Street": "65th St",
        "County": "Allegan County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.182546,
          42.690856
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Alpha Nursery Inc",
        "Address": "5050 Hazel Green Rd NE, Salem, OR, 97305",
        "City": "Salem",
        "State": "OR",
        "Zip Code": "97305",
        "Country": "USA",
        "Contact": "Jamie ",
        "Phone": "503.390.1286",
        "Phone 2": "800.293.1286",
        "Fax": "503.390.2639",
        "Email": "jamie@alphanursery.com",
        "Website": "http://www.alphanursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "45.00228",
        "Longitude": "-122.957008",
        "Street": "Hazelgreen Rd NE",
        "County": "Marion County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.957008,
          45.00228
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Alpine Forestry",
        "Address": "3070 Rasmussen Rd., Suite 230, Park City, UT, 84098",
        "City": "Suite 230",
        "State": "UT",
        "Zip Code": "84098",
        "Country": "USA",
        "Contact": "David Telian",
        "Phone": "435.400.4154",
        "Phone 2": "530.305.2980",
        "Email": "david.alpineforestry@gmail.com",
        "Website": "https://www.alpineforestryutah.com/",
        "Latitude": "40.752283",
        "Longitude": "-111.568645",
        "Street": "Rasmussen Rd",
        "County": "Summit County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.568645,
          40.752283
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Althouse Nursery",
        "Address": "8576 Rogue River Hwy, Grants Pass, OR, 97527",
        "City": "Grants Pass",
        "State": "OR",
        "Zip Code": "97527",
        "Country": "USA",
        "Contact": "Barbara or Graig Delbol",
        "Phone": "541.592.2395",
        "Email": "plants@althousenursery.com",
        "Email 2": "althousenursery@frontiernet.net",
        "Website": "http://www.althousenursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nContract",
        "Product": "Plants",
        "Latitude": "42.431797",
        "Longitude": "-123.18023",
        "Street": "Rogue River Hwy",
        "County": "Jackson County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.18023,
          42.431797
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Amanda's Garden",
        "Address": "8030 Story Rd, Dansville, NY, 14437",
        "City": "Dansville",
        "State": "NY",
        "Zip Code": "14437",
        "Country": "USA",
        "Contact": "Ellen Folts",
        "Phone": "585.750.6288",
        "Phone 2": "585.699.2275",
        "Email": "amandasgarden@frontiernet.net",
        "Website": "http://www.amandasnativeplants.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail",
        "Product": "Plants",
        "Latitude": "42.636068",
        "Longitude": "-77.653945",
        "Street": "Story Rd",
        "County": "Livingston County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.653945,
          42.636068
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "American Grass Seed Producers",
        "Address": "PO Box 268, Tangent, OR, 97389",
        "City": "Tangent",
        "State": "OR",
        "Zip Code": "97389",
        "Country": "USA",
        "Contact": "Charity Morris",
        "Phone": "541.926.4611",
        "Fax": "541.926.5038",
        "Email": "charitym@agsp.us",
        "Website": "http://agsp.us",
        "Nursery Type": "Private",
        "Product": "Seeds",
        "Latitude": "44.533934",
        "Longitude": "-123.081664",
        "County": "Linn County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.081664,
          44.533934
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "American Native Nursery",
        "Address": "2191 Hillcrest Rd, Quakertown, PA, 18951",
        "City": "Quakertown",
        "State": "PA",
        "Zip Code": "18951",
        "Country": "USA",
        "Contact": "Mark Brownlee",
        "Phone": "855.752.6862",
        "Fax": "855.752.6862",
        "Email": "contact@AmericanNativeNursery.com",
        "Website": "http://archewild.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "40.423688",
        "Longitude": "-75.386735",
        "Street": "Hillcrest Rd",
        "County": "Bucks County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.386735,
          40.423688
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "American Native Plants",
        "Address": "7500 Marshy Point Rd, Middle River, MD, 21220",
        "City": "Middle River",
        "State": "MD",
        "Zip Code": "21220",
        "Country": "USA",
        "Contact": "Roy List or Michael McConnell",
        "Phone": "410.529.0552",
        "Fax": "410.529.3883",
        "Email": "sales@americannativeplants.com",
        "Website": "http://www.americannativeplants.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nContract",
        "Product": "Plants",
        "Latitude": "39.349479",
        "Longitude": "-76.374693",
        "Street": "Marshy Point Rd",
        "County": "Baltimore County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.374693,
          39.349479
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "American Native Products",
        "Address": "3455 Johns Rd, Scottsmoor, FL, 32775",
        "City": "Scottsmoor",
        "State": "FL",
        "Zip Code": "32775",
        "Country": "USA",
        "Contact": "Louis or Barbara",
        "Phone": "321.383.1967",
        "Fax": "321.383.4150",
        "Email": "buzbeefalo@yahoo.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "28.753823",
        "Longitude": "-80.865324",
        "Street": "Johns Rd",
        "County": "Brevard County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.865324,
          28.753823
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "American Samoa Community College - Land Grant Forestry Extension",
        "Address": "Mesepa, Western, American Samoa, 96799",
        "City": "Western",
        "State": "American Samoa",
        "Zip Code": "96799",
        "Country": "American Samoa",
        "Contact": "Mary Taufetee",
        "Phone": "684.699.1394",
        "Fax": "684.699.5011",
        "Email": "marytaufetee@yahoo.com",
        "Website": "http://www.amsamoa.edu/institution/cnr.html",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "-14.273749",
        "Longitude": "-170.701384",
        "County": "Eastern District"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -170.701384,
          -14.273749
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "AmericanMeadows com",
        "Address": "223 Ave D Ste 30, Williston, VT, 05495",
        "City": "Williston",
        "State": "VT",
        "Zip Code": "05495",
        "Country": "USA",
        "Contact": "Mike Lizotte",
        "Phone": "802.951.5812",
        "Fax": "802.951.9089",
        "Email": "mike@americanmeadows.com",
        "Website": "http://www.americanmeadows.com/",
        "Nursery Type": "Private",
        "Product": "Seeds",
        "Latitude": "44.465005",
        "Longitude": "-73.121461",
        "Street": "Ave D",
        "County": "Chittenden County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.121461,
          44.465005
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Amy Greenwell Ethnobotanical Gardens Nursery",
        "Address": "82 6188 Mamalahoa Hwy, Captain Cook, HI, 96704",
        "City": "Captain Cook",
        "State": "HI",
        "Zip Code": "96704",
        "Country": "USA",
        "Contact": "Brian Kiyabu",
        "Phone": "808.323.3318",
        "Fax": "808.323.2394",
        "Email": "brian.kiyabu@bishopmuseum.org",
        "Website": "http://www.bishopmuseum.org/greenwell/",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "19.724027",
        "Longitude": "-155.058897",
        "Street": "Keaa St",
        "County": "Hawaii County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -155.058897,
          19.724027
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Angelica Nurseries Inc",
        "Address": "11129 Locust Grove Rd, Kennedyville, MD, 21645",
        "City": "Kennedyville",
        "State": "MD",
        "Zip Code": "21645",
        "Country": "USA",
        "Contact": "Kim Usilton",
        "Phone": "410.928.3111",
        "Fax": "410.928.3044",
        "Email": "kusilton@angelicanurseries.com",
        "Email 2": "customerservice@angelicanurseries.com",
        "Website": "http://angelicanurseries.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "39.290556",
        "Longitude": "-75.913798",
        "Street": "Locust Grove Rd",
        "County": "Kent County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.913798,
          39.290556
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Anna Nursery",
        "Address": "PO Box 1, Cobden, IL, 62920",
        "City": "Cobden",
        "State": "IL",
        "Zip Code": "62920",
        "Country": "USA",
        "Contact": "Jason Tabor",
        "Phone": "618.893.2124",
        "Fax": "618.893.2125",
        "Email": "jason@annanursery.com",
        "Website": "http://www.annanursery.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "37.526817",
        "Longitude": "-89.219012",
        "County": "Union County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.219012,
          37.526817
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Antelope Valley Resource Conservation District Tree Nursery & Arboretum",
        "Address": "10148 W Ave I, Lancaster, CA, 93536",
        "City": "Lancaster",
        "State": "CA",
        "Zip Code": "93536",
        "Country": "USA",
        "Contact": "Tom Florence",
        "Phone": "661.942.7306",
        "Fax": "661.942.3055",
        "Email": "treesbyme@excite.com",
        "Email 2": "avrcd@carcd.org",
        "Website": "http://www.avrcd.org",
        "Nursery Type": "Federal",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "34.703607",
        "Longitude": "-118.310296",
        "Street": "W Ave I",
        "County": "Los Angeles County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.310296,
          34.703607
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Apalachee Native Nursery",
        "Address": "12 Hayfield Spur, Monticello, FL, 32344",
        "City": "Monticello",
        "State": "FL",
        "Zip Code": "32344",
        "Country": "USA",
        "Contact": "William Dickerson",
        "Phone": "850.997.8976",
        "Email": "atalnative@aol.com",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Established": "1981",
        "Hours": "M-F 8-5",
        "Latitude": "30.453664",
        "Longitude": "-83.995019",
        "Street": "Hayfield Spur",
        "County": "Jefferson County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.995019,
          30.453664
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Appalachian Native Plants Inc",
        "Address": "676 Waddell Rd, Mountain City, TN, 37683",
        "City": "Mountain City",
        "State": "TN",
        "Zip Code": "37683",
        "Country": "USA",
        "Contact": "Jay or Lindy",
        "Phone": "423.727.4264",
        "Email": "appnativeplants@gmail.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nContract",
        "Product": "Plants",
        "Latitude": "36.536938",
        "Longitude": "-81.748614",
        "Street": "Waddell Rd",
        "County": "Johnson County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.748614,
          36.536938
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Applewood Seed Company",
        "Address": "5380 Vivian St, Arvada, CO, 80002",
        "City": "Arvada",
        "State": "CO",
        "Zip Code": "80002",
        "Country": "USA",
        "Contact": "Norm Poppe",
        "Phone": "303.431.7333",
        "Fax": "303.467.7886",
        "Email": "sales@applewoodseed.com",
        "Website": "http://www.applewoodseed.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Seeds",
        "Latitude": "39.793659",
        "Longitude": "-105.135818",
        "Street": "Vivian St",
        "County": "Jefferson County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -105.135818,
          39.793659
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Applied Ecological Services  Inc",
        "Address": "1269 N 222 Rd, Baldwin City, KS, 66006",
        "City": "Baldwin City",
        "State": "KS",
        "Zip Code": "66006",
        "Country": "USA",
        "Contact": "Elliot Duemler",
        "Phone": "785.594.2245",
        "Phone 2": "816.808.0898",
        "Fax": "785.594.2250",
        "Email": "KRRN@appliedeco.com",
        "Website": "http://www.appliedeco.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants\nSeeds",
        "Latitude": "38.771155",
        "Longitude": "-95.265483",
        "Street": "N 222nd Rd",
        "County": "Douglas County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.265483,
          38.771155
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Applied Ecological Services | Taylor Creek Restoration Nurseries",
        "Address": "2224 E 1260 Rd, Baldwin City, KS, 66006",
        "City": "Baldwin City",
        "State": "KS",
        "Zip Code": "66006",
        "Country": "USA",
        "Contact": "Corrine Daniels",
        "Phone": "608.897.8641",
        "Fax": "608.897.2044",
        "Email": "corrine@appliedeco.com",
        "Website": "https://www.appliedeco.com/native-plant-nursery/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants\nSeeds",
        "Latitude": "38.821502",
        "Longitude": "-95.223906",
        "County": "Douglas County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.223906,
          38.821502
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Aqua-Pak",
        "Address": "7727 SW 173rd Place, Beaverton, OR, 97007",
        "City": "Beaverton",
        "State": "OR",
        "Zip Code": "97007",
        "Country": "USA",
        "Contact": "Terry Youngs",
        "Phone": "503.799.8157",
        "Email": "terry.y@aquapak.com",
        "Website": "https://www.aquapak.com/",
        "Latitude": "45.464122",
        "Longitude": "-122.854907",
        "Street": "SW 173rd Pl",
        "County": "Washington County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.854907,
          45.464122
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Aquascapes Unlimited Inc",
        "Address": "5542 Township Line Rd, Pipersville, PA, 18947",
        "City": "Pipersville",
        "State": "PA",
        "Zip Code": "18947",
        "Country": "USA",
        "Contact": "Randy Heffner",
        "Phone": "215.766.8151",
        "Email": "info@aquascapesunlimited.com",
        "Website": "http://www.aquascapesunlimited.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nContract",
        "Product": "Plants\nSeeds\nServices",
        "Established": "1985",
        "Latitude": "40.40443",
        "Longitude": "-75.144197",
        "Street": "Township Line Rd",
        "County": "Bucks County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.144197,
          40.40443
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Aquatic Nursery",
        "Address": "38W135 McDonald Rd, Elgin, IL, 60124",
        "City": "Elgin",
        "State": "IL",
        "Zip Code": "60124",
        "Country": "USA",
        "Contact": "Robert D Steinbach",
        "Phone": "847.741.7678",
        "Email": "rdsteinbach@hotmail.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "41.985616",
        "Longitude": "-88.362948",
        "Street": "McDonald Rd",
        "County": "Kane County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.362948,
          41.985616
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Aquatic Plants of Florida Inc",
        "Address": "8120 Blaikie Ct, Sarasota, FL, 34240",
        "City": "Sarasota",
        "State": "FL",
        "Zip Code": "34240",
        "Country": "USA",
        "Contact": "Gilbert J Sharell",
        "Phone": "941.378.2700",
        "Fax": "941.378.0020",
        "Email": "info@aquaticplantsofflorida.com",
        "Website": "http://www.aquaticplantsofflorida.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nMail\nContract",
        "Product": "Plants",
        "Latitude": "27.346421",
        "Longitude": "-82.404099",
        "Street": "Blaikie Ct",
        "County": "Sarasota County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.404099,
          27.346421
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Aquatic Resources & Glacial Pond Farms",
        "Address": "Plainview Ridge, Boscobel, WI, 53805",
        "City": "Boscobel",
        "State": "WI",
        "Zip Code": "53805",
        "Country": "USA",
        "Contact": "Ran Atkinson",
        "Phone": "608.778.1131",
        "Email": "aqresglclpndfrms@aol.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail",
        "Product": "Plants",
        "Latitude": "43.166809",
        "Longitude": "-90.797844",
        "Street": "Plainview Ridge Rd",
        "County": "Crawford County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.797844,
          43.166809
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Aquatic Systems & Resources",
        "Address": "5453 SW Quail Hollow St, Palm City, FL, 34990",
        "City": "Palm City",
        "State": "FL",
        "Zip Code": "34990",
        "Country": "USA",
        "Contact": "Pat Faehnle",
        "Phone": "772.286.9376",
        "Email": "ASRinc1@bellsouth.net",
        "Website": "http://www.asr4ponds.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "27.140717",
        "Longitude": "-80.327588",
        "Street": "SW Quail Hollow St",
        "County": "Martin County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.327588,
          27.140717
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Aquatic and Wetland Company",
        "Address": "9999 Weld CR 25, Fort Lupton, CO, 80621",
        "City": "Fort Lupton",
        "State": "CO",
        "Zip Code": "80621",
        "Country": "USA",
        "Contact": "Heidi Windell",
        "Phone": "303.442.4766",
        "Fax": "303.857.2455",
        "Email": "heidi@aquaticandwetland.com",
        "Website": "https://aquaticandwetlandnursery.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "40.14468",
        "Longitude": "-104.836734",
        "Street": "County Rd 25",
        "County": "Weld County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -104.836734,
          40.14468
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "ArborGen - Alabama SuperTree Nursery",
        "Address": "264 CR 888, Selma, AL, 36703-8576",
        "City": "Selma",
        "State": "AL",
        "Zip Code": "36703-8576",
        "Country": "USA",
        "Contact": "Larry Foster",
        "Phone": "334.872.5452",
        "Fax": "334.872.2358",
        "Email": "lhfoste@arborgen.com",
        "Website": "http://www.supertreeseedlings.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "32.430786",
        "Longitude": "-86.873428",
        "Street": "County Rd 888",
        "County": "Dallas County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.873428,
          32.430786
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "ArborGen - Bellamy Tree Orchard",
        "Address": "4189 Bellamy Bridge Rd, Marianna, FL, 32446",
        "City": "Marianna",
        "State": "FL",
        "Zip Code": "32446",
        "Country": "USA",
        "Contact": "Timothy Slichter",
        "Phone": "850.594.6001",
        "Fax": "850.594.3512",
        "Email": "tkslich@arborgen.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants\nSeeds",
        "Latitude": "30.865852",
        "Longitude": "-85.24221",
        "Street": "Bellamy Bridge Rd",
        "County": "Jackson County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.24221,
          30.865852
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "ArborGen - Bellville SuperTree Nursery",
        "Address": "6482 Hwy 169, Claxton, GA, 30417",
        "City": "Claxton",
        "State": "GA",
        "Zip Code": "30417",
        "Country": "USA",
        "Contact": "Steve Cantrell",
        "Phone": "912.739.4721",
        "Fax": "912.739.9409",
        "Email": "swcantr@arborgen.com",
        "Website": "http://arborgen.us/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "32.137777",
        "Longitude": "-81.968757",
        "Street": "Highway 169",
        "County": "Evans County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.968757,
          32.137777
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "ArborGen - Fred C Gragg SuperTree Nursery",
        "Address": "186 Nevada 420, Bluff City, AR, 71722",
        "City": "Bluff City",
        "State": "AR",
        "Zip Code": "71722",
        "Country": "USA",
        "Contact": "Bill Abernathy",
        "Phone": "800.222.1270",
        "Fax": "870.685.2825",
        "Email": "whabern@arborgen.com",
        "Website": "http://www.supertreeseedlings.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "33.665661",
        "Longitude": "-93.143192",
        "Street": "Nevada",
        "County": "Nevada County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.143192,
          33.665661
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "ArborGen - Georgia SuperTree Nursery",
        "Address": "78 Super Tree Ln, Shellman, GA, 39886-9757",
        "City": "Shellman",
        "State": "GA",
        "Zip Code": "39886-9757",
        "Country": "USA",
        "Contact": "Robert Cross",
        "Phone": "800.554.6550",
        "Fax": "229.679.5628",
        "Email": "robert.cross@arborgen.com",
        "Website": "http://www.supertreeseedlings.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "31.821522",
        "Longitude": "-84.64947",
        "Street": "Supertree Ln",
        "County": "Randolph County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.64947,
          31.821522
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "ArborGen - Livingston SuperTree Nursery",
        "Address": "3535 Nursery Rd, Livingston, TX, 77351",
        "City": "Livingston",
        "State": "TX",
        "Zip Code": "77351",
        "Country": "USA",
        "Contact": "Lux Davis",
        "Phone": "877.600.8015",
        "Fax": "936.563.2027",
        "Email": "lsdavis@arborgen.com",
        "Website": "http://www.supertreeseedlings.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "30.736646",
        "Longitude": "-94.748622",
        "Street": "Nursery Rd",
        "County": "Polk County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.748622,
          30.736646
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "ArborGen - Richard O  Barhan SuperTree Nursery",
        "Address": "1235 CR 3198, Bullard, TX, 75757",
        "City": "Bullard",
        "State": "TX",
        "Zip Code": "75757",
        "Country": "USA",
        "Contact": "Beverly Lindsey",
        "Phone": "800.642.2264",
        "Fax": "903.825.2876",
        "Email": "balinds@arborgen.com",
        "Website": "http://arborgen.us/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "32.059857",
        "Longitude": "-95.422524",
        "Street": "Farm To Market Rd 3198 W",
        "County": "Cherokee County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.422524,
          32.059857
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Arid Solution LLC",
        "Address": "3815 E Sern Ave, Phoenix, AZ, 85040",
        "City": "Phoenix",
        "State": "AZ",
        "Zip Code": "85040",
        "Country": "USA",
        "Contact": "Richard or Bob Underwood",
        "Phone": "602.437.5194",
        "Fax": "602.437.4719",
        "Email": "general@aridsolutions.com",
        "Website": "https://aridsolutionsnursery.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "33.406479",
        "Longitude": "-112.025469",
        "County": "Maricopa County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -112.025469,
          33.406479
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Arid Zone Trees",
        "Address": "9750 E Germann Rd, Mesa, AZ, 85212",
        "City": "Mesa",
        "State": "AZ",
        "Zip Code": "85212",
        "Country": "USA",
        "Contact": "Todd Power",
        "Phone": "480.987.9094",
        "Fax": "480.987.9092",
        "Email": "todd@aridzonetrees.com",
        "Website": "http://www.aridzonetrees.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nContract",
        "Product": "Plants",
        "Latitude": "33.277842",
        "Longitude": "-111.62252",
        "Street": "E Germann Rd",
        "County": "Maricopa County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.62252,
          33.277842
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Arizona Botanical",
        "Address": "1601 Hwy 89-A, Clarkdale, AZ, 86324",
        "City": "Clarkdale",
        "State": "AZ",
        "Zip Code": "86324",
        "Country": "USA",
        "Contact": "Jason Lavelle",
        "Phone": "928.634.2166",
        "Email": "arizonabotanical@gmail.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "34.760342",
        "Longitude": "-112.078285",
        "Street": "State Rte 89A",
        "County": "Yavapai County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -112.078285,
          34.760342
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Arkansas Forestry Commission - Baucum Nursery",
        "Address": "1402 Hwy 391 N, North Little Rock, AR, 72117",
        "City": "North Little Rock",
        "State": "AR",
        "Zip Code": "72117",
        "Country": "USA",
        "Contact": "James Shelton",
        "Phone": "501.907.2485",
        "Phone 2": "888.457.4221",
        "Fax": "501.907.2487",
        "Email": "James.Shelton@arkansas.gov",
        "Website": "http://forestry.arkansas.gov/",
        "Nursery Type": "State",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "34.761348",
        "Longitude": "-92.121529",
        "Street": "Highway 391 N",
        "County": "Pulaski County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -92.121529,
          34.761348
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Arkansas Valley Seed Inc",
        "Address": "4300 Monaco St, Denver, CO, 80216",
        "City": "Denver",
        "State": "CO",
        "Zip Code": "80216",
        "Country": "USA",
        "Contact": "Paul Hahn",
        "Phone": "877.907.3337",
        "Phone 2": "877.957.3337",
        "Fax": "303.320.7516",
        "Email": "pdhahn@seedsolutions.com",
        "Website": "http://www.avseeds.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Seeds",
        "Established": "1945",
        "Latitude": "39.777174",
        "Longitude": "-104.912732",
        "Street": "Monaco St",
        "County": "Denver County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -104.912732,
          39.777174
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Aroostook Band of Mic Macs",
        "Address": "8 Northern Rd, Presque Isle, ME, 04769",
        "City": "Presque Isle",
        "State": "ME",
        "Zip Code": "04769",
        "Country": "USA",
        "Contact": "David Macek",
        "Phone": "207.764.7765",
        "Fax": "207.764.7768",
        "Email": "dmacek@micmac.nsn.gov",
        "Website": "http://www.micmac-nsn.gov/",
        "Nursery Type": "Tribal",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "46.696944",
        "Longitude": "-68.033519",
        "Street": "Northern Rd",
        "County": "Aroostook County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -68.033519,
          46.696944
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Arrow Seed Company Inc",
        "Address": "126 N 10th Ave, Broken Bow, NE, 68822",
        "City": "Broken Bow",
        "State": "NE",
        "Zip Code": "68822",
        "Country": "USA",
        "Contact": "Jim Girardin",
        "Phone": "800.622.4727",
        "Fax": "308.872.6945",
        "Email": "jim@arrowseed.com",
        "Website": "http://arrowseed.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Seeds",
        "Latitude": "41.406136",
        "Longitude": "-99.641111",
        "Street": "N 10th Ave",
        "County": "Custer County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -99.641111,
          41.406136
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Arrowhead Alpines",
        "Address": "1310 N Gregory Rd, Fowlerville, MI, 48836",
        "City": "Fowlerville",
        "State": "MI",
        "Zip Code": "48836",
        "Country": "USA",
        "Contact": "Bob or Brigitta Stewart",
        "Phone": "517.223.3581",
        "Fax": "517.223.8750",
        "Email": "danielapresley@hotmail.com",
        "Website": "https://arrowheadalpines.com/",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "42.618158",
        "Longitude": "-84.090874",
        "Street": "N Gregory Rd",
        "County": "Livingston County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.090874,
          42.618158
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Arrowwood Native Plant Nursery LLC",
        "Address": "961 Clark Ave, Franklinville, NJ, 08322",
        "City": "Franklinville",
        "State": "NJ",
        "Zip Code": "08322",
        "Country": "USA",
        "Contact": "Cathy Arsenal",
        "Phone": "856.697.6045",
        "Fax": "856.697.6050",
        "Email": "njplants@aol.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants\nSeeds",
        "Latitude": "39.591641",
        "Longitude": "-74.992592",
        "Street": "Clark Ave",
        "County": "Gloucester County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.992592,
          39.591641
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Arvida Nurseries",
        "Address": "14450 SW 312th St, Homestead, FL, 33090-1508",
        "City": "Homestead",
        "State": "FL",
        "Zip Code": "33090-1508",
        "Country": "USA",
        "Contact": "Bob Plyler",
        "Phone": "800.884.9573",
        "Phone 2": "305.245.9573",
        "Fax": "305.247.9549",
        "Email": "arvida@bellsouth.net",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "25.477234",
        "Longitude": "-80.447509",
        "Street": "SW 312th St",
        "County": "Miami-Dade County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.447509,
          25.477234
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Audubon Society for Native Plants",
        "Address": "614 Dorseyville Rd, Pittsburgh, PA, 15238",
        "City": "Pittsburgh",
        "State": "PA",
        "Zip Code": "15238",
        "Country": "USA",
        "Contact": "Sarah Koenig",
        "Phone": "412.963.6100",
        "Email": "skoenig@aswp.org",
        "Nursery Type": "Not-for-Profit",
        "Business Type": "Retail",
        "Product": "Plants\nServices",
        "Latitude": "40.54264",
        "Longitude": "-79.905843",
        "Street": "Dorseyville Rd",
        "County": "Allegheny County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.905843,
          40.54264
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Aurora Nursery Inc",
        "Address": "22821 Boones Ferry Rd NE, Aurora, OR, 97070",
        "City": "Aurora",
        "State": "OR",
        "Zip Code": "97070",
        "Country": "USA",
        "Contact": "Joyce Parker",
        "Phone": "503.678.7903",
        "Fax": "503.678.7901",
        "Email": "sales@auroranursery.com",
        "Website": "http://www.auroranursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nContract",
        "Product": "Plants",
        "Latitude": "45.250846",
        "Longitude": "-122.780409",
        "Street": "Boones Ferry Rd NE",
        "County": "Marion County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.780409,
          45.250846
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "B&V Landscaping",
        "Address": "4218 S 300 W , LaPorte, IN, 46350",
        "City": "LaPorte",
        "State": "IN",
        "Zip Code": "46350",
        "Country": "USA",
        "Contact": "Brian Blank",
        "Phone": "219.344.2868",
        "Phone 2": "219.245.1380",
        "Email": "brianblank2@aol.com",
        "Nursery Type": "Private",
        "Latitude": "41.5449",
        "Longitude": "-86.760044",
        "Street": "S 300 W",
        "County": "Laporte County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.760044,
          41.5449
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "BBB Seed",
        "Address": "6595 Odell Pl, Unit G, Boulder, CO, 80301",
        "City": "Unit G",
        "State": "CO",
        "Zip Code": "80301",
        "Country": "USA",
        "Contact": "Mike Wade",
        "Phone": "303.530.1222",
        "Fax": "866.897.1222",
        "Email": "info@bbbseed.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Seeds",
        "Latitude": "40.074009",
        "Longitude": "-105.200452",
        "Street": "Odell Pl",
        "County": "Boulder County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -105.200452,
          40.074009
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "BC Nursery",
        "Address": "4183 SR 276, Batavia, OH, 45103",
        "City": "Batavia",
        "State": "OH",
        "Zip Code": "45103",
        "Country": "USA",
        "Contact": "Chris Daeger",
        "Phone": "513.724.9032",
        "Email": "bc4trees@fuse.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail",
        "Product": "Plants",
        "Latitude": "39.063079",
        "Longitude": "-84.069643",
        "Street": "State Rte 276",
        "County": "Clermont County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.069643,
          39.063079
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "BC's Wild Heritage Plants",
        "Address": "47330 Extrom Rd, Chilliwack, BC, V2R 4V1",
        "City": "Chilliwack",
        "State": "BC",
        "Zip Code": "V2R 4V1",
        "Country": "Canada",
        "Contact": "Lee Larkin",
        "Phone": "604.858.5141",
        "Fax": "604.858.5141",
        "Email": "bcwildplants@uniserve.com",
        "Website": "http://www.bcwildheritage.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "39.787438",
        "Longitude": "-84.986277",
        "County": "Wayne County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.986277,
          39.787438
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "BFI Native Seeds",
        "Address": "1145 S Jefferson Ave, Moses Lake, WA, 98837",
        "City": "Moses Lake",
        "State": "WA",
        "Zip Code": "98837",
        "Country": "USA",
        "Contact": "Matthew Benson",
        "Phone": "509.765.6348",
        "Fax": "509.764.9978",
        "Email": "mbenson@bfinativeseeds.com",
        "Website": "http://www.bfinativeseeds.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Seeds",
        "Latitude": "47.118663",
        "Longitude": "-119.270127",
        "Street": "S Jefferson Ave",
        "County": "Grant County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.270127,
          47.118663
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Bach's Cactus Nursery Inc",
        "Address": "8602 N Thornydale Rd, Tucson, AZ, 85742",
        "City": "Tucson",
        "State": "AZ",
        "Zip Code": "85742",
        "Country": "USA",
        "Contact": "Dan or Diane Bach",
        "Phone": "520.744.3333",
        "Fax": "520.742.1254",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "32.361247",
        "Longitude": "-111.04375",
        "Street": "N Thornydale Rd",
        "County": "Pima County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.04375,
          32.361247
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Bailey Seed Company Inc",
        "Address": "4570 Ridge Dr  NE, Salem, OR, 97301",
        "City": "Salem",
        "State": "OR",
        "Zip Code": "97301",
        "Country": "USA",
        "Contact": "Craig Sellers",
        "Phone": "800.407.7713",
        "Phone 2": "503.362.9700",
        "Fax": "503.362.1705",
        "Email": "craig@baileyseed.com",
        "Website": "http://baileyseed.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Seeds",
        "Latitude": "44.990872",
        "Longitude": "-123.000931",
        "Street": "Ridge Dr NE",
        "County": "Marion County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.000931,
          44.990872
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Baker's Acres",
        "Address": "674 W Selina Ln, Wasilla, AK, 99654",
        "City": "Wasilla",
        "State": "AK",
        "Zip Code": "99654",
        "Country": "USA",
        "Contact": "Ed Baker, Susan",
        "Phone": "907.357.4175",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "61.577978",
        "Longitude": "-149.46819",
        "Street": "W Selina Ln",
        "County": "Matanuska-Susitna Borough"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -149.46819,
          61.577978
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Balance Restoration Nursery LLC",
        "Address": "27995 Chambers Mill Rd, Lorane, OR, 97451",
        "City": "Lorane",
        "State": "OR",
        "Zip Code": "97451",
        "Country": "USA",
        "Contact": "Jeff Levy",
        "Phone": "541.942.5530",
        "Fax": "541.942.7265",
        "Email": "balancenursery@yahoo.com",
        "Website": "https://sites.google.com/site/balancerestoration/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "43.796171",
        "Longitude": "-123.228426",
        "Street": "Chambers Mill Rd",
        "County": "Lane County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.228426,
          43.796171
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Bamert Seed Company",
        "Address": "1897 CR 1018, Muleshoe, TX, 79347",
        "City": "Muleshoe",
        "State": "TX",
        "Zip Code": "79347",
        "Country": "USA",
        "Contact": "Brett Bamert",
        "Phone": "806.262.9892",
        "Fax": "806.272.3114",
        "Email": "bbamert@bamertseed.com",
        "Website": "http://www.bamertseed.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nMail\nInternet\nContract",
        "Product": "Seeds",
        "Latitude": "34.286049",
        "Longitude": "-102.709042",
        "Street": "County Rd 1018",
        "County": "Bailey County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -102.709042,
          34.286049
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Barth Nursery",
        "Address": "8456 May Rd NE, Mt. Angel, OR, 97362",
        "City": "Mt. Angel",
        "State": "OR",
        "Zip Code": "97362",
        "Country": "USA",
        "Contact": "Wade Barth",
        "Phone": "503.710.8638",
        "Email": "wade_barth@yahoo.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "45.048403",
        "Longitude": "-122.753993",
        "Street": "May Rd NE",
        "County": "Marion County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.753993,
          45.048403
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Barton Springs Nursery",
        "Address": "3601 Bee Cave Rd, Austin, TX, 78746",
        "City": "Austin",
        "State": "TX",
        "Zip Code": "78746",
        "Country": "USA",
        "Contact": "Bernadine",
        "Phone": "512.328.6655",
        "Fax": "512.328.6517",
        "Website": "http://www.bartonspringsnursery.net/",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "30.277972",
        "Longitude": "-97.805565",
        "Street": "Bee Caves Rd",
        "County": "Travis County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.805565,
          30.277972
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Bate's Plants",
        "Address": "15001 W Angle Rd, Fort Pierce, FL, 34945",
        "City": "Fort Pierce",
        "State": "FL",
        "Zip Code": "34945",
        "Country": "USA",
        "Contact": "Chad Bates",
        "Phone": "561.358.7480",
        "Fax": "772.468.2525",
        "Email": "chad@batesplants.com",
        "Website": "http://www.batesplants.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "27.467884",
        "Longitude": "-80.479009",
        "Street": "W Angle Rd",
        "County": "St. Lucie County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.479009,
          27.467884
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Bay Natives",
        "Address": "10 Cargo Way, San Francisco, CA, 94124",
        "City": "San Francisco",
        "State": "CA",
        "Zip Code": "94124",
        "Country": "USA",
        "Contact": "Paul Furman",
        "Phone": "415.287.6755",
        "Fax": "415.285.2240",
        "Email": "info@baynatives.com",
        "Website": "http://www.baynatives.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "37.74589",
        "Longitude": "-122.386289",
        "Street": "Cargo Way",
        "County": "San Francisco County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.386289,
          37.74589
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "BeaverLake Nursery",
        "Address": "21200 S Ferguson Rd, Beavercreek, OR, 97004",
        "City": "Beavercreek",
        "State": "OR",
        "Zip Code": "97004",
        "Country": "USA",
        "Contact": "Troy or Kelly Martin",
        "Phone": "503.632.4787",
        "Fax": "503.632.5412",
        "Email": "info@beaverlakenursery.com",
        "Website": "http://www.beaverlakenursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nMail\nContract",
        "Product": "Plants",
        "Latitude": "45.298053",
        "Longitude": "-122.527262",
        "Street": "S Ferguson Rd",
        "County": "Clackamas County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.527262,
          45.298053
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Bechedor Inc",
        "Address": "1508 25th Ave, Saint-Prosper, QC, G0M 1Y0",
        "City": "Saint-Prosper",
        "State": "QC",
        "Zip Code": "G0M 1Y0",
        "Country": "Canada",
        "Contact": "Nicole Doyon",
        "Phone": "418.594.8580",
        "Fax": "418.594.6171",
        "Email": "bechedor@globetrotter.net or bechedor@bechedor.com",
        "Website": "http://treew.bechedor.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "0",
        "Longitude": "0"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          0,
          0
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Beeman's Nursery Inc",
        "Address": "3637 SR 44, New Smyrna Beach, FL, 32168",
        "City": "New Smyrna Beach",
        "State": "FL",
        "Zip Code": "32168",
        "Country": "USA",
        "Contact": "Steve Beeman",
        "Phone": "386.428.8889",
        "Phone 2": "386.767.6232",
        "Fax": "386.428.8879",
        "Email": "beemansnursery@att.net",
        "Website": "http://beemansnursery.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "29.013304",
        "Longitude": "-81.045003",
        "Street": "State Rte 44",
        "County": "Volusia County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.045003,
          29.013304
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Behmerwald Nursery",
        "Address": "4904 Garges Rd, Schwenksville, PA, 19473",
        "City": "Schwenksville",
        "State": "PA",
        "Zip Code": "19473",
        "Country": "USA",
        "Phone": "610.287.0480",
        "Website": "https://www.behmerwald.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "40.253379",
        "Longitude": "-75.444389",
        "Street": "Garges Rd",
        "County": "Montgomery County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.444389,
          40.253379
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Beineke's Nursery",
        "Address": "513 Sharon Rd, West Lafayette, IN, 47906",
        "City": "West Lafayette",
        "State": "IN",
        "Zip Code": "47906",
        "Country": "USA",
        "Contact": "Walter Beineke",
        "Phone": "765.463.2994",
        "Email": "wbein2@verizon.net",
        "Website": "https://walterbeineke.com/",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "40.456958",
        "Longitude": "-86.898288",
        "Street": "Sharon Rd",
        "County": "Tippecanoe County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.898288,
          40.456958
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Bell Brothers Inc",
        "Address": "5819 Hwy 169 S, Claxton, GA, 30417",
        "City": "Claxton",
        "State": "GA",
        "Zip Code": "30417",
        "Country": "USA",
        "Contact": "Danny or Gary Bell",
        "Phone": "912.739.2273",
        "Fax": "912.739.2205",
        "Email": "bellbrothers@bellsouth.net",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "32.13229",
        "Longitude": "-81.972765",
        "Street": "Highway 169",
        "County": "Evans County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.972765,
          32.13229
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Benevy Farms and Nursery",
        "Address": "4212 Parallel Pkwy, Kansas City, KS, 66104",
        "City": "Kansas City",
        "State": "KS",
        "Zip Code": "66104",
        "Country": "USA",
        "Contact": "Jenni Norton",
        "Phone": "816.200.7305",
        "Email": "jenni@benevyfarms.com",
        "Website": "https://benevyfarms.com/",
        "Nursery Type": "Private",
        "Latitude": "39.128727",
        "Longitude": "-94.678836",
        "Street": "Parallel Pkwy",
        "County": "Wyandotte County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.678836,
          39.128727
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Bert Driver Nursery",
        "Address": "3400 Nashville Hwy, Smithville, TN, 37166",
        "City": "Smithville",
        "State": "TN",
        "Zip Code": "37166",
        "Country": "USA",
        "Contact": "Bert",
        "Phone": "615.597.9560",
        "Fax": "615.597.9861",
        "Email": "bert@bertdrivernursery.com",
        "Email 2": "jbdriver@dtccom.net",
        "Website": "http://www.bertdrivernursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "35.979646",
        "Longitude": "-85.865659",
        "Street": "Nashville Hwy",
        "County": "Dekalb County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.865659,
          35.979646
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Better Forest Tree Seeds LLC",
        "Address": "80 Generation Court, Monticello, FL, 32344",
        "City": "Monticello",
        "State": "FL",
        "Zip Code": "32344",
        "Country": "USA",
        "Contact": "Christopher P Kiratzis",
        "Phone": "814.360.4724",
        "Email": "tuckaway1@gmail.com",
        "Website": "http://www.betterforesttreeseeds.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail\nInternet",
        "Product": "Seeds",
        "Latitude": "30.493173",
        "Longitude": "-84.033227",
        "Street": "Generation Ct",
        "County": "Jefferson County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.033227,
          30.493173
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Better Forest Tree Seeds, LLC",
        "Address": "80 Generation Court, Monticello, FL, 32344",
        "City": "Monticello",
        "State": "FL",
        "Zip Code": "32344",
        "Country": "USA",
        "Contact": "Chris Kiratzis",
        "Phone": "814.360.4724",
        "Email": "tuckaway1@gmail.com",
        "Website": "http://www.betterforesttreeseeds.com",
        "Latitude": "30.493173",
        "Longitude": "-84.033227",
        "Street": "Generation Ct",
        "County": "Jefferson County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.033227,
          30.493173
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Big River Cottonwood Nursery",
        "Address": "648 Union Church Rd, Winnsboro, LA, 71295",
        "City": "Winnsboro",
        "State": "LA",
        "Zip Code": "71295",
        "Country": "USA",
        "Contact": "Don Anderson",
        "Phone": "318.282.0418",
        "Email": "awildlifer@hotmail.com",
        "Website": "http://bigrivercottonwood.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "32.297923",
        "Longitude": "-91.601601",
        "Street": "Union Church Rd",
        "County": "Franklin Parish"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -91.601601,
          32.297923
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Big Sioux Nursery Inc",
        "Address": "16613 Sioux Conifer Rd, Watertown, SD, 57201",
        "City": "Watertown",
        "State": "SD",
        "Zip Code": "57201",
        "Country": "USA",
        "Contact": "Blaine Martian",
        "Phone": "605.886.6806",
        "Fax": "605.886.7951",
        "Website": "http://bigsiouxnursery.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "44.973693",
        "Longitude": "-97.154493",
        "Street": "Sioux Conifer Rd",
        "County": "Codington County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.154493,
          44.973693
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Big Trees Today",
        "Address": "4820 SW Hillsboro Hwy, Hillsboro, OR, 97123",
        "City": "Hillsboro",
        "State": "OR",
        "Zip Code": "97123",
        "Country": "USA",
        "Contact": "Dan Hickman, Cole ",
        "Phone": "503.640.3011",
        "Fax": "503.640.2877",
        "Email": "sales@bigtreestoday.com",
        "Website": "http://bigtreestoday.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "45.482831",
        "Longitude": "-122.988869",
        "Street": "SW Hillsboro Hwy",
        "County": "Washington County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.988869,
          45.482831
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Billings Nursery & Landscaping",
        "Address": "7900 S Frontage Rd, Billings, MT, 59101",
        "City": "Billings",
        "State": "MT",
        "Zip Code": "59101",
        "Country": "USA",
        "Contact": "Richard Marble",
        "Phone": "406.656.2410",
        "Fax": "406.652.6968",
        "Email": "design@billingsnursery.com",
        "Website": "https://www.billingsnursery.com/",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "45.725813",
        "Longitude": "-108.615934",
        "Street": "S Frontage Rd",
        "County": "Yellowstone County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -108.615934,
          45.725813
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Bitterroot Restoration Inc (BRI)",
        "Address": "445 Quast Ln, Corvallis, MT, 59828",
        "City": "Corvallis",
        "State": "MT",
        "Zip Code": "59828",
        "Country": "USA",
        "Phone": "406.961.4991",
        "Fax": "406.961.4626",
        "Website": "http://www.bitterrootrestoration.com",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "46.326855",
        "Longitude": "-114.09855",
        "Street": "Quast Ln",
        "County": "Ravalli County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -114.09855,
          46.326855
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Black Creek Nursery",
        "Address": "13801 SW 232 St, Goulds, FL, 33170",
        "City": "Goulds",
        "State": "FL",
        "Zip Code": "33170",
        "Country": "USA",
        "Contact": "Pieter",
        "Phone": "305.258.2618",
        "Fax": "303.258.2633",
        "Email": "blackcreeknsy@aol.com",
        "Website": "https://www.black-creek-nursery.com/contact",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Established": "1999",
        "Latitude": "25.551054",
        "Longitude": "-80.413015",
        "Street": "SW 232nd St",
        "County": "Miami-Dade County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.413015,
          25.551054
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Blackfeet Community College Greenhouse",
        "Address": "PO Box 819, Browning, MT, 59417",
        "City": "Browning",
        "State": "MT",
        "Zip Code": "59417",
        "Country": "USA",
        "Contact": "Wilbert Fish",
        "Phone": "406.338.5441",
        "Fax": "406.338.3272",
        "Email": "Wilbert_fish@bfcc.org",
        "Email 2": "wjfish@yahoo.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "48.55692",
        "Longitude": "-113.01342",
        "County": "Glacier County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -113.01342,
          48.55692
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Blank's Nursery Garden & Pet Center",
        "Address": "448 E  500th S , LaPorte, IN, 46350",
        "City": "LaPorte",
        "State": "IN",
        "Zip Code": "46350",
        "Country": "USA",
        "Phone": "219.393.5414",
        "Website": "https://www.facebook.com/Blanksnursery/",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "41.531803",
        "Longitude": "-86.694034",
        "Street": "E 500 S",
        "County": "Laporte County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.694034,
          41.531803
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Blazing Star Inc",
        "Address": "2107 Edgewood Dr, Woodstock, IL, 60098",
        "City": "Woodstock",
        "State": "IL",
        "Zip Code": "60098",
        "Country": "USA",
        "Contact": "Caron Wenzel",
        "Phone": "815.338.4716",
        "Fax": "815.338.4716",
        "Email": "cwenzel@blazing-star.com",
        "Website": "http://www.blazing-star.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants\nSeeds",
        "Latitude": "42.298805",
        "Longitude": "-88.436165",
        "Street": "Edgewood Dr",
        "County": "McHenry County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.436165,
          42.298805
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Blight Native Seeds Ltd",
        "Address": "Se 31-11-4w, Oakville, MB, R0H 0Y0",
        "City": "Oakville",
        "State": "MB",
        "Zip Code": "R0H 0Y0",
        "Country": "Canada",
        "Contact": "Jim Blight",
        "Phone": "204.267.2686",
        "Fax": "204.267.2699",
        "Email": "jim@bnsltd.ca",
        "Email 2": "info@bnsltd.ca",
        "Website": "http://www.bnsltd.ca",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail\nInternet",
        "Product": "Seeds",
        "Latitude": "38.470053",
        "Longitude": "-90.304561",
        "County": "St. Louis County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.304561,
          38.470053
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Bloomers Flowering Plant Nursery",
        "Address": "5480 96th Ave, Pinellas Park, FL, 33782",
        "City": "Pinellas Park",
        "State": "FL",
        "Zip Code": "33782",
        "Country": "USA",
        "Contact": "Mary Coleman",
        "Phone": "727.536.0545",
        "Phone 2": "727.575.9952",
        "Email": "bloomers7880@aol.com",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "27.859119",
        "Longitude": "-82.708165",
        "Street": "96th Ave",
        "County": "Pinellas County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.708165,
          27.859119
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Bluebird Nursery",
        "Address": "519 Bryan St, Clarkson, NE, 68629",
        "City": "Clarkson",
        "State": "NE",
        "Zip Code": "68629",
        "Country": "USA",
        "Contact": "Wanda Wulf",
        "Phone": "800.356.9164",
        "Fax": "402.892.3738",
        "Email": "sales@bluebirdnursery.com",
        "Website": "http://www.bluebirdnursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "41.721666",
        "Longitude": "-97.115998",
        "Street": "Bryan St",
        "County": "Colfax County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.115998,
          41.721666
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Bluestem Farm",
        "Address": "S5920 Lehman Rd, Baraboo, WI, 53913",
        "City": "Baraboo",
        "State": "WI",
        "Zip Code": "53913",
        "Country": "USA",
        "Phone": "608.356.0179",
        "Email": "bluestem_farm@juno.com",
        "Website": "http://www.bluestemfarm.com",
        "Nursery Type": "Private",
        "Business Type": "Retail\nContract",
        "Product": "Plants",
        "Latitude": "43.432163",
        "Longitude": "-89.786338",
        "Street": "Lehman Rd",
        "County": "Sauk County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.786338,
          43.432163
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Bluestem Nursery",
        "Address": "1946 Fife Rd, Christina Lake, BC, V0H 1E3",
        "City": "Christina Lake",
        "State": "BC",
        "Zip Code": "V0H 1E3",
        "Country": "Canada",
        "Contact": "Jim",
        "Phone": "250.447.6363",
        "Fax": "250.447.6363",
        "Email": "info@bluestem.ca",
        "Website": "http://www.bluestem.ca",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail",
        "Product": "Plants",
        "Latitude": "32.340019",
        "Longitude": "-89.379337",
        "Street": "V F W Rd",
        "County": "Scott County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.379337,
          32.340019
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Bluestem Prairie Nursery",
        "Address": "13197 E 13th Rd, Hillsboro, IL, 62049",
        "City": "Hillsboro",
        "State": "IL",
        "Zip Code": "62049",
        "Country": "USA",
        "Contact": "Ken Schaal",
        "Phone": "217.532.6344",
        "Email": "bluestemnursery@yahoo.com",
        "Nursery Type": "Private",
        "Business Type": "Retail\nMail",
        "Product": "Plants\nSeeds",
        "Latitude": "39.19416",
        "Longitude": "-89.458127",
        "Street": "E 13th Rd",
        "County": "Montgomery County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.458127,
          39.19416
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Bluestone Perennials Inc",
        "Address": "7211 Middle Ridge Rd, Madison, OH, 44057",
        "City": "Madison",
        "State": "OH",
        "Zip Code": "44057",
        "Country": "USA",
        "Contact": "William (Bill) Boonstra",
        "Phone": "800.852.5243",
        "Fax": "440.428.7198",
        "Email": "service@bluestoneperennials.com",
        "Website": "http://www.bluestoneperennials.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "41.789511",
        "Longitude": "-81.030232",
        "Street": "Middle Ridge Rd",
        "County": "Lake County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.030232,
          41.789511
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Bodenhamer Farms & Nursery",
        "Address": "6547 Kitchen St, Rowland, NC, 28383",
        "City": "Rowland",
        "State": "NC",
        "Zip Code": "28383",
        "Country": "USA",
        "Contact": "Louie Bodenhamer",
        "Phone": "910.422.8118",
        "Email": "louie@bodenhamerfarms.com",
        "Website": "http://www.bodenhamerfarms.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "34.550963",
        "Longitude": "-79.342205",
        "Street": "Kitchen St",
        "County": "Robeson County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.342205,
          34.550963
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Boehm's Garden Center",
        "Address": "708 Macomb Rd, Rushville, IL, 62681",
        "City": "Rushville",
        "State": "IL",
        "Zip Code": "62681",
        "Country": "USA",
        "Contact": "Don Boehm",
        "Phone": "217.322.6644",
        "Fax": "217.322.2144",
        "Email": "boehmsgc@frontiernet.net",
        "Website": "http://www.boehmsgardencenter.com",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "40.128236",
        "Longitude": "-90.573598",
        "Street": "Macomb Rd",
        "County": "Schuyler County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.573598,
          40.128236
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Boething Treeland Farms ",
        "Address": "23475 Long Valley Rd, Woodland Hills, CA, 91367",
        "City": "Woodland Hills",
        "State": "CA",
        "Zip Code": "91367",
        "Country": "USA",
        "Contact": "Peter Vanhorenbeeck",
        "Phone": "818.316.2000",
        "Fax": "650.851.4252",
        "Email": "northsales@boethingtreeland.com",
        "Website": "http://www.boethingtreeland.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "34.159142",
        "Longitude": "-118.639344",
        "Street": "Long Valley Rd",
        "County": "Los Angeles County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.639344,
          34.159142
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Bona Terra",
        "Address": "5411 13th St  NW, Friendship, MD, 20011",
        "City": "Friendship",
        "State": "MD",
        "Zip Code": "20011",
        "Country": "USA",
        "Phone": "202.507.9648",
        "Email": "bonaterra@bonaterradc.com",
        "Website": "http://www.bonaterradc.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants\nServices",
        "Latitude": "38.955579",
        "Longitude": "-77.029431",
        "Street": "13th St NW",
        "County": "District of Columbia"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.029431,
          38.955579
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Borderlands Restoration",
        "Address": "42 San Antonio Rd, Patagonia, AZ, 85624",
        "City": "Patagonia",
        "State": "AZ",
        "Zip Code": "85624",
        "Country": "USA",
        "Contact": "Francesca Claverie",
        "Phone": "760.996.0893",
        "Email": "afclaver@gmail.com",
        "Website": "http://www.borderlandsrestoration.org",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants\nSeeds",
        "Latitude": "31.545674",
        "Longitude": "-110.737602",
        "Street": "San Antonio Rd",
        "County": "Santa Cruz County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -110.737602,
          31.545674
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Bosch's Countryview Nursery",
        "Address": "10785 84th Ave, Allendale, MI, 49401",
        "City": "Allendale",
        "State": "MI",
        "Zip Code": "49401",
        "Country": "USA",
        "Contact": "Brian Bosch",
        "Phone": "616.892.4090",
        "Fax": "616.892.4290",
        "Email": "brian@boschsnursery.com",
        "Website": "https://boschsnursery.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants\nSeeds",
        "Latitude": "42.96304",
        "Longitude": "-85.996088",
        "Street": "84th Ave",
        "County": "Ottawa County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.996088,
          42.96304
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Bosky Dell Natives",
        "Address": "23311 SW Bosky Dell Ln, West Linn, OR, 97068",
        "City": "West Linn",
        "State": "OR",
        "Zip Code": "97068",
        "Country": "USA",
        "Contact": "Lory Duralia",
        "Phone": "503.638.5945",
        "Fax": "503.638.8047",
        "Email": "boskydellnatives@aol.com",
        "Website": "http://www.boskydellnatives.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail",
        "Product": "Plants",
        "Latitude": "45.351397",
        "Longitude": "-122.683285",
        "Street": "SW Bosky Dell Ln",
        "County": "Clackamas County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.683285,
          45.351397
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Botanics Wholesale Inc",
        "Address": "31701 SW 194th Ave, Homestead, FL, 33030",
        "City": "Homestead",
        "State": "FL",
        "Zip Code": "33030",
        "Country": "USA",
        "Contact": "Jack or Debbie",
        "Phone": "305.245.2966",
        "Fax": "305.246.1782",
        "Email": "botanics@botanics.com",
        "Website": "http://www.botanics.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "25.471946",
        "Longitude": "-80.50474",
        "Street": "SW 194th Ave",
        "County": "Miami-Dade County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.50474,
          25.471946
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Botanique",
        "Address": "387 Pitcher Plant Ln, Stanardsville, VA, 22973",
        "City": "Stanardsville",
        "State": "VA",
        "Zip Code": "22973",
        "Country": "USA",
        "Contact": "Rob Sacilotto",
        "Email": "botanique@pitcherplant.com or rob@pitcherplant.com",
        "Website": "http://www.pitcherplant.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail",
        "Product": "Plants",
        "Latitude": "38.234956",
        "Longitude": "-78.509615",
        "Street": "Pitcher Plant Ln",
        "County": "Greene County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.509615,
          38.234956
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Bowman's Hill Wildflower Preserve",
        "Address": "1635 River Rd, New Hope, PA, 18938",
        "City": "New Hope",
        "State": "PA",
        "Zip Code": "18938",
        "Country": "USA",
        "Contact": "Donna Dahringer",
        "Phone": "215.862.2924",
        "Fax": "215.862.1846",
        "Email": "nursery@bhwp.org or bhwp@bhwp.org",
        "Website": "http://www.bhwp.org/",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants\nSeeds",
        "Latitude": "40.335857",
        "Longitude": "-74.941374",
        "Street": "River Rd",
        "County": "Bucks County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.941374,
          40.335857
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Bowood Farms Inc",
        "Address": "4605 Olive St, Clarksville, MO, 63108",
        "City": "Clarksville",
        "State": "MO",
        "Zip Code": "63108",
        "Country": "USA",
        "Contact": "John McPheeters",
        "Phone": "314.454.6868",
        "Fax": "314.454.9276",
        "Email": "clarksville@bowoodfarms.com",
        "Website": "http://www.bowoodfarms.com",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "38.649368",
        "Longitude": "-90.257062",
        "Street": "Olive St",
        "County": "St. Louis City"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.257062,
          38.649368
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Boxelder Creek Nurseries",
        "Address": "23809 CR 2, Hudson, CO, 80642",
        "City": "Hudson",
        "State": "CO",
        "Zip Code": "80642",
        "Country": "USA",
        "Contact": "Dave Zach",
        "Phone": "303.279.8204",
        "Fax": "303.278.1832",
        "Email": "boxelder@becn.us",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "40.002865",
        "Longitude": "-104.607268",
        "Street": "County Rd 2",
        "County": "Weld County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -104.607268,
          40.002865
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Boyd & Boyd Nursery",
        "Address": "7960 Smithville Hwy 56 N, McMinnville, TN, 37110",
        "City": "McMinnville",
        "State": "TN",
        "Zip Code": "37110",
        "Country": "USA",
        "Contact": "Tom Boyd",
        "Phone": "931.934.2613",
        "Fax": "931.934.2044",
        "Email": "info@boydandboydnursery.com",
        "Website": "http://www.boydandboydnursery.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "35.79465",
        "Longitude": "-85.791607",
        "Street": "Smithville Hwy",
        "County": "Warren County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.791607,
          35.79465
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Brandywine Conservancy",
        "Address": "1 Hoffman’s Mill Rd, Chadds Ford, PA, 19317",
        "City": "Chadds Ford",
        "State": "PA",
        "Zip Code": "19317",
        "Country": "USA",
        "Contact": "Mark Gormel",
        "Phone": "610.388.8327",
        "Fax": "610.388.8394",
        "Email": "mgormel@brandywine.org",
        "Website": "http://www.brandywinemuseum.org",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants\nSeeds",
        "Latitude": "39.873298",
        "Longitude": "-75.624122",
        "Street": "Chadds Ford Dr",
        "County": "Chester County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.624122,
          39.873298
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Breezy Oaks Nursery",
        "Address": "23602 SE Hawthorne Rd, Hawthorne, FL, 32640",
        "City": "Hawthorne",
        "State": "FL",
        "Zip Code": "32640",
        "Country": "USA",
        "Contact": "Larry Alsobrook",
        "Phone": "352.481.3795",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "29.595604",
        "Longitude": "-82.070425",
        "Street": "SE Hawthorne Rd",
        "County": "Alachua County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.070425,
          29.595604
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Brenda Sharp Native Ecotypes LLC",
        "Address": "1712 6400 Rd, Montrose, CO, 81403",
        "City": "Montrose",
        "State": "CO",
        "Zip Code": "81403",
        "Country": "USA",
        "Contact": "Brenda J Sharp",
        "Phone": "970.232.4585",
        "Email": "brenda@nativeecotypes.com",
        "Website": "https://nativeecotypes.com/the-work/",
        "Nursery Type": "Private",
        "Business Type": "Contract",
        "Product": "Plants\nSeeds\nServices",
        "Latitude": "38.458492",
        "Longitude": "-107.889909",
        "Street": "6400th Rd",
        "County": "Montrose County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -107.889909,
          38.458492
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Brent & Becky's Bulbs",
        "Address": "7900 Daffodil Ln, Gloucester, VA, 23061",
        "City": "Gloucester",
        "State": "VA",
        "Zip Code": "23061",
        "Country": "USA",
        "Phone": "804.693.3966",
        "Fax": "804.693.9436",
        "Email": "bbheath@brentandbeckysbulbs.com",
        "Website": "https://brentandbeckysbulbs.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail",
        "Product": "Plants",
        "Latitude": "37.423453",
        "Longitude": "-76.485194",
        "Street": "Daffodil Ln",
        "County": "Gloucester County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.485194,
          37.423453
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Brett Young",
        "Address": "Corner of Hwy 39 & 60, Calmar, AB, T0C 0V0",
        "City": "Calmar",
        "State": "AB",
        "Zip Code": "T0C 0V0",
        "Country": "Canada",
        "Contact": "Gloria Weir",
        "Phone": "780.985.7314",
        "Fax": "780.985.3534",
        "Email": "gloria.weir@brettyoung.ca",
        "Website": "http://www.brettyoung.ca/html/west-canada-seed-crop-inputs/index.cfm",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Established": "1934",
        "Hours": "M-F 8-5",
        "Latitude": "43.428674",
        "Longitude": "-92.514877",
        "Street": "60th St",
        "County": "Howard County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -92.514877,
          43.428674
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Briggs Nursery  Inc",
        "Address": "715 S Bank Rd, Elma, WA, 98541",
        "City": "Elma",
        "State": "WA",
        "Zip Code": "98541",
        "Country": "USA",
        "Contact": "Jeff Mason",
        "Phone": "800.444.1515",
        "Fax": "888.400.2380",
        "Email": "sales@briggsnursery.com",
        "Website": "http://www.briggsnursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "46.943171",
        "Longitude": "-123.344063",
        "Street": "S Bank Rd",
        "County": "Grays Harbor County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.344063,
          46.943171
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Brokaw Nursery",
        "Address": "1419 Lirio Ave, Ventura, CA, 93004",
        "City": "Ventura",
        "State": "CA",
        "Zip Code": "93004",
        "Country": "USA",
        "Contact": "Rob Brokaw",
        "Phone": "805.647.2262",
        "Fax": "805.647.6493",
        "Email": "rbrokaw@west.net",
        "Website": "http://brokawnursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "34.277924",
        "Longitude": "-119.149073",
        "Street": "Lirio Ave",
        "County": "Ventura County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.149073,
          34.277924
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Broken Arrow Nursery",
        "Address": "13 Broken Arrow Rd, Hamden, CT, 06518",
        "City": "Hamden",
        "State": "CT",
        "Zip Code": "06518",
        "Country": "USA",
        "Contact": "Andrew Brand",
        "Phone": "203.288.1026",
        "Fax": "203.287.0135",
        "Email": "ABrand@brokenarrownursery.com",
        "Email 2": "info@brokenarrownursery.com",
        "Website": "http://www.brokenarrownursery.com",
        "Nursery Type": "Private",
        "Business Type": "Retail\nMail",
        "Product": "Plants",
        "Latitude": "41.442536",
        "Longitude": "-72.942272",
        "Street": "Broken Arrow Rd",
        "County": "South Central Connecticut Planning Region"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.942272,
          41.442536
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Brooks Tree Farm",
        "Address": "9785 Portland Rd NE, Brooks, OR, 97305",
        "City": "Brooks",
        "State": "OR",
        "Zip Code": "97305",
        "Country": "USA",
        "Contact": "Kathy Lecomptc",
        "Phone": "503.393.6300",
        "Fax": "503.393.0827",
        "Email": "office@brookstreefarm.com",
        "Website": "http://www.brookstreefarm.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nContract",
        "Product": "Plants",
        "Established": "1980",
        "Hours": "8-4:30",
        "Latitude": "45.059412",
        "Longitude": "-122.94632",
        "Street": "Portland Rd NE",
        "County": "Marion County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.94632,
          45.059412
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Browning Seed Inc",
        "Address": "3101 S IH 27 Box 1, Plainview, TX, 79072",
        "City": "Plainview",
        "State": "TX",
        "Zip Code": "79072",
        "Country": "USA",
        "Contact": "Rick Graves",
        "Phone": "806.293.5271",
        "Fax": "806.293.9050",
        "Email": "orders@browningseed.com",
        "Email 2": "rick@browningseed.com",
        "Website": "http://www.browningseed.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nMail",
        "Product": "Seeds",
        "Latitude": "34.138154",
        "Longitude": "-101.747611",
        "Street": "S I-27",
        "County": "Hale County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -101.747611,
          34.138154
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Buchanan's Native Plants",
        "Address": "611 E 11th St, Houston, TX, 77008-7109",
        "City": "Houston",
        "State": "TX",
        "Zip Code": "77008-7109",
        "Country": "USA",
        "Contact": "Heather Buchanan",
        "Phone": "713.861.5702",
        "Fax": "713.861.2063",
        "Email": "info@buchanansplants.com",
        "Website": "http://buchanansplants.com/",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Established": "1986",
        "Latitude": "29.791001",
        "Longitude": "-95.391394",
        "Street": "E 11th St",
        "County": "Harris County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.391394,
          29.791001
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Buckeye Nursery Inc",
        "Address": "1490 Buckeye Nursery Rd, Perry, FL, 32347",
        "City": "Perry",
        "State": "FL",
        "Zip Code": "32347",
        "Country": "USA",
        "Contact": "Johnny Brown",
        "Phone": "800.838.2218",
        "Phone 2": "850.838.2680",
        "Fax": "850.838.2681",
        "Email": "buckeyenursery@gtcom.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "30.107329",
        "Longitude": "-83.558533",
        "Street": "Buckeye Nursery Rd",
        "County": "Taylor County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.558533,
          30.107329
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Bundy Canyon Turf Supply",
        "Address": "21420 Bundy Canyon Rd, Lake Wildomar, CA, 92595",
        "City": "Lake Wildomar",
        "State": "CA",
        "Zip Code": "92595",
        "Country": "USA",
        "Contact": "Doug Washburn",
        "Phone": "951.674.0638",
        "Email": "agronotec@aol.com",
        "Website": "http://www.agronotec.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Seeds",
        "Established": "1984",
        "Hours": "M-F 8-4",
        "Latitude": "33.627336",
        "Longitude": "-117.28507",
        "Street": "Bundy Canyon Rd",
        "County": "Riverside County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.28507,
          33.627336
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Burgaw Creek Nursery & Turf Farm LLC",
        "Address": "1225 Stag Park Rd, Burgaw, NC, 28425",
        "City": "Burgaw",
        "State": "NC",
        "Zip Code": "28425",
        "Country": "USA",
        "Contact": "Dave Howard",
        "Phone": "910.259.4788",
        "Fax": "910.259.7039",
        "Email": "burcreeknsyturf@intrstar.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "34.567802",
        "Longitude": "-77.880881",
        "Street": "Stag Park Rd",
        "County": "Pender County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.880881,
          34.567802
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Burnt Ridge Nursery",
        "Address": "432 Burnt Ridge Rd, Onalaska, WA, 98570",
        "City": "Onalaska",
        "State": "WA",
        "Zip Code": "98570",
        "Country": "USA",
        "Contact": "Michael Dolan",
        "Phone": "360.985.2873",
        "Fax": "360.985.0882",
        "Email": "mail@burntridgenursery.com",
        "Website": "http://www.burntridgenursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail\nInternet",
        "Product": "Plants",
        "Established": "1980",
        "Hours": "M-F 8-5 (Apr-Dec); M-Sa 8-5 (Jan-Mar)",
        "Latitude": "46.58143",
        "Longitude": "-122.616583",
        "Street": "Burnt Ridge Rd",
        "County": "Lewis County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.616583,
          46.58143
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Busse Gardens",
        "Address": "17160 245th Ave NW, Big Lake, MN, 55309",
        "City": "Big Lake",
        "State": "MN",
        "Zip Code": "55309",
        "Country": "USA",
        "Contact": "Gary Goldsmith",
        "Phone": "612.810.3017",
        "Phone 2": "800.544.3192",
        "Email": "customer.service@bussegardens.com",
        "Website": "http://www.bussegardens.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nMail",
        "Product": "Plants",
        "Latitude": "45.414102",
        "Longitude": "-93.703522",
        "Street": "245th Ave NW",
        "County": "Sherburne County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.703522,
          45.414102
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "CNPS Inc",
        "Address": "5951 Olgesby Rd, Milton, FL, 32570",
        "City": "Milton",
        "State": "FL",
        "Zip Code": "32570",
        "Country": "USA",
        "Contact": "John",
        "Phone": "850.623.6287",
        "Fax": "850.626.2684",
        "Email": "cnpsair@aol.com",
        "Website": "https://www.usaopps.com/government_contractors/contractor-5729914-CNPS-INCORPORATED.htm",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "30.792885",
        "Longitude": "-86.985834",
        "County": "Santa Rosa County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.985834,
          30.792885
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "CS&KT Forestry Tribal Nursery",
        "Address": "104 Main St SE, Ronan, MT, 59864",
        "City": "Ronan",
        "State": "MT",
        "Zip Code": "59864",
        "Country": "USA",
        "Contact": "Jean Matt",
        "Phone": "406.676.3755",
        "Fax": "406.676.3756",
        "Email": "jeanm@cskt.org",
        "Website": "https://www.facebook.com/CSKTForestryGreenhouse/",
        "Nursery Type": "Tribal",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "47.52888",
        "Longitude": "-114.096124",
        "Street": "Main St SE",
        "County": "Lake County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -114.096124,
          47.52888
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "CTUIR Tribal Native Plant Nursery",
        "Address": "73820 Hwy 331, Pendleton, OR, 97801",
        "City": "Pendleton",
        "State": "OR",
        "Zip Code": "97801",
        "Country": "USA",
        "Contact": "Gail Redberg, Marie Crawford, or Steve Bushman",
        "Phone": "541.278.8525",
        "Phone 2": "541.215.0981",
        "Email": "tribalnativeplants@gmail.com",
        "Website": "https://ctuir.org/",
        "Nursery Type": "Tribal",
        "Business Type": "Wholesale\nRetail\nContract",
        "Product": "Plants\nServices",
        "Established": "1994",
        "Hours": "M-Th 8-4:30pm. Please call if coming from a distance.",
        "Latitude": "45.676123",
        "Longitude": "-118.689146",
        "Street": "Highway 331",
        "County": "Umatilla County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.689146,
          45.676123
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Cactus Joe's Blue Diamond Cactus Nursery",
        "Address": "12740 Blue Diamond Rd, Blue Diamond, NV, 89004",
        "City": "Blue Diamond",
        "State": "NV",
        "Zip Code": "89004",
        "Country": "USA",
        "Contact": "Tommy Lee",
        "Phone": "702.875.1968",
        "Email": "shinrilee@gmail.com",
        "Website": "https://www.cactusjoeslasvegas.com/",
        "Nursery Type": "State",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "36.034184",
        "Longitude": "-115.346974",
        "Street": "Blue Diamond Rd",
        "County": "Clark County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -115.346974,
          36.034184
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Cal-Forest Nurseries",
        "Address": "1838 Eastside Rd, Etna, CA, 96027",
        "City": "Etna",
        "State": "CA",
        "Zip Code": "96027",
        "Country": "USA",
        "Contact": "Tom Jopson",
        "Phone": "530.467.5211",
        "Fax": "530.467.5733",
        "Email": "tomj@growpro.inc.com",
        "Email 2": "contact@calforest.com",
        "Website": "http://www.calforest.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Established": "1978",
        "Hours": "M-F 8-5",
        "Latitude": "41.474001",
        "Longitude": "-122.828923",
        "Street": "Eastside Rd",
        "County": "Siskiyou County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.828923,
          41.474001
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Calaveras Nursery",
        "Address": "1000 Calaveras Rd, Sunol, CA, 94586",
        "City": "Sunol",
        "State": "CA",
        "Zip Code": "94586",
        "Country": "USA",
        "Contact": "Pat",
        "Phone": "925.862.2286",
        "Email": "calaverasnursery@gmail.com",
        "Website": "http://www.calaverasnursery.com/",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "37.586284",
        "Longitude": "-121.869102",
        "Street": "Calaveras Rd",
        "County": "Alameda County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.869102,
          37.586284
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "California Flora Nursery",
        "Address": "2990 Somers St, Fulton, CA, 95439",
        "City": "Fulton",
        "State": "CA",
        "Zip Code": "95439",
        "Country": "USA",
        "Contact": "Phil Van Soelen or Sherrie Althouse",
        "Phone": "707.528.8813",
        "Fax": "707.528.1836",
        "Email": "calfloralnursery@sonic.net",
        "Website": "http://www.calfloranursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "38.493728",
        "Longitude": "-122.768545",
        "Street": "Somers St",
        "County": "Sonoma County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.768545,
          38.493728
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Campbell Tree & Land Company Inc",
        "Address": "PO Box 780, Wautoma, WI, 54982",
        "City": "Wautoma",
        "State": "WI",
        "Zip Code": "54982",
        "Country": "USA",
        "Phone": "920.787.4653",
        "Fax": "920.787.3696",
        "Email": "campbellco@voyager.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "44.036668",
        "Longitude": "-89.305771",
        "Street": "Wautoma Ave",
        "County": "Waushara County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.305771,
          44.036668
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Canfield Native Nursery",
        "Address": "1369 Tilton Rd, Sebastopol, CA, 95472",
        "City": "Sebastopol",
        "State": "CA",
        "Zip Code": "95472",
        "Country": "USA",
        "Contact": "Patricia Canfield",
        "Phone": "707.823.3776",
        "Fax": "707.823.3776",
        "Email": "patriciaanncanfield@comcast.net",
        "Website": "https://ecologycenter.org/directory/directory-entries/canfield-native-nursery/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Established": "1980",
        "Hours": "by appt please call",
        "Latitude": "38.380248",
        "Longitude": "-122.881364",
        "Street": "Tilton Rd",
        "County": "Sonoma County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.881364,
          38.380248
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Capitol Wholesale Nursery  Inc",
        "Address": "2938 Everdale Dr, San Jose, CA, 95148",
        "City": "San Jose",
        "State": "CA",
        "Zip Code": "95148",
        "Country": "USA",
        "Phone": "408.239.0589",
        "Fax": "408.239.0357",
        "Email": "cwnsales@sbcglobal.net",
        "Website": "http://www.CapitolWholesaleNursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "37.322289",
        "Longitude": "-121.797056",
        "Street": "Everdale Dr",
        "County": "Santa Clara County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.797056,
          37.322289
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Caprice Farm Nursery",
        "Address": "10944 Mill Creek Rd SE, Aumsville, OR, 97325",
        "City": "Aumsville",
        "State": "OR",
        "Zip Code": "97325",
        "Country": "USA",
        "Contact": "Cyndi or Charlie",
        "Phone": "503.749.1397",
        "Phone 2": "503.749.1397",
        "Fax": "503.749.4097",
        "Email": "cyndicap@wvi.com",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "44.827028",
        "Longitude": "-122.834177",
        "Street": "Mill Creek Rd SE",
        "County": "Marion County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.834177,
          44.827028
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Caras Nursery & Landscape",
        "Address": "2727 S 3rd St, Missoula, MT, 59804",
        "City": "Missoula",
        "State": "MT",
        "Zip Code": "59804",
        "Country": "USA",
        "Contact": "Helen Steiger",
        "Phone": "406.543.3333",
        "Fax": "406.543.2839",
        "Email": "caras@carasnursery.com",
        "Website": "http://carasnursery.com/",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "46.866471",
        "Longitude": "-114.046658",
        "Street": "S 3rd St S",
        "County": "Missoula County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -114.046658,
          46.866471
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Cardno Native Plant Nursery",
        "Address": "128 Sunset Dr, Walkerton, IN, 46574",
        "City": "Walkerton",
        "State": "IN",
        "Zip Code": "46574",
        "Country": "USA",
        "Phone": "574.586.2412",
        "Fax": "574.586.2718",
        "Email": "nurserysales@cardno.com",
        "Website": "http://www.cardnonativeplantnursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nContract",
        "Product": "Plants\nSeeds\nServices",
        "Established": "1993",
        "Hours": "Monday-Friday, 8-5",
        "Latitude": "41.456809",
        "Longitude": "-86.492282",
        "Street": "Sunset Dr",
        "County": "St. Joseph County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.492282,
          41.456809
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Carencia Native Nursery",
        "Address": "16101 Carencia Ln, Odessa, FL, 33556",
        "City": "Odessa",
        "State": "FL",
        "Zip Code": "33556",
        "Country": "USA",
        "Contact": "Rose Nimphius",
        "Phone": "813.920.2737",
        "Fax": "813.920.7661",
        "Email": "rnimphius@tampabay.rr.com",
        "Website": "http://www.carencianursery.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "28.102878",
        "Longitude": "-82.567688",
        "Street": "Carencia Ln",
        "County": "Hillsborough County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.567688,
          28.102878
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Carlson Prairie Seed Farm Inc",
        "Address": "2077 360th Ave, Lake Bronson, MN, 56734",
        "City": "Lake Bronson",
        "State": "MN",
        "Zip Code": "56734",
        "Country": "USA",
        "Contact": "Mike Ratzlaff",
        "Phone": "218.754.2693",
        "Phone 2": "218.689.4342",
        "Fax": "218.754.2694",
        "Email": "mratzlaff@wiktel.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Seeds",
        "Established": "2000",
        "Latitude": "48.699689",
        "Longitude": "-96.671046",
        "Street": "360th Ave",
        "County": "Kittson County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.671046,
          48.699689
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Carmel Valley Seed Company",
        "Address": "21 W Alaisal St Ste 111, Salinas, CA, 93901",
        "City": "Salinas",
        "State": "CA",
        "Zip Code": "93901",
        "Country": "USA",
        "Contact": "Joel Panzer",
        "Phone": "831.771.2557",
        "Fax": "831.771.2714",
        "Email": "joel@mwruck.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Seeds",
        "Hours": "M-F 9-5",
        "Latitude": "36.67338",
        "Longitude": "-121.655645",
        "Street": "W Alisal St",
        "County": "Monterey County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.655645,
          36.67338
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Carolina Greenery",
        "Address": "375 Carthage Rd, West End, NC, 27376",
        "City": "West End",
        "State": "NC",
        "Zip Code": "27376",
        "Country": "USA",
        "Phone": "910.947.3150",
        "Fax": "910.947.3150",
        "Email": "habitats@carolinagreenery.com",
        "Website": "http://www.carolinagreenery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail",
        "Product": "Plants",
        "Latitude": "35.309041",
        "Longitude": "-79.472624",
        "Street": "Carthage Rd",
        "County": "Moore County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.472624,
          35.309041
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Carolina Native Nursery",
        "Address": "1639 Prices Creek Rd, Burnsville, NC, 28714",
        "City": "Burnsville",
        "State": "NC",
        "Zip Code": "28714",
        "Country": "USA",
        "Contact": "Bill Jones",
        "Phone": "828.682.1471",
        "Fax": "828.682.1303",
        "Email": "sales@carolinanativenursery.com",
        "Website": "http://www.carolinanativenursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "35.894976",
        "Longitude": "-82.392665",
        "Street": "Prices Creek Rd",
        "County": "Yancey County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.392665,
          35.894976
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Carolina Wild",
        "Address": "314 Camellia Dr, Anderson, SC, 29625",
        "City": "Anderson",
        "State": "SC",
        "Zip Code": "29625",
        "Country": "USA",
        "Contact": "Christina Bruner",
        "Phone": "864.261.0659",
        "Email": "nativeplants@carolinawild.com",
        "Website": "http://www.carolinawild.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "34.523779",
        "Longitude": "-82.684636",
        "Street": "Camellia Dr",
        "County": "Anderson County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.684636,
          34.523779
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Carters Nursery | Bowater Forest Products Division",
        "Address": "11306 Hwy 411 S, Chatsworth, GA, 30705",
        "City": "Chatsworth",
        "State": "GA",
        "Zip Code": "30705",
        "Country": "USA",
        "Phone": "706.445.2422",
        "Fax": "706.445.4212",
        "Email": "muellercw@bowater.com",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "34.617575",
        "Longitude": "-84.710636",
        "Street": "S 411 Hwy",
        "County": "Murray County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.710636,
          34.617575
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Casa Flora Inc",
        "Address": "5543 McCommas Bluff Rd, Dallas, TX, 75241",
        "City": "Dallas",
        "State": "TX",
        "Zip Code": "75241",
        "Country": "USA",
        "Contact": "Rudy Nogeura, Roy Powell",
        "Phone": "972.225.6111",
        "Fax": "972.225.5210",
        "Email": "rpowell@casaflora.com",
        "Website": "http://www.casaflora.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "32.682295",
        "Longitude": "-96.72961",
        "Street": "McCommas Bluff Rd",
        "County": "Dallas County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.72961,
          32.682295
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Cascade Biomes",
        "Address": "PO Box 22419, Seattle, WA, 98122-0419",
        "City": "Seattle",
        "State": "WA",
        "Zip Code": "98122-0419",
        "Country": "USA",
        "Contact": "Virgie Newlin",
        "Phone": "206.322.0528",
        "Fax": "206.322.0528",
        "Email": "biomes@earthlink.net",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants\nSeeds",
        "Latitude": "47.611046",
        "Longitude": "-122.293207",
        "County": "King County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.293207,
          47.611046
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Cassidy Farm Nursery",
        "Address": "PO Box 287, Cleveland, NM, 87107",
        "City": "Cleveland",
        "State": "NM",
        "Zip Code": "87107",
        "Country": "USA",
        "Contact": "Dan Cassidy",
        "Email": "dancas@nnmt.net",
        "Website": "http://cassidyfarms.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "35.140444",
        "Longitude": "-106.638281",
        "County": "Bernalillo County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -106.638281,
          35.140444
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Catalina Island Conservancy - Ackerman Native Plant Nursery",
        "Address": "125 Clarrisa Ave, Avalon, CA, 90704",
        "City": "Avalon",
        "State": "CA",
        "Zip Code": "90704",
        "Country": "USA",
        "Contact": "Peter Dixon",
        "Phone": "310.510.1299",
        "Email": "pdixon@catalinaconservancy.org",
        "Email 2": "nursery@catalinaconservancy.org",
        "Website": "http://www.catalinaconservancy.org",
        "Nursery Type": "Not-for-Profit",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "33.342845",
        "Longitude": "-118.324742",
        "Street": "Claressa Ave",
        "County": "Los Angeles County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.324742,
          33.342845
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Catskill Native Nursery",
        "Address": "607 Samsonville Rd, Kerhonkson, NY, 12446",
        "City": "Kerhonkson",
        "State": "NY",
        "Zip Code": "12446",
        "Country": "USA",
        "Contact": "Francis Groeters",
        "Phone": "845.626.2758",
        "Fax": "845.626.2758",
        "Email": "info@catskillnativenursery.com",
        "Website": "http://www.catskillnativenursery.com",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "41.83176",
        "Longitude": "-74.301472",
        "Street": "Samsonville Rd",
        "County": "Ulster County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.301472,
          41.83176
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Cavicchio Nurseries",
        "Address": "110 Codjer Ln, Sudbury, MA, 01776",
        "City": "Sudbury",
        "State": "MA",
        "Zip Code": "01776",
        "Country": "USA",
        "Contact": "Lizza Smith",
        "Phone": "978.443.7177",
        "Fax": "978.639.6316",
        "Email": "lizza@cavicchio.com",
        "Website": "http://www.cavicchio.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "42.370936",
        "Longitude": "-71.423634",
        "Street": "Codjer Ln",
        "County": "Middlesex County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.423634,
          42.370936
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Cedar Mountain Perennials",
        "Address": "7875 E Hwy 54, Athol, ID, 83801",
        "City": "Athol",
        "State": "ID",
        "Zip Code": "83801",
        "Country": "USA",
        "Contact": "Bob Wilson",
        "Phone": "208.683.2387",
        "Email": "botanybob@frontier.com",
        "Website": "http://www.cedarmountainperennials.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants\nServices",
        "Latitude": "47.949319",
        "Longitude": "-116.675668",
        "Street": "E Highway 54",
        "County": "Kootenai County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.675668,
          47.949319
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Cedera Seed Inc",
        "Address": "118 State Hwy 31, Swan Valley, ID, 83449",
        "City": "Swan Valley",
        "State": "ID",
        "Zip Code": "83449",
        "Country": "USA",
        "Contact": "Delbert or June",
        "Phone": "208.483.3683",
        "Phone 2": "208.423.3684",
        "Email": "delbert684@cs.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Seeds",
        "Established": "2000",
        "Latitude": "43.464072",
        "Longitude": "-111.325272",
        "Street": "State Hwy 31",
        "County": "Bonneville County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.325272,
          43.464072
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Center for Native Plants",
        "Address": "5065 Hwy 93 S, Whitefish, MT, 59937",
        "City": "Whitefish",
        "State": "MT",
        "Zip Code": "59937",
        "Country": "USA",
        "Contact": "Hailey Moore",
        "Phone": "406.862.4226",
        "Email": "go-native@centerfornativeplants.com",
        "Website": "http://www.centerfornativeplants.com ",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "48.343495",
        "Longitude": "-114.335548",
        "Street": "US Hwy 93 S",
        "County": "Flathead County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -114.335548,
          48.343495
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Central Coast Wilds",
        "Address": "336A Golf Club Dr, Santa Cruz, CA, 95060",
        "City": "Santa Cruz",
        "State": "CA",
        "Zip Code": "95060",
        "Country": "USA",
        "Contact": "Ellen Uhler or Matt Marshall",
        "Phone": "831.459.0655",
        "Phone 2": "831.459.0656",
        "Fax": "831.457.1606",
        "Email": "Ellen@centralcoastwilds.com",
        "Email 2": "cindy@centralcoastwilds.com",
        "Website": "http://www.CentralCoastWilds.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nContract",
        "Product": "Plants\nSeeds",
        "Latitude": "36.990294",
        "Longitude": "-122.035596",
        "Street": "Golf Club Dr",
        "County": "Santa Cruz County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.035596,
          36.990294
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Central Florida Lands and Timber",
        "Address": "3087 N CR 53, Mayo, FL, 32066",
        "City": "Mayo",
        "State": "FL",
        "Zip Code": "32066",
        "Country": "USA",
        "Contact": "Tony Barrington",
        "Phone": "386.294.1211",
        "Fax": "386.294.3416",
        "Email": "cflat@windstream.net",
        "Website": "http://www.cflatnursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "30.176166",
        "Longitude": "-83.291216",
        "Street": "N County Rd 53",
        "County": "Lafayette County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.291216,
          30.176166
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Central Utah Seed",
        "Address": "825 N 400 E, Ephraim, UT, 84627",
        "City": "Ephraim",
        "State": "UT",
        "Zip Code": "84627",
        "Country": "USA",
        "Phone": "435.283.4344",
        "Fax": "435.283.4344",
        "Nursery Type": "Private",
        "Product": "Seeds",
        "Latitude": "39.373896",
        "Longitude": "-111.577031",
        "Street": "N 400 E",
        "County": "Sanpete County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.577031,
          39.373896
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Champlain Valley Native Plant Restoration Nursery",
        "Address": "1 Brennan Circle, Poultney, VT, 05764",
        "City": "Poultney",
        "State": "VT",
        "Zip Code": "05764",
        "Country": "USA",
        "Contact": "Hilary Solomon",
        "Phone": "802.558.3515",
        "Email": "hilary@pmnrcd.org",
        "Website": "http://www.pmnrcd.org/projects/district_projects/champlainvalley_restoration.php",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "43.516559",
        "Longitude": "-73.24021",
        "Street": "Brennan Cir",
        "County": "Rutland County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.24021,
          43.516559
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Champoeg Nursery Inc",
        "Address": "9661 Yergen Rd NE, Aurora, OR, 97002",
        "City": "Aurora",
        "State": "OR",
        "Zip Code": "97002",
        "Country": "USA",
        "Contact": "Paul M Stormo",
        "Phone": "503.678.6348",
        "Fax": "503.678.4348",
        "Email": "info@champoegnursery.com",
        "Website": "http://www.champoegnursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nMail\nContract",
        "Product": "Plants\nSeeds",
        "Established": "2002",
        "Hours": "M-F 8-4:30",
        "Latitude": "45.236607",
        "Longitude": "-122.863601",
        "Street": "Yergen Rd NE",
        "County": "Marion County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.863601,
          45.236607
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Charles Nii Nursery",
        "Address": "908 Kamilonui Pl, Honolulu, HI, 96825",
        "City": "Honolulu",
        "State": "HI",
        "Zip Code": "96825",
        "Country": "USA",
        "Contact": "Glenn",
        "Phone": "808.395.9959",
        "Fax": "808.395.9959",
        "Email": "cniihyhi@gmail.com",
        "Website": "http://charlesniinursery.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "21.304729",
        "Longitude": "-157.696208",
        "Street": "Kamilonui Pl",
        "County": "Honolulu County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -157.696208,
          21.304729
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Chas C Hart Seed Company",
        "Address": "304 Main St, Wethersfield, CT, 06109",
        "City": "Wethersfield",
        "State": "CT",
        "Zip Code": "06109",
        "Country": "USA",
        "Contact": "Robert Hart",
        "Phone": "860.529.2537",
        "Fax": "860.563.7221",
        "Email": "info@hartseed.com",
        "Website": "http://hartseed.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Seeds",
        "Latitude": "41.715291",
        "Longitude": "-72.652206",
        "Street": "Main St",
        "County": "Capitol Planning Region"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.652206,
          41.715291
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Chelsea Nursery",
        "Address": "3347 G Rd, Clifton, CO, 81520-8143",
        "City": "Clifton",
        "State": "CO",
        "Zip Code": "81520-8143",
        "Country": "USA",
        "Contact": "Stacy",
        "Phone": "970.434.8434",
        "Fax": "970.523.0737",
        "Email": "chelseanursery@aol.com",
        "Website": "http://chelseanursery.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "39.105816",
        "Longitude": "-108.432638",
        "Street": "G Rd",
        "County": "Mesa County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -108.432638,
          39.105816
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Chiappini Farm Native Nursery",
        "Address": "PO Box 436, Melrose, FL, 32666",
        "City": "Melrose",
        "State": "FL",
        "Zip Code": "32666",
        "Country": "USA",
        "Contact": "David Chiapini",
        "Phone": "352.475.5413",
        "Fax": "352.475.5268",
        "Email": "dchiapin@atlantic.net",
        "Website": "https://chiappinifarm.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Established": "1984",
        "Latitude": "29.697588",
        "Longitude": "-81.97397",
        "County": "Putnam County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.97397,
          29.697588
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Chief River Nursery",
        "Address": "976 Ulao Rd, Graston, WI, 53024",
        "City": "Graston",
        "State": "WI",
        "Zip Code": "53024",
        "Country": "USA",
        "Phone": "800.367.9254",
        "Fax": "866.226.5204",
        "Email": "chiefriver@gmail.com",
        "Website": "http://www.chiefrivernursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "43.320621",
        "Longitude": "-87.913176",
        "Street": "Ulao Rd",
        "County": "Ozaukee County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.913176,
          43.320621
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Cicconi Farms Inc | The Perennial Specialists",
        "Address": "1005 Farmingdale Rd, Jackson, NJ, 08527",
        "City": "Jackson",
        "State": "NJ",
        "Zip Code": "08527",
        "Country": "USA",
        "Contact": "Albert Cicconi",
        "Phone": "732.363.1420",
        "Fax": "732.905.9242",
        "Email": "al@cicconifarms.com",
        "Email 2": "mail@cicconifarms.com",
        "Website": "http://www.cicconifarms.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nInternet",
        "Product": "Plants",
        "Latitude": "40.159637",
        "Longitude": "-74.270764",
        "Street": "Farmingdale Rd",
        "County": "Ocean County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.270764,
          40.159637
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Circle S Seeds",
        "Address": "14990 Madison Frontage Rd, Three Forks, MT, 59752",
        "City": "Three Forks",
        "State": "MT",
        "Zip Code": "59752",
        "Country": "USA",
        "Contact": "John McDonald",
        "Phone": "406.285.3269",
        "Fax": "406.285.3040",
        "Email": "circles@circlesseeds.com",
        "Website": "http://www.circlesseeds.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Seeds",
        "Latitude": "45.890228",
        "Longitude": "-111.4684",
        "Street": "Madison Frontage Rd",
        "County": "Gallatin County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.4684,
          45.890228
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Clear Ridge Nursery Inc",
        "Address": "3360 Lowman Ln, Union Bridge, MD, 21791",
        "City": "Union Bridge",
        "State": "MD",
        "Zip Code": "21791",
        "Country": "USA",
        "Contact": "Jessica Barley",
        "Phone": "410.775.7700",
        "Fax": "410.848.5806",
        "Email": "crn@qis.net",
        "Email 2": "sm@qis.net",
        "Website": "http://clearridgenursery.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "39.575731",
        "Longitude": "-77.116385",
        "Street": "Lowman Ln",
        "County": "Carroll County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.116385,
          39.575731
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Clearwater Greenhouses",
        "Address": "PO Box 423, Big River, SK, S0J 0E0",
        "City": "Big River",
        "State": "SK",
        "Zip Code": "S0J 0E0",
        "Country": "Canada",
        "Contact": "Gary McLean",
        "Phone": "306.469.2111",
        "Fax": "306.469.4439",
        "Email": "clearwater@cwgh.ca",
        "Website": "http://www.clearwatergreenhouses.ca",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "38.104327",
        "Longitude": "-82.605591",
        "Street": "PO Box",
        "County": "Lawrence County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.605591,
          38.104327
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Clearwater Native Nursery",
        "Address": "1980 SW 55th St, Redmond, OR, 97756",
        "City": "Redmond",
        "State": "OR",
        "Zip Code": "97756",
        "Country": "USA",
        "Contact": "Mike",
        "Phone": "541.350.5261",
        "Fax": "541.504.5995",
        "Email": "mike@clearwaternatives.com",
        "Website": "http://www.clearwaternatives.com",
        "Nursery Type": "Private",
        "Business Type": "Contract",
        "Product": "Plants",
        "Latitude": "44.259158",
        "Longitude": "-121.234293",
        "Street": "SW 55th St",
        "County": "Deschutes County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.234293,
          44.259158
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Clemenson Farms Native Nursery",
        "Address": "108 Linwood Ave, Estell Manor, NJ, 08319",
        "City": "Estell Manor",
        "State": "NJ",
        "Zip Code": "08319",
        "Country": "USA",
        "Contact": "Arnold Clemenson",
        "Phone": "609.476.3903",
        "Fax": "609.476.3903",
        "Email": "aclemenson@verizon.net",
        "Website": "http://www.clemensonfarmsnativenursery.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "39.36677",
        "Longitude": "-74.85202",
        "Street": "Linwood Ave",
        "County": "Atlantic County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.85202,
          39.36677
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Clifton Forest & Appraisal Service Inc",
        "Address": "302 Donehoo St, Statesboro, GA, 30458",
        "City": "Statesboro",
        "State": "GA",
        "Zip Code": "30458",
        "Country": "USA",
        "Contact": "Jeremy Coulter",
        "Phone": "912.489.8250",
        "Fax": "912.489.2066",
        "Email": "apprasials@nctv.com",
        "Nursery Type": "Private",
        "Product": "Services",
        "Latitude": "32.44145",
        "Longitude": "-81.773963",
        "Street": "Donehoo St",
        "County": "Bulloch County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.773963,
          32.44145
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Clifton-Choctaw Nursery",
        "Address": "1146 Clifton Rd, Clifton, LA, 77447",
        "City": "Clifton",
        "State": "LA",
        "Zip Code": "77447",
        "Country": "USA",
        "Contact": "Angela Clifton",
        "Phone": "318.793.4253",
        "Fax": "318.793.4211",
        "Email": "ccri@bellsouth.net",
        "Nursery Type": "Tribal",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "30.02689",
        "Longitude": "-95.8444",
        "County": "Harris County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.8444,
          30.02689
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Clifty View Nursery",
        "Address": "312 Clifty View Rd, Bonners Ferry, ID, 83805",
        "City": "Bonners Ferry",
        "State": "ID",
        "Zip Code": "83805",
        "Country": "USA",
        "Contact": "Steve Koppang",
        "Phone": "208.267.7129",
        "Fax": "208.267.8559",
        "Email": "stevek@cliftyview.com",
        "Email 2": "info@cliftyview.com",
        "Website": "https://www.cliftyview.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "48.65656",
        "Longitude": "-116.23325",
        "Street": "Clifty View Rd",
        "County": "Boundary County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.23325,
          48.65656
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Cloud Mountain Farm Center",
        "Address": "6906 Goodwin Rd, Everson, WA, 98247",
        "City": "Everson",
        "State": "WA",
        "Zip Code": "98247",
        "Country": "USA",
        "Contact": "Terry Macziga",
        "Phone": "360.966.5859",
        "Fax": "360.966.0921",
        "Email": "info@cloudmountainfarmcenter.org",
        "Website": "http://www.cloudmountainfarmcenter.org",
        "Nursery Type": "Private",
        "Business Type": "Retail\nMail\nInternet",
        "Product": "Plants",
        "Established": "1979",
        "Hours": "M-Sat 10-5 Sun 11-4 Feb-Jun or by appt",
        "Latitude": "48.891565",
        "Longitude": "-122.286666",
        "Street": "Goodwin Rd",
        "County": "Whatcom County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.286666,
          48.891565
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Clyde Robin Seed Company Inc",
        "Address": "1120 Tewepea Ln, Ivans, UT, 84738",
        "City": "Ivans",
        "State": "UT",
        "Zip Code": "84738",
        "Country": "USA",
        "Contact": "Steve Atwood",
        "Phone": "510.315.6720",
        "Fax": "435.216.5414",
        "Email": "sales@clyderobin.com",
        "Website": "http://www.clyderobin.com",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Seeds",
        "Established": "1935",
        "Hours": "M-F 8-5",
        "Latitude": "37.19067",
        "Longitude": "-113.709662",
        "Street": "Tuweap Dr",
        "County": "Washington County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -113.709662,
          37.19067
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Coastal Gardens & Nursery",
        "Address": "4340 Hwy 65, Conway, SC, 29526",
        "City": "Conway",
        "State": "SC",
        "Zip Code": "29526",
        "Country": "USA",
        "Contact": "Ursula Herz",
        "Phone": "843.902.3400",
        "Phone 2": "843.293.2000",
        "Email": "gardens1@sccoast.net",
        "Website": "http://www.coastalgardensandnursery.com",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "33.909154",
        "Longitude": "-79.018077",
        "Street": "Hwy 65",
        "County": "Horry County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.018077,
          33.909154
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Coastal Native Plants Nursery LLC",
        "Address": "9698 Highland St, Mauricetown, NJ, 08329",
        "City": "Mauricetown",
        "State": "NJ",
        "Zip Code": "08329",
        "Country": "USA",
        "Contact": "Bryan Alcox",
        "Phone": "856.785.1102",
        "Fax": "856.785.1102",
        "Email": "bryanalcox@comcast.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "39.286599",
        "Longitude": "-75.001019",
        "Street": "Highland St",
        "County": "Cumberland County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.001019,
          39.286599
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Cold Stream Farm",
        "Address": "8585 Stephens Rd, Free Soil, MI, 49411",
        "City": "Free Soil",
        "State": "MI",
        "Zip Code": "49411",
        "Country": "USA",
        "Contact": "Craig Hradel",
        "Phone": "231.464.5809",
        "Email": "info@coldstreamfarm.net",
        "Website": "http://www.coldstreamfarm.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail",
        "Product": "Plants",
        "Established": "1978",
        "Hours": "M-Sat 8-5 by appt",
        "Latitude": "44.109622",
        "Longitude": "-86.201894",
        "Street": "N Stephens Rd",
        "County": "Mason County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.201894,
          44.109622
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Collector's Nursery",
        "Address": "16804 NE 102nd Ave, Battle Ground, WA, 98604",
        "City": "Battle Ground",
        "State": "WA",
        "Zip Code": "98604",
        "Country": "USA",
        "Contact": "Diana",
        "Phone": "360.574.3832",
        "Phone 2": "360.690.5732",
        "Fax": "360.574.3596",
        "Email": "dianar@collectorsnursery.com",
        "Website": "http://www.collectorsnursery.com",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "45.743742",
        "Longitude": "-122.570644",
        "Street": "NE 102nd Ave",
        "County": "Clark County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.570644,
          45.743742
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Colorado Seed Solutions",
        "Address": "195 N Washington, Monte Vista, CO, 81144",
        "City": "Monte Vista",
        "State": "CO",
        "Zip Code": "81144",
        "Country": "USA",
        "Contact": "Terry Hillin",
        "Phone": "719.852.3505",
        "Fax": "719.852.4942",
        "Email": "thillin@seedsolutions.com",
        "Website": "http://www.seedsolutions.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail",
        "Product": "Seeds",
        "Latitude": "37.579255",
        "Longitude": "-106.148241",
        "Street": "Washington St",
        "County": "Rio Grande County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -106.148241,
          37.579255
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Colorado State Forest Service Nursery",
        "Address": "3843 W Laporte Ave, Bldg 1060, Fort Collins, CO, 80521",
        "City": "Bldg 1060",
        "State": "CO",
        "Zip Code": "80521",
        "Country": "USA",
        "Contact": "Colorado State Forest Service Nursery",
        "Phone": "970.491.8429",
        "Email": "CSFS_Trees@colostate.edu",
        "Website": "https://csfs.colostate.edu/seedling-tree-nursery/",
        "Latitude": "40.58761",
        "Longitude": "-105.145934",
        "Street": "Laporte Ave",
        "County": "Larimer County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -105.145934,
          40.58761
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Colorado State Forest Service Nursery",
        "Address": "3843 W Laporte Ave, Fort Collins, CO, 80523",
        "City": "Fort Collins",
        "State": "CO",
        "Zip Code": "80523",
        "Country": "USA",
        "Contact": "Greg Sundstrom",
        "Phone": "970.491.8429",
        "Fax": "970.491.8250",
        "Email": "gregory.sundstrom@colostate.edu",
        "Website": "http://csfs.colostate.edu/",
        "Nursery Type": "State",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Established": "1957",
        "Hours": "7:30-4",
        "Latitude": "40.58761",
        "Longitude": "-105.145934",
        "Street": "Laporte Ave",
        "County": "Larimer County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -105.145934,
          40.58761
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Colville Tribal Forestry Greenhouse",
        "Address": "PO Box 72, Nespelem, WA, 99155",
        "City": "Nespelem",
        "State": "WA",
        "Zip Code": "99155",
        "Country": "USA",
        "Contact": "Diana Seymour",
        "Phone": "509.634.2896",
        "Fax": "509.634.8685",
        "Website": "https://www.colvilletribes.com/greenhouse",
        "Nursery Type": "Tribal",
        "Product": "Plants\nSeeds",
        "Latitude": "48.143441",
        "Longitude": "-119.00938",
        "County": "Okanogan County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.00938,
          48.143441
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Companion Plants Inc",
        "Address": "7247 N Coolville Ridge Rd, Athens, OH, 45701",
        "City": "Athens",
        "State": "OH",
        "Zip Code": "45701",
        "Country": "USA",
        "Phone": "740.592.4643",
        "Fax": "740.593.3092",
        "Email": "sales@companionplants.com",
        "Website": "http://companionplants.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail\nInternet",
        "Product": "Plants\nSeeds",
        "Established": "1982",
        "Hours": "Thu-Sun 10-5",
        "Latitude": "39.299829",
        "Longitude": "-82.038317",
        "Street": "N Coolville Ridge Rd",
        "County": "Athens County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.038317,
          39.299829
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Comstock Seed",
        "Address": "917 Hwy 88, Gardenerville, NV, 89460",
        "City": "Gardenerville",
        "State": "NV",
        "Zip Code": "89460",
        "Country": "USA",
        "Contact": "Ed Kleiner",
        "Phone": "775.265.0090",
        "Fax": "775.265.0040",
        "Email": "ed@comstockseed.com",
        "Website": "http://www.comstockseed.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail",
        "Product": "Seeds",
        "Latitude": "38.903959",
        "Longitude": "-119.778874",
        "Street": "State Rte 88",
        "County": "Douglas County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.778874,
          38.903959
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Confreda Greenhouses & Farms",
        "Address": "2150 Scituate Ave, Hope, RI, 02831-1882",
        "City": "Hope",
        "State": "RI",
        "Zip Code": "02831-1882",
        "Country": "USA",
        "Phone": "401.827.5000",
        "Fax": "401.826.3276",
        "Website": "https://www.confredafarms.com/",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "41.765906",
        "Longitude": "-71.544968",
        "Street": "Scituate Ave",
        "County": "Providence County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.544968,
          41.765906
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Conifer Kingdom",
        "Address": "6450 Brush Creek Dr NE, Silverton, OR, 97381",
        "City": "Silverton",
        "State": "OR",
        "Zip Code": "97381",
        "Country": "USA",
        "Phone": "503.874.4123",
        "Email": "info@coniferkingdom.com ",
        "Website": "https://www.coniferkingdom.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail\nInternet",
        "Product": "Plants",
        "Latitude": "45.019489",
        "Longitude": "-122.82541",
        "Street": "Brush Creek Dr NE",
        "County": "Marion County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.82541,
          45.019489
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Conservation Blueprint",
        "Address": "1070 18th Avenue, St. Paul, NE, 68873",
        "City": "St. Paul",
        "State": "NE",
        "Zip Code": "68873",
        "Country": "USA",
        "Contact": "Peter Berthelsen",
        "Phone": "308.390.0848",
        "Email": "peter@conservationblueprint.com",
        "Website": "http://www.conservationblueprint.com/",
        "Nursery Type": "Private",
        "Product": "Seeds\n",
        "Latitude": "41.292832",
        "Longitude": "-98.47314",
        "Street": "18th Ave",
        "County": "Howard County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -98.47314,
          41.292832
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Conservation Seeding & Restoration Inc",
        "Address": "506 Center St W, Kimberly, ID, 83341",
        "City": "Kimberly",
        "State": "ID",
        "Zip Code": "83341",
        "Country": "USA",
        "Contact": "Mike Preece",
        "Phone": "208.423.4835",
        "Fax": "208.423.4808",
        "Email": "info@csr-inc.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "42.533821",
        "Longitude": "-114.369147",
        "Street": "Center St W",
        "County": "Twin Falls County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -114.369147,
          42.533821
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Contour Lines Corp",
        "Address": "7a Calle Poniente #23, Antigua",
        "City": "Antigua",
        "Zip Code": "Antigua",
        "Country": "Guatemala",
        "Contact": "Thomas Leonard",
        "Phone": "910.547.5554",
        "Email": "thomas.leonard@contourlines.org",
        "Website": "https://contourlines.org/",
        "Latitude": "45.160809",
        "Longitude": "-89.093942",
        "County": "Langlade County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.093942,
          45.160809
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Cornflower Farms",
        "Address": "9811 Sheldon Rd, Elk Grove, CA, 95624",
        "City": "Elk Grove",
        "State": "CA",
        "Zip Code": "95624",
        "Country": "USA",
        "Contact": "Jeff Doyle",
        "Phone": "916.689.1015",
        "Fax": "916.689.1968",
        "Email": "jd@cornflowerfarms.com",
        "Email 2": "natives@cornflowerfarms.com",
        "Website": "http://www.cornflowerfarms.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Established": "1981",
        "Hours": "M-F 7-7:30",
        "Latitude": "38.439057",
        "Longitude": "-121.329057",
        "Street": "Sheldon Rd",
        "County": "Sacramento County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.329057,
          38.439057
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Country Landscapes Inc",
        "Address": "56985 Lincoln Hwy, Ames, IA, 50010",
        "City": "Ames",
        "State": "IA",
        "Zip Code": "50010",
        "Country": "USA",
        "Contact": "Renee Hanlon",
        "Phone": "515.232.6864",
        "Fax": "515.232.8325",
        "Email": "info@countrylandscapes.com",
        "Email 2": "info@countrylandscapes.com",
        "Website": "http://www.countrylandscapes.com/",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "42.023097",
        "Longitude": "-93.561268",
        "Street": "E Lincoln Hwy",
        "County": "Story County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.561268,
          42.023097
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Country Road Greenhouses LLC",
        "Address": "19561 E Twombly, Rochelle, IL, 61068",
        "City": "Rochelle",
        "State": "IL",
        "Zip Code": "61068",
        "Country": "USA",
        "Contact": "Peggy and Bryan Redington",
        "Phone": "815.384.3311",
        "Fax": "815.384.5015",
        "Email": "crginc@prairieplugs.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nContract",
        "Product": "Plants",
        "Established": "1983",
        "Hours": "M-F 8-5",
        "Latitude": "41.949529",
        "Longitude": "-88.970021",
        "Street": "E Twombly Rd",
        "County": "Ogle County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.970021,
          41.949529
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Countryside Trees",
        "Address": "290 Meadow Glade Dr, San Antonio, TX, 78227",
        "City": "San Antonio",
        "State": "TX",
        "Zip Code": "78227",
        "Country": "USA",
        "Contact": "Ron Wells",
        "Phone": "210.674.1693",
        "Fax": "210.674.1693",
        "Email": "info@countrysidetrees.com",
        "Website": "http://www.countrysidetrees.com",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "29.426332",
        "Longitude": "-98.648965",
        "Street": "Meadow Glade Dr",
        "County": "Bexar County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -98.648965,
          29.426332
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "County of Los Angeles Fire Dept",
        "Address": "Forestry Division, 5823 Rickenbacker Rd Rm 123, Commerce, CA, 90040-3027",
        "City": "5823 Rickenbacker Rd Rm 123",
        "State": "CA",
        "Zip Code": "90040-3027",
        "Country": "USA",
        "Contact": "John Todd",
        "Phone": "323.890.4330",
        "Fax": "323.890.4335",
        "Email": "JTodd@fire.lacounty.gov",
        "Email 2": "Forestry_FB@fire.lacounty.gov",
        "Website": "http://www.fire.lacounty.gov/",
        "Nursery Type": "State",
        "Business Type": "Wholesale",
        "Product": "Seeds",
        "Latitude": "33.989248",
        "Longitude": "-118.161479",
        "Street": "Rickenbacker Rd",
        "County": "Los Angeles County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.161479,
          33.989248
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Creekside Gardens",
        "Address": "PO Box 357, Miranda, CA, 95553",
        "City": "Miranda",
        "State": "CA",
        "Zip Code": "95553",
        "Country": "USA",
        "Contact": "Consuelo Evans",
        "Phone": "707.367.1961",
        "Email": "creeksideg@aol.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "40.23548",
        "Longitude": "-123.845935",
        "County": "Humboldt County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.845935,
          40.23548
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Cricket Hill Garden",
        "Address": "670 Walnut Hill Rd, Thomaston, CT, 06787",
        "City": "Thomaston",
        "State": "CT",
        "Zip Code": "06787",
        "Country": "USA",
        "Contact": "David or Kasha Furman",
        "Phone": "186.028.3104",
        "Fax": "860.283.5508",
        "Email": "kasha@treepeony.com",
        "Email 2": "crickethill@treepeony.com",
        "Website": "http://www.treepeony.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "41.687643",
        "Longitude": "-73.099501",
        "Street": "Walnut Hill Rd",
        "County": "Naugatuck Valley Planning Region"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.099501,
          41.687643
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Croshaw Nursery",
        "Address": "113 Mill Ln, Columbus, NJ, 08022",
        "City": "Columbus",
        "State": "NJ",
        "Zip Code": "08022",
        "Country": "USA",
        "Contact": "David Croshaw",
        "Phone": "609.298.0477",
        "Fax": "609.298.6388",
        "Email": "croshawnursery@mac.com",
        "Website": "http://www.croshawnursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Seeds",
        "Latitude": "40.079603",
        "Longitude": "-74.728413",
        "Street": "Mill Ln W",
        "County": "Burlington County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.728413,
          40.079603
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Curry Native Plants",
        "Address": "92545 Silver Butte Rd, Port Orford, OR, 97465",
        "City": "Port Orford",
        "State": "OR",
        "Zip Code": "97465",
        "Country": "USA",
        "Contact": "Dale Lee",
        "Phone": "541.332.5635",
        "Email": "daleenews@hotmail.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "42.76869",
        "Longitude": "-124.502108",
        "Street": "Silver Butte Rd",
        "County": "Curry County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -124.502108,
          42.76869
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Custom Seed Services",
        "Address": "16 E Main St, Panama, IA, 51562",
        "City": "Panama",
        "State": "IA",
        "Zip Code": "51562",
        "Country": "USA",
        "Contact": "Roger Schwery",
        "Phone": "712.784.2430",
        "Fax": "712.784.2530",
        "Email": "customseed@iowatelecom.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Seeds",
        "Latitude": "41.726487",
        "Longitude": "-95.471731",
        "Street": "E Main St",
        "County": "Shelby County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.471731,
          41.726487
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "D Wells Farms",
        "Address": "PO Box 336, Hubbard, OR, 97032",
        "City": "Hubbard",
        "State": "OR",
        "Zip Code": "97032",
        "Country": "USA",
        "Contact": "Daniel",
        "Phone": "503.982.1012",
        "Fax": "503.981.8420",
        "Email": "sales@dwellsfarms.com",
        "Website": "http://dwellsfarm.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "45.1969",
        "Longitude": "-122.812012",
        "County": "Marion County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.812012,
          45.1969
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "DR Bates",
        "Address": "17639 64th Pl N, Loxahatchee, FL, 33470",
        "City": "Loxahatchee",
        "State": "FL",
        "Zip Code": "33470",
        "Country": "USA",
        "Contact": "David Bates",
        "Phone": "561.790.3246",
        "Fax": "561.795.3366",
        "Email": "drbates@earthlink.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "26.772263",
        "Longitude": "-80.321772",
        "Street": "64th Pl N",
        "County": "Palm Beach County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.321772,
          26.772263
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "DeLange Seed Inc",
        "Address": "537 W Hwy 47, Girard, KS, 66743",
        "City": "Girard",
        "State": "KS",
        "Zip Code": "66743",
        "Country": "USA",
        "Contact": "Steve Ahring",
        "Phone": "800.962.5429",
        "Fax": "620.724.6222",
        "Email": "steve@delangeseed.com",
        "Email 2": "delangeseed@ckt.net",
        "Website": "http://www.delangeseed.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Seeds",
        "Established": "1970",
        "Hours": "M-F 8-5 Sat 8-12",
        "Latitude": "37.51398",
        "Longitude": "-94.913425",
        "Street": "W 47 Hwy",
        "County": "Crawford County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.913425,
          37.51398
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Dean Swift Seed Company",
        "Address": "P O  Box 908, Alamosa, CO, 81101",
        "City": "Alamosa",
        "State": "CO",
        "Zip Code": "81101",
        "Country": "USA",
        "Contact": "Dean Swift",
        "Phone": "719.589.3499",
        "Fax": "719.589.3299",
        "Email": "dean@deanswiftseed.com",
        "Website": "http://deanswiftseed.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Seeds",
        "Latitude": "37.479933",
        "Longitude": "-105.790967",
        "County": "Alamosa County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -105.790967,
          37.479933
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Delaware Native Plant Society",
        "Address": "PO Box 369, Dover, DE, 19901",
        "City": "Dover",
        "State": "DE",
        "Zip Code": "19901",
        "Country": "USA",
        "Contact": "Eric Zuelke",
        "Phone": "302.735.8918",
        "Email": "ezuelke@juno.com",
        "Email 2": "william.mcavoy@state.de.us",
        "Website": "http://www.delawarenativeplants.org/",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "39.156376",
        "Longitude": "-75.49549",
        "County": "Kent County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.49549,
          39.156376
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Delmarva Native Plants",
        "Address": "P O  Box 1312, Hurlock, MD, 21643",
        "City": "Hurlock",
        "State": "MD",
        "Zip Code": "21643",
        "Country": "USA",
        "Contact": "Jilian Parisi",
        "Phone": "410.972.9161",
        "Email": "Jillian@DelmarvaNativePlants.com",
        "Website": "https://delmarvanativeplants.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nContract",
        "Product": "Plants",
        "Latitude": "38.643824",
        "Longitude": "-75.863003",
        "County": "Dorchester County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.863003,
          38.643824
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Delta-View Nursery",
        "Address": "659 Burdette Rd, Leland, MS, 38756",
        "City": "Leland",
        "State": "MS",
        "Zip Code": "38756",
        "Country": "USA",
        "Phone": "800.748.9018",
        "Fax": "662.686.2353",
        "Email": "hardwoods@tecinfo.com",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "33.342822",
        "Longitude": "-90.955283",
        "Street": "Burdett Rd",
        "County": "Washington County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.955283,
          33.342822
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Deluxe Trees and Shrubs",
        "Address": "6306 SW Carlton Ave, Arcadia, FL, 34266",
        "City": "Arcadia",
        "State": "FL",
        "Zip Code": "34266",
        "Country": "USA",
        "Contact": "Charles or Darlene Foster",
        "Phone": "863.494.1488",
        "Fax": "863.993.9369",
        "Email": "darlene@deluxetrees.com",
        "Website": "http://www.deluxetrees.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "27.132418",
        "Longitude": "-81.87636",
        "Street": "SW Carlton Ave",
        "County": "Desoto County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.87636,
          27.132418
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Derby Canyon Natives",
        "Address": "9750 Derby Canyon Rd, Peshastin, WA, 98847",
        "City": "Peshastin",
        "State": "WA",
        "Zip Code": "98847",
        "Country": "USA",
        "Contact": "Mel Asher",
        "Phone": "509.240.9792",
        "Email": "mel@derbycanyonnatives.com",
        "Website": "http://www.derbycanyonnatives.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nContract",
        "Product": "Plants",
        "Established": "2002",
        "Hours": "Fridays 9-5, Saturday 8-12, April-October",
        "Latitude": "47.571348",
        "Longitude": "-120.595283",
        "Street": "Derby Canyon Rd",
        "County": "Chelan County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.595283,
          47.571348
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Desert Enterprises",
        "Address": "25202 W Rockaway Hills, Morristown, AZ, 85342",
        "City": "Morristown",
        "State": "AZ",
        "Zip Code": "85342",
        "Country": "USA",
        "Contact": "Judith Clement",
        "Phone": "623.388.2448",
        "Fax": "623.388.9805",
        "Email": "desertent@aol.com",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "33.854976",
        "Longitude": "-112.619753",
        "Street": "W Rockaway Hills Rd",
        "County": "Maricopa County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -112.619753,
          33.854976
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Desert Jewels Nursery",
        "Address": "9809 E Upriver Dr, Spokane, WA, 99206",
        "City": "Spokane",
        "State": "WA",
        "Zip Code": "99206",
        "Country": "USA",
        "Contact": "Diane Stutzman",
        "Phone": "509.893.3771",
        "Phone 2": "509.990.9497",
        "Email": "info@desertjewelsnursery.com",
        "Website": "http://www.desertjewelsnursery.com",
        "Nursery Type": "Private",
        "Business Type": "Retail\nContract",
        "Product": "Plants",
        "Latitude": "47.697129",
        "Longitude": "-117.272914",
        "Street": "E Upriver Dr",
        "County": "Spokane County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.272914,
          47.697129
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Desert Land Nursery",
        "Address": "11306 Gateway E, El Paso, TX, 79927",
        "City": "El Paso",
        "State": "TX",
        "Zip Code": "79927",
        "Country": "USA",
        "Contact": "Sarah M Guerra-Brown",
        "Phone": "915.858.1130",
        "Email": "desertland@att.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants\nSeeds",
        "Established": "1970",
        "Hours": "M-Sat 8-5 Sun 10-5 spring/summer; M-Sun 10-4 fall/winter",
        "Latitude": "31.644008",
        "Longitude": "-106.272524",
        "County": "El Paso County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -106.272524,
          31.644008
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Desert Survivors",
        "Address": "1020 W Starr Pass, Tucson, AZ, 85713",
        "City": "Tucson",
        "State": "AZ",
        "Zip Code": "85713",
        "Country": "USA",
        "Contact": "Jim Verrier",
        "Phone": "520.791.9309",
        "Phone 2": "520.791.9309",
        "Fax": "520.884.0940",
        "Email": "jim@desertsurvivors.org",
        "Website": "http://www.desertsurvivors.org",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "32.207026",
        "Longitude": "-110.987108",
        "Street": "W Starr Pass Blvd",
        "County": "Pima County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -110.987108,
          32.207026
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Desert Trees Nursery",
        "Address": "9559 N Camino Del Plata, Tucson, AZ, 85741",
        "City": "Tucson",
        "State": "AZ",
        "Zip Code": "85741",
        "Country": "USA",
        "Contact": "Roger Young",
        "Phone": "800.873.3041",
        "Phone 2": "520.297.5664",
        "Fax": "520.297.5035",
        "Email": "mfontez47@aol.com",
        "Website": "http://www.deserttreesnursery.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "32.380329",
        "Longitude": "-111.022855",
        "Street": "N Camino Del Plata",
        "County": "Pima County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.022855,
          32.380329
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Detlor Tree Farm",
        "Address": "PO Box 6, Plainfield, WI, 54966",
        "City": "Plainfield",
        "State": "WI",
        "Zip Code": "54966",
        "Country": "USA",
        "Phone": "715.335.4444",
        "Fax": "715.335.4442",
        "Email": "detcoinc@hotmail.com",
        "Website": "http://www.detcoinc.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "44.21386",
        "Longitude": "-89.49234",
        "County": "Waushara County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.49234,
          44.21386
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Dieter Martin Greenhouse Ltd",
        "Address": "Box 84, Langham, SK, S0K 2L0",
        "City": "Langham",
        "State": "SK",
        "Zip Code": "S0K 2L0",
        "Country": "Canada",
        "Contact": "Dieter Martin",
        "Phone": "306.283.4376",
        "Fax": "306.283.4908",
        "Email": "nancy@dietermartin.ca",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "0",
        "Longitude": "0"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          0,
          0
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Digging Dog Nursery",
        "Address": "31101 Middle Ridge Rd, Albion, CA, 95410",
        "City": "Albion",
        "State": "CA",
        "Zip Code": "95410",
        "Country": "USA",
        "Contact": "Lynn Chrysler or Marie Keller",
        "Phone": "707.937.1130",
        "Fax": "707.937.2480",
        "Email": "business@diggingdog.com",
        "Website": "http://www.diggingdog.com",
        "Nursery Type": "Private",
        "Business Type": "Mail",
        "Product": "Plants",
        "Latitude": "39.206684",
        "Longitude": "-123.717473",
        "Street": "Middle Ridge Rd",
        "County": "Mendocino County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.717473,
          39.206684
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Dingdong's Garden",
        "Address": "242 Lopez Hill Rd, Lopez Island, WA, 98261",
        "City": "Lopez Island",
        "State": "WA",
        "Zip Code": "98261",
        "Country": "USA",
        "Contact": "Mark Allen",
        "Website": "http://www.dingdongsgarden.com/",
        "Nursery Type": "Private",
        "Business Type": "Retail\nMail",
        "Product": "Plants",
        "Latitude": "48.476437",
        "Longitude": "-122.894689",
        "Street": "Lopez Hill Rd",
        "County": "San Juan County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.894689,
          48.476437
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Direct Native Plants",
        "Address": "P O  Box 246, Middle River, MD, 21220",
        "City": "Middle River",
        "State": "MD",
        "Zip Code": "21220",
        "Country": "USA",
        "Contact": "Roy List; Mike McConnell",
        "Phone": "443.371.3700",
        "Email": "roy.l@americannativeplants.com",
        "Website": "https://www.directnativeplants.com/",
        "Nursery Type": "Private",
        "Business Type": "Retail\nInternet",
        "Product": "Plants",
        "Latitude": "39.33428",
        "Longitude": "-76.43161",
        "County": "Baltimore County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.43161,
          39.33428
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Diversity Farms",
        "Address": "25494 320th, Dedham, IA, 51440",
        "City": "Dedham",
        "State": "IA",
        "Zip Code": "51440",
        "Country": "USA",
        "Contact": "Kay or John",
        "Phone": "712.683.5555",
        "Fax": "712.683.5555",
        "Email": "diverstyfarms@iowatelecom.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "41.89179",
        "Longitude": "-94.793353",
        "Street": "320th St",
        "County": "Carroll County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.793353,
          41.89179
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Doak Creek Native Plant Nursery",
        "Address": "83331 Jackson Marlow Rd, Eugene, OR, 97405",
        "City": "Eugene",
        "State": "OR",
        "Zip Code": "97405",
        "Country": "USA",
        "Contact": "Cynthia Lafferty",
        "Phone": "541.521.9907",
        "Fax": "541.484.7358",
        "Email": "doakcreeknursery@gmail.com",
        "Website": "http://doakcreeknursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "43.905843",
        "Longitude": "-123.218218",
        "Street": "Jackson Marlow Rd",
        "County": "Lane County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.218218,
          43.905843
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Donaroma's Nursery",
        "Address": "271 Upper Main St, Edgartown, MA, 02539",
        "City": "Edgartown",
        "State": "MA",
        "Zip Code": "02539",
        "Country": "USA",
        "Contact": "Michael Donaroma",
        "Phone": "508.627.8366",
        "Phone 2": "508.627.8595",
        "Fax": "508.627.7855",
        "Email": "flowers@donaromas.com",
        "Website": "http://www.donaromas.com",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "41.394573",
        "Longitude": "-70.527106",
        "Street": "Upper Main St",
        "County": "Dukes County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -70.527106,
          41.394573
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Doremus Wholesale Nursery",
        "Address": "2167 CR 1550, Warren, TX, 77664",
        "City": "Warren",
        "State": "TX",
        "Zip Code": "77664",
        "Country": "USA",
        "Contact": "Mark or Ted",
        "Phone": "409.547.3536",
        "Fax": "409.547.3204",
        "Email": "edoremus3@aol.com",
        "Website": "https://www.plantant.com/nursery-availability/1005594/doremus-wholesale-nursery",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "30.582648",
        "Longitude": "-94.403582",
        "Street": "County Rd 1550",
        "County": "Tyler County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.403582,
          30.582648
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Douglass King Company Inc",
        "Address": "4627 Emil St, San Antonio, TX, 78219",
        "City": "San Antonio",
        "State": "TX",
        "Zip Code": "78219",
        "Country": "USA",
        "Contact": "Mason Kraus, Will Yancy, Dean Williams",
        "Phone": "210.661.4191",
        "Fax": "210.661.8972",
        "Email": "sales@dkseeds.com",
        "Website": "http://www.dkseeds.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Seeds",
        "Latitude": "29.434099",
        "Longitude": "-98.40215",
        "Street": "Emil St",
        "County": "Bexar County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -98.40215,
          29.434099
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Doyle Farm Nursery",
        "Address": "158 Norris Rd, Delta, PA, 17314",
        "City": "Delta",
        "State": "PA",
        "Zip Code": "17314",
        "Country": "USA",
        "Contact": "Jacquelin L Doyle",
        "Phone": "717.862.3134",
        "Fax": "717.862.3134",
        "Email": "jld@doylefarm.com",
        "Website": "http://www.doylefarm.com/index.html",
        "Nursery Type": "Private",
        "Business Type": "Mail\nInternet",
        "Product": "Plants\nSeeds",
        "Hours": "M-F 9-5",
        "Latitude": "39.786103",
        "Longitude": "-76.368823",
        "Street": "Norris Rd",
        "County": "York County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.368823,
          39.786103
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Draggin' Wing High Desert Nursery",
        "Address": "5300 Stinger St, Boise, ID, 83703",
        "City": "Boise",
        "State": "ID",
        "Zip Code": "83703",
        "Country": "USA",
        "Contact": "Diane Jones",
        "Phone": "208.345.4199",
        "Email": "diane@waterthriftyplants.com",
        "Website": "http://waterthriftyplants.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "43.668021",
        "Longitude": "-116.25507",
        "Street": "N Stinger St",
        "County": "Ada County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.25507,
          43.668021
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Drakes Crossing Nursery",
        "Address": "19774 Grade Rd SE, Silverton, OR, 97381",
        "City": "Silverton",
        "State": "OR",
        "Zip Code": "97381",
        "Country": "USA",
        "Phone": "503.873.4932",
        "Fax": "503.873.4933",
        "Email": "info@drakescrossingnursery.com",
        "Website": "http://www.drakescrossingnursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "44.926876",
        "Longitude": "-122.654227",
        "Street": "Grade Rd SE",
        "County": "Marion County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.654227,
          44.926876
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Dropseed Native Nursery",
        "Address": "1205 S Buckeye Ln, Goshen, KY, 40026",
        "City": "Goshen",
        "State": "KY",
        "Zip Code": "40026",
        "Country": "USA",
        "Contact": "Margaret Shea",
        "Phone": "502.439.9033",
        "Email": "margaret@dropseednursery.com",
        "Website": "http://www.dropseednursery.com",
        "Nursery Type": "Private",
        "Business Type": "Retail\nContract",
        "Product": "Plants\nSeeds",
        "Latitude": "38.403698",
        "Longitude": "-85.551475",
        "Street": "S Buckeye Ln",
        "County": "Oldham County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.551475,
          38.403698
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Dry Valley Nurseries",
        "Address": "667 Curtis Rd, Kelowna, BC, V1V 2C9",
        "City": "Kelowna",
        "State": "BC",
        "Zip Code": "V1V 2C9",
        "Country": "Canada",
        "Contact": "Steve Duncan",
        "Phone": "250.860.6468",
        "Fax": "250.860.6836",
        "Email": "dryvalleynurseries@shaw.ca",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "0",
        "Longitude": "0"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          0,
          0
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Durio Nursery",
        "Address": "5853 Hwy 182, Opelousas, LA, 70570",
        "City": "Opelousas",
        "State": "LA",
        "Zip Code": "70570",
        "Country": "USA",
        "Contact": "Dalton E Durio",
        "Phone": "337.948.3696",
        "Email": "dalton@durionursery.biz",
        "Website": "https://www.facebook.com/Durio-Nursery-106909859349206/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "30.550221",
        "Longitude": "-92.076022",
        "Street": "State Rte 182",
        "County": "St. Landry Parish"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -92.076022,
          30.550221
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Dwight Stansel Farm & Nursery",
        "Address": "5553 164th St, Wellborn, FL, 32094",
        "City": "Wellborn",
        "State": "FL",
        "Zip Code": "32094",
        "Country": "USA",
        "Contact": "Carol Stalvey",
        "Phone": "386.963.2827",
        "Fax": "386.963.1440",
        "Email": "dsfntte@windstream.net",
        "Website": "http://www.stanselnursery.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants\nSeeds",
        "Latitude": "30.152792",
        "Longitude": "-82.858437",
        "Street": "164th St",
        "County": "Suwannee County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.858437,
          30.152792
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "ECEC Native Plant Nursery",
        "Address": "15850 Hwy W, Elkton, OR, 97436",
        "City": "Elkton",
        "State": "OR",
        "Zip Code": "97436",
        "Country": "USA",
        "Phone": "541.584.2692",
        "Fax": "541.584.2692",
        "Email": "butterfly@cascadeaccess.com",
        "Website": "http://www.elktonbutterflies.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nContract",
        "Product": "Plants\nSeeds",
        "Latitude": "43.63762",
        "Longitude": "-123.56815",
        "County": "Douglas County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.56815,
          43.63762
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "ECOLAGE Purveyors of Wonder",
        "Address": "2623 W Sale Rd, Lake Charles, LA, 70605",
        "City": "Lake Charles",
        "State": "LA",
        "Zip Code": "70605",
        "Country": "USA",
        "Contact": "Steven Abramans",
        "Phone": "337.562.2188",
        "Phone 2": "866.562.8088",
        "Fax": "337.477.5992",
        "Email": "ecolage@bellsouth.net",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "30.183585",
        "Longitude": "-93.263195",
        "Street": "W Sale Rd",
        "County": "Calcasieu Parish"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.263195,
          30.183585
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "ELFS Landscaping Inc",
        "Address": "299 Walnut St, Rochester, NH, 03867",
        "City": "Rochester",
        "State": "NH",
        "Zip Code": "03867",
        "Country": "USA",
        "Contact": "Lenny Foss",
        "Phone": "603.332.8324",
        "Fax": "603.332.1523",
        "Email": "customerservice@elfslandscaping.com",
        "Website": "http://www.elfslandscaping.com",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "43.299781",
        "Longitude": "-71.028832",
        "Street": "Walnut St",
        "County": "Strafford County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.028832,
          43.299781
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Eagle Lake Nurseries Ltd",
        "Address": "Sw5 24 24 4W, Strathmore, AB, T1P 1K5",
        "City": "Strathmore",
        "State": "AB",
        "Zip Code": "T1P 1K5",
        "Country": "Canada",
        "Contact": "Tony Heuver",
        "Phone": "403.934.3670",
        "Fax": "403.934.3626",
        "Email": "roni@eaglelakenurseries.com",
        "Website": "http://www.eaglelakenurseries.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "40.790069",
        "Longitude": "-73.696465",
        "Street": "4th St",
        "County": "Nassau County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.696465,
          40.790069
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Earth Sangha",
        "Address": "6100 Cloud Dr, Springfield, VA, 22150",
        "City": "Springfield",
        "State": "VA",
        "Zip Code": "22150",
        "Country": "USA",
        "Contact": "Chris Bright",
        "Phone": "703.333.3022",
        "Email": "info@earthsangha.org",
        "Website": "https://www.earthsangha.org",
        "Nursery Type": "Not-for-Profit",
        "Business Type": "Retail\nContract",
        "Product": "Plants\nServices",
        "Latitude": "38.786",
        "Longitude": "-77.160277",
        "Street": "Cloud Dr",
        "County": "Fairfax County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.160277,
          38.786
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Earth Tones Native Plant Nursery",
        "Address": "212 Grassy Hill Rd, Woodbury, CT, 06798",
        "City": "Woodbury",
        "State": "CT",
        "Zip Code": "06798",
        "Country": "USA",
        "Contact": "Kyle or Lisa Turoczi",
        "Phone": "203.263.6626",
        "Email": "earthtones@charter.net",
        "Website": "http://www.earthtonesnatives.com/",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "41.536229",
        "Longitude": "-73.247905",
        "Street": "Grassy Hill Rd",
        "County": "Naugatuck Valley Planning Region"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.247905,
          41.536229
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "EarthBalance",
        "Address": "2579 N Toledo Blade Blvd, North Port, FL, 34289",
        "City": "North Port",
        "State": "FL",
        "Zip Code": "34289",
        "Country": "USA",
        "Contact": "Barbie Divinetti",
        "Phone": "888.536.2855",
        "Phone 2": "941.426.7878",
        "Fax": "941.426.8778",
        "Email": "divinetti@earthbalance.com",
        "Website": "http://www.earthbalance.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Established": "1985",
        "Hours": "M-F 8-5",
        "Latitude": "27.080795",
        "Longitude": "-82.155628",
        "Street": "N Toledo Blade Blvd",
        "County": "Sarasota County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.155628,
          27.080795
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Earthly Goods  Ltd ",
        "Address": "521 E Main St, New Albany, IN, 47150",
        "City": "New Albany",
        "State": "IN",
        "Zip Code": "47150",
        "Country": "USA",
        "Contact": "Ann Streckfus",
        "Phone": "812.944.2903",
        "Fax": "812.944",
        "Email": "info@earthlygoods.com",
        "Website": "http://www.earthlygoods.com",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Seeds",
        "Latitude": "38.2851",
        "Longitude": "-85.817481",
        "Street": "E Main St",
        "County": "Floyd County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.817481,
          38.2851
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "East Texas Seed Company",
        "Address": "1030-D E Commerce, Tyler, TX, 75702",
        "City": "Tyler",
        "State": "TX",
        "Zip Code": "75702",
        "Country": "USA",
        "Contact": "Bill",
        "Phone": "800.888.1371",
        "Phone 2": "903.597.6637",
        "Fax": "903.595.0106",
        "Email": "seeds@easttexasseedcompany.com",
        "Website": "http://easttexasseedcompany.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Seeds",
        "Latitude": "32.35588",
        "Longitude": "-95.289803",
        "Street": "E Commerce St",
        "County": "Smith County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.289803,
          32.35588
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Echo Nursery",
        "Address": "6615 CR 214, Keystone Heights, FL, 32656",
        "City": "Keystone Heights",
        "State": "FL",
        "Zip Code": "32656",
        "Country": "USA",
        "Contact": "Wes Tucker",
        "Phone": "352.475.1923",
        "Phone 2": "352.475.1923",
        "Fax": "352.475.5529",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "29.740027",
        "Longitude": "-82.013061",
        "Street": "County Rd 214",
        "County": "Clay County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.013061,
          29.740027
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Echo Valley Natives",
        "Address": "18883 S Ferguson Rd, Oregon City, OR, 97045",
        "City": "Oregon City",
        "State": "OR",
        "Zip Code": "97045",
        "Country": "USA",
        "Contact": "Elizabeth A Bluemmel",
        "Phone": "503.631.2451",
        "Fax": "503.631.2451",
        "Email": "echovalleynatives@msn.com",
        "Email 2": "info@echovalleynatives.com",
        "Website": "http://www.echovalleynatives.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Established": "2001",
        "Hours": "M-F 10-5 closed W",
        "Latitude": "45.333078",
        "Longitude": "-122.527902",
        "Street": "S Ferguson Rd",
        "County": "Clackamas County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.527902,
          45.333078
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Eco Gardens",
        "Address": "1346 S Indian Creek Dr, Stone Mountain, GA, 30083-5251",
        "City": "Stone Mountain",
        "State": "GA",
        "Zip Code": "30083-5251",
        "Country": "USA",
        "Contact": "Don Jacobs",
        "Phone": "404.294.6468",
        "Fax": "404.294.8173",
        "Email": "ecogardens@bellsouth.net",
        "Nursery Type": "Private",
        "Business Type": "Retail\nMail",
        "Product": "Plants",
        "Latitude": "33.757693",
        "Longitude": "-84.219494",
        "Street": "S Indian Creek Dr",
        "County": "Dekalb County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.219494,
          33.757693
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Ecological Consultants Inc",
        "Address": "5121 Ehrlich Rd  Ste 103A, Tampa, FL, 33624",
        "City": "Tampa",
        "State": "FL",
        "Zip Code": "33624",
        "Country": "USA",
        "Contact": "Donald Richardson",
        "Phone": "813.264.5859",
        "Fax": "813.264.5957",
        "Email": "fo.eci@verison.net",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Services",
        "Latitude": "28.08525",
        "Longitude": "-82.536524",
        "Street": "Ehrlich Rd",
        "County": "Hillsborough County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.536524,
          28.08525
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Ecotone  Inc ",
        "Address": "129 Industry Ln, Forest Hill, MD, 21050",
        "City": "Forest Hill",
        "State": "MD",
        "Zip Code": "21050",
        "Country": "USA",
        "Contact": "Connor Horne",
        "Phone": "410.420.2600",
        "Fax": "410.420.6983",
        "Email": "chorne@ecotoneinc.com",
        "Website": "https://www.ecotoneinc.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "39.577033",
        "Longitude": "-76.37243",
        "Street": "Industry Ln",
        "County": "Harford County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.37243,
          39.577033
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Edge of the Prairie Wildflowers",
        "Address": "1641 W Oak Hill Rd, Crawfordsville, IN, 47933",
        "City": "Crawfordsville",
        "State": "IN",
        "Zip Code": "47933",
        "Country": "USA",
        "Phone": "765.362.0915",
        "Email": "edgeoftheprairie@webtv.net",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Established": "1999",
        "Hours": "by appt",
        "Latitude": "40.057928",
        "Longitude": "-86.931346",
        "Street": "W Oak Hill Rd",
        "County": "Montgomery County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.931346,
          40.057928
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Edge of the Woods Native Plant Nursery LLC",
        "Address": "2415 Rt 100, Orefield, PA, 18069",
        "City": "Orefield",
        "State": "PA",
        "Zip Code": "18069",
        "Country": "USA",
        "Contact": "Louise Schaefer",
        "Phone": "610.395.2570",
        "Fax": "610.285.2471",
        "Email": "info@edgeofthewoods.com",
        "Website": "http://www.edgeofthewoodsnursery.com/",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "40.60656",
        "Longitude": "-75.640877",
        "Street": "PA Route 100",
        "County": "Lehigh County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.640877,
          40.60656
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Edible Landscaping",
        "Address": "361 Spirit Ridge Lane, Afton, VA, 22920",
        "City": "Afton",
        "State": "VA",
        "Zip Code": "22920",
        "Country": "USA",
        "Phone": "434.361.9134",
        "Email": "info@ediblelandscaping.com",
        "Website": "https://ediblelandscaping.com/",
        "Nursery Type": "Private",
        "Business Type": "Retail\nInternet",
        "Product": "Plants",
        "Latitude": "37.951345",
        "Longitude": "-78.858521",
        "Street": "Spirit Ridge Ln",
        "County": "Nelson County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.858521,
          37.951345
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Edith J Carrier Arboretum",
        "Address": "780 University Blvd, Harrisonburg, VA, 22807",
        "City": "Harrisonburg",
        "State": "VA",
        "Zip Code": "22807",
        "Country": "USA",
        "Phone": "540.568.3194",
        "Email": "ejcarboretum@jmu.edu",
        "Website": "www.jmu.edu/arboretum",
        "Nursery Type": "State",
        "Business Type": "Retail\nInternet",
        "Product": "Plants",
        "Latitude": "38.428991",
        "Longitude": "-78.862991",
        "Street": "University Blvd",
        "County": "Harrisonburg City"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.862991,
          38.428991
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Edwards Greenhouse",
        "Address": "4106 Sand Creek St, Boise, ID, 83703",
        "City": "Boise",
        "State": "ID",
        "Zip Code": "83703",
        "Country": "USA",
        "Contact": "Trisha",
        "Phone": "208.342.7548",
        "Fax": "203.342.0411",
        "Email": "info@edwardsgreenhouse.com",
        "Website": "http://www.edwardsgreenhouse.com/",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "43.657123",
        "Longitude": "-116.239883",
        "Street": "Sand Creek St",
        "County": "Ada County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.239883,
          43.657123
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "El Nativo Growers ",
        "Address": "200 S Peckham Rd, Azusa, CA, 91702",
        "City": "Azusa",
        "State": "CA",
        "Zip Code": "91702",
        "Country": "USA",
        "Contact": "James Campbell",
        "Phone": "626.969.8449",
        "Fax": "626.969.7299",
        "Email": "sales@elnativogrowers.com",
        "Website": "http://www.elnativogrowers.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nInternet",
        "Product": "Plants",
        "Established": "1996",
        "Hours": "M-F 7:30-4 Sat 7-11",
        "Latitude": "34.119843",
        "Longitude": "-117.937336",
        "Street": "S Peckham Rd",
        "County": "Los Angeles County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.937336,
          34.119843
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Elk Mountain Nursery",
        "Address": "142 Ward Cove Rd, Ashville, NC, 28804",
        "City": "Ashville",
        "State": "NC",
        "Zip Code": "28804",
        "Country": "USA",
        "Contact": "Craig Mailloux",
        "Phone": "828.683.9330",
        "Email": "craig@elkmountain.com",
        "Website": "http://elk-mountain.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "35.647839",
        "Longitude": "-82.564371",
        "County": "Buncombe County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.564371,
          35.647839
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Elkhorn Native Plant Nursery",
        "Address": "1957 B Hwy 1, Moss Landing, CA, 95039",
        "City": "Moss Landing",
        "State": "CA",
        "Zip Code": "95039",
        "Country": "USA",
        "Contact": "Rob de Bree",
        "Phone": "831.763.1207",
        "Fax": "831.763.1659",
        "Email": "enpn@elkhornnursery.com",
        "Website": "http://www.elkhornnursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "36.831406",
        "Longitude": "-121.750927",
        "Street": "Hwy 1",
        "County": "Monterey County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.750927,
          36.831406
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Elmore Roots Nursery",
        "Address": "631 Symonds Mill Rd, Wolcott, VT, 05680",
        "City": "Wolcott",
        "State": "VT",
        "Zip Code": "05680",
        "Country": "USA",
        "Contact": "David",
        "Phone": "802.888.3305",
        "Fax": "802.888.8885",
        "Email": "fruitpal@elmoreroots.com",
        "Website": "http://www.elmoreroots.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail\nInternet",
        "Product": "Plants\nSeeds",
        "Latitude": "44.502798",
        "Longitude": "-72.489778",
        "Street": "Symonds Mill Rd",
        "County": "Lamoille County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.489778,
          44.502798
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Emerald Seed and Supply",
        "Address": "6535 NE 11th St, Redmond, OR, 97756",
        "City": "Redmond",
        "State": "OR",
        "Zip Code": "97756",
        "Country": "USA",
        "Contact": "Arman Kluehe",
        "Phone": "541.504.0307",
        "Email": "emeraldss@ykwc.net",
        "Website": "http://www.emeraldseedandsupply.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail",
        "Product": "Seeds",
        "Hours": "Please Call",
        "Latitude": "44.337554",
        "Longitude": "-121.155959",
        "Street": "NE 11th St",
        "County": "Deschutes County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.155959,
          44.337554
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Enchanted Gardens",
        "Address": "6420 FM 359, Richmond, TX, 77469",
        "City": "Richmond",
        "State": "TX",
        "Zip Code": "77469",
        "Country": "USA",
        "Phone": "281.341.1206",
        "Fax": "281.341.5034",
        "Email": "jennifer@enchantedgardensrichmond.com",
        "Website": "http://myenchanted.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "29.630166",
        "Longitude": "-95.806129",
        "Street": "Farm To Market Rd 359",
        "County": "Fort Bend County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.806129,
          29.630166
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Enchanter's Gardens",
        "Address": "HC 77 Box 108, Hinton, WV, 25951",
        "City": "Hinton",
        "State": "WV",
        "Zip Code": "25951",
        "Country": "USA",
        "Contact": "Ian Caton",
        "Phone": "304.466.2145",
        "Email": "enchantersgarden@gmail.com",
        "Website": "http://www.enchantersgarden.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants\nSeeds",
        "Established": "1995",
        "Hours": "by appt",
        "Latitude": "37.645544",
        "Longitude": "-80.864634",
        "County": "Summers County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.864634,
          37.645544
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Engel's Nursery Inc",
        "Address": "6432 120th Ave, Fennville, MI, 49408",
        "City": "Fennville",
        "State": "MI",
        "Zip Code": "49408",
        "Country": "USA",
        "Contact": "Jim Engel",
        "Phone": "269.543.4123",
        "Fax": "888.416.6425",
        "Email": "info@engelsnursery.com",
        "Website": "http://www.engelsnursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail",
        "Product": "Plants\nSeeds",
        "Latitude": "42.563732",
        "Longitude": "-86.17504",
        "Street": "120th Ave",
        "County": "Allegan County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.17504,
          42.563732
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Environmental Concern Inc",
        "Address": "201 Boundary Ln, St Michaels, MD, 21663",
        "City": "St Michaels",
        "State": "MD",
        "Zip Code": "21663",
        "Country": "USA",
        "Phone": "410.745.9620",
        "Fax": "410.745.4066",
        "Email": "nursery-sales@wetland.org",
        "Website": "https://wetland.org/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Established": "1972",
        "Hours": "M-F 8-4:30 by appt",
        "Latitude": "38.780415",
        "Longitude": "-76.224448",
        "Street": "Boundary Ln",
        "County": "Talbot County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.224448,
          38.780415
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Environmental Seed Producers",
        "Address": "PO Box 947, Albany, OR, 97321-0354",
        "City": "Albany",
        "State": "OR",
        "Zip Code": "97321-0354",
        "Country": "USA",
        "Contact": "Craig Edminster",
        "Phone": "541.928.5868",
        "Fax": "541.928.5581",
        "Email": "craig@wildflowerseed.com",
        "Website": "http://www.wildflowerseed.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Seeds",
        "Latitude": "44.65345",
        "Longitude": "-123.139526",
        "County": "Benton County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.139526,
          44.65345
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Envirotech Nursery",
        "Address": "5380 TWP 143 NE, Somerset, OH, 43783",
        "City": "Somerset",
        "State": "OH",
        "Zip Code": "43783",
        "Country": "USA",
        "Contact": "Carla Stimmel",
        "Phone": "740.743.1669",
        "Fax": "740.743.1644",
        "Email": "nursery@envirotechcon.com",
        "Email 2": "info@envirotechcon.com",
        "Website": "http://www.envirotechcon.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Established": "1994",
        "Hours": "M-F 9-5",
        "Latitude": "39.765787",
        "Longitude": "-82.293918",
        "Street": "Twp Rd 143 NE",
        "County": "Perry County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.293918,
          39.765787
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Ernst Conservation Seeds",
        "Address": "8884 Mercer Pike, Meadville, PA, 16335",
        "City": "Meadville",
        "State": "PA",
        "Zip Code": "16335",
        "Country": "USA",
        "Phone": "800.873.3321",
        "Fax": "814.336.5191",
        "Email": "sales@ernstseed.com",
        "Website": "https://www.ernstseed.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Seeds",
        "Established": "1964",
        "Hours": "M-F 8:00-5:00 (Sat 8:00-12:00 seasonally)",
        "Latitude": "41.589528",
        "Longitude": "-80.153206",
        "Street": "Mercer Pike",
        "County": "Crawford County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.153206,
          41.589528
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Evergreen Nursery",
        "Address": "26479 Hwy 74, Kittredge, CO, 80457",
        "City": "Kittredge",
        "State": "CO",
        "Zip Code": "80457",
        "Country": "USA",
        "Contact": "Tammy",
        "Phone": "303.674.2132",
        "Fax": "303.674.0608",
        "Email": "info@evergreen.nursery.com",
        "Website": "http://www.baileynurseries.com/",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "39.655285",
        "Longitude": "-105.304483",
        "Street": "State Hwy 74",
        "County": "Jefferson County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -105.304483,
          39.655285
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Evergreen Nursery Company Inc",
        "Address": "5027 CR TT, Sturgeon Bay, WI, 54235",
        "City": "Sturgeon Bay",
        "State": "WI",
        "Zip Code": "54235",
        "Country": "USA",
        "Contact": "Vickey Vanderhoof",
        "Phone": "920.743.4464",
        "Phone 2": "800.448.5691",
        "Fax": "920.743.9184",
        "Email": "vickey@evergreennurseryco.com or quality@evergreennurseryco.com",
        "Email 2": "doris@evergreennurseryco.com",
        "Website": "http://www.evergreennurseryco.com",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "44.834753",
        "Longitude": "-87.302707",
        "Street": "County Rd Tt",
        "County": "Door County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.302707,
          44.834753
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "FW Schumacher Co Inc",
        "Address": "36 Spring Hill Rd, East Sandwich, MA, 02537",
        "City": "East Sandwich",
        "State": "MA",
        "Zip Code": "02537",
        "Country": "USA",
        "Phone": "508.888.0659",
        "Fax": "508.833.0322",
        "Email": "treeseed@capecod.net",
        "Website": "https://www.treeshrubseeds.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Seeds",
        "Established": "1926",
        "Latitude": "41.749994",
        "Longitude": "-70.467134",
        "Street": "Spring Hill Rd",
        "County": "Barnstable County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -70.467134,
          41.749994
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Fairview Evergreen Nurseries Inc",
        "Address": "7463 W Ridge Rd, Fairview, PA, 16415",
        "City": "Fairview",
        "State": "PA",
        "Zip Code": "16415",
        "Country": "USA",
        "Phone": "814.474.5712",
        "Fax": "800.343.6819",
        "Email": "feninc@velocity.net",
        "Website": "http://www.fairviewevergreen.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "42.032048",
        "Longitude": "-80.254462",
        "Street": "W Ridge Rd",
        "County": "Erie County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.254462,
          42.032048
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Fairweather Gardens",
        "Address": "PO Box 330, Greenwich, NJ, 08323",
        "City": "Greenwich",
        "State": "NJ",
        "Zip Code": "08323",
        "Country": "USA",
        "Contact": "Robert Hoffman or Robert Popham",
        "Phone": "856.451.6261",
        "Fax": "856.451.0303",
        "Website": "http://www.fairweathergardens.com",
        "Nursery Type": "Private",
        "Business Type": "Retail\nMail",
        "Product": "Plants",
        "Latitude": "39.405498",
        "Longitude": "-75.320881",
        "County": "Cumberland County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.320881,
          39.405498
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Fancy Fronds",
        "Address": "40830 172nd St SE, Goldbar, WA, 98251",
        "City": "Goldbar",
        "State": "WA",
        "Zip Code": "98251",
        "Country": "USA",
        "Contact": "Judith I Jones",
        "Phone": "360.793.1472",
        "Fax": "360.793.4243",
        "Email": "judith@fancyfronds.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "47.841202",
        "Longitude": "-121.683847",
        "Street": "172nd St SE",
        "County": "Snohomish County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.683847,
          47.841202
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Far North Tree and Seed Company",
        "Address": "5150 N Gina Dr, Palmer, AK, 99645",
        "City": "Palmer",
        "State": "AK",
        "Zip Code": "99645",
        "Country": "USA",
        "Contact": "Nick Mihalow",
        "Phone": "907.982.4011",
        "Fax": "907.745.4024",
        "Email": "nick@farnorthtreeandseed.com",
        "Website": "http://www.farnorthtreeandseed.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Seeds",
        "Established": "1985",
        "Hours": "M-Sa, by appt",
        "Latitude": "61.639616",
        "Longitude": "-149.060386",
        "Street": "N Gina Dr",
        "County": "Matanuska-Susitna Borough"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -149.060386,
          61.639616
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Ferguson Tree Nursery",
        "Address": "275 CR 44, Kemptville, ON, K0G 1J0",
        "City": "Kemptville",
        "State": "ON",
        "Zip Code": "K0G 1J0",
        "Country": "Canada",
        "Contact": "Maureen Jacques",
        "Phone": "613.258.0110",
        "Email": "Business_development@fergusontreenursery.ca",
        "Website": "https://www.fergusontreenursery.ca/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail\nInternet\nContract\nResearch",
        "Product": "Plants",
        "Latitude": "0",
        "Longitude": "0"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          0,
          0
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Fernwood Nursery",
        "Address": "909 S Stage Rd , Medford, OR, 97501",
        "City": "Medford",
        "State": "OR",
        "Zip Code": "97501",
        "Country": "USA",
        "Contact": "Bob Tewksbury",
        "Phone": "541.857.8577",
        "Fax": "541.472.0689",
        "Email": "fernwoodnursery@yahoo.com ",
        "Website": "https://www.fernwoodnursery.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "42.292058",
        "Longitude": "-122.882299",
        "Street": "S Stage Rd",
        "County": "Jackson County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.882299,
          42.292058
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Fieldstone Gardens Inc",
        "Address": "55 Quaker Ln, Vassalboro, ME, 04989",
        "City": "Vassalboro",
        "State": "ME",
        "Zip Code": "04989",
        "Country": "USA",
        "Contact": "Steve Jones",
        "Phone": "207.923.3836",
        "Email": "Steve@FieldstoneGardens.com",
        "Email 2": "sales@fieldstonegardens.com",
        "Website": "https://www.FieldstoneGardens.com",
        "Nursery Type": "Private",
        "Business Type": "Retail\nMail\nInternet",
        "Product": "Plants",
        "Established": "1982",
        "Hours": "Seasonal Hours:   April 1 - October 31 7 Days a week 9am - 5pm.  Off Season:  Hours November 1 - March 31 Monday - Friday 9am - 5pm",
        "Latitude": "44.430196",
        "Longitude": "-69.633238",
        "Street": "Quaker Ln",
        "County": "Kennebec County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -69.633238,
          44.430196
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Firetrail Nursery",
        "Address": "3107 140th St NW, Marysville, WA, 98271",
        "City": "Marysville",
        "State": "WA",
        "Zip Code": "98271",
        "Country": "USA",
        "Contact": "Linda Date",
        "Phone": "360.652.9021",
        "Fax": "360.652.8932",
        "Email": "firetrailnursery@hotmail.com",
        "Website": "http://www.firetrailnursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Established": "1985",
        "Hours": "9-4, by appt",
        "Latitude": "48.124128",
        "Longitude": "-122.275642",
        "Street": "140th St NW",
        "County": "Snohomish County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.275642,
          48.124128
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Flagstaff Native Plant and Seed",
        "Address": "400 E Butler, Flagstaff, AZ, 86001",
        "City": "Flagstaff",
        "State": "AZ",
        "Zip Code": "86001",
        "Country": "USA",
        "Contact": "Nigel Sparks",
        "Phone": "928.773.9406",
        "Fax": "928.773.0107",
        "Email": "info@nativeplantandseed.com",
        "Website": "http://nativeplantandseed.com/",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "35.192662",
        "Longitude": "-111.64542",
        "Street": "E Butler Ave",
        "County": "Coconino County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.64542,
          35.192662
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Flickingers Nursery",
        "Address": "Rt 85, Sagamore, PA, 16250",
        "City": "Sagamore",
        "State": "PA",
        "Zip Code": "16250",
        "Country": "USA",
        "Contact": "Tom Flickinger",
        "Phone": "800.368.7381",
        "Fax": "724.783.6528",
        "Email": "flicknursery@gmail.com",
        "Website": "http://www.flicknursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail",
        "Product": "Plants",
        "Latitude": "40.778294",
        "Longitude": "-79.23201",
        "Street": "Sagamore Rd",
        "County": "Armstrong County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.23201,
          40.778294
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Flinn’s Treasure Tree Nursery",
        "Address": "168 Valley Rd , Indiana, PA, 15701",
        "City": "Indiana",
        "State": "PA",
        "Zip Code": "15701",
        "Country": "USA",
        "Phone": "724.465.8502",
        "Email": "ccflinn@verizon.net ",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "40.600896",
        "Longitude": "-79.149901",
        "Street": "Valley Rd",
        "County": "Indiana County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.149901,
          40.600896
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Flint River Nursery",
        "Address": "9850 River Rd, Byromville, GA, 31007",
        "City": "Byromville",
        "State": "GA",
        "Zip Code": "31007",
        "Country": "USA",
        "Contact": "Jeff Fields",
        "Phone": "478.508.0056",
        "Phone 2": "478.508.4215",
        "Email": "jfields@gfc.state.ga.us",
        "Website": "http://www.gatrees.org",
        "Nursery Type": "State",
        "Business Type": "Wholesale",
        "Product": "Seeds",
        "Latitude": "32.167757",
        "Longitude": "-83.976566",
        "Street": "River Rd",
        "County": "Dooly County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.976566,
          32.167757
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Floral Native Nursery Inc",
        "Address": "2511 Floral Ave, Chico, CA, 95973",
        "City": "Chico",
        "State": "CA",
        "Zip Code": "95973",
        "Country": "USA",
        "Contact": "Germain Boivin or Zeb Puterbaugh",
        "Phone": "954.472.5120",
        "Fax": "530.892.2511",
        "Email": "canative@shocking.com",
        "Website": "http://www.floralnativenursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nContract",
        "Product": "Plants",
        "Established": "1998",
        "Hours": "T-Sun 8:30-5:30",
        "Latitude": "39.762",
        "Longitude": "-121.829633",
        "Street": "Floral Ave",
        "County": "Butte County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.829633,
          39.762
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Florida Aquatic Nurseries Inc",
        "Address": "700 S Flamingo Rd, Fort Lauderdale, FL, 33325",
        "City": "Fort Lauderdale",
        "State": "FL",
        "Zip Code": "33325",
        "Country": "USA",
        "Contact": "Marsela",
        "Phone": "954.472.5120",
        "Fax": "954.472.5446",
        "Email": "sales@floridaaquatic.com",
        "Website": "http://www.floridaaquatic.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nContract",
        "Product": "Plants",
        "Latitude": "26.1122",
        "Longitude": "-80.31323",
        "Street": "S Flamingo Rd",
        "County": "Broward County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.31323,
          26.1122
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Florida Department of Environmental Protection Greenhouse",
        "Address": "3000 Environmental Pl, Pensacola, FL, 32514",
        "City": "Pensacola",
        "State": "FL",
        "Zip Code": "32514",
        "Country": "USA",
        "Contact": "David K Mitchell",
        "Phone": "850.475.5590",
        "Fax": "850.595.8417",
        "Email": "david.k.mitchell@dep.state.fl.us",
        "Website": "http://www.dep.state.fl.us/northwest/Ecosys/section/restorationnursery.htm",
        "Nursery Type": "State",
        "Product": "Plants",
        "Latitude": "30.525302",
        "Longitude": "-87.203455",
        "Street": "Environmental Pl",
        "County": "Escambia County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.203455,
          30.525302
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Florida Forest Service - Andrews Nursery",
        "Address": "9850 NW 42 Ct, Chiefland, FL, 32626",
        "City": "Chiefland",
        "State": "FL",
        "Zip Code": "32626",
        "Country": "USA",
        "Contact": "Jeremy Hardee",
        "Phone": "352.493.6096",
        "Fax": "352.493.6084",
        "Email": "Jeremy.Hardee@FDACS.gov",
        "Nursery Type": "State",
        "Business Type": "Wholesale\nRetail\nMail",
        "Product": "Plants",
        "Latitude": "29.474664",
        "Longitude": "-82.844899",
        "Street": "NW 42nd Ct",
        "County": "Levy County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.844899,
          29.474664
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Florida Native Plants Inc",
        "Address": "730 Myakka Rd, Sarasota, FL, 34240",
        "City": "Sarasota",
        "State": "FL",
        "Zip Code": "34240",
        "Country": "USA",
        "Contact": "Laurel Schiller",
        "Phone": "941.322.1915",
        "Fax": "941.322.0208",
        "Email": "info@floridanativeplants.com",
        "Website": "http://www.floridanativeplants.com",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "27.327396",
        "Longitude": "-82.270924",
        "Street": "Myakka Rd",
        "County": "Sarasota County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.270924,
          27.327396
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Food Forest Nursery",
        "Address": "10153 E Hwy 156, West Fork, AR, 72774",
        "City": "West Fork",
        "State": "AR",
        "Zip Code": "72774",
        "Country": "USA",
        "Contact": "Derek Carter",
        "Email": "thefoodforestnursery@gmail.com",
        "Website": "http://www.foodforestnursery.com/",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "35.909842",
        "Longitude": "-94.209777",
        "Street": "E Hwy 156",
        "County": "Washington County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.209777,
          35.909842
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Forestfarm",
        "Address": "14643 Water Gap Road, Williams, OR, 97544",
        "City": "Williams",
        "State": "OR",
        "Zip Code": "97544",
        "Country": "USA",
        "Contact": "Ray Prag",
        "Phone": "541.846.7269",
        "Fax": "541.846.6963",
        "Email": "plants@forestfarm.com",
        "Website": "http://www.forestfarm.com",
        "Nursery Type": "Private",
        "Business Type": "Retail\nMail\nContract",
        "Product": "Plants",
        "Latitude": "42.275637",
        "Longitude": "-123.255164",
        "Street": "Water Gap Rd",
        "County": "Josephine County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.255164,
          42.275637
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Forrest Keeling Nursery Inc",
        "Address": "88 Forest Keeling Lane, Elsberry, MO, 63343",
        "City": "Elsberry",
        "State": "MO",
        "Zip Code": "63343",
        "Country": "USA",
        "Contact": "Wayne Lovelace",
        "Phone": "800.356.2401",
        "Fax": "573.898.5803",
        "Email": "info@fknursery.com",
        "Website": "http://www.fknursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "39.141655",
        "Longitude": "-90.78295",
        "Street": "Forrest Keeling Ln",
        "County": "Lincoln County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.78295,
          39.141655
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Fort Apache Agency - White Mountain Apache",
        "Address": "2nd W Elm St, White River, AZ, 85941",
        "City": "White River",
        "State": "AZ",
        "Zip Code": "85941",
        "Country": "USA",
        "Contact": "Stewart",
        "Phone": "928.338.1615",
        "Phone 2": "928.338.3006",
        "Fax": "928.338.1907",
        "Email": "stewartkindelay@wmat.us",
        "Nursery Type": "Tribal",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "33.850914",
        "Longitude": "-109.966159",
        "Street": "N 2nd Ave",
        "County": "Navajo County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -109.966159,
          33.850914
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Fort Pond Native Plants",
        "Address": "26 S Embassy St, Montauk, NY, 11954",
        "City": "Montauk",
        "State": "NY",
        "Zip Code": "11954",
        "Country": "USA",
        "Contact": "Jim Grimes",
        "Phone": "631.668.6452",
        "Fax": "631.668.6439",
        "Email": "info@nativeplants.net",
        "Website": "http://www.nativeplants.net",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Established": "1993",
        "Latitude": "41.034464",
        "Longitude": "-71.946341",
        "Street": "S Embassy St",
        "County": "Suffolk County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.946341,
          41.034464
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Fossil Creek Nursery",
        "Address": "7029 S College Ave, Fort Collins, CO, 80525",
        "City": "Fort Collins",
        "State": "CO",
        "Zip Code": "80525",
        "Country": "USA",
        "Contact": "Brenda",
        "Phone": "970.226.4924",
        "Fax": "970.223.6348",
        "Email": "info@fossilcreeknursery.com",
        "Website": "http://www.fossilcreeknursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Established": "1969",
        "Latitude": "40.48964",
        "Longitude": "-105.079146",
        "Street": "S College Ave",
        "County": "Larimer County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -105.079146,
          40.48964
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Found Well Farm",
        "Address": "730 Borough Rd, Pembroke, NH, 03275",
        "City": "Pembroke",
        "State": "NH",
        "Zip Code": "03275",
        "Country": "USA",
        "Phone": "603.228.1421",
        "Nursery Type": "Private",
        "Business Type": "Retail\nContract",
        "Product": "Plants",
        "Latitude": "43.209666",
        "Longitude": "-71.459574",
        "Street": "Borough Rd",
        "County": "Merrimack County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.459574,
          43.209666
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Fourth Corner Nurseries",
        "Address": "5652 Sand Rd, Bellingham, WA, 98226",
        "City": "Bellingham",
        "State": "WA",
        "Zip Code": "98226",
        "Country": "USA",
        "Contact": "Dylan Levy-Boyd",
        "Phone": "360.592.2250",
        "Phone 2": "800.416.8640",
        "Fax": "888.506.1236",
        "Email": "sales@fourthcornernurseries.com",
        "Website": "http://fourthcornernurseries.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants\nSeeds",
        "Established": "1982",
        "Hours": "M-F 8-4",
        "Latitude": "48.845198",
        "Longitude": "-122.330546",
        "Street": "Sand Rd",
        "County": "Whatcom County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.330546,
          48.845198
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Fraser's Thimble Farms",
        "Address": "175 Arbutus Rd, Salt Spring Island, BC, V8K 1A3",
        "City": "Salt Spring Island",
        "State": "BC",
        "Zip Code": "V8K 1A3",
        "Country": "Canada",
        "Contact": "Richard Fraser",
        "Phone": "250.537.5788",
        "Fax": "250.537.5788",
        "Email": "thimfarm@telus.net",
        "Website": "http://www.thimblefarms.com",
        "Nursery Type": "Private",
        "Business Type": "Retail\nMail",
        "Product": "Plants",
        "Latitude": "0",
        "Longitude": "0"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          0,
          0
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Friendly Natives Plants and Design",
        "Address": "2464 Happy Valley Rd, Sequim, WA, 98382",
        "City": "Sequim",
        "State": "WA",
        "Zip Code": "98382",
        "Country": "USA",
        "Contact": "Lissa Bennett",
        "Phone": "206.387.5943",
        "Email": "lissa@friendlynatives.net",
        "Website": "http://www.friendlynatives.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "48.04375",
        "Longitude": "-123.090975",
        "Street": "Happy Valley Rd",
        "County": "Clallam County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.090975,
          48.04375
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Fritz Creek Gardens",
        "Address": "Mile 8 5  E Rd, Homer, AK, 99603",
        "City": "Homer",
        "State": "AK",
        "Zip Code": "99603",
        "Country": "USA",
        "Contact": "Steven Velestra",
        "Phone": "907.235.4969",
        "Fax": "907.782.4213",
        "Email": "info@alaskahardy.com",
        "Email 2": "info@alaskahardy.com",
        "Website": "http://www.alaskahardy.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "59.6425",
        "Longitude": "-151.54833",
        "County": "Kenai Peninsula Borough"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -151.54833,
          59.6425
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Future Forests Nursery",
        "Address": "PO Box 847, Kailua-Kona, HI, 96745",
        "City": "Kailua-Kona",
        "State": "HI",
        "Zip Code": "96745",
        "Country": "USA",
        "Contact": "Jill Wagner",
        "Phone": "808.325.2377",
        "Email": "trees@forestnursery.com",
        "Website": "http://www.forestnursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Established": "1926",
        "Hours": "M-F 8-4",
        "Latitude": "19.593456",
        "Longitude": "-155.438015",
        "County": "Hawaii County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -155.438015,
          19.593456
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Gabriola Growing Company",
        "Address": "171 Rosislos Blvd, Gabriola, BC, V0R 1X1",
        "City": "Gabriola",
        "State": "BC",
        "Zip Code": "V0R 1X1",
        "Country": "Canada",
        "Contact": "Tom Collinson",
        "Phone": "250.247.8204",
        "Email": "info@gabriolaagriculturalcoop.ca ",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "0",
        "Longitude": "0"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          0,
          0
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Garden Delights LLC | Lazy K Nursery Inc",
        "Address": "705 Wright Rd, Pine Mountain, GA, 31822",
        "City": "Pine Mountain",
        "State": "GA",
        "Zip Code": "31822",
        "Country": "USA",
        "Contact": "Ernest Koone III",
        "Phone": "706.580.8597",
        "Fax": "706.663.0939",
        "Email": "info@lazyknursery.com",
        "Website": "http://www.nativeazaleas.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "32.820048",
        "Longitude": "-84.944408",
        "Street": "Wright Rd",
        "County": "Harris County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.944408,
          32.820048
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Garden of Delights",
        "Address": "14560 SW 14 St, Davie, FL, 33325-4127",
        "City": "Davie",
        "State": "FL",
        "Zip Code": "33325-4127",
        "Country": "USA",
        "Contact": "Murray Corman",
        "Phone": "954.370.9004",
        "Fax": "954.236.4588",
        "Email": "godelights@aol.com",
        "Website": "https://mygardenofdelights.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "26.101907",
        "Longitude": "-80.343287",
        "Street": "SW 14th St",
        "County": "Broward County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.343287,
          26.101907
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "GardenMakers",
        "Address": "240 Wethersfield St, Rowley, MA, 01969",
        "City": "Rowley",
        "State": "MA",
        "Zip Code": "01969",
        "Country": "USA",
        "Contact": "Laura Militzer",
        "Phone": "978.948.8481",
        "Fax": "978.948.8481",
        "Website": "http://www.gardenmakers.com",
        "Nursery Type": "Private",
        "Business Type": "Retail\nMail\nInternet",
        "Product": "Seeds",
        "Latitude": "42.724483",
        "Longitude": "-70.894022",
        "Street": "Wethers Field St",
        "County": "Essex County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -70.894022,
          42.724483
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Garry Oak Meadow Preservation Society (GOMPS)",
        "Address": "Victoria, BC",
        "City": "Victoria",
        "State": "BC",
        "Zip Code": "V8Z 5M1",
        "Country": "Canada",
        "Contact": "Judith Carder",
        "Email": "grow.oaks@gmail.com",
        "Website": "http://www.garryoak.info/garry-oak-nursery.html",
        "Nursery Type": "Not-for-Profit",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Hours": "By appointment or during Volunteer Workparties currently on every Sunday from 10am to 1pm (PST) except in extreme weather events",
        "Latitude": "29.290315",
        "Longitude": "-97.142385",
        "Street": "Victoria St",
        "County": "Lavaca County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.142385,
          29.290315
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Gary's Perennials LLC",
        "Address": "1122 E Welsh Rd, Maple Glen, PA, 19002-2224",
        "City": "Maple Glen",
        "State": "PA",
        "Zip Code": "19002-2224",
        "Country": "USA",
        "Contact": "Andrea Steimberg",
        "Phone": "800.898.6653",
        "Phone 2": "215.628.4070",
        "Fax": "215.628.0216",
        "Email": "roots@garysperennials.com",
        "Email 2": "aardvark@garysperennials.com",
        "Website": "http://www.garysperennials.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Established": "1984",
        "Hours": "M-Sat 8-5",
        "Latitude": "40.192853",
        "Longitude": "-75.202541",
        "Street": "Welsh Rd",
        "County": "Montgomery County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.202541,
          40.192853
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Gaspars Nursery",
        "Address": "40620 158th St E, Lancaster, CA, 93535",
        "City": "Lancaster",
        "State": "CA",
        "Zip Code": "93535",
        "Country": "USA",
        "Contact": "John or Evelyn Gaspars",
        "Phone": "661.264.4414",
        "Email": "gasparsnursery@gtoast.net",
        "Website": "http://www.mylink.net/gasparsnursery/",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "34.619702",
        "Longitude": "-117.84897",
        "Street": "158th St E",
        "County": "Los Angeles County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.84897,
          34.619702
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Genesis Nursery Inc",
        "Address": "23200 Hurd Rd, Tampico, IL, 61283",
        "City": "Tampico",
        "State": "IL",
        "Zip Code": "61283",
        "Country": "USA",
        "Contact": "Sales",
        "Phone": "815.438.2220",
        "Fax": "815.438.2222",
        "Email": "info@genesisnurseryinc.com",
        "Website": "http://www.genesisnurseryinc.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nMail",
        "Product": "Plants\nSeeds",
        "Established": "1992",
        "Hours": "M - F, 8:00 am - 4:30 pm",
        "Latitude": "41.599692",
        "Longitude": "-89.800054",
        "Street": "Hurd Rd",
        "County": "Whiteside County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.800054,
          41.599692
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Glacier Nursery Inc",
        "Address": "4343 Montana Hwy 35, Kalispell, MT, 59901",
        "City": "Kalispell",
        "State": "MT",
        "Zip Code": "59901",
        "Country": "USA",
        "Contact": "Brad Brown",
        "Phone": "406.755.2248",
        "Phone 2": "800.700.8566",
        "Fax": "406.755.2249",
        "Email": "gnursery@glaciernursery.com",
        "Website": "http://www.glaciernursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "48.189807",
        "Longitude": "-114.145472",
        "Street": "Highway 35",
        "County": "Flathead County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -114.145472,
          48.189807
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Glacier Oaks Nursery",
        "Address": "8216 White Oaks Rd, Harvard, IL, 60033",
        "City": "Harvard",
        "State": "IL",
        "Zip Code": "60033",
        "Country": "USA",
        "Contact": "Mary T McClelland",
        "Phone": "815.482.7404",
        "Fax": "815.943.3511",
        "Email": "glonursery@owc.net",
        "Email 2": "gonatives@owc.net",
        "Website": "http://www.glacieroaksnursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nContract",
        "Product": "Plants",
        "Latitude": "42.445932",
        "Longitude": "-88.679659",
        "Street": "White Oaks Rd",
        "County": "McHenry County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.679659,
          42.445932
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Go Native Inc",
        "Address": "PO Box 370103, Montara, CA, 94037",
        "City": "Montara",
        "State": "CA",
        "Zip Code": "94037",
        "Country": "USA",
        "Contact": "H David Sands",
        "Phone": "650.728.2286",
        "Fax": "650.728.3067",
        "Email": "info@gonativeinc.com",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "37.542789",
        "Longitude": "-122.505152",
        "County": "San Mateo County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.505152,
          37.542789
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Goodwin Creek Gardens",
        "Address": "970 Cedar Flat Rd, Williams, OR, 97544",
        "City": "Williams",
        "State": "OR",
        "Zip Code": "97544",
        "Country": "USA",
        "Contact": "Jim",
        "Phone": "541.846.7357",
        "Phone 2": "800.846.7359",
        "Fax": "541.846.7357",
        "Email": "info@goodwincreekgardens.com",
        "Website": "http://www.goodwincreekgardens.com/pilot.asp",
        "Nursery Type": "Private",
        "Business Type": "Retail\nMail\nInternet",
        "Product": "Plants",
        "Established": "1977",
        "Hours": "F-Sa Mar-Sep",
        "Latitude": "42.214061",
        "Longitude": "-123.289624",
        "Street": "Cedar Flat Rd",
        "County": "Josephine County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.289624,
          42.214061
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Gosser Tree Farm",
        "Address": "9099 Buttercup ST SE, Tumwater, WA, 98501",
        "City": "Tumwater",
        "State": "WA",
        "Zip Code": "98501",
        "Country": "USA",
        "Contact": "Joseph Gosser",
        "Phone": "360.463.1039",
        "Email": "joe_gosser@yahoo.com",
        "Website": "https://www.gossertreefarm.com/",
        "Latitude": "46.956535",
        "Longitude": "-122.883034",
        "Street": "Buttercup St SE",
        "County": "Thurston County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.883034,
          46.956535
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Gottlieb Gardens",
        "Address": "8263 Huber Rd, Seguin, TX, 78155",
        "City": "Seguin",
        "State": "TX",
        "Zip Code": "78155",
        "Country": "USA",
        "Contact": "David Will",
        "Phone": "830.629.9876",
        "Fax": "830.629.9876",
        "Email": "dwill207@satx.rr.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "29.681389",
        "Longitude": "-97.986201",
        "Street": "Huber Rd",
        "County": "Guadalupe County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.986201,
          29.681389
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Grand Isle Nursery",
        "Address": "50 Ferry Rd, South Hero, VT, 05486",
        "City": "South Hero",
        "State": "VT",
        "Zip Code": "05486",
        "Country": "USA",
        "Phone": "802.372.8805",
        "Phone 2": "800.400.grow",
        "Fax": "802.372.8305",
        "Email": "info@grandislenursery.com or ginursery@aol.com",
        "Website": "http://www.grandislenursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "44.667638",
        "Longitude": "-73.331941",
        "Street": "Ferry Rd",
        "County": "Grand Isle County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.331941,
          44.667638
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Grandiflora | San Felasco Nurseries Inc",
        "Address": "7315 NW 126 St, Gainesville, FL, 32653",
        "City": "Gainesville",
        "State": "FL",
        "Zip Code": "32653",
        "Country": "USA",
        "Contact": "Alan Shapiro",
        "Phone": "352.332.1220",
        "Phone 2": "800.933.9638",
        "Fax": "352.332.3113",
        "Email": "alan.shapiro@grandiflora.pro",
        "Website": "http://www.grandiflora.pro/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "29.722077",
        "Longitude": "-82.47455",
        "Street": "NW 126th St",
        "County": "Alachua County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.47455,
          29.722077
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Granite Seed",
        "Address": "1697 W 2100 N, Lehi, UT, 84043",
        "City": "Lehi",
        "State": "UT",
        "Zip Code": "84043",
        "Country": "USA",
        "Phone": "801.768.4422",
        "Fax": "801.768.3967",
        "Email": "granite@graniteseed.com",
        "Website": "http://graniteseed.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail",
        "Product": "Seeds",
        "Established": "1988",
        "Hours": "M-F 8-5",
        "Latitude": "40.409464",
        "Longitude": "-111.876083",
        "Street": "W 2100 N",
        "County": "Utah County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.876083,
          40.409464
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Grassland West",
        "Address": "908 Port Dr, Clarkston, WA, 99403",
        "City": "Clarkston",
        "State": "WA",
        "Zip Code": "99403",
        "Country": "USA",
        "Contact": "Kevin Miller",
        "Phone": "509.758.9100",
        "Fax": "509.758.6601",
        "Email": "kmiller@grasslandwest.com",
        "Website": "http://www.grasslandwest.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nContract",
        "Product": "Seeds",
        "Latitude": "46.424148",
        "Longitude": "-117.050186",
        "Street": "Port Dr",
        "County": "Asotin County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.050186,
          46.424148
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Grasslander",
        "Address": "9612 E  650 Rd, Hennessey, OK, 73742",
        "City": "Hennessey",
        "State": "OK",
        "Zip Code": "73742",
        "Country": "USA",
        "Contact": "Charles Grimes",
        "Phone": "405.853.2607",
        "Email": "grasslander@pldi.net",
        "Website": "http://www.grasslander.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail\nInternet",
        "Product": "Plants\nSeeds",
        "Latitude": "36.1092",
        "Longitude": "-97.89867",
        "County": "Kingfisher County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.89867,
          36.1092
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Great Basin Nursery ",
        "Address": "63635 Deschutes Market Rd, Bend, OR, 97701",
        "City": "Bend",
        "State": "OR",
        "Zip Code": "97701",
        "Country": "USA",
        "Contact": "Andria Truax",
        "Phone": "541.848.7703",
        "Email": "info@greatbasinnursery.com",
        "Website": "https://www.greatbasinnursery.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nContract",
        "Product": "Plants",
        "Latitude": "44.110886",
        "Longitude": "-121.254721",
        "Street": "Deschutes Market Rd",
        "County": "Deschutes County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.254721,
          44.110886
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Great Basin Seed",
        "Address": "323 E 750 S, Ephraim, UT, 84627",
        "City": "Ephraim",
        "State": "UT",
        "Zip Code": "84627",
        "Country": "USA",
        "Contact": "Jason",
        "Phone": "435.283.1411",
        "Fax": "435.283.6872",
        "Email": "jason@cut.net",
        "Website": "http://greatbasinseeds.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail\nInternet\nContract",
        "Product": "Plants\nSeeds",
        "Established": "2006",
        "Hours": "40760.0",
        "Latitude": "39.346604",
        "Longitude": "-111.578447",
        "Street": "E 750 S",
        "County": "Sanpete County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.578447,
          39.346604
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Great Bear Native Plants",
        "Address": "310 N 4th St, Hamilton, MT, 59840",
        "City": "Hamilton",
        "State": "MT",
        "Zip Code": "59840",
        "Country": "USA",
        "Contact": "Aimee Kelley",
        "Phone": "406.381.9829",
        "Email": "aimee@greatbearnativeplants.com",
        "Website": "http://www.greatbearnativeplants.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail\nContract",
        "Product": "Plants\nSeeds",
        "Established": "2006",
        "Hours": "M-F 8-4:30",
        "Latitude": "46.249586",
        "Longitude": "-114.160202",
        "Street": "N 4th St",
        "County": "Ravalli County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -114.160202,
          46.249586
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Great Plains Nursery",
        "Address": "3074 CR I, Weston, NE, 68070",
        "City": "Weston",
        "State": "NE",
        "Zip Code": "68070",
        "Country": "USA",
        "Contact": "Brian Byers",
        "Phone": "402.707.1702",
        "Email": "brian@greatplainsnursery.com",
        "Website": "www.greatplainsnursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "41.181148",
        "Longitude": "-96.884809",
        "Street": "County Rd I",
        "County": "Saunders County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.884809,
          41.181148
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Green Desert Wholesale Nursery",
        "Address": "79301 Ave 40, Indio, CA, 92203",
        "City": "Indio",
        "State": "CA",
        "Zip Code": "92203",
        "Country": "USA",
        "Contact": "Chris Thompson",
        "Phone": "760.360.6937",
        "Fax": "760.772.1948",
        "Email": "ctgdn@msn.com",
        "Email 2": "sales@GreenDesertNursery.com",
        "Website": "http://www.greendesertnursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "33.758217",
        "Longitude": "-116.283927",
        "Street": "40th Ave",
        "County": "Riverside County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.283927,
          33.758217
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Green Hills Nursery",
        "Address": "40805 Upper Nestuca Rd, Beaver, OR, 97108",
        "City": "Beaver",
        "State": "OR",
        "Zip Code": "97108",
        "Country": "USA",
        "Contact": "Les",
        "Phone": "503.398.5965",
        "Fax": "503.398.5965",
        "Email": "greenhills@oregoncoast.com",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "45.245885",
        "Longitude": "-123.617653",
        "Street": "Upper Nestucca River Rd",
        "County": "Tillamook County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.617653,
          45.245885
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Green Images Native Landscape Plants",
        "Address": "1333 Taylor Creek Rd, Christmas, FL, 32709",
        "City": "Christmas",
        "State": "FL",
        "Zip Code": "32709",
        "Country": "USA",
        "Contact": "David",
        "Phone": "407.568.1333",
        "Fax": "407.568.2061",
        "Email": "greenimage@aol.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "28.527817",
        "Longitude": "-81.006807",
        "Street": "Taylor Creek Rd",
        "County": "Orange County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.006807,
          28.527817
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Green Isle Gardens",
        "Address": "5243 Lido St, Orlando, FL, 32807",
        "City": "Orlando",
        "State": "FL",
        "Zip Code": "32807",
        "Country": "USA",
        "Contact": "Terry Godts",
        "Phone": "407.277.5159",
        "Phone 2": "321.436.4932",
        "Fax": "352.429.3392",
        "Email": "marcg@netwide.net",
        "Email 2": "godts@earthlink.net",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "28.530461",
        "Longitude": "-81.319744",
        "Street": "Lido St",
        "County": "Orange County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.319744,
          28.530461
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Green Oak Ranch Nursery",
        "Address": "1237 Green Oak Rd, Vista, CA, 92083",
        "City": "Vista",
        "State": "CA",
        "Zip Code": "92083",
        "Country": "USA",
        "Phone": "760.727.0251",
        "Fax": "760.599.2665",
        "Product": "Plants",
        "Latitude": "33.15748",
        "Longitude": "-117.226054",
        "Street": "Green Oak Rd",
        "County": "San Diego County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.226054,
          33.15748
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Green Seasons Nursery",
        "Address": "12340 SR 62, Parrish, FL, 34219",
        "City": "Parrish",
        "State": "FL",
        "Zip Code": "34219",
        "Country": "USA",
        "Contact": "Roger Triplett",
        "Phone": "941.776.1605",
        "Fax": "941.776.0197",
        "Email": "seaoater@GreenSeasonsNursery.com",
        "Website": "http://www.greenseasonsnursery.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "27.588155",
        "Longitude": "-82.419727",
        "Street": "State Rte 62",
        "County": "Manatee County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.419727,
          27.588155
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Green Star Wetland Plant Farm  LLC",
        "Address": "4646 CR 181, Alvin, TX, 77511",
        "City": "Alvin",
        "State": "TX",
        "Zip Code": "77511",
        "Country": "USA",
        "Contact": "Mary Carol Edwards",
        "Phone": "281.989.5517",
        "Email": "info@greenstarwetlands.com",
        "Website": "https://greenstarwetlands.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nContract",
        "Product": "Plants\nServices",
        "Established": "2018",
        "Latitude": "29.435407",
        "Longitude": "-95.292266",
        "Street": "County Rd 181",
        "County": "Brazoria County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.292266,
          29.435407
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Green by Nature",
        "Address": "2115 Loff Rd, Castlegar, BC, V1N 4N9",
        "City": "Castlegar",
        "State": "BC",
        "Zip Code": "V1N 4N9",
        "Country": "Canada",
        "Contact": "Annette Reed",
        "Phone": "250.304.5802",
        "Email": "nert22@shaw.ca",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "0",
        "Longitude": "0"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          0,
          0
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Greenleaf Nursery - Oklahoma",
        "Address": "28406 Hwy 82, Park Hill, OK, 74451",
        "City": "Park Hill",
        "State": "OK",
        "Zip Code": "74451",
        "Country": "USA",
        "Contact": "Roger",
        "Phone": "800.331.2982",
        "Email": "shanua_fountain@greenleafnursery.com",
        "Website": "http://www.greenleafnursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "35.763854",
        "Longitude": "-94.907357",
        "Street": "State Hwy 82",
        "County": "Cherokee County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.907357,
          35.763854
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Greenleaf Nursery - Texas",
        "Address": "HCR 62 Box 73, El Campo, TX, 77437",
        "City": "El Campo",
        "State": "TX",
        "Zip Code": "77437",
        "Country": "USA",
        "Contact": "Kevin Carroll",
        "Phone": "800.237.3147",
        "Fax": "979.543.1886",
        "Email": "Chance_Alldredge@GreenleafNursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "29.19664",
        "Longitude": "-96.26969",
        "County": "Wharton County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.26969,
          29.19664
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Greenworld Inc",
        "Address": "309 7th St NW, Sioux Center, IA, 51250",
        "City": "Sioux Center",
        "State": "IA",
        "Zip Code": "51250",
        "Country": "USA",
        "Contact": "Larry",
        "Phone": "712.722.2621",
        "Fax": "712.722.2649",
        "Email": "Greenworld@premieronline.net",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "43.08422",
        "Longitude": "-96.17926",
        "Street": "7th St NW",
        "County": "Sioux County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.17926,
          43.08422
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Gregg L Friedman  MD Native Seed Farm",
        "Address": "2500 E Hallandale Beach Blvd  Ste 702, Hallandale Beach, FL, 33009",
        "City": "Hallandale Beach",
        "State": "FL",
        "Zip Code": "33009",
        "Country": "USA",
        "Contact": "Gregg L Friedman  ",
        "Phone": "954.456.1996",
        "Nursery Type": "Private",
        "Product": "Seeds",
        "Latitude": "25.985674",
        "Longitude": "-80.124291",
        "Street": "E Hallandale Beach Blvd",
        "County": "Broward County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.124291,
          25.985674
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Gress Evergreen Nursery",
        "Address": "822 Acorn Trl, Oconto, WI, 54153",
        "City": "Oconto",
        "State": "WI",
        "Zip Code": "54153",
        "Country": "USA",
        "Contact": "Craig Bahrke",
        "Phone": "920.834.3044",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "44.881607",
        "Longitude": "-87.899207",
        "Street": "Acorn Ct",
        "County": "Oconto County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.899207,
          44.881607
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Ground Roots",
        "Address": "255 Ziegler Rd, Dover, PA, 17315",
        "City": "Dover",
        "State": "PA",
        "Zip Code": "17315",
        "Country": "USA",
        "Phone": "800.345.3406",
        "Fax": "717.292.4129",
        "Email": "sales@strathmeyer.com",
        "Website": "http://www.strathmeyer.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "40.044218",
        "Longitude": "-76.910646",
        "Street": "Zeigler Rd",
        "County": "York County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.910646,
          40.044218
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Growild Inc",
        "Address": "7190 Hill Hughes Rd, Fairview, TN, 37062",
        "City": "Fairview",
        "State": "TN",
        "Zip Code": "37062",
        "Country": "USA",
        "Contact": "Terri Barnes",
        "Phone": "615.799.1910",
        "Fax": "615.799.1912",
        "Email": "info@growildinc.com",
        "Website": "http://www.GroWildInc.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "36.007296",
        "Longitude": "-87.094736",
        "Street": "Hill Hughes Rd",
        "County": "Williamson County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.094736,
          36.007296
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Growing Grounds Farm",
        "Address": "3740 Orcutt Rd, San Luis Obispo, CA, 93401",
        "City": "San Luis Obispo",
        "State": "CA",
        "Zip Code": "93401",
        "Country": "USA",
        "Contact": "Craig Wilson",
        "Phone": "805.543.6071",
        "Email": "CWilson@t-mha.org",
        "Website": "http://www.growinggroundsfarm.org",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "35.259548",
        "Longitude": "-120.633457",
        "Street": "Orcutt Rd",
        "County": "San Luis Obispo County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.633457,
          35.259548
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Growing Solutions Restoration Education Institute",
        "Address": "398 Winchester Canyon Rd, Goleta, CA, 93118",
        "City": "Goleta",
        "State": "CA",
        "Zip Code": "93118",
        "Country": "USA",
        "Contact": "Karen Flagg",
        "Phone": "805.452.7561",
        "Email": "karenflagg@hughes.net",
        "Email 2": "growingsolutions@hughes.net",
        "Website": "http://www.growingsolutions.org",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nContract",
        "Product": "Plants\nSeeds",
        "Established": "1999",
        "Hours": "by appt",
        "Latitude": "34.468478",
        "Longitude": "-119.905194",
        "Street": "Winchester Canyon Rd",
        "County": "Santa Barbara County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.905194,
          34.468478
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Guam Dept of Agriculture - Forestry Division",
        "Address": "192 Dairy Rd, Mangilao, Guam, 96913",
        "City": "Mangilao",
        "State": "Guam",
        "Zip Code": "96913",
        "Country": "USA",
        "Phone": "671.734.3948",
        "Fax": "671.734.0111",
        "Email": "John.Borja@doag.guam.gov",
        "Nursery Type": "State",
        "Product": "Plants",
        "Latitude": "13.504997",
        "Longitude": "144.830157",
        "County": "Guam"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          144.830157,
          13.504997
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Habitat Solutions Inc",
        "Address": "PO Box 14822, Pittsburgh, PA, 15228",
        "City": "Pittsburgh",
        "State": "PA",
        "Zip Code": "15228",
        "Country": "USA",
        "Phone": "412.853.7883",
        "Fax": "412.853.7883",
        "Website": "http://habitatsolutions.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nMail",
        "Product": "Plants",
        "Latitude": "40.369569",
        "Longitude": "-80.043925",
        "County": "Allegheny County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.043925,
          40.369569
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Habitats Native Plant Nursery  LLC",
        "Address": "PO Box 265, Silver Grove, KY, 41085",
        "City": "Silver Grove",
        "State": "KY",
        "Zip Code": "41085",
        "Country": "USA",
        "Contact": "Jacob Bartley",
        "Phone": "859.442.9414",
        "Email": "native@habitatnursery.org",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail\nContract",
        "Product": "Plants\nSeeds",
        "Latitude": "39.034045",
        "Longitude": "-84.388143",
        "County": "Campbell County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.388143,
          39.034045
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Halfmoon Growers Inc",
        "Address": "21704 SW 30th Ave, Newberry, FL, 32669",
        "City": "Newberry",
        "State": "FL",
        "Zip Code": "32669",
        "Country": "USA",
        "Contact": "Bruce McElroy",
        "Phone": "352.318.2853",
        "Fax": "352.472.6553",
        "Email": "halfmoongrowers@yahoo.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "29.625824",
        "Longitude": "-82.573173",
        "Street": "SW 30th Ave",
        "County": "Alachua County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.573173,
          29.625824
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Hamilton Native Outpost",
        "Address": "16786 Brown Rd, Elk Creek, MO, 65464",
        "City": "Elk Creek",
        "State": "MO",
        "Zip Code": "65464",
        "Country": "USA",
        "Contact": "Elizabeth Steele or Joe Dixon",
        "Phone": "417.967.2190",
        "Fax": "417.967.5934",
        "Email": "natives@hamiltonnativeoutpost.com",
        "Website": "http://www.hamiltonnativeoutpost.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants\nSeeds",
        "Hours": "M-F 8-4:30",
        "Latitude": "37.214533",
        "Longitude": "-91.944555",
        "Street": "Brown Rd",
        "County": "Texas County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -91.944555,
          37.214533
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Hanging Dog Valley Nursery",
        "Address": "2600 Boiling Springs Rd, Murphy, NC, 28906",
        "City": "Murphy",
        "State": "NC",
        "Zip Code": "28906",
        "Country": "USA",
        "Contact": "John or Pam Strawn",
        "Phone": "828.837.7921",
        "Fax": "828.837.7921",
        "Email": "strawn@directv.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Established": "1983",
        "Latitude": "35.194349",
        "Longitude": "-84.020761",
        "Street": "Boiling Springs Rd",
        "County": "Cherokee County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.020761,
          35.194349
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Hard Scrabble Farms Inc",
        "Address": "PO Box 281, Terra Ceia, FL, 34250",
        "City": "Terra Ceia",
        "State": "FL",
        "Zip Code": "34250",
        "Country": "USA",
        "Contact": "Linda Osborne",
        "Phone": "941.722.0414",
        "Fax": "941.723.6258",
        "Email": "wildflowers@pcsonline.com",
        "Nursery Type": "Private",
        "Product": "Plants\nSeeds",
        "Latitude": "27.575975",
        "Longitude": "-82.57992",
        "Street": "Terra Ceia Rd",
        "County": "Manatee County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.57992,
          27.575975
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Harold M Miller Landscape Nursery",
        "Address": "838 Ankeny Hill Rd SE, Jefferson, OR, 97352",
        "City": "Jefferson",
        "State": "OR",
        "Zip Code": "97352",
        "Country": "USA",
        "Contact": "Harold or Marty",
        "Phone": "503.399.1599",
        "Fax": "503.364.7552",
        "Email": "hmillerlandscape@aol.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nContract",
        "Product": "Plants",
        "Latitude": "44.769523",
        "Longitude": "-123.048519",
        "Street": "Ankeny Hill Rd SE",
        "County": "Marion County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.048519,
          44.769523
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Hartke Nursery",
        "Address": "1030 N Warson Rd, Olivette, MO, 63132",
        "City": "Olivette",
        "State": "MO",
        "Zip Code": "63132",
        "Country": "USA",
        "Contact": "Don Walls or Cindy Collins",
        "Phone": "314.997.6679",
        "Fax": "314.997.6778",
        "Email": "hartke@sbcglobal.net",
        "Website": "http://www.hartkenursery.com/",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "38.677406",
        "Longitude": "-90.394022",
        "Street": "N Warson Rd",
        "County": "St. Louis County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.394022,
          38.677406
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Hartmann's Plant Company",
        "Address": "310 60th St, Grand Junction, MI, 49056",
        "City": "Grand Junction",
        "State": "MI",
        "Zip Code": "49056",
        "Country": "USA",
        "Contact": "Danny Hartmann",
        "Phone": "269.253.4281",
        "Fax": "269.253.4457",
        "Email": "dan@hartmannsplantcompany.com",
        "Email 2": "info@hartmannsplantcompany.com",
        "Website": "http://hartmannsplantcompany.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail\nInternet\nContract",
        "Product": "Plants",
        "Established": "1944",
        "Hours": "8-5",
        "Latitude": "42.441386",
        "Longitude": "-86.129197",
        "Street": "60th St",
        "County": "Allegan County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.129197,
          42.441386
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Hawai'I Division of Forestry & Wildlife | Rare Plant Facility",
        "Address": "1151 Punchbowl St Rm 325, Honolulu, HI, 96813",
        "City": "Honolulu",
        "State": "HI",
        "Zip Code": "96813",
        "Country": "USA",
        "Contact": "Vick Caraway",
        "Phone": "808.587.4172",
        "Fax": "808.587.0610",
        "Email": "statetreenursery@hawaii.gov",
        "Website": "http://dlnr.hawaii.gov/dofaw/",
        "Nursery Type": "State",
        "Product": "Plants",
        "Latitude": "21.305877",
        "Longitude": "-157.855776",
        "Street": "Punchbowl St",
        "County": "Honolulu County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -157.855776,
          21.305877
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Hawai'i Dept of Public Safety - Kulani Correctional Facility Nursery",
        "Address": "PO Box 6247, Hilo, HI, 96720",
        "City": "Hilo",
        "State": "HI",
        "Zip Code": "96720",
        "Country": "USA",
        "Contact": "James Ferrell",
        "Phone": "808.966.4977",
        "Fax": "808.966.4977",
        "Email": "faceplan@verizon.net",
        "Nursery Type": "State",
        "Product": "Plants",
        "Latitude": "19.564519",
        "Longitude": "-155.26203",
        "County": "Hawaii County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -155.26203,
          19.564519
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Hawai'i Division of Forestry & Wildlife - Hilo Tree Nursery",
        "Address": "19 E Kawili St, Hilo, HI, 96720",
        "City": "Hilo",
        "State": "HI",
        "Zip Code": "96720",
        "Country": "USA",
        "Phone": "808.974.4221",
        "Email": "statetreenursery@hawaii.gov",
        "Website": "http://www.hawaii.gov",
        "Nursery Type": "State",
        "Product": "Plants",
        "Latitude": "19.703777",
        "Longitude": "-155.072792",
        "Street": "E Kawili St",
        "County": "Hawaii County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -155.072792,
          19.703777
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Hawai'i Division of Forestry & Wildlife - Kamuela State Tree Nursery",
        "Address": "66-1220A Lalamilo Rd, Kamuela, HI, 96743",
        "City": "Kamuela",
        "State": "HI",
        "Zip Code": "96743",
        "Country": "USA",
        "Contact": "Jacob Witcraft",
        "Phone": "808.887.6061",
        "Email": "statetreenursery@hawaii.gov",
        "Nursery Type": "State",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Hours": "8-4:30",
        "Latitude": "19.862157",
        "Longitude": "-155.698847",
        "County": "Hawaii County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -155.698847,
          19.862157
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Hawai'i Division of Forestry & Wildlife - Kaua'i District Nursery",
        "Address": "3060 Eiwa St Rm 306, Lihue, HI, 96766-1875",
        "City": "Lihue",
        "State": "HI",
        "Zip Code": "96766-1875",
        "Country": "USA",
        "Email": "statetreenursery@hawaii.gov",
        "Website": "https://dlnr.hawaii.gov/forestry/frs/reserves/kauai/",
        "Nursery Type": "State",
        "Product": "Plants",
        "Latitude": "21.975971",
        "Longitude": "-159.36682",
        "Street": "Eiwa St",
        "County": "Kauai County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -159.36682,
          21.975971
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Hawai'i Division of Forestry & Wildlife - Kokee State Park Native Plant Nursery",
        "Address": "3060 Eiwa St 306, PO Box 100, Kekaha, HI, 96752",
        "City": "PO Box 100",
        "State": "HI",
        "Zip Code": "96752",
        "Country": "USA",
        "Phone": "808.274.3433",
        "Fax": "808.335.6131",
        "Email": "statetreenursery@hawaii.gov",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "21.971285",
        "Longitude": "-159.713792",
        "County": "Kauai County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -159.713792,
          21.971285
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Hawai'i Division of Forestry & Wildlife - Maui District Nursery",
        "Address": "54 S High St Rm 101, Wailuku Maui, HI, 96793",
        "City": "Wailuku Maui",
        "State": "HI",
        "Zip Code": "96793",
        "Country": "USA",
        "Contact": "Richard",
        "Phone": "808.873.3504",
        "Fax": "808.984.8111",
        "Email": "statetreenursery@hawaii.gov",
        "Nursery Type": "State",
        "Product": "Plants",
        "Latitude": "20.88669",
        "Longitude": "-156.504031",
        "Street": "S High St",
        "County": "Maui County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -156.504031,
          20.88669
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Hawaii Island Seed Bank",
        "Address": "74-4930 Kealakaa St., Kailua Kona, HI, 96740",
        "City": "Kailua Kona",
        "State": "HI",
        "Zip Code": "96740",
        "Country": "USA",
        "Contact": "Jill Wagner",
        "Phone": "808.325.2377",
        "Email": "jillwagner3@icloud.com",
        "Website": "http://www.drylandforest.org/seed-bank",
        "Latitude": "19.675339",
        "Longitude": "-155.98523",
        "Street": "Kealakaa St",
        "County": "Hawaii County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -155.98523,
          19.675339
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Hawaii Palm Company",
        "Address": "PO Box 459, Kapa'au, HI, 96755",
        "City": "Kapa'au",
        "State": "HI",
        "Zip Code": "96755",
        "Country": "USA",
        "Contact": "Betsy Garties",
        "Phone": "808.889.5906",
        "Email": "hawaiipalmco@gmail.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "20.226101",
        "Longitude": "-155.776957",
        "County": "Hawaii County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -155.776957,
          20.226101
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Hawaii Reforestation Company",
        "Address": "5927 Kawaihau Rd, Kapa'a, HI, 96746",
        "City": "Kapa'a",
        "State": "HI",
        "Zip Code": "96746",
        "Country": "USA",
        "Contact": "John Edson",
        "Phone": "808.821.8841",
        "Fax": "808.821.8841",
        "Email": "jedson@hawaiiantel.net",
        "Email 2": "tropicforests_jle@hawaiiantel.net",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "22.099667",
        "Longitude": "-159.342191",
        "Street": "Kawaihau Rd",
        "County": "Kauai County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -159.342191,
          22.099667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Hawaiian Gardens",
        "Address": "PO Box 1779, Kailua-Kona, HI, 96745",
        "City": "Kailua-Kona",
        "State": "HI",
        "Zip Code": "96745",
        "Country": "USA",
        "Contact": "Pati Barcas",
        "Phone": "808.329.5702",
        "Fax": "808.329.2082",
        "Email": "hawaiiangardens@hialoha.net",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "19.593456",
        "Longitude": "-155.438015",
        "County": "Hawaii County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -155.438015,
          19.593456
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Heartland Restoration Services/Earth Source Inc",
        "Address": "14921 Hand Rd, Fort Wayne, IN, 46818",
        "City": "Fort Wayne",
        "State": "IN",
        "Zip Code": "46818",
        "Country": "USA",
        "Contact": "Eric Ummel",
        "Phone": "260.489.8511",
        "Fax": "260.489.8607",
        "Email": "ericummel@earthsourceinc.net",
        "Website": "http://www.earthsourceinc.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants\nSeeds",
        "Latitude": "41.220808",
        "Longitude": "-85.210431",
        "Street": "Hand Rd",
        "County": "Allen County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.210431,
          41.220808
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Heartland Seed of Missouri  LLC",
        "Address": "113 Welch Road, Eolia, MO, 69944",
        "City": "Eolia",
        "State": "MO",
        "Zip Code": "69944",
        "Country": "USA",
        "Contact": "Jennifer Eggemeyer",
        "Phone": "866.476.7333",
        "Email": "melissa@heartlandseed.com",
        "Website": "https://heartlandseed.com",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Seeds",
        "Latitude": "39.208131",
        "Longitude": "-91.039096",
        "Street": "Welch Rd",
        "County": "Lincoln County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -91.039096,
          39.208131
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Heep's Native Plant Nursery",
        "Address": "1714 S Palm Court Dr, Harlingen, TX, 78552",
        "City": "Harlingen",
        "State": "TX",
        "Zip Code": "78552",
        "Country": "USA",
        "Contact": "Mike Heep",
        "Phone": "956.457.6834",
        "Email": "heep0311@yahoo.com",
        "Website": "http://www.heepsnursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "26.174459",
        "Longitude": "-97.730457",
        "Street": "S Palm Court Dr",
        "County": "Cameron County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.730457,
          26.174459
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Helia Native Nursery",
        "Address": "342 N Plain Rd, Housatonic, MA, 01236",
        "City": "Housatonic",
        "State": "MA",
        "Zip Code": "01236",
        "Country": "USA",
        "Contact": "Bridghe McCracken",
        "Phone": "413.274.3433",
        "Fax": "413.274.3464",
        "Email": "projectnative@gmail.com",
        "Website": "http://www.projectnative.org",
        "Nursery Type": "Not-for-Profit",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants\nSeeds",
        "Latitude": "42.246463",
        "Longitude": "-73.373174",
        "Street": "N Plain Rd",
        "County": "Berkshire County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.373174,
          42.246463
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Hensler Nursery Inc",
        "Address": "5715 North 750 East, Hamlet, IN, 46532",
        "City": "Hamlet",
        "State": "IN",
        "Zip Code": "46532",
        "Country": "USA",
        "Contact": "Joe Hensler",
        "Phone": "574.867.4192",
        "Fax": "574.867.4960",
        "Email": "info@henslernurseryindiana.com",
        "Website": "http://www.henslernurseryindiana.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Established": "1953",
        "Hours": "7:00 AM - 3;30PM (M, Tu, W, Th, F)",
        "Latitude": "41.385718",
        "Longitude": "-86.558433",
        "Street": "N 750 E",
        "County": "Starke County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.558433,
          41.385718
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Heritage Seedlings and Liners",
        "Address": "4194 71st Ave SE, Salem, OR, 97317",
        "City": "Salem",
        "State": "OR",
        "Zip Code": "97317",
        "Country": "USA",
        "Contact": "Lynda Boyer",
        "Phone": "503.585.9835",
        "Fax": "503.371.9688",
        "Email": "sales@heritageseedlings.com",
        "Website": "http://www.heritageseedlings.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nContract",
        "Product": "Plants\nSeeds",
        "Established": "1986",
        "Hours": "M-F 7-4:00 by appt",
        "Latitude": "44.891687",
        "Longitude": "-122.912788",
        "Street": "71st Ave SE",
        "County": "Marion County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.912788,
          44.891687
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Hickory Hill Native Nursery Inc",
        "Address": "27212 Hickory Hill Rd, Brooksville, FL, 34602",
        "City": "Brooksville",
        "State": "FL",
        "Zip Code": "34602",
        "Country": "USA",
        "Contact": "Rick McDonnell",
        "Phone": "352.754.9701",
        "Fax": "352.799.7802",
        "Email": "irckmhhnn@bellsouth.net",
        "Email 2": "shorels@bellsouth.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "28.476938",
        "Longitude": "-82.288975",
        "Street": "Hickory Hill Rd",
        "County": "Hernando County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.288975,
          28.476938
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Hidden Savanna Nursery",
        "Address": "100 N Van Kal St, Kalamazoo, MI, 49009",
        "City": "Kalamazoo",
        "State": "MI",
        "Zip Code": "49009",
        "Country": "USA",
        "Contact": "Chad Hughson",
        "Phone": "269.352.3876",
        "Fax": "269.353.8848",
        "Email": "info@hiddensavanna.com",
        "Website": "www.hiddensavanna.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nContract",
        "Product": "Plants",
        "Latitude": "42.288061",
        "Longitude": "-85.765747",
        "Street": "Van Kal St",
        "County": "Kalamazoo County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.765747,
          42.288061
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "High Mountain Nursery",
        "Address": "271 W Bitterbrush Ln, Draper, UT, 84020",
        "City": "Draper",
        "State": "UT",
        "Zip Code": "84020",
        "Country": "USA",
        "Contact": "Heidi Bullock",
        "Phone": "435.731.0107",
        "Fax": "435.615.6690",
        "Email": "chris@highmtnnursery.com",
        "Website": "http://highmtnnursery.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nContract",
        "Product": "Plants",
        "Established": "1956",
        "Hours": "M-F 8-5",
        "Latitude": "40.487937",
        "Longitude": "-111.8991",
        "Street": "W Bitterbrush Ln",
        "County": "Salt Lake County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.8991,
          40.487937
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Hild & Associates Inc",
        "Address": "326 Glover Rd, River Falls, WI, 54022",
        "City": "River Falls",
        "State": "WI",
        "Zip Code": "54022",
        "Country": "USA",
        "Contact": "George Hild",
        "Phone": "715.426.5131",
        "Fax": "715.426.9887",
        "Email": "sales@hildandassociates.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Established": "1986",
        "Hours": "M-F 9-4 by appt",
        "Latitude": "44.907138",
        "Longitude": "-92.678696",
        "Street": "S Glover Rd",
        "County": "St. Croix County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -92.678696,
          44.907138
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Hill House Farm & Nursery",
        "Address": "631 Scrabble Road, Castleton, VA, 22716",
        "City": "Castleton",
        "State": "VA",
        "Zip Code": "22716",
        "Country": "USA",
        "Contact": "Janet Davis",
        "Phone": "540.937.1798",
        "Email": "hillhousenativeplants@gmail.com",
        "Website": "http://www.hillhousenativeplants.com",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "38.609055",
        "Longitude": "-78.13082",
        "Street": "Scrabble Rd",
        "County": "Rappahannock County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.13082,
          38.609055
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Hillis Nursery Company Inc",
        "Address": "92 Gardner Rd, McMinnville, TN, 37110",
        "City": "McMinnville",
        "State": "TN",
        "Zip Code": "37110",
        "Country": "USA",
        "Contact": "Dickey Hillis",
        "Phone": "931.668.4364",
        "Fax": "931.668.7432",
        "Email": "hillisnsy@hillisnursery.com",
        "Website": "http://www.hillisnursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "35.635781",
        "Longitude": "-85.718827",
        "Street": "Gardner Rd",
        "County": "Warren County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.718827,
          35.635781
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Hills Creek Nursery",
        "Address": "826 Hills Creek Rd, McMinnville, TN, 37110",
        "City": "McMinnville",
        "State": "TN",
        "Zip Code": "37110",
        "Country": "USA",
        "Contact": "Bobby",
        "Phone": "931.668.8071",
        "Fax": "931.668.2062",
        "Email": "HCreek@blomand.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "35.580306",
        "Longitude": "-85.699262",
        "Street": "Hills Creek Rd",
        "County": "Warren County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.699262,
          35.580306
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Hillside Nursery",
        "Address": "4 Norman Road, Buckland, MA, 01330",
        "City": "Buckland",
        "State": "MA",
        "Zip Code": "01330",
        "Country": "USA",
        "Contact": "Amy Murray",
        "Phone": "413.489.1616",
        "Email": "info@hillsidenursery.biz",
        "Website": "http://www.hillsidenursery.biz",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "42.56397",
        "Longitude": "-72.824959",
        "Street": "Norman Rd",
        "County": "Franklin County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.824959,
          42.56397
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Hines Nurseries Inc",
        "Address": "PO Box 1449, Vacaville, CA, 95696",
        "City": "Vacaville",
        "State": "CA",
        "Zip Code": "95696",
        "Country": "USA",
        "Contact": "Joe Gray",
        "Phone": "707.446.4700",
        "Fax": "707.451.8861",
        "Email": "jgray@hineshort.com",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "38.34896",
        "Longitude": "-121.908324",
        "County": "Solano County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.908324,
          38.34896
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Ho'olawa Farms",
        "Address": "3 Kahiapo Pl, Haiku, HI, 96708",
        "City": "Haiku",
        "State": "HI",
        "Zip Code": "96708",
        "Country": "USA",
        "Contact": "Anna Palomino",
        "Phone": "808.575.5099",
        "Fax": "808.575.5379",
        "Email": "hoolawa@hawaii.rr.com",
        "Website": "http://www.hoolawafarms.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nContract",
        "Product": "Plants",
        "Latitude": "20.931015",
        "Longitude": "-156.317751",
        "Street": "Kahiapo Pl",
        "County": "Maui County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -156.317751,
          20.931015
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Holden Wholesale Growers",
        "Address": "10374 Hazel Green Rd NE, Silverton, OR, 97381",
        "City": "Silverton",
        "State": "OR",
        "Zip Code": "97381",
        "Country": "USA",
        "Contact": "Paul Holden",
        "Phone": "503.873.5940",
        "Fax": "503.873.8726",
        "Email": "holdenwholesale@meritel.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "45.00205",
        "Longitude": "-122.84814",
        "Street": "Hazelgreen Rd NE",
        "County": "Marion County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.84814,
          45.00205
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Holland Wildflower Farm",
        "Address": "290 O'Neal Ln, Elkins, AR, 72727",
        "City": "Elkins",
        "State": "AR",
        "Zip Code": "72727",
        "Country": "USA",
        "Contact": "Julie Holland",
        "Phone": "479.643.2622",
        "Fax": "479.643.2622",
        "Email": "hwildflowerfarm@yahoo.com",
        "Website": "http://hollandwildflowerfarm.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail\nContract",
        "Product": "Seeds",
        "Latitude": "35.972331",
        "Longitude": "-93.997572",
        "County": "Washington County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.997572,
          35.972331
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Homestead Gardens",
        "Address": "743 W Central Ave, Davidsonville, MD, 21035",
        "City": "Davidsonville",
        "State": "MD",
        "Zip Code": "21035",
        "Country": "USA",
        "Contact": "Tim Hamilton",
        "Phone": "800.300.5631",
        "Phone 2": "410.798.5000",
        "Fax": "410.956.2926",
        "Email": "nursery@homesteadgardens.com",
        "Website": "http://www.homesteadgardens.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "38.923378",
        "Longitude": "-76.625645",
        "Street": "Central Ave W",
        "County": "Anne Arundel County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.625645,
          38.923378
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Hood Canal Nurseries",
        "Address": "PO Box 36, Port Gamble, WA, 98364",
        "City": "Port Gamble",
        "State": "WA",
        "Zip Code": "98364",
        "Country": "USA",
        "Contact": "Mike Driscoll",
        "Phone": "360.297.7555",
        "Fax": "360.297.8446",
        "Email": "nurseries@tscnet.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nContract",
        "Product": "Plants",
        "Latitude": "47.84711",
        "Longitude": "-122.588364",
        "County": "Kitsap County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.588364,
          47.84711
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Horizon Herbs LLC",
        "Address": "PO Box 69, Williams, OR, 97544",
        "City": "Williams",
        "State": "OR",
        "Zip Code": "97544",
        "Country": "USA",
        "Contact": "Richo Cech",
        "Phone": "541.846.6704",
        "Fax": "541.846.6233",
        "Email": "hhinetserv@budget.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail",
        "Product": "Plants\nSeeds",
        "Latitude": "42.21873",
        "Longitude": "-123.27394",
        "County": "Josephine County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.27394,
          42.21873
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Horticultural Systems Inc",
        "Address": "PO Box 70, Parrish, FL, 34219",
        "City": "Parrish",
        "State": "FL",
        "Zip Code": "34219",
        "Country": "USA",
        "Contact": "Chris Berry",
        "Phone": "800.771.4114",
        "Phone 2": "941.776.2751",
        "Fax": "941.776.3700",
        "Email": "dphelps@ecomgmt.com",
        "Email 2": "hsi@ecomgmt.com",
        "Website": "http://www.ecomgmt.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "27.566457",
        "Longitude": "-82.269458",
        "County": "Manatee County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.269458,
          27.566457
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Hoyt Arboretum",
        "Address": "4000 SW Fairview Blvd, Portland, OR, 97221",
        "City": "Portland",
        "State": "OR",
        "Zip Code": "97221",
        "Country": "USA",
        "Contact": "Dan Moeller",
        "Phone": "503.865.8733",
        "Fax": "503.823.4213",
        "Email": "dmoeller@ci.portland.or.us",
        "Email 2": "info@hoytarboretum.org",
        "Website": "http://www.hoytarboretum.org/",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "45.514774",
        "Longitude": "-122.717833",
        "Street": "SW Fairview Blvd",
        "County": "Multnomah County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.717833,
          45.514774
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Hramor Nursery",
        "Address": "829 W Fox Farm Rd, Manistee, MI, 49660",
        "City": "Manistee",
        "State": "MI",
        "Zip Code": "49660",
        "Country": "USA",
        "Contact": "Michael Morin",
        "Phone": "231.723.4846",
        "Fax": "231.723.5580",
        "Email": "hramor@jackpine.com",
        "Website": "http://www.hramornursery.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "44.191021",
        "Longitude": "-86.321206",
        "Street": "W Fox Farm Rd",
        "County": "Manistee County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.321206,
          44.191021
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Hsu's Ginseng Enterprises Inc",
        "Address": "T6500 CR W, Wausau, WI, 54403",
        "City": "Wausau",
        "State": "WI",
        "Zip Code": "54403",
        "Country": "USA",
        "Contact": "Paul Hsu",
        "Phone": "715.675.2325",
        "Phone 2": "800.826.1577",
        "Fax": "715.675.3175",
        "Email": "info@hsuginseng.com",
        "Website": "http://www.hsuginseng.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants\nSeeds",
        "Latitude": "44.952863",
        "Longitude": "-89.531804",
        "County": "Marathon County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.531804,
          44.952863
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Huckleberry Lane Nursery",
        "Address": "69117 Huckleberry Rd, North Bend, OR, 97459",
        "City": "North Bend",
        "State": "OR",
        "Zip Code": "97459",
        "Country": "USA",
        "Contact": "Mel or Kathy Stewart",
        "Phone": "541.756.7328",
        "Fax": "541.756.7328",
        "Email": "hucklanenursery@hotmail.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Established": "1985",
        "Hours": "by appt",
        "Latitude": "43.50471",
        "Longitude": "-124.207614",
        "Street": "Huckleberry Rd",
        "County": "Coos County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -124.207614,
          43.50471
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Hughes Water Gardens",
        "Address": "25289 SW Stafford Rd, Tualatin, OR, 97062",
        "City": "Tualatin",
        "State": "OR",
        "Zip Code": "97062",
        "Country": "USA",
        "Contact": "Marta Hammel, Dave Brigante",
        "Phone": "503.638.1004",
        "Fax": "503.638.9035",
        "Email": "water@teleport.com",
        "Website": "http://hugheswatergardens.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "45.338038",
        "Longitude": "-122.741877",
        "Street": "SW Stafford Rd",
        "County": "Clackamas County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.741877,
          45.338038
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Hui Ku Maoli Ola",
        "Address": "46-403 Haiku Rd, Kane'ohe, HI, 96744",
        "City": "Kane'ohe",
        "State": "HI",
        "Zip Code": "96744",
        "Country": "USA",
        "Contact": "Rick Kaponowaiwaiola Barboza",
        "Phone": "808.235.6165",
        "Fax": "866.342.6970",
        "Email": "nativehawaiianplants@gmail.com",
        "Website": "http://www.hawaiiannativeplants.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "21.410176",
        "Longitude": "-157.821704",
        "Street": "Haiku Rd",
        "County": "Honolulu County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -157.821704,
          21.410176
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Humble Roots Farm and Nursery  LLC",
        "Address": "Mosier, OR, 97040",
        "City": "OR",
        "State": "OR",
        "Zip Code": "97040",
        "Country": "USA",
        "Phone": "503.449.3694",
        "Email": "humbleroots@gorge.net",
        "Website": "https://www.humblerootsnursery.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nContract\nResearch",
        "Product": "Plants\nServices",
        "Latitude": "45.65079",
        "Longitude": "-121.37902",
        "County": "Wasco County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.37902,
          45.65079
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Hydra Aquatic",
        "Address": "9 Gilcrease Ln, Los Lunas, NM, 87031",
        "City": "Los Lunas",
        "State": "NM",
        "Zip Code": "87031",
        "Country": "USA",
        "Phone": "505.866.5027",
        "Fax": "505.866.SOIL",
        "Email": "buyoaks@aol.com",
        "Business Type": "Wholesale\nMail\nContract",
        "Product": "Plants",
        "Latitude": "34.805823",
        "Longitude": "-106.675387",
        "Street": "Gilcrease Rd",
        "County": "Valencia County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -106.675387,
          34.805823
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "IFA Nurseries Inc",
        "Address": "9450 SW Commerce Circle, Ste 460, Wilsonville, OR, 97070",
        "City": "Ste 460",
        "State": "OR",
        "Zip Code": "97070",
        "Country": "USA",
        "Contact": "Steve Akehurst",
        "Phone": "541.556.8907",
        "Email": "sakehurst@ifanurseries.com",
        "Website": "http://ifanurseries.com/",
        "Nursery Type": "Forest Industry",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "45.337059",
        "Longitude": "-122.774127",
        "Street": "SW Commerce Cir",
        "County": "Washington County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.774127,
          45.337059
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "IFA Nurseries Inc - Aurora",
        "Address": "23646 Klupenger Rd NE, Aurora, OR, 97002",
        "City": "Aurora",
        "State": "OR",
        "Zip Code": "97002",
        "Country": "USA",
        "Contact": "Steve Akehurst",
        "Phone": "541.556.8907",
        "Email": "sakehurst@ifanurseries.com",
        "Website": "http://ifanurseries.com/",
        "Nursery Type": "Forest Industry",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "45.263249",
        "Longitude": "-122.803123",
        "Street": "Klupenger Rd NE",
        "County": "Marion County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.803123,
          45.263249
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "IFA Nurseries Inc - Canby",
        "Address": "1887 N Holly St  , Canby, OR, 97013",
        "City": "Canby",
        "State": "OR",
        "Zip Code": "97013",
        "Country": "USA",
        "Contact": "Dan O'Connell",
        "Phone": "503.266.7825",
        "Fax": "503.266.7826",
        "Email": "canby@ifanurseries.com",
        "Website": "http://ifanurseries.com/",
        "Nursery Type": "Forest Industry",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "45.277976",
        "Longitude": "-122.698767",
        "Street": "N Holly St",
        "County": "Clackamas County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.698767,
          45.277976
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "IFA Nurseries Inc - Corporate Office",
        "Address": "9450 SW Commerce Cir Ste 460, Wilsonville, OR, 97070",
        "City": "Wilsonville",
        "State": "OR",
        "Zip Code": "97070",
        "Country": "USA",
        "Contact": "Dave Stearns",
        "Phone": "503.266.1940",
        "Phone 2": "800.219.1244",
        "Fax": "503.266.1754",
        "Email": "ifanursery@aol.com",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "45.337059",
        "Longitude": "-122.774127",
        "Street": "SW Commerce Cir",
        "County": "Washington County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.774127,
          45.337059
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "IFA Nurseries Inc - Klamath Falls",
        "Address": "1205 S Spring St, Klamath Falls, OR, 97601",
        "City": "Klamath Falls",
        "State": "OR",
        "Zip Code": "97601",
        "Country": "USA",
        "Contact": "Steve Akehurst",
        "Phone": "541.556.8907",
        "Email": "sakehurst@ifanurseries.com",
        "Website": "http://ifanurseries.com/",
        "Nursery Type": "Forest Industry",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "42.21843",
        "Longitude": "-121.773272",
        "Street": "S Spring St",
        "County": "Klamath County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.773272,
          42.21843
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "IFA Nurseries Inc - Nisqually",
        "Address": "135 Nisqually Cut Off Rd SE, Olympia, WA, 98513",
        "City": "Olympia",
        "State": "WA",
        "Zip Code": "98513",
        "Country": "USA",
        "Contact": "Steve Akehurst",
        "Phone": "541.556.8907",
        "Fax": "503.855.4593",
        "Email": "sakehurst@ifanurseries.com",
        "Website": "http://ifanurseries.com/",
        "Nursery Type": "Forest Industry",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "47.065704",
        "Longitude": "-122.716877",
        "Street": "Nisqually Cutoff Rd SE",
        "County": "Thurston County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.716877,
          47.065704
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "IFA Nurseries Inc - Northwest Seed",
        "Address": "1885 N  Holly Street, Canby, OR, 97013",
        "City": "Canby",
        "State": "OR",
        "Zip Code": "97013",
        "Country": "USA",
        "Contact": "Steve Akehurst",
        "Phone": "541.556.8907",
        "Website": "http://ifanurseries.com/northwest-seed/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Seeds",
        "Latitude": "45.278545",
        "Longitude": "-122.697425",
        "Street": "N Holly St",
        "County": "Clackamas County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.697425,
          45.278545
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "IFA Nurseries Inc - Toledo",
        "Address": "463 Eadon Rd, Toledo, WA, 98591",
        "City": "Toledo",
        "State": "WA",
        "Zip Code": "98591",
        "Country": "USA",
        "Contact": "Steve Akehurst",
        "Phone": "360.864.2828",
        "Fax": "360.864.2829",
        "Email": "sakehurst@ifanurseries.com or rwimer@ifanurseries.com",
        "Website": "http://ifanurseries.com/",
        "Nursery Type": "Forest Industry",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "46.454354",
        "Longitude": "-122.788542",
        "Street": "Eadon Rd",
        "County": "Lewis County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.788542,
          46.454354
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "IFCO Seedlings",
        "Address": "1265 Georgia Hwy 133 N, Moultrie, GA, 31768",
        "City": "Moultrie",
        "State": "GA",
        "Zip Code": "31768",
        "Country": "USA",
        "Contact": "Preston Mobley",
        "Phone": "800.633.4506",
        "Fax": "229.890.0087",
        "Email": "pmobley@ifcoseedlings.com",
        "Website": "https://www.ifcoseedlings.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants\nSeeds\nServices",
        "Latitude": "31.23258",
        "Longitude": "-83.812801",
        "Street": "GA Hwy 133 N",
        "County": "Colquitt County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.812801,
          31.23258
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Idaho Evergreens LLC",
        "Address": "5275 Hwy 8, Deary, ID, 83823",
        "City": "Deary",
        "State": "ID",
        "Zip Code": "83823",
        "Country": "USA",
        "Contact": "Gabe French",
        "Phone": "208.596.9669",
        "Email": "gabe15@me.com",
        "Website": "http://www.idahoevergreens.com/",
        "Latitude": "46.79994",
        "Longitude": "-116.518135",
        "Street": "Highway 8",
        "County": "Latah County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.518135,
          46.79994
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Idaho Grimm Growers",
        "Address": "395 S Broadway, Blackfoot, ID, 83221",
        "City": "Blackfoot",
        "State": "ID",
        "Zip Code": "83221",
        "Country": "USA",
        "Contact": "Alan DeGiulio",
        "Phone": "208.785.0830",
        "Fax": "208.785.0841",
        "Email": "staff@idahogrimmgrowers.com",
        "Website": "http://idahogrimmgrowers.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Seeds",
        "Latitude": "43.186877",
        "Longitude": "-112.349142",
        "Street": "S Broadway St",
        "County": "Bingham County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -112.349142,
          43.186877
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Illinois Department of Natural Resources - Mason State Nursery",
        "Address": "17855 N CR 2400 E, Topeka, IL, 61567",
        "City": "Topeka",
        "State": "IL",
        "Zip Code": "61567",
        "Country": "USA",
        "Contact": "Dave Horvath/Chelsea Morse",
        "Phone": "309.535.2185",
        "Email": "dnr.masonstatenursery@illinois.gov",
        "Website": "https://dnr.illinois.gov",
        "Nursery Type": "State",
        "Business Type": "Retail\nMail\nInternet",
        "Product": "Plants\nSeeds",
        "Latitude": "40.319965",
        "Longitude": "-89.904538",
        "Street": "N County Rd 2400 E",
        "County": "Mason County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.904538,
          40.319965
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Illinois Forest Products",
        "Address": "8699 Arenzville Rd, Beardstown, IL, 62618",
        "City": "Beardstown",
        "State": "IL",
        "Zip Code": "62618",
        "Country": "USA",
        "Contact": "Kevin Massie",
        "Phone": "217.323.4540",
        "Fax": "217.323.9468",
        "Email": "ifp@casscomm.com",
        "Email 2": "isp@casscom.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "39.999242",
        "Longitude": "-90.408514",
        "Street": "Arenzville Rd",
        "County": "Cass County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.408514,
          39.999242
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Indian Trails Native Nursery",
        "Address": "6315 Park Ln W, Lake Worth, FL, 33467-6606",
        "City": "Lake Worth",
        "State": "FL",
        "Zip Code": "33467-6606",
        "Country": "USA",
        "Contact": "Jane Thompson",
        "Phone": "561.641.9488",
        "Email": "injntrails@aol.com",
        "Website": "http://www.afnn.org",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "26.576393",
        "Longitude": "-80.220106",
        "Street": "W Park Ln",
        "County": "Palm Beach County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.220106,
          26.576393
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Indiana Division of Forestry - Jasper-Pulaski State Nursery",
        "Address": "15508 W 700 N, Medaryville, IN, 47957",
        "City": "Medaryville",
        "State": "IN",
        "Zip Code": "47957",
        "Country": "USA",
        "Phone": "219.843.4827",
        "Fax": "219.843.6671",
        "Email": "jaspernursery@dnr.in.gov",
        "Website": "http://www.in.gov/dnr/forestry/",
        "Nursery Type": "State",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "41.158694",
        "Longitude": "-86.901077",
        "Street": "W 700 N",
        "County": "Pulaski County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.901077,
          41.158694
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Indiana Division of Forestry - Vallonia State Nursery",
        "Address": "2782 W CR 540 S, Vallonia, IN, 47281",
        "City": "Vallonia",
        "State": "IN",
        "Zip Code": "47281",
        "Country": "USA",
        "Contact": "Bob Hawkins",
        "Phone": "812.358.3621",
        "Fax": "812.358.9033",
        "Email": "vallonianursery@dnr.in.gov",
        "Website": "http://www.in.gov/dnr/forestry/",
        "Nursery Type": "State",
        "Business Type": "Retail",
        "Product": "Plants",
        "Established": "1936",
        "Hours": "M-F 8-4",
        "Latitude": "38.804387",
        "Longitude": "-86.088079",
        "Street": "W 540 S",
        "County": "Jackson County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.088079,
          38.804387
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Inside Passage Seeds and Native Plants Services",
        "Address": "PO Box 639, Port Townsend, WA, 98368",
        "City": "Port Townsend",
        "State": "WA",
        "Zip Code": "98368",
        "Country": "USA",
        "Contact": "Forest Shomer",
        "Phone": "360.385.6114",
        "Email": "inspass@whidbey.net",
        "Website": "http://www.insidepassageseeds.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail",
        "Product": "Seeds",
        "Established": "1992",
        "Latitude": "48.118533",
        "Longitude": "-122.767963",
        "County": "Jefferson County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.767963,
          48.118533
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Interlake Forage Seeds Ltd",
        "Address": "Box 190, Fisher Branch, MB, R0C 0Z0",
        "City": "Fisher Branch",
        "State": "MB",
        "Zip Code": "R0C 0Z0",
        "Country": "Canada",
        "Contact": "Paul Gregory",
        "Phone": "204.372.6920",
        "Phone 2": "800.990.1390",
        "Fax": "204.372.6635",
        "Email": "paul@interlakeforageseeds.com",
        "Website": "http://interlakeforageseeds.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Seeds",
        "Latitude": "30.344615",
        "Longitude": "-92.345888",
        "Street": "PO Box",
        "County": "Acadia Parish"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -92.345888,
          30.344615
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Intermountain Aquatics",
        "Address": "116 Mustang Dr, Driggs, ID, 83422",
        "City": "Driggs",
        "State": "ID",
        "Zip Code": "83422",
        "Country": "USA",
        "Contact": "Tim White",
        "Phone": "208.354.3690",
        "Fax": "208.247.0941",
        "Email": "info@intermountainaquatics.com",
        "Website": "http://www.intermountainaquatics.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "43.74451",
        "Longitude": "-111.098673",
        "Street": "Mustang Dr",
        "County": "Teton County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.098673,
          43.74451
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Intermountain Cactus",
        "Address": "1478 N 750 E, Kaysville, UT, 84037",
        "City": "Kaysville",
        "State": "UT",
        "Zip Code": "84037",
        "Country": "USA",
        "Contact": "Robert Johnson",
        "Phone": "801.546.2006",
        "Email": "intermtcactus@xmission.com",
        "Website": "http://www.intermountaincactus.com/",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "41.058945",
        "Longitude": "-111.921527",
        "Street": "N Ewe Turn St",
        "County": "Davis County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.921527,
          41.058945
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Intermountain Nursery",
        "Address": "30443 N Auberry Rd, Prather, CA, 93651",
        "City": "Prather",
        "State": "CA",
        "Zip Code": "93651",
        "Country": "USA",
        "Contact": "Bonnie Bladen or Ray Laclergue",
        "Phone": "559.855.3113",
        "Fax": "559.855.8809",
        "Email": "Bonnie@Intermountainnursery.com",
        "Website": "http://www.intermountainnursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "37.041808",
        "Longitude": "-119.501869",
        "Street": "Auberry Rd",
        "County": "Fresno County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.501869,
          37.041808
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Intermountain Seed Company",
        "Address": "270 W 300 N, Ephraim, UT, 84627",
        "City": "Ephraim",
        "State": "UT",
        "Zip Code": "84627",
        "Country": "USA",
        "Contact": "Eric",
        "Phone": "435.283.4703",
        "Fax": "435.283.4388",
        "Email": "ecc3@cisna.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants\nSeeds",
        "Latitude": "39.36513",
        "Longitude": "-111.594395",
        "Street": "W 300 N",
        "County": "Sanpete County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.594395,
          39.36513
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "International Forest Company",
        "Address": "1265 Georgia Hwy 133 N, Moultrie, GA, 31768-7165",
        "City": "Moultrie",
        "State": "GA",
        "Zip Code": "31768-7165",
        "Country": "USA",
        "Contact": "Wayne Bell",
        "Phone": "800.633.4506",
        "Fax": "229.890.0087",
        "Email": "info@interforestry.com",
        "Website": "http://www.internationalforest.co",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants\nSeeds",
        "Latitude": "31.23258",
        "Longitude": "-83.812801",
        "Street": "GA Hwy 133 N",
        "County": "Colquitt County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.812801,
          31.23258
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "International Forest Company Bareroot IFCO",
        "Address": "1444 Shubuta Eucutta Rd, Shubuta, MS, 39360",
        "City": "Shubuta",
        "State": "MS",
        "Zip Code": "39360",
        "Country": "USA",
        "Phone": "601.687.5766",
        "Email": "tanderson@ifcoseedlings.com",
        "Website": "http://www.plumcreektrees.com/",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "31.792854",
        "Longitude": "-88.778432",
        "Street": "Shubuta Eucutta Rd",
        "County": "Wayne County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.778432,
          31.792854
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Intervale Conservation Nursery",
        "Address": "180 Intervale Rd, Burlington, VT, 05401",
        "City": "Burlington",
        "State": "VT",
        "Zip Code": "05401",
        "Country": "USA",
        "Contact": "Mike Ingalls",
        "Phone": "802.660.0440",
        "Fax": "802.658.8075",
        "Email": "mikei@intervale.org",
        "Website": "www.intervale.org/what-we-do/intervale-conservation-nursery/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "44.492959",
        "Longitude": "-73.20431",
        "Street": "Intervale Rd",
        "County": "Chittenden County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.20431,
          44.492959
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Io Makuahine",
        "Address": "46 281 Auna St, Kane'ohe, HI, 96744",
        "City": "Kane'ohe",
        "State": "HI",
        "Zip Code": "96744",
        "Country": "USA",
        "Contact": "Tom Loudat",
        "Phone": "808.235.0578",
        "Fax": "808.235.5161",
        "Email": "tomloud@earthlink.net",
        "Email 2": "tomlou@Hawaii.rr.com",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "21.420326",
        "Longitude": "-157.812885",
        "Street": "Auna St",
        "County": "Honolulu County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -157.812885,
          21.420326
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Ion Exchange Inc",
        "Address": "1878 Old Mission Dr, Harper's Ferry, IA, 52146-7533",
        "City": "Harper's Ferry",
        "State": "IA",
        "Zip Code": "52146-7533",
        "Country": "USA",
        "Contact": "Howard Bright",
        "Phone": "563.535.7231",
        "Fax": "563.535.7362",
        "Email": "hbright@ionxchange.com",
        "Email 2": "sales@ionxchange.com",
        "Website": "http://ionxchange.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail\nInternet\nContract",
        "Product": "Plants\nSeeds",
        "Established": "1988",
        "Hours": "by appt",
        "Latitude": "43.11585",
        "Longitude": "-91.256595",
        "Street": "Old Mission Dr",
        "County": "Allamakee County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -91.256595,
          43.11585
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Iowa Dept of Natural Resources - State Forest Nursery",
        "Address": "2404 S Duff Ave, Ames, IA, 50010",
        "City": "Ames",
        "State": "IA",
        "Zip Code": "50010",
        "Country": "USA",
        "Contact": "Patrick Griffin",
        "Phone": "800.865.2477",
        "Fax": "515.233.1131",
        "Email": "patrick.griffin@dnr.iowa.gov",
        "Website": "https://www.iowadnr.gov/Conservation/Forestry/State-Forest-Nursery",
        "Nursery Type": "State",
        "Business Type": "Retail\nMail\nInternet",
        "Product": "Plants",
        "Latitude": "41.999951",
        "Longitude": "-93.607425",
        "Street": "S Duff Ave",
        "County": "Story County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.607425,
          41.999951
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Itasca Ladyslipper Farm",
        "Address": "14958 River Rd, Grand Rapids, MN, 55744",
        "City": "Grand Rapids",
        "State": "MN",
        "Zip Code": "55744",
        "Country": "USA",
        "Contact": "Carol Steele",
        "Phone": "218.247.0245",
        "Email": "ladyslippers@paulbunyan.net",
        "Website": "http://www.ladyslipperfarm.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail\nInternet",
        "Product": "Plants",
        "Latitude": "47.09966",
        "Longitude": "-93.409544",
        "Street": "River Rd",
        "County": "Itasca County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.409544,
          47.09966
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "J  Frank Schmidt & Son Co ",
        "Address": "9500 SE 37th Ave, Boring, OR, 97009",
        "City": "Boring",
        "State": "OR",
        "Zip Code": "97009",
        "Country": "USA",
        "Phone": "503.663.4128",
        "Fax": "503.663.2121",
        "Email": "talk-to-us@jfschmidt.com",
        "Website": "http://www.jfschmidt.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants\nSeeds",
        "Latitude": "45.453286",
        "Longitude": "-122.62443",
        "Street": "SE 37th Ave",
        "County": "Clackamas County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.62443,
          45.453286
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "J&J Transplant Aquatic Nursery",
        "Address": "W4980 CR W, Wild Rose, WI, 54984",
        "City": "Wild Rose",
        "State": "WI",
        "Zip Code": "54984",
        "Country": "USA",
        "Contact": "Jim",
        "Phone": "715.256.0059",
        "Fax": "715.256.0039",
        "Email": "jjtransplant@yahoo.com",
        "Website": "www.jjtransplant.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "44.20045",
        "Longitude": "-89.132696",
        "Street": "County Rd W",
        "County": "Waushara County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.132696,
          44.20045
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "J.L. Hudson, Seedsman",
        "Address": "Box 337, La Honda, CA, 94020",
        "City": "La Honda",
        "State": "CA",
        "Zip Code": "94020",
        "Country": "USA",
        "Email": "inquiry@jlhudsonseeds.net",
        "Website": "http://www.jlhudsonseeds.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Seeds",
        "Latitude": "37.272556",
        "Longitude": "-122.249528",
        "County": "San Mateo County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.249528,
          37.272556
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "JD Irving Juniper Nursery",
        "Address": "201 SW Rd, Juniper, NB, E7L 4S7",
        "City": "Juniper",
        "State": "NB",
        "Zip Code": "E7L 4S7",
        "Country": "Canada",
        "Contact": "Mike Boyd",
        "Phone": "506.246.5268",
        "Fax": "506.246.8110",
        "Email": "ellis.candice@jdirving.com",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "0",
        "Longitude": "0"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          0,
          0
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "James Reneau Seed Company",
        "Address": "119 S Main, Shamrock, TX, 79079",
        "City": "Shamrock",
        "State": "TX",
        "Zip Code": "79079",
        "Country": "USA",
        "Contact": "James",
        "Phone": "806.256.3216",
        "Fax": "806.256.5335",
        "Email": "renseedtex@yahoo.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Seeds",
        "Latitude": "35.212939",
        "Longitude": "-100.249647",
        "Street": "S Main St",
        "County": "Wheeler County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -100.249647,
          35.212939
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Jane's Native Seeds",
        "Address": "1280 McDonald Rd, Lawrenceburg, KY, 40342",
        "City": "Lawrenceburg",
        "State": "KY",
        "Zip Code": "40342",
        "Country": "USA",
        "Phone": "502.750.1571",
        "Email": "jmharrod311@gmail.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nContract",
        "Product": "Seeds",
        "Latitude": "38.016187",
        "Longitude": "-84.985211",
        "Street": "McDonald Rd",
        "County": "Anderson County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.985211,
          38.016187
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Janzen's Specialty Nursery",
        "Address": "20555 SE Webfoot Rd, Dayton, OR, 97114",
        "City": "Dayton",
        "State": "OR",
        "Zip Code": "97114",
        "Country": "USA",
        "Contact": "Bob or Betty",
        "Phone": "503.868.7353",
        "Fax": "503.868.7353",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "45.110911",
        "Longitude": "-123.095374",
        "Street": "SE Webfoot Rd",
        "County": "Yamhill County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.095374,
          45.110911
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Jayker Wholesale Nursery Inc",
        "Address": "4042 W Chinden Blvd, Meridian, ID, 83642",
        "City": "Meridian",
        "State": "ID",
        "Zip Code": "83642",
        "Country": "USA",
        "Contact": "Carla Carter",
        "Phone": "208.887.1790",
        "Fax": "208.887.9330",
        "Email": "info@jayker.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "43.663089",
        "Longitude": "-116.443033",
        "Street": "W Chinden Blvd",
        "County": "Ada County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.443033,
          43.663089
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Jeff Anhorn Nursery",
        "Address": "6501 Calveras Rd, Sunol, CA, 94551",
        "City": "Sunol",
        "State": "CA",
        "Zip Code": "94551",
        "Country": "USA",
        "Contact": "Jeff Anhorn",
        "Phone": "510.719.0029",
        "Phone 2": "925.447.0858",
        "Product": "Plants",
        "Latitude": "37.531473",
        "Longitude": "-121.853265",
        "Street": "Calaveras Rd",
        "County": "Alameda County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.853265,
          37.531473
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Jiffy Group",
        "Address": "5401 Baumhart Rd Ste B, Lorain, OH, 44053",
        "City": "Lorain",
        "State": "OH",
        "Zip Code": "44053",
        "Country": "USA",
        "Contact": "Don Willis or Daniel Grincewicz",
        "Phone": "800.323.1047",
        "Fax": "440.282.2853",
        "Email": "don.willis@jiffygroup.com",
        "Email 2": "t.baker@jiffygroup.com",
        "Website": "http://www.jiffygroup.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Services",
        "Established": "1993",
        "Hours": "M-F 8-6 Eastern",
        "Latitude": "41.425689",
        "Longitude": "-82.276725",
        "Street": "Baumhart Rd",
        "County": "Lorain County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.276725,
          41.425689
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Jim Harrington Seeds with ForestLand Seeds",
        "Address": "119 East Brown Street, Nicholasville, KY, 40356",
        "City": "Nicholasville",
        "State": "KY",
        "Zip Code": "40356",
        "Country": "USA",
        "Contact": "Jim Harrington",
        "Phone": "607.244.0178",
        "Email": "seedtrader007@gmail.com",
        "Website": "http://www.forestlandseeds.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\n",
        "Product": "Seeds\n",
        "Latitude": "37.876067",
        "Longitude": "-84.571636",
        "Street": "E Brown St",
        "County": "Jessamine County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.571636,
          37.876067
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "John Deere Landscapes",
        "Address": "5610 McGinnis Ferry Rd, Alpharetta, GA, 30005",
        "City": "Alpharetta",
        "State": "GA",
        "Zip Code": "30005",
        "Country": "USA",
        "Contact": "Todd Dunlap",
        "Phone": "770.442.8881",
        "Fax": "770.442.3214",
        "Email": "tdunlap@johndeerelandscapes.com",
        "Website": "https://www.johndeerelandscapes.com/",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "34.090232",
        "Longitude": "-84.197145",
        "Street": "McGinnis Ferry Rd",
        "County": "Forsyth County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.197145,
          34.090232
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "John S  Ayton State Tree Nursery",
        "Address": "3424 Gallagher Rd, Preston, MD, 21665",
        "City": "Preston",
        "State": "MD",
        "Zip Code": "21665",
        "Country": "USA",
        "Contact": "Richard Garrett",
        "Phone": "800.873.3763",
        "Phone 2": "410.673.2467",
        "Fax": "410.673.7285",
        "Email": "richard.garrett@maryland.gov",
        "Website": "http://nursery.dnr.maryland.gov",
        "Nursery Type": "State",
        "Business Type": "Retail\nMail\nInternet",
        "Product": "Plants\nSeeds",
        "Latitude": "38.704028",
        "Longitude": "-75.878444",
        "Street": "Gallagher Rd",
        "County": "Caroline County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.878444,
          38.704028
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Johnny's Selected Seeds",
        "Address": "955 Benton Ave, Winslow, ME, 04901",
        "City": "Winslow",
        "State": "ME",
        "Zip Code": "04901",
        "Country": "USA",
        "Contact": "Kevin L Cook",
        "Phone": "207.861.3984",
        "Phone 2": "207.660.5868",
        "Email": "kcook@johnnyseeds.com",
        "Website": "http://www.johnnyseeds.com",
        "Nursery Type": "Private",
        "Business Type": "Retail\nMail",
        "Product": "Plants",
        "Latitude": "44.572955",
        "Longitude": "-69.59918",
        "Street": "Benton Ave",
        "County": "Kennebec County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -69.59918,
          44.572955
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Johnson's Nursery",
        "Address": "W180 N6275 Marcy Rd, Menomonee Falls, WI, 53051",
        "City": "Menomonee Falls",
        "State": "WI",
        "Zip Code": "53051",
        "Country": "USA",
        "Contact": "Vanessa Mueller",
        "Phone": "262.252.4988",
        "Fax": "262.252.4980",
        "Email": "info@johnsonsnursery.com",
        "Website": "http://www.johnsonsnursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "43.133756",
        "Longitude": "-88.134804",
        "Street": "Marcy Rd",
        "County": "Waukesha County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.134804,
          43.133756
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Johnston Nurseries",
        "Address": "4842 Chambersville Rd Box 100, Creekside, PA, 15732-9710",
        "City": "Creekside",
        "State": "PA",
        "Zip Code": "15732-9710",
        "Country": "USA",
        "Contact": "Dave Johnson",
        "Phone": "724.463.8456",
        "Fax": "724.465.5833",
        "Email": "seedlings@hotmail.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "40.695602",
        "Longitude": "-79.177895",
        "Street": "Chambersville Rd",
        "County": "Indiana County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.177895,
          40.695602
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Johnston Seed Company",
        "Address": "319 W Chestnut, Enid, OK, 73701",
        "City": "Enid",
        "State": "OK",
        "Zip Code": "73701",
        "Country": "USA",
        "Contact": "Jean McVay",
        "Phone": "580.233.5800",
        "Phone 2": "800.375.4613",
        "Fax": "580.249.5324",
        "Email": "johnseed@johnstonseed.com",
        "Website": "http://www.johnstonseed.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Seeds",
        "Latitude": "36.405078",
        "Longitude": "-97.881742",
        "Street": "W Chestnut Ave",
        "County": "Garfield County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.881742,
          36.405078
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Joshua's Native Plants & Garden Antiques",
        "Address": "502 W 18th St, Houston, TX, 77008",
        "City": "Houston",
        "State": "TX",
        "Zip Code": "77008",
        "Country": "USA",
        "Contact": "Joshua",
        "Phone": "713.862.7444",
        "Fax": "713.869.6911",
        "Email": "Joshua@joshuasnativeplants.com",
        "Website": "http://www.joshuasnativeplants.net/",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "29.801525",
        "Longitude": "-95.406227",
        "Street": "W 18th St",
        "County": "Harris County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.406227,
          29.801525
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Judd Creek Nursery",
        "Address": "20929 111th Ave SW, Vashon, WA, 98070",
        "City": "Vashon",
        "State": "WA",
        "Zip Code": "98070",
        "Country": "USA",
        "Contact": "John Brown",
        "Phone": "206.463.9641",
        "Fax": "206.463.9641",
        "Email": "jbrowne001@century.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "47.41683",
        "Longitude": "-122.478585",
        "Street": "111th Ave SW",
        "County": "King County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.478585,
          47.41683
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Julius Rosso Nursery Company",
        "Address": "12525 E Marginal Way S, Tukwila, WA, 98168 ",
        "City": "Tukwila",
        "State": "WA",
        "Zip Code": "98168",
        "Country": "USA",
        "Contact": "Gene Rosso",
        "Phone": "206.763.1888",
        "Phone 2": "800.832.1888",
        "Fax": "206.762.2544",
        "Email": "rossogardens@gmail.com",
        "Website": "http://www.rossogardens.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail\nInternet",
        "Product": "Plants",
        "Latitude": "47.490712",
        "Longitude": "-122.285129",
        "Street": "E Marginal Way S",
        "County": "King County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.285129,
          47.490712
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "K&C Silviculture Farms Ltd",
        "Address": "33664 Hwy 97, Oliver, BC, V0H 1T0",
        "City": "Oliver",
        "State": "BC",
        "Zip Code": "V0H 1T0",
        "Country": "Canada",
        "Contact": "Brad Powell",
        "Phone": "403.347.3002",
        "Fax": "403.347.3899",
        "Email": "brad@silviculture.com",
        "Email 2": "mail@silviculture.com",
        "Website": "http://www.silviculture.com",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "27.94776",
        "Longitude": "-82.458444",
        "County": "Hillsborough County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.458444,
          27.94776
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "K&C Silviculture Farms Ltd",
        "Address": "33664 Hwy 97, Oliver, BC, V0H 1T0",
        "City": "Oliver",
        "State": "BC",
        "Zip Code": "V0H 1T0",
        "Country": "Canada",
        "Contact": "Robin Dawes",
        "Phone": "250.498.4974",
        "Fax": "250.498.2133",
        "Email": "robin@silviculture.com",
        "Email 2": "mail@silviculture.com",
        "Website": "http://www.silviculture.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "27.94776",
        "Longitude": "-82.458444",
        "County": "Hillsborough County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.458444,
          27.94776
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Kansas Forest Service",
        "Address": "2610 Claflin Rd, Manhattan, KS, 66502",
        "City": "Manhattan",
        "State": "KS",
        "Zip Code": "66502",
        "Country": "USA",
        "Contact": "Mark Haller",
        "Phone": "785.532.3300",
        "Fax": "785.532.3305",
        "Email": "mhaller@ksu.edu",
        "Website": "http://www.kansasforests.org/",
        "Nursery Type": "State",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "39.193425",
        "Longitude": "-96.601371",
        "Street": "Claflin Rd",
        "County": "Riley County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.601371,
          39.193425
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Kapoho Kai Nursery",
        "Address": "RR2 Box 4024, Pahoa, HI, 96778",
        "City": "Pahoa",
        "State": "HI",
        "Zip Code": "96778",
        "Country": "USA",
        "Contact": "Jan Anderson",
        "Phone": "808.965.8839",
        "Fax": "808.965.9696",
        "Email": "tidepool@hawaiiantel.net",
        "Website": "http://kapohokainursery.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "19.390023",
        "Longitude": "-155.152268",
        "County": "Hawaii County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -155.152268,
          19.390023
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Karma's Forest Wholesale Nursery and Organic Gardens",
        "Address": "23223 Hwy 36, Cheshire, OR, 97419",
        "City": "Cheshire",
        "State": "OR",
        "Zip Code": "97419",
        "Country": "USA",
        "Contact": "Lisa",
        "Phone": "541.998.2436",
        "Fax": "541.998.3437",
        "Email": "karmasforest@yahoo.com",
        "Website": "http://www.karmasforest.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nContract",
        "Product": "Plants",
        "Latitude": "44.161014",
        "Longitude": "-123.427125",
        "Street": "Hwy 36",
        "County": "Lane County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.427125,
          44.161014
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Kaste Seed GCP Inc",
        "Address": "11779 410 St SE, Fertile, MN, 56540",
        "City": "Fertile",
        "State": "MN",
        "Zip Code": "56540",
        "Country": "USA",
        "Contact": "Garth Kaste or Kristen Larson",
        "Phone": "218.945.6738",
        "Fax": "218.945.6303",
        "Email": "garth@kasteseed.com or info@kasteseed.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Seeds",
        "Established": "1979",
        "Hours": "M-F 8-5",
        "Latitude": "47.571401",
        "Longitude": "-96.220556",
        "Street": "410th St SE",
        "County": "Polk County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.220556,
          47.571401
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Kauai Nursery and Landscaping Inc",
        "Address": "3-1550 Kaumualii Hwy, Lihue, HI, 96766",
        "City": "Lihue",
        "State": "HI",
        "Zip Code": "96766",
        "Country": "USA",
        "Contact": "Lelan Nishek",
        "Phone": "808.245.7747",
        "Fax": "808.245.9289",
        "Email": "knl@kauainursery.com",
        "Website": "http://kauainursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "21.963018",
        "Longitude": "-159.40389",
        "Street": "Kaumualii Hwy",
        "County": "Kauai County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -159.40389,
          21.963018
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Keefer Ecological Services Ltd",
        "Address": "3816 Highland Rd, Cranbrook, BC, V1C 6X7",
        "City": "Cranbrook",
        "State": "BC",
        "Zip Code": "V1C 6X7",
        "Country": "Canada",
        "Contact": "Michael Keefer",
        "Phone": "250.489.4140",
        "Fax": "250.489.4142",
        "Email": "info@keefereco.com",
        "Website": "http://www.keefereco.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "39.158873",
        "Longitude": "-85.993199",
        "County": "Bartholomew County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.993199,
          39.158873
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Kelly Green Trees Inc",
        "Address": "14399 N Wentz Rd, Marana, AZ, 85653",
        "City": "Marana",
        "State": "AZ",
        "Zip Code": "85653",
        "Country": "USA",
        "Contact": "Angel Murrieta",
        "Phone": "520.682.2616",
        "Fax": "520.682.3579",
        "Email": "kellygreentrees@theriver.com",
        "Website": "http://kellygreentrees.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "32.465909",
        "Longitude": "-111.256131",
        "Street": "N Wentz Rd",
        "County": "Pima County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.256131,
          32.465909
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Kelly Nursery LLC",
        "Address": "1158 Manchester St, Lexington, KY, 40508",
        "City": "Lexington",
        "State": "KY",
        "Zip Code": "40508",
        "Country": "USA",
        "Phone": "859.333.3794",
        "Email": "kellynursery@mindspring.com",
        "Website": "http://kellynurseryllc.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "38.055141",
        "Longitude": "-84.516459",
        "Street": "Manchester St",
        "County": "Fayette County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.516459,
          38.055141
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Kenaitze Greenhouse and Gardens",
        "Address": "255 N Ames, Kenai, AK, 99611",
        "City": "Kenai",
        "State": "AK",
        "Zip Code": "99611",
        "Country": "USA",
        "Phone": "907.283.3052",
        "Fax": "907.283.3052",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "60.557268",
        "Longitude": "-151.143749",
        "Street": "Ames Rd",
        "County": "Kenai Peninsula Borough"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -151.143749,
          60.557268
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Kendrick Forest Farm",
        "Address": "1450 Round Prairie Creek, Wilderville, OR, 97543",
        "City": "Wilderville",
        "State": "OR",
        "Zip Code": "97543",
        "Country": "USA",
        "Phone": "541.474.0217",
        "Fax": "541.474.0217",
        "Email": "kendrickforestfarm@earthlink.net",
        "Website": "http://www.kendrickforestfarm.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "42.385432",
        "Longitude": "-123.501645",
        "Street": "Round Prairie Creek Rd",
        "County": "Josephine County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.501645,
          42.385432
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Kentucky Division of Forestry - John P Rhody Nursery",
        "Address": "515 John P Rhody Ln, Gilbertsville, KY, 42044",
        "City": "Gilbertsville",
        "State": "KY",
        "Zip Code": "42044",
        "Country": "USA",
        "Contact": "Joanna Davidson",
        "Phone": "270.362.8331",
        "Fax": "270.362.7512",
        "Email": "joanna.davidson@ky.gov",
        "Website": "http://forestry.ky.gov/",
        "Nursery Type": "State",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "36.965547",
        "Longitude": "-88.266684",
        "County": "Marshall County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.266684,
          36.965547
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Kentucky Division of Forestry - Morgan County Nursery",
        "Address": "326 Tree Nursery Rd, West Liberty, KY, 41472",
        "City": "West Liberty",
        "State": "KY",
        "Zip Code": "41472",
        "Country": "USA",
        "Contact": "Jason Powell",
        "Phone": "606.743.3511",
        "Fax": "606.743.1999",
        "Email": "jason.powell@ky.gov",
        "Website": "http://forestry.ky.gov/",
        "Nursery Type": "State",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "37.916741",
        "Longitude": "-83.333196",
        "Street": "Tree Nursery Rd",
        "County": "Morgan County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.333196,
          37.916741
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Kettle Moraine Natural Landscaping",
        "Address": "W 996 Birchwood Dr, Campbellsport, WI, 53010",
        "City": "Campbellsport",
        "State": "WI",
        "Zip Code": "53010",
        "Country": "USA",
        "Contact": "Connie Ramthun",
        "Phone": "920.533.8939",
        "Email": "brchwood@thesurf.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail",
        "Product": "Seeds",
        "Latitude": "43.648543",
        "Longitude": "-88.204876",
        "Street": "Birchwood Dr",
        "County": "Fond Du Lac County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.204876,
          43.648543
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "King Estate DBA | Lorane Grape Vines",
        "Address": "80854 Territorial Rd, Eugene, OR, 97405",
        "City": "Eugene",
        "State": "OR",
        "Zip Code": "97405",
        "Country": "USA",
        "Contact": "Meliton Martinez",
        "Phone": "541.942.9874",
        "Phone 2": "800.884.4441",
        "Fax": "541.942.9867",
        "Email": "info@kingestate.com",
        "Website": "https://www.kingestate.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "43.861027",
        "Longitude": "-123.250755",
        "Street": "Territorial Hwy",
        "County": "Lane County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.250755,
          43.861027
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "King Nursery",
        "Address": "6128 E Sandwich Rd, Big Rock, IL, 60511",
        "City": "Big Rock",
        "State": "IL",
        "Zip Code": "60511",
        "Country": "USA",
        "Contact": "Jim King",
        "Phone": "630.554.1171",
        "Email": "jk@surfwizard.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "41.723165",
        "Longitude": "-88.611517",
        "Street": "E Sandwich Rd",
        "County": "Dekalb County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.611517,
          41.723165
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Kingfisher Farm",
        "Address": "29633 170th Ave, Long Grove, IA, 52756",
        "City": "Long Grove",
        "State": "IA",
        "Zip Code": "52756",
        "Country": "USA",
        "Contact": "Joe Slater",
        "Phone": "563.285.5406",
        "Email": "kingfshr@netins.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants\nSeeds",
        "Latitude": "41.738359",
        "Longitude": "-90.56243",
        "Street": "170th Ave",
        "County": "Scott County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.56243,
          41.738359
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Kintigh Nursery",
        "Address": "38865 E Cedar Flat Rd, Springfield, OR, 97478",
        "City": "Springfield",
        "State": "OR",
        "Zip Code": "97478",
        "Country": "USA",
        "Contact": "Dakota or Dan Kintigh",
        "Phone": "541.746.1842",
        "Fax": "541.746.1842",
        "Email": "kintighnursery@gmail.com",
        "Website": "http://www.kintighs.com",
        "Nursery Type": "Forest Industry",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Hours": "M-F 7:30-4",
        "Latitude": "44.045781",
        "Longitude": "-122.826271",
        "Street": "E Cedar Flat Rd",
        "County": "Lane County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.826271,
          44.045781
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Klamath Forest Nursery",
        "Address": "7680 Happy Hollow Ln, Bonanza, OR, 97623",
        "City": "Bonanza",
        "State": "OR",
        "Zip Code": "97623",
        "Country": "USA",
        "Contact": "Jeff Dixon",
        "Phone": "541.545.6432",
        "Fax": "541.545.6886",
        "Email": "jdixon@jw-tr.com",
        "Nursery Type": "Forest Industry",
        "Product": "Plants",
        "Latitude": "42.293113",
        "Longitude": "-121.452732",
        "Street": "Happy Hollow Ln",
        "County": "Klamath County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.452732,
          42.293113
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Klamath-Siskiyou Native Seeds",
        "Address": "17607 Elliott Creek Rd , Jacksonville, OR, 97530",
        "City": "Jacksonville",
        "State": "OR",
        "Zip Code": "97530",
        "Country": "USA",
        "Contact": "Suzie Savoie",
        "Email": "klamathsiskiyou@gmail.com",
        "Website": "http://www.klamathsiskiyouseeds.com",
        "Nursery Type": "Private",
        "Product": "Seeds",
        "Latitude": "42.000331",
        "Longitude": "-123.12942",
        "Street": "Elliot Creek Rd"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.12942,
          42.000331
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Knecht's Nurseries",
        "Address": "1601 Hwy 19 W, Northfield, MN, 55057",
        "City": "Northfield",
        "State": "MN",
        "Zip Code": "55057",
        "Country": "USA",
        "Contact": "Leif or Deb Knecht",
        "Phone": "507.645.5015",
        "Phone 2": "800.924.5015",
        "Fax": "507.645.5518",
        "Email": "leif@knechts.net",
        "Email 2": "info@knechts.net",
        "Website": "http://knechts.net/",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "44.455982",
        "Longitude": "-93.185952",
        "Street": "Highway 19 W",
        "County": "Rice County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.185952,
          44.455982
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Kobe Nurseries",
        "Address": "60315 CR 653, Paw Paw, MI, 49079",
        "City": "Paw Paw",
        "State": "MI",
        "Zip Code": "49079",
        "Country": "USA",
        "Contact": "Paul Kobe",
        "Phone": "269.657.3094",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Seeds",
        "Latitude": "42.197797",
        "Longitude": "-85.861849",
        "Street": "County Rd 653",
        "County": "Van Buren County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.861849,
          42.197797
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Kollar Nursery",
        "Address": "5200 W Heaps Rd, Pylesville, MD, 21132",
        "City": "Pylesville",
        "State": "MD",
        "Zip Code": "21132",
        "Country": "USA",
        "Phone": "410.836.0500",
        "Email": "stan@kollarnursery.com",
        "Email 2": "kollars@earthlink.net",
        "Website": "www.kollarnursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail\nInternet\nContract",
        "Product": "Plants\nSeeds\nServices",
        "Established": "1985",
        "Hours": "M 9-7, Tu 9-7, W by appt, Th 9-7, F 9-5, Sa 9-5, Su please call",
        "Latitude": "39.709584",
        "Longitude": "-76.480821",
        "Street": "W Heaps Rd",
        "County": "Harford County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.480821,
          39.709584
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Krueger's Northwoods Nursery",
        "Address": "3682 Limberlost Rd, Rhinelander, WI, 54501",
        "City": "Rhinelander",
        "State": "WI",
        "Zip Code": "54501",
        "Country": "USA",
        "Phone": "715.369.3959",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "45.64453",
        "Longitude": "-89.302153",
        "Street": "S Limberlost Rd",
        "County": "Oneida County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.302153,
          45.64453
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Krueger's Tree Farms",
        "Address": "21001 NW Dairy Creek Rd, North Plains, OR, 97133",
        "City": "North Plains",
        "State": "OR",
        "Zip Code": "97133",
        "Country": "USA",
        "Phone": "503.647.1000",
        "Email": "sales@kruegertree.com",
        "Website": "http://www.kruegertree.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "45.671231",
        "Longitude": "-123.062743",
        "Street": "NW Dairy Creek Rd",
        "County": "Washington County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.062743,
          45.671231
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Kwizda North America",
        "Address": "7778 North Bank Road , Roseburg, OR, 97470",
        "City": "Roseburg",
        "State": "OR",
        "Zip Code": "97470",
        "Country": "USA",
        "Contact": "Mark Boardman",
        "Phone": "406.880.1979",
        "Email": "m.boardman@kwizda.com",
        "Website": "https://trico-repellent.com/en_US",
        "Latitude": "43.29876",
        "Longitude": "-123.253167",
        "Street": "N Bank Rd",
        "County": "Douglas County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.253167,
          43.29876
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "L&H Seeds Inc",
        "Address": "3930 Moon Rd, Connell, WA, 99326",
        "City": "Connell",
        "State": "WA",
        "Zip Code": "99326",
        "Country": "USA",
        "Contact": "Damon Winter",
        "Phone": "509.234.4433",
        "Fax": "509.234.0202",
        "Email": "info@lhseeds.com",
        "Website": "http://www.lhseeds.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Seeds",
        "Latitude": "46.720809",
        "Longitude": "-118.898074",
        "Street": "Moon Rd",
        "County": "Franklin County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.898074,
          46.720809
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "LA Moran Reforestation Center",
        "Address": "5800 Chiles Rd, Davis, CA, 95618",
        "City": "Davis",
        "State": "CA",
        "Zip Code": "95618",
        "Country": "USA",
        "Contact": "Jimi Scheid",
        "Phone": "530.753.2441",
        "Email": "james.scheid@fire.ca.gov",
        "Website": "https://www.fire.ca.gov/programs/resource-management/resource-protection-improvement/wildfire-resilience/reforestation-center/",
        "Nursery Type": "State",
        "Product": "Seeds",
        "Latitude": "38.555269",
        "Longitude": "-121.680738",
        "Street": "Chiles Rd",
        "County": "Yolo County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.680738,
          38.555269
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "LE Cooke Co",
        "Address": "26333 Rd 140, Visalia, CA, 93292",
        "City": "Visalia",
        "State": "CA",
        "Zip Code": "93292",
        "Country": "USA",
        "Contact": "Ron Ludekens",
        "Email": "sales@lecooke.com",
        "Website": "http://www.lecooke.com/cms/",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "36.270233",
        "Longitude": "-119.261319",
        "Street": "Rd 140",
        "County": "Tulare County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.261319,
          36.270233
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Lafayette Home Nursery Inc",
        "Address": "1 Nursery Ln, Lafayette, IL, 61449",
        "City": "Lafayette",
        "State": "IL",
        "Zip Code": "61449",
        "Country": "USA",
        "Contact": "David Lahr or Colleen Stevens",
        "Phone": "309.995.3311",
        "Fax": "309.995.3909",
        "Email": "lafayettehomenursery@winco.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Seeds",
        "Latitude": "41.109823",
        "Longitude": "-89.97363",
        "County": "Stark County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.97363,
          41.109823
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Lake Superior Tree Farms",
        "Address": "39425 Hwy US 41, Chassell, MI, 49916",
        "City": "Chassell",
        "State": "MI",
        "Zip Code": "49916",
        "Country": "USA",
        "Contact": "Stephanie or Bob",
        "Phone": "906.523.6200",
        "Fax": "906.523.6300",
        "Email": "lstreefarm@gmail.com",
        "Website": "http://lakesuperiortreefarms.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "46.986849",
        "Longitude": "-88.471747",
        "Street": "US Hwy 41",
        "County": "Houghton County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.471747,
          46.986849
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Lakeshore Garden Centre",
        "Address": "Box 92 RR3, Saskatoon, SK, S7K 3J6",
        "City": "Saskatoon",
        "State": "SK",
        "Zip Code": "S7K 3J6",
        "Country": "Canada",
        "Contact": "Vic",
        "Phone": "306.382.2077",
        "Phone 2": "306.477.0713",
        "Fax": "306.382.6433",
        "Email": "vic@lakeshoregardencentre.com",
        "Email 2": "office@lakeshoregardencentre.com",
        "Website": "http://lakeshoregardencentre.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail",
        "Product": "Plants",
        "Latitude": "0",
        "Longitude": "0"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          0,
          0
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Lakeshore Tree Farms Ltd",
        "Address": "960 Valley Rd, Saskatoon, SK, S7K 3J6",
        "City": "Saskatoon",
        "State": "SK",
        "Zip Code": "S7K 3J6",
        "Country": "Canada",
        "Contact": "Aaron Krahn",
        "Phone": "306.978.3333",
        "Phone 2": "306.220.7407",
        "Fax": "306.382.6433",
        "Email": "aaron@lshore.com",
        "Website": "http://www.lakeshoretreefarms.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Established": "1936",
        "Hours": "M-F 8-4:30",
        "Latitude": "32.81874",
        "Longitude": "-85.17939",
        "County": "Chambers County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.17939,
          32.81874
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Land Life Company",
        "Address": "1201 J Street, #218,, Sacramento, CA, 95814",
        "City": "#218",
        "State": "CA",
        "Zip Code": "95814",
        "Country": "USA",
        "Contact": "Zoe Hall",
        "Phone": "207.747.9238",
        "Phone 2": "916.471.8935",
        "Email": "z.hall@landlifecompany.com",
        "Website": "https://landlifecompany.com/",
        "Latitude": "38.579851",
        "Longitude": "-121.490412",
        "Street": "J St",
        "County": "Sacramento County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.490412,
          38.579851
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Landmark Seed Company | Sun Mountain Native Seed",
        "Address": "522 W Riverside Ave Ste 430, Spokane, WA, 99201",
        "City": "Spokane",
        "State": "WA",
        "Zip Code": "99201",
        "Country": "USA",
        "Contact": "Orlin Reinbold, or RJ",
        "Phone": "800.268.0180",
        "Fax": "509.835.4969",
        "Email": "orlin@nativeseed.us or mark@landmarkseed.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Seeds",
        "Latitude": "47.658166",
        "Longitude": "-117.4206",
        "Street": "W Riverside Ave",
        "County": "Spokane County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.4206,
          47.658166
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Landscape Alaska",
        "Address": "11029 Mendenhall Loop Rd, Juneau, AK, 99801",
        "City": "Juneau",
        "State": "AK",
        "Zip Code": "99801",
        "Country": "USA",
        "Contact": "David Lendrum",
        "Phone": "907.790.4916",
        "Email": "landscapealaska@gmail.com",
        "Email 2": "contact@landscapealaska.com",
        "Website": "http://landscapealaska.com",
        "Nursery Type": "Private",
        "Product": "Plants\nSeeds",
        "Latitude": "58.392678",
        "Longitude": "-134.614764",
        "Street": "Mendenhall Loop Rd",
        "County": "Juneau City And Borough"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -134.614764,
          58.392678
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Landscape Alternatives",
        "Address": "25316 Saint Croix Trl, Shafer, MN, 55074-9609",
        "City": "Shafer",
        "State": "MN",
        "Zip Code": "55074-9609",
        "Country": "USA",
        "Contact": "Karl Ruser",
        "Phone": "651.257.4460",
        "Fax": "651.257.4499",
        "Email": "landscapealt@frontiernet.net",
        "Website": "http://www.landscapealternatives.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Established": "1986",
        "Hours": "M-Sat 9-6, Sun 12-6 April-Oct",
        "Latitude": "45.314254",
        "Longitude": "-92.743426",
        "Street": "St Croix Trl",
        "County": "Chisago County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -92.743426,
          45.314254
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Larner Seeds",
        "Address": "235 Grove Rd, Bolinas, CA, 94924",
        "City": "Bolinas",
        "State": "CA",
        "Zip Code": "94924",
        "Country": "USA",
        "Contact": "Judith Larner Lowry",
        "Phone": "415.868.9407",
        "Fax": "415.868.2592",
        "Email": "info@larnerseeds.com",
        "Website": "http://www.larnerseeds.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Seeds",
        "Latitude": "37.901831",
        "Longitude": "-122.700915",
        "Street": "Grove Rd",
        "County": "Marin County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.700915,
          37.901831
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Las Pilitas Nursery - Santa Margarita",
        "Address": "3232 Las Pilitas Rd, Santa Margarita, CA, 93453",
        "City": "Santa Margarita",
        "State": "CA",
        "Zip Code": "93453",
        "Country": "USA",
        "Contact": "Penny",
        "Phone": "805.438.5992",
        "Fax": "805.438.5992",
        "Email": "penny@laspilitas.com",
        "Website": "http://www.laspilitas.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail",
        "Product": "Plants",
        "Latitude": "35.372154",
        "Longitude": "-120.449663",
        "Street": "Las Pilitas Rd",
        "County": "San Luis Obispo County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.449663,
          35.372154
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Las Vegas State Tree Nursery",
        "Address": "9600 Tule Springs Rd , Las Vegas, NV, 89131",
        "City": "Las Vegas",
        "State": "NV",
        "Zip Code": "89131",
        "Country": "USA",
        "Contact": "Amy Dunn",
        "Phone": "702.486.5411",
        "Fax": "702.486.5449",
        "Email": "lasvegasnursery@forestry.nv.gov",
        "Website": "http://forestry.nv.gov/ndf-state-forest-nurseries/las-vegas-state-tree-nursery/",
        "Nursery Type": "State",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "36.32703",
        "Longitude": "-115.262669",
        "Street": "Tule Springs Rd",
        "County": "Clark County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -115.262669,
          36.32703
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Laura's Lane Nursery",
        "Address": "6581 Laura's Ln, Plainfield, WI, 54966",
        "City": "Plainfield",
        "State": "WI",
        "Zip Code": "54966",
        "Country": "USA",
        "Phone": "715.366.2477",
        "Fax": "715.366.8201",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "44.25425",
        "Longitude": "-89.458281",
        "Street": "Laura's Ln",
        "County": "Portage County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.458281,
          44.25425
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Lauren's Garden Service and Native Plant Nursery",
        "Address": "13554 Triadelphia Road, Ellicott City, MD, 21042",
        "City": "Ellicott City",
        "State": "MD",
        "Zip Code": "21042",
        "Country": "USA",
        "Contact": "Lauren Turner",
        "Phone": "410.461.2535",
        "Email": "laurensgardens@gmail.com",
        "Website": "https://www.laurensgardenservice.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nInternet",
        "Product": "Plants\nServices",
        "Hours": "Monday - Saturday 10AM - 5PM Sundays 11AM - 4PM",
        "Latitude": "39.264383",
        "Longitude": "-76.984133",
        "Street": "Triadelphia Rd",
        "County": "Howard County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.984133,
          39.264383
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Lava Nursery Inc",
        "Address": "5301 Culbertson Dr, Parkdale, OR, 97041",
        "City": "Parkdale",
        "State": "OR",
        "Zip Code": "97041",
        "Country": "USA",
        "Phone": "541.352.7303",
        "Fax": "541.352.7325",
        "Email": "lavanursery@aol.com",
        "Website": "http://www.forestseedlings.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "45.502166",
        "Longitude": "-121.60961",
        "Street": "Culbertson Dr",
        "County": "Hood River County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.60961,
          45.502166
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Lawrence Mountain Nurseries",
        "Address": "24 E Ridge Rd, Mars Hill, ME, 04758",
        "City": "Mars Hill",
        "State": "ME",
        "Zip Code": "04758",
        "Country": "USA",
        "Contact": "Dean",
        "Phone": "207.429.9786",
        "Fax": "207.429.9786",
        "Email": "marshill1@aol.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "46.530485",
        "Longitude": "-67.864247",
        "Street": "E Ridge Rd",
        "County": "Aroostook County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -67.864247,
          46.530485
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Legacy Land Conservancy",
        "Address": "PO Box 2372, Albany, OR, 97321",
        "City": "Albany",
        "State": "OR",
        "Zip Code": "97321",
        "Country": "USA",
        "Contact": "Tim Acker",
        "Phone": "503.871.5472",
        "Email": "atwetlands@comcast.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail",
        "Product": "Plants",
        "Established": "1996",
        "Hours": "M-F 8-6, Sat-Sun by appt",
        "Latitude": "44.65345",
        "Longitude": "-123.139526",
        "County": "Benton County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.139526,
          44.65345
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Lewis River Nursery  Inc",
        "Address": "2821 NE 434th St, Woodland, WA, 98674",
        "City": "Woodland",
        "State": "WA",
        "Zip Code": "98674",
        "Country": "USA",
        "Contact": "Jean Kysar",
        "Phone": "360.225.6455",
        "Email": "skysar1331@gmail.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "45.933424",
        "Longitude": "-122.642941",
        "Street": "NE 434th St",
        "County": "Clark County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.642941,
          45.933424
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Lewis River Reforestation Inc",
        "Address": "1203 NW Hayes Rd, Woodland, WA, 98674",
        "City": "Woodland",
        "State": "WA",
        "Zip Code": "98674",
        "Country": "USA",
        "Contact": "Robert Moore",
        "Phone": "360.225.6357",
        "Fax": "360.225.1307",
        "Email": "bobm@lrrinc.com",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "45.929258",
        "Longitude": "-122.6863",
        "Street": "NW Hayes Rd",
        "County": "Clark County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.6863,
          45.929258
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Lilypons Water Gardens",
        "Address": "6800 Lily Pons Rd, Adamstown, MD, 21717-0010",
        "City": "Adamstown",
        "State": "MD",
        "Zip Code": "21717-0010",
        "Country": "USA",
        "Contact": "Jon Sander",
        "Phone": "800.999.5459",
        "Fax": "800.879.5459",
        "Email": "info@lilypons.com",
        "Website": "http://www.lilypons.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Established": "1917",
        "Hours": "M-Sun 9:30-5:30",
        "Latitude": "39.295415",
        "Longitude": "-77.431358",
        "Street": "Lily Pons Rd",
        "County": "Frederick County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.431358,
          39.295415
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Lincoln-Oakes Nurseries",
        "Address": "3310 University Dr, Bismarck, ND, 58502",
        "City": "Bismarck",
        "State": "ND",
        "Zip Code": "58502",
        "Country": "USA",
        "Contact": "Bill Elhard",
        "Phone": "701.223.8575",
        "Fax": "701.223.1291",
        "Email": "lincolnoakes@btinet.net",
        "Website": "http://www.lincolnoakes.com/stock/pc/home.asp",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "46.766564",
        "Longitude": "-100.763783",
        "Street": "University Dr",
        "County": "Burleigh County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -100.763783,
          46.766564
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Liner Farm Inc",
        "Address": "PO Box 701369, St Cloud, FL, 34770-1369",
        "City": "St Cloud",
        "State": "FL",
        "Zip Code": "34770-1369",
        "Country": "USA",
        "Contact": "David Biggar",
        "Phone": "800.330.1484",
        "Phone 2": "407.892.0038",
        "Fax": "407.892.3593",
        "Email": "linerfarminc@aol.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "27.995287",
        "Longitude": "-81.259332",
        "County": "Osceola County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.259332,
          27.995287
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Linnaea Nurseries Ltd",
        "Address": "3666 224 St, Langley, BC, V2Z 2G7",
        "City": "Langley",
        "State": "BC",
        "Zip Code": "V2Z 2G7",
        "Country": "Canada",
        "Contact": "John Folkerts",
        "Phone": "604.533.8281",
        "Fax": "604.533.8246",
        "Email": "john@linnaeanurseries.com",
        "Website": "http://www.linnaeanurseries.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants\nSeeds",
        "Established": "1997",
        "Hours": "8-4:30",
        "Latitude": "0",
        "Longitude": "0"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          0,
          0
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Little Tree Farm",
        "Address": "175 Sarty Road , New Germany, NS, B0R1E0",
        "City": "New Germany",
        "State": "NS",
        "Zip Code": "B0R1E0",
        "Country": "Canada",
        "Contact": "Michael Quill",
        "Phone": "902.717.0003",
        "Email": "info@littletreefarmns.com",
        "Website": "https://littletreefarmns.com",
        "Latitude": "0",
        "Longitude": "0"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          0,
          0
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Lodholz North Star Acres Inc",
        "Address": "420 Hwy A, Tomahawk, WI, 54487",
        "City": "Tomahawk",
        "State": "WI",
        "Zip Code": "54487",
        "Country": "USA",
        "Contact": "Rich",
        "Phone": "800.713.9077",
        "Phone 2": "715.453.2976",
        "Fax": "715.453.8918",
        "Email": "info@lodholznursery.com or lodholznsa@frontier.com",
        "Website": "http://stores.lodholznursery.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "45.337814",
        "Longitude": "-89.765239",
        "County": "Lincoln County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.765239,
          45.337814
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Lodi Farms Nursery",
        "Address": "2880 S Wagner Rd, Ann Arbor, MI, 48103",
        "City": "Ann Arbor",
        "State": "MI",
        "Zip Code": "48103",
        "Country": "USA",
        "Contact": "Dan Riddle",
        "Phone": "734.665.5651",
        "Fax": "734.665.6393",
        "Email": "jane@lodifarms.com",
        "Website": "http://lodifarms.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "42.243959",
        "Longitude": "-83.798658",
        "Street": "S Wagner Rd",
        "County": "Washtenaw County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.798658,
          42.243959
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Lone Elder Nursery",
        "Address": "8051 S Lone Elder Rd, Canby, OR, 97013",
        "City": "Canby",
        "State": "OR",
        "Zip Code": "97013",
        "Country": "USA",
        "Phone": "503.266.9251",
        "Fax": "503.266.6309",
        "Email": "loneelder@canby.com",
        "Website": "http://www.loneelder.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "45.231427",
        "Longitude": "-122.701034",
        "Street": "S Lone Elder Rd",
        "County": "Clackamas County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.701034,
          45.231427
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Lonewolf Native Plants and Herb Farm",
        "Address": "Box 2245, Battleford, SK, S0M 0E0",
        "City": "Battleford",
        "State": "SK",
        "Zip Code": "S0M 0E0",
        "Country": "Canada",
        "Contact": "Wanda",
        "Phone": "306.937.2192",
        "Fax": "306.937.2270",
        "Email": "lonewolf@sasktel.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail",
        "Product": "Plants",
        "Latitude": "0",
        "Longitude": "0"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          0,
          0
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Long Island Native Plant Initiative",
        "Address": "PO Box 1279, Hampton Bays, NY, 11946",
        "City": "Hampton Bays",
        "State": "NY",
        "Zip Code": "11946",
        "Country": "USA",
        "Contact": "Polly Weigand",
        "Phone": "631.260.1513",
        "Email": "info@LINPI.org",
        "Website": "http://www.linpi.org/",
        "Nursery Type": "State",
        "Business Type": "Retail",
        "Product": "Plants\nSeeds",
        "Latitude": "40.894655",
        "Longitude": "-72.503863",
        "Street": "Hampton Pl",
        "County": "Suffolk County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.503863,
          40.894655
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Longfellow's Garden Center",
        "Address": "12007 Lookout Trl, Centertown, MO, 65023",
        "City": "Centertown",
        "State": "MO",
        "Zip Code": "65023",
        "Country": "USA",
        "Contact": "Alice Longfellow",
        "Phone": "573.584.9611",
        "Fax": "573.584.9613",
        "Email": "coolpansies@longfellowsgarden.com",
        "Email 2": "info@longfellowsgarden.com",
        "Website": "http://www.longfellowsgarden.com",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "38.617887",
        "Longitude": "-92.415464",
        "Street": "Lookout Trl",
        "County": "Cole County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -92.415464,
          38.617887
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Louisiana Dept of Agriculture & Forestry",
        "Address": "5825 Florida Blvd, Baton Rouge, LA, 70806",
        "City": "Baton Rouge",
        "State": "LA",
        "Zip Code": "70806",
        "Country": "USA",
        "Contact": "Wade Dubea",
        "Phone": "225.925.4515",
        "Fax": "225.922.1356",
        "Website": "http://www.ldaf.state.la.us",
        "Nursery Type": "State",
        "Business Type": "Wholesale",
        "Product": "Seeds",
        "Latitude": "30.452429",
        "Longitude": "-91.130209",
        "Street": "Florida Blvd",
        "County": "East Baton Rouge Parish"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -91.130209,
          30.452429
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Louisiana Forest Seed Company",
        "Address": "303 Forestry Rd, Lecompte, LA, 71346",
        "City": "Lecompte",
        "State": "LA",
        "Zip Code": "71346",
        "Country": "USA",
        "Contact": "Gary Delaney",
        "Phone": "318.443.5026",
        "Email": "info@lfsco.com",
        "Website": "http://www.lfsco.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Seeds",
        "Latitude": "31.134447",
        "Longitude": "-92.458399",
        "Street": "Forestry Rd",
        "County": "Rapides Parish"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -92.458399,
          31.134447
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Louisiana Growers",
        "Address": "63279 Lowery Rd, Amite, LA, 70422",
        "City": "Amite",
        "State": "LA",
        "Zip Code": "70422",
        "Country": "USA",
        "Contact": "Rick Webb",
        "Phone": "985.747.0510",
        "Email": "rick@lanativeplants.com",
        "Email 2": "rwebb@i.55.com",
        "Website": "http://lanativeplants.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "30.773619",
        "Longitude": "-90.356671",
        "Street": "Lowery Rd",
        "County": "Tangipahoa Parish"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.356671,
          30.773619
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Lovelace Seeds Inc",
        "Address": "1187 Brownsmill Rd, Elsberry, MO, 63343",
        "City": "Elsberry",
        "State": "MO",
        "Zip Code": "63343",
        "Country": "USA",
        "Contact": "Judy Lovelace",
        "Phone": "573.898.2103",
        "Fax": "573.898.2855",
        "Email": "judy.lovelace@sbcglobal.net",
        "Website": "http://www.lovelaceseeds.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Seeds",
        "Latitude": "39.161896",
        "Longitude": "-90.808729",
        "Street": "Brownsmill Rd",
        "County": "Lincoln County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.808729,
          39.161896
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Lowes Creek Tree Farm",
        "Address": "S 9475 Lowes Creek Rd, Eleva, WI, 54738",
        "City": "Eleva",
        "State": "WI",
        "Zip Code": "54738",
        "Country": "USA",
        "Phone": "715.878.4166",
        "Phone 2": "888.878.4166",
        "Fax": "715.878.4166",
        "Email": "christmas@lowescreektreefarm.com",
        "Email 2": "lowesck@discover.net.net",
        "Website": "http://www.lowescreektreefarm.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "44.696332",
        "Longitude": "-91.473283",
        "Street": "Lowes Creek Rd",
        "County": "Eau Claire County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -91.473283,
          44.696332
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Madrona Nursery",
        "Address": "802 37th Ave, Seattle, WA, 98122",
        "City": "Seattle",
        "State": "WA",
        "Zip Code": "98122",
        "Country": "USA",
        "Contact": "Ann Buscher",
        "Phone": "206.323.8325",
        "Fax": "206.323.8325",
        "Email": "buscherjohn@earthlink.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "47.609398",
        "Longitude": "-122.285848",
        "Street": "37th Ave",
        "County": "King County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.285848,
          47.609398
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Mahanoy Valley Nurseries",
        "Address": "239 Mahanoy Rd, Duncannon, PA, 17020",
        "City": "Duncannon",
        "State": "PA",
        "Zip Code": "17020",
        "Country": "USA",
        "Contact": "Paul",
        "Phone": "717.834.3996",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "40.458164",
        "Longitude": "-77.047491",
        "Street": "Mahanoy Valley Rd",
        "County": "Perry County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.047491,
          40.458164
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Mahonia Vineyards & Nursery Inc",
        "Address": "2655 Landau St SE, Salem, OR, 97306",
        "City": "Salem",
        "State": "OR",
        "Zip Code": "97306",
        "Country": "USA",
        "Contact": "Rick Brownell ",
        "Phone": "503.585.8789",
        "Fax": "503.363.2358",
        "Email": "rick@mahonianursery.com",
        "Email 2": "sales@mahonianursery.com",
        "Website": "http://mahonianursery.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nContract",
        "Product": "Plants",
        "Latitude": "44.872339",
        "Longitude": "-123.008261",
        "Street": "Landau St SE",
        "County": "Marion County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.008261,
          44.872339
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Mail-Order Natives",
        "Address": "PO Box 9366, Lee, FL, 32059",
        "City": "Lee",
        "State": "FL",
        "Zip Code": "32059",
        "Country": "USA",
        "Contact": "Amy Webb",
        "Fax": "850.973.0585",
        "Email": "superiortrees@centurylink.net",
        "Website": "http://www.mailordernatives.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "30.41966",
        "Longitude": "-83.30042",
        "County": "Madison County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.30042,
          30.41966
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Makani Gardens",
        "Address": "1625 W Kuiaha Rd, Ha'iku Maui, HI, 96708",
        "City": "Ha'iku Maui",
        "State": "HI",
        "Zip Code": "96708",
        "Country": "USA",
        "Contact": "Gordon",
        "Phone": "808.572.6337",
        "Fax": "808.572.6337",
        "Email": "makanigardensmaui@gmail.com",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "20.894014",
        "Longitude": "-156.29921",
        "Street": "W Kuiaha Rd",
        "County": "Maui County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -156.29921,
          20.894014
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Manzanita Native Plant Nursery",
        "Address": "39397 Hwy 94, Boulevard, CA, 91905",
        "City": "Boulevard",
        "State": "CA",
        "Zip Code": "91905",
        "Country": "USA",
        "Contact": "Tim",
        "Phone": "619.766.4210",
        "Email": "manzanitanursery@aol.com",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "32.66784",
        "Longitude": "-116.301133",
        "Street": "Hwy 94",
        "County": "San Diego County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.301133,
          32.66784
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Maple Hill Farms",
        "Address": "1198 William Penn Dr, Lewisburg, PA, 17837-0648",
        "City": "Lewisburg",
        "State": "PA",
        "Zip Code": "17837-0648",
        "Country": "USA",
        "Contact": "Jeff Craul",
        "Phone": "570.524.0791",
        "Fax": "570.524.0791",
        "Email": "treetrimmer17837@yahoo.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail",
        "Product": "Plants",
        "Latitude": "40.972537",
        "Longitude": "-76.902697",
        "Street": "William Penn Dr",
        "County": "Union County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.902697,
          40.972537
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Maple Leaf",
        "Address": "450 S 50 E, Ephraim, UT, 84627",
        "City": "Ephraim",
        "State": "UT",
        "Zip Code": "84627",
        "Country": "USA",
        "Contact": "Lloyd",
        "Phone": "435.283.4400",
        "Fax": "435.283.6872",
        "Email": "snowman@cut.net",
        "Email 2": "Jason@cut.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Seeds",
        "Latitude": "39.351875",
        "Longitude": "-111.585947",
        "Street": "S 50 E",
        "County": "Sanpete County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.585947,
          39.351875
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Maple Street Natives",
        "Address": "7619 Henry Ave, West Melbourne, FL, 32904",
        "City": "West Melbourne",
        "State": "FL",
        "Zip Code": "32904",
        "Country": "USA",
        "Contact": "Sharon or Brent Dolan",
        "Phone": "321.729.6857",
        "Fax": "321.729.6857",
        "Email": "info@maplestreetnatives.com",
        "Website": "http://www.maplestreetnatives.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "28.071473",
        "Longitude": "-80.676222",
        "Street": "Henry Ave",
        "County": "Brevard County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.676222,
          28.071473
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Mapleton Nurseries",
        "Address": "140 Mapleton Rd, Kingston, NJ, 08528-0396",
        "City": "Kingston",
        "State": "NJ",
        "Zip Code": "08528-0396",
        "Country": "USA",
        "Contact": "David Reid",
        "Phone": "609.430.0366",
        "Phone 2": "888.239.7567",
        "Fax": "609.430.0367",
        "Email": "mapletonurseries@hotmail.com",
        "Website": "http://www.mapletonnurseries.co",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "40.360826",
        "Longitude": "-74.62184",
        "Street": "Mapleton Rd",
        "County": "Middlesex County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.62184,
          40.360826
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Mark & John Gullickson",
        "Address": "10990 423rd St SE, Fertile, MN, 56540-9272",
        "City": "Fertile",
        "State": "MN",
        "Zip Code": "56540-9272",
        "Country": "USA",
        "Contact": "Mark E Gullickson",
        "Phone": "218.945.6894",
        "Email": "mgullic@hotmail.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Seeds",
        "Latitude": "47.553803",
        "Longitude": "-96.238059",
        "Street": "423rd St SE",
        "County": "Polk County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.238059,
          47.553803
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Marshall Tree Farm",
        "Address": "17350 SE 65th St, Morriston, FL, 32668",
        "City": "Morriston",
        "State": "FL",
        "Zip Code": "32668",
        "Country": "USA",
        "Contact": "Michael Marshall",
        "Phone": "800.786.1422",
        "Fax": "352.528.3778",
        "Email": "michael@marshalltrees.com",
        "Email 2": "Michael@marshalltreefarm.com",
        "Website": "http://www.marshalltrees.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "29.235743",
        "Longitude": "-82.481902",
        "Street": "SE 65th St",
        "County": "Levy County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.481902,
          29.235743
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Marshland Transplant Aquatic Nursery",
        "Address": "116 E Huron St, Berlin, WI, 54923",
        "City": "Berlin",
        "State": "WI",
        "Zip Code": "54923",
        "Country": "USA",
        "Contact": "Thomas Traxler Jr",
        "Phone": "800.208.2842",
        "Fax": "920.361.4200",
        "Email": "marshland@centurytel.net",
        "Website": "http://www.marshlandtransplant.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nMail\nInternet\nContract",
        "Product": "Plants",
        "Established": "1984",
        "Hours": "M-F 8-4",
        "Latitude": "43.968164",
        "Longitude": "-88.945984",
        "Street": "E Huron St",
        "County": "Green Lake County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.945984,
          43.968164
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Maryland Aquatic Nurseries",
        "Address": "3427 N Furnace Rd, Jarrettsville, MD, 21084",
        "City": "Jarrettsville",
        "State": "MD",
        "Zip Code": "21084",
        "Country": "USA",
        "Contact": "Dick",
        "Phone": "410.692.4171",
        "Fax": "410.692.2837",
        "Email": "info@marylandaquatic.com",
        "Website": "http://www.marylandaquatic.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "39.592111",
        "Longitude": "-76.493794",
        "Street": "N Furnace Rd",
        "County": "Harford County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.493794,
          39.592111
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Mathisen Tree Farms",
        "Address": "7288 Grow Rd, Greenville, MI, 48838",
        "City": "Greenville",
        "State": "MI",
        "Zip Code": "48838",
        "Country": "USA",
        "Contact": "Tom Trechter",
        "Phone": "616.754.3200",
        "Fax": "616.754.4580",
        "Email": "tom@mathisentreefarms.com",
        "Email 2": "sales@mathisentreefarms.com",
        "Website": "http://www.mathisentreefarms.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "43.18265",
        "Longitude": "-85.152856",
        "Street": "Grow Rd",
        "County": "Montcalm County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.152856,
          43.18265
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Matilija Nursery",
        "Address": "8225 Waters Rd, Moorpark, CA, 93021",
        "City": "Moorpark",
        "State": "CA",
        "Zip Code": "93021",
        "Country": "USA",
        "Contact": "Bob",
        "Phone": "805.523.8604",
        "Email": "Matilija@verizon.net",
        "Website": "http://www.matilijanursery.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "34.319647",
        "Longitude": "-118.94785",
        "Street": "Waters Rd",
        "County": "Ventura County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.94785,
          34.319647
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Matlack Tree Farm",
        "Address": "11631 C R  561, Clermont, FL, 34711",
        "City": "Clermont",
        "State": "FL",
        "Zip Code": "34711",
        "Country": "USA",
        "Contact": "Ty Matlack",
        "Phone": "352.406.9735",
        "Email": "matlacktree@gmail.com",
        "Website": "http://www.matlacktreefarm.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "28.584025",
        "Longitude": "-81.779423",
        "County": "Lake County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.779423,
          28.584025
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Matlack Tree Farm",
        "Address": "11631 CR 561, Clermont, FL, 34711",
        "City": "Clermont",
        "State": "FL",
        "Zip Code": "34711",
        "Country": "USA",
        "Contact": "Ty Matlack",
        "Phone": "352.406.9735",
        "Fax": "352.394.2830",
        "Email": "matlacktree@gmail.com",
        "Website": "http://www.matlacktreefarm.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "28.516313",
        "Longitude": "-81.784134",
        "Street": "County Rd 561",
        "County": "Lake County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.784134,
          28.516313
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Maughan Seed Company",
        "Address": "194 W 300 S, Manti, UT, 84642-0072",
        "City": "Manti",
        "State": "UT",
        "Zip Code": "84642-0072",
        "Country": "USA",
        "Contact": "Brad Maughan",
        "Phone": "435.340.0589",
        "Fax": "435.835.0402",
        "Email": "maughanseed@mail.manti.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail",
        "Product": "Seeds",
        "Latitude": "39.261313",
        "Longitude": "-111.640505",
        "Street": "W 300 S",
        "County": "Sanpete County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.640505,
          39.261313
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Maui Native Nursery",
        "Address": "1267 Na'alae Rd , Kula, HI, 96790",
        "City": "Kula",
        "State": "HI",
        "Zip Code": "96790",
        "Country": "USA",
        "Contact": "Ethan Romanchak",
        "Phone": "808.878.8276",
        "Phone 2": "808.281.8494",
        "Fax": "808.876.1020",
        "Email": "ethanromanchak@mauinativenursery.com",
        "Website": "http://www.mauinativenursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "20.757492",
        "Longitude": "-156.345849",
        "Street": "Naalae Rd",
        "County": "Maui County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -156.345849,
          20.757492
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Mayo Creek Gardens",
        "Address": "6596 McLean Rd, Lake Cowichan, BC, V0R 2G0",
        "City": "Lake Cowichan",
        "State": "BC",
        "Zip Code": "V0R 2G0",
        "Country": "Canada",
        "Contact": "Ingeborg Woodsworth",
        "Phone": "250.749.6291",
        "Email": "mayocreekgardens@shaw.ca",
        "Website": "http://mayocreekgardens.ca",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "47.767607",
        "Longitude": "-96.597811",
        "Street": "McLean St",
        "County": "Polk County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.597811,
          47.767607
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "McCormick Seeds",
        "Address": "400 E Ash, Muleshoe, TX, 79347",
        "City": "Muleshoe",
        "State": "TX",
        "Zip Code": "79347",
        "Country": "USA",
        "Contact": "Tim McCormick",
        "Phone": "806.272.3156",
        "Fax": "806.272.5602",
        "Email": "mcseed54@msn.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Seeds",
        "Latitude": "34.225539",
        "Longitude": "-102.719452",
        "Street": "E Ash Ave",
        "County": "Bailey County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -102.719452,
          34.225539
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "McHenry County Nursery Inc & Glacier Oaks Native Nursery",
        "Address": "8216 White Oaks Rd, Harvard, IL, 60033",
        "City": "Harvard",
        "State": "IL",
        "Zip Code": "60033",
        "Country": "USA",
        "Contact": "Mary McClelland",
        "Phone": "815.482.7404",
        "Fax": "815.943.3511",
        "Email": "marytreemcclelland@gmail.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nContract",
        "Product": "Plants",
        "Latitude": "42.445932",
        "Longitude": "-88.679659",
        "Street": "White Oaks Rd",
        "County": "McHenry County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.679659,
          42.445932
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "McKeithen Growers Inc",
        "Address": "24005 71st Ave E, Myakka City, FL, 34251",
        "City": "Myakka City",
        "State": "FL",
        "Zip Code": "34251",
        "Country": "USA",
        "Contact": "Eddie McKeithen",
        "Phone": "941.232.9377",
        "Email": "eddie@mckeithen.net",
        "Website": "http://www.mckeithengrowers.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "27.413868",
        "Longitude": "-82.296214",
        "Street": "71st Ave E",
        "County": "Manatee County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.296214,
          27.413868
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "McNeal Growers",
        "Address": "750 Pope Bend Rd N, Cedar Creek , TX, 78612",
        "City": "Cedar Creek",
        "State": "TX",
        "Zip Code": "78612",
        "Country": "USA",
        "Contact": "Pat McNeal",
        "Phone": "512.280.2233",
        "Phone 2": "512.294.4133",
        "Email": "p_mcneal@mcnealgrowers.com",
        "Website": "http://mcnealgrowers.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "30.178449",
        "Longitude": "-97.446158",
        "Street": "Pope Bnd N",
        "County": "Bastrop County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.446158,
          30.178449
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Meadow Beauty Nursery",
        "Address": "5782 Ranches Rd, Lake Worth, FL, 33463",
        "City": "Lake Worth",
        "State": "FL",
        "Zip Code": "33463",
        "Country": "USA",
        "Contact": "Carl Terwilliger",
        "Phone": "561.601.9673",
        "Phone 2": "561.966.6848",
        "Email": "clwillow@comcast.net",
        "Website": "http://meadowbeautynursery.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "26.569813",
        "Longitude": "-80.134589",
        "Street": "Ranches Rd",
        "County": "Palm Beach County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.134589,
          26.569813
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Meadowbrook Nursery | WE-DU Natives",
        "Address": "2055 Polly Spout Rd, Marion, NC, 28752",
        "City": "Marion",
        "State": "NC",
        "Zip Code": "28752",
        "Country": "USA",
        "Contact": "Jamie Oxley",
        "Phone": "828.738.8300",
        "Email": "orders@we-du.com",
        "Website": "http://we-du.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Established": "1981",
        "Hours": "M-F 9-5 (retail hrs seasonal; Mar-Nov W-Sat 9-5)",
        "Latitude": "35.541544",
        "Longitude": "-81.960118",
        "Street": "Polly Spout Rd",
        "County": "McDowell County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.960118,
          35.541544
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Meeks' Farm & Nursery  Inc",
        "Address": "168 Flanders Rd, Kite, GA, 31049",
        "City": "Kite",
        "State": "GA",
        "Zip Code": "31049",
        "Country": "USA",
        "Contact": "Steve Meeks",
        "Phone": "478.469.3417",
        "Email": "steve@meeksfarms-nurserys.com",
        "Website": "http://www.meeksfarms-nurserys.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "32.667767",
        "Longitude": "-82.462089",
        "Street": "Flanders Rd",
        "County": "Emanuel County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.462089,
          32.667767
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Mellow Marsh Farm",
        "Address": "1312 Woody Store Rd, Siler City, NC, 27344",
        "City": "Siler City",
        "State": "NC",
        "Zip Code": "27344",
        "Country": "USA",
        "Contact": "Sharon Day",
        "Phone": "919.742.1200",
        "Fax": "919.742.1280",
        "Email": "plantinfo@mellowmarshfarm.com",
        "Website": "http://www.mellowmarshfarm.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nInternet\nContract",
        "Product": "Plants\nSeeds",
        "Hours": "7:30-3:00 M-Th, 7:30-11:00 F",
        "Latitude": "35.797333",
        "Longitude": "-79.343154",
        "Street": "Woody Store Rd",
        "County": "Chatham County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.343154,
          35.797333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Menzie's Native Nursery",
        "Address": "10805 N Old Stage Rd, Weed, CA, 96094",
        "City": "Weed",
        "State": "CA",
        "Zip Code": "96094",
        "Country": "USA",
        "Contact": "Robert Menzies",
        "Phone": "530.938.4858",
        "Fax": "530.938.4858",
        "Email": "menzies@snowcrest.net",
        "Email 2": "sales@menziesnatives.com",
        "Website": "http://menziesnatives.com",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "41.411664",
        "Longitude": "-122.434218",
        "Street": "N Old Stage Rd",
        "County": "Siskiyou County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.434218,
          41.411664
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Mesa Garden",
        "Address": "58 Greer Rd, Belen, NM, 87002",
        "City": "Belen",
        "State": "NM",
        "Zip Code": "87002",
        "Country": "USA",
        "Contact": "Steven Brack",
        "Phone": "505.864.3131",
        "Fax": "877.248.2664",
        "Email": "cactus@swcp.com",
        "Email 2": "cacti@cactus.mall.com",
        "Website": "http://www.mesagarden.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail",
        "Product": "Seeds",
        "Latitude": "34.655679",
        "Longitude": "-106.821003",
        "Street": "Greer Rd",
        "County": "Valencia County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -106.821003,
          34.655679
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Mesozoic Landscapes Inc",
        "Address": "7667 Park Lane Rd, Lake Worth, FL, 33449-6728",
        "City": "Lake Worth",
        "State": "FL",
        "Zip Code": "33449-6728",
        "Country": "USA",
        "Contact": "Richard Moyroud",
        "Phone": "561.967.2630",
        "Email": "moyroud@prodigy.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants\nServices",
        "Latitude": "26.563358",
        "Longitude": "-80.217872",
        "Street": "Park Lane Rd",
        "County": "Palm Beach County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.217872,
          26.563358
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Mesquite Valley Growers",
        "Address": "8005 E Speedway, Tucson, AZ, 85710",
        "City": "Tucson",
        "State": "AZ",
        "Zip Code": "85710",
        "Country": "USA",
        "Contact": "Kathy Bishop",
        "Phone": "520.721.8600",
        "Fax": "520.722.2909",
        "Email": "orchidcat@aol.com",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "32.236053",
        "Longitude": "-110.821947",
        "Street": "E Speedway Blvd",
        "County": "Pima County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -110.821947,
          32.236053
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Methow Natives",
        "Address": "19 Aspen Ln, Winthrop, WA, 98862",
        "City": "Winthrop",
        "State": "WA",
        "Zip Code": "98862",
        "Country": "USA",
        "Contact": "methownatives@methownet.com",
        "Phone": "509.996.3562",
        "Phone 2": "509.341.4060",
        "Fax": "509.996.3562",
        "Email": "methownatives@methow.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Hours": "F 9-4 by appt",
        "Latitude": "48.493231",
        "Longitude": "-120.25844",
        "Street": "Aspen Ln",
        "County": "Okanogan County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.25844,
          48.493231
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Michigan Department of Natural Resources - Wyman State Forest Nursery",
        "Address": "480 N Intake Park Rd, Manistique, MI, 49854",
        "City": "Manistique",
        "State": "MI",
        "Zip Code": "49854",
        "Country": "USA",
        "Contact": "Richard Mergener",
        "Phone": "906.341.2518",
        "Fax": "906.341.8344",
        "Email": "mergenerr@michigan.gov",
        "Website": "http://michigan.gov/dnr",
        "Nursery Type": "State",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "45.971582",
        "Longitude": "-86.248061",
        "Street": "Intake Park Rd",
        "County": "Schoolcraft County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.248061,
          45.971582
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Michigan Wildflower Farm",
        "Address": "11770 Cutler Rd, Portland, MI, 48875-9452",
        "City": "Portland",
        "State": "MI",
        "Zip Code": "48875-9452",
        "Country": "USA",
        "Contact": "Esther Durnwald",
        "Phone": "517.647.6010",
        "Email": "michiganwildlfowerfarm@gmail.com",
        "Website": "http://www.michiganwildflowerfarm.com",
        "Nursery Type": "Private",
        "Business Type": "Mail",
        "Product": "Plants\nSeeds",
        "Established": "1989",
        "Hours": "M-F 8-5",
        "Latitude": "42.857055",
        "Longitude": "-84.842252",
        "Street": "Cutler Rd",
        "County": "Ionia County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.842252,
          42.857055
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Mid Atlantic Natives",
        "Address": "4238 Buckley Hall Rd, Cobbs Creek, VA, 23056",
        "City": "Cobbs Creek",
        "State": "VA",
        "Zip Code": "23056",
        "Country": "USA",
        "Phone": "757.695.1607",
        "Phone 2": "844.862.1607",
        "Email": "sales@midatlanticnatives.com",
        "Website": "https://midatlanticnatives.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "37.505746",
        "Longitude": "-76.376623",
        "Street": "Buckley Hall Rd",
        "County": "Mathews County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.376623,
          37.505746
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Middletown Rancheria",
        "Address": "PO Box 1035, Middletown, CA, 95461",
        "City": "Middletown",
        "State": "CA",
        "Zip Code": "95461",
        "Country": "USA",
        "Contact": "Chris Simon",
        "Phone": "707.987.3670",
        "Phone 2": "707.987.1109",
        "Fax": "707.987.9091",
        "Email": "chris@haypa.com",
        "Nursery Type": "Tribal",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "38.75565",
        "Longitude": "-122.62835",
        "County": "Lake County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.62835,
          38.75565
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Midwest Cactus",
        "Address": "PO Box 163, New Melle, MO, 63365",
        "City": "New Melle",
        "State": "MO",
        "Zip Code": "63365",
        "Country": "USA",
        "Phone": "636.828.5389",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "38.716287",
        "Longitude": "-90.875127",
        "County": "St. Charles County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.875127,
          38.716287
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Miles W Fry & Son",
        "Address": "300 Frysville Rd, Ephrata, PA, 17522",
        "City": "Ephrata",
        "State": "PA",
        "Zip Code": "17522",
        "Country": "USA",
        "Contact": "Morton Fry",
        "Phone": "717.354.4501",
        "Fax": "717.354.8423",
        "Email": "tfry@frysvillefarms.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "40.17079",
        "Longitude": "-76.102478",
        "Street": "Frysville Rd",
        "County": "Lancaster County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.102478,
          40.17079
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Milestone Nursery",
        "Address": "620 State St, Lyle, WA, 98635",
        "City": "Lyle",
        "State": "WA",
        "Zip Code": "98635",
        "Country": "USA",
        "Contact": "Modene Miles",
        "Phone": "509.365.5222",
        "Email": "milestonenursery@embarqmail.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nMail\nContract",
        "Product": "Plants\nSeeds",
        "Established": "1995",
        "Hours": "M-F by appt",
        "Latitude": "45.691854",
        "Longitude": "-121.280034",
        "Street": "State St",
        "County": "Klickitat County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.280034,
          45.691854
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Miller Nursery & Tree Company",
        "Address": "6407 S US Hwy 377, Stephenville, TX, 76401",
        "City": "Stephenville",
        "State": "TX",
        "Zip Code": "76401",
        "Country": "USA",
        "Contact": "Pam Thacker",
        "Phone": "254.968.2211",
        "Fax": "254.968.6903",
        "Email": "miller@our-town.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "32.18246",
        "Longitude": "-98.264877",
        "Street": "S US Highway 377",
        "County": "Erath County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -98.264877,
          32.18246
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Mineland Reclamation Division",
        "Address": "1003 Discovery Dr, Chisholm, MN, 55719",
        "City": "Chisholm",
        "State": "MN",
        "Zip Code": "55719",
        "Country": "USA",
        "Contact": "Dan Jordan",
        "Phone": "218.274.7000",
        "Phone 2": "218.274.7007",
        "Fax": "218.274.7002",
        "Email": "dan.jordan@state.mn.us",
        "Website": "http://mn.gov/irrrb/",
        "Nursery Type": "State",
        "Product": "Plants",
        "Latitude": "47.478311",
        "Longitude": "-92.894535",
        "Street": "Discovery Dr",
        "County": "St. Louis County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -92.894535,
          47.478311
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Minnesota Native Landscapes",
        "Address": "8740 77th St NE, Otsego, MN, 55362",
        "City": "Otsego",
        "State": "MN",
        "Zip Code": "55362",
        "Country": "USA",
        "Contact": "Keith Fredrick",
        "Phone": "763.295.0010",
        "Fax": "0025",
        "Email": "info@mnlcorp.com",
        "Email 2": "info@mnlcorps.com",
        "Website": "http://www.mnnativelandscapes.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nContract",
        "Product": "Plants\nSeeds\nServices",
        "Latitude": "45.264336",
        "Longitude": "-93.710868",
        "Street": "77th St NE",
        "County": "Wright County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.710868,
          45.264336
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Minnesota State Forest Nurseries - Minnesota Department of Natural Resources",
        "Address": "13885 State Hwy 64, Akeley, MN, 56433",
        "City": "Akeley",
        "State": "MN",
        "Zip Code": "56433",
        "Country": "USA",
        "Contact": "Kristina D Somes",
        "Phone": "218.652.2385",
        "Website": "http://www.dnr.state.mn.us/forestry/nursery/index.html",
        "Nursery Type": "State",
        "Business Type": "Retail",
        "Product": "Plants",
        "Established": "1929",
        "Hours": "M-F 8-4:30",
        "Latitude": "46.860389",
        "Longitude": "-94.7235",
        "Street": "State 64",
        "County": "Hubbard County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.7235,
          46.860389
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Minnesota Valley Garden Center",
        "Address": "3232 W 150th St, Shakopee, MN, 55379",
        "City": "Shakopee",
        "State": "MN",
        "Zip Code": "55379",
        "Country": "USA",
        "Contact": "Barb Root",
        "Phone": "952.445.9160",
        "Fax": "952.445.7838",
        "Email": "barbr@minnesotavalley.com",
        "Website": "http://www.minnesotavalley.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "44.733817",
        "Longitude": "-93.587701",
        "Street": "150th St W",
        "County": "Scott County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.587701,
          44.733817
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Minto Island Growers",
        "Address": "3394 Brown's Island Rd S, Salem, OR, 97302",
        "City": "Salem",
        "State": "OR",
        "Zip Code": "97302",
        "Country": "USA",
        "Contact": "Chris Jenkins",
        "Phone": "503.559.9681",
        "Phone 2": "503.799.6967",
        "Fax": "503.362.5248",
        "Email": "chris@mintogrowers.com",
        "Website": "http://www.mintogrowers.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants\nSeeds",
        "Latitude": "44.907413",
        "Longitude": "-123.095685",
        "Street": "Brown Island Rd S",
        "County": "Marion County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.095685,
          44.907413
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Mississippi State University - Coastal Research and Extension Center",
        "Address": "810 Hwy 26W, Poplarville, MS, 39470",
        "City": "Poplarville",
        "State": "MS",
        "Zip Code": "39470",
        "Country": "USA",
        "Contact": "Patricia Knight",
        "Phone": "228.806.9601",
        "Fax": "601.795.0653",
        "Email": "patricia.knight@msstate.edu",
        "Website": "http://coastal.msstate.edu/",
        "Nursery Type": "State",
        "Product": "Plants",
        "Latitude": "30.832739",
        "Longitude": "-89.547406",
        "Street": "Hwy 26W",
        "County": "Pearl River County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.547406,
          30.832739
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Mississippi State University - The Crosby Arboretum",
        "Address": "370 Ridge Rd, Picayune, MS, 39466",
        "City": "Picayune",
        "State": "MS",
        "Zip Code": "39466",
        "Country": "USA",
        "Contact": "Patricia Drackett",
        "Phone": "601.799.2311",
        "Fax": "601.799.2372",
        "Email": "drackett@ext.msstate.edu",
        "Website": "http://www.crosbyarboretum.msstate.edu/",
        "Nursery Type": "State",
        "Product": "Plants",
        "Latitude": "30.491332",
        "Longitude": "-89.666433",
        "Street": "Ridge Rd",
        "County": "Pearl River County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.666433,
          30.491332
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Missouri Department of Conservation | George O  White State Forest Nursery",
        "Address": "14027 Shafer Rd, Licking, MO, 65542",
        "City": "Licking",
        "State": "MO",
        "Zip Code": "65542",
        "Country": "USA",
        "Contact": "George Clark",
        "Phone": "573.674.3229",
        "Fax": "573.674.4047",
        "Email": "George.clark@mdc.mo.gov",
        "Website": "http://mdc.mo.gov",
        "Nursery Type": "State",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "37.557744",
        "Longitude": "-91.883894",
        "Street": "Shafer Rd",
        "County": "Texas County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -91.883894,
          37.557744
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Missouri Wildflowers Nursery LLC",
        "Address": "9814 Pleasant Hill Rd, Jefferson City, MO, 65109-9409",
        "City": "Jefferson City",
        "State": "MO",
        "Zip Code": "65109-9409",
        "Country": "USA",
        "Contact": "Mervin Wallace",
        "Phone": "573.496.3492",
        "Fax": "573.496.3003",
        "Email": "mowldflrs@socket.net",
        "Website": "http://www.mowildflowers.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail\nInternet\nContract",
        "Product": "Plants\nSeeds",
        "Established": "1984",
        "Hours": "M-Sat 9-5 Sun 12-5",
        "Latitude": "38.439455",
        "Longitude": "-92.309151",
        "Street": "Pleasant Hill Rd",
        "County": "Cole County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -92.309151,
          38.439455
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Mistletoe-Carter Wholesale Seed",
        "Address": "780 Glen Annie Rd, Goleta, CA, 93117",
        "City": "Goleta",
        "State": "CA",
        "Zip Code": "93117",
        "Country": "USA",
        "Contact": "Cindy",
        "Phone": "805.968.4818",
        "Fax": "805.968.2242",
        "Email": "sales@mcseeds.com",
        "Website": "http://www.mcseeds.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Seeds",
        "Latitude": "34.450131",
        "Longitude": "-119.876236",
        "Street": "Glen Annie Rd",
        "County": "Santa Barbara County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.876236,
          34.450131
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Mohave Joshua Company",
        "Address": "PO Box 3222, Kingman, AZ, 86402",
        "City": "Kingman",
        "State": "AZ",
        "Zip Code": "86402",
        "Country": "USA",
        "Contact": "Elno Roundy",
        "Phone": "928.757.2818",
        "Fax": "928.757.5098",
        "Email": "cleo@citlink.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Seeds",
        "Latitude": "35.263249",
        "Longitude": "-114.063651",
        "County": "Mohave County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -114.063651,
          35.263249
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Molpus Timberlands Management LLC | Joshua Timberlands Nursery",
        "Address": "29650 Comstock Rd, Elberta, AL, 36530",
        "City": "Elberta",
        "State": "AL",
        "Zip Code": "36530",
        "Country": "USA",
        "Contact": "Sam Campbell",
        "Phone": "251.986.5210",
        "Fax": "334.986.5211",
        "Email": "scampbell@molpus.com",
        "Website": "http://www.molpus.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "30.456457",
        "Longitude": "-87.522399",
        "Street": "Comstock Rd",
        "County": "Baldwin County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.522399,
          30.456457
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Montana Dept of Natural Resources & Conservation | Montana Conservation Seedling Nursery",
        "Address": "2705 Spurgin Rd, Missoula, MT, 59804",
        "City": "Missoula",
        "State": "MT",
        "Zip Code": "59804",
        "Country": "USA",
        "Contact": "Seedling Nursery Manager",
        "Phone": "406.542.4244",
        "Phone 2": "406.542.4203",
        "Email": "mtnursery@mt.gov",
        "Website": "http://dnrc.mt.gov/nursery",
        "Nursery Type": "State",
        "Business Type": "Retail\nMail\nInternet\nContract",
        "Product": "Plants",
        "Latitude": "46.855472",
        "Longitude": "-114.058709",
        "Street": "Spurgin Rd",
        "County": "Missoula County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -114.058709,
          46.855472
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Monterey Bay Nursery",
        "Address": "748 San Miguel Canyon Rd, Royal Oaks, CA, 95076",
        "City": "Royal Oaks",
        "State": "CA",
        "Zip Code": "95076",
        "Country": "USA",
        "Contact": "Luen Miller",
        "Phone": "831.724.6361",
        "Fax": "831.724.8903",
        "Email": "luen@montereybanys.com",
        "Email 2": "sales@montereybaynursery.com",
        "Website": "http://montereybaynsy.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "36.865816",
        "Longitude": "-121.689711",
        "Street": "San Miguel Canyon Rd",
        "County": "Monterey County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.689711,
          36.865816
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Moosa Creek Nursery",
        "Address": "27201 Cool Water Ranch Rd, Valley Center, CA, 92082",
        "City": "Valley Center",
        "State": "CA",
        "Zip Code": "92082",
        "Country": "USA",
        "Contact": "Su Kraus",
        "Phone": "760.749.3216",
        "Fax": "760.751.0548",
        "Email": "nursery@moosacreek.com",
        "Website": "http://www.moosacreeknursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "33.20668",
        "Longitude": "-116.989042",
        "Street": "Cool Water Ranch Rd",
        "County": "San Diego County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.989042,
          33.20668
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Morning Sky Greenery",
        "Address": "44804 E Hwy 28, Morris, MN, 56267",
        "City": "Morris",
        "State": "MN",
        "Zip Code": "56267",
        "Country": "USA",
        "Contact": "Sally",
        "Phone": "320.795.6234",
        "Fax": "320.795.6234",
        "Email": "info@morningskygreenery.com",
        "Website": "http://www.morningskygreenery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Established": "1993",
        "Latitude": "45.607594",
        "Longitude": "-95.856932",
        "Street": "State Highway 28",
        "County": "Stevens County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.856932,
          45.607594
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Moss Greenhouses",
        "Address": "269 S 300 E, Jerome, ID, 83338",
        "City": "Jerome",
        "State": "ID",
        "Zip Code": "83338",
        "Country": "USA",
        "Contact": "Dana Moss",
        "Phone": "208.324.1000",
        "Fax": "208.324.7391",
        "Email": "dana.moss@mossgreenhouses.com",
        "Email 2": "webmaster@mossgreenhouses.com",
        "Website": "http://www.mossgreenhouses.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "42.684665",
        "Longitude": "-114.462835",
        "Street": "S 300 E",
        "County": "Jerome County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -114.462835,
          42.684665
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Mossy Oak Nativ Nurseries",
        "Address": "6015 US 45 Alt S, West Point, MS, 39773",
        "City": "West Point",
        "State": "MS",
        "Zip Code": "39773",
        "Country": "USA",
        "Contact": "Patricia Fulgham",
        "Phone": "662.494.4326",
        "Fax": "662.494.8446",
        "Email": "nativnurseries@mossyoak.com",
        "Website": "http://www.nativnurseries.com/",
        "Nursery Type": "Private",
        "Business Type": "Retail\nInternet",
        "Product": "Plants\nSeeds",
        "Latitude": "33.621135",
        "Longitude": "-88.609136",
        "County": "Clay County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.609136,
          33.621135
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Mosterman Plants Inc.",
        "Address": "43583 Adams Rd, Chilliwack, BC, V2R 4L1",
        "City": "Chilliwack",
        "State": "BC",
        "Zip Code": "V2R 4L1",
        "Country": "Canada",
        "Contact": "Sylvia Mosterman",
        "Phone": "604.823.4713",
        "Fax": "604.823.4749",
        "Email": "source@mostplantsinc.com",
        "Website": "http://mostplantsinc.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Hours": "Mosterman Plants Inc.",
        "Latitude": "43.892066",
        "Longitude": "-89.827509",
        "County": "Adams County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.827509,
          43.892066
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Mostly Natives",
        "Address": "27235 Hwy 1, Tomales, CA, 94971",
        "City": "Tomales",
        "State": "CA",
        "Zip Code": "94971",
        "Country": "USA",
        "Contact": "Walter Earle",
        "Phone": "707.878.2009",
        "Fax": "707.878.2079",
        "Email": "plants@mostlynatives.com",
        "Website": "http://www.mostlynatives.com",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "38.248391",
        "Longitude": "-122.905137",
        "Street": "State Route 1",
        "County": "Marin County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.905137,
          38.248391
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Mount Tahoma Nursery",
        "Address": "28111 112th Ave E, Graham, WA, 98338",
        "City": "Graham",
        "State": "WA",
        "Zip Code": "98338",
        "Country": "USA",
        "Contact": "Rick Lupp",
        "Phone": "253.847.9827",
        "Email": "rlupp@aol.com",
        "Website": "http://www.backyardgardener.com/mttahoma/",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "47.00083",
        "Longitude": "-122.282419",
        "Street": "112th Ave E",
        "County": "Pierce County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.282419,
          47.00083
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Mountain West Seed Company Inc",
        "Address": "350 N 200 W , Ephraim, UT, 84627",
        "City": "Ephraim",
        "State": "UT",
        "Zip Code": "84627",
        "Country": "USA",
        "Contact": "Jeremy",
        "Phone": "435.340.0691",
        "Fax": "435.283.4704",
        "Email": "mtnwseed@cut.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Seeds",
        "Latitude": "39.366744",
        "Longitude": "-111.590758",
        "Street": "N 200 W",
        "County": "Sanpete County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.590758,
          39.366744
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "MsK Rare and Native Plant Nursery",
        "Address": "20312 15th Ave NW, Shoreline, WA, 98177",
        "City": "Shoreline",
        "State": "WA",
        "Zip Code": "98177",
        "Country": "USA",
        "Contact": "Sarah Baker",
        "Phone": "206.546.1281",
        "Email": "plants@msknursery.com",
        "Website": "http://msknursery.com/",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "47.776179",
        "Longitude": "-122.376782",
        "Street": "15th Ave NW",
        "County": "King County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.376782,
          47.776179
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Munchkin Nursery and Gardens LLC",
        "Address": "323 Woodside Dr NW, Depauw, IN, 47115-9039",
        "City": "Depauw",
        "State": "IN",
        "Zip Code": "47115-9039",
        "Country": "USA",
        "Contact": "Gene Bush",
        "Phone": "812.633.4858",
        "Fax": "812.633.4858",
        "Email": "genebush@munchkinnursery.com",
        "Website": "http://www.munchkinnursery.com",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "38.336279",
        "Longitude": "-86.267806",
        "Street": "Woodside Dr NW",
        "County": "Harrison County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.267806,
          38.336279
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Murphy's Walnut Hill Nursery Inc",
        "Address": "1925 SE 82nd St, Runnells, IA, 50237",
        "City": "Runnells",
        "State": "IA",
        "Zip Code": "50237",
        "Country": "USA",
        "Contact": "Jim Murphy",
        "Phone": "515.262.6037",
        "Email": "jmurtree@aol.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "41.566735",
        "Longitude": "-93.439376",
        "Street": "SE 82nd St",
        "County": "Polk County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.439376,
          41.566735
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Musser Forests Inc",
        "Address": "1880 Rt 119 Hwy N, Indiana, PA, 15701",
        "City": "Indiana",
        "State": "PA",
        "Zip Code": "15701",
        "Country": "USA",
        "Phone": "724.465.5686",
        "Fax": "724.465.9893",
        "Email": "info@musserforests.com",
        "Website": "http://www.musserforests.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Seeds",
        "Latitude": "40.622003",
        "Longitude": "-79.120556",
        "Street": "State Rte 119 N",
        "County": "Indiana County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.120556,
          40.622003
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Myers Cove Nursery Inc",
        "Address": "3876 Myers Cove Rd, McMinnville, TN, 37110",
        "City": "McMinnville",
        "State": "TN",
        "Zip Code": "37110",
        "Country": "USA",
        "Contact": "Andy or Drew",
        "Phone": "931.668.3155",
        "Fax": "931.668.3207",
        "Email": "myerscove@blomand.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "35.615605",
        "Longitude": "-85.668291",
        "Street": "Myers Cove Rd",
        "County": "Warren County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.668291,
          35.615605
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "N.A.T.S. Nursery Ltd.",
        "Address": "24555 32nd Ave, Langley, BC, V2Z 2J5",
        "City": "Langley",
        "State": "BC",
        "Zip Code": "V2Z 2J5",
        "Country": "Canada",
        "Contact": "Andrea Martinello (containers) or Haley Argen (plugs)",
        "Phone": "604.530.9300",
        "Fax": "604.530.9500",
        "Email": "andrea@natsnursery.com",
        "Email 2": "plugs@natsnursery.com",
        "Website": "http://natsnursery.com/",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "37.63402",
        "Longitude": "-79.45031",
        "County": "Rockbridge County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.45031,
          37.63402
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "NATS Nursery Ltd",
        "Address": "24555 32nd Ave, Langley, BC, V2Z 2J5",
        "City": "Langley",
        "State": "BC",
        "Zip Code": "V2Z 2J5",
        "Country": "Canada",
        "Contact": "Jennifer Adhika, Abi Barwich, Michael Cambell, Ron Jacobson, Rod Nataros",
        "Phone": "604.530.9300",
        "Fax": "604.530.9500",
        "Email": "jennifer@natsnursery.com",
        "Email 2": "haley@natsnursery.com",
        "Website": "https://natsnursery.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nContract",
        "Product": "Plants\nServices",
        "Established": "1988",
        "Hours": "8:30am-4:30pm (M, Tu, W, Th, F)",
        "Latitude": "37.63402",
        "Longitude": "-79.45031",
        "County": "Rockbridge County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.45031,
          37.63402
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "NYC Parks | Greenbelt Native Plant Center",
        "Address": "3808 Victory Blvd, Staten Island, NY, 10314",
        "City": "Staten Island",
        "State": "NY",
        "Zip Code": "10314",
        "Country": "USA",
        "Contact": "Edward Toth, Director, Jeremy LaPointe, Nursery Manager",
        "Phone": "718.370.9044",
        "Fax": "718.370.0932",
        "Email": "gnpcinfo@parks.nyc.gov",
        "Nursery Type": "State",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "40.596526",
        "Longitude": "-74.182288",
        "Street": "Victory Blvd",
        "County": "Richmond County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.182288,
          40.596526
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Nashville Natives LLC",
        "Address": "7443 Liberty Rd, Fairview, TN, 37062",
        "City": "Fairview",
        "State": "TN",
        "Zip Code": "37062",
        "Country": "USA",
        "Contact": "Andy Sudbrock",
        "Phone": "615.799.8719",
        "Email": "info@nashvillenatives.com",
        "Website": "http://www.nashvillenatives.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants\nSeeds",
        "Established": "2003",
        "Hours": "by appt",
        "Latitude": "35.932181",
        "Longitude": "-87.173263",
        "Street": "Liberty Rd",
        "County": "Williamson County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.173263,
          35.932181
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Natchez Trace Greenhouses",
        "Address": "1113 S Huntington St, Kosciusko, MS, 39090",
        "City": "Kosciusko",
        "State": "MS",
        "Zip Code": "39090",
        "Country": "USA",
        "Contact": "Mark",
        "Phone": "662.289.2221",
        "Fax": "662.289.1445",
        "Email": "natchezt@msn.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "33.040385",
        "Longitude": "-89.580665",
        "Street": "S Huntington St",
        "County": "Attala County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.580665,
          33.040385
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "National Tree Seed Centre",
        "Address": "1350 Regent St, Fredericton, NB, E3C 2G6",
        "City": "Fredericton",
        "State": "NB",
        "Zip Code": "E3C 2G6",
        "Country": "Canada",
        "Contact": "Donnie McPhee",
        "Email": "donnie.mcphee@nrcan-rncan.gc.ca",
        "Website": "https://www.nrcan.gc.ca/science-and-data/research-centres-and-labs/forestry-research-centres/atlantic-forestry-centre/national-tree-seed-centre/13449",
        "Nursery Type": "Federal",
        "Business Type": "Research",
        "Product": "Seeds",
        "Latitude": "0",
        "Longitude": "0"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          0,
          0
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "National Tree Seed Centre - Surrey",
        "Address": "18793 32 Ave, Surrey, BC, V3S 0L5",
        "City": "Surrey",
        "State": "BC",
        "Zip Code": "V3S 0L5",
        "Country": "Canada",
        "Phone": "604.541.1683",
        "Email": "FORHTIP.TreeSeedCentre@gov.bc.ca",
        "Website": "https://www2.gov.bc.ca/gov/content/industry/forestry/managing-our-forest-resources/tree-seed/tree-seed-centre",
        "Nursery Type": "Federal",
        "Business Type": "Research",
        "Product": "Seeds",
        "Latitude": "47.666168",
        "Longitude": "-101.22792",
        "Street": "32th Ave NW",
        "County": "McLean County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -101.22792,
          47.666168
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "National Tropical Botanical Garden - Allerton & McBryde Gardens",
        "Address": "4425 Lawai Rd, Koloa, HI, 96756",
        "City": "Koloa",
        "State": "HI",
        "Zip Code": "96756",
        "Country": "USA",
        "Phone": "808.742.1011",
        "Fax": "808.332.9765",
        "Website": "http://www.ntbg.org/",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "21.886832",
        "Longitude": "-159.492808",
        "Street": "Lawai Rd",
        "County": "Kauai County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -159.492808,
          21.886832
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "National Tropical Botanical Garden - Kahanu Garden",
        "Address": "650 Ulaino Rd, Hana, HI, 96713",
        "City": "Hana",
        "State": "HI",
        "Zip Code": "96713",
        "Country": "USA",
        "Website": "https://ntbg.org",
        "Nursery Type": "Private",
        "Latitude": "20.800963",
        "Longitude": "-156.039886",
        "Street": "Ulaino Rd",
        "County": "Maui County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -156.039886,
          20.800963
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "National Tropical Botanical Garden - Limahuli Garden & Preserve",
        "Address": "5-8291 Kuhio Hwy, Hanalei, HI, 96714",
        "City": "Hanalei",
        "State": "HI",
        "Zip Code": "96714",
        "Country": "USA",
        "Email": "administration@ntbg.org",
        "Website": "https://ntbg.org/",
        "Nursery Type": "Private",
        "Latitude": "22.20441",
        "Longitude": "-159.491779",
        "Street": "Kuhio Hwy",
        "County": "Kauai County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -159.491779,
          22.20441
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "National Tropical Botanical Garden - The Kampong",
        "Address": "4013 Douglas Rd, Miami, FL, 33133",
        "City": "Miami",
        "State": "FL",
        "Zip Code": "33133",
        "Country": "USA",
        "Website": "https://ntbg.org",
        "Nursery Type": "Private",
        "Latitude": "25.715285",
        "Longitude": "-80.250366",
        "Street": "Douglas Rd",
        "County": "Miami-Dade County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.250366,
          25.715285
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Native American Seed",
        "Address": "4111 US Hwy 377, Junction, TX, 76849",
        "City": "Junction",
        "State": "TX",
        "Zip Code": "76849",
        "Country": "USA",
        "Contact": "Jan Neiman",
        "Phone": "800.728.4043",
        "Fax": "800.728.3943",
        "Email": "info@seedsource.com",
        "Website": "http://www.seedsource.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nMail\nInternet",
        "Product": "Seeds",
        "Latitude": "30.517105",
        "Longitude": "-99.703898",
        "Street": "N US Highway 377",
        "County": "Kimble County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -99.703898,
          30.517105
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Native Connections",
        "Address": "17080 Hoshel Rd, Three Rivers, MI, 49093",
        "City": "Three Rivers",
        "State": "MI",
        "Zip Code": "49093",
        "Country": "USA",
        "Contact": "Jerry Stewart",
        "Phone": "269.580.4765",
        "Phone 2": "269.580.4765",
        "Fax": "269.273.1367",
        "Email": "jerry@nativeconnections.net",
        "Website": "http://nativeconnections.net/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Seeds",
        "Latitude": "41.9183",
        "Longitude": "-85.622318",
        "Street": "Hoshel Rd",
        "County": "St. Joseph County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.622318,
          41.9183
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Native Forest Nursery",
        "Address": "11306 Hwy 411 S, Chatsworth, GA, 30705",
        "City": "Chatsworth",
        "State": "GA",
        "Zip Code": "30705",
        "Country": "USA",
        "Contact": "Paul Ensminger",
        "Phone": "706.483.3397",
        "Fax": "706.334.2272",
        "Email": "Paul@NativeForestNursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "34.617575",
        "Longitude": "-84.710636",
        "Street": "S 411 Hwy",
        "County": "Murray County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.710636,
          34.617575
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Native Gardens",
        "Address": "5737 Fisher Ln, Greenback, TN, 37742",
        "City": "Greenback",
        "State": "TN",
        "Zip Code": "37742",
        "Country": "USA",
        "Contact": "Ed or Meredith",
        "Phone": "865.856.0220",
        "Fax": "865.856.0220",
        "Email": "mclebsch@earthlink.net",
        "Website": "http://www.native.gardens.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nMail",
        "Product": "Plants",
        "Latitude": "35.718737",
        "Longitude": "-84.222433",
        "Street": "Fisher Ln",
        "County": "Loudon County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.222433,
          35.718737
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Native Ground",
        "Address": "3005 Airport Rd, Helena, MT, 59601",
        "City": "Helena",
        "State": "MT",
        "Zip Code": "59601",
        "Country": "USA",
        "Contact": "Corey Baker",
        "Phone": "406.461.5593",
        "Email": "info.nativeground@gmail.com",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "46.601761",
        "Longitude": "-111.985425",
        "Street": "Airport Rd",
        "County": "Lewis And Clark County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.985425,
          46.601761
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Native Grounds Nursery",
        "Address": "37545 Hwy 228, Brownsville, OR, 97327",
        "City": "Brownsville",
        "State": "OR",
        "Zip Code": "97327",
        "Country": "USA",
        "Contact": "Mike or Keli",
        "Phone": "541.954.0148",
        "Fax": "541.466.3500",
        "Email": "nativegroundsnursery@gmail.com",
        "Website": "http://nativegroundsnursery.com/",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "44.368475",
        "Longitude": "-122.891533",
        "Street": "Halsey-Sweet Home Hwy",
        "County": "Linn County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.891533,
          44.368475
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Native Habitat Nursery",
        "Address": "14140 SE Palmer Creek Rd, Dayton, OR, 97114",
        "City": "Dayton",
        "State": "OR",
        "Zip Code": "97114",
        "Country": "USA",
        "Contact": "Spencer",
        "Phone": "503.864.4800",
        "Fax": "503.864.2489",
        "Website": "http://www.nativehabitatnursery.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "45.182833",
        "Longitude": "-123.09233",
        "Street": "SE Palmer Creek Rd",
        "County": "Yamhill County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.09233,
          45.182833
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Native Haunts",
        "Address": "297 Mountain Rd, Alfred, ME, 04002",
        "City": "Alfred",
        "State": "ME",
        "Zip Code": "04002",
        "Country": "USA",
        "Contact": "Shawn Jalbert",
        "Phone": "207.604.8655",
        "Email": "nativehaunts@gmail.com",
        "Website": "http://www.nativehaunts.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail",
        "Product": "Plants\nSeeds",
        "Latitude": "43.480275",
        "Longitude": "-70.768006",
        "Street": "Mountain Rd",
        "County": "York County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -70.768006,
          43.480275
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Native Here Nursery",
        "Address": "101 Golf Course Rd, Berkeley, CA, 94708",
        "City": "Berkeley",
        "State": "CA",
        "Zip Code": "94708",
        "Country": "USA",
        "Contact": "Amy McCosh Leonard",
        "Phone": "510.549.0211",
        "Email": "nativehere@ebcnps.org",
        "Email 2": "bunchgrassmarg@gmail.com",
        "Website": "http://ebcnps.org/",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Established": "1995",
        "Hours": "F 9-12 Sat 10-1",
        "Latitude": "37.947749",
        "Longitude": "-122.067526",
        "Street": "Moiso Ln",
        "County": "Contra Costa County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.067526,
          37.947749
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Native Landscapes Garden Center",
        "Address": "991 Rt 22, Pawling, NY, 12564",
        "City": "Pawling",
        "State": "NY",
        "Zip Code": "12564",
        "Country": "USA",
        "Contact": "Peter Muroski",
        "Phone": "845.855.7050",
        "Fax": "845.855.7016",
        "Email": "info@nativelandscaping.net",
        "Website": "http://www.nativelandscaping.net",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "41.593535",
        "Longitude": "-73.587558",
        "Street": "State Rte 22",
        "County": "Dutchess County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.587558,
          41.593535
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Native Landscapes Inc",
        "Address": "810 S Main St Unit A, Hailey, ID, 82333",
        "City": "Hailey",
        "State": "ID",
        "Zip Code": "82333",
        "Country": "USA",
        "Contact": "James Gillespie",
        "Phone": "208.578.2200",
        "Email": "james@native-landscapes.com",
        "Website": "http://www.native-landscapes.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "43.526911",
        "Longitude": "-114.320122",
        "Street": "Main St",
        "County": "Blaine County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -114.320122,
          43.526911
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Native Nurseries of Tallahassee Inc",
        "Address": "1661 Centerville Rd, Tallahassee, FL, 32308",
        "City": "Tallahassee",
        "State": "FL",
        "Zip Code": "32308",
        "Country": "USA",
        "Contact": "Elizabeth Georges",
        "Phone": "850.386.8882",
        "Fax": "850.386.2747",
        "Email": "elizabeth.native@gmail.com",
        "Website": "http://www.nativenurseries.com",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants\nSeeds",
        "Established": "1980",
        "Hours": "M-Fri 8-6; Sat 9-5",
        "Latitude": "30.469673",
        "Longitude": "-84.248413",
        "Street": "Centerville Rd",
        "County": "Leon County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.248413,
          30.469673
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Native Nursery",
        "Address": "17025 S Golden Rd, Golden, CO, 80401",
        "City": "Golden",
        "State": "CO",
        "Zip Code": "80401",
        "Country": "USA",
        "Contact": "Tom",
        "Phone": "303.278.3750",
        "Fax": "303.278.1127",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "39.737616",
        "Longitude": "-105.191937",
        "Street": "S Golden Rd",
        "County": "Jefferson County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -105.191937,
          39.737616
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Native Oak Nursery Supply",
        "Address": "Las Vegas, NV, 89123",
        "City": "NV",
        "State": "NV",
        "Zip Code": "89123",
        "Country": "USA",
        "Phone": "702.263.9198",
        "Product": "Plants",
        "Latitude": "36.035208",
        "Longitude": "-115.148777",
        "County": "Clark County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -115.148777,
          36.035208
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Native Ornamentals",
        "Address": "416 North Broadway Hwy 67, Mertzon, TX, 76941",
        "City": "Mertzon",
        "State": "TX",
        "Zip Code": "76941",
        "Country": "USA",
        "Contact": "Steve or Valerie",
        "Phone": "325.835.2021",
        "Email": "texican@zipnet.us",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "31.261525",
        "Longitude": "-100.816909",
        "Street": "N Broadway St",
        "County": "Irion County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -100.816909,
          31.261525
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Native Plant Farm & Tree Movers",
        "Address": "5005 Old US Hwy 395 N, Washoe Valley, NV, 89704",
        "City": "Washoe Valley",
        "State": "NV",
        "Zip Code": "89704",
        "Country": "USA",
        "Contact": "Pat",
        "Phone": "775.291.1977",
        "Email": "nativeplantfarm@gmail.com",
        "Website": "http://www.nativeplantfarm.com/index.html",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants\nSeeds",
        "Latitude": "39.265438",
        "Longitude": "-119.837045",
        "Street": "Old Us 395",
        "County": "Washoe County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.837045,
          39.265438
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Native Plant Growers",
        "Address": "111 Palm View Rd, Palm Meadow, FL, 34221",
        "City": "Palm Meadow",
        "State": "FL",
        "Zip Code": "34221",
        "Country": "USA",
        "Contact": "Sandy Mazer",
        "Phone": "941.723.5091",
        "Fax": "941.723.5075",
        "Email": "natplant@version.net",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "27.567104",
        "Longitude": "-82.564475",
        "Street": "Palm View Rd",
        "County": "Manatee County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.564475,
          27.567104
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Native Plant Source",
        "Address": "1098 Wurster Pl, Breslau, ON, N2B 3V5",
        "City": "Breslau",
        "State": "ON",
        "Zip Code": "N2B 3V5",
        "Country": "Canada",
        "Contact": "Jeff Thompson",
        "Phone": "519.748.2298",
        "Fax": "519.748.2788",
        "Email": "info@nativeplantsource.com",
        "Website": "http://www.nativeplantsource.com",
        "Nursery Type": "Private",
        "Business Type": "Retail\nContract",
        "Product": "Seeds",
        "Latitude": "0",
        "Longitude": "0"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          0,
          0
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Native Plant Trust Nursery",
        "Address": "128 North St, Whately, MA, 01373",
        "City": "Whately",
        "State": "MA",
        "Zip Code": "01373",
        "Country": "USA",
        "Contact": "Noni Macon",
        "Phone": "508.877.7630",
        "Fax": "508.877.3658",
        "Email": "nursery@NativePlantTrust.org",
        "Email 2": "hort@newfs.org",
        "Website": "http://www.NativePlantTrust.org",
        "Nursery Type": "Not-for-Profit",
        "Business Type": "Wholesale\nRetail\nContract",
        "Product": "Plants",
        "Established": "1900",
        "Hours": "Late April-mid-October Sat-Sunday 10-5",
        "Latitude": "42.461398",
        "Longitude": "-72.640932",
        "Street": "North St",
        "County": "Franklin County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.640932,
          42.461398
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Native Plants in Claremont",
        "Address": "4965 Westney Rd, Pickering/Claremont, ON, L1Y 1A2",
        "City": "Pickering/Claremont",
        "State": "ON",
        "Zip Code": "L1Y 1A2",
        "Country": "Canada",
        "Contact": "Karen Abrahams",
        "Email": "karen@nativeplants.ca",
        "Email 2": "karen.abrahams@sympatico.ca",
        "Website": "http://www.nativeplants.ca",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nContract",
        "Product": "Plants",
        "Latitude": "39.184484",
        "Longitude": "-84.671665",
        "Street": "Westin Rdg",
        "County": "Hamilton County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.671665,
          39.184484
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Native Revival Nursery",
        "Address": "2600 Mar Vista Dr, Aptos, CA, 95003",
        "City": "Aptos",
        "State": "CA",
        "Zip Code": "95003",
        "Country": "USA",
        "Contact": "Erin O'Doherty",
        "Phone": "831.684.1811",
        "Fax": "831.684.1811",
        "Email": "nativerevival@sbcglobal.net",
        "Email 2": "INFO@NATIVEREVIVAL.COM",
        "Website": "http://www.nativerevival.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nContract",
        "Product": "Plants",
        "Latitude": "36.982803",
        "Longitude": "-121.916532",
        "Street": "Mar Vista Dr",
        "County": "Santa Cruz County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.916532,
          36.982803
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Native Seed Foundation",
        "Address": "300 Main St, Hot Springs, MT, 59845",
        "City": "Hot Springs",
        "State": "MT",
        "Zip Code": "59845",
        "Country": "USA",
        "Contact": "Michael Billington",
        "Phone": "406.274.0691",
        "Fax": "406.741.2149",
        "Email": "info@nativeseedfoundation.com",
        "Website": "http://www.nativeseedfoundation.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Seeds",
        "Hours": "38902.0",
        "Latitude": "47.608626",
        "Longitude": "-114.671465",
        "Street": "Main St",
        "County": "Sanders County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -114.671465,
          47.608626
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Native Seeds  Inc",
        "Address": "14590 Triadelphia Mill Rd, Dayton, MD, 21036",
        "City": "Dayton",
        "State": "MD",
        "Zip Code": "21036",
        "Country": "USA",
        "Phone": "301.596.9818",
        "Fax": "301.854.3195",
        "Email": "saund10449@aol.com",
        "Nursery Type": "Private",
        "Product": "Seeds",
        "Latitude": "39.230169",
        "Longitude": "-77.022236",
        "Street": "Triadelphia Mill Rd",
        "County": "Howard County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.022236,
          39.230169
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Native Seeds/SEARCH",
        "Address": "3584 E River Rd, Tucson, AZ, 85718",
        "City": "Tucson",
        "State": "AZ",
        "Zip Code": "85718",
        "Country": "USA",
        "Contact": "Alexandra Zamecnik",
        "Phone": "520.622.5561",
        "Fax": "520.622.5591",
        "Email": "info@nativeseeds.org",
        "Email 2": "info@nativeseeds.org",
        "Website": "http://www.nativeseeds.org",
        "Nursery Type": "Not-for-Profit",
        "Business Type": "Retail\nMail",
        "Product": "Plants\nSeeds",
        "Latitude": "32.274805",
        "Longitude": "-110.916642",
        "Street": "E River Rd",
        "County": "Pima County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -110.916642,
          32.274805
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Native Sons Inc",
        "Address": "379 W El Campo Rd, Arroyo Grande, CA, 93420",
        "City": "Arroyo Grande",
        "State": "CA",
        "Zip Code": "93420",
        "Country": "USA",
        "Contact": "Jennifer Scarano",
        "Phone": "805.481.5996",
        "Fax": "805.489.1991",
        "Email": "jscarano@nativeson.com",
        "Email 2": "sales@nativeson.com",
        "Website": "http://www.nativeson.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "35.081988",
        "Longitude": "-120.569401",
        "Street": "W El Campo Rd",
        "County": "San Luis Obispo County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.569401,
          35.081988
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Native Springs Nursery",
        "Address": "PO Box 4071, Yankeehill, CA, 95965",
        "City": "Yankeehill",
        "State": "CA",
        "Zip Code": "95965",
        "Country": "USA",
        "Contact": "Debra Fau",
        "Phone": "530.514.8578",
        "Email": "nativespringsnursery@yahoo.com",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "39.703496",
        "Longitude": "-121.522192",
        "County": "Butte County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.522192,
          39.703496
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Native Sun Home & Garden Nursery",
        "Address": "1047 S Hwy 80, Benson, AZ, 85602",
        "City": "Benson",
        "State": "AZ",
        "Zip Code": "85602",
        "Country": "USA",
        "Contact": "Cynthia Speir",
        "Phone": "520.586.4525",
        "Email": "cindy@native.sun.net",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "31.971187",
        "Longitude": "-110.320188",
        "Street": "State Rte 80",
        "County": "Cochise County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -110.320188,
          31.971187
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Native Technologies Inc",
        "Address": "6466 NW 5th Way, Fort Lauderdale, FL, 33309",
        "City": "Fort Lauderdale",
        "State": "FL",
        "Zip Code": "33309",
        "Country": "USA",
        "Contact": "Rob Miller",
        "Phone": "954.596.2411",
        "Phone 2": "954.523.5236",
        "Fax": "954.462.7011",
        "Email": "inquiry@nativetechnologiesinc.com",
        "Nursery Type": "Private",
        "Business Type": "Contract",
        "Product": "Plants",
        "Latitude": "26.207766",
        "Longitude": "-80.149777",
        "Street": "NW 5th Way",
        "County": "Broward County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.149777,
          26.207766
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Native Texas Nursery",
        "Address": "16019 Milo Rd, Austin, TX, 78725",
        "City": "Austin",
        "State": "TX",
        "Zip Code": "78725",
        "Country": "USA",
        "Contact": "James Plyler",
        "Phone": "512.276.9801",
        "Fax": "512.276.9820",
        "Email": "sales@nativetx.com",
        "Website": "http://www.nativetxnursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Seeds",
        "Latitude": "30.223995",
        "Longitude": "-97.559395",
        "Street": "Milo Rd",
        "County": "Travis County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.559395,
          30.223995
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Native Tree Farm",
        "Address": "3302 Primrose Trl, 9201 Hwy 29 E, Georgetown, TX, 78628",
        "City": "9201 Hwy 29 E",
        "State": "TX",
        "Zip Code": "78628",
        "Country": "USA",
        "Phone": "512.630.3069",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "30.668194",
        "Longitude": "-97.692405",
        "Street": "Primrose Trl",
        "County": "Williamson County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.692405,
          30.668194
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Native Tree Nursery Inc",
        "Address": "17250 SW 232nd St, Miami, FL, 33170",
        "City": "Miami",
        "State": "FL",
        "Zip Code": "33170",
        "Country": "USA",
        "Contact": "Hugh Forthman Jr",
        "Phone": "305.247.4499",
        "Fax": "305.247.4471",
        "Email": "Sales@NativeTreeNursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "25.550784",
        "Longitude": "-80.470588",
        "Street": "SW 232nd St",
        "County": "Miami-Dade County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.470588,
          25.550784
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Native and Uncommon Plants",
        "Address": "13377 Grover Rd, Jacksonville, FL, 32226",
        "City": "Jacksonville",
        "State": "FL",
        "Zip Code": "32226",
        "Country": "USA",
        "Contact": "Alfred and Leslie Romeu",
        "Phone": "904.388.9851",
        "Email": "goingnativejax@gmail.com",
        "Website": "http://www.nativeanduncommonplants.com",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "30.477999",
        "Longitude": "-81.550452",
        "Street": "Grover Rd",
        "County": "Duval County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.550452,
          30.477999
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Natives of Texas",
        "Address": "4256 Medina Hwy, Kerrville, TX, 78028",
        "City": "Kerrville",
        "State": "TX",
        "Zip Code": "78028",
        "Country": "USA",
        "Phone": "830.896.2169",
        "Fax": "830.257.3322",
        "Email": "dwinningham@mac.com",
        "Website": "http://www.nativesoftexas.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nContract",
        "Product": "Plants\nSeeds",
        "Established": "1995",
        "Hours": "M-Sat 9-4 Su 11-4",
        "Latitude": "29.933976",
        "Longitude": "-99.233986",
        "Street": "Medina Hwy",
        "County": "Kerr County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -99.233986,
          29.933976
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "NativesWest Nursery & Eco-Services LLC",
        "Address": "155 Falcon Ridge Rd, Kooskia, ID, 83539",
        "City": "Kooskia",
        "State": "ID",
        "Zip Code": "83539",
        "Country": "USA",
        "Contact": "Galahad or Kahne Blyth",
        "Phone": "208.926.7707",
        "Fax": "208.926.7707",
        "Email": "kahneblyth@wildblue.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Established": "2000",
        "Hours": "M-F 9-5:30 Sat 9-4:30 Feb-Nov",
        "Latitude": "46.115992",
        "Longitude": "-115.945949",
        "County": "Idaho County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -115.945949,
          46.115992
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Natural Garden Natives",
        "Address": "6N800 IL Rte 25, St Charles, IL, 60174",
        "City": "St Charles",
        "State": "IL",
        "Zip Code": "60174",
        "Country": "USA",
        "Contact": "Midwest Groundcovers",
        "Phone": "847.742.1792",
        "Fax": "847.742.2655",
        "Email": "mgsales@midwestgroundcovers.com",
        "Website": "http://www.naturalgardennatives.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants\nSeeds",
        "Latitude": "41.970085",
        "Longitude": "-88.285242",
        "Street": "Illinois Route 25",
        "County": "Kane County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.285242,
          41.970085
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Natural Habitat Gardens",
        "Address": "RR  1  S15A  C35, Sorrento, BC, V0E 2W0",
        "City": "Sorrento",
        "State": "BC",
        "Zip Code": "V0E 2W0",
        "Country": "Canada",
        "Contact": "Trish Wallensteen",
        "Phone": "250.835.2221",
        "Email": "kevin&trish@telus.net",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "0",
        "Longitude": "0"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          0,
          0
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Natural Landscapes Nursery",
        "Address": "354 N Jennersville Rd, West Grove, PA, 19390",
        "City": "West Grove",
        "State": "PA",
        "Zip Code": "19390",
        "Country": "USA",
        "Contact": "Jim Plyler",
        "Phone": "610.869.3788",
        "Fax": "610.869.3788",
        "Email": "naturallands@gmail.com",
        "Website": "http://www.naturallandscapesnursery.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Established": "1986",
        "Hours": "Please call",
        "Latitude": "39.832195",
        "Longitude": "-75.868057",
        "Street": "N Jennersville Rd",
        "County": "Chester County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.868057,
          39.832195
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Natural Natives Inc ",
        "Address": "432 Boys Acres Dr, Seneca, SC, 29678",
        "City": "Seneca",
        "State": "SC",
        "Zip Code": "29678",
        "Country": "USA",
        "Contact": "Nancy or Michael Martin",
        "Phone": "864.888.5231",
        "Email": "NaturalNativesInc@gmail.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "34.640547",
        "Longitude": "-82.900452",
        "Street": "Boys Acres Dr",
        "County": "Oconee County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.900452,
          34.640547
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Natural Shore Technologies Inc",
        "Address": "5300 Hwy 12, Maple Plain, MN, 55359",
        "City": "Maple Plain",
        "State": "MN",
        "Zip Code": "55359",
        "Country": "USA",
        "Contact": "Rob Langer",
        "Phone": "612.703.7581",
        "Email": "rob@naturalshore.com",
        "Website": "http://www.naturalshore.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nContract",
        "Product": "Plants",
        "Latitude": "45.009097",
        "Longitude": "-93.658508",
        "Street": "Highway 12",
        "County": "Hennepin County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.658508,
          45.009097
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Naturally Native Nursery",
        "Address": "20525 Johnson Rd, South Bend, IN, 46614",
        "City": "South Bend",
        "State": "IN",
        "Zip Code": "46614",
        "Country": "USA",
        "Contact": "Jan Hunter",
        "Phone": "419.833.2020",
        "Email": "nnn@naturallynative.net",
        "Website": "http://www.naturallynative.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail",
        "Product": "Plants",
        "Latitude": "41.617027",
        "Longitude": "-86.264213",
        "Street": "Johnson Rd",
        "County": "St. Joseph County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.264213,
          41.617027
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Nature By Design",
        "Address": "300 Calvert Ave, Alexandria, VA, 22301",
        "City": "Alexandria",
        "State": "VA",
        "Zip Code": "22301",
        "Country": "USA",
        "Contact": "Randee Wilson",
        "Phone": "703.683.GROW",
        "Fax": "703.519.GROW",
        "Email": "plantfolks@nature-by-design.com",
        "Website": "http://www.nature-by-design.com",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants\nSeeds",
        "Latitude": "38.830067",
        "Longitude": "-77.054579",
        "Street": "Calvert Ave",
        "County": "Alexandria City"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.054579,
          38.830067
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Nature Hills Nursery Inc",
        "Address": "9910 N 48th St Ste 200, Omaha, NE, 68152",
        "City": "Omaha",
        "State": "NE",
        "Zip Code": "68152",
        "Country": "USA",
        "Contact": "Jeff Dinslage",
        "Phone": "402.934.8116",
        "Fax": "402.991.0778",
        "Email": "info@naturehills.com",
        "Website": "http://www.naturehills.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "41.349749",
        "Longitude": "-95.986066",
        "Street": "N 48th St",
        "County": "Douglas County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.986066,
          41.349749
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Nature's Enhancement Inc",
        "Address": "2980 Eastside Hwy, Stevensville, MT, 59870",
        "City": "Stevensville",
        "State": "MT",
        "Zip Code": "59870",
        "Country": "USA",
        "Contact": "Julie Monk",
        "Phone": "406.777.3560",
        "Fax": "406.777.3560",
        "Email": "natures_enhancement_inc@msn.com",
        "Email 2": "neinc2@msn.com",
        "Website": "http://www.naturesenhancementinc.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nContract\nNo Public Sales",
        "Product": "Plants\nServices",
        "Established": "1995",
        "Hours": "M-F 8-4:30",
        "Latitude": "46.439929",
        "Longitude": "-114.09243",
        "Street": "Eastside Hwy",
        "County": "Ravalli County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -114.09243,
          46.439929
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Nature's Garden Seed Company",
        "Address": "2978 Woodridge Place, Victoria, BC, V9E 1C8",
        "City": "Victoria",
        "State": "BC",
        "Zip Code": "V9E 1C8",
        "Country": "Canada",
        "Phone": "250.595.2062",
        "Email": "mail@naturesgardenseed.com",
        "Website": "http://www.naturesgardenseed.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail\nInternet",
        "Product": "Seeds",
        "Established": "1994",
        "Hours": "M-F 10.00-16.00 pacific time",
        "Latitude": "28.863845",
        "Longitude": "-97.026527",
        "Street": "Woodridge Dr",
        "County": "Victoria County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.026527,
          28.863845
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Nearly Native Nursery",
        "Address": "776 McBride Rd, Fayetteville, GA, 30215",
        "City": "Fayetteville",
        "State": "GA",
        "Zip Code": "30215",
        "Country": "USA",
        "Contact": "Debi Rodgers",
        "Phone": "770.460.6284",
        "Fax": "770.460.7050",
        "Email": "info@NearlyNativeNursery.com",
        "Website": "http://nearlynativenursery.com",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "33.382567",
        "Longitude": "-84.47343",
        "Street": "McBride Rd",
        "County": "Fayette County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.47343,
          33.382567
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Needlefast Evergreens Inc",
        "Address": "4075 W Hansen Rd, Ludington, MI, 49431",
        "City": "Ludington",
        "State": "MI",
        "Zip Code": "49431",
        "Country": "USA",
        "Contact": "James Nickelson",
        "Phone": "231.843.8524",
        "Fax": "231.843.1887",
        "Email": "nickel@needlefastevergreens.com",
        "Website": "http://www.needlefastevergreens.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail\nInternet",
        "Product": "Plants\nSeeds",
        "Established": "1957",
        "Hours": "M-F 8-5 Sat 8-noon",
        "Latitude": "43.977747",
        "Longitude": "-86.380826",
        "Street": "W Hansen Rd",
        "County": "Mason County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.380826,
          43.977747
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "New England Environmental Services",
        "Address": "155 Jerry Daniels Rd, Marlborough, CT, 06477",
        "City": "Marlborough",
        "State": "CT",
        "Zip Code": "06477",
        "Country": "USA",
        "Contact": "Richard Snarski",
        "Phone": "860.295.1022",
        "Phone 2": "860.918.1976",
        "Fax": "860.295.1022",
        "Email": "richsnarski@gmail.com",
        "Website": "http://www.richsnarski.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "41.622405",
        "Longitude": "-72.423039",
        "Street": "Jerry Daniels Rd",
        "County": "Capitol Planning Region"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.423039,
          41.622405
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "New England Wetland Plants Inc",
        "Address": "820 West St, Amherst, MA, 01002",
        "City": "Amherst",
        "State": "MA",
        "Zip Code": "01002",
        "Country": "USA",
        "Contact": "Dave Anderson",
        "Phone": "413.548.8000",
        "Fax": "413.549.4000",
        "Email": "info@newp.com",
        "Email 2": "danderson@newp.cpm",
        "Website": "http://www.newp.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants\nSeeds",
        "Established": "1996",
        "Hours": "M, Tu, W, Th, F 8am - 4pm",
        "Latitude": "42.328551",
        "Longitude": "-72.523086",
        "Street": "West St",
        "County": "Hampshire County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.523086,
          42.328551
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "New Hampshire State Forest Nursery",
        "Address": "405 Daniel Webster Hwy, Boscawen, NH, 03303",
        "City": "Boscawen",
        "State": "NH",
        "Zip Code": "03303",
        "Country": "USA",
        "Contact": "Daniel DeHart",
        "Phone": "603.796.2323",
        "Fax": "603.796.2266",
        "Email": "ddehart@dred.state.nh.us",
        "Email 2": "nurseryc@dred.state.nh.us",
        "Website": "http://www.nhnursery.com",
        "Nursery Type": "State",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "43.366585",
        "Longitude": "-71.650855",
        "Street": "Daniel Webster Hwy",
        "County": "Merrimack County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.650855,
          43.366585
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "New Jersey Division of Parks and Forestry - Forest Tree Nursery",
        "Address": "370 E Veterans Hwy, Jackson, NJ, 08527-0396",
        "City": "Jackson",
        "State": "NJ",
        "Zip Code": "08527-0396",
        "Country": "USA",
        "Contact": "Michael Vorwerk",
        "Phone": "732.928.0029",
        "Fax": "732.928.4925",
        "Email": "James.Douglas@dep.nj.gov",
        "Website": "http://www.state.nj.us/dep/parksandforests/forest/nj_forest_nursery.htm",
        "Nursery Type": "State",
        "Business Type": "Retail",
        "Product": "Plants",
        "Hours": "M-F 7:30-4",
        "Latitude": "40.099969",
        "Longitude": "-74.316355",
        "Street": "E Veterans Hwy",
        "County": "Ocean County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.316355,
          40.099969
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "New Life Nursery Inc",
        "Address": "3720 64th St, Holland, MI, 49423",
        "City": "Holland",
        "State": "MI",
        "Zip Code": "49423",
        "Country": "USA",
        "Contact": "Steve Genzink",
        "Phone": "269.857.1209",
        "Fax": "269.857.1770",
        "Email": "sgenzink@newlifenursery.com",
        "Website": "http://www.newlifenursery.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Seeds",
        "Latitude": "42.690265",
        "Longitude": "-86.177734",
        "Street": "64th St",
        "County": "Allegan County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.177734,
          42.690265
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "New Mexico Forestry Division",
        "Address": "1220 S St Francis Dr, Santa Fe, NM, 87504-1948",
        "City": "Santa Fe",
        "State": "NM",
        "Zip Code": "87504-1948",
        "Country": "USA",
        "Contact": "Carol",
        "Phone": "505.476.3334",
        "Fax": "505.476.3330",
        "Website": "http://www.emnrd.state.nm.us/SFD/",
        "Nursery Type": "State",
        "Product": "Plants",
        "Latitude": "35.669189",
        "Longitude": "-105.957593",
        "Street": "S St Francis Dr",
        "County": "Santa Fe County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -105.957593,
          35.669189
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "New Mexico State University - Mora Research Center",
        "Address": "State Hwy 518, Mora, NM, 87732",
        "City": "Mora",
        "State": "NM",
        "Zip Code": "87732",
        "Country": "USA",
        "Contact": "Benjamin Epinoza",
        "Phone": "575.387.2319",
        "Fax": "575.387.9012",
        "Email": "moraasc@nmsu.edu",
        "Nursery Type": "State",
        "Product": "Plants",
        "Latitude": "35.9742",
        "Longitude": "-105.33001",
        "County": "Mora County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -105.33001,
          35.9742
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "New Moon Nursery LLC",
        "Address": "910 Kings Hwy, Woodtown, NJ, 08098",
        "City": "Woodtown",
        "State": "NJ",
        "Zip Code": "08098",
        "Country": "USA",
        "Contact": "James or Kimberly Brown",
        "Phone": "888.998.1951",
        "Fax": "888.998.1952",
        "Email": "info@newmoonnursery.com",
        "Website": "http://www.newmoonnursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "39.646592",
        "Longitude": "-75.37462",
        "Street": "Kings Hwy",
        "County": "Salem County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.37462,
          39.646592
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "New World Botanical",
        "Address": "2701 Lone Star Pkwy, Montgomery, TX, 77356",
        "City": "Montgomery",
        "State": "TX",
        "Zip Code": "77356",
        "Country": "USA",
        "Phone": "936.689.8751",
        "Fax": "936.582.6462",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "30.39863",
        "Longitude": "-95.708312",
        "Street": "Lone Star Pkwy",
        "County": "Montgomery County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.708312,
          30.39863
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "New York State Department of Environmental Conservation | Saratoga Tree Nursery",
        "Address": "2369 Route 50, Saratoga Springs, NY, 12866",
        "City": "Saratoga Springs",
        "State": "NY",
        "Zip Code": "12866",
        "Country": "USA",
        "Contact": "David Lee",
        "Phone": "518.581.1439",
        "Phone 2": "518.587.1120",
        "Fax": "518.581.8017",
        "Email": "nysnursery@dec.ny.gov",
        "Website": "http://www.dec.ny.gov/animals/7127.html",
        "Nursery Type": "State",
        "Business Type": "Retail",
        "Product": "Plants\nSeeds",
        "Latitude": "43.040022",
        "Longitude": "-73.82155",
        "Street": "State Rte 50",
        "County": "Saratoga County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.82155,
          43.040022
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "New York State Dept of Environmental Conservation - Saratoga Tree Nursery",
        "Address": "2369 Rt 50, Saratoga Springs, NY, 12866",
        "City": "Saratoga Springs",
        "State": "NY",
        "Zip Code": "12866",
        "Country": "USA",
        "Contact": "David J. Lee",
        "Phone": "518.581.1439",
        "Fax": "518.581.8017",
        "Email": "djlee@gw.dec.state.ny.us",
        "Website": "http://www.dec.ny.gov/",
        "Nursery Type": "State",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "43.040022",
        "Longitude": "-73.82155",
        "Street": "State Rte 50",
        "County": "Saratoga County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.82155,
          43.040022
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Newaygo Conservation District Nursery",
        "Address": "1725 E 72nd St, Newaygo, MI, 49337",
        "City": "Newaygo",
        "State": "MI",
        "Zip Code": "49337",
        "Country": "USA",
        "Contact": "Lousie Brock",
        "Phone": "231.652.7493",
        "Fax": "231.652.4776",
        "Email": "nursery@mailriverview.net",
        "Nursery Type": "State",
        "Business Type": "Wholesale\nRetail",
        "Product": "Seeds",
        "Latitude": "43.425124",
        "Longitude": "-85.759884",
        "Street": "E 72nd St",
        "County": "Newaygo County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.759884,
          43.425124
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Newpage corp",
        "Address": "7100 County 426, Escanaba, MI, 49829",
        "City": "Escanaba",
        "State": "MI",
        "Zip Code": "49829",
        "Country": "USA",
        "Contact": "Mary Jo Carlson",
        "Phone": "906.786.1660",
        "Fax": "906.789.3253",
        "Website": "http://lander.versoco.com/",
        "Nursery Type": "Forest Industry",
        "Product": "Plants",
        "Latitude": "45.762816",
        "Longitude": "-87.069292",
        "Street": "County Rd 426",
        "County": "Delta County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.069292,
          45.762816
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Nicholls Gardens",
        "Address": "4724 Angus Dr, Gainesville, VA, 20155",
        "City": "Gainesville",
        "State": "VA",
        "Zip Code": "20155",
        "Country": "USA",
        "Phone": "703.754.9623",
        "Fax": "703.754.9623",
        "Email": "nichollsgardens@juno.com",
        "Nursery Type": "Private",
        "Business Type": "Retail\nMail\nInternet",
        "Product": "Plants",
        "Latitude": "38.853521",
        "Longitude": "-77.60996",
        "Street": "Angus Dr",
        "County": "Prince William County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.60996,
          38.853521
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Nick's Nursery Inc",
        "Address": "6675 SE Ave, Homosassa Springs, FL, 34447",
        "City": "Homosassa Springs",
        "State": "FL",
        "Zip Code": "34447",
        "Country": "USA",
        "Contact": "John",
        "Phone": "352.628.3098",
        "Fax": "352.628.7515",
        "Email": "nicksnurserytreefarm@yahoo.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "28.804911",
        "Longitude": "-82.574264",
        "County": "Citrus County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.574264,
          28.804911
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Nighthawk Natives Nursery & Wildlands Restoration",
        "Address": "2944 N Castro Ave, Tucson, AZ, 85705",
        "City": "Tucson",
        "State": "AZ",
        "Zip Code": "85705",
        "Country": "USA",
        "Contact": "Bernadette Jilka or Gary Maskarinec",
        "Phone": "520.882.0969",
        "Fax": "520.882.0969",
        "Email": "nighthawknatives@gmail.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail\nContract",
        "Product": "Plants\nSeeds",
        "Latitude": "32.260756",
        "Longitude": "-110.973595",
        "Street": "N Castro Ave",
        "County": "Pima County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -110.973595,
          32.260756
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Nighthawks Natives Nursery | Wildlands Restoration",
        "Address": "2944 N Castro, Tucson, AZ, 85705",
        "City": "Tucson",
        "State": "AZ",
        "Zip Code": "85705",
        "Country": "USA",
        "Contact": "Bernadette Jilka or Gary Maskarinee",
        "Phone": "520.882.0969",
        "Email": "garyberni@aol.com",
        "Nursery Type": "Private",
        "Product": "Plants\nSeeds",
        "Latitude": "32.260756",
        "Longitude": "-110.973595",
        "Street": "N Castro Ave",
        "County": "Pima County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -110.973595,
          32.260756
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Nodding Onion Gardens",
        "Address": "10031 Dupont St, Columbia Station, OH, 44028",
        "City": "Columbia Station",
        "State": "OH",
        "Zip Code": "44028",
        "Country": "USA",
        "Contact": "Beth & Marty Coyne",
        "Phone": "440.503.0086",
        "Phone 2": "440.503.2518",
        "Email": "noddingoniongardens@gmail.com",
        "Website": "http://www.noddingoniongardens.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants\nSeeds",
        "Latitude": "41.348496",
        "Longitude": "-81.88995",
        "Street": "Dupont Dr",
        "County": "Lorain County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.88995,
          41.348496
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Norfarm Seeds Inc",
        "Address": "104 Minnesota Ave SW, Bemidji, MN, 56601",
        "City": "Bemidji",
        "State": "MN",
        "Zip Code": "56601",
        "Country": "USA",
        "Contact": "Dennis Montgomery",
        "Phone": "218.751.8617",
        "Fax": "218.751.0485",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Seeds",
        "Latitude": "47.468787",
        "Longitude": "-94.882555",
        "Street": "Minnesota Ave SW",
        "County": "Beltrami County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.882555,
          47.468787
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "North Carolina Division of Forest Resources - Linville River Nursery",
        "Address": "6321 Linville Falls Hwy, Newland, NC, 28657",
        "City": "Newland",
        "State": "NC",
        "Zip Code": "28657",
        "Country": "USA",
        "Contact": "Anna",
        "Phone": "828.733.5236",
        "Fax": "828.733.9399",
        "Email": "anna.hollifield@nc.agr.gov",
        "Website": "http://www.dfr.state.nc.us/",
        "Nursery Type": "State",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "35.9919",
        "Longitude": "-81.942949",
        "Street": "Linville Falls Hwy",
        "County": "Avery County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.942949,
          35.9919
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "North Carolina Forest Service",
        "Address": "762 Claridge Nursery Rd, Goldsboro, NC, 27530",
        "City": "Goldsboro",
        "State": "NC",
        "Zip Code": "27530",
        "Country": "USA",
        "Contact": "James West",
        "Phone": "919.731.7988",
        "Fax": "919.731.7993",
        "Email": "christie.adams@ncagr.gov",
        "Website": "http://www.ncforestservice.gov",
        "Nursery Type": "State",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "35.427386",
        "Longitude": "-78.017588",
        "Street": "Claridge Nursery Rd",
        "County": "Wayne County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.017588,
          35.427386
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "North Coast Native Nursery",
        "Address": "2700 Chileno Valley Rd, Petaluma, CA, 94953",
        "City": "Petaluma",
        "State": "CA",
        "Zip Code": "94953",
        "Country": "USA",
        "Phone": "707.769.1213",
        "Fax": "707.769.1230",
        "Email": "dave@pacificopenspace.com",
        "Website": "http://northcoastnativenursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Established": "1987",
        "Hours": "M-F 8-4",
        "Latitude": "38.202144",
        "Longitude": "-122.716738",
        "Street": "Chileno Valley Rd",
        "County": "Marin County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.716738,
          38.202144
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "North Creek Nurseries Inc",
        "Address": "388 N Creek Rd, Landenberg, PA, 19350",
        "City": "Landenberg",
        "State": "PA",
        "Zip Code": "19350",
        "Country": "USA",
        "Contact": "Kevin Staso",
        "Phone": "610.255.0100",
        "Fax": "610.255.4762",
        "Email": "info@northcreeknurseries.com",
        "Email 2": "info@northcreeknurseries.com",
        "Website": "http://northcreeknurseries.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "39.777129",
        "Longitude": "-75.811197",
        "Street": "N Creek Rd",
        "County": "Chester County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.811197,
          39.777129
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "North Dakota State Forest Service - Towner State Nursery",
        "Address": "878 Nursery Rd, Towner, ND, 58788-9500",
        "City": "Towner",
        "State": "ND",
        "Zip Code": "58788-9500",
        "Country": "USA",
        "Contact": "Jeff Smette",
        "Phone": "701.537.5636",
        "Fax": "701.537.5680",
        "Email": "Jeffrey.Smette@ndsu.edu",
        "Nursery Type": "State",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "48.363638",
        "Longitude": "-100.4854",
        "County": "McHenry County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -100.4854,
          48.363638
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "North Fork Native Plants",
        "Address": "1499 S 6000 W, Rexburg, ID, 83440",
        "City": "Rexburg",
        "State": "ID",
        "Zip Code": "83440",
        "Country": "USA",
        "Contact": "Tim Watters",
        "Phone": "208.354.3691",
        "Fax": "208.354.3790",
        "Email": "tim@northforknativeplants.com",
        "Website": "http://www.northforknativeplants.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nContract",
        "Product": "Plants",
        "Established": "2003",
        "Hours": "8-5",
        "Latitude": "43.801271",
        "Longitude": "-111.897809",
        "Street": "S 6000 W",
        "County": "Madison County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.897809,
          43.801271
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "North Sun Nurseries Inc",
        "Address": "Hwy 66 to Watabeag Rd, Swastika, ON, P0K 1T0",
        "City": "Swastika",
        "State": "ON",
        "Zip Code": "P0K 1T0",
        "Country": "Canada",
        "Contact": "Don Lauzon",
        "Phone": "705.567.3372",
        "Fax": "705.567.3375",
        "Email": "northsun@ntl.sympatico.ca",
        "Nursery Type": "Private",
        "Business Type": "Contract",
        "Product": "Plants",
        "Latitude": "0",
        "Longitude": "0"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          0,
          0
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Northern Lights Silviculture",
        "Address": "41481 CR 63, Cohasset, MN, 55721",
        "City": "Cohasset",
        "State": "MN",
        "Zip Code": "55721",
        "Country": "USA",
        "Phone": "218.328.4056",
        "Email": "gdlegler@2z.net",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "47.223803",
        "Longitude": "-93.734026",
        "Street": "County Rd 63",
        "County": "Itasca County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.734026,
          47.223803
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Northern Pines Nursery",
        "Address": "2300 S Morey Rd, Lake City, MI, 49651",
        "City": "Lake City",
        "State": "MI",
        "Zip Code": "49651",
        "Country": "USA",
        "Contact": "Scott Powell",
        "Phone": "231.839.3277",
        "Fax": "231.839.3331",
        "Email": "scott@northernpinesnurseries.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Seeds",
        "Latitude": "44.304258",
        "Longitude": "-85.215152",
        "Street": "S Morey Rd",
        "County": "Missaukee County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.215152,
          44.304258
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Nova Scotia Dept of Natural Resources - Strathlorne Forest Nursery",
        "Address": "15039 Rt 19, Inverness, NS, B0E 1N0",
        "City": "Inverness",
        "State": "NS",
        "Zip Code": "B0E 1N0",
        "Country": "Canada",
        "Contact": "Sean Gillis ",
        "Phone": "902.258.2626",
        "Fax": "902.258.2330",
        "Email": "gillis@bs.gov.na.ca",
        "Nursery Type": "State",
        "Business Type": "Wholesale",
        "Product": "Seeds",
        "Latitude": "41.621045",
        "Longitude": "-87.602932",
        "Street": "Irving Ave",
        "County": "Cook County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.602932,
          41.621045
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "O'Donnells Fairfax Nursery",
        "Address": "1700 Sir Francis Drake Blvd, Fairfax, CA, 94930",
        "City": "Fairfax",
        "State": "CA",
        "Zip Code": "94930",
        "Country": "USA",
        "Contact": "Mitchelle",
        "Phone": "415.453.0372",
        "Fax": "415.453.3109",
        "Email": "  info@odonnellsfairfaxnursery.com",
        "Email 2": "info@odonnellsnursery.com",
        "Website": "http://www.odonnellsnursery.com/ODonnells_Fairfax_Nursery/Welcome.html",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "37.986808",
        "Longitude": "-122.58281",
        "Street": "Sir Francis Drake Blvd",
        "County": "Marin County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.58281,
          37.986808
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "OASIS Environmental Native Nursery",
        "Address": "1 9th St Island Dr, Livingston, MT, 59047",
        "City": "Livingston",
        "State": "MT",
        "Zip Code": "59047",
        "Country": "USA",
        "Contact": "Jeannette Blank",
        "Phone": "406.222.7600",
        "Fax": "406.222.7677",
        "Email": "jeannette.blank@erm.com",
        "Email 2": "nursery@oasisenviro.com",
        "Website": "http://www.erm.com/alaska",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "45.640891",
        "Longitude": "-110.564843",
        "Street": "9th St Island Dr",
        "County": "Park County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -110.564843,
          45.640891
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Oak Point Nursery",
        "Address": "2300 Independence Way, Independence, OR, 97351",
        "City": "Independence",
        "State": "OR",
        "Zip Code": "97351",
        "Country": "USA",
        "Phone": "503.508.9555",
        "Email": "tim@oakpointnursery.com",
        "Website": "http://www.oakpointnursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "44.901342",
        "Longitude": "-123.162109",
        "Street": "Independence Hw",
        "County": "Polk County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.162109,
          44.901342
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Oaks of the Wild West",
        "Address": "10520 S Samuel Rd, Hereford, AZ, 85615",
        "City": "Hereford",
        "State": "AZ",
        "Zip Code": "85615",
        "Country": "USA",
        "Contact": "Gary Foss",
        "Phone": "520.220.0951",
        "Email": "plants@OaksOfTheWildWest.com",
        "Website": "http://www.OaksOfTheWildWest.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "31.37603",
        "Longitude": "-110.164848",
        "Street": "S Samuel Rd",
        "County": "Cochise County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -110.164848,
          31.37603
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Oasis Tree Farms",
        "Address": "372 S Barfield Hwy, Pahokee, FL, 33476",
        "City": "Pahokee",
        "State": "FL",
        "Zip Code": "33476",
        "Country": "USA",
        "Contact": "Andre Lacroix",
        "Phone": "561.924.2400",
        "Fax": "561.924.3034",
        "Email": "info@everde.com",
        "Website": "http://www.treetownusa.com/",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "26.818706",
        "Longitude": "-80.66099",
        "Street": "S Barfield Hwy",
        "County": "Palm Beach County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.66099,
          26.818706
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Obsidian Seed Company",
        "Address": "9655 NE Myrtle Ave, Madras, OR, 97741",
        "City": "Madras",
        "State": "OR",
        "Zip Code": "97741",
        "Country": "USA",
        "Contact": "Sean",
        "Phone": "541.475.7309",
        "Fax": "541.475.7585",
        "Email": "meganv@madras.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Seeds",
        "Established": "1972",
        "Latitude": "44.775323",
        "Longitude": "-121.083045",
        "Street": "NE Myrtle St",
        "County": "Jefferson County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.083045,
          44.775323
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Octoraro Native Plant Nursery",
        "Address": "6126 Street Rd, Kirkwood, PA, 17536",
        "City": "Kirkwood",
        "State": "PA",
        "Zip Code": "17536",
        "Country": "USA",
        "Contact": "Jim MacKenzie",
        "Phone": "717.529.3160",
        "Fax": "717.529.4099",
        "Email": "jim@octoraro.com",
        "Website": "www.octoraro.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Established": "1990",
        "Hours": "8-3:30, M, Tu, W, Th, F",
        "Latitude": "39.8433",
        "Longitude": "-76.106548",
        "Street": "Street Rd",
        "County": "Lancaster County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.106548,
          39.8433
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Ohio Prairie Nursery",
        "Address": "PO Box 174, Hiram, OH, 44234",
        "City": "Hiram",
        "State": "OH",
        "Zip Code": "44234",
        "Country": "USA",
        "Contact": "Dave Riddell",
        "Phone": "866.569.3380",
        "Fax": "330.569.7090",
        "Email": "info@opnseed.com",
        "Website": "http://www.ohioprairienursery.com",
        "Nursery Type": "Private",
        "Business Type": "Retail\nMail",
        "Product": "Seeds",
        "Established": "1997",
        "Hours": "M-F 9-4:30",
        "Latitude": "41.310354",
        "Longitude": "-81.1652",
        "County": "Portage County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.1652,
          41.310354
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Oikos Tree Crops",
        "Address": "PO Box 19425, Kalamazoo, MI, 49019",
        "City": "Kalamazoo",
        "State": "MI",
        "Zip Code": "49019",
        "Country": "USA",
        "Contact": "Ken Asmus",
        "Email": "oikostreecrops@gmail.com",
        "Website": "https://oikostreecrops.com/",
        "Nursery Type": "Private",
        "Business Type": "Mail\nResearch",
        "Product": "Seeds",
        "Latitude": "42.245412",
        "Longitude": "-85.529858",
        "County": "Kalamazoo County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.529858,
          42.245412
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Oklahoma Dept of Agriculture - Albert Engstrom Forest Regeneration Center",
        "Address": "830 NE 12th Ave, Goldsby, OK, 73093",
        "City": "Goldsby",
        "State": "OK",
        "Zip Code": "73093",
        "Country": "USA",
        "Phone": "405.288.2385",
        "Fax": "405.288.6326",
        "Email": "Ranae.Moyer@ag.ok.gov",
        "Website": "http://www.forestry.ok.gov",
        "Nursery Type": "State",
        "Business Type": "Wholesale",
        "Product": "Seeds",
        "Latitude": "35.155516",
        "Longitude": "-97.458964",
        "Street": "NE 12th Ave",
        "County": "McClain County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.458964,
          35.155516
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Old Ridge Nursery",
        "Address": "PO Box 334, Calais, ME, 04619-0334",
        "City": "Calais",
        "State": "ME",
        "Zip Code": "04619-0334",
        "Country": "USA",
        "Contact": "David McLaughlan",
        "Phone": "506.466.2770",
        "Fax": "506.465.0881",
        "Email": "oldridge@nbnet.nb.ca",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail",
        "Product": "Plants",
        "Latitude": "45.186266",
        "Longitude": "-67.276595",
        "Street": "Calais Ave",
        "County": "Washington County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -67.276595,
          45.186266
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Olympic Nursery",
        "Address": "16215 140th Pl NE, Woodinville, WA, 98072",
        "City": "Woodinville",
        "State": "WA",
        "Zip Code": "98072",
        "Country": "USA",
        "Contact": "Thomas Quigley",
        "Phone": "425.483.9254",
        "Fax": "425.485.9451",
        "Email": "sales@olympicnursery.com",
        "Website": "http://www.olympicnursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Established": "1991",
        "Hours": "M-F 9-5, Sun 10-4",
        "Latitude": "47.745104",
        "Longitude": "-122.150923",
        "Street": "140th Pl NE",
        "County": "King County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.150923,
          47.745104
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "One Nature LLC",
        "Address": "321 Main St, Beacon, NY, 12508",
        "City": "Beacon",
        "State": "NY",
        "Zip Code": "12508",
        "Country": "USA",
        "Phone": "845.440.1677",
        "Email": "info@onenaturellc.com",
        "Website": "https://www.onenaturellc.com/current-plant-inventory",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nInternet\nContract",
        "Product": "Plants\nServices",
        "Latitude": "41.505081",
        "Longitude": "-73.970314",
        "Street": "Main St",
        "County": "Dutchess County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.970314,
          41.505081
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "OneCanopy",
        "Address": "2880 E Hwy 402, Loveland, CO, 80537",
        "City": "Loveland",
        "State": "CO",
        "Zip Code": "80537",
        "Country": "USA",
        "Contact": "Katelynn Martinez",
        "Phone": "970.549.8766",
        "Phone 2": "303.250.4126",
        "Email": "katelynn.martinez@one-canopy.com",
        "Website": "https://one-canopy.com/",
        "Latitude": "40.376418",
        "Longitude": "-105.035889",
        "Street": "E Highway 402",
        "County": "Larimer County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -105.035889,
          40.376418
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Oregon Native Plant Nursery",
        "Address": "PO Box 886, Woodburn, OR, 97071",
        "City": "Woodburn",
        "State": "OR",
        "Zip Code": "97071",
        "Country": "USA",
        "Contact": "Douglas M Chadwick",
        "Phone": "503.981.2353",
        "Email": "oregonnativeplant@yahoo.com",
        "Website": "http://www.wildflower.org/suppliers/show.php?id=4522",
        "Business Type": "Retail\nMail\nContract",
        "Product": "Plants",
        "Latitude": "45.148007",
        "Longitude": "-122.876205",
        "County": "Marion County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.876205,
          45.148007
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Oregon Wholesale Seed",
        "Address": "5648 Evans Valley Loop, Silverton, OR, 97381",
        "City": "Silverton",
        "State": "OR",
        "Zip Code": "97381",
        "Country": "USA",
        "Contact": "Angela Rose",
        "Phone": "503.874.8221",
        "Fax": "503.873.8861",
        "Email": "flowerseed@verizon.net",
        "Website": "http://www.oregonwholesaleseed.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Seeds",
        "Established": "2001",
        "Hours": "M-F 8-5",
        "Latitude": "45.001224",
        "Longitude": "-122.701752",
        "Street": "Evans Valley Rd",
        "County": "Marion County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.701752,
          45.001224
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Orisha",
        "Address": "1535 ch. ste-foy bureau 220, Quebec, QC, G1S2P1",
        "City": "Quebec",
        "State": "QC",
        "Zip Code": "G1S2P1",
        "Country": "Canada",
        "Contact": "Pierre Alexandre Papillon",
        "Phone": "418.998.9189",
        "Email": "pap@orisha.io",
        "Website": "https://orisha.io",
        "Latitude": "0",
        "Longitude": "0"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          0,
          0
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Ornamental Plants and Trees Inc",
        "Address": "137 Sunnyside Dr, Hawthorne, FL, 32640",
        "City": "Hawthorne",
        "State": "FL",
        "Zip Code": "32640",
        "Country": "USA",
        "Contact": "David Dickerson",
        "Phone": "352.481.0038",
        "Fax": "352.481.3366",
        "Email": "ornamentalplants@bellsouth.net",
        "Website": "optrees.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "29.589669",
        "Longitude": "-81.996829",
        "Street": "Sunnyside Dr",
        "County": "Putnam County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.996829,
          29.589669
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Orton Botanical Garden  Inc ",
        "Address": "867 Filer Ave W, Twin Falls, ID, 83301",
        "City": "Twin Falls",
        "State": "ID",
        "Zip Code": "83301",
        "Country": "USA",
        "Contact": "LaMar Orton",
        "Phone": "208.734.7959",
        "Email": "lorton1@msn.com",
        "Website": "http://www.plantasiacactusgardens.com/",
        "Nursery Type": "Private",
        "Business Type": "Retail\nMail",
        "Product": "Plants\nSeeds",
        "Latitude": "42.571116",
        "Longitude": "-114.49886",
        "Street": "Filer Ave W",
        "County": "Twin Falls County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -114.49886,
          42.571116
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Osage Prairie Mercantile",
        "Address": "PO Box 152, Clinton, MO, 64735",
        "City": "Clinton",
        "State": "MO",
        "Zip Code": "64735",
        "Country": "USA",
        "Phone": "660.885.6127",
        "Email": "info@prairiesource.com",
        "Business Type": "Wholesale\nRetail\nContract",
        "Product": "Plants",
        "Latitude": "38.401811",
        "Longitude": "-93.785012",
        "County": "Henry County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.785012,
          38.401811
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Osenbaugh Prairie Seed Farm",
        "Address": "11009 542nd St, Lucas, IA, 50151",
        "City": "Lucas",
        "State": "IA",
        "Zip Code": "50151",
        "Country": "USA",
        "Contact": "John Osenbaugh",
        "Phone": "800.582.2788",
        "Phone 2": "641.766.6792",
        "Fax": "641.766.6795",
        "Email": "info@PrairieSeedFarms.com",
        "Email 2": "info@prairieseedfarms.com",
        "Website": "http://www.prairieseedfarms.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Seeds",
        "Latitude": "41.106383",
        "Longitude": "-93.537996",
        "Street": "542nd St",
        "County": "Lucas County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.537996,
          41.106383
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Out Back Nursery  Inc",
        "Address": "15280 110th St S, Hastings, MN, 55033",
        "City": "Hastings",
        "State": "MN",
        "Zip Code": "55033",
        "Country": "USA",
        "Phone": "651.438.2771",
        "Fax": "651.438.3816",
        "Email": "sales@outbacknursery.com",
        "Email 2": "info@outbacknursery.com",
        "Website": "http://www.outbacknursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Established": "1994",
        "Hours": "M-F 8-4:30",
        "Latitude": "44.790677",
        "Longitude": "-92.795984",
        "Street": "110th St S",
        "County": "Washington County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -92.795984,
          44.790677
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Oxbow Farm and Conservation Center",
        "Address": "10819 Carnation-Duvall Rd NE, Carnation, WA, 98014",
        "City": "Carnation",
        "State": "WA",
        "Zip Code": "98014",
        "Country": "USA",
        "Contact": "Bridget McNassar",
        "Phone": "425.788.1134",
        "Email": "farmers@oxbow.org",
        "Website": "www.oxbow.org",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants\nServices",
        "Latitude": "47.693463",
        "Longitude": "-121.976431",
        "Street": "Carnation Duvall Rd NE",
        "County": "King County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.976431,
          47.693463
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "PE Allen Ranch Supply",
        "Address": "89400 497th Ave, Bristow, NE, 68719",
        "City": "Bristow",
        "State": "NE",
        "Zip Code": "68719",
        "Country": "USA",
        "Contact": "Paul Allen",
        "Phone": "402.583.9924",
        "Fax": "402.583.9924",
        "Email": "paulallen@nntc.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Seeds",
        "Latitude": "42.78465",
        "Longitude": "-98.545326",
        "Street": "497th Ave",
        "County": "Boyd County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -98.545326,
          42.78465
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "PRT Atmore",
        "Address": "4165 Ross Rd, Atmore, AL, 36502",
        "City": "Atmore",
        "State": "AL",
        "Zip Code": "36502",
        "Country": "USA",
        "Contact": "Jessie Harrison",
        "Phone": "251.368.4339",
        "Website": "http://www.prt.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "31.154314",
        "Longitude": "-87.438123",
        "Street": "Ross Rd",
        "County": "Escambia County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.438123,
          31.154314
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "PRT Brighton",
        "Address": "4653 Bishop Lake Rd, Howell, MI, 48843",
        "City": "Howell",
        "State": "MI",
        "Zip Code": "48843",
        "Country": "USA",
        "Contact": "Chad Fields",
        "Phone": "810.626.7009",
        "Email": "chad.fields@prt.com",
        "Website": "https://www.prt.com/contact/nursery-locations-usa/prt-brighton",
        "Nursery Type": "Private",
        "Business Type": "Internet\nContract",
        "Product": "Plants\nServices",
        "Latitude": "42.506203",
        "Longitude": "-83.857344",
        "Street": "Bishop Lake Rd",
        "County": "Livingston County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.857344,
          42.506203
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "PRT Cottage Grove",
        "Address": "76928 Mosby Creek Rd, Cottage Grove, OR, 97424",
        "City": "Cottage Grove",
        "State": "OR",
        "Zip Code": "97424",
        "Country": "USA",
        "Contact": "Kelly Tower",
        "Phone": "541.942.5516",
        "Website": "https://www.prt.com/contact/nursery-locations/prt-cottage-grove",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "43.750323",
        "Longitude": "-122.985894",
        "Street": "Mosby Creek Rd",
        "County": "Lane County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.985894,
          43.750323
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "PRT Hubbard",
        "Address": "31783 S Meridian Rd, Hubbard, OR, 97032",
        "City": "Hubbard",
        "State": "OR",
        "Zip Code": "97032",
        "Country": "USA",
        "Contact": "Luis Gracia",
        "Phone": "503.651.3266",
        "Phone 2": "503.951.3626",
        "Email": "Luis.Gracia@prt.com",
        "Website": "https://www.prt.com/contact/nursery-locations/prt-hubbard",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "45.147545",
        "Longitude": "-122.761086",
        "Street": "S Meridian Rd",
        "County": "Clackamas County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.761086,
          45.147545
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Pacific Forest Seed",
        "Address": "1077 Brownsboro-Meridian Rd, Eagle Point, OR, 97524",
        "City": "Eagle Point",
        "State": "OR",
        "Zip Code": "97524",
        "Country": "USA",
        "Contact": "Robert Dye",
        "Phone": "541.944.2470",
        "Email": "bobdyemsg@hotmail.com",
        "Website": "https://www.pacificforestseeds.com/",
        "Latitude": "42.457571",
        "Longitude": "-122.74072",
        "Street": "Brownsboro-Meridian Rd",
        "County": "Jackson County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.74072,
          42.457571
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Pacific Northwest Natives  LLC",
        "Address": "37750 Hwy 228, Brownsville, OR, 97327",
        "City": "Brownsville",
        "State": "OR",
        "Zip Code": "97327",
        "Country": "USA",
        "Contact": "Craig Edminster",
        "Phone": "541.974.6775",
        "Email": "pacificnwnatives@peak.org",
        "Website": "http://www.pacificnwnatives.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail\nContract\nResearch",
        "Product": "Seeds",
        "Established": "1995",
        "Hours": "M-F 8-5",
        "Latitude": "44.361576",
        "Longitude": "-122.882477",
        "Street": "Hwy 228",
        "County": "Linn County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.882477,
          44.361576
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Pacific Regeneration Technologies",
        "Address": "PRT Vernon Nursery, 7501 Bench Rd, Vernon, BC, V1H 1H3",
        "City": "7501 Bench Rd",
        "State": "BC",
        "Zip Code": "V1H 1H3",
        "Country": "Canada",
        "Contact": "Chris Mostyn",
        "Phone": "250.542.4100",
        "Fax": "250.542.1200",
        "Email": "chris.mostyn@prt.com",
        "Email 2": "dan.livingston@prt.com",
        "Website": "http://www.prt.com",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "0",
        "Longitude": "0"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          0,
          0
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Pacific Rim Native Plants Ltd",
        "Address": "43359 HillKeep Pl, Chilliwack, BC, V2P 6J7",
        "City": "Chilliwack",
        "State": "BC",
        "Zip Code": "V2P 6J7",
        "Country": "Canada",
        "Contact": "Paige or Pat Woodward",
        "Phone": "604.792.9279",
        "Fax": "604.792.1891",
        "Email": "paige@hillkeeps.ca",
        "Email 2": "plants@hillkeeps.ca",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "40.875991",
        "Longitude": "-83.448021",
        "County": "Wyandot County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.448021,
          40.875991
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Palouse-Clearwater Environmental Institute (PCEI) Learning Nursery",
        "Address": "1040 Rodeo Dr, Moscow, ID, 83843",
        "City": "Moscow",
        "State": "ID",
        "Zip Code": "83843",
        "Country": "USA",
        "Contact": "Tracy Brown",
        "Phone": "208.882.1444",
        "Fax": "208.882.8209",
        "Email": "brown@pcei.org",
        "Email 2": "info@pcei.org",
        "Website": "https://pcei.org/",
        "Nursery Type": "Not-for-Profit",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "46.74507",
        "Longitude": "-116.990779",
        "Street": "Rodeo Dr",
        "County": "Latah County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.990779,
          46.74507
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Pan's Acres Nursery",
        "Address": "136 Colburn Rd, Canterbury, CT, 06331",
        "City": "Canterbury",
        "State": "CT",
        "Zip Code": "06331",
        "Country": "USA",
        "Contact": "Denise Ciastko",
        "Phone": "860.662.0203",
        "Email": "dciastko@ctol.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Established": "1994",
        "Hours": "by appt",
        "Latitude": "41.716235",
        "Longitude": "-72.039163",
        "Street": "Colburn Rd",
        "County": "Northeastern Connecticut Planning Region"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.039163,
          41.716235
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Pat Ford's Nursery Inc",
        "Address": "8400 96th Ct S, Boynton Beach, FL, 33437",
        "City": "Boynton Beach",
        "State": "FL",
        "Zip Code": "33437",
        "Country": "USA",
        "Contact": "Pat Ford",
        "Phone": "561.732.3653",
        "Fax": "561.732.3653",
        "Email": "pat@patfordsnursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants\nSeeds",
        "Latitude": "26.53273",
        "Longitude": "-80.178653",
        "Street": "96th Ct S",
        "County": "Palm Beach County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.178653,
          26.53273
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Paul's Seeds",
        "Address": "92 Church St, Eureka, UT, 84628",
        "City": "Eureka",
        "State": "UT",
        "Zip Code": "84628",
        "Country": "USA",
        "Contact": "Paul",
        "Phone": "435.433.6924",
        "Email": "xeriseeds@yahoo.com",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Seeds",
        "Latitude": "39.955099",
        "Longitude": "-112.122492",
        "Street": "Church St",
        "County": "Juab County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -112.122492,
          39.955099
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Pawnee Buttes Seed Inc",
        "Address": "605 25th St, Greeley, CO, 80631",
        "City": "Greeley",
        "State": "CO",
        "Zip Code": "80631",
        "Country": "USA",
        "Contact": "Don Hijar ",
        "Phone": "800.782.5947",
        "Fax": "970.356.7263",
        "Email": "info@PawneeButtesSeed.com",
        "Email 2": "info@pawneebuttesseed.com",
        "Website": "http://www.pawneebuttesseed.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Seeds",
        "Latitude": "40.39745",
        "Longitude": "-104.687934",
        "Street": "25th St",
        "County": "Weld County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -104.687934,
          40.39745
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Peaceful Heritage Nursery and Farm",
        "Address": "Stanford, KY, 40484",
        "City": "KY",
        "State": "KY",
        "Zip Code": "40484",
        "Country": "USA",
        "Contact": "Blake Cothron",
        "Phone": "606.355.7242",
        "Email": "blake@peacefulheritage.com",
        "Website": "http://www.peacefulheritage.com",
        "Nursery Type": "Private",
        "Business Type": "Retail\nMail",
        "Product": "Plants\nSeeds",
        "Latitude": "37.522046",
        "Longitude": "-84.684467",
        "County": "Lincoln County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.684467,
          37.522046
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Peach Springs Nursery",
        "Address": "1155 N FM 2869, Winnsboro, TX, 75494",
        "City": "Winnsboro",
        "State": "TX",
        "Zip Code": "75494",
        "Country": "USA",
        "Contact": "Wayne Barrick",
        "Phone": "903.629.3262",
        "Fax": "903.629.3001",
        "Email": "wayne@peachspringsnursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "32.803644",
        "Longitude": "-95.202877",
        "Street": "N FM 2869",
        "County": "Wood County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.202877,
          32.803644
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Peel's Nurseries Ltd",
        "Address": "11610 Sylvester Rd, Mission, BC, V2V 4J1",
        "City": "Mission",
        "State": "BC",
        "Zip Code": "V2V 4J1",
        "Country": "Canada",
        "Contact": "Bruce or Lauren Peel",
        "Phone": "604.820.7381",
        "Fax": "604.820.7382",
        "Email": "info@peelsnurseries.com",
        "Website": "http://www.peelsnurseries.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Established": "1991",
        "Hours": "8-4:30",
        "Latitude": "40.605382",
        "Longitude": "-73.755133",
        "County": "Queens County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.755133,
          40.605382
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Pelton's Nursery Inc",
        "Address": "13400 SW 184 St, Miami, FL, 33177",
        "City": "Miami",
        "State": "FL",
        "Zip Code": "33177",
        "Country": "USA",
        "Contact": "Donald Pelton",
        "Phone": "786.715.6868",
        "Phone 2": "786.227.6857",
        "Email": "peltoniii@aol.com",
        "Email 2": "sales@peltonsnurseries.com",
        "Website": "http://www.peltonsnurseries.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "25.596834",
        "Longitude": "-80.409302",
        "Street": "SW 184th St",
        "County": "Miami-Dade County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.409302,
          25.596834
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Pennsylvania Bureau of Forestry - Penn Nursery",
        "Address": "137 Penn Nursery Rd, Spring Mills, PA, 16875",
        "City": "Spring Mills",
        "State": "PA",
        "Zip Code": "16875",
        "Country": "USA",
        "Phone": "814.364.5150",
        "Email": "ra-penn@pa.gov",
        "Nursery Type": "State",
        "Product": "Plants",
        "Established": "1922",
        "Hours": "38932.0",
        "Latitude": "40.776965",
        "Longitude": "-77.61476",
        "Street": "Penn Nursery Rd",
        "County": "Centre County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.61476,
          40.776965
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Pennsylvania State Game Commission - Howard Nursery",
        "Address": "197 Nursery Rd, Howard, PA, 16841",
        "City": "Howard",
        "State": "PA",
        "Zip Code": "16841",
        "Country": "USA",
        "Contact": "Clifford Guindon",
        "Phone": "814.355.4434",
        "Fax": "814.355.8094",
        "Email": "cguindon@state.pa.us or howardnrsrysales@pa.gov",
        "Nursery Type": "State",
        "Business Type": "Wholesale\nRetail\nMail\nInternet",
        "Product": "Plants",
        "Latitude": "40.987089",
        "Longitude": "-77.711999",
        "Street": "Nursery Rd",
        "County": "Centre County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.711999,
          40.987089
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Perennial Gardens",
        "Address": "13139 224 St, Maple Ridge, BC, V4R 2P6",
        "City": "Maple Ridge",
        "State": "BC",
        "Zip Code": "V4R 2P6",
        "Country": "Canada",
        "Contact": "Elke Knechtel",
        "Phone": "604.467.4218",
        "Fax": "604.467.3181",
        "Email": "info@perennialgardener.com",
        "Website": "http://perennialgardener.com",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "42.742057",
        "Longitude": "-76.628454",
        "County": "Cayuga County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.628454,
          42.742057
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "PerennialMarket com",
        "Address": "1122 E Welsh Rd, Maple Glen, PA, 19002",
        "City": "Maple Glen",
        "State": "PA",
        "Zip Code": "19002",
        "Country": "USA",
        "Contact": "Andrea Steinberg ",
        "Phone": "215.793.0243",
        "Fax": "215.628.0216",
        "Email": "sales@perennialmarket.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "40.192853",
        "Longitude": "-75.202541",
        "Street": "Welsh Rd",
        "County": "Montgomery County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.202541,
          40.192853
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Performance Nursery - Moorpark",
        "Address": "12777 Tierra Rejada Rd, Moorpark, CA, 93020",
        "City": "Moorpark",
        "State": "CA",
        "Zip Code": "93020",
        "Country": "USA",
        "Contact": "Tom Lucas",
        "Email": "tom@performancenursery.com",
        "Email 2": "moorparksales@performancenursery.com",
        "Website": "http://performancenurserywholesale.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "34.263433",
        "Longitude": "-118.88322",
        "Street": "Tierra Rejada Rd",
        "County": "Ventura County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.88322,
          34.263433
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Perkins Nursery Inc",
        "Address": "2575 Case Rd, La Belle, FL, 33935",
        "City": "La Belle",
        "State": "FL",
        "Zip Code": "33935",
        "Country": "USA",
        "Contact": "Dan or Debbie Perkins",
        "Phone": "863.675.3006",
        "Fax": "863.675.8281",
        "Email": "info@perkinsnursery.com",
        "Website": "http://www.perkinsnursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nContract",
        "Product": "Plants\nSeeds",
        "Established": "1977",
        "Hours": "M-Sat 8-4:30",
        "Latitude": "26.716593",
        "Longitude": "-81.396516",
        "Street": "Case Rd",
        "County": "Hendry County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.396516,
          26.716593
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Petal'n'Roots",
        "Address": "913 Mira Ave, Crivitz, WI, 54114",
        "City": "Crivitz",
        "State": "WI",
        "Zip Code": "54114",
        "Country": "USA",
        "Phone": "715.854.3250",
        "Email": "info@greenthumbgardenshoppe.com",
        "Website": "http://www.petalnroots.com/",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "45.23533",
        "Longitude": "-88.011091",
        "Street": "Mira Ave",
        "County": "Marinette County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.011091,
          45.23533
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Peter Schramm - Prairie Restorations",
        "Address": "766 Bateman St, Galesburg, IL, 61401",
        "City": "Galesburg",
        "State": "IL",
        "Zip Code": "61401",
        "Country": "USA",
        "Contact": "Peter",
        "Phone": "309.343.2608",
        "Email": "prairieps1@gmail.com",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Seeds",
        "Latitude": "40.956343",
        "Longitude": "-90.363407",
        "Street": "Bateman St",
        "County": "Knox County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.363407,
          40.956343
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Peterson's Riverview Nursery  LLC",
        "Address": "873 26th St, Allegan, MI, 49010",
        "City": "Allegan",
        "State": "MI",
        "Zip Code": "49010",
        "Country": "USA",
        "Contact": "Jerry Peterson",
        "Phone": "269.673.2440",
        "Fax": "269.673.6250",
        "Email": "jptrees@accn.org",
        "Website": "http://www.petersons-riverview.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Seeds",
        "Latitude": "42.484194",
        "Longitude": "-85.797966",
        "Street": "26th St",
        "County": "Allegan County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.797966,
          42.484194
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Phelan Gardens",
        "Address": "4955 Austin Bluffs Pkwy, Colorado Springs, CO, 80918",
        "City": "Colorado Springs",
        "State": "CO",
        "Zip Code": "80918",
        "Country": "USA",
        "Contact": "Mark Phelan",
        "Phone": "719.574.8058",
        "Email": "CustomerSupport@phelangardens.com",
        "Website": "http://www.phelangardens.com",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "38.903039",
        "Longitude": "-104.739274",
        "Street": "Austin Bluffs Pkwy",
        "County": "El Paso County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -104.739274,
          38.903039
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Piedmont Nursery LLC",
        "Address": "3544 Sunnyside Ln, Markham, VA, 22643",
        "City": "Markham",
        "State": "VA",
        "Zip Code": "22643",
        "Country": "USA",
        "Phone": "540.364.0398",
        "Phone 2": "571.334.1180",
        "Email": "jennifer@piedmontnursery.com",
        "Website": "http://www.piedmontnursery.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants\nServices",
        "Latitude": "38.887686",
        "Longitude": "-78.028321",
        "Street": "Sunnyside Ln",
        "County": "Fauquier County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.028321,
          38.887686
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Pierson Nurseries Inc",
        "Address": "291 Waterhouse Rd , Dayton, ME, 04005",
        "City": "Dayton",
        "State": "ME",
        "Zip Code": "04005",
        "Country": "USA",
        "Contact": "Jake Pierson",
        "Phone": "207.499.2994",
        "Fax": "207.499.2912",
        "Email": "sales@piersonnurseries.com",
        "Website": "http://www.piersonnurseries.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants\nSeeds",
        "Established": "1976",
        "Hours": "M-F 7-5",
        "Latitude": "43.517157",
        "Longitude": "-70.556143",
        "Street": "Waterhouse Rd",
        "County": "York County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -70.556143,
          43.517157
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Pikes Peak Nurseries",
        "Address": "8289 Rt 422 Hwy E, Penn Run, PA, 15765",
        "City": "Penn Run",
        "State": "PA",
        "Zip Code": "15765",
        "Country": "USA",
        "Contact": "David",
        "Phone": "800.787.6730",
        "Fax": "724.463.0775",
        "Email": "pikespak@sgi.net",
        "Website": "http://www.pikespeaknurseries.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "40.599662",
        "Longitude": "-79.01176",
        "Street": "Benjamin Franklin Hwy",
        "County": "Indiana County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.01176,
          40.599662
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Pine Breeze Nursery",
        "Address": "7697 Beach Daisy Ln, Bokeelia, FL, 33922-0702",
        "City": "Bokeelia",
        "State": "FL",
        "Zip Code": "33922-0702",
        "Country": "USA",
        "Contact": "Harold",
        "Phone": "239.283.7200",
        "Fax": "941.283.7200",
        "Email": "pbnursery@aol.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "26.67878",
        "Longitude": "-82.151452",
        "Street": "Beach Daisy Ln",
        "County": "Lee County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.151452,
          26.67878
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Pine Grove Nursery Inc",
        "Address": "152 Pine Grove Nursery Rd, Clearfield, PA, 16830",
        "City": "Clearfield",
        "State": "PA",
        "Zip Code": "16830",
        "Country": "USA",
        "Phone": "814.765.2363",
        "Phone 2": "800.647.1727",
        "Fax": "814.765.2363",
        "Email": "pinegrove152@verizon.net",
        "Website": "http://www.pinegrovenursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Established": "1951",
        "Latitude": "40.979619",
        "Longitude": "-78.456656",
        "Street": "Pine Grove Nursery Rd",
        "County": "Clearfield County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.456656,
          40.979619
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Pine Ridge Gardens",
        "Address": "832 Sycamore Rd, London, AR, 72847",
        "City": "London",
        "State": "AR",
        "Zip Code": "72847",
        "Country": "USA",
        "Contact": "MaryAnn King",
        "Phone": "479.293.4359",
        "Fax": "479.293.4659",
        "Email": "office@pineridgegardens.com",
        "Website": "http://www.pineridgegardens.com",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Established": "1992",
        "Hours": "by appt",
        "Latitude": "35.368639",
        "Longitude": "-93.295118",
        "Street": "Sycamore Rd",
        "County": "Pope County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.295118,
          35.368639
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Pinelands Nursery Inc",
        "Address": "323 Island Rd, Columbus, NJ, 08022",
        "City": "Columbus",
        "State": "NJ",
        "Zip Code": "08022",
        "Country": "USA",
        "Contact": "Fran Chismar",
        "Phone": "609.291.9486",
        "Phone 2": "800.667.2729",
        "Fax": "609.298.8939",
        "Email": "sales@pinelandsnursery.com",
        "Website": "http://www.pinelandsnursery.com/p/home-page.html",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nContract",
        "Product": "Plants",
        "Latitude": "40.067184",
        "Longitude": "-74.705866",
        "Street": "Island Rd",
        "County": "Burlington County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.705866,
          40.067184
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Pineview Horticultural Services",
        "Address": "10188 N Taryne St, Hayden, ID, 83835",
        "City": "Hayden",
        "State": "ID",
        "Zip Code": "83835",
        "Country": "USA",
        "Contact": "Jack Zimmer",
        "Phone": "208.772.7294",
        "Fax": "208.772.7598",
        "Email": "seedboys@frontier.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Seeds",
        "Established": "2004",
        "Hours": "M-F 7:30-5",
        "Latitude": "47.764329",
        "Longitude": "-116.788972",
        "Street": "N Taryne St",
        "County": "Kootenai County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.788972,
          47.764329
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Pipilo Native Plants",
        "Address": "Charlo, MT, 59824",
        "City": "MT",
        "State": "MT",
        "Zip Code": "59824",
        "Country": "USA",
        "Contact": "Elliott Conrad",
        "Phone": "406.540.2230",
        "Email": "elliott@pipilonatives.com",
        "Website": "https://www.pipilonatives.com/",
        "Nursery Type": "Private",
        "Business Type": "Retail\nContract",
        "Product": "Plants\nSeeds\nServices",
        "Latitude": "47.4427",
        "Longitude": "-114.1716",
        "County": "Lake County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -114.1716,
          47.4427
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Pizzo Native Plant Nursery",
        "Address": "10729 Pine Rd, Leland, IL, 60531",
        "City": "Leland",
        "State": "IL",
        "Zip Code": "60531",
        "Country": "USA",
        "Contact": "Grace Koehler",
        "Phone": "815.981.8000",
        "Fax": "815.495.4406",
        "Email": "gracek@pizzonursery.com",
        "Website": "http://pizzonursery.com",
        "Nursery Type": "Private",
        "Product": "Plants\nServices",
        "Latitude": "41.674398",
        "Longitude": "-88.736415",
        "Street": "Pine Rd",
        "County": "Dekalb County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.736415,
          41.674398
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Plant Creations Inc",
        "Address": "28301 SW 172 Ave, Homestead, FL, 33030",
        "City": "Homestead",
        "State": "FL",
        "Zip Code": "33030",
        "Country": "USA",
        "Contact": "Ken Cook",
        "Phone": "305.248.8147",
        "Fax": "305.248.8151",
        "Email": "plcrnu@comcast.net",
        "Email 2": "plants@plantcreations.com",
        "Website": "http://www.plantcreations.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "25.503607",
        "Longitude": "-80.469254",
        "Street": "SW 172nd Ave",
        "County": "Miami-Dade County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.469254,
          25.503607
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Plant Delights Nursery",
        "Address": "9241 Sauls Rd, Raleigh, NC, 27603",
        "City": "Raleigh",
        "State": "NC",
        "Zip Code": "27603",
        "Country": "USA",
        "Contact": "Tony Avent",
        "Phone": "919.772.4794",
        "Fax": "919.662.0370",
        "Email": "office@plantdelights.com",
        "Nursery Type": "Private",
        "Business Type": "Retail\nMail\nInternet",
        "Product": "Plants",
        "Established": "1988",
        "Hours": "Phone orders/Customer Service M-F 8-5; Retail sales via appointment & open house weekends",
        "Latitude": "35.626358",
        "Longitude": "-78.639566",
        "Street": "Sauls Rd",
        "County": "Wake County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.639566,
          35.626358
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Plant Oregon",
        "Address": "8677 Wagner Creek Rd, Talent, OR, 97540",
        "City": "Talent",
        "State": "OR",
        "Zip Code": "97540",
        "Country": "USA",
        "Contact": "Daniel Bish",
        "Phone": "541.535.3531",
        "Fax": "541.535.2537",
        "Email": "dan@plantoregon.com",
        "Website": "http://www.plantoregon.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "42.208675",
        "Longitude": "-122.788709",
        "Street": "Wagner Creek Rd",
        "County": "Jackson County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.788709,
          42.208675
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Plant Propagation Technologies Inc",
        "Address": "250 S Crawford, Las Cruces, NM, 88005",
        "City": "Las Cruces",
        "State": "NM",
        "Zip Code": "88005",
        "Country": "USA",
        "Contact": "Rick Eaknes",
        "Phone": "505.527.9820",
        "Fax": "505.541.8821",
        "Email": "webmaster@plantpropagation.com",
        "Email 2": "info@plantpropagationtechnologies.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "32.267682",
        "Longitude": "-106.921987",
        "Street": "S Crawford Blvd",
        "County": "Doña Ana County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -106.921987,
          32.267682
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Plantas nativa LLC",
        "Address": "315 East Champion St, Bellingham, WA, 98225",
        "City": "Bellingham",
        "State": "WA",
        "Zip Code": "98225",
        "Country": "USA",
        "Contact": "Bay Renaud",
        "Phone": "360.715.9655",
        "Email": "bay@plantasnativa.com",
        "Website": "http://www.plantasnativa.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nInternet",
        "Product": "Plants\nSeeds",
        "Latitude": "48.750114",
        "Longitude": "-122.473149",
        "Street": "E Champion St",
        "County": "Whatcom County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.473149,
          48.750114
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Plantas nativa LLC East",
        "Address": "303 Twisp River Rd, Twisp, WA, 98856",
        "City": "Twisp",
        "State": "WA",
        "Zip Code": "98856",
        "Country": "USA",
        "Contact": "Camden Shaw",
        "Phone": "509.341.4133",
        "Email": "camden@pneast.com",
        "Website": "http://www.pneast.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants\nSeeds",
        "Established": "1997",
        "Hours": "M-F 8-4 by appt",
        "Latitude": "48.37402",
        "Longitude": "-120.184689",
        "Street": "Twisp River Rd",
        "County": "Okanogan County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.184689,
          48.37402
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Plantra Inc",
        "Address": "2508 Northland Dr, Mendota Heights, MN, 55120",
        "City": "Mendota Heights",
        "State": "MN",
        "Zip Code": "55120",
        "Country": "USA",
        "Contact": "Mary Jo",
        "Phone": "800.951.3806",
        "Phone 2": "651.686.6688",
        "Fax": "651.681.2067",
        "Email": "info@plantra.com",
        "Website": "http://www.plantra.com/Contact.aspx",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "44.863941",
        "Longitude": "-93.170303",
        "Street": "Northland Dr",
        "County": "Dakota County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.170303,
          44.863941
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Plants for the Southwest | Living Stones Nursery",
        "Address": "50 E Blacklidge, Tucson, AZ, 85705",
        "City": "Tucson",
        "State": "AZ",
        "Zip Code": "85705",
        "Country": "USA",
        "Contact": "Gene Joseph or Jane Evans",
        "Phone": "520.628.8773",
        "Fax": "520.628.8773",
        "Email": "boscoe@lithops.com",
        "Website": "http://www.lithops.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "32.261077",
        "Longitude": "-110.971216",
        "Street": "E Blacklidge Dr",
        "County": "Pima County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -110.971216,
          32.261077
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Plants of the Southwest",
        "Address": "3095 Agua Fria Rd, Santa Fe, NM, 87507",
        "City": "Santa Fe",
        "State": "NM",
        "Zip Code": "87507",
        "Country": "USA",
        "Contact": "Gail Haggard",
        "Phone": "800.788.7333",
        "Fax": "505.438.8800",
        "Email": "plantsofthesouthwest@gmail.com",
        "Website": "http://www.plantsofthesouthwest.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants\nSeeds",
        "Established": "1973",
        "Hours": "M-Sat 8-5, Sun during summer",
        "Latitude": "35.661967",
        "Longitude": "-106.00302",
        "Street": "Agua Fria Rd",
        "County": "Santa Fe County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -106.00302,
          35.661967
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Plants of the Wild",
        "Address": "123 State Line Rd, Tekoa, WA, 99033",
        "City": "Tekoa",
        "State": "WA",
        "Zip Code": "99033",
        "Country": "USA",
        "Contact": "Kathy",
        "Phone": "509.284.2848",
        "Fax": "509.284.6464",
        "Email": "kathy@plantsofthewild.com",
        "Website": "http://www.plantsofthewild.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail\nInternet\nContract",
        "Product": "Plants\nSeeds",
        "Established": "1979",
        "Hours": "M-F 7-3:30",
        "Latitude": "47.22911",
        "Longitude": "-117.041319",
        "Street": "Stateline Rd",
        "County": "Whitman County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.041319,
          47.22911
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Pleasant Hill Nursery",
        "Address": "1011 Anderson Rd, Troy, ID, 83871",
        "City": "Troy",
        "State": "ID",
        "Zip Code": "83871",
        "Country": "USA",
        "Contact": "Pat Mason",
        "Phone": "208.877.1434",
        "Email": "pdmason@moscow.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "46.803093",
        "Longitude": "-116.647544",
        "Street": "Anderson Rd",
        "County": "Latah County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.647544,
          46.803093
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Plum Creek Timber Company - Cottage Grove Nursery",
        "Address": "76928 Mosby Creek Rd, Cottage Grove, OR, 97424",
        "City": "Cottage Grove",
        "State": "OR",
        "Zip Code": "97424",
        "Country": "USA",
        "Contact": "Steve Hutchison",
        "Phone": "541.942.5516",
        "Email": "steven.hutchison@plumcreek.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants\nSeeds",
        "Latitude": "43.750323",
        "Longitude": "-122.985894",
        "Street": "Mosby Creek Rd",
        "County": "Lane County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.985894,
          43.750323
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Plum Creek Timber Company - Jesup Nursery",
        "Address": "1689 Nursery Rd, Jesup, GA, 31546",
        "City": "Jesup",
        "State": "GA",
        "Zip Code": "31546",
        "Country": "USA",
        "Contact": "Ken Woody",
        "Phone": "912.427.4871",
        "Phone 2": "206.467.3600",
        "Fax": "912.530.8438",
        "Email": "ken.woody@plumcreek.com",
        "Email 2": "communications@plumcreek.com",
        "Website": "http://www.plumcreek.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants\nSeeds",
        "Latitude": "31.506304",
        "Longitude": "-81.8626",
        "Street": "Nursery Rd",
        "County": "Wayne County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.8626,
          31.506304
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Plum Creek Timber Company - Pearl River Nursery",
        "Address": "1032 Camp Ln, Hazelhurst, MS, 39083",
        "City": "Hazelhurst",
        "State": "MS",
        "Zip Code": "39083",
        "Country": "USA",
        "Contact": "Ken McQuage",
        "Phone": "601.894.1072",
        "Email": "ken.mcquage@plumcreek.com",
        "Website": "http://www.plumcreek.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants\nSeeds",
        "Latitude": "31.782528",
        "Longitude": "-90.131438",
        "Street": "Camp Ln",
        "County": "Copiah County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.131438,
          31.782528
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Plumline Nursery",
        "Address": "4151 Logan Ferry Rd, Murrysville, PA, 15668",
        "City": "Murrysville",
        "State": "PA",
        "Zip Code": "15668",
        "Country": "USA",
        "Contact": "Karen",
        "Phone": "724.327.6775",
        "Fax": "724.327.9210",
        "Email": "karen@plumlinenursery.com",
        "Website": "http://www.plumlinenursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "40.454313",
        "Longitude": "-79.707351",
        "Street": "Logan Ferry Rd",
        "County": "Allegheny County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.707351,
          40.454313
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Plummer Seed Company",
        "Address": "PO Box 70, Ephraim, UT, 84627",
        "City": "Ephraim",
        "State": "UT",
        "Zip Code": "84627",
        "Country": "USA",
        "Contact": "Mark Plummer",
        "Phone": "435.283.4844",
        "Phone 2": "435.851.0715",
        "Fax": "435.283.4030",
        "Email": "plummerseedco@hotmail.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Seeds",
        "Established": "1982",
        "Hours": "M-F 8-5",
        "Latitude": "39.373122",
        "Longitude": "-111.62523",
        "County": "Sanpete County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.62523,
          39.373122
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Pohakuwaena Research Center",
        "Address": "PO Box 6247, Hilo, HI, 96720",
        "City": "Hilo",
        "State": "HI",
        "Zip Code": "96720",
        "Country": "USA",
        "Contact": "James Ferrell",
        "Email": "faceplan@verizon.net",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "19.564519",
        "Longitude": "-155.26203",
        "County": "Hawaii County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -155.26203,
          19.564519
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Ponderosa Nursery",
        "Address": "4913 133rd Ave, Hamilton, MI, 49419",
        "City": "Hamilton",
        "State": "MI",
        "Zip Code": "49419",
        "Country": "USA",
        "Contact": "Carrie",
        "Phone": "269.751.6031",
        "Phone 2": "800.228.3021",
        "Fax": "616.751.8829",
        "Email": "carrie@ponderosanursery.net",
        "Website": "http://ponderosanursery.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "42.663272",
        "Longitude": "-86.025805",
        "Street": "133rd Ave",
        "County": "Allegan County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.025805,
          42.663272
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Portland Nursery",
        "Address": "5050 SE Stark, Portland, OR, 97215",
        "City": "Portland",
        "State": "OR",
        "Zip Code": "97215",
        "Country": "USA",
        "Phone": "503.231.5050",
        "Phone 2": "503.788.9000",
        "Fax": "503.231.7123",
        "Email": "emailoffers@portlandnursery.com",
        "Website": "http://portlandnursery.com/",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "45.518733",
        "Longitude": "-122.611056",
        "Street": "SE Stark St",
        "County": "Multnomah County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.611056,
          45.518733
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Possibility Place Nursery",
        "Address": "7548 W Manhattan Rd, Monee, IL, 60449",
        "City": "Monee",
        "State": "IL",
        "Zip Code": "60449",
        "Country": "USA",
        "Contact": "Connor Shaw",
        "Phone": "708.534.3988",
        "Fax": "708.534.6272",
        "Website": "http://www.possibilityplace.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "41.425433",
        "Longitude": "-87.875326",
        "Street": "W Manhattan-Monee Rd",
        "County": "Will County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.875326,
          41.425433
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Postlewait Nursery",
        "Address": "28923 S Barlow Rd, Canby, OR, 97013",
        "City": "Canby",
        "State": "OR",
        "Zip Code": "97013",
        "Country": "USA",
        "Phone": "503.651.2393",
        "Fax": "503.651.3156",
        "Email": "mpostlewait@canby.com",
        "Email 2": "jeannawayland@hotmail.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nContract",
        "Product": "Plants",
        "Latitude": "45.188849",
        "Longitude": "-122.722928",
        "Street": "S Barlow Rd",
        "County": "Clackamas County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.722928,
          45.188849
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Prairie Earth Nursery",
        "Address": "RR 1 Rural Box 151, Bradford, IL, 61421",
        "City": "Bradford",
        "State": "IL",
        "Zip Code": "61421",
        "Country": "USA",
        "Contact": "Jim Alwill",
        "Phone": "309.897.9911",
        "Email": "Jim_alwill@yahoo.com",
        "Business Type": "Wholesale\nRetail\nMail\nContract",
        "Product": "Plants\nSeeds",
        "Established": "1999",
        "Hours": "please call for hours",
        "Latitude": "41.176471",
        "Longitude": "-89.657789",
        "County": "Stark County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.657789,
          41.176471
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Prairie Frontier",
        "Address": "W281 S3606 Pheasant Run, Waukesha, WI, 53189",
        "City": "Waukesha",
        "State": "WI",
        "Zip Code": "53189",
        "Country": "USA",
        "Contact": "Deb Edlhuber",
        "Phone": "262.544.6708",
        "Fax": "262.544.6708",
        "Email": "wildflower@prairiefrontier.com",
        "Website": "http://www.prairiefrontier.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail",
        "Product": "Seeds",
        "Latitude": "42.980087",
        "Longitude": "-88.305647",
        "Street": "Pheasant Run",
        "County": "Waukesha County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.305647,
          42.980087
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Prairie Future Seed Company",
        "Address": "Menomonee Falls, WI, 53052-0644",
        "City": "WI",
        "State": "WI",
        "Zip Code": "53052-0644",
        "Country": "USA",
        "Contact": "Randy Powers",
        "Phone": "262.820.0211",
        "Email": "pfsco@Wi.rr.com",
        "Website": "https://www.prairiefutureseed.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nInternet",
        "Product": "Plants\nSeeds",
        "Latitude": "43.018696",
        "Longitude": "-88.302997",
        "County": "Waukesha County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.302997,
          43.018696
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Prairie Habitats Inc",
        "Address": "0043E-82 Rd N, Argyle, MB, R0C 0B0",
        "City": "Argyle",
        "State": "MB",
        "Zip Code": "R0C 0B0",
        "Country": "Canada",
        "Contact": "John Morgan",
        "Phone": "204.467.9371",
        "Fax": "204.467.5004",
        "Email": "john01@xplornet.com",
        "Website": "http://www.prairiehabitats.com",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Seeds",
        "Latitude": "0",
        "Longitude": "0"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          0,
          0
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Prairie Hill Farm",
        "Address": "877 CR 263, Auxvasse, MO, 65231",
        "City": "Auxvasse",
        "State": "MO",
        "Zip Code": "65231",
        "Country": "USA",
        "Contact": "Devin Chandler",
        "Phone": "573.864.9597",
        "Fax": "573.387.4875",
        "Email": "chandler@ktis.net",
        "Website": "http://prairiehillfarm.biz",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "39.033589",
        "Longitude": "-92.02937",
        "Street": "County Rd 263",
        "County": "Callaway County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -92.02937,
          39.033589
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Prairie Hill Wildflowers",
        "Address": "8955 Lemond Rd, Ellendale, MN, 56026",
        "City": "Ellendale",
        "State": "MN",
        "Zip Code": "56026",
        "Country": "USA",
        "Contact": "John Hoffman",
        "Phone": "507.451.7791",
        "Fax": "507.451.3812",
        "Email": "seedman@myclearwave.net",
        "Email 2": "seedman191@hotmail.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants\nSeeds",
        "Latitude": "43.998437",
        "Longitude": "-93.380621",
        "Street": "Lemond Rd",
        "County": "Steele County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.380621,
          43.998437
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Prairie Legacy Inc ",
        "Address": "3910 S 32 Pl, Lincoln, NE, 68502",
        "City": "Lincoln",
        "State": "NE",
        "Zip Code": "68502",
        "Country": "USA",
        "Contact": "Kay Kottas",
        "Phone": "402.310.8167",
        "Email": "info@prairielegacyinc.com",
        "Website": "http://prairielegacyinc.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nInternet\nContract",
        "Product": "Plants",
        "Latitude": "40.774123",
        "Longitude": "-96.673692",
        "Street": "S 32nd Pl",
        "County": "Lancaster County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.673692,
          40.774123
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Prairie Moon Nursery",
        "Address": "32115 Prairie Ln, Winona, MN, 55987",
        "City": "Winona",
        "State": "MN",
        "Zip Code": "55987",
        "Country": "USA",
        "Contact": "Bill Carter",
        "Phone": "507.452.1362",
        "Phone 2": "866.417.8156",
        "Email": "bill@prairiemoon.com",
        "Email 2": "info@prairiemoon.com",
        "Website": "http://www.prairiemoon.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail\nInternet\nContract",
        "Product": "Plants",
        "Established": "1982",
        "Hours": "M-F 9-5",
        "Latitude": "43.903333",
        "Longitude": "-91.637508",
        "Street": "Prairie Ln",
        "County": "Winona County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -91.637508,
          43.903333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Prairie Nursery",
        "Address": "W 5875 Dyke Ave, Westfield, WI, 53964",
        "City": "Westfield",
        "State": "WI",
        "Zip Code": "53964",
        "Country": "USA",
        "Contact": "Kirk Shillinglaw",
        "Phone": "800.476.9453",
        "Phone 2": "608.296.3679",
        "Fax": "608.296.2741",
        "Email": "cs@prairienursery.com",
        "Email 2": "anns@prairienursery.com",
        "Website": "http://www.prairienursery.com",
        "Nursery Type": "Private",
        "Business Type": "Retail\nMail\nInternet",
        "Product": "Plants\nSeeds",
        "Established": "1972",
        "Hours": "9-4 M-F",
        "Latitude": "43.908769",
        "Longitude": "-89.454099",
        "Street": "Dyke Ave",
        "County": "Marquette County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.454099,
          43.908769
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Prairie Restorations  Inc ",
        "Address": "31646 128th Street, Princeton, MN, 55371",
        "City": "Princeton",
        "State": "MN",
        "Zip Code": "55371",
        "Country": "USA",
        "Contact": "Elizabeth Markhart",
        "Phone": "763.389.4342",
        "Email": "info@prairieresto.com",
        "Website": "http://www.prairieresto.com/princeton.shtml",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants\nSeeds\nServices",
        "Latitude": "45.5434",
        "Longitude": "-93.593693",
        "Street": "128th St",
        "County": "Sherburne County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.593693,
          45.5434
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Prairie Restorations Inc",
        "Address": "31646 128th St, Princeton, MN, 55371",
        "City": "Princeton",
        "State": "MN",
        "Zip Code": "55371",
        "Country": "USA",
        "Contact": "Mike Evenocheck",
        "Phone": "763.389.4342",
        "Fax": "763.389.4346",
        "Email": "info@prairieresto.com",
        "Website": "http://www.prairieresto.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail\nInternet\nContract",
        "Product": "Plants\nSeeds",
        "Established": "1977",
        "Hours": "8:00 am - 4:30 pm",
        "Latitude": "45.5434",
        "Longitude": "-93.593693",
        "Street": "128th St",
        "County": "Sherburne County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.593693,
          45.5434
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Prairie Seed Source",
        "Address": "PO Box 83, North Lake, WI, 53064-0083",
        "City": "North Lake",
        "State": "WI",
        "Zip Code": "53064-0083",
        "Country": "USA",
        "Email": "rasillon@ameritech.net",
        "Email 2": "pb9@prairiebob.com",
        "Nursery Type": "Private",
        "Product": "Seeds",
        "Established": "1974",
        "Latitude": "43.018696",
        "Longitude": "-88.302997",
        "County": "Waukesha County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.302997,
          43.018696
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Prides Corner Farms",
        "Address": "122 Waterman Rd, Lebanon, CT, 06279",
        "City": "Lebanon",
        "State": "CT",
        "Zip Code": "06279",
        "Country": "USA",
        "Contact": "Mark Sellew",
        "Phone": "860.642.7535",
        "Fax": "860.642.2027",
        "Email": "mark@pridescorner.com",
        "Email 2": "sales@pridescorner.com",
        "Website": "http://www.pridescorner.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nContract",
        "Product": "Plants",
        "Latitude": "41.620823",
        "Longitude": "-72.206158",
        "Street": "Waterman Rd",
        "County": "Southeastern Connecticut Planning Region"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.206158,
          41.620823
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Prince Edward Island Ministry of Forestry - J Frank Gaudet Nursery",
        "Address": "173 Upton Rd, Charlottetown, PE, C1A 7N8",
        "City": "Charlottetown",
        "State": "PE",
        "Zip Code": "C1A 7N8",
        "Country": "Canada",
        "Contact": "Mary Myers",
        "Phone": "902.368.4711",
        "Fax": "902.368.4713",
        "Email": "jfgnursery@gov.pe.ca",
        "Website": "http://www.gov.pe.ca/forestry/forestnursery",
        "Nursery Type": "State",
        "Product": "Plants",
        "Latitude": "0",
        "Longitude": "0"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          0,
          0
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Prindel Creek Farm Inc",
        "Address": "95520 E Five Rivers Rd, Tidewater, OR, 97390",
        "City": "Tidewater",
        "State": "OR",
        "Zip Code": "97390",
        "Country": "USA",
        "Contact": "Daniel",
        "Phone": "541.528.3330",
        "Fax": "541.528.3330",
        "Website": "http://www.prindelcreekfarm.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "44.240778",
        "Longitude": "-123.772434",
        "Street": "5 Rivers Rd",
        "County": "Lane County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.772434,
          44.240778
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Pro Time Lawn Seed",
        "Address": "1712 SE Ankeny, Portland, OR, 97214",
        "City": "Portland",
        "State": "OR",
        "Zip Code": "97214",
        "Country": "USA",
        "Phone": "800.345.3295",
        "Fax": "503.296.5528",
        "Email": "info@protimelawnseed.com",
        "Website": "http://www.protimelawnseed.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Seeds",
        "Latitude": "45.522018",
        "Longitude": "-122.64834",
        "Street": "SE Ankeny St",
        "County": "Multnomah County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.64834,
          45.522018
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Progressive Plants",
        "Address": "10252 S Hwy U 111, Copperton, UT, 84006",
        "City": "Copperton",
        "State": "UT",
        "Zip Code": "84006",
        "Country": "USA",
        "Contact": "Kevin Hardy or Amanda",
        "Phone": "801.565.7333",
        "Fax": "801.565.7345",
        "Email": "sales@progressiveplants.com",
        "Email 2": "kevin@progressiveplants.com",
        "Website": "http://www.progressiveplants.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "40.565198",
        "Longitude": "-112.094239",
        "Street": "Copperton Cir",
        "County": "Salt Lake County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -112.094239,
          40.565198
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Purple Prairie Farm",
        "Address": "Rt 2 Box 176, Wyoming, IL, 61491",
        "City": "Wyoming",
        "State": "IL",
        "Zip Code": "61491",
        "Country": "USA",
        "Contact": "Gary",
        "Phone": "309.286.7356",
        "Email": "garycli@theramp.net",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "41.085606",
        "Longitude": "-89.788462",
        "County": "Stark County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.788462,
          41.085606
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Quality Seed Collections",
        "Address": "Box 1531, Kamloops, BC, V2C 6L8",
        "City": "Kamloops",
        "State": "BC",
        "Zip Code": "V2C 6L8",
        "Country": "Canada",
        "Contact": "Doug or Sandra Gregory",
        "Phone": "250.374.9689",
        "Fax": "250.374.9654",
        "Email": "qualityseed@telus.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Seeds",
        "Latitude": "0",
        "Longitude": "0"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          0,
          0
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "R E  Mitchell Nursery",
        "Address": "PO Box 336, Pine Hill, AL, 36769",
        "City": "Pine Hill",
        "State": "AL",
        "Zip Code": "36769",
        "Country": "USA",
        "Contact": "MacMillan Bloedel",
        "Phone": "334.682.9882",
        "Fax": "334.682.4481",
        "Email": "rbower@mbpi.com",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "31.991823",
        "Longitude": "-87.591295",
        "Street": "Pine St",
        "County": "Wilcox County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.591295,
          31.991823
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "RECON Native Plants Inc",
        "Address": "1755 Saturn Blvd, San Diego, CA, 92154-3903",
        "City": "San Diego",
        "State": "CA",
        "Zip Code": "92154-3903",
        "Country": "USA",
        "Contact": "Ryan West",
        "Phone": "619.423.2284",
        "Fax": "619.423.0632",
        "Email": "nativeplants@recon-us.com",
        "Website": "http://www.reconnativeplants.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants\nSeeds",
        "Established": "1999",
        "Hours": "M-F 1-4",
        "Latitude": "32.564862",
        "Longitude": "-117.092615",
        "Street": "Saturn Blvd",
        "County": "San Diego County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.092615,
          32.564862
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "RSS Field Services Inc - Fort Meade",
        "Address": "633 N Palmetto Ave, Fort Meade, FL, 33841",
        "City": "Fort Meade",
        "State": "FL",
        "Zip Code": "33841",
        "Country": "USA",
        "Contact": "Jay Allen or Ben Smith",
        "Email": "rssfrog.bs@gmail.com",
        "Email 2": "rssfld@verizon.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "27.757863",
        "Longitude": "-81.807872",
        "Street": "N Palmetto Ave",
        "County": "Polk County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.807872,
          27.757863
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Raemelton Farm",
        "Address": "2313 New Design Rd, Adamstown, MD, 21710",
        "City": "Adamstown",
        "State": "MD",
        "Zip Code": "21710",
        "Country": "USA",
        "Contact": "Steve Black",
        "Phone": "240.416.0714",
        "Fax": "240.990.9125",
        "Email": "steve@raemelton.com",
        "Website": "http://www.Raemelton.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "39.300313",
        "Longitude": "-77.459034",
        "Street": "New Design Rd",
        "County": "Frederick County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.459034,
          39.300313
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Rainier Seeds Inc",
        "Address": "1404 Fourth St, Davenport, WA, 99122",
        "City": "Davenport",
        "State": "WA",
        "Zip Code": "99122",
        "Country": "USA",
        "Contact": "Cathy Sawyer",
        "Phone": "800.828.8873",
        "Phone 2": "509.725.1235",
        "Fax": "509.725.7015",
        "Email": "rainerseeds@rainierseeds.com",
        "Email 2": "rainierseeds@rainierseeds.com",
        "Website": "http://rainierseeds.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail",
        "Product": "Seeds",
        "Latitude": "47.645928",
        "Longitude": "-118.147715",
        "Street": "4th St",
        "County": "Lincoln County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.147715,
          47.645928
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Raintree Nursery",
        "Address": "408 Butts Rd, Morton, WA, 98356",
        "City": "Morton",
        "State": "WA",
        "Zip Code": "98356",
        "Country": "USA",
        "Phone": "800.391.8892",
        "Fax": "888.770.8358",
        "Email": "help@raintreenursery.com",
        "Website": "http://www.raintreenursery.com",
        "Nursery Type": "Private",
        "Business Type": "Retail\nMail\nInternet",
        "Product": "Plants",
        "Latitude": "46.586996",
        "Longitude": "-122.414777",
        "Street": "Butts Rd",
        "County": "Lewis County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.414777,
          46.586996
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Ramah Navajo Community Enterprise Inc - Native Plants Nursery",
        "Address": "PO Box 635, Ramah, NM, 97321",
        "City": "Ramah",
        "State": "NM",
        "Zip Code": "97321",
        "Country": "USA",
        "Contact": "Samantha Whitetail Eagle",
        "Phone": "505.879.2301",
        "Email": "rnce@yahoo.com",
        "Nursery Type": "Tribal",
        "Product": "Plants",
        "Latitude": "44.65345",
        "Longitude": "-123.139526",
        "County": "Benton County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.139526,
          44.65345
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Rancho Lomitas Native Plant Nursery",
        "Address": "PO Box 442, Rio Grande City, TX, 78582",
        "City": "Rio Grande City",
        "State": "TX",
        "Zip Code": "78582",
        "Country": "USA",
        "Contact": "Benito Trevino",
        "Phone": "956.486.2576",
        "Fax": "956.486.2576",
        "Email": "info@rancholomitas.com",
        "Email 2": "lomitas@granderiver.com",
        "Website": "http://www.rancholomitas.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "26.499887",
        "Longitude": "-98.752428",
        "County": "Starr County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -98.752428,
          26.499887
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Randy's Perennials & Water Gardens",
        "Address": "523 W Crogan St (Hwy 29), Lawrenceville, GA, 30046",
        "City": "Lawrenceville",
        "State": "GA",
        "Zip Code": "30046",
        "Country": "USA",
        "Contact": "Randy Kucera",
        "Phone": "770.822.0676",
        "Fax": "770.822.1259",
        "Email": "info@randysnursery.com",
        "Website": "http://randysnursery.com/",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "33.951366",
        "Longitude": "-83.999181",
        "Street": "W Crogan St",
        "County": "Gwinnett County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.999181,
          33.951366
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Rascon Landscaping and Nursery",
        "Address": "4747 W Camino de Manana, Tucson, AZ, 85742",
        "City": "Tucson",
        "State": "AZ",
        "Zip Code": "85742",
        "Country": "USA",
        "Contact": "Cindy Hughes",
        "Phone": "520.297.8358",
        "Fax": "520.297.8350",
        "Email": "rasconlandscaping@gmail.com",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants\nSeeds",
        "Latitude": "32.416801",
        "Longitude": "-111.064008",
        "Street": "W Camino De Manana",
        "County": "Pima County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.064008,
          32.416801
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Raven Nursery",
        "Address": "22370 Indianola Rd NE, Poulsbo, WA, 98370",
        "City": "Poulsbo",
        "State": "WA",
        "Zip Code": "98370",
        "Country": "USA",
        "Contact": "Beatrice",
        "Phone": "360.598.3323",
        "Fax": "360.598.3323",
        "Email": "raventrees@msn.com",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "47.764508",
        "Longitude": "-122.55231",
        "Street": "Indianola Rd NE",
        "County": "Kitsap County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.55231,
          47.764508
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Red Lake Department of Natural Resources | Red Lake Forest Development",
        "Address": "24429 Green House Rd, Red Lake, MN, 56671",
        "City": "Red Lake",
        "State": "MN",
        "Zip Code": "56671",
        "Country": "USA",
        "Contact": "Gloria Whitefeather-Spears",
        "Phone": "218.679.3310",
        "Fax": "218.679.2921",
        "Email": "gspears@paulbunyan.net",
        "Website": "http://www.redlakednr.org/forest-development",
        "Nursery Type": "Tribal",
        "Business Type": "No public sales",
        "Product": "Plants",
        "Latitude": "47.85443",
        "Longitude": "-95.00397",
        "County": "Beltrami County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.00397,
          47.85443
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Red's Rhodies",
        "Address": "15920 SW Oberst Ln, Sherwood, OR, 97140",
        "City": "Sherwood",
        "State": "OR",
        "Zip Code": "97140",
        "Country": "USA",
        "Contact": "Red",
        "Phone": "503.625.6331",
        "Fax": "503.625.8055",
        "Email": "red@redsrhodies.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail",
        "Product": "Plants",
        "Latitude": "45.335548",
        "Longitude": "-122.840487",
        "Street": "SW Oberst Ln",
        "County": "Clackamas County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.840487,
          45.335548
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Redbud Native Plant Nursery LLC",
        "Address": "904 N Providence Rd, Media, PA, 19063",
        "City": "Media",
        "State": "PA",
        "Zip Code": "19063",
        "Country": "USA",
        "Contact": "Catherine Smith",
        "Phone": "610.892.2833",
        "Email": "info@redbudnativeplantnursery.com",
        "Website": "http://redbudnativeplantnursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "39.929424",
        "Longitude": "-75.387501",
        "Street": "N Providence Rd",
        "County": "Delaware County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.387501,
          39.929424
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Redwood Valley Rancheria | Basket Sedge Garden",
        "Address": "3250 Rd 1, Redwood Valley, CA, 95470",
        "City": "Redwood Valley",
        "State": "CA",
        "Zip Code": "95470",
        "Country": "USA",
        "Contact": "Chuck Williams",
        "Phone": "707.485.0361",
        "Fax": "707.485.5726",
        "Email": "redwoodres@pacific.net",
        "Nursery Type": "Tribal",
        "Product": "Plants",
        "Latitude": "39.286837",
        "Longitude": "-123.183716",
        "Street": "Rd I",
        "County": "Mendocino County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.183716,
          39.286837
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Reeseville Ridge Nursery",
        "Address": "512 S Main St, Reeseville, WI, 53579",
        "City": "Reeseville",
        "State": "WI",
        "Zip Code": "53579",
        "Country": "USA",
        "Contact": "Darrell J Kromm",
        "Phone": "920.927.3291",
        "Fax": "920.927.3291",
        "Email": "rrn@charter.net",
        "Email 2": "rrn@charter.net",
        "Website": "http://reesevilleridgenursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail",
        "Product": "Plants\nSeeds",
        "Latitude": "43.297387",
        "Longitude": "-88.852421",
        "Street": "S Main St",
        "County": "Dodge County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.852421,
          43.297387
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Reeves Wildflower Nursery",
        "Address": "28431 200th St, Harper, IA, 52231",
        "City": "Harper",
        "State": "IA",
        "Zip Code": "52231",
        "Country": "USA",
        "Contact": "Ray Reeves",
        "Phone": "641.635.2817",
        "Email": "rayreeves@lisco.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants\nSeeds",
        "Latitude": "41.366869",
        "Longitude": "-92.054699",
        "Street": "200th St",
        "County": "Keokuk County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -92.054699,
          41.366869
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Reflections of Nature",
        "Address": "850688 Hwy 17 S, Yulee, FL, 32097",
        "City": "Yulee",
        "State": "FL",
        "Zip Code": "32097",
        "Country": "USA",
        "Contact": "Angie Loper",
        "Phone": "904.225.9915",
        "Fax": "904.225.5333",
        "Email": "rnlnursery@comcast.net",
        "Email 2": "rnlnursery@comcast.net",
        "Website": "http://rnlnursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "30.619785",
        "Longitude": "-81.598094",
        "Street": "US Highway 17",
        "County": "Nassau County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.598094,
          30.619785
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Regional Parks Botanic Garden",
        "Address": "Intersection of Wildcat Canyon Rd and S Park Dr, Berkeley, CA, 94708-2396",
        "City": "Berkeley",
        "State": "CA",
        "Zip Code": "94708-2396",
        "Country": "USA",
        "Phone": "510.544.3169",
        "Email": "bgarden@ebparks.org",
        "Email 2": "bgarden@ebparks.org",
        "Website": "http://nativeplants.org/",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "37.891825",
        "Longitude": "-122.260429",
        "County": "Alameda County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.260429,
          37.891825
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Renee's Garden",
        "Address": "6060A Graham Hill Rd, Felton, CA, 95018",
        "City": "Felton",
        "State": "CA",
        "Zip Code": "95018",
        "Country": "USA",
        "Contact": "Renee Shepherd",
        "Phone": "888.880.7228",
        "Fax": "831.335.7227",
        "Email": "customerservice@reneesgarden.com",
        "Website": "http://www.reneesgarden.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants\nSeeds",
        "Latitude": "37.050349",
        "Longitude": "-122.066396",
        "Street": "Graham Hill Rd",
        "County": "Santa Cruz County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.066396,
          37.050349
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Richardson Agco",
        "Address": "1500 W Vega Blvd, Vega, TX, 79092",
        "City": "Vega",
        "State": "TX",
        "Zip Code": "79092",
        "Country": "USA",
        "Contact": "Wayne Richardson",
        "Phone": "806.267.2459",
        "Fax": "806.267.2997",
        "Email": "agco@1S.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Seeds",
        "Latitude": "35.244656",
        "Longitude": "-102.436015",
        "Street": "Vega Blvd",
        "County": "Oldham County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -102.436015,
          35.244656
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Risse Greenhouses",
        "Address": "981 Risse Rd , Fairbanks, AK, 99712-3115",
        "City": "Fairbanks",
        "State": "AK",
        "Zip Code": "99712-3115",
        "Country": "USA",
        "Contact": "Glen Risse",
        "Phone": "907.488.6973",
        "Email": "risse@alaska.net",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "64.903519",
        "Longitude": "-147.411926",
        "Street": "Risse Rd",
        "County": "Fairbanks North Star Borough"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -147.411926,
          64.903519
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Riverside Native Trees",
        "Address": "2295 River Rd, Delaware, OH, 43015",
        "City": "Delaware",
        "State": "OH",
        "Zip Code": "43015",
        "Country": "USA",
        "Contact": "Ed Kapraly",
        "Phone": "740.815.3230",
        "Fax": "740.943.5068",
        "Email": "ekapraly@gmail.com",
        "Website": "http://riversidenativetrees.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "40.357527",
        "Longitude": "-83.180982",
        "Street": "River Rd",
        "County": "Delaware County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.180982,
          40.357527
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Riverside Nursery Inc",
        "Address": "2306 W Riverside Dr, Salem, VA, 24153",
        "City": "Salem",
        "State": "VA",
        "Zip Code": "24153",
        "Country": "USA",
        "Phone": "540.387.4020",
        "Email": "botanicalbruce@gmail.com",
        "Website": "http://www.riversidenurseryva.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "37.280144",
        "Longitude": "-80.096583",
        "Street": "W Riverside Dr",
        "County": "Roanoke County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.096583,
          37.280144
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Robinson Rancheria",
        "Address": "1545 E  Hwy 20, Nice, CA, 95464",
        "City": "Nice",
        "State": "CA",
        "Zip Code": "95464",
        "Country": "USA",
        "Contact": "Mike Schaver",
        "Phone": "707.275.0527",
        "Fax": "707.275.0235",
        "Email": "webmaster@rrcbc-nsn.gov",
        "Website": "http://www.robinsonrancheria.org/environmental/",
        "Nursery Type": "Tribal",
        "Business Type": "Contract",
        "Product": "Plants",
        "Latitude": "39.14037",
        "Longitude": "-122.88467",
        "Street": "E State Hwy 20",
        "County": "Lake County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.88467,
          39.14037
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Rock Spring Restorations",
        "Address": "6025 Old Hwy 411 S, Chatsworth, GA, 30705",
        "City": "Chatsworth",
        "State": "GA",
        "Zip Code": "30705",
        "Country": "USA",
        "Contact": "Walter Bland",
        "Phone": "404.626.8020",
        "Email": "admin@rockspringrestorations.com",
        "Website": "http://www.rockspringrestorations.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "34.655803",
        "Longitude": "-84.710072",
        "Street": "Old Highway 411",
        "County": "Murray County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.710072,
          34.655803
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Rocky Mountain Native Plants Company",
        "Address": "3780 Silt Mesa Rd, Rifle, CO, 81650",
        "City": "Rifle",
        "State": "CO",
        "Zip Code": "81650",
        "Country": "USA",
        "Contact": "Randy Mandel",
        "Phone": "970.625.4769",
        "Fax": "970.625.3276",
        "Email": "ehorvath@rmnativeplants.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "39.563729",
        "Longitude": "-107.726875",
        "Street": "Silt Mesa Rd",
        "County": "Garfield County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -107.726875,
          39.563729
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Rocky Mountain Rare Plants",
        "Address": "1706 Deerpath Rd, Franktown, CO, 80116-9462",
        "City": "Franktown",
        "State": "CO",
        "Zip Code": "80116-9462",
        "Country": "USA",
        "Contact": "Bob Skowron",
        "Fax": "303.265.9263",
        "Email": "staff@rmrp.com",
        "Nursery Type": "Private",
        "Business Type": "Retail\nMail",
        "Product": "Plants",
        "Latitude": "39.388181",
        "Longitude": "-104.696402",
        "Street": "Deerpath Rd",
        "County": "Douglas County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -104.696402,
          39.388181
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Rohdes Nursery",
        "Address": "3637 Marquis Dr   Ste  111, Garland, TX, 75042",
        "City": "Garland",
        "State": "TX",
        "Zip Code": "75042",
        "Country": "USA",
        "Contact": "Karin Gilley or Gregory Rohde",
        "Phone": "972.864.1934",
        "Fax": "972.864.0128",
        "Email": "grohde@greensense.net",
        "Email 2": "grohde@greensense.net",
        "Website": "http://www.beorganic.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail",
        "Product": "Plants",
        "Established": "1972",
        "Hours": "M-Sat 8-5:30 Sun 10-5",
        "Latitude": "32.902099",
        "Longitude": "-96.68629",
        "Street": "Marquis Dr",
        "County": "Dallas County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.68629,
          32.902099
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Rolling Acres Native Landscape Nursery LLC",
        "Address": "2513 N Humpty Dumpty Rd, Reedsville, WI, 54230",
        "City": "Reedsville",
        "State": "WI",
        "Zip Code": "54230",
        "Country": "USA",
        "Contact": "James",
        "Phone": "877.205.9817",
        "Email": "rolling.acres.native.nursery@earthlink.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "44.128107",
        "Longitude": "-87.991413",
        "Street": "Humpty Dumpty Rd",
        "County": "Manitowoc County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.991413,
          44.128107
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Rolling Green Nursery",
        "Address": "64 Breakfast Hill Rd, Greenland, NH, 03840",
        "City": "Greenland",
        "State": "NH",
        "Zip Code": "03840",
        "Country": "USA",
        "Contact": "Beth Simpson",
        "Phone": "603.436.2732",
        "Fax": "603.436.2309",
        "Email": "info@rollinggreennursery.com",
        "Website": "http://www.rollinggreennursery.com",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Established": "1976",
        "Hours": "M-Sat 8-5 Sun 10-4",
        "Latitude": "43.01896",
        "Longitude": "-70.830143",
        "Street": "Breakfast Hill Rd",
        "County": "Rockingham County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -70.830143,
          43.01896
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Rose Hill Nursery",
        "Address": "2282 Teller Rd, Rose Hill, IA, 52586",
        "City": "Rose Hill",
        "State": "IA",
        "Zip Code": "52586",
        "Country": "USA",
        "Phone": "515.632.8308",
        "Email": "rockman49@hotmail.com",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "41.326058",
        "Longitude": "-92.49133",
        "Street": "Teller Ave",
        "County": "Mahaska County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -92.49133,
          41.326058
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Round Butte Seed Growers Inc",
        "Address": "505 C St, Culver, OR, 97734",
        "City": "Culver",
        "State": "OR",
        "Zip Code": "97734",
        "Country": "USA",
        "Contact": "Britt Spaulding",
        "Phone": "541.546.5222",
        "Email": "bspaulding@rbseed.com",
        "Website": "http://helenaculver.com/",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Seeds",
        "Established": "1961",
        "Latitude": "44.525292",
        "Longitude": "-121.212855",
        "Street": "C St",
        "County": "Jefferson County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.212855,
          44.525292
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Roundstone Native Seed Company",
        "Address": "9764 Raider Hollow Road, Upton, KY, 42784",
        "City": "Upton",
        "State": "KY",
        "Zip Code": "42784",
        "Country": "USA",
        "Contact": "Sales",
        "Phone": "888.531.2353",
        "Phone 2": "270.531.3034",
        "Email": "sales@roundstoneseed.com",
        "Website": "https://roundstoneseed.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail\nInternet\nContract\nResearch",
        "Product": "Seeds",
        "Hours": "M-F, 8:00-4:00 CST",
        "Latitude": "37.419117",
        "Longitude": "-86.010987",
        "Street": "Raider Hollow Rd",
        "County": "Hart County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.010987,
          37.419117
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Rugged Country Plants",
        "Address": "53671 W Crockett Rd, Milton-Freewater, OR, 97862",
        "City": "Milton-Freewater",
        "State": "OR",
        "Zip Code": "97862",
        "Country": "USA",
        "Contact": "Hillary Currans",
        "Phone": "541.938.3970",
        "Fax": "541.938.8182",
        "Email": "info@ruggedcountryplants.com",
        "Email 2": "info@ruggedcountryplants.com",
        "Website": "http://www.ruggedcountryplants.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nInternet\nContract",
        "Product": "Plants",
        "Latitude": "45.974069",
        "Longitude": "-118.392701",
        "Street": "W Crockett Rd",
        "County": "Umatilla County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.392701,
          45.974069
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Runway Growers  Inc",
        "Address": "2911 SW 36th St, Fort Lauderdale, FL, 33312",
        "City": "Fort Lauderdale",
        "State": "FL",
        "Zip Code": "33312",
        "Country": "USA",
        "Contact": "Jamie Hayes",
        "Phone": "954.584.0269",
        "Fax": "954.584.6958",
        "Email": "runwaygrowersjamie@gmail.com",
        "Website": "http://www.runwaygrowers.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nContract",
        "Product": "Plants",
        "Latitude": "26.077139",
        "Longitude": "-80.179528",
        "Street": "SW 36th St",
        "County": "Broward County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.179528,
          26.077139
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Rutland Forest Nursery",
        "Address": "502 Owen-Medford Rd, Lenox, GA, 31637",
        "City": "Lenox",
        "State": "GA",
        "Zip Code": "31637",
        "Country": "USA",
        "Contact": "Terrell Rutland",
        "Phone": "229.382.5504",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "31.341602",
        "Longitude": "-83.44971",
        "Street": "Owen Medford Rd",
        "County": "Tift County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.44971,
          31.341602
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "S&S Seeds",
        "Address": "PO Box 1275, Carpinteria, CA, 93013",
        "City": "Carpinteria",
        "State": "CA",
        "Zip Code": "93013",
        "Country": "USA",
        "Contact": "Tracey Nisky",
        "Phone": "805.684.0436",
        "Fax": "805.684.2798",
        "Email": "traceynisky@ssseeds.com",
        "Email 2": "info@ssseeds.com",
        "Website": "http://www.ssseeds.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Seeds",
        "Established": "1979",
        "Hours": "M-F 8-5",
        "Latitude": "34.405045",
        "Longitude": "-119.520525",
        "County": "Santa Barbara County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.520525,
          34.405045
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "S&S Seeds Inc",
        "Address": "6155 Carpinteria Ave, Carpinteria, CA, 93014-1275",
        "City": "Carpinteria",
        "State": "CA",
        "Zip Code": "93014-1275",
        "Country": "USA",
        "Contact": "Jody Miller",
        "Phone": "805.684.0436",
        "Fax": "805.684.2798",
        "Email": "jodymiller@ssseeds.com",
        "Email 2": "info@ssseeds.com",
        "Website": "http://www.ssseeds.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Seeds",
        "Established": "1979",
        "Hours": "M-F 8-5",
        "Latitude": "34.386125",
        "Longitude": "-119.494839",
        "Street": "Carpinteria Ave",
        "County": "Santa Barbara County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.494839,
          34.386125
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "S&S Seeds | Environmental Seed Producers",
        "Address": "175 Scravel Hill Rd SE, Albany, OR, 97322",
        "City": "Albany",
        "State": "OR",
        "Zip Code": "97322",
        "Country": "USA",
        "Contact": "Craig Edminister",
        "Phone": "541.928.5868",
        "Fax": "541.928.5581",
        "Email": "craig@wildflowerseed.com",
        "Website": "http://www.wildflowerseed.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Seeds",
        "Latitude": "44.642569",
        "Longitude": "-123.026352",
        "Street": "Scravel Hill Rd SE",
        "County": "Linn County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.026352,
          44.642569
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "SGS North America Inc",
        "Address": "1405 32nd Ave, Brookings, SD, 57006",
        "City": "Brookings",
        "State": "SD",
        "Zip Code": "57006",
        "Country": "USA",
        "Contact": "Laura Carlson RST",
        "Phone": "605.692.7611",
        "Phone 2": "877.692.7611",
        "Fax": "605.692.7617",
        "Email": "us.seedinfo@sgs.com",
        "Website": "https://www.sgs.com/en?utm_source=googlemybusiness&utm_medium=Referral_GMB&utm_campaign=SGS%20North%20America%20Inc.%20-%20Seed%20Services",
        "Nursery Type": "Private",
        "Product": "Services",
        "Established": "1993",
        "Hours": "M-F 8-5",
        "Latitude": "44.312461",
        "Longitude": "-96.75193",
        "Street": "32nd Ave",
        "County": "Brookings County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.75193,
          44.312461
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "SKY Native Plant Nursery",
        "Address": "14713 River Bend Rd, Mount Vernon, WA, 98273",
        "City": "Mount Vernon",
        "State": "WA",
        "Zip Code": "98273",
        "Country": "USA",
        "Contact": "Nathan 360.661.4280 or Andy",
        "Phone": "360.848.5828",
        "Phone 2": "360.661.4280",
        "Fax": "360.854.7665",
        "Email": "nelanson@pnt.org",
        "Email 2": "skynursery@pnt.org",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "48.432531",
        "Longitude": "-122.359589",
        "Street": "River Bend Rd",
        "County": "Skagit County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.359589,
          48.432531
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "SUNCO Trees",
        "Address": "2269 2nd Ave N, Lake Worth, FL, 33461",
        "City": "Lake Worth",
        "State": "FL",
        "Zip Code": "33461",
        "Country": "USA",
        "Contact": "Jerry Fritz",
        "Phone": "561.309.2772",
        "Fax": "561.588.9486",
        "Email": "suncojerry@aol.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "26.619256",
        "Longitude": "-80.077316",
        "Street": "2nd Ave N",
        "County": "Palm Beach County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.077316,
          26.619256
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Salish & Kootenai Tribal College Native Plant Nursery",
        "Address": "PO Box 117, Pablo, MT, 59855",
        "City": "Pablo",
        "State": "MT",
        "Zip Code": "59855",
        "Country": "USA",
        "Contact": "Dawn Thomas",
        "Phone": "406.675.4795",
        "Fax": "406.675.4800",
        "Email": "dawn_thomas@skc.edu",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "47.60021",
        "Longitude": "-114.119",
        "County": "Lake County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -114.119,
          47.60021
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Samara Restoration",
        "Address": "5260 Dows Prairie Rd, Mckinleyville, CA, 95519",
        "City": "Mckinleyville",
        "State": "CA",
        "Zip Code": "95519",
        "Country": "USA",
        "Contact": "Josh Koepke",
        "Phone": "707.601.3478",
        "Email": "josh@samararestoration.com",
        "Website": "www.samararestoration.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nContract",
        "Product": "Plants\nServices",
        "Established": "2009",
        "Hours": "By Appt Only",
        "Latitude": "41.002377",
        "Longitude": "-124.105244",
        "Street": "Dows Prairie Rd",
        "County": "Humboldt County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -124.105244,
          41.002377
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "San Felasco Nurseries Inc",
        "Address": "7315 NW 126 St, Gainesville, FL, 32653",
        "City": "Gainesville",
        "State": "FL",
        "Zip Code": "32653",
        "Country": "USA",
        "Contact": "Alan Shapiro",
        "Phone": "352.332.1220",
        "Fax": "352.332.3113",
        "Email": "alan@grandiflora.pro",
        "Website": "http://www.grandiflora.pro/",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "29.722077",
        "Longitude": "-82.47455",
        "Street": "NW 126th St",
        "County": "Alachua County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.47455,
          29.722077
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "San Marcos Growers",
        "Address": "125 S San Marcos Rd, Santa Barbara, CA, 93111",
        "City": "Santa Barbara",
        "State": "CA",
        "Zip Code": "93111",
        "Country": "USA",
        "Contact": "Kathy Pierce",
        "Phone": "805.683.1561",
        "Fax": "805.964.1329",
        "Email": "sales@smgrowers.com",
        "Website": "http://www.smgrowers.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Established": "1980",
        "Hours": "M-F 7:30-4:30 Sat 8-12",
        "Latitude": "34.438547",
        "Longitude": "-119.796816",
        "Street": "S San Marcos Rd",
        "County": "Santa Barbara County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.796816,
          34.438547
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Sand Mountain Herbs",
        "Address": "321 CR 18, Fyffe, AL, 35971-3902",
        "City": "Fyffe",
        "State": "AL",
        "Zip Code": "35971-3902",
        "Country": "USA",
        "Contact": "Larry Chandler",
        "Phone": "256.659.2726",
        "Email": "Sales@SandMountainHerbs.com",
        "Email 2": "info@sandmountainherbs.com",
        "Website": "http://www.sandmountainherbs.com",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Seeds",
        "Latitude": "34.390749",
        "Longitude": "-85.980791",
        "Street": "County Rd 18",
        "County": "Dekalb County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.980791,
          34.390749
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Sand Prairie Farms Inc",
        "Address": "185 Rogers Rd, Ohio, IL, 61349",
        "City": "Ohio",
        "State": "IL",
        "Zip Code": "61349",
        "Country": "USA",
        "Contact": "Tom Yucus",
        "Phone": "815.376.6641",
        "Fax": "815.376.2321",
        "Email": "tomyucus@yahoo.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail",
        "Product": "Seeds",
        "Latitude": "41.611836",
        "Longitude": "-89.47777",
        "Street": "Rogers Rd",
        "County": "Lee County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.47777,
          41.611836
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Sandhill Farm",
        "Address": "11250 10 Mile Rd NE, Rockford, MI, 49341",
        "City": "Rockford",
        "State": "MI",
        "Zip Code": "49341",
        "Country": "USA",
        "Contact": "Cheryl S Tolley",
        "Phone": "616.691.8214",
        "Fax": "616.691.7872",
        "Email": "cherylt@iserv.net",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "43.11355",
        "Longitude": "-85.389211",
        "Street": "10 Mile Rd NE",
        "County": "Kent County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.389211,
          43.11355
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Sandy Wilson Native Plant & Aquatic | SW Horticultural Services",
        "Address": "834 Church Rd, Harleysville, PA, 19438",
        "City": "Harleysville",
        "State": "PA",
        "Zip Code": "19438",
        "Country": "USA",
        "Contact": "Sandy Wilson",
        "Phone": "610.584.6302",
        "Email": "sanwilinc@gmail.com",
        "Business Type": "Retail",
        "Product": "Plants\nSeeds",
        "Established": "1980",
        "Latitude": "40.235263",
        "Longitude": "-75.391985",
        "Street": "Church Rd",
        "County": "Montgomery County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.391985,
          40.235263
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Santa Ana Garden Center",
        "Address": "960 Hwy 550  Ste C , Pueblo of Santa Ana, NM, 87004",
        "City": "Pueblo of Santa Ana",
        "State": "NM",
        "Zip Code": "87004",
        "Country": "USA",
        "Contact": "Carol Scrivner",
        "Phone": "505.867.1322",
        "Fax": "505.867.6662",
        "Email": "info@santaana.org",
        "Website": "http://www.santaana.org/garden.htm",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "35.324874",
        "Longitude": "-106.562244",
        "Street": "US Highway 550",
        "County": "Sandoval County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -106.562244,
          35.324874
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Santa Barbara Botanic Garden",
        "Address": "1212 Mission Canyon Rd, Santa Barbara, CA, 93105",
        "City": "Santa Barbara",
        "State": "CA",
        "Zip Code": "93105",
        "Country": "USA",
        "Contact": "Bruce Reed",
        "Phone": "805.682.4726",
        "Fax": "805.563.0352",
        "Email": "info@sbbg.org",
        "Email 2": "breed@sbbg.org",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "34.456744",
        "Longitude": "-119.708335",
        "Street": "Mission Canyon Rd",
        "County": "Santa Barbara County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.708335,
          34.456744
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Sassafras Farm",
        "Address": "7029 Bray Rd, Hayes, VA, 23072",
        "City": "Hayes",
        "State": "VA",
        "Zip Code": "23072",
        "Country": "USA",
        "Contact": "Denise Greene",
        "Phone": "804.642.0923",
        "Fax": "804.642.0923",
        "Email": "sassafrasfarm@verizon.net",
        "Email 2": "sassafrasfarm@verizon.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "37.279894",
        "Longitude": "-76.514652",
        "Street": "Bray Rd",
        "County": "Gloucester County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.514652,
          37.279894
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Sauvie Island Ornamentals  LLC ",
        "Address": "15955 NW Lucy Reeder Rd, Portland, OR, 97231",
        "City": "Portland",
        "State": "OR",
        "Zip Code": "97231",
        "Country": "USA",
        "Phone": "503.621.3086",
        "Fax": "503.621.1292",
        "Email": "siotrees@yahoo.com",
        "Website": "http://www.siotrees.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "45.689492",
        "Longitude": "-122.838003",
        "Street": "NW Lucy Reeder Rd",
        "County": "Multnomah County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.838003,
          45.689492
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Scholls Valley Native Nursery  LLC",
        "Address": "PO Box 231088, Tigard, OR, 97281",
        "City": "Tigard",
        "State": "OR",
        "Zip Code": "97281",
        "Country": "USA",
        "Contact": "Rachael Roberst",
        "Phone": "503.624.1766",
        "Fax": "503.624.2766",
        "Email": "rachael@schollsvalley.com",
        "Email 2": "Al@schollvalley.com",
        "Website": "http://www.schollsvalley.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "45.548616",
        "Longitude": "-123.114725",
        "County": "Washington County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.114725,
          45.548616
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Schott Nurseries LLC",
        "Address": "2932 Basehores Mill Road\r\n, Taneytown, MD, 21787",
        "City": "Taneytown",
        "State": "MD",
        "Zip Code": "21787",
        "Country": "USA",
        "Contact": "Schott Nurseries LLC",
        "Phone": "410.756.9175",
        "Email": "sales@schottnurseries.com",
        "Website": "https://www.schottnurseries.com/",
        "Latitude": "39.652989",
        "Longitude": "-77.117894",
        "Street": "Basehores Mill Rd",
        "County": "Carroll County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.117894,
          39.652989
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Schumachers Nursery & Berry Farm Inc",
        "Address": "37806 910th St, Heron Lake, MN, 56137",
        "City": "Heron Lake",
        "State": "MN",
        "Zip Code": "56137",
        "Country": "USA",
        "Contact": "Judy Schumacher",
        "Phone": "507.793.2288",
        "Fax": "507.793.0025",
        "Email": "berry01@centurytel.net",
        "Website": "http://www.schumachersnursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "43.804542",
        "Longitude": "-95.319578",
        "Street": "910th St",
        "County": "Jackson County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.319578,
          43.804542
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Scioto Gardens",
        "Address": "3351 SR 37 W, Delaware, OH, 43015",
        "City": "Delaware",
        "State": "OH",
        "Zip Code": "43015",
        "Country": "USA",
        "Contact": "Michael Johnson",
        "Phone": "740.363.8264",
        "Fax": "740.363.8264",
        "Email": "sales@sciotogardens.com",
        "Website": "http://www.sciotogardens.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "40.298596",
        "Longitude": "-83.129309",
        "Street": "State Rte 37",
        "County": "Delaware County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.129309,
          40.298596
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Sebastian River Ranch, LLC",
        "Address": "5955 82nd Ave, Vero Beach, FL, 32966",
        "City": "Vero Beach",
        "State": "FL",
        "Zip Code": "32966",
        "Country": "USA",
        "Contact": "Jim",
        "Phone": "772.778.6560",
        "Fax": "772.778.6532",
        "Email": "jim@sebastianriverfarms.com",
        "Email 2": "info@sebastianriverfarms.com",
        "Website": "http://www.sebastianriverfarms.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "27.704346",
        "Longitude": "-80.509359",
        "Street": "82nd Ave",
        "County": "Indian River County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.509359,
          27.704346
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Seed 'N Tree Farms",
        "Address": "5805 Our Rd, Palmer, AK, 99645",
        "City": "Palmer",
        "State": "AK",
        "Zip Code": "99645",
        "Country": "USA",
        "Contact": "Martin Martinez",
        "Phone": "907.746.7125",
        "Email": "SeedntreeAK@gci.net",
        "Nursery Type": "Private",
        "Product": "Plants\nSeeds",
        "Latitude": "61.516385",
        "Longitude": "-149.053705",
        "Street": "Our Rd",
        "County": "Matanuska-Susitna Borough"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -149.053705,
          61.516385
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "SeedClean",
        "Address": "8120 Blaikie Ct, Sarasota, FL, 34240",
        "City": "Sarasota",
        "State": "FL",
        "Zip Code": "34240",
        "Country": "USA",
        "Contact": "Gil Sharell",
        "Phone": "941.378.3540",
        "Phone 2": "941.378.2700",
        "Fax": "941.378.0020",
        "Email": "info@seedclean.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nMail\nContract",
        "Product": "Seeds",
        "Latitude": "27.346421",
        "Longitude": "-82.404099",
        "Street": "Blaikie Ct",
        "County": "Sarasota County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.404099,
          27.346421
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Seedhunt",
        "Address": "PO Box 96, Freedom, CA, 95019-0096",
        "City": "Freedom",
        "State": "CA",
        "Zip Code": "95019-0096",
        "Country": "USA",
        "Contact": "Virginia Hunt",
        "Fax": "831.728.5131",
        "Email": "seedhunt@cruzio.com",
        "Website": "http://seedhunt.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Seeds",
        "Latitude": "36.940612",
        "Longitude": "-121.782188",
        "Street": "Freedom Blvd",
        "County": "Santa Cruz County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.782188,
          36.940612
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Seeds Trust | High Altitude Gardens",
        "Address": "9255 Loy Ln, Cornville, AZ, 86325",
        "City": "Cornville",
        "State": "AZ",
        "Zip Code": "86325",
        "Country": "USA",
        "Contact": "Bill McDorman",
        "Phone": "928.649.3315",
        "Email": "support2@seedstrust.com",
        "Website": "https://www.seedstrust.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail\nInternet\nContract",
        "Product": "Seeds",
        "Established": "1984",
        "Hours": "by appt",
        "Latitude": "34.710157",
        "Longitude": "-111.923605",
        "Street": "Loy Ln",
        "County": "Yavapai County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.923605,
          34.710157
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Seeds Trust-High Altitude Gardens",
        "Address": "9255 Loya Ln, Cornville, AZ, 86325",
        "City": "Cornville",
        "State": "AZ",
        "Zip Code": "86325",
        "Country": "USA",
        "Contact": "Bill McDormand",
        "Phone": "928.649.3315",
        "Fax": "928.649.8181",
        "Email": "support3@seedstrust.com",
        "Website": "http://secure.seedstrust.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail",
        "Product": "Seeds",
        "Latitude": "34.718707",
        "Longitude": "-111.925554",
        "Street": "E Cornville Rd",
        "County": "Yavapai County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.925554,
          34.718707
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Seeds West Garden Seeds",
        "Address": "317 14th St NW, Albuquerque, NM, 87104",
        "City": "Albuquerque",
        "State": "NM",
        "Zip Code": "87104",
        "Country": "USA",
        "Phone": "505.843.9713",
        "Fax": "505.867.3395",
        "Business Type": "Wholesale\nRetail\nContract",
        "Product": "Plants",
        "Latitude": "35.091293",
        "Longitude": "-106.662579",
        "Street": "14th St NW",
        "County": "Bernalillo County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -106.662579,
          35.091293
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Seeds of the Prairie",
        "Address": "Downers Grove, IL",
        "City": "Downers Grove",
        "State": "IL",
        "Zip Code": "60515",
        "Country": "USA",
        "Contact": "Kathy Cullen",
        "Phone": "708.415.8108",
        "Email": "service@seedsoftheprairie.com",
        "Website": "http://www.seedsoftheprairie.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail\nInternet",
        "Product": "Seeds",
        "Hours": "8am-7pm Monday -Saturday",
        "Latitude": "41.816956",
        "Longitude": "-88.024516",
        "Street": "Downers Dr",
        "County": "Dupage County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.024516,
          41.816956
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Segi Consulting LLC",
        "Address": "P.O. Box 785\r\n, Trinidad, CA, 95570",
        "City": "Trinidad",
        "State": "CA",
        "Zip Code": "95570",
        "Country": "USA",
        "Contact": "Jt Abbott",
        "Phone": "707.616.1472",
        "Phone 2": "530.566.5051",
        "Email": "segiconsultant2@gmail.com",
        "Website": "https://www.segiconsulting.com/",
        "Latitude": "41.05929",
        "Longitude": "-124.14312",
        "County": "Humboldt County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -124.14312,
          41.05929
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Sequoia Orchids & Redwoods",
        "Address": "392 16th St, Fortuna, CA, 95540",
        "City": "Fortuna",
        "State": "CA",
        "Zip Code": "95540",
        "Country": "USA",
        "Contact": "Chad Lake",
        "Phone": "707.725.5020",
        "Email": "chad@sequoiaorchids.com",
        "Website": "http://sequoiaorchids.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nInternet",
        "Product": "Plants",
        "Latitude": "40.595844",
        "Longitude": "-124.150495",
        "Street": "16th St",
        "County": "Humboldt County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -124.150495,
          40.595844
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Sevenoaks Native Nursery LLC",
        "Address": "29730 Harvest Dr SW, Albany, OR, 97321",
        "City": "Albany",
        "State": "OR",
        "Zip Code": "97321",
        "Country": "USA",
        "Contact": "Mike Ridling or Scott Anderson",
        "Phone": "541.757.6520",
        "Fax": "541.738.2607",
        "Email": "info@sevenoaksnativenursery.com",
        "Website": "http://www.sevenoaksnativenursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nContract",
        "Product": "Plants",
        "Established": "1979",
        "Hours": "M-F 8-4:30",
        "Latitude": "44.526741",
        "Longitude": "-123.193046",
        "Street": "Harvest Dr SW",
        "County": "Linn County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.193046,
          44.526741
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Shadowlawn Nursery",
        "Address": "2729 Co Rd 218, Penney Farms, FL, 32079-0515",
        "City": "Penney Farms",
        "State": "FL",
        "Zip Code": "32079-0515",
        "Country": "USA",
        "Contact": "Cooper Murphy",
        "Phone": "904.269.5857",
        "Fax": "904.269.5857",
        "Email": "cmurphy@shadowlawnfarms.com",
        "Email 2": "bjackson@shadowlawnnursery.net",
        "Website": "http://shadowlawnnursery.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "30.00495",
        "Longitude": "-81.807115",
        "Street": "County Rd 218",
        "County": "Clay County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.807115,
          30.00495
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Shady Creek Native Plants and Environmental Consulting",
        "Address": "28948 Simpson Rd, Aldergrove, BC, V4X 1H9",
        "City": "Aldergrove",
        "State": "BC",
        "Zip Code": "V4X 1H9",
        "Country": "Canada",
        "Contact": "Myles Hargrove",
        "Phone": "604.856.2010",
        "Fax": "604.746.2011",
        "Email": "info@shadycreek.ca",
        "Website": "http://www.shadycreek.ca/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "43.419596",
        "Longitude": "-75.224784",
        "County": "Oneida County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.224784,
          43.419596
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Shady Grove Plantation Nursery",
        "Address": "3030 Charleston Hwy, Orangeburg, SC, 29115",
        "City": "Orangeburg",
        "State": "SC",
        "Zip Code": "29115",
        "Country": "USA",
        "Contact": "Jeb",
        "Phone": "803.534.5683",
        "Fax": "803.534.5699",
        "Email": "shadygrove@sc.rr.com",
        "Website": "http://www.shadygrovenursery.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "33.450128",
        "Longitude": "-80.813992",
        "Street": "Charleston Hwy",
        "County": "Orangeburg County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.813992,
          33.450128
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Shady Oak Farm",
        "Address": "12876 SW CR 231, Brooker , FL, 32622",
        "City": "Brooker",
        "State": "FL",
        "Zip Code": "32622",
        "Country": "USA",
        "Contact": "Charlotte MacCallum",
        "Phone": "877.485.2458",
        "Email": "cmaccallum.email@gmail.com",
        "Website": "http://www.butterfliesetc.com/caterpillar-food-plants/native-butterfly-host-plants-for-north-America",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants\nServices",
        "Latitude": "29.859714",
        "Longitude": "-82.258377",
        "Street": "SW County Rd 231",
        "County": "Bradford County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.258377,
          29.859714
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Sharp Bros Seed Company",
        "Address": "1005 S Sycamore, Healy, KS, 67850",
        "City": "Healy",
        "State": "KS",
        "Zip Code": "67850",
        "Country": "USA",
        "Contact": "Mark Jensen",
        "Phone": "620.398.2231",
        "Phone 2": "800.462.8483",
        "Fax": "620.398.2220",
        "Email": "buffalo@sharpseed.com",
        "Email 2": "buffalo@sharpseed.com",
        "Website": "http://www.sharpseed.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail",
        "Product": "Seeds",
        "Latitude": "38.599871",
        "Longitude": "-100.616972",
        "Street": "S Sycamore St",
        "County": "Lane County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -100.616972,
          38.599871
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Sharp Bros Seed Company of Missouri",
        "Address": "396 SW Davis-Ladue, Clinton, MO, 64735",
        "City": "Clinton",
        "State": "MO",
        "Zip Code": "64735",
        "Country": "USA",
        "Phone": "660.885.7551",
        "Fax": "660.885.8647",
        "Email": "sales@sharpbro.com",
        "Email 2": "info@buffalobrandseed.com",
        "Website": "http://www.sharpseed.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail",
        "Product": "Seeds",
        "Latitude": "38.310874",
        "Longitude": "-93.874269",
        "Street": "Davis St",
        "County": "Henry County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.874269,
          38.310874
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Shoestring Acres Seed",
        "Address": "3929 Washington St, Lincoln, NE, 68506",
        "City": "Lincoln",
        "State": "NE",
        "Zip Code": "68506",
        "Country": "USA",
        "Contact": "Alison Krohn",
        "Phone": "402.310.7353",
        "Email": "akrohn@shoestringseed.com",
        "Website": "http://www.shoestringseed.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nContract",
        "Product": "Seeds",
        "Latitude": "40.797761",
        "Longitude": "-96.663852",
        "Street": "Washington St",
        "County": "Lancaster County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.663852,
          40.797761
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Shooting Star Native Seeds",
        "Address": "20740 CR 33, Spring Grove, MN, 55947",
        "City": "Spring Grove",
        "State": "MN",
        "Zip Code": "55947",
        "Country": "USA",
        "Contact": "Mark Udstuen",
        "Phone": "507.498.3944",
        "Fax": "507.498.3953",
        "Email": "mark@ssns.co",
        "Website": "http://www.shootingstarnativeseed.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Seeds",
        "Latitude": "43.557597",
        "Longitude": "-91.666127",
        "Street": "County Rd 33",
        "County": "Houston County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -91.666127,
          43.557597
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Sierra Seed Supply",
        "Address": "358 Williams Valley Rd, Greenville, CA, 95947",
        "City": "Greenville",
        "State": "CA",
        "Zip Code": "95947",
        "Country": "USA",
        "Contact": "Greg Greger",
        "Phone": "530.284.7926",
        "Email": "sierraseed@frontiernet.net",
        "Website": "http://sierraseedsupply.com",
        "Nursery Type": "Private",
        "Product": "Seeds",
        "Latitude": "40.153824",
        "Longitude": "-120.94131",
        "Street": "Williams Valley Rd",
        "County": "Plumas County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.94131,
          40.153824
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Sierra Vista Growers",
        "Address": "2800 NM Hwy 28, La Union, NM, 88027",
        "City": "La Union",
        "State": "NM",
        "Zip Code": "88027",
        "Country": "USA",
        "Contact": "Kevin Padilla",
        "Phone": "505.874.2415",
        "Fax": "505.589.3024",
        "Email": "svwg@netzero.net",
        "Website": "http://www.silvaseed.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "31.950995",
        "Longitude": "-106.642345",
        "Street": "Highway 28",
        "County": "Doña Ana County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -106.642345,
          31.950995
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Silvaseed Company Inc",
        "Address": "317 James St S, Roy, WA, 98580",
        "City": "Roy",
        "State": "WA",
        "Zip Code": "98580",
        "Country": "USA",
        "Contact": "Matthew Aghai",
        "Phone": "253.843.2246",
        "Fax": "253.843.2239",
        "Email": "matthew.aghai@silvaseed.com",
        "Email 2": "inquiries@silvaseed.com",
        "Website": "http://www.silvaseed.com",
        "Nursery Type": "Forest Industry",
        "Business Type": "Wholesale\nRetail\nMail\nContract",
        "Product": "Plants\nSeeds",
        "Latitude": "47.00286",
        "Longitude": "-122.545985",
        "Street": "James St S",
        "County": "Pierce County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.545985,
          47.00286
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Silver Mountain Nursery",
        "Address": "13773 Silver Falls Hwy SE, Sublimity, OR, 97385",
        "City": "Sublimity",
        "State": "OR",
        "Zip Code": "97385",
        "Country": "USA",
        "Phone": "503.769.7133",
        "Phone 2": "800.952.3905",
        "Fax": "503.769.1647",
        "Email": "jimf@silvermtnnursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "44.870433",
        "Longitude": "-122.774219",
        "Street": "Silver Falls Hwy SE",
        "County": "Marion County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.774219,
          44.870433
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Silver Springs Nursery Inc",
        "Address": "700 Hamilton Rd, Jacksonville, OR, 97530",
        "City": "Jacksonville",
        "State": "OR",
        "Zip Code": "97530",
        "Country": "USA",
        "Contact": "James Kraemer",
        "Phone": "541.899.1065",
        "Phone 2": "541.261.5831",
        "Fax": "541.899.1065",
        "Email": "silversprings@wildblue.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "42.216946",
        "Longitude": "-123.059159",
        "Street": "Hamilton Rd",
        "County": "Jackson County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.059159,
          42.216946
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Simonton Farms Nursery",
        "Address": "22159 NW 75th Avenue Rd, Micanopy, FL, 32667",
        "City": "Micanopy",
        "State": "FL",
        "Zip Code": "32667",
        "Country": "USA",
        "Contact": "Sid McCarty",
        "Phone": "352.591.2271",
        "Fax": "352.591.2319",
        "Email": "mccartysrats@yahoo.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "29.472713",
        "Longitude": "-82.252193",
        "Street": "NW 75th Avenue Rd",
        "County": "Marion County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.252193,
          29.472713
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Sleepy Hollow Nursery",
        "Address": "3506 Harrison Ferry Rd, McMinnville, TN, 37110",
        "City": "McMinnville",
        "State": "TN",
        "Zip Code": "37110",
        "Country": "USA",
        "Contact": "George Dodson",
        "Phone": "931.668.3902",
        "Fax": "931.668.2443",
        "Email": "sleepyhollow@benlomand.net",
        "Website": "http://www.sleepyhollownursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "35.649547",
        "Longitude": "-85.6938",
        "Street": "Harrison Ferry Rd",
        "County": "Warren County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.6938,
          35.649547
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Smith Evergreen Nursery Inc",
        "Address": "9240 Bachlor Rd, Magnolia, OH, 44643",
        "City": "Magnolia",
        "State": "OH",
        "Zip Code": "44643",
        "Country": "USA",
        "Contact": "Mike Smith",
        "Phone": "330.866.5521",
        "Fax": "330.866.5379",
        "Email": "chris.sen@neo.rr.com",
        "Website": "http://www.smithevergreen.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "40.648891",
        "Longitude": "-81.309381",
        "Street": "Bachelor Rd",
        "County": "Carroll County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.309381,
          40.648891
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Snider Nursery",
        "Address": "500 Co Rd 386, Gorman, TX, 76454",
        "City": "Gorman",
        "State": "TX",
        "Zip Code": "76454",
        "Country": "USA",
        "Contact": "Mike or Crystal",
        "Phone": "254.734.5055",
        "Email": "mikesnider75@yahoo.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "32.265076",
        "Longitude": "-98.65509",
        "Street": "County Rd 386",
        "County": "Eastland County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -98.65509,
          32.265076
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Soaring Eagle Nursery",
        "Address": "7321 Howard Rd, Bokeelia, FL, 33922",
        "City": "Bokeelia",
        "State": "FL",
        "Zip Code": "33922",
        "Country": "USA",
        "Phone": "800.293.7256",
        "Phone 2": "239.283.9282",
        "Fax": "800.721.5714",
        "Email": "info@soaringeaglenursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "26.683829",
        "Longitude": "-82.145427",
        "Street": "Howard Rd",
        "County": "Lee County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.145427,
          26.683829
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Sound Native Plants Inc",
        "Address": "PO Box 7505, Olympia, WA, 98507-7505",
        "City": "Olympia",
        "State": "WA",
        "Zip Code": "98507-7505",
        "Country": "USA",
        "Contact": "Rebecca Shaub",
        "Phone": "360.352.4122",
        "Fax": "360.867.0007",
        "Email": "rebecca@soundnativeplants.com",
        "Website": "http://soundnativeplants.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nContract",
        "Product": "Plants",
        "Latitude": "46.978118",
        "Longitude": "-122.702393",
        "County": "Thurston County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.702393,
          46.978118
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "South Carolina Forestry Commission | Taylor Nursery",
        "Address": "53 Girl Scout Camp Rd, Trenton, SC, 29847",
        "City": "Trenton",
        "State": "SC",
        "Zip Code": "29847",
        "Country": "USA",
        "Contact": "Steve Cantrell",
        "Phone": "803.275.3578",
        "Fax": "803.275.5227",
        "Email": "taylortree@pbtcomm.net",
        "Nursery Type": "State",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "33.737967",
        "Longitude": "-81.816264",
        "Street": "Girl Scout Camp Rd",
        "County": "Edgefield County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.816264,
          33.737967
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Southeast Trees | Bartow Ornamental Nursery",
        "Address": "200 Gandy Cemetery Rd, Bartow, FL, 33830",
        "City": "Bartow",
        "State": "FL",
        "Zip Code": "33830",
        "Country": "USA",
        "Contact": "Ken Ford",
        "Phone": "888.534.1350",
        "Phone 2": "863.534.1350",
        "Fax": "863.534.1356",
        "Email": "ken@southeasttrees.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "27.912181",
        "Longitude": "-81.783868",
        "Street": "Gandy Cemetery Rd",
        "County": "Polk County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.783868,
          27.912181
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Southern Horticulture",
        "Address": "1690 A1A S, St Augustine, FL, 32080",
        "City": "St Augustine",
        "State": "FL",
        "Zip Code": "32080",
        "Country": "USA",
        "Contact": "Bill or Bryanne Hamilton, or Jordan Whitmire",
        "Phone": "904.471.0440",
        "Fax": "904.460.1222",
        "Email": "soho@bellsouth.net",
        "Website": "SouthernHorticultureFlorida.com",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Established": "1979",
        "Hours": "M-Sat 8-5:30, Sun 8-5",
        "Latitude": "29.866519",
        "Longitude": "-81.282614",
        "Street": "State Hwy A1A",
        "County": "St. Johns County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.282614,
          29.866519
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Southern Native Nursery Inc",
        "Address": "16351 Van Gogh Rd, Loxahatchee, FL, 33470",
        "City": "Loxahatchee",
        "State": "FL",
        "Zip Code": "33470",
        "Country": "USA",
        "Contact": "Mike Catron",
        "Phone": "561.798.1172",
        "Fax": "561.798.2816",
        "Email": "sonativensy@comcast.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "26.691976",
        "Longitude": "-80.303996",
        "Street": "Van Gogh Rd",
        "County": "Palm Beach County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.303996,
          26.691976
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Southern Native Plants LLC",
        "Address": "6322 Mary Kitchens Rd, Milton, FL, 32583",
        "City": "Milton",
        "State": "FL",
        "Zip Code": "32583",
        "Country": "USA",
        "Contact": "Olga",
        "Phone": "850.983.9121",
        "Email": "sonative@yahoo.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "30.509653",
        "Longitude": "-87.064958",
        "Street": "Mary Kitchens Rd",
        "County": "Santa Rosa County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.064958,
          30.509653
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Southern Pride Tree Farm Inc",
        "Address": "6400 NW 42nd Ct, Bell, FL, 32619",
        "City": "Bell",
        "State": "FL",
        "Zip Code": "32619",
        "Country": "USA",
        "Phone": "386.935.3636",
        "Fax": "386.935.3722",
        "Email": "Jimmy@sptreefarm.com",
        "Email 2": "Terry@sptreefarm.com",
        "Website": "http://www.sptreefarm.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "29.829578",
        "Longitude": "-82.877612",
        "Street": "NW 42nd Ct",
        "County": "Gilchrist County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.877612,
          29.829578
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Southern Roots Tree Nursery",
        "Address": "448 Daisy Log Rd, Blairsville, GA, 30512",
        "City": "Blairsville",
        "State": "GA",
        "Zip Code": "30512",
        "Country": "USA",
        "Contact": "Barry Gay",
        "Phone": "706.835.1662",
        "Email": "treesgay@windstream.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nContract",
        "Product": "Plants",
        "Latitude": "34.902537",
        "Longitude": "-84.022003",
        "Street": "Daisy Log Rd",
        "County": "Union County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.022003,
          34.902537
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Southern Tier Consulting and Nursery Inc",
        "Address": "2701-A Rt 305, West Clarksville, NY, 14786",
        "City": "West Clarksville",
        "State": "NY",
        "Zip Code": "14786",
        "Country": "USA",
        "Contact": "Johneta Wilson",
        "Phone": "585.968.3120",
        "Fax": "585.968.3122",
        "Email": "froghome@southerntierconsulting.com",
        "Website": "http://www.southerntierconsulting.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "42.133664",
        "Longitude": "-78.241396",
        "Street": "State Rte 305",
        "County": "Allegany County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.241396,
          42.133664
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Southwest Seed Inc",
        "Address": "13514 CR 29, Dolores, CO, 81323",
        "City": "Dolores",
        "State": "CO",
        "Zip Code": "81323",
        "Country": "USA",
        "Contact": "Roberta Henes",
        "Phone": "970.565.8722",
        "Phone 2": "800.543.1279",
        "Fax": "970.565.2576",
        "Email": "swseed@southwestseed.com",
        "Website": "http://www.southwestseed.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail\nInternet",
        "Product": "Seeds",
        "Latitude": "37.408363",
        "Longitude": "-108.517381",
        "Street": "County Rd 29",
        "County": "Montezuma County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -108.517381,
          37.408363
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Sow True Seed",
        "Address": "146 Church St, Asheville, NC, 28801",
        "City": "Asheville",
        "State": "NC",
        "Zip Code": "28801",
        "Country": "USA",
        "Phone": "828.254.0708",
        "Fax": "828.254.0709",
        "Email": "info@sowtrue.com",
        "Website": "http://sowtrueseed.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Seeds",
        "Latitude": "35.589502",
        "Longitude": "-82.552288",
        "Street": "Church St",
        "County": "Buncombe County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.552288,
          35.589502
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Spadefoot Nursery",
        "Address": "2831 E  Broadway Blvd , Tucson, AZ, 85716",
        "City": "Tucson",
        "State": "AZ",
        "Zip Code": "85716",
        "Country": "USA",
        "Contact": "Jared McKinley, Katy Gierlach",
        "Phone": "520.909.3619",
        "Phone 2": "520.909.9919",
        "Fax": "520.824.3247",
        "Email": "spadefoot@vtc.net",
        "Website": "https://www.spadefootnursery.com/",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "32.221802",
        "Longitude": "-110.929716",
        "Street": "E Broadway Blvd",
        "County": "Pima County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -110.929716,
          32.221802
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Spangle Creek Labs",
        "Address": "21950 CR 445, Bovey, MN, 55709",
        "City": "Bovey",
        "State": "MN",
        "Zip Code": "55709",
        "Country": "USA",
        "Contact": "Carol Steele",
        "Phone": "218.247.0245",
        "Email": "ladyslippers@paulbunyan.net",
        "Website": "http://www.ladyslipperfarm.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail\nInternet",
        "Product": "Plants",
        "Established": "1990",
        "Latitude": "47.221231",
        "Longitude": "-93.31879",
        "Street": "County Rd 445",
        "County": "Itasca County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.31879,
          47.221231
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Spence Restoration Nursery",
        "Address": "2220 E Fuson Rd, Muncie, IN, 47302",
        "City": "Muncie",
        "State": "IN",
        "Zip Code": "47302",
        "Country": "USA",
        "Contact": "James Keith",
        "Phone": "765.286.7154",
        "Fax": "765.286.0264",
        "Email": "SALES@SPENCENURSERY.COM",
        "Website": "https://www.spencenursery.com/Index/home.php",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants\nSeeds",
        "Established": "1995",
        "Hours": "M-F 7-4",
        "Latitude": "40.152859",
        "Longitude": "-85.360779",
        "Street": "E Fuson Rd",
        "County": "Delaware County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.360779,
          40.152859
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Spring Creek Nursery",
        "Address": "3226 W Montgomery Rd, Deer Park, WA, 99006",
        "City": "Deer Park",
        "State": "WA",
        "Zip Code": "99006",
        "Country": "USA",
        "Contact": "Fitzgerald",
        "Phone": "509.276.8278",
        "Fax": "509.276.8302",
        "Email": "Grower4u@aol.com or springcreekdpark@aol.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "47.98962",
        "Longitude": "-117.461632",
        "Street": "W Montgomery Rd",
        "County": "Spokane County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.461632,
          47.98962
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Spring Lake Restoration Nurseries",
        "Address": "21938 Mushtown Rd, Prior Lake, MN, 55372",
        "City": "Prior Lake",
        "State": "MN",
        "Zip Code": "55372",
        "Country": "USA",
        "Contact": "Corrine Daniels",
        "Phone": "952.447.1919",
        "Fax": "952.447.1920",
        "Email": "slrn@appliedeco.com",
        "Website": "http://www.appliedeco.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nContract",
        "Product": "Plants\nSeeds",
        "Latitude": "44.631661",
        "Longitude": "-93.422525",
        "Street": "Mushtown Rd",
        "County": "Scott County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.422525,
          44.631661
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Springbrook Farms",
        "Address": "322 Chagebridge Rd, Pine Brook, NJ, 07058",
        "City": "Pine Brook",
        "State": "NJ",
        "Zip Code": "07058",
        "Country": "USA",
        "Phone": "973.227.1007",
        "Email": "info@chuxlandscaping.com",
        "Email 2": "info@springbrookfarms.com",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "40.872514",
        "Longitude": "-74.341776",
        "County": "Morris County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.341776,
          40.872514
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "St  Lawrence Nurseries",
        "Address": "325 NY 345, Potsdam, NY, 13676",
        "City": "Potsdam",
        "State": "NY",
        "Zip Code": "13676",
        "Country": "USA",
        "Phone": "315.265.6739",
        "Email": "trees@sln.potsdam.ny.us",
        "Website": "https://www.slngrow.com",
        "Business Type": "Wholesale\nRetail\nMail",
        "Product": "Plants",
        "Latitude": "44.685221",
        "Longitude": "-75.02901",
        "Street": "State Hwy 345",
        "County": "St. Lawrence County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.02901,
          44.685221
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "St  Williams Nursery & Ecology Centre",
        "Address": "885 Norfolk County Hwy 24 W, St. Williams, ON, N0E 1P0",
        "City": "St. Williams",
        "State": "ON",
        "Zip Code": "N0E 1P0",
        "Country": "Canada",
        "Contact": "Allan Arthur",
        "Phone": "866.640.TREE",
        "Phone 2": "519.586.9116",
        "Email": "info@stwilliamsnursery.com",
        "Website": "http://www.stwilliamsnursery.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants\nSeeds\nServices",
        "Latitude": "37.702526",
        "Longitude": "-82.26002",
        "County": "Mingo County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.26002,
          37.702526
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "St  Williams Nursery & Ecology Centre ",
        "Address": "885 Norfolk County Hwy 24 West, St. Williams, ON, N0E 1P0",
        "City": "St. Williams",
        "State": "ON",
        "Zip Code": "N0E 1P0",
        "Country": "Canada",
        "Contact": "Kristen Sandvall",
        "Phone": "866.640.TREE",
        "Phone 2": "519.586.9116",
        "Email": "info@stwilliamsnursery.com",
        "Website": "http://www.stwilliamsnursery.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants\nSeeds\nServices",
        "Latitude": "37.702526",
        "Longitude": "-82.26002",
        "County": "Mingo County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.26002,
          37.702526
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "St Aubin Nursery",
        "Address": "35445 Irene Rd, Kirkland, IL, 60146",
        "City": "Kirkland",
        "State": "IL",
        "Zip Code": "60146",
        "Country": "USA",
        "Contact": "Jon Arena",
        "Phone": "815.522.3535",
        "Email": "Info@staubin.com",
        "Website": "http://www.staubin.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "42.111431",
        "Longitude": "-88.900435",
        "Street": "Irene Rd",
        "County": "Dekalb County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.900435,
          42.111431
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Star Nursery",
        "Address": "125 Cassia Way, Henderson, UT, 89014",
        "City": "Henderson",
        "State": "UT",
        "Zip Code": "89014",
        "Country": "USA",
        "Phone": "702.568.7000",
        "Website": "http://www.starnursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "36.035971",
        "Longitude": "-115.028024",
        "Street": "Cassia Way",
        "County": "Clark County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -115.028024,
          36.035971
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Stempky Nursery",
        "Address": "5157 N Straits Hwy, Cheboygan, MI, 49721",
        "City": "Cheboygan",
        "State": "MI",
        "Zip Code": "49721",
        "Country": "USA",
        "Contact": "Fred & Susan Stempky",
        "Phone": "231.627.4814",
        "Fax": "231.627.3087",
        "Email": "fstempk@fbinsmi.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "45.536188",
        "Longitude": "-84.543529",
        "Street": "N Straits Hwy",
        "County": "Cheboygan County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.543529,
          45.536188
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Stevenson Intermountain Seed",
        "Address": "488 S 100 E, Ephraim, UT, 84627",
        "City": "Ephraim",
        "State": "UT",
        "Zip Code": "84627",
        "Country": "USA",
        "Contact": "Jason Stevenson",
        "Phone": "435.283.6639",
        "Fax": "435.283.4155",
        "Email": "sales@siseed.com",
        "Website": "http://stevensonintermountainseed.com/devsiseed/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Seeds",
        "Established": "1976",
        "Latitude": "39.357504",
        "Longitude": "-111.575002",
        "Street": "E 100 S",
        "County": "Sanpete County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.575002,
          39.357504
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Stillaguamish Tribe Bank Savers",
        "Address": "22712 6th Ave NE, Arlington, WA, 98223-0277",
        "City": "Arlington",
        "State": "WA",
        "Zip Code": "98223-0277",
        "Country": "USA",
        "Contact": "Doug Kinfield, John Drotts, Pat Stevenson",
        "Phone": "360.629.4960",
        "Phone 2": "360.435.9365",
        "Fax": "360.435.3605",
        "Email": "dkinfield@stillaguamish.nsn.us or sales@bank-savers.com",
        "Email 2": "jdrotts@stillaguamish.nsn.us",
        "Website": "http://bank-savers.com/index.php",
        "Nursery Type": "Tribal",
        "Business Type": "Wholesale",
        "Product": "Plants\nSeeds",
        "Latitude": "48.201891",
        "Longitude": "-122.216231",
        "Street": "6th Ave NE",
        "County": "Snohomish County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.216231,
          48.201891
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Stock Seed Farms",
        "Address": "28008 Mill Rd, Murdock, NE, 68407",
        "City": "Murdock",
        "State": "NE",
        "Zip Code": "68407",
        "Country": "USA",
        "Contact": "Rod Fritz",
        "Phone": "800.759.1520",
        "Fax": "402.867.2442",
        "Email": "rod@stockseed.com",
        "Email 2": "prarie@stockseed.com",
        "Website": "http://www.stockseed.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail",
        "Product": "Seeds",
        "Latitude": "40.947158",
        "Longitude": "-96.324307",
        "Street": "Mill Rd",
        "County": "Cass County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.324307,
          40.947158
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Stone Silo Prairie Gardens",
        "Address": "2325 Oak Ridge Circle, DePere, WI, 54115",
        "City": "DePere",
        "State": "WI",
        "Zip Code": "54115",
        "Country": "USA",
        "Contact": "Justin Kroening",
        "Phone": "920.713.2879",
        "Fax": "920.336.5745",
        "Email": "kroeningjustin@gmail.com",
        "Website": "http://www.stonesiloprairie.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "44.425983",
        "Longitude": "-88.02102",
        "Street": "Oak Ridge Cir",
        "County": "Brown County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.02102,
          44.425983
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Storm Lake Growers",
        "Address": "18510 WA 203, Monroe, WA, 98272-8801",
        "City": "Monroe",
        "State": "WA",
        "Zip Code": "98272-8801",
        "Country": "USA",
        "Contact": "Terra Sittner or Dan McCain",
        "Phone": "360.794.4842",
        "Fax": "360.794.8323",
        "Email": "terra@stormlakegrowers.com",
        "Website": "http://www.stormlakegrowers.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "47.829164",
        "Longitude": "-121.970405",
        "Street": "State Rte 203",
        "County": "Snohomish County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.970405,
          47.829164
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Stover Seed Company",
        "Address": "9180 San Fernando Rd, Sun Valley, CA, 91352",
        "City": "Sun Valley",
        "State": "CA",
        "Zip Code": "91352",
        "Country": "USA",
        "Contact": "Stephen Knutson",
        "Phone": "213.626.9668",
        "Fax": "213.626.4920",
        "Email": "Stephen_k@stoverseed.com",
        "Website": "http://www.stoverseed.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Seeds",
        "Established": "1922",
        "Hours": "M-F 8-5",
        "Latitude": "34.236382",
        "Longitude": "-118.389533",
        "Street": "San Fernando Rd",
        "County": "Los Angeles County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.389533,
          34.236382
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Strawberry Plains Audubon Center",
        "Address": "285 Plains Rd, Holly Springs, MS, 38635",
        "City": "Holly Springs",
        "State": "MS",
        "Zip Code": "38635",
        "Country": "USA",
        "Contact": "Kristin Lamberson",
        "Phone": "662.252.1155",
        "Fax": "662.252.8844",
        "Website": "http://strawberryplains.audubon.org/",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "34.828327",
        "Longitude": "-89.476483",
        "Street": "Plains Rd",
        "County": "Marshall County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.476483,
          34.828327
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Streamside Native Plants",
        "Address": "7455 Island Hwy W, Bowser, BC, V0R 1G0",
        "City": "Bowser",
        "State": "BC",
        "Zip Code": "V0R 1G0",
        "Country": "Canada",
        "Contact": "Richard Wahlgren",
        "Phone": "250.757.9999",
        "Phone 2": "877.570.3138",
        "Email": "richard@streamsidenativeplants.com",
        "Website": "http://members.shaw.ca/nativeplants/streamside_home.html",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "0",
        "Longitude": "0"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          0,
          0
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Stuewe & Sons Inc",
        "Address": "31933 Rolland Dr, Tangent, OR, 97389",
        "City": "Tangent",
        "State": "OR",
        "Zip Code": "97389",
        "Country": "USA",
        "Contact": "Eric Stuewe",
        "Phone": "541.757.7798",
        "Phone 2": "800.553.5331",
        "Fax": "541.754.6617",
        "Email": "info@stuewe.com",
        "Website": "http://www.stuewe.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail",
        "Product": "Services",
        "Established": "1982",
        "Latitude": "44.560738",
        "Longitude": "-123.113364",
        "Street": "Rolland Dr",
        "County": "Linn County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.113364,
          44.560738
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Sturon Inc",
        "Address": "15801 SW 216th St, Miami, FL, 33170",
        "City": "Miami",
        "State": "FL",
        "Zip Code": "33170",
        "Country": "USA",
        "Contact": "Steven C Leonard",
        "Phone": "305.232.9005",
        "Fax": "305.233.7060",
        "Website": "http://www.sturon.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "25.568419",
        "Longitude": "-80.448202",
        "Street": "SW 216th St",
        "County": "Miami-Dade County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.448202,
          25.568419
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Sudbury Nurseries West  LLC",
        "Address": "81 Ben Hale Road, Gill, MA, 01354",
        "City": "Gill",
        "State": "MA",
        "Zip Code": "01354",
        "Country": "USA",
        "Contact": "Sabrina Cutting",
        "Phone": "413.863.9898",
        "Fax": "413.863.9899",
        "Website": "http://www.sudburynurserieswest.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "42.655117",
        "Longitude": "-72.513535",
        "Street": "Ben Hale Rd",
        "County": "Franklin County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.513535,
          42.655117
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Sudbury Nurseries West  LLC ",
        "Address": "81 Ben Hale Rd , Gill, MA, 01354",
        "City": "Gill",
        "State": "MA",
        "Zip Code": "01354",
        "Country": "USA",
        "Contact": "Sabrina Cutting",
        "Phone": "413.863.9898",
        "Fax": "413.863.9899",
        "Email": "gscut@crocker.com",
        "Website": "http://www.sudburynurserieswest.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants\nSeeds",
        "Latitude": "42.655117",
        "Longitude": "-72.513535",
        "Street": "Ben Hale Rd",
        "County": "Franklin County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.513535,
          42.655117
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Summer Hill Nursery",
        "Address": "888 Summerhill Rd, Madison, CT, 06443",
        "City": "Madison",
        "State": "CT",
        "Zip Code": "06443",
        "Country": "USA",
        "Contact": "Mike Johnson",
        "Phone": "203.421.3055",
        "Fax": "203.421.5189",
        "Email": "Summerhillnur@aol.com",
        "Website": "http://www.summerhillnursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "41.384592",
        "Longitude": "-72.625228",
        "Street": "Summer Hill Rd",
        "County": "South Central Connecticut Planning Region"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.625228,
          41.384592
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Sun Gro Horticulture",
        "Address": "19287 Hwy 99 E, Hubbard, OR, 97032",
        "City": "Hubbard",
        "State": "OR",
        "Zip Code": "97032",
        "Country": "USA",
        "Contact": "Jason Padden",
        "Phone": "503.729.0655",
        "Fax": "503.212.0153",
        "Email": "jasonp@sungro.com",
        "Website": "http://www.sungro.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Services",
        "Latitude": "45.199128",
        "Longitude": "-122.784426",
        "Street": "State Hwy 99 E",
        "County": "Marion County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.784426,
          45.199128
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Sun Mountain Growers",
        "Address": "336 N Mountain Rd, Fruit Heights, UT, 84037",
        "City": "Fruit Heights",
        "State": "UT",
        "Zip Code": "84037",
        "Country": "USA",
        "Contact": "Brad Soelberg",
        "Phone": "801.941.5535",
        "Fax": "801.529.1210",
        "Email": "sunmtngrowers@comcast.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Established": "2000",
        "Hours": "M-F 8-4:30, Sat by appt",
        "Latitude": "41.040334",
        "Longitude": "-111.90883",
        "Street": "N Mountain Rd",
        "County": "Davis County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.90883,
          41.040334
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Sun Mountain Natives",
        "Address": "1406 E F St, Moscow, ID, 83843",
        "City": "Moscow",
        "State": "ID",
        "Zip Code": "83843",
        "Country": "USA",
        "Contact": "Randy Gilmore",
        "Phone": "208.883.7611",
        "Fax": "208.882.6738",
        "Email": "rgilmore@turbonet.com",
        "Website": "http://www.sunmountainnatives.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Seeds",
        "Established": "1994",
        "Latitude": "46.740461",
        "Longitude": "-116.982046",
        "Street": "E F St",
        "County": "Latah County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.982046,
          46.740461
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Sunbelt Trees Inc",
        "Address": "16008 Sam Brookins St, Sugar Land, TX, 77498",
        "City": "Sugar Land",
        "State": "TX",
        "Zip Code": "77498",
        "Country": "USA",
        "Phone": "281.277.2433",
        "Email": "Isidoro@Sunbelttrees.com",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "29.671511",
        "Longitude": "-95.667532",
        "Street": "Sam Brookins St",
        "County": "Fort Bend County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.667532,
          29.671511
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Sunbreak Nursery Company",
        "Address": "5192 Aldrich Rd, Bellingham, WA, 98226",
        "City": "Bellingham",
        "State": "WA",
        "Zip Code": "98226",
        "Country": "USA",
        "Contact": "Rick Wright or Ryan Carpenter",
        "Phone": "360.384.3763",
        "Fax": "360.384.5030",
        "Email": "sunbreaknurserycompany@comcast.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Established": "1978",
        "Hours": "M-F 9-4:30",
        "Latitude": "48.829633",
        "Longitude": "-122.518486",
        "Street": "Aldrich Rd",
        "County": "Whatcom County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.518486,
          48.829633
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Suncrest Nurseries Inc",
        "Address": "400 Casserly Rd, Watsonville, CA, 95076",
        "City": "Watsonville",
        "State": "CA",
        "Zip Code": "95076",
        "Country": "USA",
        "Contact": "Jim Marshall",
        "Phone": "831.728.2595",
        "Fax": "831.728.3146",
        "Email": "salesdesk@suncrestnurseries.com",
        "Website": "http://www.suncrestnurseries.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "36.96798",
        "Longitude": "-121.739969",
        "Street": "Casserly Rd",
        "County": "Santa Cruz County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.739969,
          36.96798
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Sundance Ornamentals",
        "Address": "10689 Heritage Blvd, Lake Worth, FL, 33467-6723",
        "City": "Lake Worth",
        "State": "FL",
        "Zip Code": "33467-6723",
        "Country": "USA",
        "Phone": "561.965.1344",
        "Fax": "561.965.2236",
        "Email": "ymir3@ix.netcom.com",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "26.61835",
        "Longitude": "-80.21642",
        "Street": "Lake Worth Rd",
        "County": "Palm Beach County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.21642,
          26.61835
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Sunflower Farms",
        "Address": "1065 S Olive St, Cherryvale, KS, 67335",
        "City": "Cherryvale",
        "State": "KS",
        "Zip Code": "67335",
        "Country": "USA",
        "Contact": "Mark or Sandy",
        "Phone": "620.336.2066",
        "Fax": "620.336.2432",
        "Email": "sunflowerfarms@sbcglobal.net",
        "Email 2": "carinder@hit.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "37.265618",
        "Longitude": "-95.53716",
        "Street": "S Olive St",
        "County": "Montgomery County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.53716,
          37.265618
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Sunmark Seeds International Inc",
        "Address": "2255 NE 194th Ave, Portland, OR, 97230",
        "City": "Portland",
        "State": "OR",
        "Zip Code": "97230",
        "Country": "USA",
        "Contact": "Robin Cook",
        "Phone": "888.241.7333",
        "Email": "info@sunmarkseeds.com",
        "Website": "http://www.sunmarkseeds.co/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nMail",
        "Product": "Seeds",
        "Established": "1983",
        "Hours": "M-F 8-5",
        "Latitude": "45.538896",
        "Longitude": "-122.464053",
        "Street": "NE 194th Ave",
        "County": "Multnomah County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.464053,
          45.538896
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Sunny Border Nurseries Inc",
        "Address": "1709 Kensington Rd, Kensington, CT, 06037",
        "City": "Kensington",
        "State": "CT",
        "Zip Code": "06037",
        "Country": "USA",
        "Contact": "Marc Laviana",
        "Phone": "800.732.1627",
        "Fax": "860.828.9318",
        "Email": "sales@sunnyborder.com",
        "Website": "http://www.sunnyborder.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "41.595371",
        "Longitude": "-72.782552",
        "Street": "Kensington Rd",
        "County": "Capitol Planning Region"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.782552,
          41.595371
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Sunrise Nursery",
        "Address": "73-4939 Kamanu St, Kailua-Kona, HI, 96740",
        "City": "Kailua-Kona",
        "State": "HI",
        "Zip Code": "96740",
        "Country": "USA",
        "Contact": "Margo Lundstrom",
        "Phone": "808.329.7593",
        "Fax": "808.325.6249",
        "Email": "sunrisenurseryllc@yahoo.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nContract",
        "Product": "Plants",
        "Latitude": "19.709317",
        "Longitude": "-155.078448",
        "Street": "Kamana St",
        "County": "Hawaii County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -155.078448,
          19.709317
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Sunshine Farm and Gardens",
        "Address": "696 Glicks Rd , Renick, WV, 24966",
        "City": "Renick",
        "State": "WV",
        "Zip Code": "24966",
        "Country": "USA",
        "Contact": "Barry Glick",
        "Phone": "304.497.2208",
        "Email": "barry@sunfarm.com",
        "Website": "http://www.sunfarm.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants\nSeeds",
        "Latitude": "38.066514",
        "Longitude": "-80.437213",
        "Street": "Glicks Rd",
        "County": "Greenbrier County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.437213,
          38.066514
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Sunshine Gardens Nursery and Landscaping Inc",
        "Address": "1286 Shadywood Shores Dr NW, Pine River, MN, 56474",
        "City": "Pine River",
        "State": "MN",
        "Zip Code": "56474",
        "Country": "USA",
        "Contact": "Bonnie Hiniker",
        "Phone": "218.947.3154",
        "Phone 2": "218.821.8671",
        "Email": "sgardens@uslink.net",
        "Website": "http://sunshinegardens.tripod.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "46.85196",
        "Longitude": "-94.306691",
        "Street": "Shadywood Shores Dr NW",
        "County": "Cass County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.306691,
          46.85196
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Sunshine Nursery",
        "Address": "352 W Willis Rd, Tahlequah, OK, 74464",
        "City": "Tahlequah",
        "State": "OK",
        "Zip Code": "74464",
        "Country": "USA",
        "Contact": "Raymond or Helen Hendrix",
        "Phone": "918.456.6927",
        "Fax": "918.456.6927",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "35.869897",
        "Longitude": "-94.985488",
        "Street": "W Willis Rd",
        "County": "Cherokee County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -94.985488,
          35.869897
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Superior Trees",
        "Address": "12493 Hwy 90 E, Lee, FL, 32059",
        "City": "Lee",
        "State": "FL",
        "Zip Code": "32059",
        "Country": "USA",
        "Contact": "Amy Webb or Summer Jones",
        "Phone": "850.971.5159",
        "Fax": "850.971.5416",
        "Email": "superiortrees@centurylink.net",
        "Website": "http://www.superiortrees.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "30.405711",
        "Longitude": "-83.229582",
        "Street": "E US Highway 90",
        "County": "Madison County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.229582,
          30.405711
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Swanson Farms",
        "Address": "64905 190th St, Nevada, IA, 50201",
        "City": "Nevada",
        "State": "IA",
        "Zip Code": "50201",
        "Country": "USA",
        "Contact": "Andy",
        "Phone": "515.382.6120",
        "Email": "andy@midiowa.net",
        "Nursery Type": "Private",
        "Product": "Seeds",
        "Latitude": "42.078567",
        "Longitude": "-93.406648",
        "Street": "190th St",
        "County": "Story County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.406648,
          42.078567
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Swansons Nursery",
        "Address": "9701 15th Ave NW, Seattle, WA, 98117",
        "City": "Seattle",
        "State": "WA",
        "Zip Code": "98117",
        "Country": "USA",
        "Contact": "Gabriel Maki",
        "Phone": "206.782.2543",
        "Fax": "206.782.8942",
        "Email": "gabrielm@swansonsnursery.com",
        "Website": "http://swansonsnursery.com/",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "47.700336",
        "Longitude": "-122.377364",
        "Street": "15th Ave NW",
        "County": "King County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.377364,
          47.700336
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Sylva Native Nursery & Seed Company",
        "Address": "3815 Roser Rd, Glen Rock, PA, 17327",
        "City": "Glen Rock",
        "State": "PA",
        "Zip Code": "17327",
        "Country": "USA",
        "Contact": "Michael Hollins",
        "Phone": "717.227.0486",
        "Fax": "717.227.0484",
        "Email": "sylvanat@aol.com",
        "Website": "http://www.sylvanative.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants\nSeeds",
        "Established": "1988",
        "Hours": "M-F 8-4:30",
        "Latitude": "39.796996",
        "Longitude": "-76.76206",
        "Street": "Roser Rd",
        "County": "York County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.76206,
          39.796996
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Synergy Resource Solutions Inc",
        "Address": "5393 Hamm Rd, Belgrade, MT, 59714",
        "City": "Belgrade",
        "State": "MT",
        "Zip Code": "59714",
        "Country": "USA",
        "Contact": "Jack Alexander",
        "Phone": "406.388.9378",
        "Fax": "406.388.9359",
        "Email": "synergy@countgrass.com",
        "Website": "http://www.countgrass.com",
        "Nursery Type": "Private",
        "Business Type": "Contract",
        "Product": "Services",
        "Latitude": "45.795755",
        "Longitude": "-111.072414",
        "Street": "Hamm Rd",
        "County": "Gallatin County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.072414,
          45.795755
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Tadpole Haven Native Plants",
        "Address": "20322 197th Ave NE, Woodinville, WA, 98077",
        "City": "Woodinville",
        "State": "WA",
        "Zip Code": "98077",
        "Country": "USA",
        "Contact": "Shirley Doolittle-Egerdahl",
        "Phone": "425.788.6100",
        "Email": "growing@tadpolehaven.com",
        "Website": "http://tadpolehaven.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nContract",
        "Product": "Plants",
        "Established": "1998",
        "Hours": "by appt please call",
        "Latitude": "47.774912",
        "Longitude": "-122.07346",
        "Street": "197th Ave NE",
        "County": "King County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.07346,
          47.774912
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Tagawa Garden Center & Florist",
        "Address": "7711 S Parker Rd, Centennial, CO, 80016",
        "City": "Centennial",
        "State": "CO",
        "Zip Code": "80016",
        "Country": "USA",
        "Contact": "Nancy",
        "Phone": "303.690.4722",
        "Fax": "303.690.9107",
        "Email": "TagawaQandA@tagawagardens.com",
        "Website": "http://tagawagardens.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "39.576729",
        "Longitude": "-104.795874",
        "Street": "S Parker Rd",
        "County": "Arapahoe County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -104.795874,
          39.576729
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Tahoe Tree Company",
        "Address": "401 W Lake Blvd, Tahoe City, CA, 96145",
        "City": "Tahoe City",
        "State": "CA",
        "Zip Code": "96145",
        "Country": "USA",
        "Contact": "Leslie Hyche",
        "Phone": "916.583.3911",
        "Fax": "530.583.0557",
        "Email": "leslie@tahoetree.com",
        "Email 2": "info@mcbridesnursery.com",
        "Website": "https://tahoetreecompany.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "39.159792",
        "Longitude": "-120.14578",
        "Street": "W Lake Blvd",
        "County": "Placer County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.14578,
          39.159792
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Tamarack Farms",
        "Address": "Box 366, Erickson, MB, R0J 0P0",
        "City": "Erickson",
        "State": "MB",
        "Zip Code": "R0J 0P0",
        "Country": "Canada",
        "Contact": "Harvey Pengelly & Ryan Pengelly",
        "Phone": "204.636.2990",
        "Fax": "204.636.2225",
        "Email": "hcpengelly@gmail.com",
        "Nursery Type": "Private",
        "Product": "Seeds",
        "Latitude": "41.779992",
        "Longitude": "-98.679988",
        "Street": "PO Box",
        "County": "Wheeler County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -98.679988,
          41.779992
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Tarweed Native Plant Nursery & Landscape",
        "Address": "1307 Graynold Ave, Glendale, CA, 91202",
        "City": "Glendale",
        "State": "CA",
        "Zip Code": "91202",
        "Country": "USA",
        "Contact": "Joanne Burger",
        "Phone": "818.419.7034",
        "Phone 2": "626.705.8993",
        "Fax": "866.348.8562",
        "Email": "joanne@tarweednativeplants.com",
        "Email 2": "tarweed@tarweednativeplants.com",
        "Website": "http://www.tarweednativeplants.com",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "34.166989",
        "Longitude": "-118.276984",
        "Street": "Graynold Ave",
        "County": "Los Angeles County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.276984,
          34.166989
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Tawakoni Plant Farm",
        "Address": "PO Box 820, Wills Point, TX, 75169",
        "City": "Wills Point",
        "State": "TX",
        "Zip Code": "75169",
        "Country": "USA",
        "Contact": "Dave Pinkus",
        "Email": "davepinkus@yahoo.com",
        "Website": "http://tawakoniplantfarm.com/",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "32.695514",
        "Longitude": "-95.974996",
        "County": "Van Zandt County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.974996,
          32.695514
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Taylor Creek Restoration Nurseries",
        "Address": "17921 W Smith Rd, Brodhead, WI, 53520",
        "City": "Brodhead",
        "State": "WI",
        "Zip Code": "53520",
        "Country": "USA",
        "Contact": "Corrie Daniels",
        "Phone": "608.897.8641",
        "Fax": "608.897.2044",
        "Email": "taylorcreek@res.us",
        "Website": "https://www.taylorcreeknurseries.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail\nContract",
        "Product": "Plants\nSeeds",
        "Latitude": "42.558019",
        "Longitude": "-89.353214",
        "Street": "W Smith Rd",
        "County": "Rock County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.353214,
          42.558019
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Telos Rare Bulbs",
        "Address": "PO Box 1067, Ferndale, CA, 95536",
        "City": "Ferndale",
        "State": "CA",
        "Zip Code": "95536",
        "Country": "USA",
        "Email": "info@telosrarebulbs.com",
        "Website": "http://telosrarebulbs.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nMail",
        "Product": "Plants",
        "Latitude": "40.465229",
        "Longitude": "-124.26879",
        "County": "Humboldt County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -124.26879,
          40.465229
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Temecula Band of the Luiseno Indians",
        "Address": "454080 Pechanga Pkwy, Temecula, CA, 92593",
        "City": "Temecula",
        "State": "CA",
        "Zip Code": "92593",
        "Country": "USA",
        "Contact": "William Pink",
        "Phone": "951.308.9295",
        "Fax": "951.506.9491",
        "Email": "wjpink@ivic.net",
        "Nursery Type": "Tribal",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "33.469876",
        "Longitude": "-117.121759",
        "Street": "Pechanga Pkwy",
        "County": "Riverside County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.121759,
          33.469876
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Tennessee Dept of Agriculture - Delano Nursery",
        "Address": "9063 Hwy 411 S, Delano, TN, 37325",
        "City": "Delano",
        "State": "TN",
        "Zip Code": "37325",
        "Country": "USA",
        "Contact": "John Conn",
        "Phone": "423.263.1626",
        "Fax": "423.263.9322",
        "Email": "john.conn@tn.gov",
        "Email 2": "nursery@state.tn.us",
        "Website": "planttntrees.com",
        "Nursery Type": "State",
        "Business Type": "Wholesale\nRetail\nContract",
        "Product": "Plants",
        "Latitude": "35.2469",
        "Longitude": "-84.568604",
        "Street": "Highway 411",
        "County": "Polk County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.568604,
          35.2469
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Territorial Seed Company",
        "Address": "20 Palmer Ave, Cottage Grove, OR, 97424",
        "City": "Cottage Grove",
        "State": "OR",
        "Zip Code": "97424",
        "Country": "USA",
        "Phone": "541.942.9547",
        "Email": "info@TerritorialSeed.com",
        "Website": "www.TerritorialSeed.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail\nInternet",
        "Product": "Plants\nSeeds",
        "Established": "1979",
        "Hours": "8:00 AM - 5:00 PM M-F",
        "Latitude": "43.7988",
        "Longitude": "-123.037495",
        "Street": "Palmer Ave",
        "County": "Lane County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.037495,
          43.7988
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "The Acorn Seed",
        "Address": "2486 Oro Quincy Hwy, Oroville, CA, 95966",
        "City": "Oroville",
        "State": "CA",
        "Zip Code": "95966",
        "Country": "USA",
        "Contact": "James Connolly",
        "Phone": "530.534.5363",
        "Email": "rjconnolly@cncnet.com",
        "Nursery Type": "Private",
        "Business Type": "Retail\nContract",
        "Product": "Plants",
        "Latitude": "39.509788",
        "Longitude": "-121.526291",
        "Street": "Oroville Quincy Hwy",
        "County": "Butte County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.526291,
          39.509788
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "The Center for Social and Environmental Stewardship",
        "Address": "9619 Old Redwood Hwy, Windsor, CA, 95492",
        "City": "Windsor",
        "State": "CA",
        "Zip Code": "95492",
        "Country": "USA",
        "Contact": "Anya Perron-Burdick",
        "Phone": "707.838.6641",
        "Fax": "707.838.4503",
        "Email": "aburdick@cfses.org",
        "Website": "http://www.cfses.org",
        "Nursery Type": "Not-for-Profit",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "38.553542",
        "Longitude": "-122.817607",
        "Street": "Old Redwood Hwy",
        "County": "Sonoma County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.817607,
          38.553542
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "The Cotton Mill/Star Nursery",
        "Address": "385 W Telegraph Rd, Washington, UT, 84780",
        "City": "Washington",
        "State": "UT",
        "Zip Code": "84780",
        "Country": "USA",
        "Phone": "435.986.0820",
        "Website": "http://www.starnursery.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "37.129074",
        "Longitude": "-113.515733",
        "Street": "W Telegraph St",
        "County": "Washington County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -113.515733,
          37.129074
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "The Country Store & Gardens",
        "Address": "20211 Vashon Hwy SW, Vashon, WA, 98070",
        "City": "Vashon",
        "State": "WA",
        "Zip Code": "98070",
        "Country": "USA",
        "Contact": "Mike Biel",
        "Phone": "206.463.3655",
        "Fax": "206.463.3679",
        "Email": "info@countrystoreandgardens.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "47.423942",
        "Longitude": "-122.461693",
        "Street": "Vashon Hwy SW",
        "County": "King County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.461693,
          47.423942
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "The Echo Center",
        "Address": "1055 Echo Cir, Pensacola, FL, 32514",
        "City": "Pensacola",
        "State": "FL",
        "Zip Code": "32514",
        "Country": "USA",
        "Contact": "Ed or Perrin Penniman",
        "Phone": "850.478.1985",
        "Email": "echocenter@yahoo.com",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "30.506551",
        "Longitude": "-87.233445",
        "Street": "Echo Cir",
        "County": "Escambia County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.233445,
          30.506551
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "The Garden Company",
        "Address": "19870 Grace Way, Sonora, CA, 95370",
        "City": "Sonora",
        "State": "CA",
        "Zip Code": "95370",
        "Country": "USA",
        "Contact": "Mary Campbell",
        "Phone": "209.288.2342",
        "Email": "mc@thegardencompanyonline.com",
        "Website": "http://www.gardenwhereyouare.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nInternet",
        "Product": "Plants",
        "Latitude": "37.982756",
        "Longitude": "-120.292529",
        "Street": "Grace Way",
        "County": "Tuolumne County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.292529,
          37.982756
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "The Garden Gate",
        "Address": "3268 Fordham Pkwy, Gulf Breeze, FL, 32563",
        "City": "Gulf Breeze",
        "State": "FL",
        "Zip Code": "32563",
        "Country": "USA",
        "Contact": "Emily Peterson",
        "Phone": "850.932.9066",
        "Fax": "850.916.0200",
        "Email": "thegardengategb@bellsouth.net",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "30.387315",
        "Longitude": "-87.086929",
        "Street": "Fordham Pkwy",
        "County": "Santa Rosa County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.086929,
          30.387315
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "The Natives Inc",
        "Address": "2929 J.B. Carter Rd, Davenport, FL, 33837",
        "City": "Davenport",
        "State": "FL",
        "Zip Code": "33837",
        "Country": "USA",
        "Contact": "Sarah Kiefer",
        "Phone": "863.422.6664",
        "Fax": "863.421.6520",
        "Email": "skiefer@thenatives.net",
        "Email 2": "natives@gate.net; wfbissett@thenatives.net",
        "Website": "http://www.thenatives.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "28.143031",
        "Longitude": "-81.567501",
        "Street": "Jb Carter Rd",
        "County": "Polk County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.567501,
          28.143031
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "The Natives Inc",
        "Address": "2929 JB Carter Rd, Davenport, FL, 33837",
        "City": "Davenport",
        "State": "FL",
        "Zip Code": "33837",
        "Country": "USA",
        "Contact": "Sarah Kiefer",
        "Phone": "863.422.6664",
        "Email": "natives@gate.net or skiefer@thenatives.net",
        "Website": "http://www.thenatives.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants\nSeeds",
        "Established": "1983",
        "Hours": "M-F 7:30-4",
        "Latitude": "28.143031",
        "Longitude": "-81.567501",
        "Street": "Jb Carter Rd",
        "County": "Polk County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.567501,
          28.143031
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "The Natural Garden",
        "Address": "PO Box 901, Harrisonburg, VA, 22803",
        "City": "Harrisonburg",
        "State": "VA",
        "Zip Code": "22803",
        "Country": "USA",
        "Contact": "Karl Shank",
        "Phone": "540.432.5522",
        "Email": "plants@thenaturalgarden.net",
        "Website": "http://www.thenaturalgarden.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "38.4496",
        "Longitude": "-78.8689",
        "County": "Harrisonburg City"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.8689,
          38.4496
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "The Natural Garden Inc",
        "Address": "38W443 Hwy 64, St Charles, IL, 60175",
        "City": "St Charles",
        "State": "IL",
        "Zip Code": "60175",
        "Country": "USA",
        "Contact": "Jan Sorensen",
        "Phone": "630.584.0150",
        "Fax": "630.584.0185",
        "Email": "gardeninfo@thenaturalgardeninc.com",
        "Website": "http://www.thenaturalgardeninc.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail",
        "Product": "Plants\nSeeds",
        "Established": "1953",
        "Hours": "M-Sat 9-5",
        "Latitude": "41.922586",
        "Longitude": "-88.369018",
        "Street": "Illinois Route 64",
        "County": "Kane County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.369018,
          41.922586
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "The Natural Gardener Garden Store",
        "Address": "4376 W 10th Ave, Vancouver, BC, V6R 2H7",
        "City": "Vancouver",
        "State": "BC",
        "Zip Code": "V6R 2H7",
        "Country": "Canada",
        "Contact": "Bob Tuckey",
        "Phone": "604.224.2207",
        "Fax": "604.224.2216",
        "Email": "info@thenatural-gardener.com",
        "Website": "http://www.thenatural-gardener.com",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Established": "2003",
        "Hours": "M-Sat 10-6 Sun 12-5",
        "Latitude": "45.674372",
        "Longitude": "-122.680373",
        "Street": "NW 10th Ave",
        "County": "Clark County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.680373,
          45.674372
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "The Plantsmen Nursery",
        "Address": "482 Peruville Rd, Groton, NY, 13073",
        "City": "Groton",
        "State": "NY",
        "Zip Code": "13073",
        "Country": "USA",
        "Contact": " Kathy Vidovich",
        "Phone": "607.533.7193",
        "Email": "kathyvidovich@gmail.com",
        "Website": "http://www.plantsmen.com",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "42.541311",
        "Longitude": "-76.449805",
        "Street": "Peruville Rd",
        "County": "Tompkins County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.449805,
          42.541311
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "The Plantworks LLC",
        "Address": "69465 Lantz Ln, Cove, OR, 97824",
        "City": "Cove",
        "State": "OR",
        "Zip Code": "97824",
        "Country": "USA",
        "Contact": "Sandra Roth or Richard Kenton",
        "Phone": "541.963.7870",
        "Fax": "541.963.7870",
        "Email": "plantworks@my180.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants\nSeeds",
        "Hours": "please call",
        "Latitude": "45.314978",
        "Longitude": "-117.800192",
        "Street": "Lantz Ln",
        "County": "Union County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.800192,
          45.314978
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "The Reveg Edge",
        "Address": "PO Box 361, Redwood City, CA, 94064",
        "City": "Redwood City",
        "State": "CA",
        "Zip Code": "94064",
        "Country": "USA",
        "Contact": "Craig Dremann",
        "Phone": "650.325.7333",
        "Fax": "650.325.4056",
        "Email": "craig@ecoseeds.com",
        "Website": "https://www.ecoseeds.com/greatbasin.html",
        "Nursery Type": "Private",
        "Business Type": "Contract\nResearch",
        "Product": "Services",
        "Latitude": "37.381144",
        "Longitude": "-122.334825",
        "County": "San Mateo County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.334825,
          37.381144
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "The Rhododendron Species Foundation",
        "Address": "2525 S 336th St, Federal Way, WA, 98003",
        "City": "Federal Way",
        "State": "WA",
        "Zip Code": "98003",
        "Country": "USA",
        "Contact": "Katy",
        "Phone": "253.838.4646",
        "Fax": "253.838.4686",
        "Email": "katy@rhodygarden.org",
        "Website": "http://rhodygarden.org/cms/",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "47.29242",
        "Longitude": "-122.303527",
        "Street": "S 336th St",
        "County": "King County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.303527,
          47.29242
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "The Testing Nursery",
        "Address": "Athens, GA, 30606",
        "City": "GA",
        "State": "GA",
        "Zip Code": "30606",
        "Country": "USA",
        "Email": "ddrummond@sref.info",
        "Nursery Type": "State",
        "Business Type": "Contract",
        "Product": "Plants\nSeeds\nServices",
        "Latitude": "33.951348",
        "Longitude": "-83.43064",
        "County": "Clarke County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.43064,
          33.951348
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "The Watershed Nursery",
        "Address": "601 A Canal Blvd, Richmond, CA, 94804",
        "City": "Richmond",
        "State": "CA",
        "Zip Code": "94804",
        "Country": "USA",
        "Contact": "Laura Hanson",
        "Phone": "510.234.2222",
        "Fax": "510.234.2242",
        "Email": "sales@thewatershednursery.com",
        "Website": "http://www.thewatershednursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nContract",
        "Product": "Plants",
        "Hours": "Tuesday - Sunday 10 am to 4 pm",
        "Latitude": "37.918044",
        "Longitude": "-122.378198",
        "Street": "Canal Blvd",
        "County": "Contra Costa County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.378198,
          37.918044
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "The Wildflower Seed Co",
        "Address": "PO Box 406, St Helena, CA, 94574",
        "City": "St Helena",
        "State": "CA",
        "Zip Code": "94574",
        "Country": "USA",
        "Phone": "707.963.3359",
        "Fax": "707.963.5383",
        "Email": "sales@wildflower-seed.com",
        "Website": "http://www.wildflower-seed.com",
        "Nursery Type": "Private",
        "Business Type": "Mail",
        "Product": "Seeds",
        "Latitude": "38.50299",
        "Longitude": "-122.46679",
        "Street": "St Helena Hwy",
        "County": "Napa County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.46679,
          38.50299
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "The Wildlife Group",
        "Address": "2858 CR 53, Tuskegee, AL, 36083",
        "City": "Tuskegee",
        "State": "AL",
        "Zip Code": "36083",
        "Country": "USA",
        "Contact": "Allen Deese",
        "Phone": "800.221.9703",
        "Fax": "284.724.9300",
        "Email": "allen@wildlifegroup.com",
        "Website": "http://www.wildlifegroup.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants\nSeeds",
        "Latitude": "32.477582",
        "Longitude": "-85.644311",
        "Street": "County Rd 53",
        "County": "Macon County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.644311,
          32.477582
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Theodore Payne Foundation Nursery",
        "Address": "10459 Tuxford St, Sun Valley, CA, 91352",
        "City": "Sun Valley",
        "State": "CA",
        "Zip Code": "91352",
        "Country": "USA",
        "Phone": "818.768.1802",
        "Email": "info@theodorepayne.org",
        "Nursery Type": "Not-for-Profit",
        "Business Type": "Retail",
        "Product": "Plants\nSeeds",
        "Latitude": "34.235684",
        "Longitude": "-118.358408",
        "Street": "Tuxford St",
        "County": "Los Angeles County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.358408,
          34.235684
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Thompson & Morgan Seedsmen Inc",
        "Address": "220 Faraday Ave, Jackson, NJ, 08527",
        "City": "Jackson",
        "State": "NJ",
        "Zip Code": "08527",
        "Country": "USA",
        "Phone": "800.274.7333",
        "Fax": "888.466.4769",
        "Website": "http://www.tmseeds.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail\nInternet",
        "Product": "Seeds",
        "Latitude": "40.059757",
        "Longitude": "-74.25908",
        "Street": "Faraday Ave",
        "County": "Ocean County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.25908,
          40.059757
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Tidewater Growers",
        "Address": "31185 Keller Pond Rd, Keller, VA, 23401",
        "City": "Keller",
        "State": "VA",
        "Zip Code": "23401",
        "Country": "USA",
        "Phone": "757.787.4079",
        "Fax": "757.787.4079",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "37.615425",
        "Longitude": "-75.763714",
        "Street": "Keller Pond Rd",
        "County": "Accomack County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.763714,
          37.615425
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Tiedemann Nursery",
        "Address": "4707 Cherryvale Ave, Soquel, CA, 95073",
        "City": "Soquel",
        "State": "CA",
        "Zip Code": "95073",
        "Country": "USA",
        "Contact": "Steve or Jon",
        "Phone": "831.475.5163",
        "Fax": "831.475.4067",
        "Email": "jon@tiedeman.com",
        "Email 2": "info@tiedemannllc.com",
        "Website": "http://www.tiedemannllc.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "37.008415",
        "Longitude": "-121.951221",
        "Street": "Cherryvale Ave",
        "County": "Santa Cruz County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.951221,
          37.008415
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Tillamook Estuaries Partnership",
        "Address": "Tillamook, OR, 97141",
        "City": "OR",
        "State": "OR",
        "Zip Code": "97141",
        "Country": "USA",
        "Contact": "Asa Skinner",
        "Phone": "503.322.2222",
        "Email": "asa@tbnep.org",
        "Website": "https://www.tbnep.org/",
        "Latitude": "45.461952",
        "Longitude": "-123.740874",
        "County": "Tillamook County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.740874,
          45.461952
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Timberline Tree Seed",
        "Address": "8201 I-25 S, Pueblo, CO, 81004",
        "City": "Pueblo",
        "State": "CO",
        "Zip Code": "81004",
        "Country": "USA",
        "Contact": "Jack Sikes",
        "Phone": "719.676.6120",
        "Fax": "719.676.2118",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Seeds",
        "Latitude": "38.23162",
        "Longitude": "-104.61401",
        "Street": "I-25",
        "County": "Pueblo County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -104.61401,
          38.23162
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Tiny Meadow Farm",
        "Address": "138 Long Ridge Rd , Danbury, CT, 06810",
        "City": "Danbury",
        "State": "CT",
        "Zip Code": "06810",
        "Country": "USA",
        "Contact": "Shanyn Siegel",
        "Email": "shanyn@tinymeadowfarm.com",
        "Website": "https://tinymeadowfarm.com/",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "41.343737",
        "Longitude": "-73.440969",
        "Street": "Long Ridge Rd",
        "County": "Western Connecticut Planning Region"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.440969,
          41.343737
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Tipi Mountain Native Plants",
        "Address": "8425 LD Ranch/Mission Rd, Cranbrook, BC, V1C 4J6",
        "City": "Cranbrook",
        "State": "BC",
        "Zip Code": "V1C 4J6",
        "Country": "Canada",
        "Contact": "Valerie Huff",
        "Phone": "250.427.7010",
        "Fax": "250.427.7012",
        "Email": "valerie@tipimountain.com",
        "Email 2": "info@tipimountain.com",
        "Website": "http://www.tipimountain.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nContract",
        "Product": "Plants",
        "Latitude": "0",
        "Longitude": "0"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          0,
          0
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Toadshade Wildflower Farm",
        "Address": "53 Everittstown Rd, Frenchtown, NJ, 08825",
        "City": "Frenchtown",
        "State": "NJ",
        "Zip Code": "08825",
        "Country": "USA",
        "Contact": "Randi Eckel",
        "Phone": "908.996.7500",
        "Fax": "908.996.7500",
        "Email": "toadshade@toadshade.com",
        "Website": "http://www.toadshade.com",
        "Nursery Type": "Private",
        "Business Type": "Retail\nMail\nInternet\nContract",
        "Product": "Plants\nSeeds\nServices",
        "Established": "1996",
        "Hours": "8-5 (M-F) Mail Order only - not open to the public",
        "Latitude": "40.537914",
        "Longitude": "-75.054095",
        "Street": "Everittstown Rd",
        "County": "Hunterdon County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -75.054095,
          40.537914
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Todd Valley Farms",
        "Address": "950 CR M (Hwy 92), Mead, NE, 68041",
        "City": "Mead",
        "State": "NE",
        "Zip Code": "68041",
        "Country": "USA",
        "Contact": "Wayne Thorson",
        "Phone": "402.624.6385",
        "Fax": "402.624.2003",
        "Email": "info@toddvalleyfarms.com",
        "Website": "http://www.toddvalleyfarms.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail\nInternet\nContract",
        "Product": "Plants",
        "Established": "1973",
        "Hours": "40729.0",
        "Latitude": "41.234032",
        "Longitude": "-96.468985",
        "Street": "County Rd M",
        "County": "Saunders County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.468985,
          41.234032
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Tom Dodd Nursery",
        "Address": "9300 Wulff Rd, Semmes, AL, 36575",
        "City": "Semmes",
        "State": "AL",
        "Zip Code": "36575",
        "Country": "USA",
        "Contact": "John Williams",
        "Phone": "251.649.1960",
        "Fax": "251.649.1965",
        "Email": "john.williams@tomdodd.com",
        "Website": "http://www.tomdodd.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Established": "1912",
        "Hours": "M-F 7-4",
        "Latitude": "30.764684",
        "Longitude": "-88.262188",
        "Street": "Wulff Rd S",
        "County": "Mobile County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.262188,
          30.764684
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Trail Creek Nursery Inc",
        "Address": "7095 S Hwy 33, Victor, ID, 83455",
        "City": "Victor",
        "State": "ID",
        "Zip Code": "83455",
        "Country": "USA",
        "Contact": "Jayson Calderwood or Al Young",
        "Phone": "800.336.2470",
        "Phone 2": "208.787.2470",
        "Fax": "208.787.2475",
        "Email": "jayson@trailcreeknursery.com",
        "Website": "http://www.trailcreeknursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "43.619925",
        "Longitude": "-111.11019",
        "Street": "S Highway 33",
        "County": "Teton County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.11019,
          43.619925
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Trans Gro Superior Plant Company Division",
        "Address": "510 Frangipani Ave, Naples, FL, 34117",
        "City": "Naples",
        "State": "FL",
        "Zip Code": "34117",
        "Country": "USA",
        "Contact": "Neil C Lewi",
        "Phone": "239.455.1560",
        "Fax": "239.455.2383",
        "Email": "nlewi@gargiulofarms.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "26.211235",
        "Longitude": "-81.594238",
        "Street": "Frangipani Ave",
        "County": "Collier County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.594238,
          26.211235
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Transplant Nursery",
        "Address": "1586 Parkertown Rd, Lavonia, GA, 30553",
        "City": "Lavonia",
        "State": "GA",
        "Zip Code": "30553",
        "Country": "USA",
        "Contact": "Gatlin Correia",
        "Phone": "706.356.8947",
        "Fax": "706.356.8842",
        "Email": "transplants@windstream.net",
        "Website": "http://www.transplantnursery.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "34.442129",
        "Longitude": "-83.073885",
        "Street": "Parkertown Rd",
        "County": "Hart County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.073885,
          34.442129
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Treasure State Seed Inc",
        "Address": "2380 US Hwy 89, Fairfield, MT, 59436",
        "City": "Fairfield",
        "State": "MT",
        "Zip Code": "59436",
        "Country": "USA",
        "Contact": "Chad Becker",
        "Phone": "406.467.2557",
        "Fax": "406.467.3377",
        "Email": "treasure@3rivers.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Seeds",
        "Latitude": "47.615948",
        "Longitude": "-111.984994",
        "Street": "Highway 89",
        "County": "Teton County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.984994,
          47.615948
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Tree Foundation of Kern",
        "Address": "PO  Box 2871, Bakersfield, CA, 93301",
        "City": "Bakersfield",
        "State": "CA",
        "Zip Code": "93301",
        "Country": "USA",
        "Contact": "Melissa Igor",
        "Phone": "661.325.6650",
        "Phone 2": "661.323.8733",
        "Email": "info@treefoundationofkern.org",
        "Website": "https://treefoundationofkern.org/",
        "Nursery Type": "Not-for-Profit",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "35.384337",
        "Longitude": "-119.020562",
        "County": "Kern County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.020562,
          35.384337
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Tree Pittsburgh Heritage Nursery",
        "Address": "32 62nd Street, Pittsburgh, PA, 15201",
        "City": "Pittsburgh",
        "State": "PA",
        "Zip Code": "15201",
        "Country": "USA",
        "Contact": "Megan",
        "Phone": "412.781.8733",
        "Email": "megan@treepittsburgh.org",
        "Website": "https://treenursery.org/",
        "Latitude": "40.488836",
        "Longitude": "-79.940831",
        "Street": "62nd St",
        "County": "Allegheny County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.940831,
          40.488836
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Tree of Life Nursery",
        "Address": "33201 Ortega Hwy, San Juan Capistrano, CA, 92675",
        "City": "San Juan Capistrano",
        "State": "CA",
        "Zip Code": "92675",
        "Country": "USA",
        "Contact": "Mike Evans or Jeff Bohn",
        "Phone": "949.728.0685",
        "Fax": "949.728.0509",
        "Email": "inquiries@treeoflifenursery.com",
        "Website": "http://www.CaliforniaNativePlants.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Established": "1978",
        "Hours": "M-F 8-4:30",
        "Latitude": "33.531721",
        "Longitude": "-117.551227",
        "Street": "Ortega Hwy",
        "County": "Orange County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.551227,
          33.531721
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "TreeMart",
        "Address": "12505 N Nebraska Ave, Tampa, FL, 33612",
        "City": "Tampa",
        "State": "FL",
        "Zip Code": "33612",
        "Country": "USA",
        "Contact": "Ken",
        "Phone": "800.664.4006",
        "Phone 2": "813.972.4006",
        "Fax": "813.972.4102",
        "Email": "ken@treemart.com",
        "Email 2": "treemart@treemart.com",
        "Website": "http://www.treemart.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "28.061571",
        "Longitude": "-82.450783",
        "Street": "N Nebraska Ave",
        "County": "Hillsborough County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.450783,
          28.061571
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "TreeTime ca",
        "Address": "3464-78 Ave NW, Edmonton, AB, T6B 2X9",
        "City": "Edmonton",
        "State": "AB",
        "Zip Code": "T6B 2X9",
        "Country": "Canada",
        "Contact": "Drew Patterson",
        "Phone": "866.873.3846",
        "Email": "drew@treetime.ca",
        "Website": "https://www.treetime.ca/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nInternet\nContract",
        "Product": "Plants\nSeeds\nServices",
        "Latitude": "37.000783",
        "Longitude": "-85.609522",
        "County": "Metcalfe County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.609522,
          37.000783
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Trees That Please",
        "Address": "3084 Hwy 47, Los Lunas, NM, 87031",
        "City": "Los Lunas",
        "State": "NM",
        "Zip Code": "87031",
        "Country": "USA",
        "Contact": "Anna Diercks",
        "Phone": "505.866.5027",
        "Fax": "505.866.SOIL",
        "Email": "treesthatplease@comcast.net",
        "Website": "http://treesthatplease.org/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "34.758455",
        "Longitude": "-106.722535",
        "Street": "Highway 47",
        "County": "Valencia County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -106.722535,
          34.758455
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Trees of Corrales",
        "Address": "7752 Corrales Rd, Corrales, NM, 87048",
        "City": "Corrales",
        "State": "NM",
        "Zip Code": "87048",
        "Country": "USA",
        "Contact": "Desiree Sanchez",
        "Phone": "888.418.7337",
        "Phone 2": "505.898.2327",
        "Fax": "505.898.9517",
        "Email": "desiree@treesofcorrales.com",
        "Website": "http://www.treesofcorrales.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "35.26675",
        "Longitude": "-106.60203",
        "Street": "Corrales Rd",
        "County": "Sandoval County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -106.60203,
          35.26675
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Trees to Please",
        "Address": "111 Smithfield Rd, Norridgewock , ME, 04957",
        "City": "Norridgewock",
        "State": "ME",
        "Zip Code": "04957",
        "Country": "USA",
        "Contact": "Todd Murphy",
        "Phone": "207.522.0545",
        "Email": "todd@trees-to-please.com",
        "Website": "http://trees-to-please.com/",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "44.69983",
        "Longitude": "-69.795581",
        "Street": "Smithfield Rd",
        "County": "Somerset County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -69.795581,
          44.69983
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Triangle Farms",
        "Address": "5648 Evans Valley Loop, Silverton, OR, 97381",
        "City": "Silverton",
        "State": "OR",
        "Zip Code": "97381",
        "Country": "USA",
        "Contact": "Kevin",
        "Phone": "503.873.5190",
        "Fax": "503.873.8861",
        "Email": "contact@trianglefarmseeds.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nContract",
        "Product": "Seeds",
        "Latitude": "45.001224",
        "Longitude": "-122.701752",
        "Street": "Evans Valley Rd",
        "County": "Marion County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.701752,
          45.001224
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Triangle Nursery Inc",
        "Address": "8526 Beersheba Hwy, McMinnville, TN, 37110",
        "City": "McMinnville",
        "State": "TN",
        "Zip Code": "37110",
        "Country": "USA",
        "Contact": "Ricky",
        "Phone": "931.668.8022",
        "Fax": "931.668.3297",
        "Email": "triangle@blomand.net",
        "Website": "https://www.trianglenursery.net/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "35.584671",
        "Longitude": "-85.713004",
        "Street": "Beersheba Hwy",
        "County": "Warren County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.713004,
          35.584671
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Trillium Gardens",
        "Address": "34610 Hwy 58, Eugene, OR, 97405",
        "City": "Eugene",
        "State": "OR",
        "Zip Code": "97405",
        "Country": "USA",
        "Contact": "Shelia Klest",
        "Phone": "541.937.3073",
        "Phone 2": "541.937.5413",
        "Fax": "888.544.7252",
        "Email": "sales@trilliumgardens.com",
        "Website": "www.trilliumgardens.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "43.987468",
        "Longitude": "-122.983478",
        "Street": "Hwy 58",
        "County": "Lane County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.983478,
          43.987468
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Tripple Brook Farm",
        "Address": "37 Middle Rd, Southampton, MA, 01073",
        "City": "Southampton",
        "State": "MA",
        "Zip Code": "01073",
        "Country": "USA",
        "Contact": "Stephen Breyer",
        "Phone": "413.527.4626",
        "Fax": "413.527.9853",
        "Email": "info@tripplebrookfarm.com",
        "Website": "http://www.tripplebrookfarm.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail",
        "Product": "Plants",
        "Latitude": "42.207647",
        "Longitude": "-72.702728",
        "Street": "Middle Rd",
        "County": "Hampshire County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.702728,
          42.207647
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Tropic Traditions Nurseries",
        "Address": "21585 West Newberry Road, Newberry, FL, 32669",
        "City": "Newberry",
        "State": "FL",
        "Zip Code": "32669",
        "Country": "USA",
        "Contact": "Jim Fleming",
        "Phone": "352.472.6084",
        "Fax": "352.472.1832",
        "Email": "jim@tropictraditions.com",
        "Website": "http://www.tropictraditions.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nContract",
        "Product": "Plants",
        "Latitude": "29.651965",
        "Longitude": "-82.571302",
        "Street": "W Newberry Rd",
        "County": "Alachua County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.571302,
          29.651965
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Tsemeta Forest Nursery",
        "Address": "503 Marshall Ln, Hoopa, CA, 95546",
        "City": "Hoopa",
        "State": "CA",
        "Zip Code": "95546",
        "Country": "USA",
        "Contact": "Rodney Robbins",
        "Phone": "530.625.4284",
        "Fax": "530.625.4207",
        "Email": "rowdyrobbins@hotmail.com",
        "Website": "https://www.tsemeta.com/",
        "Nursery Type": "Tribal",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "41.085993",
        "Longitude": "-123.694495",
        "Street": "Marshall Ln",
        "County": "Humboldt County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.694495,
          41.085993
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Turner Seed Company Inc",
        "Address": "211 Co Rd 151, Breckenridge, TX, 76424",
        "City": "Breckenridge",
        "State": "TX",
        "Zip Code": "76424",
        "Country": "USA",
        "Contact": "J Mercer",
        "Phone": "254.559.2065",
        "Phone 2": "800.722.8616",
        "Fax": "254.559.5024",
        "Email": "j@turnerseed.com",
        "Website": "http://www.turnerseed.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Seeds",
        "Latitude": "32.707825",
        "Longitude": "-98.898934",
        "Street": "County Rd 151",
        "County": "Stephens County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -98.898934,
          32.707825
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Twin City Seed Company",
        "Address": "7265 Washington Ave  S , Edina, MN, 55439",
        "City": "Edina",
        "State": "MN",
        "Zip Code": "55439",
        "Country": "USA",
        "Contact": "Kurt Slade",
        "Phone": "952.944.7105",
        "Email": "kslade@twincityseed.com",
        "Website": "http://www.twincityseed.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Seeds",
        "Latitude": "44.871338",
        "Longitude": "-93.397827",
        "Street": "Washington Ave S",
        "County": "Hennepin County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.397827,
          44.871338
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Twin Peaks Nursery",
        "Address": "51 E Lake Fork Rd, McCall, ID, 83638",
        "City": "McCall",
        "State": "ID",
        "Zip Code": "83638",
        "Country": "USA",
        "Contact": "Jim Crawford or Margo Conitz",
        "Phone": "208.634.3062",
        "Fax": "208.634.3062",
        "Email": "twinpeaksnursery@twinpeaksnursery.com",
        "Website": "http://www.twinpeaksnursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail\nContract",
        "Product": "Plants",
        "Established": "1994",
        "Hours": "9:30-5:00 seasonally",
        "Latitude": "44.828621",
        "Longitude": "-116.073643",
        "Street": "E Lake Fork Rd",
        "County": "Valley County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.073643,
          44.828621
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Two Ferns Native Nursery",
        "Address": "821 Pulley Dr, Madison, WI, 53714",
        "City": "Madison",
        "State": "WI",
        "Zip Code": "53714",
        "Country": "USA",
        "Contact": "Athena Salzer",
        "Email": "twofernsmadison@gmail.com",
        "Website": "http://www.twofernsmadison.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "43.110081",
        "Longitude": "-89.301591",
        "Street": "Pulley Dr",
        "County": "Dane County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.301591,
          43.110081
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "US Fish & Wildlife Service - Hakalau Forest National Wildlife Refuge Native Plant Nursery",
        "Address": "60 Nowelo St Ste 100, Hilo, HI, 96720",
        "City": "Hilo",
        "State": "HI",
        "Zip Code": "96720",
        "Country": "USA",
        "Contact": "Baron Horiuchi",
        "Phone": "808.443.2300",
        "Fax": "808.443.2304",
        "Email": "baron_Horiuchi@fws.gov",
        "Nursery Type": "Federal",
        "Business Type": "No public sales",
        "Product": "Plants",
        "Latitude": "19.698569",
        "Longitude": "-155.095593",
        "Street": "Nowelo St",
        "County": "Hawaii County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -155.095593,
          19.698569
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "US Fish & Wildlife Service - Kilauea Lighthouse National Wildlife Refuge Native Plant Nursery",
        "Address": "PO Box 1128, Kilauea, HI, 96754",
        "City": "Kilauea",
        "State": "HI",
        "Zip Code": "96754",
        "Country": "USA",
        "Contact": "Ron Langdon or Shannon Smith",
        "Phone": "808.828.1413",
        "Fax": "808.828.6634",
        "Email": "shannon_smith@fws.gov",
        "Nursery Type": "Federal",
        "Business Type": "No public sales",
        "Product": "Plants",
        "Latitude": "22.207314",
        "Longitude": "-159.395386",
        "County": "Kauai County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -159.395386,
          22.207314
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "USDA Forest Service - Bessey Nursery",
        "Address": "40637 River Loop, Hasley, NE, 69142",
        "City": "Hasley",
        "State": "NE",
        "Zip Code": "69142",
        "Country": "USA",
        "Contact": "Richard Gilbert",
        "Phone": "308.533.2257",
        "Phone 2": "308.432.0300",
        "Fax": "308.533.2310",
        "Email": "regilbert@fs.fed.us",
        "Nursery Type": "Federal",
        "Business Type": "No public sales",
        "Product": "Seeds",
        "Latitude": "41.90104",
        "Longitude": "-100.298546",
        "Street": "River Loop",
        "County": "Thomas County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -100.298546,
          41.90104
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "USDA Forest Service - Coeur d'Alene Nursery",
        "Address": "3600 W Nursery Rd, Coeur d'Alene, ID, 83815",
        "City": "Coeur d'Alene",
        "State": "ID",
        "Zip Code": "83815",
        "Country": "USA",
        "Contact": "Aram Eramian",
        "Phone": "208.765.7375",
        "Phone 2": "208.765.7372",
        "Fax": "208.765.7474",
        "Website": "http://www.fs.usda.gov/ipnf/",
        "Nursery Type": "Federal",
        "Business Type": "No public sales",
        "Product": "Plants",
        "Latitude": "47.71693",
        "Longitude": "-116.826681",
        "Street": "W Nursery Rd",
        "County": "Kootenai County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.826681,
          47.71693
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "USDA Forest Service - J Herbert Stone Nursery",
        "Address": "2606 Old Stage Rd, Central Point, OR, 97502",
        "City": "Central Point",
        "State": "OR",
        "Zip Code": "97502",
        "Country": "USA",
        "Contact": "John Justin",
        "Phone": "541.858.6100",
        "Fax": "541.858.6110",
        "Email": "rmallory@fs.fed.us",
        "Nursery Type": "Federal",
        "Business Type": "No public sales",
        "Product": "Plants\nSeeds",
        "Established": "1978",
        "Latitude": "42.353627",
        "Longitude": "-122.943097",
        "Street": "Old Stage Rd",
        "County": "Jackson County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.943097,
          42.353627
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "USDA Forest Service - JW Toumey Nursery",
        "Address": "E 23985 Old US Hwy 2, Watersmeet, MI, 49969",
        "City": "Watersmeet",
        "State": "MI",
        "Zip Code": "49969",
        "Country": "USA",
        "Contact": "Jim Pelkola",
        "Phone": "906.358.4523",
        "Fax": "906.358.0493",
        "Email": "james.pelkola@usda.gov",
        "Website": "http://www.fs.usda.gov/detail/ottawa/home/?cid=FSM8_042652",
        "Nursery Type": "Federal",
        "Product": "Plants\nSeeds\n",
        "Established": "1935",
        "Hours": "M-F 8-5",
        "Latitude": "46.274044",
        "Longitude": "-89.174814",
        "Street": "Old Us Hwy 2",
        "County": "Gogebic County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.174814,
          46.274044
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "USDA Forest Service - Lucky Peak Nursery",
        "Address": "15169 E Hwy 21, Boise, ID, 83716",
        "City": "Boise",
        "State": "ID",
        "Zip Code": "83716",
        "Country": "USA",
        "Contact": "Clark Fleege",
        "Phone": "208.343.1977",
        "Fax": "208.389.1416",
        "Email": "cfleege@fs.fed.us",
        "Website": "http://www.fs.usda.gov/boise/",
        "Nursery Type": "Federal",
        "Business Type": "No public sales",
        "Product": "Plants\nSeeds",
        "Established": "1958",
        "Hours": "M-F 8-5",
        "Latitude": "43.579035",
        "Longitude": "-115.991496",
        "Street": "E Hwy 21",
        "County": "Ada County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -115.991496,
          43.579035
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "USDA Forest Service - Nebraska National Forest & Grasslands",
        "Address": "125 N Main, Chadron, NE, 69337",
        "City": "Chadron",
        "State": "NE",
        "Zip Code": "69337",
        "Country": "USA",
        "Email": "nnf_info@usda.gov",
        "Website": "https://www.fs.usda.gov/nebraska",
        "Nursery Type": "Federal",
        "Product": "Plants",
        "Latitude": "42.834317",
        "Longitude": "-103.000582",
        "Street": "N Main St",
        "County": "Dawes County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -103.000582,
          42.834317
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "USDA Forest Service - Placerville Nursery",
        "Address": "2375 Fruitridge Rd, Camino, CA, 95709",
        "City": "Camino",
        "State": "CA",
        "Zip Code": "95709",
        "Country": "USA",
        "Phone": "530.622.9600",
        "Phone 2": "530.642.506",
        "Fax": "530.642.5099",
        "Website": "http://www.fs.usda.gov/eldorado/",
        "Nursery Type": "Federal",
        "Business Type": "No public sales",
        "Product": "Plants",
        "Latitude": "38.753375",
        "Longitude": "-120.73115",
        "Street": "Fruitridge Rd",
        "County": "El Dorado County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.73115,
          38.753375
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "USDA Natural Resources Conservation Service - Rose Lake Plant Materials Center",
        "Address": "7472 Stoll Rd, East Lansing, MI, 48823",
        "City": "East Lansing",
        "State": "MI",
        "Zip Code": "48823",
        "Country": "USA",
        "Contact": "John Leif",
        "Phone": "517.641.6300",
        "Fax": "517.641.4421",
        "Email": "john.leif@mi.usda.gov",
        "Nursery Type": "Federal",
        "Product": "Plants",
        "Latitude": "42.798669",
        "Longitude": "-84.415293",
        "Street": "Stoll Rd",
        "County": "Clinton County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.415293,
          42.798669
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "USDA Natural Resources Conservation Service - Upper Colorado Environmental Plant Materials Center",
        "Address": "5538 RBC 4, Meeker, CO, 81641",
        "City": "Meeker",
        "State": "CO",
        "Zip Code": "81641",
        "Country": "USA",
        "Contact": "Steve Parr",
        "Phone": "970.878.5003",
        "Fax": "970.878.5004",
        "Email": "steve.paar@co.nacdnet.net",
        "Nursery Type": "State",
        "Product": "Plants\nSeeds",
        "Latitude": "39.967864",
        "Longitude": "-108.043592",
        "County": "Rio Blanco County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -108.043592,
          39.967864
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "USDI Bureau of Indian Affairs - Southwestern Indian Polytechnic Institute",
        "Address": "9169 Coors Blvd NW, Albuquerque, NM, 87120",
        "City": "Albuquerque",
        "State": "NM",
        "Zip Code": "87120",
        "Country": "USA",
        "Fax": "505.897.5343",
        "Nursery Type": "Federal",
        "Product": "Plants",
        "Latitude": "35.17625",
        "Longitude": "-106.670834",
        "Street": "Coors Blvd NW",
        "County": "Bernalillo County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -106.670834,
          35.17625
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "USDI Bureau of Indian Affairs | Southern Ute Agency",
        "Address": "575 CR 517, Ignacio, CO, 81137",
        "City": "Ignacio",
        "State": "CO",
        "Zip Code": "81137",
        "Country": "USA",
        "Contact": "Ken ZanZee",
        "Phone": "970.563.4571",
        "Fax": "970.563.9321",
        "Email": "KenethZanZee@bia.gov",
        "Nursery Type": "Federal",
        "Product": "Plants",
        "Latitude": "37.138201",
        "Longitude": "-107.629064",
        "Street": "County Rd 517",
        "County": "La Plata County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -107.629064,
          37.138201
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "USDI Bureau of Land Management - Walter Horning Seed Orchard",
        "Address": "27004 S Sheckly Rd, Colton, OR, 97017",
        "City": "Colton",
        "State": "OR",
        "Zip Code": "97017",
        "Country": "USA",
        "Contact": "Michell Finch",
        "Phone": "503.630.6080",
        "Fax": "503.630.6888",
        "Email": "Michele_Finch@blm.gov",
        "Nursery Type": "Federal",
        "Business Type": "No public sales",
        "Product": "Plants\nSeeds",
        "Hours": "1976.0",
        "Latitude": "45.21564",
        "Longitude": "-122.39287",
        "Street": "S Sheckly Rd",
        "County": "Clackamas County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.39287,
          45.21564
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "USDI National Park Service - Glacier National Park Native Plant Nursery",
        "Address": "Glacier National Park, West Glacier, MT, 59936",
        "City": "West Glacier",
        "State": "MT",
        "Zip Code": "59936",
        "Country": "USA",
        "Contact": "Donna Peppin",
        "Phone": "406.888.7835",
        "Email": "donna_peppin@nps.gov",
        "Nursery Type": "Federal",
        "Business Type": "No public sales",
        "Product": "Plants\nSeeds",
        "Hours": "M-F 8-5",
        "Latitude": "48.49997",
        "Longitude": "-113.97873",
        "County": "Flathead County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -113.97873,
          48.49997
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "USDI National Park Service - Haleakula National Park Native Plant Nurseries",
        "Address": "PO Box 369, Makawao, HI, 96768",
        "City": "Makawao",
        "State": "HI",
        "Zip Code": "96768",
        "Country": "USA",
        "Contact": "Patty Welton",
        "Phone": "808.572.4481",
        "Fax": "808.572.4498",
        "Email": "Patti_Welton@nps.gov",
        "Website": "http://www.nps.gov/hale/",
        "Nursery Type": "Federal",
        "Business Type": "No public sales",
        "Product": "Plants",
        "Latitude": "20.832664",
        "Longitude": "-156.320242",
        "County": "Maui County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -156.320242,
          20.832664
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "USDI National Park Service - Hawai'i Volcanoes National Park Native Plant Nursery",
        "Address": "PO Box 52, Hawaii Volcanoes National Park, HI, 96718-0052",
        "City": "Hawaii Volcanoes National Park",
        "State": "HI",
        "Zip Code": "96718-0052",
        "Country": "USA",
        "Contact": "David",
        "Phone": "808.985.6085",
        "Fax": "808.985.6029",
        "Email": "statetreenursery@hawaii.gov",
        "Nursery Type": "Federal",
        "Business Type": "No public sales",
        "Product": "Plants",
        "Latitude": "20.24232",
        "Longitude": "-155.83323",
        "County": "Hawaii County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -155.83323,
          20.24232
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "USDI National Park Service - Kalaupapa National Historic Park Native Plant Nursery",
        "Address": "PO Box 2222, Kalaupapa, HI, 96742",
        "City": "Kalaupapa",
        "State": "HI",
        "Zip Code": "96742",
        "Country": "USA",
        "Contact": "Bill Garnett",
        "Phone": "808.567.6802",
        "Website": "https://www.nps.gov/kala/index.htm",
        "Nursery Type": "Federal",
        "Business Type": "No public sales",
        "Product": "Plants",
        "Latitude": "21.1925",
        "Longitude": "-156.986111",
        "County": "Kalawao County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -156.986111,
          21.1925
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "USDI National Park Service - Mount Rainier National Park Native Plant Nursery",
        "Address": "55210 238th Ave E, Ashford, WA, 98304-9751",
        "City": "Ashford",
        "State": "WA",
        "Zip Code": "98304-9751",
        "Country": "USA",
        "Contact": "Lou Whiteaker",
        "Phone": "360.569.6761",
        "Fax": "360.569.6749",
        "Email": "louwhiteaker@nps.gov",
        "Nursery Type": "Federal",
        "Business Type": "No public sales",
        "Product": "Plants",
        "Latitude": "46.755289",
        "Longitude": "-122.120881",
        "Street": "238th Ave E",
        "County": "Pierce County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.120881,
          46.755289
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "USDI National Park Service - Olympic National Park Native Plant Nursery",
        "Address": "600 E Park Ave, Port Angeles, WA, 98362",
        "City": "Port Angeles",
        "State": "WA",
        "Zip Code": "98362",
        "Country": "USA",
        "Contact": "David Allen",
        "Phone": "360.565.3130",
        "Fax": "360.565.3147",
        "Email": "alexandra_reinwald@nps.gov",
        "Nursery Type": "Federal",
        "Business Type": "No public sales",
        "Product": "Plants",
        "Latitude": "48.101507",
        "Longitude": "-123.435192",
        "Street": "E Park Ave",
        "County": "Clallam County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.435192,
          48.101507
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "USDI National Park Service - Rocky Mountain National Park Native Plant Nursery",
        "Address": "1000 Hwy 36, Estes Park, CO, 80517-8397",
        "City": "Estes Park",
        "State": "CO",
        "Zip Code": "80517-8397",
        "Country": "USA",
        "Contact": "Lindsey",
        "Phone": "970.586.1252",
        "Fax": "970.586.1392",
        "Email": "lindsey_springer@nps.gov",
        "Website": "http://www.nps.gov/romo/index.htm",
        "Nursery Type": "Federal",
        "Business Type": "No public sales",
        "Product": "Plants",
        "Established": "1995",
        "Hours": "M-F 8-5",
        "Latitude": "40.375289",
        "Longitude": "-105.505712",
        "Street": "US Hwy 36",
        "County": "Larimer County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -105.505712,
          40.375289
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "USDI National Park Service - Zion National Park Native Plant Nursery",
        "Address": "1 Zion Park Blvd, Springdale, UT, 84767-1099",
        "City": "Springdale",
        "State": "UT",
        "Zip Code": "84767-1099",
        "Country": "USA",
        "Contact": "Becca Lieberg",
        "Phone": "435.772.0216",
        "Phone 2": "435.772.3209",
        "Email": "rebecca_lieberg@nps.gov",
        "Nursery Type": "Federal",
        "Business Type": "No Public Sales",
        "Product": "Plants\nSeeds",
        "Established": "1996",
        "Hours": "M-F 8-5",
        "Latitude": "37.16124",
        "Longitude": "-113.042278",
        "Street": "Zion Park Blvd",
        "County": "Washington County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -113.042278,
          37.16124
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "USDI National Park Service | Sequoia & Kings Canyon National Parks  Ash Mountain Native Plant Nursery",
        "Address": "47050 Generals Hwy, Three Rivers, CA, 93271-9651",
        "City": "Three Rivers",
        "State": "CA",
        "Zip Code": "93271-9651",
        "Country": "USA",
        "Contact": "Melanie Baer-Keeley",
        "Phone": "559.565.3775",
        "Phone 2": "559.565.3341",
        "Fax": "559.565.4204",
        "Email": "Melanie_Baer-Keeley@nps.gov",
        "Email 2": "mbkeeley@mindinfo.com",
        "Website": "http://www.nps.gov/seki/index.htm",
        "Nursery Type": "Federal",
        "Business Type": "No public sales",
        "Product": "Plants\nSeeds",
        "Latitude": "36.487125",
        "Longitude": "-118.841533",
        "Street": "Generals Hwy",
        "County": "Tulare County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.841533,
          36.487125
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "USDI Park Service | Joshua Tree National Park | Center for Arid Lands Restoration",
        "Address": "74485 National Park Dr, Twentynine Palms, CA, 92277",
        "City": "Twentynine Palms",
        "State": "CA",
        "Zip Code": "92277",
        "Country": "USA",
        "Contact": "Jean Graham",
        "Phone": "760.367.5565",
        "Fax": "760.367.5588",
        "Email": "jean_graham@nps.gov",
        "Nursery Type": "Federal",
        "Product": "Plants",
        "Latitude": "34.129359",
        "Longitude": "-116.036989",
        "Street": "National Park Dr",
        "County": "San Bernardino County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.036989,
          34.129359
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Uncle Tim's Farm & Garden Center",
        "Address": "RR 1, Box 205H, Canaan, NH, 03741",
        "City": "Box 205H",
        "State": "NH",
        "Zip Code": "03741",
        "Country": "USA",
        "Phone": "603.523.4909",
        "Product": "Plants",
        "Latitude": "43.63123",
        "Longitude": "-72.057312",
        "County": "Grafton County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -72.057312,
          43.63123
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "University of Hawai'i at Manoa - Harold L Lyon Arboretum",
        "Address": "Harold L Lyon Arboretum  University of Hawai`i-Manoa, 3860 Manoa Rd, Honolulu, HI, 96822",
        "City": "3860 Manoa Rd",
        "State": "HI",
        "Zip Code": "96822",
        "Country": "USA",
        "Phone": "808.988.0456",
        "Fax": "808.988.0462",
        "Nursery Type": "State",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "21.32021",
        "Longitude": "-157.810758",
        "County": "Honolulu County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -157.810758,
          21.32021
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "University of Idaho | Center for Forest Nursery and Seedling Research",
        "Address": "Pitkin Forest Nursery<br />1025 Plant Science Rd, Moscow, ID, 83843",
        "City": "Moscow",
        "State": "ID",
        "Zip Code": "83843",
        "Country": "USA",
        "Contact": "Lauren King",
        "Phone": "208.885.3888",
        "Fax": "208.885.6564",
        "Email": "seedlings@uidaho.edu",
        "Website": "https://www.uidaho.edu/cnr/center-for-forest-nursery-and-seedling-research",
        "Nursery Type": "State",
        "Business Type": "Wholesale\nRetail\nMail\nInternet",
        "Product": "Plants",
        "Established": "1910",
        "Hours": "M-F 8-4:30",
        "Latitude": "46.725841",
        "Longitude": "-116.955751",
        "Street": "Plant Science Rd",
        "County": "Latah County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.955751,
          46.725841
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "University of Texas Rio Grande Valley (UTRGV) Native Plant Nursery",
        "Address": "2651 FJRM Ave, Brownsville, TX 78520, Brownsville, TX, 78520",
        "City": "Brownsville",
        "State": "TX",
        "Zip Code": "78520",
        "Country": "USA",
        "Contact": "Dr. Christopher Gabler",
        "Phone": "956.882.5040",
        "Email": "christopher.gabler@utrgv.edu",
        "Latitude": "25.895787",
        "Longitude": "-97.481326",
        "Street": "Fjrm Ave",
        "County": "Cameron County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.481326,
          25.895787
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Urban Forestry Services",
        "Address": "301 W Seminary St, Micanopy, FL, 32667",
        "City": "Micanopy",
        "State": "FL",
        "Zip Code": "32667",
        "Country": "USA",
        "Contact": "Michael Campbell",
        "Phone": "352.466.3919",
        "Fax": "352.466.3280",
        "Email": "urbanforestry@att.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "29.504659",
        "Longitude": "-82.28308",
        "Street": "NW Seminary Ave",
        "County": "Alachua County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.28308,
          29.504659
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Utah Seed",
        "Address": "10220 W 11600 N, Bothwell, UT, 84337",
        "City": "Bothwell",
        "State": "UT",
        "Zip Code": "84337",
        "Country": "USA",
        "Contact": "Orson Boyce or Shane Getz",
        "Phone": "435.854.3720",
        "Fax": "435.854.3724",
        "Email": "oboyce@utahseed.com",
        "Website": "http://www.utahseed.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail\nInternet",
        "Product": "Seeds",
        "Latitude": "41.691063",
        "Longitude": "-112.2952",
        "Street": "N 11600 W",
        "County": "Box Elder County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -112.2952,
          41.691063
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Valley Growers",
        "Address": "30570 S Barlow Rd, Hubbard, OR, 90732",
        "City": "Hubbard",
        "State": "OR",
        "Zip Code": "90732",
        "Country": "USA",
        "Contact": "Vicqui Guezara or John D Appel",
        "Phone": "503.651.3535",
        "Fax": "503.651.3044",
        "Email": "vlygrwrs@web-ster.com",
        "Website": "http://valleygrowers.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "45.165234",
        "Longitude": "-122.718057",
        "Street": "S Barlow Rd",
        "County": "Clackamas County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.718057,
          45.165234
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Van Berkum Nursery",
        "Address": "4 James Rd, Deerfield, NH, 03037",
        "City": "Deerfield",
        "State": "NH",
        "Zip Code": "03037",
        "Country": "USA",
        "Contact": "Leslie Van Burkum",
        "Phone": "603.463.7663",
        "Fax": "603.463.7326",
        "Email": "salesdesk@vanberkumnursery.com",
        "Website": "http://www.vanberkumnursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "43.183406",
        "Longitude": "-71.288019",
        "Street": "James Rd",
        "County": "Rockingham County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.288019,
          43.183406
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Vans Pines Nursery Inc",
        "Address": "14731 Baldwin, West Olive, MI, 49460",
        "City": "West Olive",
        "State": "MI",
        "Zip Code": "49460",
        "Country": "USA",
        "Contact": "Gary Van Slooten",
        "Phone": "800.888.7337",
        "Phone 2": "616.399.1620",
        "Fax": "616.399.1652",
        "Email": "info@vanspinesnursery.com",
        "Website": "http://www.vanspinesnursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Established": "1934",
        "Hours": "M-F 8-5",
        "Latitude": "42.907665",
        "Longitude": "-86.148555",
        "Street": "Baldwin St",
        "County": "Ottawa County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.148555,
          42.907665
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Verbinnen's Nursery LTD",
        "Address": "1504 Brock Road  R R 4, Dundas, ON, L9H 5E4",
        "City": "Dundas",
        "State": "ON",
        "Zip Code": "L9H 5E4",
        "Country": "Canada",
        "Contact": "Alex Verbinnen",
        "Phone": "905.659.7072",
        "Email": "alex@verbinnens.com",
        "Website": "http://www.verbinnens.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "44.308945",
        "Longitude": "-93.26077",
        "Street": "Breck Cir",
        "County": "Rice County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.26077,
          44.308945
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Verbinnen's Nursery Ltd",
        "Address": "1504 Brock Rd  RR 4, Dundas, ON, L9H 5E4",
        "City": "Dundas",
        "State": "ON",
        "Zip Code": "L9H 5E4",
        "Country": "Canada",
        "Contact": "Bernard",
        "Phone": "905.659.7072",
        "Email": "bernard@verbinnens.com",
        "Website": "http://www.verbinnens.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "44.308945",
        "Longitude": "-93.26077",
        "Street": "Breck Cir",
        "County": "Rice County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.26077,
          44.308945
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Viewcrest Nurseries",
        "Address": "12713 NE 184th St, Battle Ground, WA, 98604",
        "City": "Battle Ground",
        "State": "WA",
        "Zip Code": "98604",
        "Country": "USA",
        "Contact": "Dawna Haluapo",
        "Phone": "360.687.5167",
        "Fax": "360.687.1212",
        "Email": "bamboo@viewcrest.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Hours": "M-F 8:30-4",
        "Latitude": "45.754303",
        "Longitude": "-122.541453",
        "Street": "NE 184th St",
        "County": "Clark County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.541453,
          45.754303
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Vila & Son Nursery Corp ",
        "Address": "20451 SW 216th St, Miami, FL, 33170",
        "City": "Miami",
        "State": "FL",
        "Zip Code": "33170",
        "Country": "USA",
        "Contact": "Maria Vila",
        "Phone": "305.245.2055",
        "Fax": "305.255.9207",
        "Email": "mariav@vila-n-son.com",
        "Email 2": "Claudiaf@vila-n-son.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "25.566589",
        "Longitude": "-80.523926",
        "Street": "SW 216th St",
        "County": "Miami-Dade County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.523926,
          25.566589
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Village Nurseries",
        "Address": "1589 N Main St, Orange, CA, 92867",
        "City": "Orange",
        "State": "CA",
        "Zip Code": "92867",
        "Country": "USA",
        "Phone": "800.524.0209",
        "Fax": "714.279.3199",
        "Email": "vnmailbox@villagenurseries.com",
        "Website": "https://www.villagenurseries.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nContract",
        "Product": "Plants",
        "Latitude": "33.81383",
        "Longitude": "-117.865874",
        "Street": "N Main St",
        "County": "Orange County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.865874,
          33.81383
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Villager Nursery Inc",
        "Address": "10678 Donner Pass Rd Bldg A, Truckee, CA, 96161-4834",
        "City": "Truckee",
        "State": "CA",
        "Zip Code": "96161-4834",
        "Country": "USA",
        "Contact": "Eric Larusson or Rob VanDyke",
        "Phone": "530.587.0771",
        "Fax": "530.587.7439",
        "Email": "info@villagernursery.com",
        "Website": "http://www.villagernursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants\nSeeds\nServices",
        "Established": "1975",
        "Hours": "7 days a week May through December.  Check our website for details.",
        "Latitude": "39.326592",
        "Longitude": "-120.195038",
        "Street": "Donner Pass Rd",
        "County": "Nevada County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.195038,
          39.326592
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Vinland Valley Nursery",
        "Address": "1606 N 600 Rd, Baldwin City, KS, 66006",
        "City": "Baldwin City",
        "State": "KS",
        "Zip Code": "66006",
        "Country": "USA",
        "Contact": "Amy Albright or Doug Davison",
        "Phone": "785.594.2966",
        "Email": "dougdavison@vinlandvalleynursery.com",
        "Website": "http://www.vinlandvalleynursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail",
        "Product": "Plants",
        "Latitude": "38.82625",
        "Longitude": "-95.204375",
        "Street": "N 600th Rd",
        "County": "Douglas County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.204375,
          38.82625
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Virginia Dept of Forestry - Augusta Nursery",
        "Address": "90 Forestry Center Ln, Crimora, VA, 24431-0160",
        "City": "Crimora",
        "State": "VA",
        "Zip Code": "24431-0160",
        "Country": "USA",
        "Contact": "Josh McLaughlin",
        "Phone": "540.363.7000",
        "Fax": "540.363.5055",
        "Email": "joshua.mclaughlin@dof.virginia.gov",
        "Website": "http://www.dof.virginia.gov",
        "Nursery Type": "State",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "38.170936",
        "Longitude": "-78.852141",
        "Street": "Forestry Center Ln",
        "County": "Augusta County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.852141,
          38.170936
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Virginia Dept of Forestry - Sussex Nursery",
        "Address": "19127 Sandy Hill Rd, Courtland, VA, 23837",
        "City": "Courtland",
        "State": "VA",
        "Zip Code": "23837",
        "Country": "USA",
        "Contact": "Josh Bennicoff",
        "Phone": "804.834.2855",
        "Fax": "804.834.3141",
        "Email": "joshua.bennicoff@dof.virginia.gov",
        "Website": "http://www.dof.virginia.gov",
        "Nursery Type": "State",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "36.859117",
        "Longitude": "-77.171886",
        "Street": "Sandy Hill Rd",
        "County": "Sussex County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.171886,
          36.859117
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "WACD Plant Materials Center",
        "Address": "16564 Bradley Rd, Bow, WA, 98232",
        "City": "Bow",
        "State": "WA",
        "Zip Code": "98232",
        "Country": "USA",
        "Contact": "Jim Brown or Jacquie Gauthier",
        "Phone": "360.757.1094",
        "Email": "pmcsales@gmx.com",
        "Website": "http://wacdpmc.org",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "48.508528",
        "Longitude": "-122.385483",
        "Street": "Bradley Rd",
        "County": "Skagit County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.385483,
          48.508528
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "WILD Canada",
        "Address": "75 39th St N, Wasaga Beach, ON, L9Z 2A3",
        "City": "Wasaga Beach",
        "State": "ON",
        "Zip Code": "L9Z 2A3",
        "Country": "Canada",
        "Contact": "Scott Martin",
        "Phone": "705.429.4936",
        "Fax": "705.429.1435",
        "Email": "info@wildcanada.ca",
        "Website": "http://www.wildcanada.ca",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nMail",
        "Product": "Plants",
        "Established": "1989",
        "Hours": "M-F 9-5, by appt",
        "Latitude": "46.91807",
        "Longitude": "-104.00437",
        "County": "Golden Valley County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -104.00437,
          46.91807
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Wabash Farms",
        "Address": "31218 SE 408th St, Enumclaw, WA, 98022-0291",
        "City": "Enumclaw",
        "State": "WA",
        "Zip Code": "98022-0291",
        "Country": "USA",
        "Contact": "Sandy Miller",
        "Phone": "360.825.7051",
        "Email": "wabash@nventure.com",
        "Website": "www.wabashfarms.info",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nContract",
        "Product": "Plants",
        "Latitude": "47.237535",
        "Longitude": "-121.929692",
        "Street": "SE 408th St",
        "County": "King County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.929692,
          47.237535
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Waimea Valley ",
        "Address": "59-864 Kamehameha Hwy, Hale'iwa, HI, 96712",
        "City": "Hale'iwa",
        "State": "HI",
        "Zip Code": "96712",
        "Country": "USA",
        "Contact": "David Orr",
        "Phone": "808.638.5876",
        "Fax": "808.638.7776",
        "Email": "dorr@waimeavalley.net",
        "Website": "http://www.waimeavalley.net",
        "Nursery Type": "State",
        "Business Type": "No public sales",
        "Product": "Plants\nSeeds",
        "Established": "1973",
        "Hours": "9-5 M-F",
        "Latitude": "21.64177",
        "Longitude": "-158.062064",
        "Street": "Kamehameha Hwy",
        "County": "Honolulu County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -158.062064,
          21.64177
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Wallace Hansen Native Plants",
        "Address": "2158 Bower Ct SE, Salem, OR, 97301",
        "City": "Salem",
        "State": "OR",
        "Zip Code": "97301",
        "Country": "USA",
        "Contact": "Wallace Hansen",
        "Phone": "503.581.2638",
        "Fax": "503.581.9957",
        "Email": "plants@nwplants.com",
        "Website": "http://www.nwplants.com",
        "Nursery Type": "Private",
        "Business Type": "Retail\nMail",
        "Product": "Plants",
        "Latitude": "44.9057",
        "Longitude": "-122.92368",
        "Street": "Bower Ct SE",
        "County": "Marion County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.92368,
          44.9057
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Warner's Nursery",
        "Address": "1101 E Butler Ave, Flagstaff, AZ, 86001",
        "City": "Flagstaff",
        "State": "AZ",
        "Zip Code": "86001",
        "Country": "USA",
        "Contact": "Misti Warner-Anderson",
        "Phone": "928.774.1983",
        "Fax": "928.774.6113",
        "Email": "info@warnercompanies.com",
        "Website": "http://warnercompanies.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "35.191633",
        "Longitude": "-111.636946",
        "Street": "E Butler Ave",
        "County": "Coconino County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.636946,
          35.191633
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Warren County Nursery Inc",
        "Address": "6492 Beersheba Hwy, McMinnville, TN, 37110",
        "City": "McMinnville",
        "State": "TN",
        "Zip Code": "37110",
        "Country": "USA",
        "Contact": "Jeff Hobbs",
        "Phone": "931.668.8941",
        "Fax": "931.668.2245",
        "Email": "wcnursery@blomand.net or info@warrencountynursery.com",
        "Website": "http://www.warrencountynursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants\nSeeds",
        "Established": "1951",
        "Hours": "7:30-4:30",
        "Latitude": "35.612494",
        "Longitude": "-85.707395",
        "Street": "Beersheba Hwy",
        "County": "Warren County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.707395,
          35.612494
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Washington State Dept of Natural Resources - Webster Forest Nursery",
        "Address": "9805 Blomberg St SW, Olympia, WA, 98512",
        "City": "Olympia",
        "State": "WA",
        "Zip Code": "98512",
        "Country": "USA",
        "Contact": "Kathryn Minnema",
        "Phone": "360.902.1234",
        "Phone 2": "877.890.2626",
        "Fax": "360.664.0963",
        "Email": "websternursery@dnr.wa.gov",
        "Website": "https://www.dnr.wa.gov/programs-and-services/forest-resources/webster-forest-nursery",
        "Nursery Type": "State",
        "Business Type": "Wholesale\nRetail\n",
        "Product": "Plants\nSeeds\n",
        "Established": "1958",
        "Latitude": "46.947343",
        "Longitude": "-122.95256",
        "Street": "Blomberg St SW",
        "County": "Thurston County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.95256,
          46.947343
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Washoe State Tree Nursery",
        "Address": "885 Eastlake Blvd, Carson City, NV, 89704",
        "City": "Carson City",
        "State": "NV",
        "Zip Code": "89704",
        "Country": "USA",
        "Contact": "Lois Dworshak",
        "Phone": "775.849.0213",
        "Fax": "775.849.2058",
        "Email": "washoenursery@forestry.nv.gov",
        "Website": "http://forestry.nv.gov/ndf-state-forest-nurseries/washoe-state-tree-nursery/",
        "Nursery Type": "State",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "39.312235",
        "Longitude": "-119.789764",
        "Street": "Eastlake Blvd",
        "County": "Washoe County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.789764,
          39.312235
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Water Resources Design Inc",
        "Address": "551 Teton Trl, Indianapolis, IN, 46217",
        "City": "Indianapolis",
        "State": "IN",
        "Zip Code": "46217",
        "Country": "USA",
        "Contact": "Greg Oskay",
        "Phone": "317.786.7529",
        "Email": "goskay25@iquest.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "39.664915",
        "Longitude": "-86.168874",
        "Street": "Teton Trl",
        "County": "Marion County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.168874,
          39.664915
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Water Wheel Farms",
        "Address": "96863 Larson Ln, North Bend, OR, 97459",
        "City": "North Bend",
        "State": "OR",
        "Zip Code": "97459",
        "Country": "USA",
        "Phone": "541.756.6726",
        "Fax": "541.756.6726",
        "Email": "konajack@earthlink.net",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "43.484238",
        "Longitude": "-124.122128",
        "Street": "Larson Ln",
        "County": "Coos County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -124.122128,
          43.484238
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Waterford Gardens",
        "Address": "74 E Allendale Rd, Saddle River, NJ, 07458",
        "City": "Saddle River",
        "State": "NJ",
        "Zip Code": "07458",
        "Country": "USA",
        "Contact": "David Meeks",
        "Phone": "201.327.0721",
        "Fax": "201.327.0684",
        "Email": "office@waterfordgardens.com",
        "Website": "http://waterford-gardens.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "41.030829",
        "Longitude": "-74.100421",
        "Street": "Allendale Rd E",
        "County": "Bergen County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.100421,
          41.030829
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Watershed Garden Works",
        "Address": "2039 44th Ave, Longview, WA, 98632",
        "City": "Longview",
        "State": "WA",
        "Zip Code": "98632",
        "Country": "USA",
        "Contact": "Scott Edwards",
        "Phone": "360.423.6456",
        "Fax": "360.423.6456",
        "Email": "scott@watershedgardenworks.com",
        "Website": "http://www.watershedgardenworks.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Established": "1989",
        "Hours": "by appt",
        "Latitude": "46.159605",
        "Longitude": "-122.99877",
        "Street": "44th Ave",
        "County": "Cowlitz County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.99877,
          46.159605
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Watkins Nurseries Inc",
        "Address": "101 Dry Bridge Rd, Midlothian, VA, 23114",
        "City": "Midlothian",
        "State": "VA",
        "Zip Code": "23114",
        "Country": "USA",
        "Phone": "804.379.8733",
        "Fax": "804.598.6220",
        "Website": "http://www.watkinsnurseries.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "37.507068",
        "Longitude": "-77.706949",
        "Street": "Dry Bridge Rd",
        "County": "Chesterfield County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.706949,
          37.507068
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Wearren and Sons Nurseries Inc",
        "Address": "406 Cotton Ln, Taylorsville, KY, 40071",
        "City": "Taylorsville",
        "State": "KY",
        "Zip Code": "40071",
        "Country": "USA",
        "Contact": "Brent Wearren",
        "Phone": "502.252.7788",
        "Fax": "502.252.7349",
        "Email": "wearrenson@aol.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "37.965584",
        "Longitude": "-85.397024",
        "Street": "Cotton Ln",
        "County": "Spencer County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.397024,
          37.965584
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Webb Landscape Inc",
        "Address": "162 Glendale Rd, Bellevue, ID, 83313",
        "City": "Bellevue",
        "State": "ID",
        "Zip Code": "83313",
        "Country": "USA",
        "Contact": "Mark Palmer",
        "Phone": "208.788.2066",
        "Fax": "208.726.4767",
        "Email": "markpalmer@webbland.com",
        "Website": "http://www.webbland.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "43.414233",
        "Longitude": "-114.269739",
        "Street": "Glendale Rd",
        "County": "Blaine County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -114.269739,
          43.414233
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "West Texas Nursery - Texas A&M Forest Service",
        "Address": "7914 E  Hwy 62, Idalou, TX, 79329",
        "City": "Idalou",
        "State": "TX",
        "Zip Code": "79329",
        "Country": "USA",
        "Contact": "Cameron Dudley",
        "Phone": "806.892.3572",
        "Fax": "806.892.3585",
        "Email": "wtn@tfs.tamu.edu",
        "Website": "https://www.westtexasnursery.com",
        "Nursery Type": "State",
        "Product": "Plants",
        "Latitude": "33.667427",
        "Longitude": "-101.63918",
        "Street": "State Hwy 114",
        "County": "Lubbock County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -101.63918,
          33.667427
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "West Virginia Division of Forestry - Clements State Tree Nursery",
        "Address": "624 Forestry Dr, West Columbia, WV, 25287",
        "City": "West Columbia",
        "State": "WV",
        "Zip Code": "25287",
        "Country": "USA",
        "Contact": "Jason Huffman",
        "Phone": "304.675.1820",
        "Email": "jason.l.huffman@wv.gov",
        "Website": "http://wvforestry.com",
        "Nursery Type": "State",
        "Product": "Plants",
        "Latitude": "38.959477",
        "Longitude": "-82.083205",
        "Street": "Forestry Dr",
        "County": "Mason County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.083205,
          38.959477
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Westchester Community College | The Native Plant Center",
        "Address": "75 Grasslands Rd, Valhalla, NY, 10595",
        "City": "Valhalla",
        "State": "NY",
        "Zip Code": "10595",
        "Country": "USA",
        "Contact": "Carol Capobianco",
        "Phone": "914.606.7870",
        "Fax": "914.606.6143",
        "Email": "wcc.nativeplant@sunywcc.edu",
        "Website": "http://nativeplantcenter.org/",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "41.065408",
        "Longitude": "-73.789263",
        "Street": "Grasslands Rd",
        "County": "Westchester County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.789263,
          41.065408
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Western Forest Systems Inc",
        "Address": "3731 15th St, Lewiston, ID, 83501",
        "City": "Lewiston",
        "State": "ID",
        "Zip Code": "83501",
        "Country": "USA",
        "Contact": "Janice Schaefer",
        "Phone": "208.743.0147",
        "Fax": "208.746.0791",
        "Email": "schaeferjk@clearwire.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Established": "1985",
        "Hours": "M-F 7-3",
        "Latitude": "46.367431",
        "Longitude": "-116.954504",
        "Street": "15th St",
        "County": "Nez Perce County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.954504,
          46.367431
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Western Maine Nurseries",
        "Address": "4 Nursery Ln, Fryeburg, ME, 04037",
        "City": "Fryeburg",
        "State": "ME",
        "Zip Code": "04037",
        "Country": "USA",
        "Contact": "Robin Libby",
        "Phone": "800.447.4745",
        "Phone 2": "207.935.2161",
        "Fax": "207.935.2043",
        "Email": "info@westernmainenurseries.com",
        "Website": "http://wmnurseries.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "44.008337",
        "Longitude": "-70.96715",
        "Street": "Nursery Ln",
        "County": "Oxford County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -70.96715,
          44.008337
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Western Native Plants  LLC",
        "Address": "40340 Riverview Dr, Chiloquin, OR, 97624",
        "City": "Chiloquin",
        "State": "OR",
        "Zip Code": "97624",
        "Country": "USA",
        "Contact": "Annie Sedlacek",
        "Phone": "541.783.7800",
        "Email": "annie@kfalls.net",
        "Website": "http://www.rockbottomranch.com/Pages/default.aspx",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "42.590541",
        "Longitude": "-121.859597",
        "Street": "Riverview Dr",
        "County": "Klamath County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.859597,
          42.590541
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Western Native Seed",
        "Address": "25 Pine Edge Dr, Coaldale, CO, 81222",
        "City": "Coaldale",
        "State": "CO",
        "Zip Code": "81222",
        "Country": "USA",
        "Contact": "Alex Tonnesen",
        "Phone": "719.942.3935",
        "Email": "info@westernnativeseed.com",
        "Website": "http://www.westernnativeseed.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail",
        "Product": "Seeds",
        "Established": "1997",
        "Latitude": "38.366591",
        "Longitude": "-105.764813",
        "Street": "Pine Edge Dr",
        "County": "Fremont County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -105.764813,
          38.366591
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Western Reclamation Inc ",
        "Address": "13293 Glade North Rd, Eltopia, WA, 99330",
        "City": "Eltopia",
        "State": "WA",
        "Zip Code": "99330",
        "Country": "USA",
        "Contact": "Todd Harris",
        "Phone": "509.297.4500",
        "Phone 2": "509.531.1702",
        "Fax": "509.297.4505",
        "Email": "office@westernreclamation.com",
        "Email 2": "wri@westernreclamation.com",
        "Website": "http://www.westernreclamation.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nContract",
        "Product": "Seeds",
        "Established": "2006",
        "Hours": "M-F 8:00-4:30",
        "Latitude": "46.463278",
        "Longitude": "-119.112188",
        "Street": "Glade North Rd",
        "County": "Franklin County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.112188,
          46.463278
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Westervelt Ecological Services - Southeast Region",
        "Address": "2128 Moores Mill Rd Ste B, Auburn, AL, 36830",
        "City": "Auburn",
        "State": "AL",
        "Zip Code": "36830",
        "Country": "USA",
        "Contact": "John Wigginton",
        "Phone": "334.821.1999",
        "Fax": "334.821.1969",
        "Email": "jwigginton@westervelt.com",
        "Website": "http://www.wesmitigation.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nInternet\nContract",
        "Product": "Services",
        "Latitude": "32.584799",
        "Longitude": "-85.445461",
        "Street": "Moores Mill Rd",
        "County": "Lee County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.445461,
          32.584799
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Westervelt Ecological Services - Western Region",
        "Address": "600 N Market Blvd Ste 3, Sacramento, CA, 95834",
        "City": "Sacramento",
        "State": "CA",
        "Zip Code": "95834",
        "Country": "USA",
        "Contact": "Travis Hemmen",
        "Phone": "916.646.3644",
        "Email": "themmen@westervelt.com",
        "Website": "http://www.wesmitigation.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nContract",
        "Product": "Services",
        "Latitude": "38.646908",
        "Longitude": "-121.476144",
        "Street": "N Market Blvd",
        "County": "Sacramento County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.476144,
          38.646908
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Westland Seed Inc",
        "Address": "36272 Round Butte Rd, Ronan, MT, 59864",
        "City": "Ronan",
        "State": "MT",
        "Zip Code": "59864",
        "Country": "USA",
        "Contact": "James Sagmiller",
        "Phone": "406.676.4100",
        "Fax": "406.676.4101",
        "Email": "westland@ronan.net",
        "Website": "http://www.westlandseed.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Seeds",
        "Latitude": "47.530131",
        "Longitude": "-114.118509",
        "Street": "Round Butte Rd",
        "County": "Lake County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -114.118509,
          47.530131
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Weston Gardens in Bloom Inc",
        "Address": "8101 Anglin Dr, Fort Worth, TX, 76140",
        "City": "Fort Worth",
        "State": "TX",
        "Zip Code": "76140",
        "Country": "USA",
        "Contact": "Weston",
        "Phone": "817.572.0549",
        "Fax": "817.478.7220",
        "Email": "weston@westongardens.com",
        "Website": "http://www.westongardens.com",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants\nSeeds",
        "Latitude": "32.635993",
        "Longitude": "-97.251441",
        "Street": "Anglin Dr",
        "County": "Tarrant County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.251441,
          32.635993
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Westscape Wholesale Nursery",
        "Address": "110 Progressive Dr, Belgrade, MT, 59174",
        "City": "Belgrade",
        "State": "MT",
        "Zip Code": "59174",
        "Country": "USA",
        "Contact": "Laura Smith or Robert Dunn",
        "Phone": "406.388.1116",
        "Fax": "406.388.1116",
        "Email": "westscapenursery@yahoo.com",
        "Website": "http://www.westscapenursery.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "45.777419",
        "Longitude": "-111.115529",
        "Street": "Progressive Dr",
        "County": "Gallatin County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -111.115529,
          45.777419
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Wetland Plants Inc",
        "Address": "812 Drummonds Point Rd, Edenton, NC, 27932",
        "City": "Edenton",
        "State": "NC",
        "Zip Code": "27932",
        "Country": "USA",
        "Contact": "Ellen J Colodney MD",
        "Phone": "252.482.5707",
        "Fax": "252.482.4987",
        "Email": "tteam@wetlandplantsinc.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "36.058606",
        "Longitude": "-76.46104",
        "Street": "Drummond's Point Rd",
        "County": "Chowan County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.46104,
          36.058606
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Wetland Supply Company | Native Plant Nursery",
        "Address": "194 Goodview Dr, Apollo, PA, 15613",
        "City": "Apollo",
        "State": "PA",
        "Zip Code": "15613",
        "Country": "USA",
        "Contact": "Dave Hails",
        "Phone": "724.727.3772",
        "Fax": "724.727.3778",
        "Email": "wetplants@aol.com",
        "Website": "http://wetlandsupply.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants\nSeeds",
        "Latitude": "40.555182",
        "Longitude": "-79.586525",
        "Street": "Goodview Dr",
        "County": "Westmoreland County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.586525,
          40.555182
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Wetlands & Woodlands Wholesale Nursery",
        "Address": "12800 35th Ave SE, Everett, WA, 98208",
        "City": "Everett",
        "State": "WA",
        "Zip Code": "98208",
        "Country": "USA",
        "Contact": "Al",
        "Phone": "425.338.9218",
        "Fax": "425.337.4985",
        "Email": "ellasmith@wetlandsandwoodlands.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "47.88151",
        "Longitude": "-122.185501",
        "Street": "35th Ave SE",
        "County": "Snohomish County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.185501,
          47.88151
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Wetlands Nursery",
        "Address": "13428 Caberfae Hwy, Wellston, MI, 49689",
        "City": "Wellston",
        "State": "MI",
        "Zip Code": "49689",
        "Country": "USA",
        "Contact": "Jewel Richardson",
        "Phone": "231.848.4202",
        "Fax": "231.848.4207",
        "Email": "jewel.richardson@att.net",
        "Website": "http://www.baileynurseries.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "44.230293",
        "Longitude": "-86.034531",
        "Street": "Caberfae Hwy",
        "County": "Manistee County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.034531,
          44.230293
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Weyerhaeuser Company - Aurora Forest Nursery",
        "Address": "6051 S Lone Elder Rd, Aurora, OR, 97001",
        "City": "Aurora",
        "State": "OR",
        "Zip Code": "97001",
        "Country": "USA",
        "Contact": "Mark Triebwasser",
        "Phone": "503.266.2018",
        "Phone 2": "800.732.4769",
        "Fax": "503.266.2010",
        "Email": "mark.triebwasser@weyerhaeuser.com",
        "Website": "http://www.weyerhaeuser.com/Businesses/WesternSeedlingSales",
        "Nursery Type": "Forest Industry",
        "Business Type": "Wholesale\nRetail\nContract",
        "Product": "Plants",
        "Latitude": "45.23429",
        "Longitude": "-122.745571",
        "Street": "S Lone Elder Rd",
        "County": "Clackamas County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.745571,
          45.23429
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Weyerhaeuser Company - Magnolia Nursery",
        "Address": "2960 Columbia Rd 11 E, Magnolia, AR, 71753",
        "City": "Magnolia",
        "State": "AR",
        "Zip Code": "71753",
        "Country": "USA",
        "Contact": "Kevin Richardson",
        "Phone": "870.234.3537",
        "Fax": "501.234.7918",
        "Nursery Type": "Forest Industry",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "33.216099",
        "Longitude": "-93.143962",
        "Street": "Columbia Rd 11 E",
        "County": "Columbia County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -93.143962,
          33.216099
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Weyerhaeuser Company - Quail Ridge Nursery",
        "Address": "169 Weyerhaeuser Rd, Aiken, SC, 29801",
        "City": "Aiken",
        "State": "SC",
        "Zip Code": "29801",
        "Country": "USA",
        "Contact": "Bruce Francis",
        "Phone": "800.634.8975",
        "Fax": "803.649.0997",
        "Nursery Type": "Forest Industry",
        "Product": "Plants",
        "Latitude": "33.537998",
        "Longitude": "-81.554495",
        "Street": "Weyerhaeuser Rd",
        "County": "Aiken County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.554495,
          33.537998
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Weyerhaeuser Company - Rochester Greenhouse",
        "Address": "7935 Hwy 12 SW, Rochester, WA, 98579-9214",
        "City": "Rochester",
        "State": "WA",
        "Zip Code": "98579-9214",
        "Country": "USA",
        "Contact": "Mike Pfaff",
        "Phone": "360.273.5527",
        "Fax": "360.273.6048",
        "Email": "mike.pfaff@weyerhaeuser.com",
        "Website": "http://www.weyerhaeuser.com/Businesses/WesternSeedlingSales",
        "Nursery Type": "Forest Industry",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "46.805751",
        "Longitude": "-123.054245",
        "Street": "US Highway 12 SW",
        "County": "Thurston County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.054245,
          46.805751
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Weyerhaeuser Company - Turner Nursery",
        "Address": "16014 Pletzer Rd SE, Turner, OR, 97392",
        "City": "Turner",
        "State": "OR",
        "Zip Code": "97392",
        "Country": "USA",
        "Contact": "Sue Woodall",
        "Phone": "800.732.4769",
        "Phone 2": "541.327.2212",
        "Fax": "541.327.2591",
        "Email": "sue.woodall@weyerhaeuser.com",
        "Website": "http://www.weyerhaeuser.com/Businesses/WesternSeedlingSales",
        "Nursery Type": "Forest Industry",
        "Business Type": "Retail\nContract",
        "Product": "Plants",
        "Latitude": "44.721252",
        "Longitude": "-122.938064",
        "Street": "Pletzer Rd SE",
        "County": "Marion County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.938064,
          44.721252
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Weyerhaeuser Mima Forest Nursery",
        "Address": "8844 Gate Rd SW, Olympia, WA, 98512",
        "City": "Olympia",
        "State": "WA",
        "Zip Code": "98512",
        "Country": "USA",
        "Phone": "360.273.5578",
        "Phone 2": "800.732.4769",
        "Website": "http://www.weyerhaeuser.com/Businesses/WesternSeedlingSales",
        "Nursery Type": "Forest Industry",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "46.871094",
        "Longitude": "-123.069128",
        "Street": "Gate Rd SW",
        "County": "Thurston County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.069128,
          46.871094
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Weyerhaeuser Nursery",
        "Address": "3890 Hwy 28 W, Camden, AL, 36726",
        "City": "Camden",
        "State": "AL",
        "Zip Code": "36726",
        "Country": "USA",
        "Contact": "Kimmie Van Wyck",
        "Phone": "800.635.0162",
        "Fax": "251.634.4481",
        "Email": "Kimmie.vanwyke@weyerhaeuser.com",
        "Website": "http://www.weyerhaeuser.com",
        "Nursery Type": "Forest Industry",
        "Product": "Plants",
        "Latitude": "31.989341",
        "Longitude": "-87.151832",
        "Street": "State Rte 28",
        "County": "Wilcox County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.151832,
          31.989341
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Wheatland Trees Ltd",
        "Address": "11800 40th St SE, Calgary, AB, T2Z 4T1",
        "City": "Calgary",
        "State": "AB",
        "Zip Code": "T2Z 4T1",
        "Country": "Canada",
        "Contact": "Phil Paxton",
        "Phone": "403.248.3559",
        "Fax": "403.236.3645",
        "Email": "info@wheatlandtrees.ca",
        "Email 2": "sales@wheatlandtrees.ca",
        "Website": "http://www.wheatlandtrees.ca/",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "0",
        "Longitude": "0"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          0,
          0
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Wheatley Woods Native Plant Nursery and Garden Centre",
        "Address": "2448 Essex Rd 14, Wheatley, ON, N0P 2P0",
        "City": "Wheatley",
        "State": "ON",
        "Zip Code": "N0P 2P0",
        "Country": "Canada",
        "Contact": "Craig Willett",
        "Phone": "519.825.4217",
        "Fax": "519.825.7239",
        "Email": "sales@wheatley-woods.com",
        "Website": "http://www.wheatleywoods.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Seeds",
        "Latitude": "0",
        "Longitude": "0"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          0,
          0
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "White City Nursery",
        "Address": "707 CR 20 W, Verbena, AL, 36091",
        "City": "Verbena",
        "State": "AL",
        "Zip Code": "36091",
        "Country": "USA",
        "Contact": "Louis Olivier",
        "Phone": "334.365.2488",
        "Fax": "334.365.3403",
        "Email": "wcnursery@bellsouth.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "32.659387",
        "Longitude": "-86.553879",
        "Street": "County Rd 20 W",
        "County": "Autauga County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.553879,
          32.659387
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "White Flower Farms",
        "Address": "167 Litchfield Rd, Morris, CT, 06763",
        "City": "Morris",
        "State": "CT",
        "Zip Code": "06763",
        "Country": "USA",
        "Phone": "800.503.9624",
        "Phone 2": "860.482.3638",
        "Fax": "860.496.1418",
        "Email": "custserv@whiteflowerfarm.com",
        "Email 2": "store@whiteflowerfarm.com",
        "Website": "http://www.whiteflowerfarm.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "41.697132",
        "Longitude": "-73.184257",
        "Street": "Litchfield Rd",
        "County": "Northwest Hills Planning Region"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.184257,
          41.697132
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Whitman Farms",
        "Address": "3995 Gibson Rd NW, Salem, OR, 97304",
        "City": "Salem",
        "State": "OR",
        "Zip Code": "97304",
        "Country": "USA",
        "Contact": "Lucile Whitman",
        "Phone": "503.585.8728",
        "Fax": "503.363.5020",
        "Email": "lucile@whitmanfarms.com",
        "Website": "http://www.whitmanfarms.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail",
        "Product": "Plants",
        "Established": "1980",
        "Hours": "38902.0",
        "Latitude": "44.986501",
        "Longitude": "-123.110198",
        "Street": "Gibson Rd NW",
        "County": "Polk County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.110198,
          44.986501
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Wichita Valley Nursery",
        "Address": "TX, 76310",
        "State": "TX",
        "Zip Code": "76310",
        "Country": "USA",
        "Phone": "940.696.3082",
        "Email": "wvmail@aol.com",
        "Nursery Type": "Private",
        "Business Type": "Retail\nResearch",
        "Product": "Plants\nSeeds\nServices",
        "Latitude": "33.87121",
        "Longitude": "-98.576573",
        "County": "Wichita County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -98.576573,
          33.87121
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Wicklein's Water Gardens and Native Plants",
        "Address": "1820 Cromwell Bridge Rd, Baltimore, MD, 21234",
        "City": "Baltimore",
        "State": "MD",
        "Zip Code": "21234",
        "Country": "USA",
        "Contact": "Erik Wicklein",
        "Phone": "410.823.1335",
        "Fax": "410.823.1427",
        "Email": "ewicklein@verizon.net",
        "Email 2": "sales@wickleinaquatics.com",
        "Website": "http://www.wickleinaquatics.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Established": "1954",
        "Hours": "M-Sat, please call",
        "Latitude": "39.407254",
        "Longitude": "-76.556692",
        "Street": "Cromwell Bridge Rd",
        "County": "Baltimore County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.556692,
          39.407254
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Wilcox Nursery and Landscape",
        "Address": "12501 Indian Rocks Rd, Largo, FL, 33774-3037",
        "City": "Largo",
        "State": "FL",
        "Zip Code": "33774-3037",
        "Country": "USA",
        "Contact": "Davis Byrkit",
        "Phone": "727.595.2073",
        "Email": "nativeplants@WilcoxNursery.com",
        "Email 2": "infogreen@wilcoxnursery.com",
        "Website": "http://www.wilcoxnursery.com",
        "Nursery Type": "Private",
        "Business Type": "Retail\nInternet",
        "Product": "Plants\nSeeds\nServices",
        "Hours": "9 to 5 Monday thru Saturday and 9 to 4 Sundays",
        "Latitude": "27.886711",
        "Longitude": "-82.832131",
        "Street": "Indian Rocks Rd",
        "County": "Pinellas County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.832131,
          27.886711
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "WildLands Nursery",
        "Address": "1941 Saint St, Richland, WA, 99354",
        "City": "Richland",
        "State": "WA",
        "Zip Code": "99354",
        "Country": "USA",
        "Contact": "Ryan Watts",
        "Phone": "509.588.4328",
        "Phone 2": "509.375.4177",
        "Fax": "509.375.4717",
        "Email": "info@wildlandsnursery.com",
        "Website": "http://www.wildlandsnursery.com/nursery",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nContract",
        "Product": "Plants",
        "Established": "2000",
        "Hours": "M-F by appointment only",
        "Latitude": "46.310939",
        "Longitude": "-119.28679",
        "Street": "St St",
        "County": "Benton County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.28679,
          46.310939
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Wildflower Farm Inc",
        "Address": "10195 Hwy 12 W RR 2, Coldwater, ON, L0K 1E0",
        "City": "Coldwater",
        "State": "ON",
        "Zip Code": "L0K 1E0",
        "Country": "Canada",
        "Contact": "Paul Jenkins or Miriam",
        "Phone": "866.476.9453",
        "Email": "info@wildflowerfarm.com",
        "Website": "http://www.wildflowerfarm.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants\nSeeds",
        "Established": "1988",
        "Hours": "38964.0",
        "Latitude": "41.90084",
        "Longitude": "-85.117162",
        "Street": "US Hwy 12",
        "County": "Branch County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.117162,
          41.90084
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Wildflower Nursery",
        "Address": "4920 US 25, Marshall, NC, 28753",
        "City": "Marshall",
        "State": "NC",
        "Zip Code": "28753",
        "Country": "USA",
        "Contact": "Dewey or Maggie Griffey",
        "Phone": "828.656.2723",
        "Fax": "828.656.2723",
        "Email": "info@wildflowernursery.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail",
        "Product": "Plants",
        "Latitude": "35.846199",
        "Longitude": "-82.730214",
        "Street": "US Hwy 25",
        "County": "Madison County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.730214,
          35.846199
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Wildlife Habitat Nursery",
        "Address": "1025 E Hatter Creek Rd, Princeton, ID, 83857",
        "City": "Princeton",
        "State": "ID",
        "Zip Code": "83857",
        "Country": "USA",
        "Contact": "Denny Dawes",
        "Phone": "208.875.2500",
        "Fax": "208.875.8900",
        "Email": "wild@potlatch.com",
        "Website": "www.whn-online.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "46.860011",
        "Longitude": "-116.819686",
        "Street": "E Hatter Creek Rd",
        "County": "Latah County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -116.819686,
          46.860011
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Wildlife Nurseries Inc",
        "Address": "PO Box 2724, Oshkosh, WI, 54902",
        "City": "Oshkosh",
        "State": "WI",
        "Zip Code": "54902",
        "Country": "USA",
        "Contact": "Jim or Sue Lemberger",
        "Phone": "920.231.3780",
        "Fax": "920.231.3554",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail",
        "Product": "Plants\nSeeds",
        "Latitude": "43.99461",
        "Longitude": "-88.526025",
        "County": "Winnebago County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.526025,
          43.99461
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Wildtype Design Native Plants & Seed Ltd",
        "Address": "900 N Every Rd, Mason, MI, 48854",
        "City": "Mason",
        "State": "MI",
        "Zip Code": "48854",
        "Country": "USA",
        "Contact": "Bill Schneider",
        "Phone": "517.244.1140",
        "Fax": "517.244.1142",
        "Email": "wildtype@msu.edu",
        "Website": "http://www.wildtypeplants.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nContract",
        "Product": "Plants\nSeeds",
        "Latitude": "42.608024",
        "Longitude": "-84.382426",
        "Street": "N Every Rd",
        "County": "Ingham County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.382426,
          42.608024
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Willamette Gardens",
        "Address": "3290 SW Willamette Ave, Corvallis, OR, 97333",
        "City": "Corvallis",
        "State": "OR",
        "Zip Code": "97333",
        "Country": "USA",
        "Contact": "Esther Gruber McEvoy",
        "Phone": "541.990.0948",
        "Fax": "541.754.9326",
        "Email": "natives@willamettegardens.com",
        "Website": "http://www.willamettegardens.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nContract",
        "Product": "Plants",
        "Latitude": "44.546493",
        "Longitude": "-123.285765",
        "Street": "SW Willamette Ave",
        "County": "Benton County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.285765,
          44.546493
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Willamette Wildlings Native Plant Nursery",
        "Address": "80692 Turkey Run Rd, Creswell, OR, 97426",
        "City": "Creswell",
        "State": "OR",
        "Zip Code": "97426",
        "Country": "USA",
        "Contact": "Shari Cappo-Fisher",
        "Phone": "541.767.9142",
        "Email": "natives@willamettewildlings.com",
        "Website": "https://willamettewildlings.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail",
        "Product": "Plants\nSeeds",
        "Latitude": "43.852875",
        "Longitude": "-123.081053",
        "Street": "Turkey Run Rd",
        "County": "Lane County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.081053,
          43.852875
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Wilson Greenery",
        "Address": "1310 Polkville Rd, Shelby, NC, 28150",
        "City": "Shelby",
        "State": "NC",
        "Zip Code": "28150",
        "Country": "USA",
        "Contact": "Beverly",
        "Phone": "704.484.2709",
        "Fax": "704.482.6870",
        "Email": "knoxw@vnet.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "35.327244",
        "Longitude": "-81.567674",
        "Street": "Polkville Rd",
        "County": "Cleveland County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.567674,
          35.327244
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Wilson Seed Farms",
        "Address": "10872 1400 East St, Tiskilwa, IL, 61368",
        "City": "Tiskilwa",
        "State": "IL",
        "Zip Code": "61368",
        "Country": "USA",
        "Contact": "Chris Wilson",
        "Phone": "815.878.8572",
        "Email": "cwilson5@hotmail.com",
        "Business Type": "Retail",
        "Product": "Seeds",
        "Latitude": "41.248455",
        "Longitude": "-89.521465",
        "County": "Bureau County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.521465,
          41.248455
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Wind River Seed",
        "Address": "3075 County Ln 51 1/2, Manderson, WY, 82432",
        "City": "Manderson",
        "State": "WY",
        "Zip Code": "82432",
        "Country": "USA",
        "Contact": "Russ Holzhauser",
        "Phone": "307.568.3361",
        "Email": "russ@windriverseed.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Seeds",
        "Latitude": "44.24827",
        "Longitude": "-107.974168",
        "Street": "Ln 51 1/2",
        "County": "Big Horn County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -107.974168,
          44.24827
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Windy Hill Plant Farm",
        "Address": "40413 John Mosby Hwy, Aldie, VA, 20105",
        "City": "Aldie",
        "State": "VA",
        "Zip Code": "20105",
        "Country": "USA",
        "Contact": "Karen",
        "Phone": "703.327.4211",
        "Fax": "703.327.4221",
        "Email": "windyhill@windyhill.net",
        "Nursery Type": "Private",
        "Product": "Plants",
        "Latitude": "38.962396",
        "Longitude": "-77.604809",
        "Street": "John Mosby Hwy",
        "County": "Loudoun County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.604809,
          38.962396
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Windy Ridge Tree Farm & Wholesale Nursery",
        "Address": "PO Box 340, Amboy, WA, 98601",
        "City": "Amboy",
        "State": "WA",
        "Zip Code": "98601",
        "Country": "USA",
        "Contact": "Robert Kramer",
        "Phone": "360.247.TREE",
        "Email": "fastgrowingtrees@yahoo.com",
        "Email 2": "info@windyridgetreefarm.com",
        "Website": "http://www.windyridgetreefarm.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "45.923556",
        "Longitude": "-122.450194",
        "County": "Clark County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.450194,
          45.923556
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Winter Garden Nursery",
        "Address": "6840 Farm to Market 1436, LaPryor, TX, 78872",
        "City": "LaPryor",
        "State": "TX",
        "Zip Code": "78872",
        "Country": "USA",
        "Phone": "830.279.2759",
        "Email": "info@wintergardennursery.com",
        "Website": "http://wintergardennursery.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "29.008032",
        "Longitude": "-99.843804",
        "Street": "Farm To Market Rd 1436",
        "County": "Zavala County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -99.843804,
          29.008032
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "WinterCreek Restoration",
        "Address": "63405 Deschutes Market Rd, Bend, OR, 97701",
        "City": "Bend",
        "State": "OR",
        "Zip Code": "97701",
        "Country": "USA",
        "Contact": "Karen Theodore",
        "Phone": "541.948.0063",
        "Phone 2": "541.382.1227",
        "Fax": "541.382.1227",
        "Email": "karen@wintercreeknursery.com",
        "Website": "http://www.wintercreeknative.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Established": "1993",
        "Hours": "M-F 8-4 weekends by appt",
        "Latitude": "44.102233",
        "Longitude": "-121.260332",
        "Street": "Deschutes Market Rd",
        "County": "Deschutes County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.260332,
          44.102233
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Winterhaven Wildflowers & Native Plant Preserve",
        "Address": "5724 S 900 W, West Point, IN, 47992",
        "City": "West Point",
        "State": "IN",
        "Zip Code": "47992",
        "Country": "USA",
        "Phone": "765.714.4288",
        "Fax": "765.572.1132",
        "Email": "reni@winterhavenfarm.us",
        "Email 2": "wildflowers@winterhavenfarm.us",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "40.333192",
        "Longitude": "-87.075538",
        "Street": "S 900 W",
        "County": "Tippecanoe County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.075538,
          40.333192
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Wisconsin Dept of Natural Resources - Griffith State Forest Nursery",
        "Address": "473 Griffith Ave, Wisconsin Rapids, WI, 54494",
        "City": "Wisconsin Rapids",
        "State": "WI",
        "Zip Code": "54494",
        "Country": "USA",
        "Contact": "Carey Skerven",
        "Phone": "715.424.3700",
        "Fax": "715.421.7830",
        "Email": "carey.skerven@wisconsin.gov",
        "Website": "http://dnr.wi.gov/topic/TreePlanting/",
        "Nursery Type": "State",
        "Product": "Plants",
        "Latitude": "44.352496",
        "Longitude": "-89.823237",
        "Street": "Griffith Ave",
        "County": "Wood County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.823237,
          44.352496
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Wisconsin Dept of Natural Resources - Hayward State Forest Nursery",
        "Address": "16133 W Nursery Rd, Hayward, WI, 54843",
        "City": "Hayward",
        "State": "WI",
        "Zip Code": "54843",
        "Country": "USA",
        "Contact": "Ray Aguilera",
        "Phone": "715.492.1204",
        "Fax": "715.634.7642",
        "Email": "domingo.aguilera@wisconsin.gov",
        "Website": "http://dnr.wi.gov/topic/TreePlanting/",
        "Nursery Type": "State",
        "Product": "Plants\nSeeds",
        "Latitude": "45.999414",
        "Longitude": "-91.499278",
        "Street": "W Nursery Rd",
        "County": "Sawyer County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -91.499278,
          45.999414
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Wisconsin Dept of Natural Resources - Wilson State Forest Nursery",
        "Address": "5350 Hwy 133 E, Boscobel, WI, 53805",
        "City": "Boscobel",
        "State": "WI",
        "Zip Code": "53805",
        "Country": "USA",
        "Contact": "Joe Vande Hey",
        "Phone": "608.375.4123",
        "Fax": "608.375.4126",
        "Email": "joseph.vandehey@wisconsin.gov",
        "Website": "http://dnr.wi.gov/topic/TreePlanting/",
        "Nursery Type": "State",
        "Business Type": "Retail",
        "Product": "Plants\nSeeds",
        "Latitude": "43.144182",
        "Longitude": "-90.691005",
        "Street": "State Hwy 133",
        "County": "Grant County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.691005,
          43.144182
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Witt’s End Homestead LLC",
        "Address": "1225 CR U, Lincoln, NE, 68464",
        "City": "Lincoln",
        "State": "NE",
        "Zip Code": "68464",
        "Country": "USA",
        "Contact": "Kay Kottas",
        "Phone": "402.310.8167",
        "Email": "info@prairielegacyinc.com",
        "Website": "http://prairielegacyinc.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nInternet\nContract",
        "Product": "Plants",
        "Latitude": "40.404209",
        "Longitude": "-97.155402",
        "Street": "County Rd U",
        "County": "Saline County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.155402,
          40.404209
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Womack Nursery Company",
        "Address": "2551 Texas 6, DeLeon, TX, 76444",
        "City": "DeLeon",
        "State": "TX",
        "Zip Code": "76444",
        "Country": "USA",
        "Contact": "Larry J Womack or Larry Don Womack",
        "Phone": "254.893.6497",
        "Fax": "254.893.3400",
        "Website": "http://www.womacknursery.com",
        "Nursery Type": "Private",
        "Business Type": "Retail\nMail",
        "Product": "Plants",
        "Latitude": "32.161785",
        "Longitude": "-98.597813",
        "Street": "Highway 6",
        "County": "Comanche County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -98.597813,
          32.161785
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Woodlanders Inc",
        "Address": "1128 Colleton Ave, Aiken, SC, 29801",
        "City": "Aiken",
        "State": "SC",
        "Zip Code": "29801",
        "Country": "USA",
        "Contact": "Robert McCartney",
        "Phone": "803.648.7522",
        "Fax": "803.648.7522",
        "Email": "info@woodlanders.net",
        "Website": "http://www.woodlanders.net/",
        "Nursery Type": "Private",
        "Business Type": "Mail\nInternet",
        "Product": "Plants",
        "Latitude": "33.552052",
        "Longitude": "-81.706248",
        "Street": "Colleton Ave SE",
        "County": "Aiken County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.706248,
          33.552052
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Woodmere Nursery Ltd",
        "Address": "100th Ave (Hwy 2) at 100th St (Range Rd 32), Fairview, AB, T0H 1L0",
        "City": "Fairview",
        "State": "AB",
        "Zip Code": "T0H 1L0",
        "Country": "Canada",
        "Contact": "Jeff Hoyem",
        "Phone": "780.835.5292",
        "Email": "Woodmere.Nursery@wispernet.ca",
        "Website": "http://www.woodmere.ca/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "40.817537",
        "Longitude": "-74.000883",
        "County": "Bergen County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.000883,
          40.817537
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Woods' Edge Farm",
        "Address": "532 Stanek Rd, Muscoda, WI, 53573-9448",
        "City": "Muscoda",
        "State": "WI",
        "Zip Code": "53573-9448",
        "Country": "USA",
        "Contact": "Martha Peterson",
        "Phone": "608.739.3527",
        "Email": "info@woodsedgefarm.com",
        "Email 2": "woodedge@mwt.net",
        "Website": "http://www.woodsedgefarm.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail\nMail",
        "Product": "Plants",
        "Established": "1994",
        "Hours": "M-F 9-5",
        "Latitude": "43.116899",
        "Longitude": "-90.447551",
        "Street": "Stanek Rd",
        "County": "Grant County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.447551,
          43.116899
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Woody Warehouse Nursery Inc",
        "Address": "3339 West CR 850 N , Lizton, IN, 46149",
        "City": "Lizton",
        "State": "IN",
        "Zip Code": "46149",
        "Country": "USA",
        "Contact": "Pete Berg",
        "Phone": "317.994.5487",
        "Email": "sales@woodywarehouse.com",
        "Email 2": "peterberg@woodywarehouse.com",
        "Website": "http://www.woodywarehouse.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nContract",
        "Product": "Plants",
        "Established": "2002",
        "Hours": "By appointment only",
        "Latitude": "39.886113",
        "Longitude": "-86.582474",
        "Street": "W 850 N",
        "County": "Hendricks County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.582474,
          39.886113
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Wright Nursery Ltd",
        "Address": "44008 TWP Rd 37-4, Clearwater County, AB, T0M 1W0",
        "City": "Clearwater County",
        "State": "AB",
        "Zip Code": "T0M 1W0",
        "Country": "Canada",
        "Contact": "Ken Wright",
        "Phone": "403.312.8018",
        "Fax": "403.242.8018",
        "Email": "bowpoint@telus.net",
        "Email 2": "info@bowpointnursery.com",
        "Website": "http://wrightnursery.ca/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "47.300034",
        "Longitude": "-95.4039",
        "Street": "Twp Rd",
        "County": "Clearwater County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.4039,
          47.300034
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Wrights Nursery",
        "Address": "6040 FM 2657, Briggs, TX, 78608",
        "City": "Briggs",
        "State": "TX",
        "Zip Code": "78608",
        "Country": "USA",
        "Phone": "512.489.2239",
        "Fax": "512.489.2837",
        "Email": "blwrightx2@gmail.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nRetail",
        "Product": "Plants",
        "Latitude": "30.94662",
        "Longitude": "-97.897417",
        "Street": "Farm To Market Rd 2657",
        "County": "Burnet County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -97.897417,
          30.94662
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Yankee Gardener Greenhouses and Nursery",
        "Address": "132 Smutty Hollow Rd, Monroe, NH, 03771",
        "City": "Monroe",
        "State": "NH",
        "Zip Code": "03771",
        "Country": "USA",
        "Contact": "Terry Ward",
        "Phone": "603.638.2809",
        "Fax": "603.638.2809",
        "Email": "yankyggh@fcgnetworks.net",
        "Nursery Type": "Private",
        "Business Type": "Wholesale\nMail",
        "Product": "Plants",
        "Latitude": "44.3063",
        "Longitude": "-71.993922",
        "Street": "Smutty Hollow Rd",
        "County": "Grafton County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.993922,
          44.3063
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Yellowpoint Propagation Ltd",
        "Address": "13735 Quennell Rd, Ladysmith, BC, V9G 1A5",
        "City": "Ladysmith",
        "State": "BC",
        "Zip Code": "V9G 1A5",
        "Country": "Canada",
        "Contact": "Don Pigott",
        "Phone": "250.245.4635",
        "Fax": "250.245.5935",
        "Email": "ypprop@shaw.ca",
        "Website": "http://www.yellowpointpropagation.com/",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Seeds",
        "Latitude": "0",
        "Longitude": "0"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          0,
          0
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Yerba Buena Nursery",
        "Address": "12511 San Mateo Rd Hwy 92, Half Moon Bay, CA, 94019",
        "City": "Half Moon Bay",
        "State": "CA",
        "Zip Code": "94019",
        "Country": "USA",
        "Contact": "Kathy Crane",
        "Phone": "650.851.1668",
        "Fax": "650.851.5565",
        "Website": "http://www.yerbabuenanursery.com",
        "Nursery Type": "Private",
        "Business Type": "Retail",
        "Product": "Plants",
        "Latitude": "37.477691",
        "Longitude": "-122.411413",
        "Street": "San Mateo Rd",
        "County": "San Mateo County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.411413,
          37.477691
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NurseryName": "Zelenka Evergreen Nursery",
        "Address": "16127 Winans St, Grand Haven, MI, 49417",
        "City": "Grand Haven",
        "State": "MI",
        "Zip Code": "49417",
        "Country": "USA",
        "Contact": "Todd Bustard",
        "Phone": "616.842.1367",
        "Phone 2": "800.253.3743",
        "Fax": "616.842.0304",
        "Email": "informatin@zelenkanursery.com",
        "Email 2": "information@zelenkanursery.com",
        "Nursery Type": "Private",
        "Business Type": "Wholesale",
        "Product": "Plants",
        "Latitude": "42.966513",
        "Longitude": "-86.190065",
        "Street": "Winans St",
        "County": "Ottawa County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.190065,
          42.966513
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Address": "2500 East Hallandale Beach Blvd  Suite 702, Hallandale Beach, FL, 33009",
        "City": "Hallandale Beach",
        "State": "FL",
        "Zip Code": "33009",
        "Country": "USA",
        "Contact": "Gregg L. Friedman",
        "Phone": "954.456.1996",
        "Email": "juliefrdmn@aol.com",
        "Nursery Type": "Private",
        "Product": "Seeds",
        "Latitude": "25.985674",
        "Longitude": "-80.124291",
        "Street": "E Hallandale Beach Blvd",
        "County": "Broward County"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.124291,
          25.985674
        ]
      }
    }
  ]
};

console.log(geojson);

let nearestPoints = [];

var marker;

let output = "";

var targetPoint = turf.point([-77.171091, 38.882334]);

function fetchPoints(myLocation) {

    nearestPoints = [];
    output = [];

    for (var i = 0; i < 7; i++) {

        var nearest = turf.nearestPoint(myLocation, geojson);

        console.log(nearest);

        nearestPoints.push(nearest);

        console.log(nearest.properties.featureIndex);

        console.log(geojson.features[nearest.properties.featureIndex]);
        geojson.features.splice(nearest.properties.featureIndex, 1);
        console.log(geojson.features[nearest.properties.featureIndex]);

        output = output + `<h3>${nearest.properties.NurseryName}</h3>`;

        if (nearest.properties.Website) {
          output = output + `<p><a href="${nearest.properties.Website}">${nearest.properties.Website}</a></p>`
        }
        
        output = output + `<p>${nearest.properties.Address}</p>`

        if (nearest.properties.Phone) {
          output = output + `<span>${nearest.properties.Phone}</span>, `
        }

        if (nearest.properties.Email) {
          output = output + `<span>${nearest.properties.Email}</span>`
        }

        if (i < 6) {
          output = output + `<br><br>`
        }
    }

    console.log(nearestPoints);

    console.log(output);
    
    document.getElementById('nurseries').innerHTML = output;

    for (var i = 0; i < 7; i++) {

    geojson.features.push(nearestPoints[i]);
    }
}

function geolocate() {

fetch('https://api.ipregistry.co/?key=wq683y14x6jcrm38')
.then(response => {
  return response.json();
})
.then(response => {
  console.log(response);

  // document.getElementById('zipCode').value = response.location.postal;
  // document.getElementById('postal').innerText = response.location.postal;

  var myLocation = turf.point([response.location.longitude, response.location.latitude]);

  var map = L.map('map').setView([response.location.latitude, response.location.longitude], 7);

  marker = L.marker([response.location.latitude, response.location.longitude]).addTo(map);



  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var popup = L.popup();

function onMapClick(e) {
    marker
        .setLatLng(e.latlng)
}

map.on('click', onMapClick);


  fetchPoints(myLocation);
})
}

function updateLocation() {

  let position = marker.getLatLng();

  console.log(position);

  var myLocation = turf.point([position.lng, position.lat]);

  fetchPoints(myLocation);
}
</script>

<body onload="geolocate()" style="margin-top: 0px;">

  <TopMatter title={title} description={description} og_image={og_image} full_url={full_url} local_url={local_url} domain={domain}></TopMatter>
  <article class="h-entry">

    <img src="/native-cover.jpg" style="max-width: 100%" loading="lazy">
  
    <h1 class="p-name"><a class="u-url" href={local_url}>{title}</a></h1>

  <!-- <em>Showing results for <span id="postal"></span></em><br> -->
  <!-- <input id="zipCode">
<button onclick="updateZipCode()">Update ZIP Code</button> -->
<p><em>Browse the nurseries below to find a plant near you, or update your location.</em></p>
<div id="map"></div>
<br>
<button type="button" onclick="updateLocation()" style="margin: auto; display: block; font-size: 18px;">Update location</button>
<br>
<span class="text-gray-500 text-sm" style="width: max-content; font-size: 14px; color: gray; text-align: center; display: block; margin: auto;">Subscribe for tools and content like this
  <svg xmlns="http://www.w3.org/2000/svg" style="vertical-align: bottom;" class="icon icon-tabler icon-tabler-mail" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h44v24H0z" fill="none"/>
  <rect x="3" y="5" width="18" height="14" rx="2" />
  <polyline points="3 7 12 13 21 7" />
</svg></span>
    <PlainSubscribe></PlainSubscribe>
    <br>
<div id="nurseries">

</div>

</article>
</body>
<style>
  #map { height: 300px; }
</style>
</html>