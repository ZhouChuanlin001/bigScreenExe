<template>
  <boxStyle titleName="补缴/退缴趋势分析" :selectOptionData="selectOptionData" :titleWidth="574">
    <div
      ref="barChart"
      class="BarBg"
    ></div>
  </boxStyle>
</template>

<script>
export default {
  name: 'retreatTrend',
  props: {
    LineData: {
      type: Array,
      default: () => []
    },
    barData: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      selectOptionData: [{name: '全部', value: '全部'}]
    }
  },
  mounted () {
    this.initChart()
  },
  beforeDestroy () {
    this.$echarts.dispose(this.chart)
    this.chart = null
  },
  methods: {
    /**
       * 初始化echarts
       * */
    initChart () {
      this.chart = this.$echarts.init(this.$refs.barChart)
      this.options()
    },
    /**
       * options配置
       * data {Array} 图形数据
       * */
    options (data) {
      let option = {
        tooltip: {
          trigger: 'axis',
          backgroundColor: 'rgba(0,0,0,.5)',
          borderColor: 'rgba(0,0,0,.5)',
          textStyle: {
            color: '#fefefe'
          }
        },
        grid: {
          top: 50,
          x: 50,
          x2: 40,
          y2: 40
        },
        legend: {
          itemWidth: 8,
          itemHeight: 8,
          left: 120,
          top: 16,
          textStyle: {
            color: '#9ba6b1'
          },
          data: ['征缴总额', '补缴同比', '退缴金额', '退缴同比']
        },
        xAxis: [
          {
            type: 'category',
            data: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
            // 下标
            axisLabel: {
              show: true,
              textStyle: {
                color: '#9ba6b1'
              }
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#3eb2e8'
              }
            },
            // 刻度线
            axisTick: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '金额（万元）',
            nameTextStyle: {
              color: '#9ba6d1'
            },
            min: 0,
            max: 700,
            // 强制设置坐标轴分割间隔。
            interval: 100,
            axisLabel: {
              textStyle: {
                color: '#9ba6b1'
              }
            },
            //  分割线
            splitLine: {
              show: false
            }
          },
          {
            type: 'value',
            name: '同比(%)',
            nameTextStyle: {
              color: '#9ba6b1'
            },
            min: 0,
            max: 70,
            interval: 10,
            axisLabel: {
              textStyle: {
                color: '#9ba6b1'
              }
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#1e3958'
              }
            },
            //  分割线
            splitLine: {
              show: false
            }
          }
        ],
        series: [
          {
            name: '征缴总额',
            type: 'bar',
            yAxisIndex: 0,
            barWidth: 8,
            zlevel: 2,
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: '#147ade' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#00c8c6' // 60% 处的颜色
                    }
                  ],
                  false
                )
              }
            },
            tooltip: {
              valueFormatter: function (value) {
                return value + ' 万元'
              }
            },
            data: [200, 490, 640, 422, 440, 640, 650, 570, 590, 440, 610, 470]
          },
          {
            type: 'bar',
            barWidth: 8,
            tooltip: {
              show: false
            },
            symbolOffset: -0.5,
            zlevel: 1,
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  1,
                  0,
                  0,
                  [
                    {
                      offset: 0,
                      color: 'rgb(7, 17, 94)' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgb(39,111,210)' // 100% 处的颜色
                    }
                  ],
                  false
                )
              }
            },
            data: [206, 496, 646, 428, 446, 646, 656, 576, 596, 446, 616, 476]
          },
          {
            type: 'bar',
            barWidth: 8,
            tooltip: {
              show: false
            },
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  1,
                  0,
                  0,
                  [
                    {
                      offset: 0,
                      color: 'rgb(10,25,144)' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgb(56,123,213)' // 100% 处的颜色
                    }
                  ],
                  false
                )
              }
            },
            data: [212, 502, 652, 434, 452, 652, 662, 582, 602, 452, 622, 482]
          },
          {
            name: '补缴同比',
            type: 'line',
            yAxisIndex: 1,
            symbol: 'image://' + require('../../assets/imgs/6.png'),
            symbolSize: 18,
            zlevel: 5,
            lineStyle: {
              normal: {
                color: '#4d95ff',
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowBlur: 0,
                shadowOffsetY: 5,
                shadowOffsetX: 5
              }
            },
            showAllSymbol: true,
            tooltip: {
              valueFormatter: function (value) {
                return value + ' %'
              }
            },
            label: {
              show: false
            },
            itemStyle: {
              color: '#6c50f3',
              borderColor: '#fff',
              borderWidth: 3,
              shadowColor: 'rgba(0, 0, 0, .3)',
              shadowBlur: 0,
              shadowOffsetY: 2,
              shadowOffsetX: 2
            },
            data: [62, 55, 48, 46, 52, 57, 45, 42, 50, 43, 60, 61]
          },
          {
            name: '退缴金额',
            type: 'bar',
            yAxisIndex: 0,
            barWidth: 8,
            zlevel: 2,
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  1,
                  0,
                  0,
                  [
                    {
                      offset: 0,
                      color: '#a91a32' // 0% 处的颜色
                    },

                    {
                      offset: 1,
                      color: '#f77389' // 100% 处的颜色
                    }
                  ],
                  false
                )
                // color: '#f77389',
              }
            },
            tooltip: {
              valueFormatter: function (value) {
                return value + ' 万元'
              }
            },
            data: [100, 290, 340, 222, 240, 340, 350, 270, 290, 240, 310, 270]
          },
          {
            type: 'bar',
            barWidth: 8,
            tooltip: {
              show: false
            },
            zlevel: 1,
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  1,
                  0,
                  0,
                  [
                    {
                      offset: 0,
                      color: '#7d1425' // 0% 处的颜色
                    },

                    {
                      offset: 1,
                      color: '#722d39' // 100% 处的颜色
                    }
                  ],
                  false
                )
              }
            },
            data: [106, 296, 346, 228, 246, 346, 356, 276, 296, 246, 316, 276]
          },
          {
            type: 'bar',
            barWidth: 8,
            tooltip: {
              show: false
            },
            barGap: -0.7,
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  1,
                  0,
                  0,
                  [
                    {
                      offset: 0,
                      color: '#6d1121' // 0% 处的颜色
                    },

                    {
                      offset: 1,
                      color: '#76323d' // 100% 处的颜色
                    }
                  ],
                  false
                )
              }
            },
            data: [112, 302, 352, 234, 252, 352, 362, 282, 302, 252, 322, 282]
          },
          {
            name: '退缴同比',
            type: 'line',
            yAxisIndex: 1,
            symbol: 'image://' + require('../../assets/imgs/02.png'),
            symbolSize: 18,
            zlevel: 5,
            lineStyle: {
              normal: {
                color: '#d43c58',
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowBlur: 0,
                shadowOffsetY: 5,
                shadowOffsetX: 5
              }
            },
            showAllSymbol: true,
            tooltip: {
              valueFormatter: function (value) {
                return value + ' %'
              }
            },
            label: {
              show: false
            },
            itemStyle: {
              color: '#6c50f3',
              borderColor: '#fff',
              borderWidth: 3,
              shadowColor: 'rgba(0, 0, 0, .3)',
              shadowBlur: 0,
              shadowOffsetY: 2,
              shadowOffsetX: 2
            },
            data: [42, 65, 58, 56, 48, 37, 49, 62, 54, 44, 50, 56]
          }
        ]
      }

      this.chart.setOption(option)
    }
  }

}
</script>

<style scoped>
  .BarBg{
    width: 100%;
    height: 100%;
    background: url('../../assets/imgs/bg_line.png') no-repeat;
    background-position: 45px 165px;
    background-size: 88%;
  }
</style>
