import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: { name: 'books' },
  },
  {
    path: '/books',
    name: 'books',
    component: () => import(/* webpackChunkName: "Books" */ '../views/BooksView.vue')
  },
  {
    path: '/books/:bookId',
    name: 'book',
    component: () => import(/* webpackChunkName: "BookDetail" */ '../views/BookDetailView.vue'),
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
