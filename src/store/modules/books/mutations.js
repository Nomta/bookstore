export const mutations = {
  setBooks(state, books) {
    state.books = books
  },
  setBook(state, book) {
    state.book = book
  },
  clearBook(state) {
    state.book = null
  },
  createBook(state, book) {
    state.books.push(book)
  },
  updateBook(state, book) {
    const index = state.books.findIndex(item => item.id === book.id)
    if (index !== -1) {
      state.books.splice(index, 1, book)
    }
  },
  deleteBook(state, id) {
    state.books = state.books.filter(item => item.id !== id)
  },
  setLoading(state, loading) {
    state.loading = loading
  },
  setError(state, error) {
    state.error = error
  },
  clearError(state) {
    state.error = null
  },
}
