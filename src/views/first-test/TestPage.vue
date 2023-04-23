<script setup lang="ts">
import { ref } from "vue";
import SelectImg from "./SelectImg.vue";
import { images, testImages } from "./allImage";
import StartAction from "./StartAction.vue";
import EndTest from "./endTest.vue";
/**是否为预实验 */
const isTest = ref(true);
/**实验索引 */
const testIndex = ref(0);
/**正式实验提示页面 */
const showAction = ref(false);
/**结束页面 */
const showEnd = ref(false);
/**当前实验项目 */
const currentItem = ref(testImages[0]);
/**选中正确选项回调 */
const selectTrue = () => {
  if (isTest.value === true && testIndex.value === testImages.length - 1) {
    showAction.value = true;
    return;
  }
  if (isTest.value === false && testIndex.value === images.length - 1) {
    showEnd.value = true;
    return;
  }
  testIndex.value += 1;
  currentItem.value = isTest.value
    ? testImages[testIndex.value]
    : images[testIndex.value];
  // console.log(
  //   "🚀 ~ file: TestPage.vue:7 ~ selectTrue ~ testIndex.value:",
  //   testIndex.value
  // );
};
/**正式实验开始 */
const startAction = () => {
  showAction.value = false;
  testIndex.value = 0;
  isTest.value = false;
  currentItem.value = images[testIndex.value];
};
</script>
<template>
  <div>
    <SelectImg
      v-show="!showAction && !showEnd"
      :test-item="currentItem"
      :test-index="testIndex"
      :is-test="isTest"
      @select-true="selectTrue"
    ></SelectImg>
    <!-- 开始正式实验 -->
    <StartAction v-if="showAction" @start-action="startAction"></StartAction>
    <!-- 实验结束 -->
    <EndTest v-if="showEnd"></EndTest>
  </div>
</template>
<style scoped></style>
