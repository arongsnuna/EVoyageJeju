import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Container, MapContainer } from "./Map.style";

const { kakao } = window;

function Map() {
  const [chargerData, setChargerData] = useState([]);

  const serviceKey = '2p8b2t5trpcc2ootb2p2t8e12o8b2toe';
  // const serviceKey = process.env.REACT_APP_CHARGER_API_KEY;
  const URL = `https://open.jejudatahub.net/api/proxy/atDab6t8218btaa122b26DDtbatD86t1/${serviceKey}`;

  const searchCharger = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(URL, {
        params: {
          hasMore: true,
          limit: 100,
        }
      });
      console.log(res.data)
      setChargerData(res.data.data)

    } catch (err) {
      console.log(err)
    }
  }
  console.log(chargerData)

  useEffect(() => {
    mapscript();
  }, [chargerData]);

  const mapscript = async () => {
    // 지도를 표시할 div
    const container = document.getElementById("map");  
    // 지도의 중심좌표(위도(lat), 경도(long))
    const options = {
      center: new kakao.maps.LatLng(33.5104135, 126.4913534),  
      level: 5,  // 확대 레벨
    };

    // 지도 생성
    const map = new kakao.maps.Map(container, options);

    // try {
    //   const res = await axios.get(URL, {
    //     params: {
    //       hasMore: true,
    //       limit: 100,
    //     }
    //   });
    //   setChargerData(res.data.data)
    // } catch (err) {
    //   console.log(err)
    // }

    chargerData.map((data) => {
      new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(data.latitude, data.longitude),
        title: data.chargingPlace,
      })
    });

    //마커가 표시 될 위치
    const markerPosition = new kakao.maps.LatLng(33.5104135, 126.4913534);

    // 마커 생성
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커를 지도 위에 표시
    marker.setMap(map);
  };

  return (
    <div>
      <MapContainer id="map"></MapContainer>
      <button onClick={searchCharger}>전체 충전소 위치 찾기</button>
    </div>
  );
};

export default Map;