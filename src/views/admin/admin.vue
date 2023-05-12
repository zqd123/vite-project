<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";
import { CheckQuestion, useExperimentStore } from "../../store/experiment";
const experimentStore = useExperimentStore();
const tableData = ref();
axios.get("https://80e21bb.r1.cpolar.top/get_user").then((res) => {
  console.log("value", res.data);
  tableData.value = res.data.data;
});
/**导出表格 */
const exportTable = () => {
  console.log("导出数据");
  download(
    "id,姓名,第一个问题选项,第二个问题选项,用时（s）\n",
    tableData.value
  );
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
  <div>
    <div class="m-2 flex justify-end">
      <el-button type="primary" @click="exportTable">
        <el-icon><Download /></el-icon>
        <span class="pl-1">导出数据</span>
      </el-button>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%"
      :border="true"
      max-height="80vh"
    >
      <!-- <el-table-column type="index" label="序号" width="80" /> -->
      <el-table-column prop="id" label="id" />
      <el-table-column prop="name" label="姓名" width="150" />
      <el-table-column prop="question1" label="问题一选项" width="150" />
      <el-table-column prop="question2" label="问题二选项" width="150" />
      <el-table-column prop="secondCount" label="用时" width="150" />
    </el-table>
  </div>
</template>
