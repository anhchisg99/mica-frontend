<template>
  <div class="quotespopup" :class="{show:isShow}">
    
    <div class="quotespopup-container">
        <div class="quotespopup-heading">
            New Stuff

        </div>
        <div class="quotespopup-input">

            <input v-model="text_popup" >
        </div>
        <div class="quotespopup-button">

            <a @click="closePopup()" >Sign Up</a>
        </div>
        <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste recusandae expedita ratione quibusdam atque. Ipsum officia laudantium modi beatae consectetur suscipit molestiae sit dicta doloremque, quasi quae obcaecati odit sunt?</p> -->
    </div>
    


  </div>
</template>

<script>
export default {
    name:'Popup',
    data(){
        return {
            isShow:false,
            text_popup : ""
        }
    },
    methods:{
        closePopup(){
            console.log('close pop up active')
            this.$emit('changeQuotes',this.text_popup)
            return this.isShow = false
        }
    }
}
</script>

<style>

</style>