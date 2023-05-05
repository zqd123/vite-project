<script setup lang="ts">
import { ref } from "vue";
import SelectImg from "./InformationSelect.vue";
import {
  smallInformationImages,
  mediumInformationImages,
  largeInformationImages,
} from "../second-test/allImage";
import { useExperimentStore } from "../../store/experiment";
import { SECONDETYPE } from "./commonEnum";
import router from "../../router";

const props = withDefaults(
  defineProps<{ type: SECONDETYPE; second: string }>(),
  {
    type: SECONDETYPE.small,
    second: "8",
  }
);
console.log("🚀 ~ file: index.vue:11 ~ props ~ props:", props);
// const experimentStore = useExperimentStore();
/**实验索引 */
const testIndex = ref(0);
/**当前实验项目 */
const currentItem = ref();
currentItem.value =
  props.type === SECONDETYPE.small
    ? smallInformationImages[testIndex.value]
    : props.type === SECONDETYPE.medium
    ? mediumInformationImages[testIndex.value]
    : largeInformationImages[testIndex.value];
/**选中正确选项回调 */
const checkClickHandle = () => {
  if (testIndex.value >= 2) {
    router.push({ path: "/seconde/endTest" });
    return;
  }
  testIndex.value += 1;
  currentItem.value =
    props.type === SECONDETYPE.small
      ? smallInformationImages[testIndex.value]
      : props.type === SECONDETYPE.medium
      ? mediumInformationImages[testIndex.value]
      : largeInformationImages[testIndex.value];
  console.log(
    "🚀 ~ file: index.vue:29 ~ checkClickHandle ~ currentItem.value:",
    currentItem.value
  );
};
</script>
<template>
  <div>
    <SelectImg
      :test-item="currentItem"
      :test-index="testIndex"
      :second="second"
      @checkClickHandle="checkClickHandle"
    ></SelectImg>
  </div>
</template>
<style scoped></style>
