import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Leaflet from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

// マーカー（ピン）の設定
const DefaultIcon = Leaflet.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
Leaflet.Marker.prototype.options.icon = DefaultIcon;

// Leafletの2D地図表示コンポーネント
export default function LeafletView() {
  // マーカー（ピン）の座標値の設定
  const [zoom, setZoom] = useState(18);
  const [position, setPosition] = useState({
    lat: 35.5309401,
    lng: 139.6947167,
  });
  return (
    <MapContainer center={position} zoom={zoom} style={{ height: "85vh" }}>
      {/* 2D地図のタイルレイヤーの表示 */}
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright";>OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* マーカー（ピン）の表示 */}
      <Marker position={position}>
        <Popup>Infotmatix Inc.</Popup>
      </Marker>
    </MapContainer>
  );
}
