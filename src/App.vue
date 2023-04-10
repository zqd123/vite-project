<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
const go = (name: string) => {
  router.push({ name });
};
</script>

<template>
  <div>
    <el-button @click="go('home')">Home</el-button>
    <el-button @click="go('about')">About</el-button>
    <p class="flex flex-col">
      <!--使用 router-link 组件进行导航 -->
      <!--通过传递 `to` 来指定链接 -->
      <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
      <router-link to="/">Go to Home</router-link>
      <router-link to="/about">Go to About</router-link>
    </p>
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
