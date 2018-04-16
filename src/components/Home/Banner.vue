<template>
  <div class="g-banner" id="banner">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="https://i3.meishichina.com/attachment/magic/2018/04/10/20180410152332822576613.jpg" alt="banner"></div>
      <div class="swiper-slide"><img src="https://i3.meishichina.com/attachment/magic/2018/03/16/20180316152117396672613.jpg" alt="banner"></div>
      <div class="swiper-slide"><img src="https://i3.meishichina.com/attachment/magic/2018/04/11/20180411152341538459013.jpg" alt="banner"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'

export default {
  mounted: function() {
    new Swiper('#banner', { autoplay: 3000 });
  }
}
</script>
