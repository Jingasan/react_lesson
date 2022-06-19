import React from "react";
import {
  Viewer,
  Entity,
  PointGraphics,
  EntityDescription,
  Cesium3DTileset,
} from "resium";
import {
  Cartesian3,
  OpenStreetMapImageryProvider,
  createWorldTerrain,
  Color,
} from "cesium";

// Cesiumの3D地図表示コンポーネント
export default function ResiumView() {
  let viewer; // Raw Cesium's Viewer object
  // 地形データの取得
  const terrainProvider = createWorldTerrain();
  // 地理院オルソ画像データの取得
  const imageryProvider = new OpenStreetMapImageryProvider({
    url: "https://cyberjapandata.gsi.go.jp/xyz/ort/",
    fileExtension: "jpg",
    credit: "電子国土基本図（オルソ画像）",
  });
  // Informatix社の座標
  const ifxPosition = Cartesian3.fromDegrees(139.6947167, 35.5312401, 160);

  // 3DTilesデータの読み込みが完了したらそのデータにズームする関数
  const handleReady = (tileset) => {
    if (viewer) {
      viewer.zoomTo(tileset);
    }
  };

  return (
    <Viewer
      terrainProvider={terrainProvider}
      imageryProvider={imageryProvider}
      style={{ height: "85vh" }}
      ref={(e) => {
        if (e?.cesiumElement) {
          viewer = e.cesiumElement;
        }
      }}
    >
      {/* 座標ポイントの表示 */}
      <Entity position={ifxPosition} name="Informatix. Inc">
        <PointGraphics pixelSize={15} color={Color.RED} />
        <EntityDescription>
          <h4>(株)インフォマティクス</h4>
          <a
            href="https://www.informatix.co.jp/"
            target="_blank"
            rel="noreferrer"
          >
            https://www.informatix.co.jp/
          </a>
        </EntityDescription>
      </Entity>
      {/* 川崎市建物モデルの表示 */}
      <Cesium3DTileset
        url="https://plateau-3dtiles-server.s3.ap-northeast-1.amazonaws.com/14_kanagawa/14130_kawasaki-shi_2020_bldg_notexture/tileset.json"
        onReady={handleReady}
      />
      {/* 川崎市津波モデルの表示 */}
      <Cesium3DTileset url="https://plateau-3dtiles-server.s3.ap-northeast-1.amazonaws.com/14_kanagawa/14130_kawasaki-shi_2020_tsunami_texture/tileset.json" />
      {/* 多摩川洪水モデルの表示 */}
      <Cesium3DTileset url="https://plateau-3dtiles-server.s3.ap-northeast-1.amazonaws.com/14_kanagawa/14130_kawasaki-shi_2020_fld_texture_mlit/tamagawa_tamagawa_asakawa_ogurigawa_l1/tileset.json" />
      <Cesium3DTileset url="https://plateau-3dtiles-server.s3.ap-northeast-1.amazonaws.com/14_kanagawa/14130_kawasaki-shi_2020_fld_texture_mlit/tamagawa_tamagawa_asakawa_ogurigawa_l2/tileset.json" />
    </Viewer>
  );
}
