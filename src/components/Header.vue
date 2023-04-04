<template>
  <header>
    <div class="header">
      <div class="header-container">
        <router-link to="/">
          <div><ion-icon name="heart-half-outline"></ion-icon></div
        ></router-link>

        <router-link to="/"><h1>Hearten Made Logo</h1> </router-link>
        <div class="header-icon">
          <div to="/cart" class="popup bell-icon">
            <router-link to="/cart" @click="closePopup()">
              <span class="icon" >
                <ion-icon class="icon-cart" name="cart-outline"></ion-icon>
              </span>
              <span class=""> {{ totalQuantity }} </span>
            </router-link>
            <span class="popuptext" :class="{ show: this.isPopup }" id="myPopup"
              > thêm vào giỏ thành công </span
            >
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "Header",
  data(){
    return{
    }
  },
  computed: {
    ...mapState(["isPopup"]),
    // ...mapState(['totalQuantity']),
    ...mapGetters(["totalQuantity"]),
  },
  methods: {
    closePopup() {
      console.log('close popup active')
      return this.$store.commit('closePopup')
    },
  },

};
</script>

<style>
</style>