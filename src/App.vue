<template>
  <div class="common-layout min-h-screen min-w-full">
    <el-container class="baseLayout">
      <SideMenu />
      <el-container class="flex flex-col">
        <HeadNav ></HeadNav>
        <MainContent >
          <router-view/>
        </MainContent>
      </el-container>
      
    </el-container>
  </div>
</template>


<script setup lang="ts">
import SideMenu from './components/sideMenu/SideMenu.vue';
import HeadNav from './components/headNav/HeadNav.vue';
import MainContent from './components/mainContent/MainContent.vue';
import { useRoute,useRouter } from 'vue-router'
const router = useRouter()
const route = useRoute()
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