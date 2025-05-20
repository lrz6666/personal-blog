<template>
  <router-view v-if="route.path === '/login'" />
  <!-- 其他页面，渲染完整布局 -->
  <div v-else class="common-layout min-h-screen min-w-full">
    <el-container class="baseLayout">
      <SideMenu />
      <el-container class="flex flex-col">
        <HeadNav />
        <MainContent>
          <router-view />
        </MainContent>
      </el-container>
    </el-container>
  </div>
</template>


<script setup lang="ts">
import { onMounted } from 'vue';
import SideMenu from './components/sideMenu/SideMenu.vue';
import HeadNav from './components/headNav/HeadNav.vue';
import MainContent from './components/mainContent/MainContent.vue';
import LoginView from './views/LoginView.vue';
import { useRoute, useRouter } from 'vue-router'
import { verifyToken } from './api/users';
const router = useRouter()
const route = useRoute()
const accessToken = localStorage.getItem("access_token");

onMounted(() => {
  // 首次加载时检查是否在登录页
  // if (window.location.pathname !== '/login') {
  //   router.replace('/login');
  // }

  if (accessToken) {
    verifyToken({ accessToken })
      .then(response => {
        if (response.data.success) {
          // console.log("Token 有效:", response.data.message);
        } else {
          // console.error("Token 无效:", response.data.message);
          router.replace('/login');
          // 处理无效 Token，比如跳转到登录页
        }
      })
      .catch(error => {
        router.replace('/login');
        // console.error("请求错误:", error);
      });
  } else {
    router.replace('/login');
    // console.error("没有找到 access_token，请重新登录");
  }
});
</script>

<style scoped>
.baseLayout {
  height: 100vh;
}

.main-aside {
  background-color: #212f3d
}

.main-aside-menu {
  background-color: #212f3d;
}

.el-menu-item {
  color: #acb1b6;
}

.main-aside-menu .el-menu-item.is-active {
  background-color: #21283d;
  color: #fff;
}

.main-aside-menu .el-menu-item:hover {
  background-color: #21283d;
  color: #fff;
}

.aside-header {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  background-color: #212f3d;
  color: white;
}
</style>