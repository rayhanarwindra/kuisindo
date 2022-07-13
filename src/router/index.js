import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/question/:number",
    name: "question",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/QuestionView.vue"),
  },
  {
    path: "/result",
    name: "result",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ResultView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
