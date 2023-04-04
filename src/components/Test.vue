<template>
  <div class="test">

    <Popup ref="Popup"/>
    <button @click="turnonPopup" >
      click me
    </button>
  </div>
</template>

<script>
import Popup from './Popup.vue'

export default {
  components:{
    Popup
  },
  data(){
    return{
      isShow:true
    }
  },
  methods:{
    turnonPopup(){
      console.log(this.$refs.Popup.isShow)
      return this.$refs.Popup.isShow = true
    }
  }
};
</script>

<style>
</style>