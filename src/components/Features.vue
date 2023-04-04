<template>
  <section class="features">
                <div class="features-container">
                    <div class="features-content">

                        <div class="features-heading">
                            ĐẶC ĐIỂM / TÍNH NĂNG
                        </div>
                        <ul v-if="isFeature" class="features-desc" >
                            <li v-for="(feature,index) in product.features" :key="index"><span><ion-icon name="checkmark-outline"></ion-icon></span>
                                        
                             {{feature}}
                                    </li>
                        </ul>
                        <ul v-else class="features-desc">
                            <li>nothing in here</li>

                        </ul>
                    </div>
                </div>
            </section>
</template>

<script>
export default {
  name: "Features",
  props:['product'],
  data(){
    return{
        // isFeature:true
    }

  },
  computed:{
    isFeature(){
        return this.product.features.length ===0 ? false : true
    }
  }
};
</script>

<style>
</style>