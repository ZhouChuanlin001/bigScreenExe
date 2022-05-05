<template>
  <div class="list">
    <div class="list-item" v-for="item in listData" :key="item.title">
      <img :src="item.url" alt="">
      <div class="list-desc">
        <div class="list-item-tltle">
          {{item.title}}
        </div>
        <div class="list-item-data">
          <span class="num">{{item.num}}</span>
          <span>{{item.company}}</span>
          <span class="percentage" :style="{color:item.percentage[0]=='-'?'green':'red'}">{{item.percentage}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: {
    titleList: {
      type: Array,
      default: () => [
        {
          url: require('../../assets/imgs/01_70.png'),
          title: '个人缴费金额',
          company: '万元',
          num: '282',
          percentage: '+23%'
        },
        {
          url: require('../../assets/imgs/01_38.png'),
          title: '单位缴费金额',
          company: '万元',
          num: '',
          percentage: ''
        },
        {
          url: require('../../assets/imgs/01_7.png'),
          title: '征缴总金额',
          company: '万元',
          num: '',
          percentage: ''
        },
        {
          url: require('../../assets/imgs/01_75.png'),
          title: '缴费总人数',
          company: '万人',
          num: '',
          percentage: ''
        },
        {
          url: require('../../assets/imgs/01_44.png'),
          title: '征缴率',
          company: '',
          num: '',
          percentage: ''
        },
        {
          url: require('../../assets/imgs/01_62.png'),
          title: '补缴金额',
          company: '万元',
          num: '',
          percentage: ''
        },
        {
          url: require('../../assets/imgs/01.png'),
          title: '退费金额',
          company: '万元',
          num: '',
          percentage: ''
        }
      ]
    },
    data: {
      type: Array,
      default: () => [
        {
          title: '个人缴费金额',
          num: '282',
          percentage: '+23%'
        },
        {
          title: '单位缴费金额',
          num: '86.56',
          percentage: '-0.2%'
        },
        {
          title: '征缴总金额',
          num: '234.5',
          percentage: '+2.5%'
        },
        {
          title: '缴费总人数',
          num: '34.56',
          percentage: '+2.5%'
        },
        {
          title: '征缴率',
          num: '96%',
          percentage: '+2.5%'
        },
        {
          title: '补缴金额',
          num: '243.6',
          percentage: '+2.5%'
        },
        {
          title: '退费金额',
          num: '34.56',
          percentage: '+2.5%'
        }
      ]
    }
  },
  data () {
    return {
      listData: []
    }
  },
  methods: {

  },
  mounted () {
    this.data.forEach(item => {
      this.titleList.forEach(val => {
        if (val.title === item.title) {
          this.listData.push({...val, ...item})
        }
      })
    })
  }
}
</script>

<style scoped lang="less">
  .list{
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding-left: 10px;
    .list-desc{
      margin-left: 10px;
    }
    .list-item{
      width: 242px;
      height: 71px;
      margin-top: 15px;
      display: flex;
      justify-content: center;
      flex-direction: row;
      border-right:black 1px solid ;
      border-image: -webkit-linear-gradient(#080e15, #2383ed,#080e15) 0 20 0;
      img{
        width: 70px;
        height: 70px;
      }
      .list-item-tltle{
          width: 84px;
          height: 14px;
          font-family: PingFang-SC-Medium;
          font-size: 14px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 40px;
          letter-spacing: 0px;
          color: #a9b5c0;
      }
      .list-item-data{

        margin-top: 15px;
        font-family: PingFang-SC-Medium;
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 40px;
        letter-spacing: 0px;
        color: #a9b5c0;
        .num{
          margin-right: 10px;
          width: 63px;
          height: 19px;
          font-family: PingFang-SC-Bold;
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 40px;
          letter-spacing: 0px;
          color: #ffffff;
        }
        .percentage{
          margin-left: 10px;
        }
      }
    }
  }
</style>
