<template>
  <section class="product">
    <div class="product-container">
      <div class="product-left">
        <router-link to="/">

          <div class="product-back">
            <div class="">
              <ion-icon name="arrow-undo-outline"></ion-icon>
            </div>
            <div class="">
              <p>Trở về cửa hàng</p>
            </div>
          </div>
        </router-link>
        <div class="product-img">
          <img :src="product.image" alt="" />
        </div>
      </div>
      <div class="product-right">
        <div class="product-content">
          <p class="product-price">{{ product.price }}</p>
          <h2 class="product-heading">{{ product.name }}</h2>
          <div class="product-desc" v-if="product.description">
            {{ product.description }}
          </div>
          <div class="product-desc" v-else>nothing in here</div>
          <div class="product-btn">
            <div class="demo-btn">
              <a @click="gotoCart()" class="btn">thanh toán</a>
            </div>
            <div class="cart-btn">
              <a class="btn" @click="addToCart()">thêm vào giỏ </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import {mapState} from 'vuex'
import { mapMutations, mapState } from "vuex";
export default {
  name: "Product",
  props: ["product"],

  computed: {
    ...mapState(['cart'])
  },
  methods: {
    
    async addToCart() {
      // let { quantity } = this.inventory;

      this.$store.commit("openPopup");
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.$store.commit("addToCart", this.product);
    },
    
    
    async gotoCart() {
      if (this.checkIteminCart) {
        this.$router.push({ path: "/cart" });
        
      } else {
        let isItemInCart = this.cart.find(i=>i._id === this.product._id)
        if(isItemInCart){
        this.$router.push({ path: "/cart" });
          
        }else{
          this.$store.commit("openPopup");
          this.$store.commit("addToCart", this.product);
          this.$router.push({ path: "/cart" });
        }
       

      }
      
    },
  },
  
};
</script>

<style></style>