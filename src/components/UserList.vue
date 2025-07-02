<template>
  <div class="page">

    <h1>USE API Updating a resource || Method PUT </h1>

    <h2>User List loading ..........</h2>

    <div v-if="loading">Loading posts</div>

    <div v-else class="grid">
      <div class="card" v-for="user in users" :key="user.id">
        
        <h3>{{ user.title }}</h3>
        <p>{{ user.body }}</p>

      </div>
    </div>
  </div>
</template>

<script setup>

import {ref, onMounted} from 'vue'

import axios from 'axios'

const users = ref([])
const loading = ref(true)
onMounted( async () => {
    try{

      // Method PUT
      const createResponse = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
          id: 1,
          title: 'foo',
          body: 'bar',
          userID: 1,
        }),
        headers: {
          'content-type': 'application/json; charaset=UTF-8',
        },
      }) 
      const newPut = await createResponse.json()
      console.log('PUT data Succefully....', newPut)

      //Get Method call
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        const data = await res.json()

        users.value = data
    }
    catch(error){
      console.log('error cannot Load JSON fake Data: ', error);
    }finally{
        loading.value = false
    } 
});
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
