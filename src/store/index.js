import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import books from './modules/books'

export default createStore({
  plugins: [
    createPersistedState({
      key: 'books',
      paths: ['books']
    })
  ],
  modules: {
    books
  }
})
