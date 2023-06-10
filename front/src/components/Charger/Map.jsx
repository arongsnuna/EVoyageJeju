import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import basicMarker from "./markerImage/basicMarker.png";
import currentMarker from "./markerImage/currentMarker.png";
import searchPoint from "./markerImage/searchPoint.png";
import "./content.css";
import {
  MapContainer,
  InputContainer,
  CurrentPositionButton,
  MapComp,
} from "./Map.style";

const { kakao } = window;

function Map({ searchPlace }) {
  const [chargerData, setChargerData] = useState([]); // 충전소 위치찾기
  const [searchQuery, setSearchQuery] = useState(""); // 검색창 만들기

  const mapRef = useRef(null); // Store map instance in ref
  const psRef = useRef(null);

  const serviceKey = process.env.REACT_APP_CHARGER_API_KEY;
  const URL = `https://open.jejudatahub.net/api/proxy/atDab6t8218btaa122b26DDtbatD86t1/${serviceKey}`;

  useEffect(() => {
    searchCharger(); // Fetch charger data when component mounts or searchPlace changes
  }, [searchPlace]);

  useEffect(() => {
    if (chargerData.length > 0 && kakao && kakao.maps) {
      mapscript();
    }
  }, [chargerData]);

  // 충전기 API 불러오기
  const searchCharger = async () => {
    try {
      const reqs = [];
      for (let page = 1; page <= 4; page++) {
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

  // 카카오맵 API 호출 및 생성
  const mapscript = () => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33.505395, 126.495111),
      level: 3,
    };

    const map = new kakao.maps.Map(container, options);
    mapRef.current = map;
    // Create places service and assign it to the ref
    psRef.current = new kakao.maps.services.Places();

    // Add zoom controls
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.BOTTOMRIGHT);

    // 불러온 충전소 위치 지도에 표시하기
    chargerData.forEach((data) => {
      // 충전소 위치 저장(위도, 경도)
      const markerPosition = new kakao.maps.LatLng(
        data.latitude,
        data.longitude
      );

      // 기본 마커 이미지 설정
      var imageSrc = basicMarker,
        imageSize = new kakao.maps.Size(70, 75),
        imageOption = { offset: new kakao.maps.Point(27, 69) };
      var markerImage = new kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption
      );

      // 충전소를 마커로 표시
      const marker = new kakao.maps.Marker({
        map: map,
        position: markerPosition,
        image: markerImage,
        title: data.chargingPlace,
      });
      marker.setMap(map);

      // custom-overlay content
      const content =
        '<div class="wrap">' +
        '    <div class="boxtitle">' +
        '        <div class="location-box">' +
        `            <a class="location">${data.chargingPlace}</a>` +
        `            <a class="address">${data.addressDoro}</a>` +
        "        </div>" +
        `        <button class="close" title="닫기">X</button>` +
        "    </div>" +
        '    <div class="boxcontent>' +
        '        <div class="time-box">' +
        '            <a class="time text">운영 시간</a>' +
        `            <a class="time">${data.startTime} ~ ${data.endTime}</a>` +
        "        </div>" +
        '        <div class="quickcharging-box">' +
        '            <a class="quickcharging text">급속충전 가능여부</a>' +
        `            <a class="quickcharging">${data.quickChargingFlag}</a>` +
        "        </div>" +
        '        <div class="parkingfee-box">' +
        '            <a class="parkingfee text">주차료 부과 여부</a>' +
        `            <a class="parkingfee">${data.parkingFeeFlag}</a>` +
        "        </div>" +
        "    </div>" +
        "</div>";

      // 충전소 정보를 제공할 infowindow를 custom-overlay로 표현
      var customOverlay = new kakao.maps.CustomOverlay({
        position: markerPosition,
        content: content,
        xAnchor: 0.3,
        yAnchor: 0.91,
      });

      // 충전소 마커 클릭 시 overlay 호출
      kakao.maps.event.addListener(marker, "click", function () {
        customOverlay.setMap(map);
      });
      // map 클릭 시 overlay 닫기
      kakao.maps.event.addListener(map, "click", function () {
        customOverlay.setMap(null);
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

        // searchPoint 마커 표시를 위한 이미지 선언
        var imageSrc = searchPoint,
          imageSize = new kakao.maps.Size(75, 80),
          imageOption = { offset: new kakao.maps.Point(27, 69) };
        var markerImage = new kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption
        );

        const marker = new kakao.maps.Marker({
          position: coords,
          image: markerImage,
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

  // window func을 통해 현재 위치 출력 & 이동하는 함수
  const moveToCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const lat = position.coords.latitude,
            lon = position.coords.longitude;

          // 현재 위치 Marker 변경
          var imageSrc = currentMarker,
            imageSize = new kakao.maps.Size(75, 80),
            imageOption = { offset: new kakao.maps.Point(27, 69) };
          var markerImage = new kakao.maps.MarkerImage(
            imageSrc,
            imageSize,
            imageOption
          );

          const locPosition = new kakao.maps.LatLng(lat, lon);
          mapRef.current.setCenter(locPosition);

          const marker = new kakao.maps.Marker({
            map: mapRef.current,
            position: locPosition,
            image: markerImage,
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
    <MapContainer>
      <InputContainer>
        <CurrentPositionButton onClick={moveToCurrentLocation}>
          Where am I
        </CurrentPositionButton>
        <p>|</p>
        <SearchForm
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSearch={handleSearch}
        />
      </InputContainer>
      <MapComp id="map"></MapComp>
    </MapContainer>
  );
}

export default Map;
