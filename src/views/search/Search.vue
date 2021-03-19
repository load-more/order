<template>
  <div>
    <header-bar>
      <template v-slot:title>
        <span>查询</span>
      </template>
    </header-bar>
  </div>
</template>

<script>
import HeaderBar from '@/components/headerbar/HeaderBar.vue'

export default {
  name: 'Search',
  components: {
    HeaderBar,
  }
}
</script>

<style scoped>

</style>
