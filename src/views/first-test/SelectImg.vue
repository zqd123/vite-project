<script setup lang="ts">
import { ref, withDefaults, defineProps, defineEmits, watch } from "vue";
import { Image } from "./allImage";
const emit = defineEmits(["select-true", "select-error"]);
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
    setTimeout(() => {
      emit("select-true");
    }, 500);
  } else {
    image.selectedColor = "border-red-600";
    emit("select-error");
  }
  // console.log("🚀 ~ file: SelectImg.vue:44 ~ selectHandle ~ image:", image);
};
</script>
<template>
  <div>
    <div class="flex gap-8 items-center">
      <div
        class="w-40 h-36 p-2 bg-white flex justify-center items-center border-4 rounded-xl overflow-hidden border-black"
      >
        <img :src="testItem.url + '.png'" />
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div
          v-for="item in testItem.children"
          :key="item.url"
          class="w-40 h-36 p-2 bg-white flex justify-center items-center border-4 rounded-xl overflow-hidden"
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
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
</style>
