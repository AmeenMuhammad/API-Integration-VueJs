<template>
  <div class="page">
    <h2>User Page loading ..................</h2>

    <div v-if="loading">Loading posts</div>

    <div v-else class="grid">
      <div class="card" v-for="page in pages" :key="page.id">
        
        <h3>{{ page.title }}</h3>

        <p>{{ page.body }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

import axios from "axios";

const pages = ref([]);
const loading = ref(true);
onMounted(async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    pages.value = res.data;
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
  border: 1px solid #744343;
  padding: 15px;
  border-radius: 10px;
}
</style>
