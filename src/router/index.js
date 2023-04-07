import { createRouter, createWebHistory } from "vue-router";


import IndexMain from "../components/IndexMain.vue";
import IndexProduct from "../components/IndexProduct.vue";
import EmptyCart from '../components/EmptyCart.vue'
import IndexCart from '../components/IndexCart.vue'
import Payment from '../components/Payment.vue'
import Test from '../components/Test.vue'
import Success from '../components/Success.vue'

// import store 
import store from '../store/index.js'


const routes = [
  {
    path: "/",
    name: "Trang Chủ",
    component: IndexMain,
  },
  {
    path: "/product/:id",
    name: "Sản Phẩm",
    component: IndexProduct,
  },
  {
    path: "/empty-cart",
    name: "Giỏ Hàng",
    component: EmptyCart
  },
  {
    path: "/cart",
    name: "Giỏ Hàng",
    component: IndexCart
  },
  {
    path: "/payment",
    name: "Thanh Toán",
    component: Payment,
    meta: { transition: 'slide-left' },
    beforeEnter: (to, from, next) => {
      if (store.getters['isItem'] != 0 && store.state['secure_url'] != '') {
        next()
      } else {
        next('/')
      }
    }
  },
  {
    path: "/test",
    name: "Test",
    component: Test
  },
  {
    path: "/success",
    name: "Success",
    component: Success,
    beforeEnter: (to, from, next) => {
      if (store.state['isPayment'] == true) {
        next()
      } else {
        next('/')
      }
    }
  },

];



const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
});


router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    NProgress.start()
  }
  next()
})

// How to change page titles when using vue-router?
router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})
export default router
