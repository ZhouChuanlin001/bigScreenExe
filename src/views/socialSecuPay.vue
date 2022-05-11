<template>
  <screenAdap>
    <div class="content">
      <div class="content-title">
        <div class="content-title-dateSelect">
          {{nowDate | dateFormat}}
        </div>
        <div class="content-title-mid">
            <h3>社保缴费分析</h3>
        </div>
        <div class="content-title-nowDate">
          {{nowDate | dateFormat('YYYY-MM-DD hh:mm:ss')}}
        </div>
      </div>
      <div class="content-list box">
        <listBox></listBox>
      </div>
      <div class="chartModelBox">
        <!--各险种缴费分布-->
        <div class="chartModelBox-payDis">
          <payDistribution></payDistribution>
        </div>
        <!--各险种缴费明细-->
        <div class="chartModelBox-payDetail">
          <payDetailed></payDetailed>
        </div>
        <!--各险种补缴/退缴情况-->
        <div class="chartModelBox-payRetreat">
          <payRetreat></payRetreat>
        </div>
        <!--缴费趋势分析-->
        <div class="chartModelBox-payTrend">
          <payTrend></payTrend>
        </div>
        <!--征缴趋势分析-->
        <div class="chartModelBox-lev">
          <levyTrend></levyTrend>
        </div>
        <!--补缴退缴趋势分析-->
        <div class="chartModelBox-retreat">
          <retreatTrend></retreatTrend>
        </div>
      </div>
    </div>
  </screenAdap>
</template>

<script>
import screenAdap from '@/components/screenAdap'
import listBox from '@/components/listBox'
import payDistribution from '@/components/payDistribution'
import payDetailed from '@/components/payDetailed'
import payRetreat from '@/components/payRetreat'
import payTrend from '@/components/payTrend'
import levyTrend from '@/components/levyTrend'
import retreatTrend from '@/components/retreatTrend'

export default {
  name: 'socialSecuPay',
  components: {screenAdap, listBox, payDistribution, payDetailed, payRetreat, payTrend, levyTrend, retreatTrend},
  data () {
    return {
      nowDate: new Date(),
      date: '',
      timer: ''
    }
  },
  mounted () {
    this.timer = setInterval(this.getDate, 1000)
  },
  beforeDestroy () {
    clearInterval(this.timer)
    this.timer = ''
  },
  methods: {
    /**
     * @description 获取当前时间的方法
     */
    getDate () {
      this.nowDate = new Date()
    }

  },
  filters: {
    dateFormat: function (date, format = 'YYYY/MM/DD') {
      let y = date.getFullYear()
      let M = date.getMonth() + 1
      let d = date.getDate()
      let H = date.getHours()
      let m = date.getMinutes()
      let s = date.getSeconds()

      if (format === 'YYYY/MM/DD') {
        return y + '/' + (M < 10 ? ('0' + M) : M) + '/' + (d < 10 ? ('0' + d) : d)
      } else if (format === 'YYYY-MM-DD hh:mm:ss') {
        return y + '-' + (M < 10 ? ('0' + M) : M) + '-' + (d < 10 ? ('0' + d) : d) + ' ' + (H < 10 ? ('0' + H) : H) + ':' + (m < 10 ? ('0' + m) : m) + ':' + (s < 10 ? ('0' + s) : s)
      }
    }
  }
}
</script>

<style scoped lang="less">
  .content{
    width: 100%;
    height: 100%;
    background-color: #04090e;
    background-image: url("../assets/imgs/title-bottom.png");
    background-repeat: no-repeat;
    background-size: cover;
    &-title{
      height: 52px;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      &-dateSelect{
        margin-top: 15px;
        margin-left: 40px;
        width: 140px;
        height: 28px;
        font-size: 16px;
        line-height: 28px;
        padding-left: 5px;
        box-sizing: border-box;
        background-color: #061524;
        border: solid 1px #134086;
      }
      &-mid>h3{
        width: 156px;
        height: 23px;
        font-family: SourceHanSansSC-Bold;
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 6px;
        letter-spacing: 2px;
        color: #fefefe;
      }
      &-nowDate{
        margin-right: 40px;
        width: 158px;
        height: 52px;
        font-family: PingFang-SC-Bold;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 52px;
        letter-spacing: 0px;
        color: #1b67de;
      }
    }
  }
  .content-list{
    width: 1840px;
    height: 100px;
    margin: 38px auto 0px auto;
  }
  .chartModelBox{
    padding: 0 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    &-payDis{
      width:420px;
      height: 489px
    }
    &-payDetail{
      width:960px;
      height: 490px
    }
    &-payRetreat{
      width:420px;
      height: 489px
    }
    &-payTrend{
      width:600px;
      height: 320px;
      margin-top: 20px
    }
    &-lev{
      width:600px;
      height: 320px;
      margin-top: 20px
    }
    &-retreat{
      width:600px;
      height: 320px;
      margin-top: 20px
    }
  }
</style>
