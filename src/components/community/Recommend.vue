<template>
  <div class="commend">

    <SwiperView></SwiperView>
    <RecommendList></RecommendList>
  </div>
</template>

<script>
import SwiperView from './Swiper.vue'
import BannerView from '../Banner.vue'
import RecommendList from './RecommendList.vue'

export default {
  components :{
    SwiperView,
    RecommendList
  },
  data(){
    return {
      CardListUrl: "/data/community_list_data/Recommend.data"
    }
  }
}
</script>
