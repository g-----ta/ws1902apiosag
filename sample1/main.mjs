/* global Y */

/**
 * プログラムのエントリーポイント
 * この関数が最初に実行される
 */
async function main() {
  // 地図を初期化
  const map = new Y.Map('map');
  const zoomLevel = 17;

  const GFO = {
    lng : 34.7038830,
    lat : 135.4950516
  };
  const SKYTREE = {
    lng : 35.7100574,
    lat : 139.8107171
  }
  const lng = 34.7038830;
  const lat = 135.4950516;

  map.drawMap(new Y.LatLng(SKYTREE.lng, SKYTREE.lat), zoomLevel, Y.LayerSetId.NORMAL);

  // コントロールの追加
  const sliderZoomControl = new Y.SliderZoomControlVertical();
  map.addControl(sliderZoomControl);

  const centerMarkControl = new Y.CenterMarkControl();
  map.addControl(centerMarkControl);
}

main();
