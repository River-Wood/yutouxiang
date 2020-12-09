
export function formatTimeInObj (obj) {
  for (const key in obj) {
    const item = obj[key]

    if (typeof item === 'string' && /(t|T)ime/.test(key)) {
      obj[key] = newDateFormat(obj[key])
    } else if (typeof item === 'object') {
      formatTimeInObj(item)
    }
  }
}

export function newDateFormat (timeStr) {
  let res = timeStr.replace(/-/g, '/').replace('T', ' ')
  const dotIndex = res.indexOf('.')
  if (dotIndex !== -1) res = res.substr(0, dotIndex)
  else res = res.substr(0, 19)
  res = new Date(res)
  return res
}
