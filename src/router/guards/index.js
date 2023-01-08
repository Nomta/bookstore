import { clearBook, fetchBook } from '@/store/modules/books/actionCreators'

export const requireDetail = async (to) => {
  if (to.meta.detail) {
    await fetchBook(to.params.id)
  }
  else {
    clearBook()
  }
}
