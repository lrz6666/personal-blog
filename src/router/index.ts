import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import UserManageView from "@/views/UserManageView.vue";
import BlogManageView from "@/views/BlogManageView.vue";
import component from "element-plus/es/components/tree-select/src/tree-select-option.mjs";
import LoginView from "@/views/LoginView.vue";
import { verifyToken } from "@/api/users";
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

  //路由守卫验证token与刷新token
  router.beforeEach(async (to, from, next) => {
  const accessToken = localStorage.getItem('access_token');

  // 如果目标路由是登录页，直接放行
  if (to.path === '/login') {
    next();
    return;
  }

  // 验证 access_token
  if (accessToken) {
    try {
      const response = await verifyToken({ accessToken });
      if (response.data.success) {
        next(); // Token 有效，继续跳转
      } else {
        next('/login'); // Token 无效，跳转到登录页
      }
    } catch (error) {
      next('/login'); // 验证错误时跳转
    }
  } else {
    next('/login'); // 没有 Token 时跳转到登录页
  }
});

  export default router