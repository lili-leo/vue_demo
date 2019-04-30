<template>
  <div class="warp">

    <div class="details-wrap">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/main' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/patent' }">专利</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/details' }">专利详情</el-breadcrumb-item>
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
            <p>专利号: 02135968.7</p>
            <p>发明人: 常传忠</p>
            <p>专利权人: 深圳极别科技有限公司</p>
          </div>
          <div class="right">
            <p>专利类型: 实用新型</p>
            <p>申请日期: 2017-11-11</p>
          </div>
        </div>
        <div class="consult">
          <a href="javascript:;">在线咨询</a>
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
    <!--专利信息导航-->
    <div class="patent-message">
        <div>
          <span class="text">专利信息</span>
          <span class="text">专利详情</span>
          <span class="text">专利评估</span>
          <span class="text">专利证书</span>
          <span class="text">服务流程</span>
          <span class="text">服务项目</span>
        </div>
    </div>
    <!--专利表-->
    <div class="patent-table">
      <div class="message">
        <i class="iconfont icon-tian"></i>
        <h1>专利信息</h1>
      </div>
      <div class="message-table">
        <el-table
          :data="tableData"
          border
          style="width: 100%; margin-top: 20px;"
          :header-cell-style='styleObj'
        >
          <el-table-column
            prop="id"
            label="申请号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="02135968.7">
          </el-table-column>
          <el-table-column
            prop="amount1"
            label="地址">
          </el-table-column>
          <el-table-column
            prop="amount2"
            label="山东省济宁市红星中路1号济宁师专电教中心">
          </el-table-column>

        </el-table>
      </div>
    </div>
    <!--专利详情-->
    <div class="patent-details">
      <div class="details-two">
        <i class="iconfont icon-tian"></i>
        <h1>专利详情</h1>
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
    <!--专利评估-->
    <div class="assess">
      <div class="service-one">
        <i class="iconfont icon-tian"></i>
        <h1>专利评估</h1>
      </div>
    </div>
    <!--专利证书-->
    <div class="recommendation">
      <i class="iconfont icon-tian"></i>
      <h1>专利证书</h1>

    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">slid1</div>
        <div class="swiper-slide">slid2</div>
        <div class="swiper-slide">slid3</div>
        <div class="swiper-slide">slid4</div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <!--<div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>-->

      <!-- 如果需要滚动条 -->
      <!--<div class="swiper-scrollbar"></div>-->
    </div>
    <!--服务流程-->
    <div class="service-flow">
      <div class="service-one">
        <i class="iconfont icon-tian"></i>
        <h1>服务流程</h1>
      </div>
    </div>
    <!--服务项目-->
    <div class="service-projects">
      <div class="service-two">
        <i class="iconfont icon-tian"></i>
        <h1 class="text-project">服务项目</h1>
      </div>
      <div class="three-service">
        <ul class="ui-list">
          <li class="li-item">
            <div class="middle-wrap">
              <a href="javascript:;"></a>
            </div>
            <div class="isContent">
              <h3 class="title">专利评估
                <a href="javascript:;"></a>
              </h3>
              <div class="text">
                <p>知否知否知否否知否知否知知否知否否知否知否知否知否知否否知否知否知知否知否知否知否知否</p>
              </div>
            </div>

          </li>
          <li class="li-item">
            <div class="middle-wrap">
              <a href="javascript:;">
              </a>
            </div>
            <div class="isContent">
              <h3 class="title">专利孵化
                <a href="javascript:;"></a>
              </h3>
              <div class="text">
                <p>知否知否知否否知否知否知知否知否知否知否知否知否知否知否知否知否否知否知否知知否知否知否知否知否</p>
              </div>
            </div>

          </li>
          <li class="li-item">
            <div class="middle-wrap">
              <a href="javascript:;">

              </a>
            </div>

            <div class="isContent">
              <h3 class="title">专利合作
                <a href="javascript:;"></a>
              </h3>
              <div class="text">
                <p>知否知否知否否知否知否知知否知否知否知否知否知否知否知否知否知否否知否知否知知否知否知否知否知否</p>
              </div>
            </div>
          </li>
        </ul>
      </div>

    </div>
    <!--相关推荐-->
    <div class="recommend">
      <div class="recommend-one">
        <i class="iconfont icon-tian"></i>
        <h1>相关推荐</h1>
      </div>
      <div class="recommend-wrap">
        <ul class="ul-recommend">
          <li class="li-item">
            <div class="middle-wrap">
              <a href="javascript:;"></a>
            </div>
            <div class="isContent">
              <h3 class="title">U型牙刷
                <a href="javascript:;"></a>
              </h3>
              <div class="text">
                <p>知否知否知否否知否知否知知否否知否知否知知否知否知否知否知否</p>
              </div>

              <div class="img-infos">
          <span class="iconfont icon-fenxiang">
            <a href="javascript:;">分享</a>
          </span>
                <span class="iconfont icon-zan2">
            <a href="javascript:;">点赞
            <span>635</span>
            </a>
          </span>
              </div>
            </div>


          </li>
          <li class="li-item">
            <div class="middle-wrap">
              <a href="javascript:;">

              </a>
            </div>
            <div class="isContent">
              <h3 class="title">U型牙刷
                <a href="javascript:;"></a>
              </h3>
              <div class="text">
                <p>知否知否知否否知否知否知否知否知否否知否知否知知否知否知否知否知否</p>
              </div>

              <div class="img-infos">
          <span class="iconfont icon-fenxiang">
            <a href="javascript:;">分享</a>
          </span>
                <span class="iconfont icon-zan2">
            <a href="javascript:;">点赞
            <span>635</span>
            </a>
          </span>
              </div>
            </div>
          </li>
          <li class="li-item">
            <div class="middle-wrap">
              <a href="javascript:;">

              </a>
            </div>
            <div class="isContent">
              <h3 class="title">U型牙刷
                <a href="javascript:;"></a>
              </h3>
              <div class="text">
                <p>知否知否知否否知否知否知否知否知否否知否知否知知否知否知否知否知否</p>
              </div>

              <div class="img-infos">
          <span class="iconfont icon-fenxiang">
            <a href="javascript:;">分享</a>
          </span>
                <span class="iconfont icon-zan2">
            <a href="javascript:;">点赞
            <span>635</span>
            </a>
          </span>
              </div>
            </div>
            <div class="img-infos">
            </div>
          </li>
          <li class="li-item">
            <div class="middle-wrap">
              <a href="javascript:;">
              </a>
            </div>
            <div class="isContent">
              <h3 class="title">U型牙刷
                <a href="javascript:;"></a>
              </h3>
              <div class="text">
                <p>知否知否知否否知否知否知否知否知否知否否知否知否知知否知否知否知否知否</p>
              </div>

              <div class="img-infos">
          <span class="iconfont icon-fenxiang">
            <a href="javascript:;">分享</a>
          </span>
                <span class="iconfont icon-zan2">
            <a href="javascript:;">点赞
            <span>635</span>
            </a>
          </span>
              </div>
            </div>
            <div class="img-infos">
            </div>
          </li>
        </ul>
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
        tableData: [{
          id: '申请日',
          name: '2002.12.09',
          amount1: '申请人',
          amount2: '常传忠',
        }, {
          id: '公开/公告日',
          name: '2003.04.30',
          amount1: '发明人',
          amount2: '常传忠',
        }, {
          id: '电话',
          name: '13355195679',
          amount1: '发明名称',
          amount2: '隔离式调压变压器及其调压方法',
        }],
        styleObj:{
          "color":"#243159"
        }
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
.warp
  width: 80%;
  /*position absolute*/
  margin auto
  .details-wrap
    width 79%
    margin 30px auto
    .el-breadcrumb
      font-size: 16px;
      line-height: 1;
  .all-wrap
    width 79%
    height: 320px
    margin 30px auto
    clear: both;
    /*background-color: steelblue*/
    .up
      width: 280px
      height: 280px
      background-color:goldenrod
      float: left
      margin: 0 45px 0 0
      img
        width: 280px
        height: 280px
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
        .right
          float: left
          margin-left 50px
      .consult
        margin: 20px 0 0 0
        a
          border: 1px solid #FE7F0A;
          background: #FE7F0A;
          text-align: center;
          line-height: 40px;
          font-size: 16px;
          color: #fff;
          margin: -28px 0 0 0
          display: block;
          width: 148px;
          height: 40px;
          border-radius: 29px;
          transition: 0.3s;
    .down
      width: 245px
      height: 320px;
      border: 1px solid #e9ecf3;
      background #F7FAFF
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
    width 79%
    height: 60px
    margin 30px auto
    background-color: #F7FAFF
    div
      display flex
      justify-content space-around
      .text
        display: block;
        line-height: 60px;
        color: #243159;
        cursor: pointer;
        &:hover
          color #FF800B
  .patent-table
    width 79%
    margin 30px auto
    .message
      width: 200px
      margin: 30.5px 0 28px 0;
      .iconfont
        font-size 26px
      h1
        display: inline-block;
        margin-left: -14px;
        font-size: 18px;
        color: #243159;
        font-weight: bold;
        padding: 0 6px 0 22px;
    .message-table
      width: 1088.8px
      margin: -11px 0 28px 0;
      clear both
      .el-table
        color #243159;
  .patent-details
    width 79%
    height: 200px
    margin 30px auto
    .details-two
      width: 200px
      margin: 30.5px 0 28px 0;
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
  .assess
    width 79%
    height: 240px
    margin 45px auto
    background-color: rgba(128, 128, 128, 0.22)
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
  .recommendation
    width 79%
    height 50px
    margin auto
    margin-top 30px
    .iconfont
      font-size 26px
      color #243159
    h1
      display: inline-block;
      margin-left: -14px;
      font-size: 18px;
      color: #243159;
      font-weight: bold;
      padding: 0 6px 0 22px;
  .swiper-container
    width: 30%
    margin 0 auto
    height 400px
    .swiper-slide
      width 100%
      background-color slategray
  .service-flow
    width 79%
    height: 240px
    margin 45px auto
    background-color: rgba(128, 128, 128, 0.22)
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
  .service-projects
    width 79%
    margin auto
    height: 450px
    .service-two
      width: 200px
      margin: 30.5px 0 28px 0;
      .iconfont
        font-size 26px
      .text-project
        display: inline-block;
        margin-left: -14px;
        font-size: 18px;
        color: #243159;
        font-weight: bold;
        padding: 0 6px 0 22px;


    .three-service
      height: 300px
      .ui-list
        width: 100%
        height: 100%
        display:flex;
        justify-content space-between
        .li-item
          width: 320px
          .middle-wrap
            a
              display block
              width: 320px;
              height: 230px;
              background: url(./image/timg.jpg) no-repeat top/320px 230px;
          .isContent
            width: 320px
            box-sizing border-box
            padding 20px
            border: 1px #EFEFEF solid;
            h3
              font-size: 18px;
              font-weight: 400;
              color: #243159;
              cursor pointer;
              text-align: center;
              margin-bottom: 20px;
              a
                display: block;
                cursor pointer;
            .text
              line-height: 24px;
              font-size: 16px;
              text-align: left ;
              color: #243159;
  .recommend
    width 79%
    margin auto
    height: 600px
    .recommend-one
      width: 200px
      margin:70px 0 28px 0;
      .iconfont
        font-size 26px
      h1
        display: inline-block;
        margin-left: -14px;
        font-size: 18px;
        color: #243159;
        font-weight: bold;
        padding: 0 6px 0 22px;
    .recommend-wrap
      height: 390px
      /*background-color: salmon*/
      .ul-recommend
        display:flex;
        justify-content space-between
        .li-item
          width: 260px
          .middle-wrap
            a
              display block
              width: 260px;
              height: 230px;
              background: url(./image/timg.jpg) no-repeat top/260px 230px;
          .isContent
            width: 260px
            box-sizing border-box
            padding 20px
            border: 1px #EFEFEF solid;

            h3
              font-size: 18px;
              font-weight: 400;
              color: #243159;
              cursor pointer;
              text-align: center;
              margin-bottom: 20px;
              a
                display: block;
                cursor pointer;
            .text

              line-height: 24px;
              font-size: 16px;
              text-align: left ;
              color: #243159;
      .img-infos
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
</style>
