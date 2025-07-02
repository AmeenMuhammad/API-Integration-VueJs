<template>
  <div class="page">
    <h2>Photos Page view</h2>
    <div v-if="loading">Loading photos...</div>
    <div v-else class="grid">
      <div class="card" v-for="photo in photos.slice(0, 20)" :key="photo.id">
        <img :src="photo.thumbnailUrl" alt="Photo" />
        <p>{{ photo.title }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const photos = ref([]);
const loading = ref(true);

onMounted(async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/photos");
  photos.value = res.data;
  loading.value = false;
});
</script>

<style scoped>
img {
  width: 100%;
  border-radius: 6px;
}
</style>
