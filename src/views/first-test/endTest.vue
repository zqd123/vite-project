<script setup lang="ts">
import { Experiment, useExperimentStore } from "../../store/experiment";

const experimentStore = useExperimentStore();

const exportTable = () => {
  console.log("导出数据");
  download(
    "首次点击用时,选择正确用时,错误次数\n",
    experimentStore.experimentData
  );
};
const download = (str: string, data: Experiment[]) => {
  console.table(data);
  console.log(
    "🚀 ~ file: endTest.vue:14 ~ download ~ data:",
    data instanceof Array
  );
  // 增加\t为了不让表格显示科学计数法或者其他格式
  for (let i = 0; i < data.length; i++) {
    for (const key in data[i]) {
      str += `${data[i][key as keyof Experiment] + "\t"},`;
    }
    str += "\n";
  }
  // encodeURIComponent解决中文乱码
  const uri = "data:text/csv;charset=utf-8,\ufeff" + encodeURIComponent(str);
  // 通过创建a标签实现
  const link = document.createElement("a");
  link.href = uri;
  // 对下载的文件命名
  link.download = "下载数据.csv";
  link.click();
};
</script>
<template>
  <div>恭喜! 你已经完成了匹配熟悉人物任务</div>
  <div>
    <div>
      <el-button type="primary" @click="exportTable">导出数据</el-button>
    </div>
    <el-table :data="experimentStore.experimentData" max-height="60vh">
      <el-table-column type="index"> </el-table-column>
      <el-table-column prop="selectFirstTime" label="首次点击用时">
      </el-table-column>
      <el-table-column prop="selectTrueTimes" label="选择正确用时">
      </el-table-column>
      <el-table-column prop="errorSelectSum" label="错误次数">
      </el-table-column>
    </el-table>
  </div>
</template>
