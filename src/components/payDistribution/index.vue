<template>
  <boxStyle :width="width" :height="height" :showTab="false">
    <div
      ref="pieChart"
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
      default: 420
    },
    height: {
      type: Number,
      default: 489
    }
  },
  mounted () {
    let data = [
      {
        name: '城职养老',
        value: 25
      },
      {
        name: '城居养老',
        value: 24
      },
      {
        name: '机关养老',
        value: 23
      },
      {
        name: '工商保险',
        value: 22
      },
      {
        name: '失业保险',
        value: 21
      }
    ]
    this.initCharts(data)
  },
  beforeDestroy () {
  },
  methods: {
    /**
     * 初始化echarts
     * @param {Array} data 图例所需数据
     * */
    initCharts (data) {
      this.chart = this.$echarts.init(this.$refs.pieChart)
      this.options(data)
    },
    /**
     * options配置
     * @param { Array } data
     * */
    options (data) {
      data = data.sort((a, b) => {
        return b.value - a.value
      })
      let colorList = [
        {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 1,
          y2: 1,
          colorStops: [
            {
              offset: 1,
              color: 'rgba(0, 108, 184,0.5)' // 100% 处的颜色
            },
            {
              offset: 0,
              color: 'rgba(0, 150, 255,0.99)' // 0% 处的颜色
            }
          ],
          globalCoord: false // 缺省为 false
        },
        {
          type: 'linear',
          x: 1,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 1,
              color: 'rgba(21, 150, 202,0.8)' // 100% 处的颜色
            },
            {
              offset: 0,
              color: 'rgba(21, 196, 202,1)' // 0% 处的颜色
            }
          ],
          globalCoord: false // 缺省为 false
        },

        {
          type: 'linear',
          x: 0,
          y: 1,
          x2: 0,
          y2: 0,
          colorStops: [
            {
              offset: 1,
              color: 'rgba(13, 44, 160,0.4)' // 100% 处的颜色
            },
            {
              offset: 0,
              color: 'rgba(16, 56, 206,0.99)' // 0% 处的颜色
            }
          ],
          globalCoord: false // 缺省为 false
        },
        {
          type: 'linear',
          x: 1,
          y: 0,
          x2: 0,
          y2: 0,
          colorStops: [
            {
              offset: 1,
              color: 'rgba(156, 85, 20,0.8)' // 100% 处的颜色
            },
            {
              offset: 0,
              color: 'rgba(232, 126, 30,1)' // 0% 处的颜色
            }
          ],
          globalCoord: false // 缺省为 false
        },
        {
          type: 'linear',
          x: 1,
          y: 1,
          x2: 1,
          y2: 0,
          colorStops: [
            {
              offset: 1,
              color: 'rgb(0, 85, 145)' // 10 0% 处的颜色
            },
            {
              offset: 0,
              color: 'rgb(0, 193, 144)' // 0% 处的颜色
            }
          ],
          globalCoord: false // 缺省为 false
        },
        {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 1,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(254,206,67,0.12)' // 0% 处的颜色
            },
            {
              offset: 1,
              color: '#FECE4391' // 100% 处的颜色
            }
          ],
          globalCoord: false // 缺省为 false
        }
      ]
      let colorLine = ['#71808f', '#71808f', '#71808f', '#71808f', '#71808f']
      let max = data[0].value
      let min = [...data].pop().value
      data.forEach((v, i) => {
        v.labelLine = {
          lineStyle: {
            width: 1,
            color: colorLine[i]
          }
        }
      })
      let option = {
        // 图例组件
        legend: [
          {
            // top: '35%',
            bottom: '6%',
            left: '10%',
            orient: 'horizontal',
            data: ['城职养老'],
            formatter: function (name) {
              var oa = option.series[0].data
              var num = 0
              oa.forEach((item, index) => {
                num += item.value
              })
              for (var i = 0; i < oa.length; i++) {
                if (oa[i].value === max) {
                  return '\n' + '\n' + '{a|缴费最多险种}' + '\n' + '{d|' + name + '}' + '\n' + '{b|' + oa[i].value + '}' + '万元' + ' ' + '{c|' + ((Number(oa[i].value) / Number(num) * 100).toFixed(2) + '%') + '}'
                }
              }
            },
            textStyle: {
              rich: {
                a: {
                  fontSize: '12px',
                  // lineHeight: 20,
                  color: '#949fa9'
                },
                b: {
                  color: '#6adafd',
                  fontSize: '16px'
                },
                c: {
                  color: '#6adafd',
                  fontSize: '16px'
                },
                d: {
                  fontSize: '16px',
                  color: '#ffffff'
                },
                e: {
                  color: '#ec903d',
                  fontSize: '16px'
                },
                f: {
                  color: '#ec903d',
                  fontSize: '16px'
                }
              },
              color: '#949fa9',
              fontSize: 12,
              lineHeight: 25
            },
            itemGap: 60,
            icon: 'circle',
            itemWidth: 8, // 标志图形的长度
            itemHeight: 8// 标志图形的宽度
          },
          {
            // top: '35%',
            bottom: '6%',
            left: '50%',
            orient: 'horizontal',
            data: ['失业保险'],
            formatter: function (name) {
              var oa = option.series[0].data
              var num = 0
              oa.forEach((item, index) => {
                num += item.value
              })
              for (var i = 0; i < oa.length; i++) {
                if (oa[i].value === min) {
                  return '\n' + '\n' + '{a|缴费最少险种}' + '\n' + '{d|' + name + '}' + '\n' + '{e|' + oa[i].value + '}' + '万元' + ' ' + '{f|' + ((Number(oa[i].value) / Number(num) * 100).toFixed(2) + '%') + '}'
                }
              }
            },
            textStyle: {
              rich: {
                a: {
                  fontSize: '12px',
                  // lineHeight: 20,
                  color: '#949fa9'
                },
                b: {
                  color: '#6adafd',
                  fontSize: '16px'
                },
                c: {
                  color: '#6adafd',
                  fontSize: '16px'
                },
                d: {
                  fontSize: '16px',
                  color: '#ffffff'
                },
                e: {
                  color: '#ec903d',
                  fontSize: '16px'
                },
                f: {
                  color: '#ec903d',
                  fontSize: '16px'
                }
              },
              color: '#949fa9',
              fontSize: 12,
              lineHeight: 25
            },
            itemGap: 60,
            icon: 'circle',
            itemWidth: 8, // 标志图形的长度
            itemHeight: 8// 标志图形的宽度
          }
        ],
        graphic: {
          elements: [
            {
              type: 'image',
              left: '26%',
              top: '12%',
              z: 3,
              style: {
                image: require('../../assets/imgs/pieBg.png'),
                width: 206,
                height: 206
              }
            }
          ]
        },
        series: [
          {
            type: 'pie',
            radius: ['10%', '38%'],
            center: ['51%', '36%'],
            clockwise: true,
            avoidLabelOverlap: true,
            label: {
              show: true,
              lineHeight: 16, // 行高配置
              position: 'outside',
              formatter: function (params) {
                const name = params.name
                return (
                  '{name|' +
                  name +
                  '}' +
                  '\n' +
                  '{val|' +
                  params.value +
                  '}' +
                  '万元'
                )
              },
              textStyle: {
                color: '#9ba6b1',
                rich: {
                  name: {
                    normal: { fontSize: '14px', color: '#9ba6b1' }
                  },
                  val: {
                    fontSize: '16px',
                    color: '#ffffff'
                  }
                }
              }
            },
            itemStyle: {
              normal: {
                color: function (params) {
                  return colorList[params.dataIndex]
                }
              }
            },
            data,
            roseType: 'radius'
          }
        ]
      }
      this.chart.setOption(option)
    }
  }
}
</script>

<style scoped lang="less">

</style>
