<template>
  <div class="page">
    <h2>Post Page Loading ...........</h2>

    <div v-if="loading">Loading posts</div>

    <div v-else class="grid">
      <div class="card" v-for="post in posts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

import axios from "axios";

const posts = ref([]);
const loading = ref(true);
onMounted(async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    posts.value = res.data;
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
.page {
  padding: 20px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 15px;
}

.card {
  background: white;
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 10px;
}
</style>
