<template>
  <div id="nav">
    <router-view></router-view>
    <footer-bar v-if="$route.meta.showFooterBar"></footer-bar>
  </div>
</template>

<script>
import FooterBar from '@/components/footerbar/FooterBar.vue'
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    FooterBar,
  },
  mounted () {
    this.getCommodities()
    this.getComments()
    this.getStoreInfo()
    console.log(this.commodities);
  },
  methods: {
    ...mapActions(['getCommodities', 'getComments', 'getStoreInfo'])
  },
  computed: {
    ...mapState(['commodities'])
  }
}
</script>


<style scoped>
  .nav {
    height: 100%;
  }
</style>
