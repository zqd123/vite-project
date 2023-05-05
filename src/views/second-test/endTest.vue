<script setup lang="ts">
import { Download } from "@element-plus/icons-vue";
import { CheckQuestion, useExperimentStore } from "../../store/experiment";

const experimentStore = useExperimentStore();
/**导出表格 */
const exportTable = () => {
  console.log("导出数据");
  download("第一个问题分数,第二个问题分数\n", experimentStore.checkQuestion);
};
/**下载方法 */
const download = (str: string, data: CheckQuestion[]) => {
  // 增加\t为了不让表格显示科学计数法或者其他格式
  for (let i = 0; i < data.length; i++) {
    for (const key in data[i]) {
      str += `${data[i][key as keyof CheckQuestion] + "\t"},`;
    }
    str += "\n";
  }
  // encodeURIComponent解决中文乱码
  const uri = "data:text/csv;charset=utf-8,\ufeff" + encodeURIComponent(str);
  // 通过创建a标签实现
  const link = document.createElement("a");
  link.href = uri;
  // 对下载的文件命名
  link.download = experimentStore.userInfo.studyName ?? "export" + ".csv";
  link.click();
};
</script>
<template>
  <div class="flex flex-col justify-center items-center">
    <div>感谢您的合作!</div>
    <div>
      <div class="flex justify-between pb-2">
        <div class="flex items-center gap-2">
          <!-- <span>姓名：{{ experimentStore.userInfo.studyName }}</span> -->
        </div>
        <el-button type="primary" @click="exportTable">
          <el-icon><Download /></el-icon>
          <span class="pl-1">导出数据</span>
        </el-button>
      </div>
      <el-table
        :data="experimentStore.checkQuestion"
        max-height="60vh"
        style="width: 60vw"
        :border="true"
        center
      >
        <el-table-column type="index" label="序号" width="100">
        </el-table-column>
        <el-table-column prop="question1" label="第一个问题分数">
        </el-table-column>
        <el-table-column prop="question2" label="第二个问题分数">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
