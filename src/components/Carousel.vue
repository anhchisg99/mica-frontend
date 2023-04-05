<template>
  <section class="carousel">
    <div class="carousel-main">
      <div class="carousel-container">
        <div class="carousel-left">
          <div class="carousel-content">

            <div class="carousel-desc">
              <p>những kỉ niệm đẹp trong từng khung hình</p>
              <p>
                Easy to use, fully customizable WordPress themes for heart–driven
                creatives and small businesses.
              </p>
            </div>
            <div class="carousel-button">
              <a @click="addToCart()" class="btn" > THÊM VÀO GIỎ </a>
            </div>
          </div>
        </div>
        <div class="carousel-right">
          <router-link :to="'/product/' + mainProduct._id">
          <div class="carousel-img">
            <img src="../assets/img-1.jpeg" alt="" />
          </div>
        </router-link>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import { mapMutations,mapState } from 'vuex'
export default {
  name:'Carousel',
  methods:{
    ...mapMutations([
      'addToCart'
    ]),
    async addToCart(){
      this.$store.commit("openPopup");
      this.$store.commit('addToCart',this.mainProduct)
    }
  },
  computed:{

    ...mapState(['mainProduct'])
  },
  mounted(){
    this.$store.dispatch('getMainProduct')
  }
};
</script>

<style>
</style>