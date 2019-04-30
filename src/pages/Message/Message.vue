<template>
  <div style="background-color: #f5f5f5">

   <div class="wrap-one">
     <div class="wrap-three">
       <div class="message-wrap">
         <div class="middle">
           <h1>新闻资讯</h1>
           <p>秉持着坚持创意,实用,优质至上的理念,项目分布在中国许多重要城市,</p>
           <p class="p-zuo">以现代主义精神与热情为设计注入完美无瑕的风格和创新能量.</p>
         </div>
       </div>

     </div>
   </div>

    <div class="top-wrap">
      <div class="contain">
        <div class="back-img">
          <div class="center">
            <span><router-link :to="'/all'">全部</router-link></span>
            <span class="sign-one"> <router-link :to="'/firm'">企业资讯</router-link> </span>
            <span class="sign-two"> <router-link :to="'/industry'">行业资讯</router-link></span>
          </div>
        </div>

      </div>

    </div>
    <router-view></router-view>
    <!--显示子路由-->


  </div>
</template>

<script>
    export default {

    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .wrap-three
      width: 100%
      .message-wrap
        width 100%
        height 300px
        background-color #323232
        position relative
        .middle
          width 500px
          height 100px
          margin auto
          position absolute
          top -60px
          left 0
          bottom 0
          right 0
          /*background-color silver*/
          h1
            font-size 20px
            text-align center
            color #fff
          p
            margin-top 20px
            color #fff
          .p-zuo
            margin-left 20px
  .top-wrap
    background #F5F5F5
    margin-top: 30px
    .contain
      width: 91%;
      background-color: #f5f5f5;
      margin: 0 155px 4px auto;
      position: relative;
      .back-img
        width 69%
        margin auto
        height 50px
        margin-bottom 20px
        .center
          width: 40%;
          height: 100%;
          margin: auto;
          display: flex;
          justify-content: space-around;
          line-height: 50px;
          span

            a:hover
              color #FE8A0F
</style>

<!--


.three-word
    width 69%
    margin auto
    height 70px
    display table-cell
    vertical-align middle
    text-align center
    background-color #F5F5F5
    position relative
    .ju-zhong
      width 100%
      height 60px
      background-color coral
      margin auto
      display flex
      justify-content space-around
      .sign-one
        color gainsboro
      span
        height 60px
        line-height 60px
        text-align center

-->
