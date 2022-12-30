export default function localStoragePlugin() {
  const storage = window.localStorage
  if (!storage) {
    return
  }

  return (store) => {
    window.addEventListener('storage', data => {
      store.commit('receiveData', data)
    })
    store.subscribe(mutation => {
      if (mutation.type === 'UPDATE_DATA') {
        socket.emit('update', mutation.payload)
      }
    })
  }
}