<template>
  <div class="page">

    <h2>Comments Page view</h2>

    <div v-if="loading">Loading Comments.......</div>

    <div v-else class="grid">

      <div class="card" v-for="comment in comments" :key="comment.id">

        <h3>{{ comment.title }}</h3>

        <p> <strong>Email: </strong> {{ comment.email }} </p>
        <p>{{ comment.body }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>

import {ref, onMounted} from 'vue'

import axios from 'axios'

const comments = ref([])
const loading = ref(true)
onMounted( async () => {
    try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/comments');
        comments.value = res.data
    }finally{
        loading.value = false
    }
})
</script>

<style scoped>

.page{
    padding: 20px;
}
.grid{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 15px;
}

.card{
    background: white;
    border: 1px solid #ccc;
    padding: 15px;
    border-radius: 10px;
}

</style>
