<template>
    <div class="h-[5%] bg-white flex  justify-between items-center border-b-[1px] border-gray-200">
        <span class="px-[1rem]">{{ currentPageTitle }}</span>
        <div class="flex justify-center items-center h-full cursor-pointer">
            <div class="isHover h-full flex justify-center items-center p-[2px] aspect-square" @click="toggleFullScreen">
                <el-icon size="20px">
                    <FullScreen />
                </el-icon>
            </div>
            <div class="isHover h-full flex justify-center items-center p-[1rem] cursor-pointer gap-[0.5rem]">
                <el-avatar class="isHover " src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                <span>小明</span>
            </div>
            <div class="isHover h-full flex justify-center items-center p-[2px] aspect-square cursor-pointer">
                <el-icon size="20px" >
                    <Setting />
                </el-icon>
            </div>




        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { UserFilled } from '@element-plus/icons-vue'
const route = useRoute()
const currentPageTitle = computed(() => route.meta.title || '')
//全屏效果

const toggleFullScreen = ()=>{
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.error('全屏失败:', err);
        });
    } else {
        document.exitFullscreen();
    }
}
</script>

<style scoped>
.isHover:hover {
    background-color:rgba(128, 128, 128, 0.226);
}
</style>