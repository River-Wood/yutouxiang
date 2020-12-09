
export const state = () => ({
  sidebarExist: false
})

export const mutations = {
  SET_SIDEBAR (state, params) {
    state.sidebarExist = params
  }
}

export const actions = {
  setSidebar ({ commit }, params) {
    commit('SET_SIDEBAR', params)
  }
}
