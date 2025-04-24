import { createRouter, createWebHistory } from "vue-router";
import homeView from "@/views/HomeView.vue";
import UserManageView from "@/views/UserManageView.vue";
import BlogManageView from "@/views/BlogManageView.vue";
const routes = [
    { path: '/', component: homeView,meta: { title: '首页' } },
    { path: '/userMange', component: UserManageView,meta: { title: '用户管理页' } },
    { path: '/BlogMange', component: BlogManageView,meta: { title: '博客管理页' } },
  ]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  export default router