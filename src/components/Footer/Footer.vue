<template>
  <div>

    <div class="wrap-color">
      <div class="zzz">
        <div class="left">
          <div class="left-one">
            <div class="dian">
              <router-link :to="'main'" style="display: block;color: #fff">首页</router-link>
            </div>
            <div class="dian">
              <router-link :to="'class'" style="display: block;color: #fff;margin-left: 8px">关于极别</router-link>
            </div>
            <div class="dian">
              <router-link :to="'success'" style="display:block;color: #fff;margin-left: 8px">成功案例</router-link>
            </div>
            <div class="dian">
              <router-link :to="'message'" style="display: block;color: #fff;margin-left: 8px">极别模式</router-link>
            </div>
            <div class="dian">
              <router-link :to="'connection'" style="display: block;color: #fff;margin-left: 8px">联系我们</router-link>
            </div>
          </div>

          <div class="left-zuo">
            <br/>
            <p>联系电话:&nbsp;&nbsp;400 8296788</p>
            <br/>
            <br/>
            <p>邮箱: &nbsp;&nbsp;servce@jibiekeji.cn</p>
            <br/>
            <br/>
            <p class="text">公司地址:  深圳市宝安区新桥街道上寮工业区 18号汇聚新桥107创智园B122室</p>
            <p class="text-two"></p>
          </div>

        </div>
        <div class="right">
          <div class="content">
            <div class="box">
              <img src="./image/ma.png" class="text-three">
              <p class="font">扫描下载APP</p>
            </div>
            <div>
              <img src="./image/ma2.png" class="text-three">
              <p class="font">扫描下载APP</p>
            </div>
          </div>

        </div>
      </div>


      <div class="down">
        <div class="box">
          <p class="lines"></p>
          <div class="protect">
            隐私保护&nbsp;法律声明&nbsp;&nbsp;Copyright ©2017 极别科技有限公司&nbsp;&nbsp;粤ICP181073883号
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
    export default {

    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

  .wrap-color
    margin auto
    height: 290px
    background-color #3A3B3D
    position relative
    color: #fff
    .zzz
      width: 63%
      height: 200px
      margin auto
    .left
      width: 46%
      margin-top: 14px
      float left
      /*background-color forestgreen*/
      /*float left*/
      .left-one
        display: flex
        justify-content space-between

        .dian
          cursor pointer
          z-index 1111
          margin-left 4px
          border-left 1.4px solid #fff
          &:nth-child(1)
            border-left 0
            margin-left 0
      .left-zuo

        .text
          height 30px
          line-height 30x
        .text-two
          margin-left 85px
    .right
      width: 10%
      margin-left 332px
      margin-top: 14px
      float left
      .content
        display flex
        .box
          margin-right 40px
      .text-three
        width: 140px
        height: 140px
      .font
        text-align: center
        margin-top 12px
    .down
      width: 96%;
      float: right;
      margin-top: 22px;
      margin: auto;
      .box
        margin-left 285px
      .lines
        width 75%
        height: 2px
        border-bottom  1px solid #888
        clear: both
      .protect
        width: 400px
        line-height 30px



</style>
