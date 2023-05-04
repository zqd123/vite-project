import Home from "../views/Home.vue";
import About from "../views/About.vue";
import type { RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "second",
  },
  {
    path: "/first",
    name: "home",
    component: () => import("../views/first-test/index.vue"),
    redirect: "login",
    children: [
      {
        path: "/login",
        name: "login",
        component: () => import("../views/first-test/Login.vue"),
      },
      {
        path: "/guidance",
        name: "guidance",
        component: () => import("../views/first-test/Guidance.vue"),
      },
      {
        path: "/welcome",
        name: "welcome",
        component: () => import("../views/first-test/Welcome.vue"),
      },
      {
        path: "/test1-loading",
        name: "test1-loading",
        component: () => import("../views/first-test/TestPage.vue"),
      },
    ],
  },
  {
    path: "/second",
    name: "second",
    redirect: "test2-1",
    children: [
      {
        path: "/test2-1",
        name: "test2-1",
        component: () => import("../views/second-test/Question.vue"),
      },
    ],
  },
];

export default routes;
