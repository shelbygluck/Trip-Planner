const mapboxgl = require("mapbox-gl")
const map = require("./index")

module.exports = 
    // makeMarker:
     (type, coordinates) => {
        const marker = document.createElement("div");
        marker.style.width = "32px";
        marker.style.height = "39px";

        if (type === 'hotel') {
            marker.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
        } else if (type === 'restaurant') {
            marker.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
        } else if (type === 'activity') {
            marker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
        } else {
            throw new Error('Please enter valid marker type')
        }

        new mapboxgl.Marker(marker).setLngLat(coordinates).addTo(map)
    }
