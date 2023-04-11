<template>
  <section class="carousel">
    <div class="carousel-main">
      <div class="carousel-container">
        <div class="carousel-left">
          <div class="carousel-content">

            <div class="carousel-desc">
              <p>những kỉ niệm đẹp trong từng khung hình</p>
              <p>
               chất liệu MICA trong suốt <br>
                cùng với công nghệ cắt laser tiên tiến <br>
                đã tạo nên một khung hình hoàn mỹ <br>
                <!-- Biểu tượng cho tình yêu vĩnh cửu -->
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
      window.scrollTo({ top: 0, behavior: 'smooth' });
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