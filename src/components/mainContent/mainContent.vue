<template>
    <div className="h-[95%] bg-gray-300">
        <el-tabs v-model="activeTab" type="card" closable active-class="active-tab" @tab-remove="removeTab"
            @tab-click="handleTabClick">
            <el-tab-pane v-for="tab in tabs" :key="tab.path" :label="tab.title" :name="tab.path">
            </el-tab-pane>
        </el-tabs>
        <div>
            <router-view />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

// 标签页数据
const tabs = ref([
    { title: '首页', path: '/' }
])

// 当前激活的标签页
const activeTab = ref('/')

// 监听路由变化，添加新标签页
watch(() => route.path, (newPath) => {
    if (!tabs.value.some(tab => tab.path === newPath)) {
        tabs.value.push({
            title: route.meta.title || '未命名',
            path: newPath
        })
    }
    activeTab.value = newPath
}, { immediate: true })

// 点击标签页切换路由
const handleTabClick = (tab) => {
    router.push(tab.props.name)
}

// 关闭标签页
const removeTab = (targetPath) => {
    const index = tabs.value.findIndex(tab => tab.path === targetPath)
    tabs.value.splice(index, 1)

    // 如果关闭的是当前激活的标签页，跳转到前一个标签页
    if (targetPath === activeTab.value) {
        const lastTab = tabs.value[tabs.value.length - 1]
        router.push(lastTab?.path || '/')
    }
}
</script>

<style>
/* 自定义标签页整体样式 */
.el-tabs {
    --el-tabs-header-height: 40px;
    /* 调整标签栏高度 */
}

.el-tabs__nav {
    border: 0px !important;
}

.el-tabs__nav-wrap {
    margin-bottom: -4px !important;
}

/* 自定义标签项样式 */
.el-tabs__item {
    padding: 0 20px !important;
    height: 36px !important;
    line-height: 36px !important;
    font-size: 14px;
    transition: all 0.3s;
}

/* 激活标签样式 */
.el-tabs__item.is-active {
    color: #1890ff;
    background-color: #f0f7ff;
    border-bottom-color: #1890ff !important;
}

/* 悬停效果 */
.el-tabs__item:hover {
    color: #1890ff;
}

/* 关闭按钮样式 */
.el-tabs__item .el-icon-close {
    width: 14px;
    height: 14px;
    margin-left: 4px;
}

/* 自定义卡片式标签样式 */
.el-tabs--card>.el-tabs__header .el-tabs__item {
    border: 1px solid #e6e6e6;
    border-radius: 4px 4px 0 0;
    margin-right: 4px;
    background: #f5f5f5;
}

.el-tabs--card>.el-tabs__header .el-tabs__item.is-active {
    background: #fff;
    border-radius: 2px;
    border-bottom-color: #1890ff !important;

}
</style>