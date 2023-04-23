<script setup lang="ts">
const emit = defineEmits(["start-action"]);
document.addEventListener("keyup", (e: KeyboardEvent) => {
  console.log(
    "🚀 ~ file: StartAction.vue:8 ~ document.addEventListener ~ e:",
    e
  );
  if (e.key === "q") {
    emit("start-action");
  }
});
</script>
<template>
  <div>恭喜! 现在您将看到20组熟悉的图形。 按Q键开始MFFT游戏。</div>
</template>
