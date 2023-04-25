<script setup lang="ts">
import { Download } from "@element-plus/icons-vue";
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
  <div class="flex flex-col justify-center items-center">
    <div>恭喜! 你已经完成了匹配任务</div>
    <div>
      <div class="flex justify-end pb-2">
        <div>
          <span>姓名：{{ experimentStore.userInfo.studyName }}</span>
          <span>学号：{{ experimentStore.userInfo.studyCode }}</span>
        </div>
        <el-button type="primary" @click="exportTable">
          <el-icon><Download /></el-icon>
          <span class="pl-1">导出数据</span>
        </el-button>
      </div>
      <el-table
        :data="experimentStore.experimentData"
        max-height="60vh"
        style="width: 60vw"
        :border="true"
        center
      >
        <el-table-column type="index" label="序号" width="100">
        </el-table-column>
        <el-table-column prop="selectFirstTime" label="首次点击用时(秒)">
        </el-table-column>
        <el-table-column prop="selectTrueTimes" label="选择正确用时(秒)">
        </el-table-column>
        <el-table-column prop="errorSelectSum" label="错误次数">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
