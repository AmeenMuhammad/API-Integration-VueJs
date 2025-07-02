import Comments from "@/components/Comments.vue"
import PostList from "@/components/PostList.vue"
import UserList from "@/components/UserList.vue"
import PostPage from "@/views/PostPage.vue"
import UsersPage from "@/views/UsersPage.vue"
import Albums from "@/components/Albums.vue"
import Photos from "@/components/Photos.vue"

export const ROUTES = {
  HOME: '/',
  PostList: '/lists',
  UserList: '/users',
  PostPage: '/posts',
  UsersPage: '/pages',
  Comments: '/comments',
  Albums: '/albums',
  Photos: '/photos'
}

export const ROUTE_NAMES = {
  HOME: 'Home',
  PostList: 'lists',
  UserList: 'users',
  PostPage: 'posts',
  UsersPage: 'pages',
  Comments: 'comments',
  Albums: 'albums',
  Photos: 'photos'
} 