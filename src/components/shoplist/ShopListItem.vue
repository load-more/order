<template>
  <div class="container">
    <img src="@/assets/img/shop.jpg" alt="">
    <div class="content">
      <div class="title">【商家】好味道</div>
      <div class="star">五星评分</div>
      <div class="price">
        <span>￥20起送/</span>
        <span>配送费约￥5</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopListItem',
}
</script>

<style scoped>
  .container {
    display: flex;
    padding: 10px 0;
    width: 100%;
  }
  img {
    width: 25%;
    padding: 0 10px;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .title {
    font-size: 18px;
    font-weight: bold;
  }
  .star {
    font-size: 12px;
    color: #666;
  }
  .price {
    font-size: 12px;
  }
</style>
