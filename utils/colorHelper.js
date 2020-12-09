export function calculateSRGBlightness (rgb, mode = 'darken') {
  if (typeof rgb !== 'string') return rgb
  rgb = rgb.split(',')
  rgb = {
    r: rgb[0],
    g: rgb[1],
    b: rgb[2]
  }

  function shift (c) {
    if (isNaN(c)) c = 255
    c /= 255
    c = (c <= 0.03928) ? c / 12.92 : Math.pow(((c + 0.055) / 1.055), 2.4)

    switch (mode) {
      case 'darken':
        c /= 2
        break
      case 'lighten':
        c /= 0.5
        break

      default:
        break
    }

    return c * 255
  }

  var lr = shift(rgb.r)
  var lg = shift(rgb.g)
  var lb = shift(rgb.b)

  return [lr, lg, lb].join(',')
}
