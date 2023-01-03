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
    component: () => import(/* webpackChunkName: "Books" */ '@/views/BooksView.vue'),
  },
  {
    path: '/books/create',
    name: 'createBook',
    component: () => import(/* webpackChunkName: "Books" */ '@/views/BookEditorView.vue'),
  },
  {
    path: '/books/:id',
    name: 'book',
    component: () => import(/* webpackChunkName: "BookDetail" */ '@/views/BookDetailView.vue'),
    props: true,
  },
  {
    path: '/books/:id/edit',
    name: 'editBook',
    component: () => import(/* webpackChunkName: "BookDetail" */ '@/views/BookEditorView.vue'),
    props: true,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import(/* webpackChunkName: "NotFound" */ '@/views/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
