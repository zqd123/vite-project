<script setup lang="ts">
import { Image } from "../first-test/allImage";
const emit = defineEmits(["checkClickHandle"]);
const props = withDefaults(
  defineProps<{
    testItem: Image;
  }>(),
  {}
);
const selectHandle = (image: Image) => {
  emit("checkClickHandle");
};
/**vite处理静态资源（重要） */
const getAssetsFile = (url: string) => {
  return new URL(`../../assets/seconde-test/${url}`, import.meta.url).href;
};
</script>
<template>
  <div>
    <div class="flex flex-wrap gap-2">
      <div
        v-for="item in testItem.children"
        :key="item.url"
        class="w-40 h-36 p-2 bg-white flex justify-center items-center border-4 rounded-xl overflow-hidden"
        :class="item.selectedColor"
        @click="selectHandle(item)"
      >
        <img :src="getAssetsFile(item.url + '.png')" />
      </div>
    </div>
  </div>
</template>
