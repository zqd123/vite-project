<script setup lang="ts">
import images from "./allImage";
</script>
<template>
  <div>
    first test
    <template v-for="item in images" :key="item.id">
      <img :src="'src/assets/first-test/' + item.url + '.png'" />
    </template>
  </div>
</template>
<style scoped>
image {
  width: 50px;
  height: 100px;
}
</style>
