<template>
  <div>
    <header-bar>
      <template v-slot:title>
        <span>我的</span>
      </template>
    </header-bar>
    <login-bar class="loginbar"></login-bar>
    <button @click="logout" class="logout" v-if="users.name">退出登录</button>
  </div>
</template>

<script>
import HeaderBar from '@/components/headerbar/HeaderBar.vue'
import LoginBar from '@/components/loginbar/LoginBar.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Profile',
  components: {
    HeaderBar,
    LoginBar,
  },
  methods: {
    logout() {
      this.removeToken('users')
    },
    ...mapActions(['removeToken'])
  },
  computed: {
    ...mapState(['users'])
  }
}
</script>

<style scoped>
  .loginbar {
    margin-top: 50px;
  }
  .logout {
    width: 100%;
    padding: 10px 0;
    background-color: red;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 20px;
  }
</style>
