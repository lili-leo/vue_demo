<template>
  <div class="warp">

    <div class="wrap-right">
      <div class="all">
        <ul>
          <li>全部</li>
          <li>待审核</li>
          <li>审核中</li>
          <li>已通过</li>
          <li>未通过</li>
        </ul>
      </div>
      <div class="all-four">
        <el-table
                :data="tableData"
                style="width: 100%;  margin-top: 20px"
                :header-cell-style='styleObj'
        >
          <el-table-column
                  prop="id"
                  label="专利号码"
                  width="100"
          >
          </el-table-column>
          <el-table-column
                  prop="name"
                  label="提交时间"
                  width="100"
          >
          </el-table-column>
          <el-table-column
                  prop="amount1"
                  label="受理时间"
          >
          </el-table-column>
          <el-table-column
                  prop="amount2"
                  label="受理编号">
          </el-table-column>
          <el-table-column
                  prop="amount3"
                  label="状态">
          </el-table-column>
          <el-table-column
                  fixed="right"
                  label="专利状态"
                  width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">公开</el-button>
              <el-button type="text" size="small">保密</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
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
      height: 190px
      margin 30px auto
      box-shadow: 0 2px 4px rgba(0, 0, 0, .12)
      .el-table
        color #272C4A
        .el-button
          color #272C4A
</style>
