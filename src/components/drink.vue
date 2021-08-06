<template>
<div class="w-full xl:w-4/12 p-4"
  v-for="(drink, index) in drinks"
  :key="index"
>
  <div class="rounded shadow-md">
    <p class="text-2xl text-green-700 p-3">{{drink.title}}</p>
    <div
      class="flex items-center border-gray-200 border-b-2 px-3 py-1 cursor-pointer"
      v-for="item in drink.items"
      :key="item.name"
    >
      <div class="w-16 py-1">
        <img class="w-full align-middle" :src="require('../assets/drinks/' + item.img)" alt="drink">
      </div>
      <p class="text-normal px-2">{{item.name}}</p>
      <div class="ml-auto">
        <div class="w-10 inline-block align-middle mr-auto text-red-400" v-if="item.ice">
          <p><i class='bx bxs-droplet-half'></i>{{item.ice}}</p>
        </div>
        <div class="w-10 inline-block align-middle mr-auto text-red-400" v-else>
        </div>
        <div class="w-10 inline-block align-middle ml-auto text-blue-400" v-if="item.hot">
          <p><i class='bx bx-brightness-half'></i>{{item.hot}}</p>
        </div>
        <div class="w-10 inline-block align-middle mr-auto text-red-400" v-else>
        </div>
      </div>
    </div>
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