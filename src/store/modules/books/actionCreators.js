import store from '@/store'

export const getBooks = () => store.state.books.books
export const getBook = () => store.state.books.book
export const getLoading = () => store.state.books.loading
export const getError = () => store.state.books.error

export const getSortedBooks = () => store.getters['books/sortedBooks']
export const getPrevBookId = () => store.getters['books/prevBookId']
export const getNextBookId = () => store.getters['books/nextBookId']

export const clearBook = () => store.commit('books/clearBook')

export const fetchBooks = () => store.dispatch('books/fetchBooks')
export const fetchBook = (id) => store.dispatch('books/fetchBook', id)
export const createBook = (id) => store.dispatch('books/createBook', id)
export const updateBook = (id) => store.dispatch('books/updateBook', id)
export const removeBook = (id) => store.dispatch('books/deleteBook', id)