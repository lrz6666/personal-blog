<template>
  <div class="flex justify-center items-center h-screen bg-gray-200">
    <div class=" bg-white p-[2rem] rounded-lg">
      <el-form ref="ruleFormRef" style="max-width: 600px" :model="ruleForm" status-icon :rules="rules"
        label-width="auto" class="demo-ruleForm">
        <h1 class=" text-[1.6rem]">登录</h1>
        <el-form-item prop="phone">
          <p>电话</p>
          <el-input v-model="ruleForm.phone" autocomplete="off" />
        </el-form-item>
        <el-form-item prop="password">
          <p>密码</p>
          <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">
            Submit
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
const ruleFormRef = ref<FormInstance>()


//用户测试数据
const userData = [
  {
    id: 1,
    phone: '15138667320',
    password: 'l123456',
    userName: '超级管理员',
    role: 'admin'
  },
  {
    id: 2,
    phone: '15138668300',
    password: 'l123456',
    userName: '二级管理员',
    role: 'admin2'
  },
  {
    id: 3,
    phone: '13638668300',
    password: 'l123456',
    userName: '三级管理员',
    role: 'admin3'
  },
]
const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {

    callback()
  }
}
//定义rulefrom格式
interface LoginForm {
  phone: string  // 允许为 null 或 number
  password: string;
}
//定义
const ruleForm = reactive<LoginForm>({
  phone: '',
  password: '',
});
//使用路由
const router = useRouter()
// 手机号验证（以 1 开头的 11 位数字）
const validatePhone = (rule: any, value: string, callback: Function) => {
  if (!value) {
    callback(new Error('请输入手机号'));
  } else if (!/^1\d{10}$/.test(value)) {
    callback(new Error('手机号必须以 1 开头且为 11 位数字'));
  } else {
    callback();
  }
};

// 密码验证（英文 + 数字，6-20 位）
const validatePassword = (rule: any, value: string, callback: Function) => {
  if (!value) {
    callback(new Error('请输入密码'));
  } else if (value.length < 6 || value.length > 20) {
    callback(new Error('密码长度需在 6-20 个字符之间'));
  } else if (!/[a-zA-Z]/.test(value) || !/[0-9]/.test(value)) {
    callback(new Error('密码必须包含英文和数字'));
  } else {
    callback();
  }
};

const rules = reactive<FormRules<typeof ruleForm>>({
  phone: [
    { required: true, validator: validatePhone, trigger: 'blur' }
  ],
  password: [
    { required: true, validator: validatePassword, trigger: 'blur' }
  ],
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return

  try {
    const user = userData.find(
      u => u.phone === ruleForm.phone && u.password === ruleForm.password
    )
    console.log(user)
    if (user) {
      ElMessage.success(`登录成功！欢迎 ${user.userName}`);
      router.push('/')
    } else {
      ElMessage.error('手机号或密码错误');
    }
  } catch (error) {
    console.error('登录失败:', error);
  }
}



</script>


<style scoped></style>