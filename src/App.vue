<template>
  <div class="common-layout ">
    <el-container class="baseLayout">
      <el-aside width="200px" >
        <el-scrollbar>
          <el-menu >
            <el-menu-item index="1">
              <template #title>
                <span>Navigator One</span>
              </template>
            </el-menu-item>
            <el-menu-item index="2">
              <template #title>
                <span>Navigator One</span>
              </template>
            </el-menu-item>
            <el-menu-item index="3">
              <template #title>
                <span>Navigator One</span>
              </template>
            </el-menu-item>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-container>
        <el-header style="background-color: yellow;">Header</el-header>
        <el-main style="background-color: green;">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script setup lang="ts">

</script>

<style scoped>
.baseLayout {
  height: 100vh;
}
</style>