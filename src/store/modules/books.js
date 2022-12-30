import { cloneDeep } from 'lodash'
import { getBooks } from '@/api'

const state = {
  books: [],
  mode: ''
}

const getters = {
  getSortedBooks: (state) => (mode) => {
    switch (mode) {
      case 'title':
        return cloneDeep(state.books).sort((a, b) => a.title.localeCompare(b.title))
      case 'year':
        return cloneDeep(state.books).sort((a, b) => b.publishingYear - a.publishingYear)
      default: return state.books
    }
  },

  getBookById: (state) => (id) => {
    return state.books.find((book) => String(book.id) === id)
  },

  getIndex: (state) => (id) => {
    return state.books.findIndex((book) => String(book.id) === id)
  }
}

const actions = {
  async getAllBooks({ commit }) {
    const books = await getBooks()
    commit('setAllBooks', books)
  }
}

const mutations = {
  setAllBooks(state, books) {
    state.books = books
  },
  setBook(state, book) {
    const index = getters.getIndex(state)(book.id)

    if (index !== -1) {
      state.books[index] = book
    }
    else {
      state.books.push(book)
    }
  },
  removeBook(state, id) {
    const index = getters.getIndex(state)(id)
    if (index !== -1) {
      state.books.splice(index, 1)
    }
  },
  setMode(state, mode) {
    state.mode = mode
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}