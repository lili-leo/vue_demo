<template>
  <div>
    <div class="wrap">

      <div class="logo">
        <div href="javascript:;">
          <img src="./image/lgo.png" alt="">
        </div>
      </div>

      <div class="content">

        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#3c4566"
          text-color="#fff"
          active-text-color="#FA800F"
        >
          <el-menu-item index="1"><router-link :to="'main'">首页</router-link></el-menu-item>
          <el-submenu index="2">
            <template slot="title"><router-link :to="'class'" style="color: #fff;">关于极别</router-link></template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-menu-item index="2-4">选项4</el-menu-item>
          </el-submenu>
          <el-menu-item index="3"><router-link :to="'patent'">专利</router-link></el-menu-item>
          <el-menu-item index="4"><router-link :to="'creative'">创意</router-link></el-menu-item>
          <el-submenu index="5">
            <template slot="title"><router-link :to="'message'" style="color: #fff;">新闻资讯</router-link></template>
            <el-menu-item index="2-5">选项1</el-menu-item>
            <el-menu-item index="2-6">选项2</el-menu-item>
            <el-menu-item index="2-7">选项3</el-menu-item>
            <el-menu-item index="2-8">选项4</el-menu-item>
          </el-submenu>
          <el-menu-item index="6"><router-link :to="'connection'">联系我们</router-link></el-menu-item>
        </el-menu>


      </div>


      <div class="login">

        <span class="deng" @click="tologo">
          登录
        </span>
        <span class="zhu">注册</span>

        <div class="right-wrap">
          <span class="zhong">中</span>
          <span class="gan">/</span>
          <span class="EN">EN</span>
        </div>

      </div>

    </div>


  </div>
</template>

<script>
  export default {
    data(){

      return{
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods:{
      tologo(){
        this.$emit('shoulogn',true)
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .wrap
    width 100%
    height 100px
    display flex
    justify-content space-around
    background-color #3C4566
    .logo

      width: 300px
      height: 100px
      position relative
      div
        width 200px
        height 100px
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        margin-left: 100px;
        >img
          width: 100%;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
          cursor: pointer;

    .content
      width: 860px;
      background-color: #3C4566
      margin-top: 20px;
      font-size: 18px;
      z-index 0
      .el-menu
        border-bottom-width: 0;
      ul
        width: 100%
        line-height 100px
        text-align center
        font-size 18px
        display flex
        justify-content space-around
        color #fff
        li
          color #fff
        .el-menu-item
          display: inline-block;
          position: relative;
          font-size: 16px;
          color #fff
          span
            color #fff
            cursor pointer
            font-size 18px
    .login
      width 165px
      height 100px
      line-height 28px
      /*float right*/
      display flex
      flex-direction column
      position relative
      color #fff
      p
        margin-top 10px
        margin-left 15px
      span
        margin-top 14px
      .deng
        cursor pointer
        position absolute
        left: -3px
        top 26px
        bottom 0
        right 0
      .zhu
        position absolute
        left 50px
        top 26px
        bottom 0
        right 0
        cursor pointer
      .right-wrap
        width: 100px
        height: 50px
        line-height 57px
        position absolute
        left 100px
        top 26px
        bottom 0
        right 0
        .zhong
          cursor pointer
        .EN
          cursor pointer
      .el-dropdown-link
        cursor: pointer;
        color: #419EFF;
      .el-icon-arrow-down
        font-size: 18px;


</style>
