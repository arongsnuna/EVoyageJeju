import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Container, MapContainer } from "./Map.style";
import SearchForm from "./SearchForm";
import Modal from "./Modal";

const { kakao } = window;

function Map({ searchPlace }) {
  const [chargerData, setChargerData] = useState([]); // 충전소 위치찾기
  const [searchQuery, setSearchQuery] = useState(""); // 검색창 만들기

  const mapRef = useRef(null); // Store map instance in ref
  const psRef = useRef(null);

  const serviceKey = process.env.REACT_APP_CHARGER_API_KEY;
  const URL = `https://open.jejudatahub.net/api/proxy/atDab6t8218btaa122b26DDtbatD86t1/${serviceKey}`;

  const searchCharger = async () => {
    try {
      const reqs = [];
      for (let page = 1; page <= 2; page++) {
        reqs.push(axios.get(`${URL}?limit=100&number=${page}`));
      }

      const res = await Promise.all(reqs);
      const resArr = [];
      for (const el of res) {
        resArr.push(...el.data.data);
      }
      setChargerData(resArr);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    searchCharger(); // Fetch charger data when component mounts or searchPlace changes
  }, [searchPlace]);

  useEffect(() => {
    if (chargerData.length > 0 && kakao && kakao.maps) {
      mapscript();
    }
  }, [chargerData]);

  const mapscript = () => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33.5104135, 126.4913534),
      level: 5,
    };

    const map = new kakao.maps.Map(container, options);
    mapRef.current = map;
    // Create places service and assign it to the ref
    psRef.current = new kakao.maps.services.Places();

    // Add zoom controls
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.BOTTOMRIGHT);

    const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

    chargerData.forEach((data) => {
      const markerPosition = new kakao.maps.LatLng(
        data.latitude,
        data.longitude
      );
      const marker = new kakao.maps.Marker({
        map: map,
        position: markerPosition,
        title: data.chargingPlace,
      });
      marker.setMap(map);

      // Add click event listener to show info window
      kakao.maps.event.addListener(marker, "click", function () {
        infowindow.setContent(data.chargingPlace);
        infowindow.open(map, marker);
      });
    });
  };

  const searchPlaces = (query) => {
    if (!query) {
      return;
    }
    psRef.current.keywordSearch(query, (results, status, pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        const firstResult = results[0];
        const coords = new kakao.maps.LatLng(firstResult.y, firstResult.x);

        mapRef.current.setCenter(coords);

        const marker = new kakao.maps.Marker({
          position: coords,
        });
        marker.setMap(mapRef.current);
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        alert("No search results found.");
        return;
      } else {
        alert("An error occurred during the search.");
        return;
      }
    });
  };

  const handleSearch = () => {
    // Perform search based on the searchQuery value
    console.log(searchQuery);
    searchPlaces(searchQuery);
  };

  const moveToCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const lat = position.coords.latitude,
            lon = position.coords.longitude;

          const locPosition = new kakao.maps.LatLng(lat, lon);
          mapRef.current.setCenter(locPosition);

          const marker = new kakao.maps.Marker({
            map: mapRef.current,
            position: locPosition,
          });
          marker.setMap(mapRef.current);
        },
        function (error) {
          console.log("Error occurred. Error code: " + error.code);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div>
      <SearchForm
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />
      <button onClick={moveToCurrentLocation}>Move to My Location</button>
      <MapContainer id="map"></MapContainer>
    </div>
  );
}

export default Map;
