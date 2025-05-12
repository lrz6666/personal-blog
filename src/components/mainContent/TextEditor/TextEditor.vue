<template>
    <div style="border: 1px solid #ccc">
        <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig"
            :mode="mode" />
        <Editor style="height: 500px; overflow-y: hidden;" v-model="editorContent"
            :defaultConfig="editorConfig" :mode="mode" @onCreated="handleCreated" />
    </div>
</template>

<script setup lang="ts">
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { useEditorStore, customInsert } from '@/stores/useTextEditorStore'



// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()

// 内容 HTML
const editorStore = useEditorStore();


// // 模拟 ajax 异步获取内容
// onMounted(() => {
//   setTimeout(() => {
//     valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>'
//   }, 1500)
// })

const toolbarConfig = {}
const editorConfig = {
    MENU_CONF: {
        uploadImage: {
            server: '/api/upload',
            fieldName: 'file',
            maxFileSize: 5 * 1024 * 1024,
            allowedFileTypes: ['image/jpeg', 'image/png'],
            // 添加必要回调函数 ↓
            customInsert(res: any, insertFn: any) {
                if (res.errno === 0 && res.data?.[0]?.url) {
                    insertFn(res.data[0].url)
                }
            }
        }
    },
    placeholder: '请输入内容...'
}

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
    const editor = editorRef.value
    if (editor == null) return
    editor.destroy()
})

const handleCreated = (editor: any) => {
    editorRef.value = editor // 记录 editor 实例，重要！
    // 监听编辑器内容变化
    editor.on('change', () => {
        const html = editor.getHtml();
        editorStore.setEditorContent(html); // 第一时间更新 Pinia
    });
}

</script>

<style scoped></style>