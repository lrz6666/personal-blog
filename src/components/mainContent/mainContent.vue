<template>
    <div className="h-[95%] flex flex-col">
        <el-tabs v-model="activeTab" type="card" editable class="hide-add-button" @tab-remove="removeTab" @tab-click="handleTabClick">
            <el-tab-pane v-for="tab in tabs" :key="tab.path" :label="tab.title" :name="tab.path">
            </el-tab-pane>
        </el-tabs>
        <div className=" p-[1rem] flex-1 bg-gray-100">
                <router-view />

        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
interface Tab {
    props: {
        name: string       // 路由路径
        label: string      // 显示标签
        closable: boolean  // 是否可关闭
        disabled: boolean  // 是否禁用
        lazy: boolean      // 是否懒加载
    }
}
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
            title: (route.meta.title as string) || '未命名',
            path: newPath
        })
    }
    activeTab.value = newPath
}, { immediate: true })

// 点击标签页切换路由
const handleTabClick = (tab: Tab) => {
    router.push(tab.props.name)
}

// 关闭标签页
const removeTab = (targetPath: string) => {
    const index = tabs.value.findIndex(tab => tab.path === targetPath)
    tabs.value.splice(index, 1)
    // 如果关闭的是当前激活的标签页，跳转到前一个标签页
    if (targetPath === activeTab.value) {
        const lastTab = tabs.value[tabs.value.length - 1]
        router.push(lastTab?.path || '/')
    }
}
</script>

<style scoped>
.el-tabs{
    background-color:white ;
}
.hide-add-button :deep(.el-tabs__new-tab) {
  display: none !important;
}
:deep(.el-tabs__header) {
    margin: 0 !important;
}
</style>