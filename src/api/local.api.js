import { Storage } from '@/api/storage'

const PREFIX = 'local/'

export const localApi = new Storage(PREFIX)
