<template>
  <div>

    <div class="right">
      <div class="header-img">
        <p>我们的服务</p>
      </div>
      <p class="content">
        深圳极别科技有限公司成立于2017年11月，是一家致力于为专利发明人和有创新想法者提供全程辅助的
        互联网科技公司，主要从事专利产品研发、生产、销售和通过自主研发的平台服务各领域发明人，使得
        发明人的概念或项目快速成型落地。通过收集有市场潜力的专利项目，解决产品从创新到实际应用
        过程中遇到的各种困难，实现产品创新的市场价值，为专利产品的研发、生产、销售提供完善的流程
        服务。
      </p>
      <p class="down">
        极别科技通过自主研发，已申请国家发明专利2项，使用新型专利11项，软件著作权3项等。目前处于
        研发阶段的产品2个，测试阶段的产品有1个，已研发成功并量产的产品两个，后续更多的自研专利产品及
        合作的专利产品将陆续量产并上线销售。
      </p>

      <div class="wrap-img">

      </div>
    </div>

  </div>


</template>

<script>
  export default {
    data(){
      return {

      }
    },

    methods:{

    },
  };

</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  .right
    width: 77%
    height: 100%
    float: right
    .header-img
      width: 100%
      height: 350px
      background-color: #8491B3
      p
        color #fff
        line-height 350px
        text-align center
        font-weight: 400
        font-size 24px
    .content
      width: 100%
      margin-top 40px
      line-height 36px
      color #000000
    .down
      line-height 36px
      color #000000
    .wrap-img
      display block
      margin-top 30px
      width: 100%;
      height: 350px;
      background: url(./image/timg.jpg) no-repeat top/100% 350px;


</style>
