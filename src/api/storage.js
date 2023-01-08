export class Storage {
  constructor(prefix = '') {
    this.prefix = prefix
  }
  keys() {
    return Object.keys(localStorage)
      .filter(key => key.startsWith(this.prefix))
  }
  getKey(key = '') {
    return `${this.prefix}${key}`
  }
  getAll() {
    return this.keys()
      .map((key) => JSON.parse(localStorage.getItem(key)))
  }
  get(key) {
    return JSON.parse(localStorage.getItem(this.getKey(key)))
  }
  set(key, value) {
    localStorage.setItem(this.getKey(key), JSON.stringify(value))
  }
  remove(key) {
    localStorage.removeItem(this.getKey(key))
  }
  clear() {
    this.keys().forEach((key) => localStorage.removeItem(key))
  }
}