import { localApi } from '@/api/local.api'

const state = {
  mode: 'title',
}

const actions = {
  // Получение режима сортировки списка
  getMode({ commit }) {
    const mode = localApi.get('mode')
    if (mode) {
      commit('setMode', mode)
    }
  },
  // Изменение режима сортировки списка
  setMode({ commit }, mode) {
    localApi.set('mode', mode)
    commit('setMode', mode)
  },
}

const mutations = {
  setMode(state, mode) {
    state.mode = mode
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
}