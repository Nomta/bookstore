import { createStore } from 'vuex'
import books from './modules/books'
import local from './modules/localSettings'

export default createStore({
  modules: {
    books,
    local,
  }
})
