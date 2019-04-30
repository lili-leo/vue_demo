<template>
  <div id="app">
    <Header v-show="$route.meta.isShowheader" @shoulogn="shoulogn"></Header>
    <Login class="logns" v-if="shouLogo" @shoulogn="shoulogn"></Login>
    <div class="zhi" v-if="shouLogo"></div>

    <router-view></router-view>    <!--显示路由-->

   <!-- <Footer v-show="$route.meta.isShow"></Footer>-->
    <Footer v-show="$route.meta.isShow"></Footer>
  </div>
</template>

<script>

  import Footer from "./components/Footer/Footer.vue"
  import Header from "./components/Header/Header.vue"
  import Login from './pages/Login/Login'
  export default {

    data(){
      return{
        shouLogo:false,
      }
    },
    methods:{

      shoulogn(val){
        this.shouLogo = val
      },
    },
    components:{
      Footer,
      Header,
      Login
    }
  }
</script>

<style scoped lang="stylus">

  .logns
    position fixed
    z-index 10000
  .zhi
    width: 100%
    height: 100%
    background-color #000
    position fixed
    opacity 0.5
    top: 0
    z-index:100
</style>
