<template>
  <div class="page">
    <h1>API USE Creating a resource || Method Post </h1>
    <h2>Post List Creating a resource view</h2>

    <div v-if="loading">Post List Creating a resource.............</div>

    <div v-else class="grid">
      <div class="card" v-for="list in lists" :key="list.id">
        
        <h3>{{ list.title }}</h3>
        <p>{{ list.body }}</p>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

import axios from "axios";

const lists = ref([]);
const loading = ref(true);
onMounted(async () => {
  try {

    //1. POST Method , create a new Post

    const createResponse = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userID: 1,
      }),
      headers:{
        'Content-type': 'application/json; charaset=UTF-8',
      },
    })
    
    const newPost = await createResponse.json()
    console.log('created Post method Succefull.....', newPost)

    // GET Method Use Get All List Of Post users

    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json()
    lists.value = data;
    
  } catch(error){
    console.log('Error cannot work Api JSON....... ', error)
  }finally{
    loading.value = false
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
  border: 1px solid #682626;
  padding: 15px;
  border-radius: 10px;
}
</style>
