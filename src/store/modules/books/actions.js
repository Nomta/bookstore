import { api } from '@/api/books.api'

export const actions = {
  // Получение списка книг
  async fetchBooks({ commit }) {
    await makeRequest(commit, 'setBooks', 'getInitialData')
  },
  // Получение одной книги по id
  async fetchBook({ commit }, id) {
    await makeRequest(commit, 'setBook', 'get', id)
  },
  // Создание книги
  async createBook({ commit }, data) {
    await makeRequest(commit, 'createBook', 'set', data.id, data)
  },
  // Обновление книги
  async updateBook({ commit }, data) {
    await makeRequest(commit, 'updateBook', 'set', data.id, data)
  },
  // Удаление книги
  async deleteBook({ commit }, id) {
    await makeRequest(commit, 'deleteBook', 'delete', id)
  },
}

async function makeRequest(commit, mutationType, requestType, ...payload) {
  try {
    commit('setLoading', true)
    commit('clearError')

    const response = await api[requestType](...payload)

    commit(mutationType, response.data)
  }

  catch (error) {
    commit('setError', error)
  }

  finally {
    commit('setLoading', false)
  }
}
