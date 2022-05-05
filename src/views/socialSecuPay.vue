<template>
  <screenAdap>
    <div class="content">
      <div class="content-title">
        <div class="content-title-dateSelect">

        </div>
        <div class="content-title-mid">
            <h3>社保缴费分析</h3>
        </div>
        <div class="content-title-nowDate">
          {{nowData}}
        </div>
      </div>
      <div class="content-list box">
        <listBox></listBox>
      </div>
      <div class="chartModelBox">
        <payDistribution></payDistribution>
        <payDetailed></payDetailed>
        <payRetreat></payRetreat>
        <payTrend></payTrend>
        <levyTrend></levyTrend>
        <retreatTrend></retreatTrend>
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
      nowData: '',
      titleList: []
    }
  },
  mounted () {
    setInterval(this.getDate, 1000)
  },
  methods: {
    /**
     * @description 获取当前时间的方法
     */
    getDate () {
      this.nowData = this.dateTimeToString(new Date())
    }

  },
  watch: {
    nowData: {
      handler: function (now, old) {
        // console.log(now)
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
    .content-title{
      height: 52px;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      .content-title-dateSelect{
        margin-top: 15px;
        margin-left: 40px;
        width: 140px;
        height: 28px;
        background-color: #061524;
        border: solid 1px #134086;
      }
      .content-title-mid>h3{
        width: 156px;
        height: 23px;
        font-family: SourceHanSansSC-Bold;
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 40px;
        letter-spacing: 2px;
        color: #fefefe;
      }
      .content-title-nowDate{
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
  }
</style>
