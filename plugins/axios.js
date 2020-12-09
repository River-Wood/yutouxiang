import { formatTimeInObj } from '@/utils/timeFixer'

export default function ({ $axios }) {
  // 基本配置
  $axios.defaults.timeout = 60000

  $axios.onRequest(config => {
    if (!/(51vr|mock|camera|rtmp|finger|login)\//.test(config.url)) {
      config.url = `huwai/${config.url}`
    }
  })

  $axios.onResponse(res => {
    if (res.data && res.data.body) {
      const body = res.data.body
      if (!body) return
      formatTimeInObj(body)
    }
    // 请求错误提示
    // if (res.data && !/\/51vr\//.test(res.config.url)) {
    //   const { code, header } = res.data
    //   // console.log('res.data', res.data)
    //   console.log('code', code)
    //   const isWarn = !/^000000|200$/.test(code)
    //   if (!isWarn) return
    //   if (/huwai\/rasingSchool/.test(res.config.url)) return // 此接口没返回code，特殊处理
    //   const type = isWarn ? 'error' : 'success'
    //   const message = header && header.message || '请稍后再试'
    //   process.client && app.$toast[type](message)
    // }
  })

  $axios.onError(error => {
    const res = error.response
    const code = parseInt(res && res.status)
    const config = error.config
    console.error(code, config.data)
  })
}
