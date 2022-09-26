import { createRouter, createWebHistory } from 'vue-router'
import CoursesView from '../views/CoursesView.vue'
import AddCourseView from '../views/AddCourseView.vue'
import TutorsView from '../views/TutorsView.vue'
import StudentsView from '../views/StudentsView.vue'


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/courses',
      // component: HomeView
    },
    {
      path: '/courses',
      component: CoursesView,
    },
    {
      path: '/courses/new',
      component: AddCourseView,
    },
    {
      path: '/tutors',
      component: TutorsView
    },
    {
      path: '/tutors',
      component: StudentsView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  ]
})

export default router
