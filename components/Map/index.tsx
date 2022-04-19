/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

interface Props {
  address: string;
}

const Map: React.FC<Props> = ({ address }) => {
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new window.kakao.maps.Map(container, options);

    const geocoder = new window.kakao.maps.services.Geocoder();

    geocoder.addressSearch(address, function (result: any, status: any) {
      // 정상적으로 검색이 완료됐으면
      if (status === window.kakao.maps.services.Status.OK) {
        const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

        // 결과값으로 받은 위치를 마커로 표시합니다
        new window.kakao.maps.Marker({
          map: map,
          position: coords,
        });
        map.setCenter(coords);
        map.setZoomable(false);
      }
    });
  }, [address]);

  return (
    <div
      id="map"
      style={{
        width: '100%',
        paddingBottom: '100%',
      }}
    ></div>
  );
};

export default Map;
