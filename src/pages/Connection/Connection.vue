<template>
  <div>
    <div class="top-header">

      <div class="connection-wrap">
        <div class="message-wrap">
          <div class="middle">
            <h1>联系我们</h1>
            <p>秉持着坚持创意,实用,优质至上的理念,项目分布在中国许多重要城市,</p>
            <p class="p-zuo">以现代主义精神与热情为设计注入完美无瑕的风格和创新能量.</p>
          </div>
        </div>
      </div>
      <div class="connection-middle">
        <div class="three-big">
          <div class="three">
            <div class="left">
              <a href="javascript:;"><i class="iconfont icon-dizhi"></i></a>
              <!--<p style="margin-top: 55px"></p>-->
              <p style="margin-top: 10px">公司地址</p>
              <p>深圳市宝安区鑫桥街道上寮工业路18号</p>
              <p>汇聚新桥107创智园 &nbsp;B122室</p>
            </div>
            <div class="middle">
              <a href="javascript:;"><i class="iconfont icon-youxiang"></i></a>
              <p style="margin-top: 10px"></p>
              <p>联系方式</p>
              <p> 400-829-6788</p>
            </div>
            <div class="right">
              <a href="javascript:;"><i class="iconfont icon-shijian"></i></a>
              <p style="margin-top: 10px"></p>
              <p>企业邮箱</p>
              <p>service@jibiekeji.cn</p>
            </div>
            <div class="last-right">
              <a href="javascript:;"><i class="iconfont icon-iconfontdianhua2"></i></a>
              <p style="margin-top: 10px"></p>
              <p>工作时间</p>
              <p>周一至周五&nbsp;上午9:00～12:00</p>
              <p>下午13:30～17:30</p>
            </div>
          </div>
        </div>

        <!--地图-->
        <div class="wrap">
          <div id="map" style="width: 54%">
            <div class="baidumap" id="allmap"></div>
          </div>
          <div class="map-right">
            <h1 class="title">建议反馈</h1>
            <div class="inpu"><input type="text" name="company" v-model="company" placeholder="公司名称"></div>
            <div class="inpu"><input type="text" name="Tel" v-model="Tel" placeholder="电话"></div>
            <div class="inpu"><input type="text" name="names" v-model="names" placeholder="姓名"></div>
            <div class="inpu"><input type="text" name="email" v-model="email" placeholder="邮箱"></div>

            <div class="all-down">
              <div class="inpu"><textarea v-model="message" placeholder="反馈内容" name="bodys"></textarea></div>
              <div class="btn" @click="submit"><input type="submit" name value="提交" id="showbutton"></div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>


<script>
  export default {
    data(){
      return {
        company:"",
        Tel:'',
        names:'',
        email:"",
        message: "",
      }
    },
    mounted(){
      this.baiduMap()
    },
    methods:{
      baiduMap(){
        var map = new BMap.Map("allmap");
        var point = new BMap.Point(113.849756,22.727388);// 创建点坐标，极别公司的经纬度坐标
        var marker = new BMap.Marker(point);
        map.addOverlay(marker)
        map.centerAndZoom(point,15)
        map.addControl(new BMap.NavigationControl());
        map.addControl(new BMap.OverviewMapControl());
        map.addControl(new BMap.GeolocationControl());
        map.enableScrollWheelZoom();
        map.enableContinuousZoom();
        var opts = {
          width : 250,     // 信息窗口宽度
          height: 80,     // 信息窗口高度
          title : "深圳市极别科技有限公司"
        }
        var infoWindow = new BMap.InfoWindow("地址: 深圳市宝安区新桥街道上寮工业区18号汇聚新桥107创智园B122室", opts);  // 创建信息窗口对象
        map.openInfoWindow(infoWindow, map.getCenter());      // 打开信息窗口
      },
      submit(){
        if(this.company.length == 0){
          alert ("请留下您的公司名称");
          return
        }
        let rule = /^1[345678]\d{9}$/;
        if(!rule.test(this.Tel)){
          if(this.Tel == ""){
            alert("请留下您的电话,以便我们与您联系!")
            return
          }
          alert ("请输入正确的电话号码,区号不用加任何符号!");
          return
        }

        if(this.names == ""){
          alert("请输入您的姓名")
          return
        }
        //发送请求



      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.top-header
    background #F5F5F5
  .connection-wrap
    width 100%
    height 300px
    background-color #323232
    position relative
    margin-bottom 60px
    .message-wrap
      width 100%
      height 300px
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
  .connection-middle
    width: 100%;
    height: 1100px;
    background-color: #F5F5F5
    .three-big
      height 250px
      background-color #F5F5F5
      display:flex;
      justify-content:center;
      align-items:center;
      .three
        height 230px
        display flex
        justify-content center
        line-height: 33px
        text-align: center
        /*background-color grey*/
        div
          width: 280px
        .left
          height 230px
          border solid 1px #fff
          background-color #fff
          a
            margin-top: 22px;
            display: block
          .iconfont

            font-size 30px
            color orange
        .middle
          height 230px
          border solid 1px #fff
          margin: 0 20px 0 20px;
          background-color #fff
          a
            display block
            margin-top: 22px;
            .iconfont
              font-size 30px
              color orange
        .right
          height 230px
          border solid 1px #fff
          margin: 0 20px 0 0;
          background-color #fff
          a
            display block
            margin-top: 22px
            .iconfont
              font-size 30px
              color orange
        .last-right
          height 230px
          border solid 1px #fff
          background-color #fff
          a
            display block
            margin-top: 22px
            .iconfont
              font-size 30px
              color orange
    .wrap
      width: 69%
      height: 500px
      margin 100px auto
      /*background-color: darkkhaki*/
      #map
        width: 50%
        height: 500px
        margin-left 5%
        background-color: salmon
        float left
        .baidumap
          width: 100%
          height: 522px
          box-shadow 0 0 3px #888888;
      .map-right
        width: 28%;
        height: 567px;
        /*background-color: seashell;*/
        margin: -48px 60px;
        float right
        .title
          font-size 24px
          margin-bottom 20px
        .inpu
          border: solid 1px #e6e6e6;
          box-sizing: border-box;
          background: #fff;
          margin-bottom: 7px;
          input
            width: 100%;
            height: 48px;
            line-height: 48px;
            box-sizing: border-box;
            font-size: 18px;
            color: #333;
            border: none;
            outline: none;
            padding: 0 20px;
            background: none;
        .all-down
          border: none;
          .inpu
            box-sizing: border-box;
            background: #fff;
            margin-bottom: 20px;
            textarea
              width: 95%;
              height: 200px;
              resize: none;
              line-height: 24px;
              border: none;
              outline: none;
              font-size: 18px;
              margin-left: 10px;
          .btn
            margin: 0;
            padding: 0;
            height: 70px;
            text-align: center;
            input
              width: 100%;
              height: 70px;
              text-align: center;
              display: block;
              border: none;
              border-radius: 0;
              background: #f67524;
              font-size: 18px;
              color: #fff;
              cursor: pointer;
              outline none



</style>
