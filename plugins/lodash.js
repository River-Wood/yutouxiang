import Vue from 'vue'

import _get from 'lodash.get'
Vue.prototype._get = _get

import _cloneDeep from 'lodash.cloneDeep'
Vue.prototype._cloneDeep = _cloneDeep

export default function (context) {
  context._get = _get
  context._cloneDeep = _cloneDeep
}
