<script setup>
import { ref } from "vue";

import PostList from "./components/PostList.vue";
import UserList from "./components/UserList.vue";
import PostPage from "./views/PostPage.vue";
import UserPage from "./views/UsersPage.vue";
import Comments from "./components/Comments.vue";
import Albums from "./components/Albums.vue";
import Photos from "./components/Photos.vue";

const currentComponent = ref("postlist"); // setup state trak component show

const components = {
  PostList,
  UserList,
  PostPage,
  UserPage,
  Comments,
  Albums,
  Photos,
};
</script>
<script>
export default {
  components: {
    PostList: () => import("./components/PostList.vue"),
    UserList: () => import("./components/UserList.vue"),
    PostPage: () => import("./views/PostPage.vue"),
    UserPage: () => import("./views/UsersPage.vue"),
    Comments: () => import("./components/Comments.vue"),
    Albums: () => import("./components/Albums.vue"),
    Photos: () => import("./components/Photos.vue"),
  },
};
</script>

<template>
  <div class="">
    <nav>
      <button @click="currentComponent = 'lis'">Post List</button>
      <button @click="currentComponent = 'user'">User List</button>
      <button @click="currentComponent = 'posts'">Post Page</button>
      <button @click="currentComponent = 'page'">User Page</button>
      <button @click="currentComponent = 'comments'">Comments</button>
      <button @click="currentComponent = 'albums'">Albums</button>
      <button @click="currentComponent = 'photos'">Photos</button>
      <!-- <router-link to="/list">Post List</router-link>||

      <router-link to="/user">User List</router-link>||

      <router-link to="/posts">Post Page</router-link>||

      <router-link to="/page">User Page</router-link> ||

      <router-link to="/comments">Comments</router-link> ||

      <router-link to="/albums">Albums</router-link> ||
      <router-link to="/photos">Photos</router-link> -->
    </nav>

    <component :is="currentComponent" />
    <views :is="currentComponent" />
  </div>

  <PostList />
  <UserList />
  <PostPage />
  <UserPage />
  <Comments />
  <Albums />
  <Photos />
</template>

<style scoped>
nav {
  display: flex;
  gap: 10px;
  background-color: white;
}
button {
  text-decoration: none;
  padding: 5px 10px;
  background: #007bff;
  color: white;
  border-radius: 4px;
}
</style>
