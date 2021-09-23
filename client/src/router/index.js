import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import AddPostPage from "../views/AddPostPage.vue";
import EnjoyMusicPage from "../views/EnjoyMusicPage.vue";
import CommentPage from "../views/CommentPage.vue";
import NotFoundPage from "../views/NotFoundPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("access_token")) {
        next({ name: 'Home'})
      } else {
        next()
      }
    }
  },
  {
    path: "/register",
    name: "RegisterPage",
    component: RegisterPage,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("access_token")) {
        next({ name: 'Home'})
      } else {
        next()
      }
    }
  },
  {
    path: "/add-post",
    name: "AddPostPage",
    component: AddPostPage,
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem("access_token")) {
        next({ name: 'LoginPage'})
      } else {
        next()
      }
    }
  },
  {
    path: "/enjoy-music",
    name: "EnjoyMusicPage",
    component: EnjoyMusicPage,
  },
  {
    path: "/comment/:id",
    name: "CommentPage",
    component: CommentPage,
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem("access_token")) {
        next({ name: 'LoginPage'})
      } else {
        next()
      }
    }
  },
  {
    path: "*",
    component: NotFoundPage,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
