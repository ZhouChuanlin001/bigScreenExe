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
    this.initCharts()
  },
  methods: {
    initCharts (data) {
      this.chart = this.$echarts.init(this.$refs.radarChart)
      this.options(data)
    },
    options (data) {
      let option = {
        title: {
          text: ''
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
                value: [420, 300, 200, 350, 500],
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
                value: [500, 140, 280, 260, 420],
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
