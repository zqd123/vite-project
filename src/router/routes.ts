import Home from "../views/Home.vue";
import About from "../views/About.vue";
import type { RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "first",
  },
  {
    path: "/first",
    name: "home",
    component: () => import("../views/first-test/index.vue"),
    redirect: "welcome",
    children: [
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
  { path: "/seconde", name: "about", component: About },
];

export default routes;
