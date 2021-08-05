<template>
  <div class="max-w-screen-xl mx-auto rounded py-5">
    <Hero/>
  </div>
  <div class="max-w-screen-xl w-11/12 mx-auto py-5 flex items-start justify-around flex-wrap">
    <Suspense>
      <template #default>
        <Drink/>
      </template>
      <template #fallback>
        等候中
      </template>
    </Suspense>
  </div>
</template>

<script>
import Hero from '../components/hero'
import Drink from '../components/drink'

export default {
  components: {
    Hero,
    Drink
  },
  setup () {
    
  },
}
</script>