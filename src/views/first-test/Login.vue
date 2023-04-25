<script lang="ts" setup>
import { reactive, ref } from "vue";
import router from "../../router";
import type { FormInstance, FormRules } from "element-plus";
import { useExperimentStore } from "../../store/experiment";
const experimentStore = useExperimentStore();
const labelPosition = ref("right");
const ruleFormRef = ref<FormInstance>();
const formLabelAlign = reactive({
  studyCode: "",
  studyName: "",
  email: "",
});
const rules = reactive<FormRules>({
  studyCode: [{ required: true, message: "请输入学号", trigger: "blur" }],
  studyName: [{ required: true, message: "请输入姓名", trigger: "blur" }],
  email: [{ required: true, message: "请输入邮箱", trigger: "blur" }],
});
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      experimentStore.userInfo = formLabelAlign;
      router.push({ path: "/guidance" });
    } else {
      console.log("error submit!", fields);
    }
  });
};
</script>
<template>
  <div>
    <el-card class="w-96 h-72 flex justify-center items-center" shadow="always">
      <el-form
        ref="ruleFormRef"
        :rules="rules"
        :label-position="labelPosition"
        :model="formLabelAlign"
      >
        <el-form-item label="学号" prop="studyCode">
          <el-input v-model="formLabelAlign.studyCode" />
        </el-form-item>
        <el-form-item label="姓名" prop="studyName">
          <el-input v-model="formLabelAlign.studyName" />
        </el-form-item>
        <!-- <el-form-item label="邮箱" prop="email">
          <el-input v-model="formLabelAlign.email" />
        </el-form-item> -->
        <el-button
          type="primary"
          size="default"
          @click="submitForm(ruleFormRef)"
          ><el-icon style="margin-right: 8px"><CaretRight /></el-icon>
          确认</el-button
        >
      </el-form>
    </el-card>
  </div>
</template>

<style scoped></style>
