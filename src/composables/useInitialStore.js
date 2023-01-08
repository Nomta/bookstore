import { fetchBooks } from "@/store/modules/books/actionCreators"
import { getMode } from "@/store/modules/localSettings/actionCreators"

export const useInitialStore = () => {
  fetchBooks()
  getMode()
}
