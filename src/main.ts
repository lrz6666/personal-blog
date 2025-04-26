import { createApp } from 'vue'
import 'element-plus/dist/index.css'
import App from './App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import "./assets/main.css"
import router from './router'
// main.ts 或组件文件
import VMdEditor from '@kangc/v-md-editor';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import { createPinia } from 'pinia'


VMdEditor.use(vuepressTheme);
const app = createApp(App)
const pinia = createPinia()
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router)
app.use(pinia)
app.mount('#app')