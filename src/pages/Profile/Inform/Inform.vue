<template>
  <div class="warp">

    <div class="wrap-right">
      <div class="all">
        <ul>
          <li>系统消息</li>
          <li>服务提醒</li>
          <li>评论回复</li>
        </ul>
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
    height: 800px
    float: right
    //box-shadow: 0 2px 4px rgba(0, 0, 0, .12)
    .all
      width: 95%
      height: 50px
      margin auto
      box-shadow: 0 2px 4px rgba(0, 0, 0, .12)
      ul
        width: 70%
        display flex
        margin auto
        justify-content space-between
        line-height: 50px
        color #272C4A
        font-size 18px

    .all-four
      width: 95%
      height: 143px
      margin 30px auto
      box-shadow: 0 2px 4px rgba(0, 0, 0, .12)
      .el-table
        color #272C4A
        .el-button
          color #272C4A
</style>
