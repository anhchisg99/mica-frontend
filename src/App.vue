<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  
  <Theme/>
  <div class="wrapper">
    
    <Header/>
    <!-- {{ this.$store.state.message }} -->
    <main>
      <!-- <Carousel/> -->
      <!-- <Categories/> -->
      <router-view></router-view>
      <Contacts/>
    </main>
    <Footer/>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Theme from './components/Theme.vue'
import Header from './components/Header.vue'
// import Carousel from './components/Carousel.vue'
// import Categories from './components/Categories.vue'
import Contacts from './components/Contacts.vue'
import Footer from './components/Footer.vue'
// import IndexMain from './components/IndexMain.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld
    Theme,
    Header,
    // Carousel,
    // Categories,
    Contacts,
    Footer,
    // IndexMain
  },
  mounted(){
    this.$store.commit('releasedPayment')
    this.$store.commit('updateCartFromLocalStorage')
    this.$store.commit('updateSecureUrlFromLocalStorage')

  }

}
</script>

<style lang="scss"> 
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
