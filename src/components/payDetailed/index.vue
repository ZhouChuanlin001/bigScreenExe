<template>
  <boxStyle
    :titleWidth="935"
    :titleName="'各险种缴费明细'"
    :showSelect="false"
    :showTab="true"
    @changeTabs="changeTab"
  >
    <div
      ref="ballChart"
      class="ball"
      :style="{width:(width-18)+'px',height:(height-60)+'px'}"
    >
      <div class=" ball-title">
        <div class="ball-title-unit">单位：万元/万人</div>
        <div class="ball-title-tabName">{{tabTitle}}</div>
      </div>
      <div class="transformBox">
        <div class="transform">
        </div>
      </div>
      <ballBox class="ballRotateX ballLevy" :data="data[0]" :url="'球02-蓝色拷贝2'"></ballBox>
      <ballBox class="ballRotateX ballOne" :data="data[1]" :url="'球02-蓝色'"></ballBox>
      <ballBox class="ballRotateX ballEmp" :data="data[2]" :url="'球02-蓝色拷贝'"></ballBox>
      <ballBox class="ballRotateX ballRetreat" :data="data[3]" :url="'球02-蓝色拷贝3'"></ballBox>
      <ballBox class="ballRotateX ballPsnNum" :textColor="'#f7caa3'" :data="data[4]" :url="'球03-橙色拷贝'"></ballBox>
      <ballBox class="ballRotateX ballTaxes" :textColor="'#f7caa3'" :data="data[5]" :url="'球03-橙色'"></ballBox>
      <div class="titleBall">
        <div class="titleBall-num">455.7</div>
        <div class="titleBall-desc">征缴总金额</div>
      </div>
    </div>
  </boxStyle>
</template>

<script>
import ballBox from './part/ball'

export default {
  name: 'payDetailed',
  components: {ballBox},
  props: {
    width: {
      type: Number,
      default: 960
    },
    height: {
      type: Number,
      default: 489
    },
    data: {
      type: Array,
      default: () => [
        {
          value: '65.7',
          name: '补缴金额'
        },
        {
          name: '个人缴费金额',
          value: '155.7'
        },
        {
          name: '单位缴费金额',
          value: '288.7'
        },
        {
          name: '退缴金额',
          value: '98.6'
        },
        {
          name: '缴费总人数',
          value: '254.6'
        },
        {
          name: '征缴率',
          value: '96%'
        }
      ]
    }
  },
  data () {
    return {
      tabTitle: '城职养老'
    }
  },
  mounted () {
  },
  beforeDestroy () {
    this.$echarts.dispose(this.chart)
    this.chart = null
  },
  methods: {
    /**
     * @param {Object} value 子组件tab切换返回的obj
     * */
    changeTab (value) {
      this.tabTitle = value.value
    }
  }
}
</script>

<style scoped lang="less">
  .ball{
    background-image: url("../../assets/imgs/底部001.png");
    background-position: 50px 80px;
    background-repeat: no-repeat;
    position: absolute;
    .transformBox{
      position: absolute;
      width: 750px;
      height: 750px;
      margin-top: -164px;
      margin-left: 100px;
      transform-style: preserve-3d;
      transform: rotateX(70deg);
      .transform{
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url("../../assets/imgs/pieBg.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100%;
        animation: fastspin 6s linear infinite 0.5s;
      }
    }
    .ballRotateX{
      position: absolute;
    }
    .ballOne{
      left: 208px;
      top: 236px;
    }
    .ballLevy{
      left: 75px;
      top: 126px;
    }
    .ballEmp{
      right: 208px;
      top: 236px;
    }
    .ballRetreat{
      right: 75px;
      top: 126px;
    }
    .ballPsnNum{
      left: 340px;
      top: 166px;
    }
    .ballTaxes{
      right: 340px;
      top: 166px;
    }
    .titleBall{
      position: absolute;
      top: -0px;
      left: 340px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 264px;
      height: 264px;
      background-image: url("../../assets/imgs/球01.png");
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      animation: titleBallFloat 4s linear infinite 0.5s;
      .titleBall-num{
        text-align: center;
        font-family: DINPro-Bold;
        font-size: 24px;
        color: #8a2500;
      }
      .titleBall-desc{
        font-family: PingFang-SC-Bold;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 24px;
        letter-spacing: 0px;
        color: #8a2500;
      }
    }
    .ball-title{
      position: relative;
      .ball-title-unit{
        position: absolute;
        left: 42px;
        top: 34px;
        font-size: 14px;
        color: #a9b5c0;
      }
      .ball-title-tabName{
        position: absolute;
        left: 432px;
        top: 34px;
        text-align: center;
        font-size: 20px;
        animation: titleBallFloat 4s linear infinite 0.5s;
      }
    }
  }
  @keyframes fastspin {
    from {
      transform: rotateZ(360deg);
    }
    to {
      transform: rotateZ(0deg);
    }
  }
  @keyframes titleBallFloat{
    0%{
      transform: translate(0px, 0px);
    }
    25%{
      transform: translate(0px, 6px);
    }
    50%{
      transform: translate(0px, 0px);
    }
    75%{
      transform: translate(0px, -6px);
    }
    100%{
      transform: translate(0px, 0px);
    }
  }
</style>
