import { createRouter, createWebHistory } from 'vue-router'
import PostList from '@/components/PostList.vue'
import UserList from '@/components/UserList.vue'
import PostPage from '@/views/PostPage.vue'
import UsersPage from '@/views/UsersPage.vue'
import Comments from '@/components/Comments.vue'
import Albums from '@/components/Albums.vue'
import Photos from '@/components/Photos.vue'

import { ROUTES, ROUTE_NAMES } from '../constants/routes.js'


const routes = [
  {
    path: ROUTES.HOME,
    name: ROUTE_NAMES.HOME,
    component: Home
  },
  {
    path: ROUTES.PostList,
    name: ROUTE_NAMES.PostList,
    component: PostList
  },
   {
    path: ROUTES.UserList,
    name: ROUTE_NAMES.UserList,
    component: UserList
  },
  {
    path: ROUTES.PostPage,
    name: ROUTE_NAMES.PostPage,
    component: PostPage,
  },
  {
    path: ROUTES.UsersPage,
    name: ROUTE_NAMES.UsersPage,
    component: UsersPage,
  },
  {
    path: ROUTES.Comments,
    name: ROUTE_NAMES.Comments,
    component: Comments,
  },{
    path: ROUTES.Albums,
    name: ROUTE_NAMES.Albums,
    component: Albums,
  },{
    path: ROUTES.Photos,
    name: ROUTE_NAMES.Photos,
    component: Photos,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router 