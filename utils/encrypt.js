import { Base64 } from 'js-base64'

export function encode (str) {
  if (!str) return str

  str = strReverse(str)
  str = Base64.encode(str)
  str = Base64.encode(str)
  str = strReverse(str)
  str = Base64.encode(str)

  return str
}

export function decode (str) {
  if (!str) return str

  str = Base64.decode(str)
  str = strReverse(str)
  str = Base64.decode(str)
  str = Base64.decode(str)
  str = strReverse(str)

  return str
}

function strReverse (str) {
  if (str.split) return str.split('').reverse().join('')
  else return str
}
