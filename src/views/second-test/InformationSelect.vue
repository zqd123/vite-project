<script setup lang="ts">
import { ref } from "vue";
import { Image } from "../first-test/allImage";
import Question from "./Question.vue";
const emit = defineEmits(["checkClickHandle"]);
const props = withDefaults(
  defineProps<{
    testItem: Image;
  }>(),
  {}
);
const dialogVisible = ref(false);
const selectHandle = (image: Image) => {
  dialogVisible.value = true;
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

    <el-dialog v-model="dialogVisible" title="请选择" width="60%">
      <Question></Question>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
