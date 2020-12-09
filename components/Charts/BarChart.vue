<template>
  <div :id="idName" :class="['chart-container', `${idName}-chart`]" />
</template>

<script>
import { formateData } from '@/utils/chartDataFormat'

export default {
  name: 'BarChart',
  props: {
    idName: {
      type: String,
      default: ''
    },
    option: {
      type: Object,
      default: _ => {}
    },
    barData: {
      type: Object,
      default: _ => null
    }
  },

  data () {
    return {
      fontSize: 10.76,
      iconSize: 9,
      tooltipFontSize: 12,
      tooltipWidth: 180,
      tooltipPadding: 8,
      tooltipBallSize: 8,

      chart: null,

      defaultOption: {
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          },
          textStyle: {
            fontSize: 12
          }
        },
        legend: {
          icon: 'roundRect',
          itemHeight: 9,
          itemWidth: 9,
          right: 0,
          top: 0,
          data: ['男', '女'],
          textStyle: {
            fontSize: 10.76,
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
        yAxis: {
          type: 'value',
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              fontSize: 10.76,
              color: 'rgba(135, 160, 185, 1)'
            }
          }
        },
        xAxis: {
          type: 'category',
          data: ['01月', '02月', '03月', '04月', '05月', '06月', '07月', '08月', '09月', '10月', '11月', '12月'],
          axisLine: {
            lineStyle: {
              fontSize: 10.76,
              color: 'rgba(135, 160, 185, 1)'
            }
          }
        },
        series: [
          {
            name: '男',
            type: 'bar',
            stack: '总数',
            barCategoryGap: '70%',
            data: []
          },
          {
            name: '女',
            type: 'bar',
            stack: '总数',
            data: []
          }
        ]
      }
    }
  },

  watch: {
    barData: {
      handler (data) {
        if (!data) return false
        const { chart, defaultOption } = this
        if (chart) {
          chart.clear()
          formateData && formateData({ data, chartOption: defaultOption })
          chart.setOption(defaultOption, true)
        }
      },
      deep: true
    }
  },

  created () {
    Object.assign(this.defaultOption, this.option)
  },

  mounted () {
    this.$nextTick(this.init)
  },

  methods: {
    init () {
      if (!this.idName) return

      const { defaultOption, barData } = this
      let { fontSize, iconSize, tooltipFontSize, tooltipWidth, tooltipBallSize, tooltipPadding } = this

      formateData && formateData({ data: barData, chartOption: defaultOption })

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
    .FontSize(10.76);
    .Flex-1;

    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
</style>
