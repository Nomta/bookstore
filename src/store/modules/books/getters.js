import { cloneDeep } from 'lodash'

export const getters = {
  // Получение отсортированного списка книг
  sortedBooks: (state, getters, rootState) => {
    switch (rootState.local.mode) {
      case 'title':
        return cloneDeep(state.books).sort((a, b) => a.title.localeCompare(b.title))
      case 'year':
        return cloneDeep(state.books).sort((a, b) => b.publishingYear - a.publishingYear)
      default: return state.books
    }
  },

  // Получение индекса книги в отсортированном списке
  sortedBookIndex: (state, getters) => {
    const id = state.book?.id
    if (!id) {
      return
    }
    const index = getters.sortedBooks.findIndex(item => item.id === id)
    if (index === -1) {
      return
    }
    return index
  },

  // Получение индекса предыдущей книги
  prevBookId: (state, getters) => {
    return getters.sortedBooks[getters.sortedBookIndex - 1]?.id
  },

  // Получение индекса следующей книги
  nextBookId: (state, getters) => {
    return getters.sortedBooks[getters.sortedBookIndex + 1]?.id
  },
}
