import { createRouter, createWebHistory } from "vue-router";
import store from "../store";

import MainLayout from "../views/layout/MainLayout.vue";
import DashboardView from "../views/DashboardView.vue";
import DaftarRekamanView from "../views/DaftarRekamanView.vue";
import DaftarPenggunaView from "../views/DaftarPenggunaView.vue";
import FormIso from "../views/FormIso.vue";
import FormSmk from "../views/FormSmk.vue";
import FormArsip from "../views/FormArsip.vue";
import LoginView from "../views/LoginView.vue";

const routes = [
  {
    name: "main",
    component: MainLayout,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: DashboardView,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/input",
        name: "Input Dokumen",
        meta: {
          requiresAuth: true,
        },
        children: [
          {
            path: "/input/dok-iso",
            name: "Input Dokumen ISO9001",
            component: FormIso,
            meta: {
              requiresAuth: true,
            },
          },
          {
            path: "/input/dok-smk3",
            name: "Input Dokumen SMK3",
            component: FormSmk,
            meta: {
              requiresAuth: true,
            },
          },
          {
            path: "/input/dok-arsip",
            name: "Input Dokumen ARSIP",
            component: FormArsip,
            meta: {
              requiresAuth: true,
            },
          },
        ],
      },
      {
        path: "/daftar-rekaman",
        name: "daftar rekaman",
        component: DaftarRekamanView,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/daftar-pengguna",
        name: "daftar pengguna",
        component: DaftarPenggunaView,
        meta: {
          requiresAuth: true,
        },
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: {
      requireAuth: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem("user");
  // console.log(loggedIn);
  if (to.meta.requiresAuth && !loggedIn ) {
    next("/login");
  } 
  else {
    // this.store.dispatch("auth/token");
    next();
    // console.log(this.store.state.app.name);
  }
  if (to.meta.requiresAuth && loggedIn) {
    
  }
  
});

export default router;
