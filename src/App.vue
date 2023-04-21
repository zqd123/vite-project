<script setup lang="ts">
import { useRouter } from "vue-router";
import { useUserStore } from "./store/user";
import FirstTest from "./views/first-test/index.vue";
const userStore = useUserStore();
const router = useRouter();
const go = (name: string) => {
  router.push({ name });
};
</script>

<template>
  <div>
    <!-- <router-link to="/first">实验一</router-link>
    <router-link to="/seconde">实验二</router-link> -->
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
