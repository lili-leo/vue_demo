<template>
  <div class="warp">

    <div class="details-wrap">
      <el-breadcrumb  style="font-size: 18px; color: #303551;">当前位置: </el-breadcrumb>
      <el-breadcrumb separator-class="el-icon-arrow-right">

        <el-breadcrumb-item style="margin-left: 16px;color: #303551;" :to="{ path: '/main' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item style="color: red;" :to="{ path: '/profile' }">个人中心</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!--头部-->
    <div class="all-wrap">
      <div class="wrap-left">
        <div class="imgs-wrap">
          <div class="img"></div>
          <div class="text">呵呵</div>
        </div>
        <!--4列表-->
        <div class="project-wrap">
          <div>
            <i class="iconfont icon-xiangmu"></i>
            <ul>
              <li class="font2">我的项目</li>
              <li class="font"><router-link :to="'/patents'">我的专利</router-link></li>
              <li class="font">我的创意</li>
              <li class="font">合同信息</li>
            </ul>
          </div>
          <div>
            <i class="iconfont icon-icon-test"></i>
            <ul>
              <li class="font2">我的关注</li>
              <li class="font">专利</li>
              <li class="font">创意</li>
            </ul>
          </div>
          <div>
            <i class="iconfont icon-xiaoxi"></i>
            <ul>
              <li class="font2"><router-link :to="'/inform'">消息通知</router-link></li>
              <li class="font">系统消息</li>
              <li class="font">服务提醒</li>
              <li class="font">评论回复</li>
            </ul>
          </div>
          <div>
            <i class="iconfont icon-zhanghu"></i>
            <ul>
              <li class="font2"><router-link :to="'/account'">账户管理</router-link></li>
              <li class="font">账户信息</li>
              <li class="font"><router-link :to="'/data'">修改密码</router-link></li>
              <li class="font">退出登录</li>
            </ul>
          </div>
        </div>
      </div>
      <router-view></router-view>
      <!--显示子路由-->



    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [{
          id: 'CN2019',
          name: '2019-09-06 10:21:09',
          amount1: '暂未受理',
          amount2: '暂未受理',
          amount3: '待审核',
        }, {
          id: 'CN2019',
          name: '2019-09-06 10:21:09',
          amount1: '暂未受理',
          amount2: '111111',
          amount3: '审核中',
        }],
        styleObj:{
          "color":"#272C4A"
        }
      };
    },
    methods: {
      arraySpanMethod({ row, column, rowIndex, columnIndex }) {
        if (rowIndex % 2 === 0) {
          if (columnIndex === 0) {
            return [1, 2];
          } else if (columnIndex === 1) {
            return [0, 0];
          }
        }
      },
      handleClick(row) {
        console.log(row);
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
    }
  };
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
.warp
  width: 80%;
  margin auto
  .details-wrap
    width 79%
    height: 30px
    margin 30px auto
    .el-breadcrumb
      font-size: 16px;
      line-height: 1;
      display inline-block
  .all-wrap
    width 79%
    height: 900px
    margin 30px auto
    clear: both;
    .wrap-left
      width: 25%
      height: 800px
      float: left
      box-shadow: 0 2px 4px rgba(0, 0, 0, .12)
      .imgs-wrap
        width: 80px
        height: 80px
        margin 30px auto
        .img
          width: 80px
          height: 80px
          background url("./image/yang.jpg")no-repeat top/80px 80px
          border-radius 50%
        .text
          width: 100%
          margin-top 10px
          text-align center
          color #272C4A
      .project-wrap
        width: 60%
        height: 600px
        margin 50px auto
        div
          width: 100%
          height: 120px
          position relative
          margin-bottom 30px
          .iconfont
            display inline-block
            width 48px
            height: 50px
            font-size 20px
            color #272C4A
            position absolute
            left: 0
            top: 0
            right: 0
            bottom: 0
          ul
            width: 75px
            margin-left 50px
            font-size 18px
            color #272C4A
            cursor pointer
            .font2
              font-size 18px
            li:nth-child(2)
              font-size 16px
            li:nth-child(3)
              font-size 16px
            li
              margin-top 15px
              font-size 16px

</style>
