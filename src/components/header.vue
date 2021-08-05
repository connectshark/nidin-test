<template>
  <header class="w-full shadow-md relative">
    <nav class="mx-auto max-w-screen-xl p-1 flex items-center flex-nowrap justify-between">
      <ul>
        <li class="inline-block mx-2 p-4 group hover:bg-gray-200 transition cursor-pointer"
          v-for="item in nav"
          :key="item"
        >
          <p class="text-lg text-gray-900 group-hover:text-red-800 transition font-mono">{{item}}</p>
        </li>
      </ul>
      <div class="absolute w-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">
        <img class="max-w-full" src="../assets/img/midin.png" alt="logo">
      </div>
      <ul>
        <li class="inline-block mx-2 p-4 hover:bg-blue-50 transition cursor-pointer"
          v-for="item in account"
          :key="item"
        >
          <p class="text-lg text-blue-400 font-mono">{{item}}</p>
        </li>
      </ul>
    </nav>
    
  </header>
</template>

<script>
export default {
  setup () {
    return {
      nav: ['訂購', '購物車', '訂單', '兌換專區', '更多'],
      account: ['通知', '登入']
    }
  }
}
</script>