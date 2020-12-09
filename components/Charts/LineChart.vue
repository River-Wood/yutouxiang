<template>
  <div :id="idName" :class="['chart-container', `${idName}-chart`]" />
</template>

<script>
const defaultColors = ['rgb(0, 206, 247)', 'rgb(22, 250, 176)']
/* const series = [
  {
    name: '升学省一级',
    type: 'line',
    stack: '人',
    areaStyle: { normal: {}},
    data: [320, 332, 301, 334, 390, 330, 320, 500]
  },
  {
    name: '升学',
    type: 'line',
    stack: '人',
    areaStyle: { normal: {}},
    data: [820, 932, 901, 934, 1290, 1330, 1320, 500]
  }
] */
export default {
  name: 'LineChart',
  props: {
    idName: {
      type: String,
      default: ''
    },
    option: {
      type: Object,
      default: _ => {}
    },
    lineData: {
      type: Array,
      default: _ => []
    },
    section: {
      type: Array,
      default: _ => []
    }

  },

  data () {
    return {
      fontSize: 10.76,
      tooltipFontSize: 12,
      iconSize: 9,
      tooltipWidth: 180,
      tooltipPadding: 8,
      tooltipBallSize: 8,
      chart: null,

      defaultOption: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          },
          backgroundColor: '#4055DF',
          textStyle: {
            color: '#FFFFFF',
            fontSize: 12
          }
        },
        legend: {
          icon: 'roundRect',
          itemHeight: 9,
          itemWidth: 9,
          right: 0,
          top: 0,
          data: ['重点', '普通'],
          textStyle: {
            fontSize: 10.75,
            color: '@sidebarItemColor'
          }
        },
        grid: {
          top: 37,
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          axisLine: {
            lineStyle: {
              fontSize: 10.75,
              color: 'rgba(135, 160, 185, 1)'
            }
          },
          boundaryGap: false,
          data: []
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(122, 122, 122, 0.3)'
            }
          },
          axisLine: {
            lineStyle: {
              fontSize: 10.75,
              color: 'rgba(135, 160, 185, 1)'
            }
          }
        },
        series: []
      }
    }
  },

  watch: {
    'lineData' (data) {
      const { chart, defaultOption, section } = this
      if (chart) {
        chart.clear()
        defaultOption.series = data
        defaultOption.xAxis.data = section
        chart.setOption(defaultOption, true)
      }
    }
  },

  mounted () {
    this.defaultOption.series = this.lineData
    this.defaultOption.xAxis.data = this.section
    this.init()
  },

  methods: {
    init () {
      if (!this.idName) return

      const { defaultOption, option } = this
      let { fontSize, iconSize, tooltipFontSize, tooltipWidth, tooltipBallSize, tooltipPadding } = this

      defaultOption.series = defaultOption.series.map(sitem => {
        const res = { ...sitem }
        res.data = [...res.data]
        res.data.sort(() => Math.random() - 0.5)
        return res
      })

      fontSize = window.innerHeight / 1080 * fontSize
      iconSize = window.innerWidth / 1920 * iconSize
      tooltipFontSize = window.innerHeight / 1080 * tooltipFontSize
      tooltipWidth = window.innerWidth / 1920 * tooltipWidth
      tooltipBallSize = window.innerWidth / 1920 * tooltipBallSize
      tooltipPadding = window.innerWidth / 1920 * tooltipPadding

      defaultOption.yAxis.axisLine.lineStyle.fontSize = fontSize
      defaultOption.xAxis.axisLine.lineStyle.fontSize = fontSize
      defaultOption.legend.textStyle.fontSize = fontSize
      defaultOption.legend.itemHeight = iconSize
      defaultOption.legend.itemWidth = iconSize
      defaultOption.tooltip.textStyle.tooltipFontSize = tooltipFontSize
      defaultOption.tooltip.padding = tooltipPadding

      defaultOption.tooltip.extraCssText = `width:${tooltipWidth}px;`
      defaultOption.tooltip.formatter = params => {
        let str = ''
        let count = 0
        let header = ''

        params.forEach(({ axisValueLabel, seriesName, value, color }) => {
          if (!header) header = `${axisValueLabel}`
          count += value
          str += `<span style="margin-right:${tooltipBallSize}px;width:${tooltipBallSize}px;height:${tooltipBallSize}px;border-radius:50%;background-color:${color};display:inline-block;"></span>${seriesName}<span style="float:right;">${value}人</span><br />`
        })

        return `${header}<span style="float:right;">总数: ${count}人</span><br />${str}`
      }

      Object.assign(defaultOption, option)

      let color = option.color
      if (!color || !color.length) color = defaultColors
      defaultOption.series.forEach((item, index) => {
        const itemColor = color[index > color.length - 1 ? color.length % index : index]
        const endColor = itemColor.replace('b(', 'ba(')
        if (!item.areaStyle) item.areaStyle = { normal: {}}
        item.areaStyle.normal.color = new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: itemColor },
          { offset: 1, color: endColor.replace(')', ',.2)') }
        ])
      })

      setTimeout(() => {
        const chart = this.$echarts.init(document.getElementById(this.idName), null, { rerender: 'svg' })

        chart.setOption(defaultOption)

        if (!window.charts) window.charts = {}
        window.charts[chart.id] = chart
        window.onresize = _ => {
          const obj = window.charts || {}
          for (const key in obj) {
            const item = obj[key]
            item.resize && item.resize()
          }
        }

        this.chart = chart
        this.$emit('inited', chart)
      }, 600)
    }
  }
}
</script>

<style lang="less" scoped>
  .chart-container {
    .Flex-1;

    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
</style>
