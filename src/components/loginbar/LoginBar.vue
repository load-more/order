<template>
  <div class="container" @click="skip">
    <div class="avatar">
      <i class="iconfont iconProfile" style="font-size:60px; color:white"></i>
    </div>
    <div class="info">
      <div class="lore">登录/注册</div>
      <div class="phone">
        <i class="iconfont iconphone" style="font-size: 20px"></i>
        <span>暂无绑定手机号</span>
      </div>
    </div>
    <div class="arrow">
      <i class="iconfont iconarrow-right" style="font-size:20px; color:white"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginBar',
  methods: {
    skip() {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    background-color: greenyellow;
    height: 90px;
    border-top: 1px solid white;
    width: 100%;
  }
  .avatar {
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-color: rgb(167, 167, 167);
    text-align: center;
    margin: auto 20px;
  }
  .info {
    height: 60px;
    flex: 1;
    margin: auto 0;
  }
  .lore {
    font-size: 18px;
    color: white;
    padding-top: 10px;
  }
  .phone {
    color: white;
    font-size: 14px;
    padding-top: 8px;
  }
  .arrow {
    margin: auto 10px;
  }
</style>
