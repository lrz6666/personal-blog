import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useEditorStore = defineStore('editor', () => {
  
  const editorContent = ref('');

  // 更新内容的方法
  const setEditorContent = (html: string) => {
    editorContent.value = html;
  };

  return {
    editorContent,
    setEditorContent,
  };
});