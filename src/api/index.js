import books from './books'

export const getBooks = async () => {
  const localeData = JSON.parse(localStorage.getItem('books'))
  const booksModule = localeData?.books

  return booksModule?.books ?? books
}
