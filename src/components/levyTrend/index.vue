<template>
  <boxStyle titleName="征缴趋势分析" :width="width" :height="height" :titleWidth="'574px'" :showSelect="false">
    <div
      ref="lineChart"
      class="barBg"
      :style="{width:(width-18)+'px',height:(height-60)+'px'}"
    ></div>
  </boxStyle>
</template>

<script>
import { autoHover } from '../../assets/js/tool'
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
    xAxis: {
      type: Object,
      default: () => ({
        data: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021']
      })
    },
    yAxis: {
      type: Array,
      default: () => {
        return [
          {
            name: '缴费率(%)'
          },
          {
            name: '同比(%)'
          }
        ]
      }
    },
    data: {
      type: Array,
      default: () => {
        return [
          {
            name: '城职养老',
            value: [62, 55, 48, 46, 52, 57, 45, 42, 50, 43, 60, 61]
          },
          {
            name: '失业保险',
            value: [35, 34, 46, 42, 26, 33, 31, 36, 48, 42, 21, 37]
          },
          {
            name: '机关保险',
            value: [42, 33, 52, 64, 38, 56, 42, 38, 53, 48, 60, 69]
          }
        ]
      }
    }
  },
  data () {
    return {
      tootipTimer: 0
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
      this.chart = this.$echarts.init(this.$refs.lineChart)
      this.options()
    },
    /**
     * options配置
     * */
    options () {
      let areaStyleList = [
        {
          normal: {
            color: new this.$echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: 'rgba(0, 212, 189,0.3)'
                },
                {
                  offset: 1,
                  color: 'rgba(0, 212, 189,0.1)'
                }
              ],
              false
            )
          }
        },
        {
          normal: {
            color: new this.$echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: 'rgba(0, 212, 189,0.3)'
                },
                {
                  offset: 1,
                  color: 'rgba(0, 212, 189,0.1)'
                }
              ],
              false
            )
          }
        },
        {
          normal: {
            color: new this.$echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: 'rgba(3212, 60, 88,0.3)'
                },
                {
                  offset: 1,
                  color: 'rgba(212, 60, 88,0.1)'
                }
              ],
              false
            )
          }
        }
      ]
      let colorList = [
        '#0387fe', '#3cd4bd', '#d43c58'
      ]
      let series = []
      this.data.forEach((item, index) => {
        series.push(
          {
            name: item.name,
            type: 'line',
            yAxisIndex: 0,
            showSymbol: false,
            lineStyle: {
              normal: {
                color: colorList[index],
                shadowColor: 'rgba(0,0,0,0.3)'
              }
            },
            areaStyle: areaStyleList[index],
            data: item.value
          }
        )
      })

      let option = {
        tooltip: {
          trigger: 'axis',
          backgroundColor: 'rgba(7, 23, 55, 6)',
          borderColor: '#2d4581',
          textStyle: {
            color: '#ffffff'
          },
          formatter: param => {
            return param[0].name + '期' + '<br>' + param[0].seriesName + ':' + param[0].value + '%' + '<br>' +
              param[1].seriesName + ':' + param[1].value + '%' + '<br>' +
              param[2].seriesName + ':' + param[2].value + '%' + '<br>'
          }
        },
        grid: {
          top: 50,
          x: 20,
          x2: 50,
          y2: 40
        },
        legend: {
          show: true,
          itemWidth: 10,
          itemHeight: 1,
          left: 120,
          top: 16,
          textStyle: {
            color: '#9ba6b1'
          }
        },
        xAxis: Object.assign({
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
        }, this.xAxis),
        yAxis: [Object.assign({
          type: 'value',
          name: '缴费率(%)',
          nameTextStyle: {
            color: '#9ba6d1'
          },
          min: 0,
          max: 70,
          // 强制设置坐标轴分割间隔。
          interval: 10,
          axisLabel: {
            textStyle: {
              color: '#9ba6b1'
            }
          },
          offset: -20,
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
        }, this.yAxis[0]),
        Object.assign({
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
        }, this.yAxis[1])
        ],
        series: series
      }

      this.chart.setOption(option)
      this.tootipTimer && this.tootipTimer.clearLoop() // this.tootipTimer 在data里定义
      this.tootipTimer = 0
      this.tootipTimer = autoHover(this.chart, option, 11, 3000)
    }
    // /**
    //  * 显示tooltip
    //  * @param {Object} option 图例配置项
    //  * */
    // showTool (option) {
    //   let total = option.xAxis.data.length
    //   let count = 0
    //   console.log(this.chart)
    //   let tooltip = this.chart.component.tooltip
    //   setInterval(function () {
    //     var curr = count % total
    //
    //     // 3.0以上版本的showTip使用方式
    //     // myChart.dispatchAction({type: 'showTip', seriesIndex: '1', dataIndex: '1'});
    //     tooltip.showTip({seriesIndex: '0', dataIndex: curr})
    //     count += 1
    //   }, 1000)
    // }
  }
}
</script>

<style scoped>
  .barBg{
    background: url('../../assets/imgs/bg_line.png') no-repeat;
    background-position: 45px 165px;
    background-size: 85%;
  }
</style>
