<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
const QUp = (e: KeyboardEvent) => {
  console.log("🚀 ~ file: Welcome.vue:6 ~ QUp ~ e:", e);
  if (e.key === "q") {
    router.push({ path: "test1-loading" });
  }
};
document.removeEventListener("keyup", QUp);
document.addEventListener("keyup", QUp);
</script>
<template>
  <div>
    <h1>欢迎来到熟悉人物配对游戏!</h1>
    <h3>你会看到一组熟悉的人物。</h3>
    <h3>练习赛有两组数字。</h3>
    <h3>游戏本身有20组人物。</h3>
    <h3>游戏需要12到15分钟。</h3>

    <!-- <span>按下键移动到下一个说明。</span>  -->

    <h3>每一组熟悉的人物都有六个数字。</h3>
    <h3>其中一个数字是目标数字，另一个</h3>
    <h3>五位数与目标略有不同。</h3>
    <h3>你的目标是选择目标图形。</h3>
    <h3>按Q键开始练习回合。</h3>
    <h3>游戏需要12到15分钟。</h3>

    <!-- <span>按向上和向下键通过这些说明向上和向下移动。</span> -->
  </div>
</template>
<style scoped>
image {
  width: 50px;
  height: 100px;
}
</style>
