<template>
    <el-dialog 
      v-model="newBlogFormStore.isVisible" 
      title="新增文章" 
      width="80%"
      class="rounded-lg shadow-xl"
    >
      <el-form :model="newBlog" class="space-y-6 p-6">
        <!-- 文章标题 -->
        <div class="flex items-center space-x-4">
          <span class="text-gray-700 font-medium w-20">文章标题</span>
          <el-input 
            v-model="input" 
            placeholder="请输入标题" 
            class="flex-1 max-w-md"
            clearable
          />
        </div>
  
        <!-- 分类和标签 -->
        <div class="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
          <div class="flex items-center space-x-4 flex-1">
            <span class="text-gray-700 font-medium w-20">分类</span>
            <el-select
              placeholder="选择分类"
              class="flex-1"
            >
            </el-select>
          </div>
          <div class="flex items-center space-x-4 flex-1">
            <span class="text-gray-700 font-medium w-20">标签</span>
            <el-select
              multiple
              placeholder="选择标签"
              class="flex-1"
            >
            </el-select>
          </div>
        </div>
  
        <!-- 关键词 -->
        <div class="flex items-center space-x-4">
          <span class="text-gray-700 font-medium w-20">关键词</span>
          <el-input 
            v-model="input" 
            placeholder="请输入关键字" 
            class="flex-1 max-w-md"
            clearable
          />
        </div>
  
        <!-- 文章内容 -->
        <div class="space-y-2">
          <span class="text-gray-700 font-medium block">文章内容</span>
          <div class="border border-gray-200 rounded-lg overflow-hidden">
            <TextEditor v-model="editorStore.editorContent" />
          </div>
        </div>
      </el-form>
  
      <template #footer>
        <div class="flex justify-end space-x-4 px-6 py-4 bg-gray-50 rounded-b-lg">
          <el-button 
            @click="newBlogFormStore.toggleVisible"
            class="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
          >
            取消
          </el-button>
          <el-button 
            type="primary" 
            class="px-6 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white transition-colors"
          >
            提交
          </el-button>
        </div>
      </template>
    </el-dialog>
  </template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useEditorStore } from '@/stores/useTextEditorStore'
import TextEditor from '@/components/mainContent/TextEditor/TextEditor.vue';
import { useNewBlogFormStore } from '@/stores/useNewBlogFormVisible';
const newBlogFormStore = useNewBlogFormStore()
const editorStore = useEditorStore();



const formLabelWidth = '140px'
const input = ref('')
const classifyValue = ref([])
const tagsValue = ref([])
const newBlog = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
})
</script>

<style scoped></style>