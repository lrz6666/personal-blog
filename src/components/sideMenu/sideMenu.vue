<template>
    <div className=" relative bg-[#212f3d]">
        <el-aside  width="400px">
            <el-menu :collapse="!showText" class="main-aside-menu h-full" >
                <el-header  class="aside-header" height="60px">
                    <el-icon>
                        <Platform />
                    </el-icon>
                    <span v-show="showText" className="whitespace-nowrap">&ensp;博客管理系统</span>
                </el-header>
                <el-menu-item index="1" class="el-menu-item">
                    <el-icon>
                        <HomeFilled />
                    </el-icon>
                    <template #title>
                        <span >首页</span>
                    </template>
                </el-menu-item>
                <el-menu-item index="2" class="el-menu-item">
                    <el-icon>
                        <User />
                    </el-icon>
                    <template #title>
                        <span >用户管理</span>
                    </template>
                </el-menu-item>
                <el-menu-item index="3" class="el-menu-item">
                    <el-icon>
                        <Document />
                    </el-icon>
                    <template #title>
                        <span >博客管理</span>
                    </template>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <div className=" absolute top-1/2 -translate-y-1/2 -right-0 translate-x-1/2 bg-white rounded-sm "
            @click="showText =!showText">
            <el-icon size="40px" color='black' v-show="showText">
                <Fold />
            </el-icon>
            <el-icon size="40px" color='black' v-show="!showText">
                <Expand />
            </el-icon>
        </div>
    </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';
let showText = ref(true)
const asideWidth = ref('')


</script>

<style scoped>
.main-aside {
    background-color: #212f3d
}

.main-aside-menu {
    background-color: #212f3d;
}

.el-menu-item {
    color: #acb1b6;
    font-size: 18px;
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
    justify-content: baseline;
    font-size: 18px;
    font-weight: bold;
    background-color: #212f3d;
    color: white;
}
</style>