import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import UserManageView from "@/views/UserManageView.vue";
import BlogManageView from "@/views/BlogManageView.vue";
import component from "element-plus/es/components/tree-select/src/tree-select-option.mjs";
import LoginView from "@/views/LoginView.vue";

const routes = [
    { path: '/login', name:'Login',component: LoginView, meta:{ requiresAuth: false}},
    { 
        path: '/', 
        component: HomeView,
        meta: { title: '首页',requiresAuth: true },
        children: [
            { path: 'userMange',name:'UserMange', component: UserManageView, meta: { title: '用户管理页' } },
            { path: 'blogMange',name:'BlogMange', component: BlogManageView, meta: { title: '博客管理页' } },
        ] 
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  export default router