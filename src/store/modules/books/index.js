import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'

const state = {
  books: [],
  book: null,
  loading: false,
  error: null,
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}