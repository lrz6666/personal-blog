<template>
    <div class="h-full">
        <el-card class="h-full">
            <div class="h-full flex flex-col">
                <!-- 顶部区域 -->
                <div class="h-[10%] flex flex-col border-b">
                    <!-- 标题、分类、标签 -->
                    <div class="flex-1 flex items-center justify-between gap-4 p-2">
                        <div class="flex items-center gap-4">
                            <span>文章标题</span>
                            <el-input v-model="input" placeholder="请输入标题" style="width: 240px" />
                            <span>分类</span>
                            <el-select-v2 v-model="classifyValue" :options="category" placeholder="选择分类"
                                style="width: 240px" />
                            <span>标签</span>
                            <el-select-v2 v-model="tagsValue" :options="tags" placeholder="选择标签" style="width: 240px"
                                multiple collapse-tags />
                        </div>
                        <div class="flex gap-2">
                            <el-button type="primary">搜索</el-button>
                            <el-button>重置</el-button>
                        </div>
                    </div>

                    <!-- 操作按钮 -->
                    <div class="flex-1 flex items-center p-2 gap-2">
                        <el-button type="primary" plain @click="newBlogFormStore.toggleVisible">新增</el-button>
                        <el-button type="danger" plain :disabled="selectedArticlesUUID.length === 0" @click="deleteSelectedRows">批量删除</el-button>
                    </div>
                </div>

                <!-- 内容区域 -->
                <div class="h-[90%] p-4 overflow-auto">
                    <!-- 博客编辑区 -->
                    <el-table ref="multipleTableRef" :data="articleData" stripe style="width: 100%"
                        :row-style="{ height: '100px' }"
                        @selection-change="handleSelectionChange">
                        <el-table-column type="selection" width="180" header-align="center" align="center" />
                        <el-table-column prop="title" label="标题" width="180" class-name=" text-blue-500"
                            header-align="center" align="center" />
                        <el-table-column prop="category" label="分类" width="180" header-align="center" align="center" />
                        <el-table-column prop="tags" label="标签" header-align="center" align="center" />
                        <el-table-column prop="clicks" label="点击量" header-align="center" align="center" />
                        <el-table-column prop="date" label="创建时间" header-align="center" align="center" />
                        <el-table-column label="操作" width="180" fixed="right" header-align="center">
                            <template #default="{ row }">
                                <div class="flex justify-center items-center">
                                    <el-button size="large" type="primary" plain>
                                        <el-icon>
                                            <EditPen />
                                        </el-icon>
                                    </el-button>
                                    <el-button size="large" type="danger" @click="deleteOneArticle(row.uuid)">
                                        <el-icon>
                                            <Delete />
                                        </el-icon>
                                    </el-button>
                                </div>

                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </el-card>
        <NewBlogForm v-model="newBlogFormStore.isVisible" />
    </div>
</template>

<script setup lang="ts">
import { ref, } from 'vue'
import NewBlogForm from '@/components/mainContent/NewBlogForm.vue/NewBlogForm.vue';
import { useNewBlogFormStore } from '@/stores/useNewBlogFormVisible';
import { v4 as uuidv4 } from 'uuid'
const newBlogFormStore = useNewBlogFormStore()
//分类
const category = [
    { value: 'font-end', label: '前端' },
    { value: 'back-end', label: '后端' },
];
//标签
const tags = ref([
    { value: 'Vue', label: 'Vue' },
    { value: 'React', label: 'React' },
    { value: 'SpringBoot', label: 'SpringBoot' },
    { value: 'CSS', label: 'CSS' }
]);
//初始值设置
const input = ref('')
const classifyValue = ref([])
const tagsValue = ref([])
//博客数据
const articleData = ref([
    { uuid: '1', date: '2016-05-03', category: 'Tom', tags: 'No. 189, Grove St, Los Angeles', title: 'vue百科全书' },
    { uuid: '2', date: '2016-05-03', category: 'Tom', tags: 'No. 189, Grove St, Los Angeles', title: 'vue百科全书' },
    { uuid: '3', date: '2016-05-03', category: 'Tom', tags: 'No. 189, Grove St, Los Angeles', title: 'vue百科全书' },
]);
//储存多选选中的博客文章页面
const selectedArticlesUUID = ref<string[]>([]); 
//实现批量删除
const deleteSelectedRows = () => {
      articleData.value = articleData.value.filter(
        (article) => !selectedArticlesUUID.value.includes(article.uuid)
      );
      // 清空选中状态
      selectedArticlesUUID.value = []; 
};
//监听选择变化
const handleSelectionChange =(rows:any)=>{
    selectedArticlesUUID.value = rows.map((row:any)=>row.uuid)
}
// 删除文章
const deleteOneArticle = (id:string) => {
    articleData.value = articleData.value.filter(article => article.uuid !== id);
};


</script>
<style scoped></style>