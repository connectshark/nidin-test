<template>
  <Header/>
  <router-view></router-view>
</template>

<script>
import Header from './components/header'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>