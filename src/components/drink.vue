<template>
<div class="rounded w-full xl:w-4/12 shadow-md py-4"
  v-for="(drink, index) in drinks"
  :key="index"
>
  <p class="text-2xl text-green-700 p-3">{{drink.title}}</p>
  <div class="flex items-center border-gray-200 border-b-2 px-3 py-1"
    v-for="item in drink.items"
    :key="item.name"
  >
    <div class="w-16 py-1">
      <img class="w-full align-middle" :src="require('../assets/drinks/' + item.img)" alt="drink">
    </div>
    <p class="text-normal px-2">{{item.name}}</p>
  </div>
</div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent ({
  setup () {
    return new Promise(resolve => {
      fetch('drinks.json')
        .then(res => res.json())
        .then(res => {
          resolve({
            drinks: res
          })
        })
    })
  }
})
</script>