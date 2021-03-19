<template>
  <ul>
    <li :class='{isActive: curIndex===0}' @click="skip(0)">
      <i class="iconfont iconwaimai"></i>
      <span>外卖</span>
    </li>
    <li :class="{isActive: curIndex===1}" @click="skip(1)">
      <i class="iconfont iconsearch"></i>
      <span>搜索</span>
    </li>
    <li :class="{isActive: curIndex===2}" @click="skip(2)">
      <i class="iconfont iconziyuan"></i>
      <span>订单</span>
    </li>
    <li :class="{isActive: curIndex===3}" @click="skip(3)">
      <i class="iconfont iconbiaoqianA01_wode-70"></i>
      <span>我的</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'FooterBar',
  data() {
    return {
      curIndex: 0,
      path: ['/home', '/search', 'order', 'profile'],
    }
  },
  methods: {
    skip(index) {
      this.$router.push(this.path[index])
      this.curIndex = index
    }
  }
}
</script>

<style scoped>
  ul {
    display: flex;
    padding: 10px 0;
    border-top: 1px solid rgb(187, 187, 187);
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
  }
  li {
    flex: 1;
    text-align: center;
  }
  i {
    display: block;
    font-size: 24px;
    margin-bottom: 4px;
  }
  span {
    display: block;
  }
  .isActive {
    color: red;
  }
</style>
