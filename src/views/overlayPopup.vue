<!--
 * @Author: your name
 * @Date: 2020-09-11 08:22:31
 * @LastEditTime: 2020-09-11 09:28:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \democ:\Users\12768\Desktop\ol\src\views\overlayPopup.vue
-->
<template>
    <div id="">
      ceshi
       <div id="map" class="map"></div>
    <div id="popup" class="ol-popup">
      <a href="#" id="popup-closer" class="ol-popup-closer"></a>
      <div id="popup-content"></div>
    </div>
    </div>
</template>

<script>
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import 'ol/ol.css';
// import { transform } from 'ol/proj';

export default {
  name: 'overlayPopup',
  components: {},
  data() {
    return {

    };
  },
  computed: {},
  watch: {},
  methods: {
    initMap() {
      // const center = proj.transformExtent([103.3, 35.5], 'EPSG:4326', 'EPSG:3857');
      // let center = transform([108, 34.2], 'EPSG:4326', 'EPSG:3857');
      // eslint-disable-next-line no-new
      new Map({
        target: 'map',
        layers: [
          new TileLayer({
            source: new XYZ({
              url: 'http://t2.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}',
            }),
          }),
          new TileLayer({
            source: new XYZ({
              url: 'http://t2.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}',
            }),
            isGroup: true,
            name: '天地图文字标注',
          }),
        ],
        view: new View({
          // center: transform([108, 34.2], 'EPSG:4326', 'EPSG:3857'),
          // zoom: 4,
          center: [0, 0], // 地图中心点坐标
          zoom: 2, // 缩放级别
        }),
      });
    },
  },
  created() {},
  mounted() {
    this.initMap();
  },
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类

</style>
