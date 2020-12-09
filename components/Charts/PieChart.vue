<template>
  <div class="main-container">
    <div :id="idName" :class="['chart-container', `${idName}-chart`]" />

    <div class="pie-background">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PieChart',
  props: {
    idName: {
      type: String,
      default: ''
    },
    option: {
      type: Object,
      default: _ => {}
    },
    message: {
      type: String,
      default: ''
    },
    unitName: {
      type: String,
      default: '人'
    },
    pieData: {
      type: Array,
      default: _ => []
      // { value, name }
    },
    startAngle: {
      type: [Number, Boolean],
      default: false
    }
  },

  data () {
    return {
      labelFontSize: 13.49,
      dataFontSize: 16,
      radiusSize: 128,
      radiusInner: 100,
      labelLine2Length: 35,

      chart: null,

      defaultOption: {
        legend: {
          show: false,
          data: ['小学', '初中', '高中']
        },
        series: [
          {
            type: 'pie',
            hoverAnimation: false,
            minAngle: 15,
            startAngle: 330,
            radius: [128, 100],
            center: ['50%', '50%'],
            labelLine: {
              smooth: true,
              length2: 35
            },
            data: []
          }
        ]
      }
    }
  },

  watch: {
    'option' (data) {
      const { chart, defaultOption, option } = this
      Object.assign(defaultOption, option)
      chart && chart.setOption(defaultOption, true)
    },
    'pieData' (data) {
      const { chart, defaultOption } = this
      if (chart) {
        chart.clear()
        defaultOption.series[0].data = data
        chart.setOption(defaultOption, true)
      }
    },
    immediate: true
  },

  mounted () {
    this.init()
  },

  methods: {
    refresh () {
      this.chart.clear()
      this.chart.setOption(this.defaultOption, true)
    },

    init () {
      const self = this
      try {
        if (!this.idName) return

        const { defaultOption, pieData, startAngle } = this
        let { labelFontSize, dataFontSize, radiusSize, radiusInner, labelLine2Length } = this
        labelFontSize = window.innerHeight / 1080 * 13.49
        dataFontSize = window.innerHeight / 1080 * 16
        radiusSize = window.innerWidth / 1920 * 128 / 2
        radiusInner = window.innerWidth / 1920 * 100 / 2
        labelLine2Length = window.innerWidth / 1920 * 35

        defaultOption.series[0].radius = [radiusSize, radiusInner]
        defaultOption.series[0].labelLine.length2 = labelLine2Length
        defaultOption.series[0].data = pieData
        if (startAngle !== false && !isNaN(startAngle)) defaultOption.series[0].startAngle = startAngle

        Object.assign(defaultOption, this.option)

        setTimeout(() => {
          const chart = self.$echarts.init(document.getElementById(self.idName), null, { rerender: 'svg' })

          defaultOption.series[0].label = {
            fontSize: labelFontSize,
            formatter: `{b}\n{cStyle|{c}${self.unitName}}`,
            rich: {
              cStyle: {
                fontSize: dataFontSize
              }
            }
          }

          chart.setOption(defaultOption, true)

          if (!window.charts) window.charts = {}
          window.charts[chart.id] = chart
          window.onresize = _ => {
            const obj = window.charts || {}
            for (const key in obj) {
              const item = obj[key]
              this.init()
              item.resize && item.resize()
            }
          }

          chart.defaultOption = this.defaultOption
          this.chart = chart
          window.tempchart = chart
          this.$emit('inited', chart)
        }, 500)
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.main-container {
  .Flex-1;
  .Flex;
  .minWidth(143);
  .minWHeight(143);

  width: 100%;
  height: 100%;
  position: relative;

  .chart-container {
    .Flex-1;

    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .pie-background {
    .Width(143);
    .wHeight(143);
    .transformCenter;
    .Background('~assets/img/background/pie-bg@2x.png');

    position: absolute;
    top: 50%;
    left: 50%;

  }
}

</style>
