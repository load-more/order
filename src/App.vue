<template>
  <div id="nav">
    <router-view></router-view>
    <footer-bar v-if="$route.meta.showFooterBar"></footer-bar>
  </div>
</template>

<script>
import FooterBar from '@/components/footerbar/FooterBar.vue'

export default {
  components: {
    FooterBar
  }
}
</script>


<style scoped>
  .nav {
    height: 100%;
  }
</style>
