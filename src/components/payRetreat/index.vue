<template>
  <boxStyle :width="width" :height="height" :showSelect="false" titleName="各险种补缴/退缴情况">
    <div
      ref="radarChart"
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
        name: '补缴',
        value: [
          {
            name: '机关养老',
            value: 420
          },
          {
            name: '失业保险',
            value: 300
          },
          {
            name: '城职养老',
            value: 200
          },
          {
            name: '城居养老',
            value: 350
          },
          {
            name: '工伤保险',
            value: 500
          }
        ]
      },
      {
        name: '退缴',
        value: [
          {
            name: '机关养老',
            value: 500
          },
          {
            name: '失业保险',
            value: 140
          },
          {
            name: '城职养老',
            value: 280
          },
          {
            name: '城居养老',
            value: 260
          },
          {
            name: '工伤保险',
            value: 420
          }
        ]
      }
    ]
    this.initCharts(data)
  },
  methods: {
    /**
     * 初始化echarts图例
     * @param {Array} data 图例所需的数据
     * */
    initCharts (data) {
      this.chart = this.$echarts.init(this.$refs.radarChart)
      this.options(data)
    },
    /**
     * options配置
     * */
    options (data) {
      let bj = []
      let tj = []
      data.forEach(item => {
        item.value.forEach(value => {
          if (item.name === '补缴') {
            bj.push(value.value)
          } else if (item.name === '退缴') {
            tj.push(value.value)
          }
        })
      })
      let max = [...bj].sort((a, b) => {
        return b - a
      })[0]
      let min = [...tj].sort((a, b) => {
        return b - a
      })[0]
      let option = {
        tooltip: {
          trigger: 'item',
          backgroundColor: 'rgba(0,0,0,.5)',
          borderColor: 'rgba(0,0,0,.5)',
          textStyle: {
            color: '#fefefe'
          }
        },
        legend: [
          {
            left: '10%',
            top: '5%',
            data: ['补缴', '退缴'],
            textStyle: {
              fontSize: '14px',
              color: '#9ba6b1'
            },
            icon: 'circle',
            itemWidth: 8, // 标志图形的长度
            itemHeight: 8// 标志图形的宽度
          },
          {
            // top: '35%',
            bottom: '6%',
            left: '10%',
            orient: 'horizontal',
            data: ['补缴'],
            formatter: function (name) {
              var oa = option.series[0].data[0].value
              var num = 0
              oa.forEach((item, index) => {
                num += item
              })
              for (var i = 0; i < oa.length; i++) {
                if (oa[i] === max) {
                  return '\n' + '\n' + '{a|补缴最多险种}' + '\n' + '{d|' + data[0].value[i].name + '}' + '\n' + '{b|' + oa[i] + '}' + '万元' + ' ' + '{c|' + ((Number(oa[i]) / Number(num) * 100).toFixed(2) + '%') + '}'
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
            data: ['退缴'],
            formatter: function (name) {
              var oa = option.series[0].data[1].value
              var num = 0
              oa.forEach((item, index) => {
                num += item
              })
              for (var i = 0; i < oa.length; i++) {
                if (oa[i] === min) {
                  return '\n' + '\n' + '{a|退缴最多险种}' + '\n' + '{d|' + data[1].value[i].name + '}' + '\n' + '{e|' + oa[i] + '}' + '万元' + ' ' + '{f|' + ((Number(oa[i]) / Number(num) * 100).toFixed(2) + '%') + '}'
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
        radar: {
          // shape: 'circle',
          radius: '55%',
          center: ['50%', '40%'],
          splitLine: { // 配置雷达图的每一圈的网格线颜色
            lineStyle: {
              color: '#1320b4'
            }
          },
          splitArea: { // 配置雷达图的网格线背景
            // show: false
            areaStyle: {
              color: ['rgba(250,250,250,0)', 'rgb(34,81,146,0.5)']
            }
          },
          name: { // 配置雷达图的每个指示器的名称颜色
            textStyle: {
              color: '#a5acb8'
            }
          },
          axisLine: { // 配置雷达图的射线样式颜色
            lineStyle: {
              color: '#1320b4'
            }
          },
          indicator: [
            { name: '机关养老', max: 600 },
            { name: '失业保险', max: 600 },
            { name: '城职养老', max: 600 },
            { name: '城居养老', max: 600 },
            { name: '工伤保险', max: 600 }
          ]
        },
        series: [
          {
            type: 'radar',
            data: [
              {
                value: bj,
                name: '补缴',
                areaStyle: {
                  color: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.6,
                    colorStops: [{
                      offset: 0, color: 'rgba(104,83,67,0.8)' // 0% 处的颜色
                    }, {
                      offset: 1, color: 'rgb(250,124,24)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                  }
                },
                itemStyle: {
                  color: '#f8b032',
                  borderWidth: 5
                },
                lineStyle: {
                  color: '#ef8426',
                  width: 1
                }
              },
              {
                value: tj,
                name: '退缴',
                areaStyle: {
                  color: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.8,
                    colorStops: [{
                      offset: 0, color: 'rgba(53,75,93,0.8)' // 0% 处的颜色
                    }, {
                      offset: 1, color: 'rgb(8,159,245)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                  }
                },
                itemStyle: {
                  color: '#32d3ec',
                  borderWidth: 5
                },
                lineStyle: {
                  color: '#32d3ec',
                  width: 1
                }
              }
            ]
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
