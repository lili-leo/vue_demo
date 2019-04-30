<template>
  <div>

    <div class="top-two">
      <div class="contain">
        <div class="back-img">

        </div>
        <div class="maxWrap">
          <div class="zhonghe">
            <div class="box1">
              <div class="wrap" v-for="(item,index) in arr" :key="index">
                <div class="wrap_item1">  <!--1-->
                  <div class="item-one">
                    <div class="number">07</div>
                    <div class="shu-xian">_______</div>
                    <div class="number-two">2019.03</div>
                  </div>
                </div>
                <div class="wrap_item2">  <!--2-->
                  <!--<span class="isspan">2018MPacilion  展馆设计公布 ！西班牙女建筑师Carme Pinos 创造 ‘折纸’ 空间</span>-->
                  <span class="isspan">{{item[index]}}</span>
                  <div class="sss">ssssssss</div>
                  <div style="margin-left: 60px; line-height: 32px;" >2018MPavilion&nbsp;&nbsp;展馆设计公布!&nbsp;西班牙女建筑师'</div>
                  <div style="margin-left: -78px"> Carme&nbsp;Pinos创造&nbsp;'折纸'&nbsp;空间</div>
                </div>
              </div>
            </div>

            <div class="box2">
              <div class="wrap" v-for="(item,index) in arr" :key="index">
                <div class="wrap_item1">  <!--1-->
                  <div class="item-one">
                    <div class="number">07</div>
                    <div class="shu-xian">_______</div>
                    <div class="number-two">2019.03</div>
                  </div>
                </div>
                <div class="wrap_item2">  <!--2-->
                  <!--<span class="isspan">2018MPacilion  展馆设计公布 ！西班牙女建筑师Carme Pinos 创造 ‘折纸’ 空间</span>-->
                  <span class="isspan">{{item[index]}}</span>
                  <div class="sss">ssssssss</div>
                  <div style="margin-left: 60px; line-height: 32px;" >2018MPavilion&nbsp;&nbsp;展馆设计公布!&nbsp;西班牙女建筑师'</div>
                  <div style="margin-left: -78px"> Carme&nbsp;Pinos创造&nbsp;'折纸'&nbsp;空间</div>
                </div>
              </div>
            </div>

          </div>

        </div>
        <!--分页器-->
        <div class="sorter-one">
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
      </div>

    </div>


  </div>
</template>

<script>
  export default {
    name: "news",
    data() {
      return {
        arr: [2142134232, 12341234123412, 12341234],

        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      }
    },
    methods:{
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .top-two
    background #F5F5F5
    .contain
      width: 91%;
      height: 1400px
      background-color: #f5f5f5;
      margin: 0 155px 4px auto;
      position: relative;
      .back-img
        width 69%
        margin auto
        height 450px
        background-color #313131
      /*margin-bottom  40px*/
      .maxWrap
        width 100%
        margin-top 55px
        .zhonghe
          width: 69%
          height: 635px
          margin auto
        .box1
          width 30%
          float right
          margin-right 145px
          .wrap
            /*width 600px*/
            width: 100%
            height: 210px
            position relative
            display block
            .wrap_item1
              width: 145px;
              height: 160px;
              background-color: #ffa500;
              position: absolute;
              top: 3px;
              z-index: 1;
              .item-one
                width: 80px;
                height: 110px;
                position: absolute;
                left: 25px;
                top: 28px;
                right: 0;
                bottom: 0;
                color: #fff;
                font-size: 20px;
                .number
                  font-size 26px
                  text-align center
                .shu-xian
                  margin-left 16px
                  color rgba(128, 128, 128, 0.26)
                .number-two
                  margin-top 23px
                  margin-left 11px
            .wrap_item2
              width: 113%
              height: 140px
              background-color #fff
              position absolute
              top: 40px
              left 100px
              /*line-height 140px*/
              text-align center
              .isspan
                display block;
                margin-left: 80px;
                line-height: 26px;
              .sss
                font-size 35px
                margin-top 18px
                margin-left -175px
        .box2
          width 30%
          float left
          .wrap
            /*width 600px*/
            width: 100%
            height: 210px
            position relative
            display block
            .wrap_item1
              width: 145px;
              height: 160px;
              background-color: #ffa500;
              position: absolute;
              top: 3px;
              z-index: 1;
              .item-one
                width: 80px;
                height: 110px;
                position: absolute;
                left: 25px;
                top: 28px;
                right: 0;
                bottom: 0;
                color: #fff;
                font-size: 20px;
                .number
                  font-size 26px
                  text-align center
                .shu-xian
                  margin-left 16px
                  color rgba(128, 128, 128, 0.26)
                .number-two
                  margin-top 23px
                  margin-left 11px
            .wrap_item2
              width: 113%
              height: 140px
              background-color #fff
              position absolute
              top: 40px
              left 100px
              /*line-height 140px*/
              text-align center
              .isspan
                display block;
                margin-left: 80px;
                line-height: 26px;
              .sss
                font-size 35px
                margin-top 18px
                margin-left -175px
      .block
        width 100%
        text-align center
        margin-top 685px
      .sorter-one
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

</style>
