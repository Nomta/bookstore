import books from './data/books'
import { API } from './api'

const PREFIX = 'books/'

const api = new API(PREFIX)

// Загрузка начальных данных 
api.getInitialData = async function () {
  const response = await api.getAll()

  if (response?.data.length) {
    return response
  }

  for await (const book of books) {
    api.set(book.id, book)
  }

  return { data: books }
}

export { api }
