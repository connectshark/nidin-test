<template>
  <div class="flex items-center rounded overflow-hidden flex-col-reverse xl:flex-row">
    <div class="w-full xl:w-2/6 bg-white flex flex-col-reverse xl:flex-col">
      <div class="flex items-start box-border py-7 px-2">
        <div class="border-gray-300 border-2 rounded-full overflow-hidden w-16 flex-shrink-0">
          <img class="w-full" src="../assets/img/logo.png" alt="logo">
        </div>
        <div class="w-full box-border p-3">
          <h2 class="text-base font-bold">迷客夏 台北遼寧店</h2>
          <div class="flex items-center">
            <div>
              <i
                v-for="(item, index) in 4" :key="index"
                class="bx bxs-star text-yellow-400"
              ></i>
              <i class="bx bxs-star-half text-yellow-200" ></i>
            </div>
            <p class="text-base">4.9 (264)</p>
          </div>
          <div class="flex items-center py-3">
            <i class="bx bxs-time-five align-middle mr-2" ></i>
            <p>09:00 ~ 21:30</p>
          </div>
          <div class="flex items-center py-3">
            <i class="bx bxs-phone-call align-middle mr-2" ></i>
            <p>02-27755569</p>
          </div>
          <div class="flex items-center py-3">
            <i class="bx bxs-location-plus align-middle mr-2"></i>
            <p>台北市中山區遼寧街38號</p>
          </div>
        </div>
      </div>
      

      <div class="w-full bg-green-700 flex items-center justify-around py-5">
        <div
          class="text-white w-1/3 py-2 cursor-pointer"
          v-for="item in btns"
          :key="item.icon"
        >
          <div class="rounded-full bg-white text-green-700 w-9 h-9 text-center mx-auto">
            <i class="bx text-2xl leading-9" :class="item.icon"></i>
          </div>
          <p class="text-center text-sm pt-2">{{item.t}}</p>
        </div>
      </div>
      
    </div>
    <div class="banner xl:w-4/6 w-full">
      <img class="w-full" src="../assets/img/banner1.png" alt="banner">
    </div>
  </div>
</template>

<script>
export default {
  setup () {
    return {
      btns: [
        {
          t: '怎取餐',
          icon: 'bxs-user-check'
        },
        {
          t: '搜尋',
          icon: 'bx-search-alt'
        },
        {
          t: '揪團',
          icon: 'bxs-group'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>