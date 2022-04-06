// 39.8283° N, 98.5795° W - Center of US
const map = L.map('map').setView([39.8283, -98.5795], 4);

const myAPIKey = '2a9781ea447940f085ee5b79f8ba5d50';

// Retina displays require different mat tiles quality
const isRetina = L.Browser.retina;

const baseUrl = 'https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey={apiKey}';
const retinaUrl = 'https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}@2x.png?apiKey={apiKey}';

// Add map tiles layer. Set 20 as the maximal zoom and provide map data attribution.
L.tileLayer(isRetina ? retinaUrl : baseUrl, {
	attribution: 'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | © OpenStreetMap <a href="https://www.openstreetmap.org/copyright" target="_blank">contributors</a>',
	apiKey: myAPIKey,
	maxZoom: 20,
	id: 'osm-bright',
}).addTo(map);

//add a marker with icon generated by Geoapify Marker Icon API
const markerIcon = L.icon(
	{
		iconUrl: `https://api.geoapify.com/v1/icon?size=xx-large&type=awesome&color=%233e9cfe&icon=map-pin&apiKey=${myAPIKey}`,
		iconSize: [31, 46], // size of the icon
		iconAnchor: [15.5, 42], // point of the icon which will correspond to marker's location
		popupAnchor: [0, -45] // point from which the popup should open relative to the iconAnchor
});

async function addMarkersToMap() {
	let markers = await getMarker();

	for (let i in markers) {
		const newMarkerPopup = L.popup().setContent(markers[i].title);
		const newMarker = L.marker([markers[i].latitude, markers[i].longitude], {
			icon: markerIcon
		}).bindPopup(newMarkerPopup).addTo(map);
	}
}

const getDestination = () => {
	switch(true) {
		case document.URL.includes("dashboard"):
			return apiUrl = '/api/locations/user';
		case document.URL.includes("post"):
			const postId = window.location.toString().split('/')[
				window.location.toString().split('/').length - 1
			];
			return apiUrl = `/api/locations/${postId}`;
		default:
			return apiUrl = '/api/locations';
	}
}

async function getMarker() {
	let markerArray = new Array();
	let apiUrl = getDestination();

	const response = await fetch(`${apiUrl}`, {
		method: 'get'
	});

	if (!response.ok) {
			alert(response.statusText);
			console.log(response.statusText);
	} else {
		// console.log(response.json());
		const locationData = response.json();
		// console.log(locationData[1]);
		markerArray = locationData;
		// console.log(markerArray);
	};

	if (markerArray.length < 1) {
		let defaultMarker = {
			title: 'Center of US',
			lat: 39.8283,
			long: -98.5795
		};
		markerArray.push(defaultMarker);
	}
	return markerArray;
}

addMarkersToMap();
