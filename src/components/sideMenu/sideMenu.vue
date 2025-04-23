<template>
    <div className=" relative bg-[#212f3d] ">
            <el-aside :style="{width: showText ? '200px' : '64px'}" className="transition-all duration-300 overflow-hidden flex flex-col h-full">
                <el-header class="aside-header h-[5%]" >
                    <el-icon>
                        <Platform />
                    </el-icon>
                    <span v-show="showText" className="whitespace-nowrap">&ensp;博客管理系统</span>
                </el-header>
                <el-menu class="main-aside-menu h-[95%]">
                    <el-menu-item index="1" class="el-menu-item m-[0.25rem]" >
                        <el-icon>
                            <HomeFilled />
                        </el-icon>
                        <template #title>
                            <span v-show="showText">首页</span>
                        </template>
                    </el-menu-item>
                    <el-menu-item index="2" class="el-menu-item m-[0.25rem]" >
                        <el-icon>
                            <User />
                        </el-icon>
                        <template #title>
                            <span v-show="showText">用户管理</span>
                        </template>
                    </el-menu-item>
                    <el-menu-item index="3" class="el-menu-item m-[0.25rem]" >
                        <el-icon >
                            <Document />
                        </el-icon>
                        <template #title>
                            <span v-show="showText">博客管理</span>
                        </template>
                    </el-menu-item>
                </el-menu>
            </el-aside>
        <div className=" absolute top-1/2 -translate-y-1/2 -right-0 translate-x-1/2 bg-gray-200 rounded-sm cursor-pointer"
            @click="showText = !showText">
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
    border: 0;
}

.el-menu-item {
    display: block;
    color: #acb1b6;
    font-size: 18px;
    border-radius: 0.5rem;
    
    
    
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