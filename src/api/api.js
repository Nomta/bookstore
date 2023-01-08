import { Storage } from './storage'

const PREFIX = 'api/'
const TIMEOUT = 0

export class API {
  constructor(prefix = '') {
    this.storage = new Storage(`${PREFIX}${prefix}`)
  }

  async getAll() {
    await delay(TIMEOUT)

    const data = await this.storage.getAll()
    return { data }
  }

  async get(id) {
    await delay(TIMEOUT)

    const data = id
      ? await this.storage.get(id)
      : await this.storage.getAll()
    return { data }
  }

  async set(id, value) {
    await delay(TIMEOUT)

    await this.storage.set(id, value)
    return { data: value }
  }

  async delete(id) {
    await delay(TIMEOUT)

    await this.storage.remove(id)
    return { data: id }
  }
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))