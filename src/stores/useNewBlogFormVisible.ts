import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useNewBlogFormStore = defineStore('newBlogForm', () => {
  const isVisible = ref(false);

  // 切换显示状态
  const toggleVisible = () => {
    isVisible.value = !isVisible.value;
  };
  return {
    isVisible,
    toggleVisible,
  };
});