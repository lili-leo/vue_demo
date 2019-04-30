<template>
  <div>
    <div class="par-wrap">

      <div class="details-wrap">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/main' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/patent' }">专利</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/details' }">创意详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!--头部-->
      <div class="all-wrap">

        <div class="up">
          <img src="./image/timg.jpg" alt="">
          <div class="img-info">
          <span class="iconfont icon-fenxiang">
            <a href="javascript:;">分享</a>
          </span>
            <span class="iconfont icon-zan2">
            <a href="javascript:;">点赞
            <span>635</span>
            </a>
          </span>
            <span class="iconfont icon-shoucang">
            <a href="javascript:;">收藏</a>
          </span>
          </div>
        </div>
        <div class="middle">
          <p class="title">电动牙刷</p>
          <div class="middle-wrap">
            <div class="left">
              <p>创意人: 李峰</p>
              <p>分类: 生活用品</p>
              <p>创意时间: 2018-09-09</p>
            </div>

          </div>
        </div>
        <div class="down">
          <div class="avatar">
            <img src="./image/yang.jpg" alt="">
          </div>
          <p class="header-name">专利顾问-XX</p>
          <a href="javascript:;">
            <span>在线咨询</span>
          </a>
          <p class="times">工作时间一-至周五: 9:00-18:00</p>
        </div>

      </div>
      <!--创意导航-->
      <div class="patent-message">
        <div>
          <span class="text">创意简介</span>
          <span class="text">创意图片</span>
          <span class="text">服务流程</span>
          <span class="text">评论</span>
        </div>
      </div>
      <!--创意简介-->
      <div class="patent-details">
        <div class="details-two">
          <i class="iconfont icon-tian"></i>
          <h1>创意简介</h1>
        </div>
        <div class="wrap-text">
          <p>
            隔离式调压变压器, 涉及有多绕组多抽头互耦式变压器、继电器组和继电器控制电路三部分构成。
            所说的变压器有四个独立的绕组构成,初级绕组用于连接220V电源,初级绕组分为个位绕组、
            十位绕组和百位绕组,分别提供输出电压的个位、十位和百位数值。继电器分为个位、十位和百位
            三组, 分别与相应绕组抽头连接。控制电路可分别控制三组继电器的分合状态。输出端输出电压为
            个位电压加十位电压再加百位电压,分三步选择个位、十位和百位电压数值。继电器配合变压器
            抽头实现输出电压调节。采用多绕组互耦式变压器, 实现了负载侧与电源侧的电隔离; 输出电压
            波形与输入电压完全相同,在实现大范围调节功能的同时实现负载侧与电源侧的电隔离功能
          </p>
        </div>
      </div>
      <!--创意图片-->
      <div class="certificate-wrap">
        <div class="details-three">
          <i class="iconfont icon-tian"></i>
          <h1>创意图片</h1>
        </div>
        <!--走马灯-->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">slid1</div>
            <div class="swiper-slide">slid2</div>
            <div class="swiper-slide">slid3</div>
            <div class="swiper-slide">slid4</div>
          </div>
          <!-- 如果需要分页器 -->
          <!--<div class="swiper-pagination"></div>-->

           如果需要导航按钮
          <div class="swiper-button-prev swiper-button-white"></div>
          <div class="swiper-button-next swiper-button-white"></div>

          <!-- 如果需要滚动条 -->
          <!--<div class="swiper-scrollbar"></div>-->
        </div>
      </div>
      <!--服务流程-->
      <div class="service-flow">
        <div class="service-one">
          <i class="iconfont icon-tian"></i>
          <h1>服务流程</h1>
        </div>
      </div>
      <!--说两句-->

      <textarea class="say" id="" cols="30" rows="10"></textarea>

      <!--评论-->
      <div class="service-projects">
        <div class="service-two">
          <i class="iconfont icon-tian"></i>
          <h1>评论</h1>
        </div>
        <div class="comment-big">

          <div class="demo1">
            <div class="left-wrap">
              <img src="./image/01.jpeg" alt="">
            </div>
            <div class="you">
              <div class="right-wrap">
                <div class="left-three">
                  <div class="left">
                    <p>丫丫个呸的</p>
                    <p class="gray">17-5-21 15:28</p>
                    <p>这个创意不错哦!</p>
                  </div>
                  <div class="right">
                    <div>
                      <a href="javascript:;" class="iconfont icon-dianzan">
                      </a>
                      <span >28</span>
                    </div>

                    <div>
                      <a href="javascript:;" class="iconfont icon-groupcopy5">
                      </a>
                      <span >28</span>
                    </div>
                  </div>
                </div>

              </div>
              <div class="content">
                <p>人称现实版流川枫: 确实不错</p>
                <p>丫丫个呸的: 这个创意不错哦!</p>
                <p>还是怪我太帅: 加我一个,兄弟!</p>
                <a href="javascript:;">
                  <p class="reply">共7条回复</p>
                  <i class="iconfont icon-youjiantou"></i>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.min.css'
  import Swiper from 'swiper'
  export default {

    data(){

      return{
        imgList:[
          {id:0,idView:require("./image/yanOne.jpg")},
          {id:1,idView:require("./image/yang.jpg")},
          {id:2,idView:require("./image/yan.jpg")},
          {id:3,idView:require("./image/yan-two.jpg")},
          {id:4,idView:require("./image/yan-three.jpg")},
        ]
      }
    },
    methods:{
      initSwiper(){
        var mySwiper = new Swiper ('.swiper-container', {
          // direction: 'vertical', // 垂直切换选项
          loop: true, // 循环模式选项 (已更改)
          autoplay:true,
          delay: 600,//1000 1秒切换一次

          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },

          // 如果需要前进后退按钮
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },

          // 如果需要滚动条
          // scrollbar: {
          //   el: '.swiper-scrollbar',
          // },
        })
      },
      arraySpanMethod({ row, column, rowIndex, columnIndex }) {
        if (rowIndex % 2 === 0) {
          if (columnIndex === 0) {
            return [1, 2];
          } else if (columnIndex === 1) {
            return [0, 0];
          }
        }
      },
      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0) {
          if (rowIndex % 2 === 0) {
            return {
              rowspan: 2,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
      }
    },
    mounted(){
      this.initSwiper()
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
.par-wrap
  width: 70%
  margin: 30px auto;
  .details-wrap
    width: 90%;
    margin: 30px auto;
    background-color: rgba(128,128,128,0.19);
    .el-breadcrumb
      font-size: 16px;
      line-height: 1;
  .all-wrap
    width 90%
    height: 320px
    margin 30px auto
    clear: both;
    /*background-color: steelblue*/
    .up
      width: 280px
      height: 280px
      background-color:goldenrod
      float: left
      margin: 0 63px 0 0
      img
        width: 280px;
        height: 280px;
      .img-info
        width: 298px;
        height: 18px
        color: #243159;
        margin-top 15px
        .iconfont
          display: inline-block;
          height: 16px;
          padding-left: 16px;
          margin-right: 18px;
          line-height: 16px;
          user-select: none;
          cursor: pointer;
          a
            color: #243159;
    .middle
      height: 320px
      float left
      .title
        font-size: 26px;
        color: #243159;
        position: relative;
      .middle-wrap
        height: 210px
        line-height 50px
        box-sizing: border-box;
        padding-top: 30px;
        color: #243159;
        .left
          float: left
    .down
      width: 278px;
      height: 320px;
      border: 1px solid #e9ecf3;
      background #f7faff
      float: right;
      .avatar
        width: 126px;
        height: 126px;
        margin: 18px auto 0 auto;
        img
          width: 100%;
          height: 100%;
          border-radius: 100%;
      .header-name
        text-align: center;
        font-size: 16px;
        color: #243159;
        margin: 15.5px 0;
      a
        display: block;
        width: 135px;
        height: 41px;
        border-radius: 29px;
        background: #fff;
        margin: 20px auto 0 auto;
        span
          display: block;
          width: 100%;
          height: 100%;
          background: #fe7f0a;
          border-radius: 29px;
          text-align: center;
          line-height: 41px;
          font-size: 14px;
          color: #ffffff;
      .times
        width: 100%;
        height: 44px;
        line-height: 44px;
        font-size: 14px;
        color: #243159;
        margin-top: 10px
        text-align: center;
  .patent-message
    width 90%
    height: 60px
    margin 30px auto
    background-color: darkkhaki
    div
      display flex
      justify-content space-around
      .text
        display: block;
        line-height: 60px;
        color: #243159;
        cursor: pointer;
        &:hover
          color snow
  .patent-details
    width 90%
    height: 255px
    margin 30px auto
    background-color: skyblue
    .details-two
      width: 200px
      margin: 30.5px 0 28px 0;
      background-color: snow
      .iconfont
        font-size 26px
      h1
        display: inline-block;
        margin-left: -14px;
        font-size: 18px;
        color: #243159;
        font-weight: bold;
        padding: 0 6px 0 22px;
    .wrap-text
      height: 107px;
      margin: -11px 0 28px 0;
      p
        font-size: 16px;
        color: #243159;
        line-height: 28px;
        word-wrap:break-word ;  /*自动换行*/
  .certificate-wrap
    width 90%
    height: 400px
    margin 30px auto
    background-color: skyblue
    .details-three
      width: 200px
      margin: 30.5px 0 28px 0;
      background-color: snow
      .iconfont
        font-size 26px
      h1
        display: inline-block;
        margin-left: -14px;
        font-size: 18px;
        color: #243159;
        font-weight: bold;
        padding: 0 6px 0 22px;
    .swiper-container
      width: 40%
      margin 0 auto
      height 310px
      .swiper-slide
        width 100%
        background-color slategray
  .service-flow
    width 90%
    height: 240px
    margin 45px auto
    background-color: skyblue
    .service-one
      width: 200px
      margin: 30.5px 0 28px 0;
      background-color: snow
      .iconfont
        font-size 26px
      h1
        display: inline-block;
        margin-left: -14px;
        font-size: 18px;
        color: #243159;
        font-weight: bold;
        padding: 0 6px 0 22px;
  .say
    width 90%
    height: 240px
    margin 45px auto
    border 1px solid #F8F8F8
    background-color: steelblue
  .service-projects
    width 90%
    height: 600px
    margin 30px auto
    background-color: skyblue
    .service-two
      width: 200px
      margin: 30.5px 0 28px 0;
      background-color: snow
      .iconfont
        font-size 26px
      h1
        display: inline-block;
        margin-left: -14px;
        font-size: 18px;
        color: #243159;
        font-weight: bold;
        padding: 0 6px 0 22px;
    .comment-big
      width: 100%
      /*background-color: navajowhit*/e
      .demo1
        height: 300px
        margin 30.5px 0 28px 0;
        display flex
        .left-wrap
          width: 160px;
          /*height: 304px*/
          /* background-color: slateblue*/
          img
            width: 120px;
            height: 110px;
            border-radius: 50%;
        .you
          width: 100%
          /*background-color: silver*/
          .right-wrap
            width: 100%;
          .left-three
            width: 100%
            height: 108px
            line-height: 50px;
            box-sizing: border-box;
            padding-top: 10px;
            color: #243159;
            display: flex;
            justify-content: space-between;
              /*background-color salmon*/
            .left
              height: 80px
              line-height: 20px
              .gray
                color #898C9E
              p
                margin-top 10px
            .right
              width:120px
              height: 80px
              color: #898C9E
              div
                display inline-block
                margin-right 10px
              .iconfont
                font-size 20px
                color #898C9E
          .content
            line-height: 30px;
            color: #243159;
            margin-top 20px
            /*background-color: #8b4513;*/
            a
              display inline-block
              width: 100px
              /*background-color antiquewhite*/
              position relative
              margin-top 20px
              .reply
                color #898C9E
              .iconfont
                font-size 20px
                color #898C9E
                position: absolute;
                top: 0;
                right: 0;
</style>
