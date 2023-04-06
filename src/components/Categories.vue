<template>
  <section class="categories">
    <div class="categories-container">
      <div class="categories-heading">
        <p>Bạn muốn lưu giữ kỉ niệm gì cho cả hai</p>
      </div>
      <div class="categories-products">
          
            <div class="categories-product" v-for="(product, index) in products" :key="index">
        <Transition>

              <router-link :to="'/product/' + product._id">
                <div class="categories-product-img">
                  <img v-bind:src="product.image" alt="" />
                </div>
                <div class="categories-product-heading">
                  <p>{{ product.name }}</p>
                </div>
                <div class="categories-product-btn">
                  <router-link :to="'/product/' + product._id">
                    <a class="btn">Xem Chi Tiết</a></router-link>
                </div>
              </router-link>
        </Transition>

            </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Categories",
  components: {

  },
  data() {
    return {
      // loading: false
    }
  },
  props: ["products"],
};
</script>

<style></style>