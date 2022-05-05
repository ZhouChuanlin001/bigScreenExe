<template>
  <boxStyle :width="width" :height="height" titleName="缴费趋势分析" :selectOptionData="selectOptionData" titleWidth="574px">
    <div
      ref="barChart"
      class="BarBg"
      :style="{width:(width-18)+'px',height:(height-60)+'px'}"
    ></div>
  </boxStyle>
</template>

<script>
export default {
  name: 'index',
  props: {
    width: {
      type: Number,
      default: 600
    },
    height: {
      type: Number,
      default: 320
    },
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
      selectOptionData: [{name: '全部', value: '全部'}],
      data: []
    }
  },
  mounted () {
    this.initChart()
  },
  methods: {
    /**
     * 初始化echarts
     * */
    initChart () {
      this.data = [
        {
          year: '2011',
          zjze: 200,
          tb: 62
        },
        {
          year: '2012',
          zjze: 490,
          tb: 55
        },
        {
          year: '2013',
          zjze: 640,
          tb: 48
        },
        {
          year: '2014',
          zjze: 422,
          tb: 46
        },
        {
          year: '2015',
          zjze: 440,
          tb: 52
        },
        {
          year: '2016',
          zjze: 640,
          tb: 57
        },
        {
          year: '2017',
          zjze: 650,
          tb: 45
        },
        {
          year: '2018',
          zjze: 570,
          tb: 42
        },
        {
          year: '2019',
          zjze: 590,
          tb: 50
        },
        {
          year: '2020',
          zjze: 440,
          tb: 43
        },
        {
          year: '2021',
          zjze: 610,
          tb: 60
        },
        {
          year: '2022',
          zjze: 470,
          tb: 61
        }

      ]
      this.chart = this.$echarts.init(this.$refs.barChart)
      this.options(this.data)
      setInterval(this.animation, 2000)
    },
    /**
     * options配置
     * data {Array} 图形数据
    * */
    options (data) {
      let zjze = []
      let zjze1 = []
      let zjze2 = []
      let tb = []
      let year = []
      data.forEach(item => {
        zjze.push(item.zjze)
        zjze1.push(item.zjze + 6)
        zjze2.push(item.zjze + 12)
        if (year.length < 11) {
          year.push(item.year)
        }
        tb.push(item.tb)
      })

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
          top: 26,
          textStyle: {
            color: '#9ba6b1'
          },
          data: ['征缴总额', '同比']
        },
        xAxis: [
          {
            type: 'category',
            data: year,
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
            barGap: 0,
            data: zjze
          },
          {
            type: 'bar',
            barWidth: 8,
            tooltip: {
              show: false
            },
            barGap: -0.4,
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
            data: zjze1
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
            data: zjze2
          },
          {
            name: '同比',
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
            data: tb
          }
        ]
      }

      this.chart.setOption(option)
    },
    animation () {
      let value = [...this.data]
      this.data.shift()
      this.data.push(
        {
          year: JSON.stringify(Number(value.pop().year) + 1),
          zjze: Math.floor(Math.random() * (700 - 200)) + 200,
          tb: Math.floor(Math.random() * (70 - 40)) + 40
        }
      )
      this.options(this.data)
    }
  }

}
</script>

<style scoped>
 .BarBg{
   background: url('../../assets/imgs/bg_line.png') no-repeat;
   background-position: 45px 165px;
   background-size: 88%;
 }
</style>
