<template>
  <div>
    <header-bar>
      <template v-slot:title>
        <span>我的</span>
      </template>
    </header-bar>
    <login-bar class="loginbar"></login-bar>
  </div>
</template>

<script>
import HeaderBar from '@/components/headerbar/HeaderBar.vue'
import LoginBar from '@/components/loginbar/LoginBar.vue'

export default {
  name: 'Profile',
  components: {
    HeaderBar,
    LoginBar,
  }
}
</script>

<style scoped>
  .loginbar {
    margin-top: 50px;
  }
</style>
