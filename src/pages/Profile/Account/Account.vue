<template>
  <div class="warp">

    <div class="wrap-right">
      <span class="name">昵称:
        <input type="text">
      </span>
      <div class="bc">
        <div class="img"></div>
      </div>
      <div class="sex">性别:
        <div>
          <el-radio v-model="radio" label="1">男</el-radio>
          <el-radio v-model="radio" label="2">女</el-radio>
        </div>
      </div>
      <div class="state">
        <span class="state-span">出生年月：</span>
        <select name="" class="state-select"
                style="width: 100px;
                height:49px;
                text-indent: 50px;
                border-radius:5px;
                color:#40445E;
                border: 1px solid #E5E5E4;"
                >
          <option value="1">年</option>
          <option value="2">xxx</option>
        </select>
        <select name="" class="state-select"
                style="width: 100px;
                height:49px;
                text-indent: 50px;
                border-radius:5px;
                color:#40445E;
                border: 1px solid #E5E5E4;"
                >
          <option value="1">月</option>
          <option value="2">xxx</option>
        </select>
        <select name="" class="state-select"
                style="width: 100px;
                height:49px;
                text-indent: 50px;
                color:#40445E;
                border-radius:5px;
                border: 1px solid #E5E5E4;"
                >
          <option value="1">日</option>
          <option value="2">xxx</option>
        </select>
      </div>
      <div class="native">
        <span class="state-wrap">籍贯：</span>
        <select name="" class="wrap-select"
                style="width: 100px;
                height: 49px;
                text-indent: 30px;
                border-radius:5px;
                color:#40445E;
                border: 1px solid #E5E5E4;
                "
                >
          <option value="1">请选择</option>
          <option value="2">xxx</option>
        </select>

      </div>
      <span class="names">邮箱:
        <input type="text">
      </span>
      <span class="names">手机:
        <input type="text">
      </span>
      <span class="names">职务:
        <input type="text">
      </span>
      <span class="names" style="margin-left: -33px">工作单位:
        <input type="text">
      </span>

      <div class="save">
        <el-button style="background-color: #FF800A;outline: none;border: none;width: 200px;font-size: 16px;" type="primary">保存修改</el-button>
      </div>


    </div>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        styleObj:{
          "color":"#272C4A"
        },
        radio: '1'
      };
    },
    methods: {


    }
  };
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
.warp
  width: 80%;
  margin auto
  .wrap-right
    width: 70%
    float: right
    position relative
    //box-shadow: 0 2px 4px rgba(0, 0, 0, .12)
    .name
      width: 60%
      display inline-block
      margin-top 20px
      font-size 16px
      color #40445E
      input
        width: 60%
        padding 10px
        outline none
        border 1px solid #E5E5E4
        border-radius 5px
    .bc
      width: 100px
      height: 100px
      position absolute
      left: 480px
      top: 0
      right: 100px
      bottom: 0
      background-color: #F2F2F2
      .img
        width: 100px
        height: 100px
        background url("./image/timg.jpg")no-repeat top/100px 100px
    .sex
      margin-top 30px
      color #40445E
      div
        margin-left: 55px;
        margin-top: -16px;
    .state
      margin-top 30px
      .state-span
        font-size 16px
        margin-left -45px
        color #40445E
        .state-select
          font-size 16px
          option
            font-size 16px
    .native
      margin-top 20px
      .state-wrap
        font-size 16px
        margin-left -14px
        color #40445E
        .wrap-select
          font-size 16px
          option
            font-size 16px
    .names
      width: 60%
      display inline-block
      margin-top 20px
      font-size 16px
      color #40445E
      input
        width: 60%
        padding 10px
        outline none
        border 1px solid #E5E5E4
        border-radius 5px
    .save
      width: 30%
      margin: auto
      height: 50px
      margin-top 50px
</style>
