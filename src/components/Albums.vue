<template>
  <div class="page">
    <h2>Album Page view || API USE Patching a resource</h2>

    <div v-if="loading">Album Loading Api ..........</div>

    <div v-else class="grid">
      <div class="card" v-for="album in albums" :key="album.id">
        <h3>{{ album.title }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

import axios from "axios";

const albums = ref([]);
const loading = ref(true);
onMounted(async () => {
  try {
    // Method Use PATCH Data ,

    const createResponse = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PATCH",
      body: JSON.stringify({
        title: "foo",
      }),
      headers: {
        "content-type": "applications/json; caharset=UTF-8",
      },
    });

    const newPatch = await createResponse.json();
    console.log("successfully created PATCH Method Api data: ", newPatch);

    // Get Method call use

    const res = await fetch("https://jsonplaceholder.typicode.com/psts");
    const data = await res.json();
    albums.value = data;
  } catch (error) {
    console.log("Error cannot API JSON code work", error);
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
