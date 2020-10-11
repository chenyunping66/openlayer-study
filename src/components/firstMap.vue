<template>
<!-- 可以 -->
    <div id="map" ref="rootmap">
      第一个地图展示
    </div>
</template>

<script>
// import Map from 'ol/Map';
// import View from 'ol/View';
import { Map, View } from 'ol'; // 引入地图、地图视图
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';

export default {
  data() {
    return {
      map: null,
    };
  },
  mounted() {
    // eslint-disable-next-line no-new
    new Map({
    // 声明一个Map的对象
      target: 'map', // 和map绑定的容器id
      layers: [
        // 声明一个TileLayer对象
        new TileLayer({
          // 数据源
          // 部署的离线瓦片地图
          source: new XYZ({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          }),
        }),
      ],
      // View对象赋值给view属性
      view: new View({
        center: [0, 0], // 地图中心点坐标
        zoom: 2, // 缩放级别
      }),
    });
  },
};
</script>

<style scoped>

/* VUE对百分比不识别 */
#map{width:100%;height:1000px;}
/*隐藏ol的一些自带元素*/
.ol-attribution,.ol-zoom { display: none;}

</style>
