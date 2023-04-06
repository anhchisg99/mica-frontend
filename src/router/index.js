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
    name: "IndexMain",
    component: IndexMain,
  },
  {
    path: "/product/:id",
    name: "IndexProduct",
    component: IndexProduct,
  },
  {
    path: "/empty-cart",
    name: "EmptyCart",
    component: EmptyCart
  },
  {
    path: "/cart",
    name: "IndexCart",
    component: IndexCart
  },
  {
    path: "/payment",
    name: "Payment",
    component: Payment,
    beforeEnter: (to, from, next) => {
      if (store.getters['isItem'] != 0) {
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



export default router
