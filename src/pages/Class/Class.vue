<template>
  <div>

    <div class="wrap-one">
      <div class="left">
        <h1>关于极别</h1>
        <p>ABOUT JI BIE</p>
        <ul>
          <li @click="addstyle('introduce')" >
            <router-link :to="'/introduce'"  class="bc" :class="{'active':$route.path=='/introduce'}">
            公司介绍
            <i class="iconfont icon-youjiantou"></i>
            </router-link>
          </li>
          <li @click="addstyle('mu')">
            <router-link :to="'/mu'" class="bc" :class="{'active':$route.path=='/mu'}">
            公司目标/理念
            <i class="iconfont icon-youjiantou"></i>
            </router-link>
          </li>

          <li @click="addstyle('serve')">
            <router-link :to="'/serve'" class="bc" :class="{'active':$route.path=='/serve'}">
            我们的服务
            <i class="iconfont icon-youjiantou"></i>
          </router-link>
          </li>

          <li @click="addstyle('advantage')">
            <router-link :to="'/advantage'" class="bc" :class="{'active':$route.path=='/advantage'}">
            我们的优势
            <i class="iconfont icon-youjiantou" ></i>
            </router-link>
          </li>
          <li @click="addstyle('case')">
            <router-link :to="'/case'" class="bc" :class="{'active':$route.path=='/case'}">
            成功案例
            <i class="iconfont icon-youjiantou"></i>
            </router-link>
          </li>
          <li @click="addstyle('run')">
            <router-link :to="'/run'" class="bc" :class="{'active':$route.path=='/run'}">
            运营模式
            <i class="iconfont icon-youjiantou"></i>
            </router-link>
          </li>
        </ul>
        <div class="wire"></div>
        <div class="all-wrap font">
          <p class="title font">深圳极别科技有限公司</p>
          <p class="tel font">电话：400-8296788</p>
          <p class="email font">邮箱：serve@jibiekeji.cn</p>
          <p class="adress font">地址：深圳市宝安区新桥街道上寮工业区18号汇聚新桥107创智园B122室</p>
        </div>

      </div>
      <router-view></router-view>
      <!--显示子路由-->

    </div>

  </div>


</template>

<script>
  export default {
    data(){
      return {
        sign:true
      }
    },


    methods:{
      addstyle(val){
         this.sign = val
      }
    },
  };

</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .wrap-one
    width: 63%;
    height: 1500px;
    margin auto
    .left
      width: 20%
      height: 100%
      background-color: #F7FAFF
      float: left
      h1
        font-size 18px
        font-weight: 600
        margin-left 10px
        margin-top:10px
        padding-top 30px
        color #243159;
      p
        font-size 18px
        font-weight: 600
        margin-left 10px
        margin-top:6px
        color #243159;
      ul
        width: 100%
        height: 315px
        line-height 40px
        margin-top 50px
        cursor pointer
        li
          color #A2A5B5
          margin-top 10px
          margin-left 10px
          position relative
          .bc
            display block
            color #a2a5b5

          .active
              color #fff
              background-color #FF8A10
          .active1
            color #fff
            background-color #FF8A10
          .iconfont
            display inline-block
            position absolute
            right: 15px
            bottom: 0
            top: 0
            color #A2A5B5
      .wire
        bottom-border-1px(#A2A5B5)
        margin-bottom 30px
      .all-wrap
        width: 100%
        height: 300px
        .font
          color #A2A5B5
          font-size 15px
          margin-top 20px
        .adress
          line-height 25px
    #right
      width: 77%
      height: 100%
      float: right
      .header-img
        width: 100%
        height: 350px
        background-color: #8491B3
        p
          color #fff
          line-height 350px
          text-align center
          font-weight: 400
          font-size 24px
      .content
        width: 100%
        margin-top 40px
        line-height 36px
        color #000000
      .down
        line-height 36px
        color #000000
      .wrap-img
        display block
        margin-top 30px
        width: 100%;
        height: 350px;
        background: url(./image/timg.jpg) no-repeat top/100% 350px;


</style>
