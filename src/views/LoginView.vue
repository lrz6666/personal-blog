<template>
  <div class="flex justify-center items-center h-screen bg-gray-200">
    <div class=" bg-white p-[2rem] rounded-lg">
      <el-form ref="fromDataRef" style="max-width: 600px" :model="fromData" status-icon :rules="rules"
        label-width="auto" class="demo-fromData">
        <h1 class=" text-[1.6rem]">登录</h1>
        <el-form-item prop="phone">
          <p>电话</p>
          <el-input v-model="fromData.phone" autocomplete="off" />
        </el-form-item>
        <el-form-item prop="password">
          <p>密码</p>
          <el-input v-model="fromData.password" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :loading="isLoading" @click="submitForm(fromDataRef)">
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
import { login } from '@/api/users'

//是否登录加载中
const isLoading = ref(false)
//定义表单内容ref
const fromDataRef = ref<FormInstance>()
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
//定义fromDataRef格式
interface LoginForm {
  phone: string  // 允许为 null 或 number
  password: string;
}
//定义表单数据
const fromData = reactive<LoginForm>({
  phone: '15138667320',
  password: 'l123456',
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
//表单规则
const rules = reactive<FormRules<typeof fromData>>({
  phone: [
    { required: true, validator: validatePhone, trigger: 'blur' }
  ],
  password: [
    { required: true, validator: validatePassword, trigger: 'blur' }
  ],
});
//提交表单事件
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  isLoading.value = true
  try {
    //提交登录请求
    login(fromData).then(res => {
      console.log(res)
      if (res.data.success === true) {
        ElMessage.success(`登录成功！欢迎 ${res.data.userName}`);
        router.push('/')
        isLoading.value = false
        //存储访问令牌到localStorage
        localStorage.setItem('access_token', res.data.content.access_token);
      }
      if (res.data.success === false) {
        ElMessage.error('手机号或密码错误');
        isLoading.value = false
      }
    }).catch((error) => {
      console.error('登录失败:', error);
      ElMessage.error('登录失败，请重试');
    })
    .finally(() => {
      isLoading.value = false; // 无论成功或失败，都会执行
    })
  } catch (error) {
    console.error('登录失败:', error);
    isLoading.value = false
  }

}

</script>


<style scoped></style>