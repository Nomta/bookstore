import store from '@/store'

export const getMode = () => store.state.local.mode
export const setMode = (value) => store.dispatch('local/setMode', value)