<script setup lang="ts">
import {
  ref,
  withDefaults,
  defineProps,
  defineEmits,
  computed,
  watch,
} from "vue";
import { Image } from "./allImage";
const emit = defineEmits(["select-true"]);
const props = withDefaults(
  defineProps<{
    testItem: Image;
    isTest: boolean;
    testIndex: number;
  }>(),
  {
    isTest: false,
    testIndex: 1,
  }
);
const baseUrl = ref("src/assets/first-test/");
const baseStr = computed(() => {
  const urlStr = props.isTest
    ? baseUrl.value + "t" + props.testIndex + "."
    : baseUrl.value + props.testIndex + ".";
  return urlStr;
});
// baseUrl.value = props.isTest
//   ? baseUrl.value + "t" + props.testIndex
//   : baseUrl.value + props.testIndex;
// baseUrl.value = baseUrl.value + ".";
const selectedColor = ref("");
// const selectHandle = (e: MouseEvent, index: number) => {
//   const img = e.target as HTMLImageElement;
//   console.log("🚀 ~ file: SelectImg.vue:30 ~ selectHandle ~ img:", img);
//   if (index === props.trueIndex) {
//     img.parentElement!.className = "border-4 border-lime-400";
//     emit("select-true");
//     img.parentElement!.parentElement!.childNodes.forEach((element) => {
//       console.dir(element);
//     });
//   } else {
//     img.parentElement!.className = "border-4 border-red-600";
//   }
// };
const testItem = ref(JSON.parse(JSON.stringify(props.testItem)) as Image);
watch(
  () => props.testItem,
  (newValue) => {
    if (!newValue) return;
    testItem.value = JSON.parse(JSON.stringify(newValue));
  }
);
const selectHandle = (image: Image) => {
  if (image.isTrue) {
    image.selectedColor = "border-lime-400";
    emit("select-true");
  } else {
    image.selectedColor = "border-red-600";
  }
  // console.log("🚀 ~ file: SelectImg.vue:44 ~ selectHandle ~ image:", image);
};
</script>
<template>
  <div>
    <!-- 练习案例1 / 2 -->

    <div class="flex gap-2 items-center">
      <div class="border-4 border-black">
        <img :src="testItem.url + '.png'" />
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div
          v-for="item in testItem.children"
          :key="item.url"
          class="border-4"
          :class="item.selectedColor"
          @click="selectHandle(item)"
        >
          <img :src="item.url + '.png'" />
        </div>
      </div>
    </div>
  </div>

  <!-- 恭喜! 现在您将看到20组熟悉的图形。 按Q键开始MFFT游戏。 -->
</template>
<style scoped>
img {
  width: 150px;
  height: 150px;
}
</style>
