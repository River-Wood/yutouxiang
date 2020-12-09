export function formateData ({ data, chartOption }) {
  if (!data) return false

  const { seriesData, seriesKeys, seriesSort, xAxisKey, xAxisFormatter } = data
  const { series, xAxis } = chartOption

  const originXAxisData = xAxis.data
  const tempArr = [...seriesData]
  xAxis.data = []

  series.forEach(item => {
    item.data = []
  })

  seriesSort && xAxisKey && seriesSort(tempArr, xAxisKey)

  tempArr.forEach(ele => {
    if (ele[xAxisKey]) {
      const text = xAxisFormatter ? xAxisFormatter(ele[xAxisKey]) : ele.trendMonth
      xAxis.data.push(`${text}月`)
    }

    seriesKeys.forEach((key, kIndex) => {
      series[kIndex].data.push(ele[key] || 0)
    })
  })

  if (!xAxis.data.length) xAxis.data = originXAxisData
  series.forEach(item => {
    if (!item.data.length) item.data = new Array(xAxis.data.length).fill(0)
  })
}
