<template>
  <Product :product="product"/>
  <Features :product="product"/>
</template>

<script>
import Product from "./Product.vue";
import Features from "./Features.vue";
import { mapState } from "vuex";

export default {

  components: {
    Product,

    Features,
  },
  computed: mapState(["product"]),
  // mounted() {
  //   let product_id = this.$route.params.id;
  //   console.log("running...");
  //   this.$store.dispatch("getperProduct", product_id);
  // },
  watch: {
    "$route.params.id": {
      handler: function (param) {
        this.$store.dispatch('getperProduct',param)
        // this.$store.dispatch('product/getPerProduct',param)
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style>
</style>