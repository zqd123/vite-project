<script setup lang="ts">
import router from "./router";
import { useExperimentStore } from "./store/experiment";
const experimentStore = useExperimentStore();

window.addEventListener("beforeunload", (e) => {
  e.preventDefault();
  e.returnValue = "";
});

const showHistory = () => {
  console.log("历史记录：", experimentStore.userInfo);
};
</script>

<template>
  <div>
    <div class="fixed left-2 top-2" @click="router.push({ path: '/login' })">
      <el-icon color="#409EFC">
        <HomeFilled />
      </el-icon>
    </div>
    <div class="fixed right-2 bottom-2" @click="showHistory">
      <el-icon color="#409EFC">
        <Clock />
      </el-icon>
    </div>
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
