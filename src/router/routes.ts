import type { RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "first",
  },
  {
    path: "/first",
    name: "home",
    redirect: "/first/login",
    children: [
      {
        path: "login",
        name: "firstLogin",
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
    path: "/seconde",
    name: "seconde",
    redirect: "/seconde/login",
    children: [
      {
        path: "login",
        name: "secondeLogin",
        component: () => import("../views/second-test/Login.vue"),
        props: true,
      },
      {
        path: "guidance",
        name: "secondeGuidance",
        component: () => import("../views/second-test/Guidance.vue"),
      },
      {
        path: "test2",
        name: "test2",
        component: () => import("../views/second-test/index.vue"),
        props: (route) => ({ query: route.query }),
      },
      {
        path: "endTest",
        name: "endTest",
        component: () => import("../views/second-test/endTest.vue"),
        props: true,
      },
    ],
  },
];

export default routes;
