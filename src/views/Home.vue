<!--
 * @Author: your name
 * @Date: 2020-08-08 16:12:56
 * @LastEditTime: 2020-08-08 16:19:26
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \democ:\Users\12768\Desktop\ol\src\views\Home.vue
-->
<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <FirstMap />
  </div>
</template>

<script>
// @ is an alias to /src
import FirstMap from '@/components/firstMap.vue';

export default {
  name: 'Home',
  components: {
    FirstMap,
  },
};
</script>
