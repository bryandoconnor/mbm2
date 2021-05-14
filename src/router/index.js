import {
  createWebHistory,
  createRouter
} from "vue-router";
import Index from "../components/Index.vue";
import Mbm from "../components/Mbm.vue";
import Resources from "../components/Resources.vue";
import Contest from "../components/Contest.vue";
import Contact from "../components/Contact.vue";
import About from "../components/About.vue";
import Cart from "../components/Cart.vue";
import Email from "../components/Email.vue";
import FourOhFour from "../components/404.vue";

const routes = [{
    path: "/",
    name: "Home",
    component: Index,
  },
  {
    path: "/mbm",
    name: "Mbm",
    component: Mbm,
  },
  {
    path: "/resources",
    name: "Resources",
    component: Resources,
  },
  {
    path: "/contest",
    name: "Contest",
    component: Contest,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/email",
    name: "Email",
    component: Email,
  },
  {
    path: "/:catchAll(.*)",
    component: FourOhFour,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;