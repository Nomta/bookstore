export const mapBooks = (books) => {
  return books.map((book) => Object.assign(book, { id: String(book.id) }))
};
