<script setup lang="ts">
import { ref, unref } from "vue";
import { Image } from "../first-test/allImage";
import Question from "./Question.vue";
const emit = defineEmits(["checkClickHandle"]);
const props = withDefaults(
  defineProps<{
    testItem: Image;
    second: string;
  }>(),
  {
    second: "8",
  }
);
let interval = 0;
const countdown = ref(0);
const dialogVisible = ref(false);
/**初始化倒计时 */
const initSecond = () => {
  countdown.value = Number(unref(props.second));
  interval = setInterval(() => {
    countdown.value--;
    if (countdown.value === 0) {
      dialogVisible.value = true;
      clearInterval(interval);
    }
  }, 1000);
};
initSecond();
/**vite处理静态资源（重要） */
const getAssetsFile = (url: string) => {
  return new URL(`../../assets/seconde-test/${url}`, import.meta.url).href;
};
const selectHandle = () => {
  dialogVisible.value = true;
  clearInterval(interval);
};
/**答题后确认 */
const ok = () => {
  dialogVisible.value = false;
  emit("checkClickHandle");
  initSecond();
};
</script>
<template>
  <div class="relative">
    <div class="text-left mb-4">
      <div>请选择你认为最合适的一项课程</div>
    </div>
    <el-button class="absolute -top-10" type="primary" text size="large"
      >{{ countdown }} s</el-button
    >
    <div class="flex flex-wrap gap-2">
      <div
        v-for="item in testItem.children"
        :key="item.url"
        class="w-40 h-36 p-2 bg-white flex justify-center items-center border-2 rounded-xl overflow-hidden"
        :class="item.selectedColor"
        @click="selectHandle"
      >
        <img
          class="w-auto h-auto max-h-full max-w-full"
          :src="getAssetsFile(item.url + '.png')"
        />
      </div>
    </div>

    <el-dialog
      v-model="dialogVisible"
      title="请选择"
      width="90%"
      :align-center="true"
      :show-close="false"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      destroy-on-close
    >
      <Question @ok="ok"></Question>
    </el-dialog>
  </div>
</template>
