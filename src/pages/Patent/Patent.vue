<template>
  <div>

    <!--发明专利-->
    <div class="success-wrap">
      <div class="invention-wrap">
        <div class="contain-news">
          <div class="map-right">
            <!--发明专利 <span class="colo">(必填):</span><div class="inpu"><input type="text" name="patents" v-model="patents"></div>
            专利名称:<div class="inpu"><input type="text" name="names" v-model="names"></div>
            专利申请人:<div class="inpu"><input type="text" name="proposer" v-model="proposer"></div>-->
            <div class="tian">发明专利<span class="colo">(必填)</span>:&nbsp;<input type="text" class="inpu" v-model="patents"></div>
            <div class="names">专利名称:<input type="text"></div>
            <div class="person">专利申请人:<input type="text"></div>

            <div class="all-down">

                <div class="btn" >
                  <i class="iconfont icon-xiexin" @click="submit"></i>
                  <input type="submit" name value="申请专利" id="showbutton" @click="submit">
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--推荐专利 轮播图 -->
    <div class="recommendation">
      <i class="iconfont icon-fenqihuo"></i>
      <h1>推荐专利</h1>

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
    <!--专利类型-->
    <div class="type">
      <ul>
        专利类型:
        <li>不限</li>
        <li>生活用品</li>
        <li>智能居家</li>
        <li>生活用品</li>
        <li>生活用品</li>
      </ul>
      <!--搜索-->
      <div class="color-one">
        <form class="search_form" action="javascript:;">
          <!--<i class="iconfont icon-search" style="position: absolute; top: 22px; left: 20px;"></i>-->
          <input type="search" name="search" placeholder="请输入专利名称关键词" class="search_input">
          <button class="btn" style="border: 0px; border-radius: 2px; color: rgb(255, 255, 255); margin-left: -5px; font-size: 16px; background-color: orange; width: 81px; height: 37px; margin-top: -3px; outline: none; cursor: pointer;">立即搜索</button>
        </form>
      </div>
    </div>
    <!--优秀专利-->
    <div class="recommend">
      <div class="recommend-one">
        <i class="iconfont icon-tian"></i>
        <h1>优秀专利</h1>
      </div>
      <div class="recommend-wrap">
        <ul class="ul-recommend">
          <li class="li-item">
            <div class="middle-wrap">
              <div class="goto" @click="goto"></div>
            </div>
            <div class="isContent">
              <h3 class="title">U型牙刷1
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


          </li>
          <li class="li-item">
            <div class="middle-wrap">
              <div class="goto" @click="goto"></div>
            </div>
            <div class="isContent">
              <h3 class="title">U型牙刷2
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
          </li>
          <li class="li-item">
            <div class="middle-wrap">
              <div class="goto" @click="goto"></div>
            </div>
            <div class="isContent">
              <h3 class="title">U型牙刷3


              </h3>
              <div class="text">
                <p>知否知否知否否知否知否知知否知知知否知否知知否知否知否知否</p>
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
              <div class="goto" @click="goto"></div>

            </div>
            <div class="isContent">
              <h3 class="title">U型牙刷4
              </h3>
              <div class="text">
                <p>知否知否知否否知否知否知知否知否否知否知否知知否知否知否知否知否</p>
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

      <div class="recommend-wrap">
        <ul class="ul-recommend">
          <li class="li-item">
            <div class="middle-wrap">
              <div class="goto" @click="goto"></div>

            </div>
            <div class="isContent">
              <h3 class="title">U型牙刷5
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


          </li>
          <li class="li-item">
            <div class="middle-wrap">
              <div class="goto" @click="goto"></div>

            </div>
            <div class="isContent">
              <h3 class="title">U型牙刷
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
          </li>
          <li class="li-item">
            <div class="middle-wrap">
              <div class="goto" @click="goto"></div>

            </div>
            <div class="isContent">
              <h3 class="title">U型牙刷
              </h3>
              <div class="text">
                <p>知否知否知否否知否知否知知否知知知否知否知知否知否知否知否</p>
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
              <div class="goto" @click="goto"></div>

            </div>
            <div class="isContent">
              <h3 class="title">U型牙刷
              </h3>
              <div class="text">
                <p>知否知否知否否知否知否知知否知否否知否知否知知否知否知否知否知否</p>
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
    <!--分页器-->
    <div class="sorter">
      <div class="central">
        <el-pagination
          class="pages"
          background
          layout="prev, pager, next"
          prev-text="上一页"
          next-text="下一页"
          :total="100">
        </el-pagination>
        <span class="fonts">共100页</span>
      </div>
    </div>
    <!--专申请专利流程-->
    <div class="all-wrap">
      <div class="process">
        <div class="process-wrap">
          <i class="iconfont icon-tian"></i>
          <h1>申请专利流程</h1>
        </div>

      </div>
      <div class="kuang">
        <img src="./image/process.png" alt="">
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
          patents:"",
          names:"",
          proposer:""
        }
      },
      methods: {
        goto(){
          this.$router.push('/details')
        },
        submit() {
          if (this.patents.length == 0) {
            alert("请输入正确的专利号码");
            return
          }
          if (this.names == "") {
            alert("请留下您的专利名称")
            return
          }

          if (this.proposer == "") {
            alert("请输入申请人的名字")
            return
          }
        },
        initSwiper(){
          var mySwiper = new Swiper ('.swiper-container', {
            // direction: 'vertical', // 垂直切换选项
            // loop: true, // 循环模式选项 (已更改)
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
      },
      mounted(){
        this.initSwiper()
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .success-wrap
    width 63%
    height: 390px
    margin  auto
    background-color  steelblue
    .invention-wrap
      width: 300px
      height: 300px
      .contain-news
        width: 424px;
        height: 286px;
        position: absolute;
        right: 380px;
        top: 177px;
        bottom: 0;
        background-color: #fff
        .map-right
          width: 85%;
          margin: 18px 29px;
          .tian
            letter-spacing -0.7px
            .colo
              color #FFBB90
          .names
            letter-spacing 9.6px
          .person
            letter-spacing 5px
          div
            color: #243159;
            font-size 18px
            input
              width: 236px
              border: solid 1px #E8E8E8;
              box-sizing: border-box;
              background: #fff;
              margin-bottom: 23px;
              height 40px
              outline none
              padding 8px 8px
              &.inpu
                width: 237.6px
          .all-down
            height: 48px;
            text-align: center;
            border: none;
            border-radius: 0;
            background: #ff800b;
            font-size: 18px;
            color: #fff;
            outline: none;
            margin-top 10px
            .inpu
              box-sizing: border-box;
              background: #fff;
              margin-bottom: 20px;
            .btn
              margin: 0;
              padding: 0;
              height: 70px;
              text-align: center;
              position relative
              .iconfont
                display: block;
                width: 21px;
                height: 23px;
                position: absolute;
                left: 120px;
                top: 15px;
                bottom: 0;
                font-size: 21px;
                color: #fff;
                background: #ff800b;
                cursor: pointer;
            input
              cursor: pointer;
              width: 90px;
              height: 48px;
              border: none;
              background: #ff800b;
              font-size: 18px;
              color: #fff;
              outline: none;
  .recommendation
    width 63%
    height 50px
    margin auto
    margin-top 30px
    .iconfont
      font-size 26px
      color #EF6F26
    h1
      display: inline-block;
      margin-left: -14px;
      font-size: 18px;
      color: #243159;
      font-weight: bold;
      padding: 0 6px 0 22px;
  .patent-type
    width 80%
    height 50px
    margin auto
    margin-top 30px
    background-color rgba(128, 128, 128, 0.19)
    display flex
    justify-content space-between
  .swiper-container
    width: 63%
    margin 0 auto
    height 400px
    .swiper-slide
      width 100%
      background-color slategray
  .type
    width 63%
    height 50px
    margin auto
    margin-top 30px
    background-color rgba(128, 128, 128, 0.19)
    display flex
    justify-content space-between
    ul
      width: 700px
      display flex
      justify-content space-between
      text-align center
      line-height 50px
      li
        cursor pointer
        &:hover
          color orange
    .color-one
      width: 320px
      .search_form
        clearFix()
        width: 293px
        margin-top -4px
        padding 12px 8px
        position relative
        input
          height 35px
          padding 0 4px
          border-radius 2px
          font-weight bold
          outline none
          &.search_input
            border 4px solid #f2f2f2
            font-size 14px
            color #333
            background-color #f2f2f2
  .recommend
    width 63%
    height: 860px
    margin auto
    .recommend-one
      width: 200px
      margin:30.5px 0 28px 0;
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
      margin-top 15px
      /*background-color: salmon*/
      .ul-recommend
        display:flex;
        justify-content space-between
        .li-item
          width: 260px
          .middle-wrap
            .goto
              display block
              width: 260px;
              height: 190px;
              background: url(./image/timg.jpg) no-repeat top/260px 190px;
              cursor: pointer
          .isContent
            width: 260px
            box-sizing border-box
            padding 20px
            border: 1px #EFEFEF solid;

            h3
              font-size: 18px;
              font-weight: 400;
              color: #243159;
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
  .sorter
    width 80%
    height 50px
    margin 20px auto
    .central
      width: 800px
      height: 50px
      margin auto
      text-align: center;
      line-height: 30px;
      .pages
        display: inline-block
      .fonts
        color: #606266
      li:hover
        color #000 !important
      .active
        background-color #FE7F0A !important
        color #fff !important
      .btn-prev

        &:hover
          background-color #FE7F0A !important
          color #fff !important
      .btn-next

        &:hover
          background-color #FE7F0A !important
          color #fff !important

  .all-wrap
    width: 72%
    margin 0 auto
    height: 340px
    .process
      width 88%
      margin auto
      .process-wrap
        width: 200px
        margin:30.5px 0 28px 0;
        .iconfont
          font-size 26px
        h1
          display: inline-block;
          margin-left: -14px;
          font-size: 18px;
          color: #243159;
          font-weight: bold;
          padding: 0 6px 0 22px;
    .kuang
      width: 100%;
      img
        width: 80%
        margin-left 100px
</style>
