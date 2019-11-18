// console.log("Hello World");

    const mapboxgl = require("mapbox-gl")
    const markings = require("./marker")

    mapboxgl.accessToken = "pk.eyJ1Ijoic2hlbGJ5Z2x1Y2siLCJhIjoiY2szNHBhajh0MTd2NDNoazM3YzFpaWZkdSJ9.J545bbd-t1i2qU15eBNc-g"

    const map = new mapboxgl.Map({
        container: "map",
        center: [-74.009, 40.705],
        zoom: 12,
        style: "mapbox://styles/mapbox/streets-v10"
    })

    markings.makeMarker('hotel', [-74.009151, 40.705086])

    module.exports = { map }

