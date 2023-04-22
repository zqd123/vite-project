<script setup lang="ts">
import {
  ref,
  withDefaults,
  defineProps,
  ImgHTMLAttributes,
  computed,
} from "vue";
import SelectImg from "./SelectImg.vue";
import { Image, testImages } from "./allImage";
const testIndex = ref(0);
const currentItem = ref(testImages[0]);
const selectTrue = () => {
  testIndex.value += 1;
  if (testIndex.value >= 2) {
    testIndex.value = 0;
  }
  currentItem.value = testImages[testIndex.value];
  console.log(
    "🚀 ~ file: TestPage.vue:7 ~ selectTrue ~ testIndex.value:",
    testIndex.value
  );
};
</script>
<template>
  <div>
    <!-- 练习案例1 / 2 -->
    <SelectImg
      :test-item="currentItem"
      :test-index="testIndex"
      @select-true="selectTrue"
    ></SelectImg>
  </div>
  <!-- 恭喜! 现在您将看到20组熟悉的图形。 按Q键开始MFFT游戏。 -->
</template>
<style scoped></style>
