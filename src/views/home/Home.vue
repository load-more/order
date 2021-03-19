<template>
  <div>
    <header-bar>
      <template v-slot:left>
        <i class="iconfont iconsearch" style="font-size: 25px"></i>
      </template>
      <template v-slot:title>
        <span>首页</span>
      </template>
      <template v-slot:right>
        <span>登录</span>
      </template>
    </header-bar>
    <carousel class="swiper">
      <div class="swiper-slide" v-for="(item, index) in 5" :key="index">
        <img :src="require('@/assets/img/banner'+(index+1)+'.jpg')" alt="">
      </div>
    </carousel>
    <shop-list class="shoplist"></shop-list>
  </div>
</template>

<script>
import HeaderBar from '@/components/headerbar/HeaderBar.vue'
import Carousel from '@/components/carousel/Carousel.vue'
import ShopList from '@/components/shoplist/ShopList.vue'

export default {
  name: 'Home',
  components: {
    HeaderBar,
    Carousel,
    ShopList,
  }
}
</script>

<style scoped>
  img {
    width: 100%;
  }
  .swiper {
    margin-top: 50px;
  }
  .shoplist {
    padding-bottom: 65px;
  }
</style>
