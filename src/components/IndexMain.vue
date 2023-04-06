<template>
  <Carousel />
  <Categories :products="products"/>
  <Quotes/>
</template>

<script>
import Carousel from "./Carousel.vue";
import Categories from "./Categories.vue";
import Quotes from './Quotes.vue'
import { mapState } from "vuex";

export default {
  components: {
    Carousel,
    Categories,
    Quotes
  },
  data(){
    return {
    }
  },
  computed:{
    ...mapState(['products'])
  },
  async mounted(){
    this.$store.dispatch('getProduct')
    // this.$store.commit('getProduct')
  },
  
};
</script>

<style>
</style>