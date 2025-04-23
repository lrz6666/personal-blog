<template>
  <div class="common-layout min-h-screen min-w-full">
    <el-container class="baseLayout">
      <sideMenu />
      <el-container class="flex flex-col">
        <headNav ></headNav>
        <mainContent ></mainContent>
      </el-container>
      
    </el-container>
  </div>
</template>


<script setup lang="ts">
import sideMenu from './components/sideMenu/sideMenu.vue';
import headNav from './components/headNav/headNav.vue';
import mainContent from './components/mainContent/mainContent.vue';
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