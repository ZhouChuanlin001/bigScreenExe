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
    </div>
  </screenAdap>
</template>

<script>
import screenAdap from '@/components/screenAdap'

export default {
  name: 'socialSecuPay',
  components: {screenAdap},
  data () {
    return {
      nowData: this.getDate()
    }
  },
  mounted () {
    setTimeout(this.getDate, 1000)
  },
  methods: {
    /**
     * @description 获取当前时间的方法
     */
    getDate () {
      return this.dateTimeToString(new Date())
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
</style>
