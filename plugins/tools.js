import Vue from 'vue'

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'

import VModal from 'vue-js-modal'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import Toasted from 'vue-toasted'

import ToggleButton from 'vue-js-toggle-button'

export default () => {
  Vue.component('v-select', vSelect)
  Vue.use(VModal)
  Vue.use(VueAwesomeSwiper)
  Vue.use(Toasted)
  Vue.use(ToggleButton)
}
