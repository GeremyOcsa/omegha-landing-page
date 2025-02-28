import { useEffect } from "react";

function GoogleMap() {
  useEffect(() => {
    async function initMap() {
      const { Map } = await window.google.maps.importLibrary("maps");

      const map = new Map(document.getElementById("map"), {
        center: { lat: -7.6388124, lng: -73.2083984 },
        zoom: 5,
        disableDefaultUI: true,
      });
      new google.maps.Marker({
        position: { lat: -6.4958479, lng: -76.3649218 },
        map,
      });
      new google.maps.Marker({
        position: { lat: -12.1297514, lng: -77.0299217 },
        map,
      });
    }
    initMap();
  }, []);

  return <div id="map" style={{ width: "100%", height: "auto", borderRadius: "8px" }} />;
}

export default GoogleMap;
