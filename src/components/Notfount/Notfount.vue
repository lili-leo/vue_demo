<template>

  <div>
    <div class="error">
      <img class="img" src="./images/404.jpg" alt="">
    </div>

  </div>
</template>

<script>
  export default {
    data(){
      return{

      }
    },
    mounted(){
      // console.log(123);  //js视口高度
      let w =document.body.clientWidth;
      let h = document.body.clientHeight;
      var dom = document.querySelector(".img");
      dom.style.width=w + "px";
      dom.style.height=h + "px";
      //console.log(555);
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .error
    width 100%
    height 100%



</style>
