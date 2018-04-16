<template>
  <div class="container">

    <!-- <div class="loginHead">
      <div class="head-l">
        <router-link to="/" class="back-btn">返回</router-link>
           
        </div>
        <h1 class="head-m">个人中心</h1>
    </div> -->

    <div id="header" class="m-default-hader"><a href="javascript:void(0)" class="ico-left icon-mark"></a> <a href="javascript:void(0)" class="ico-right icon-search"></a> <h1>我的</h1></div>



    <div class="usercenter">
      <div class="usercenter_box">
        <div class="usercenter_top">

          <div class="usercontainer">
            <div class="user_avater">
              <img src="https://s2m.228.cn/resources/images/person-per.png">
            </div>
            <div class="usernickname">
              <span>{{username}}</span>
            </div>
          </div>
          <div class="set">
            <a class="service_icon"></a>
            <a class="set_icon"></a>
          </div>
        
        </div>
        <ul class="usercenter_list">
          <li>积分<span>0</span></li>
          <li>电子钱包<span>未启用</span></li>
          <li>优惠券<span>0</span></li>
        </ul>
      </div>
      <div class="user_link">
        <ul>
          <li>
            <div class="user_link_item">
              <i class="dingdan_icon"></i>
              <router-link to="/myorder" style="    color: #646464;">我的订单</router-link>
            </div>
            <i class="right_icon"></i>
          </li>
          <li>
            <div class="user_link_item">
              <i class="shengou_icon"></i>
              <span>我的申购</span>
            </div>
            <i class="right_icon"></i>
          </li>
          <li class="user_line"></li>
          <li>
            <div class="user_link_item">
              <i class="crush_icon"></i>
              <span>现金券</span>
            </div>
            <i class="right_icon"></i>
          </li>
          <li>
            <div class="user_link_item">
              <i class="guanyan_icon"></i>
              <span>观演凭证</span>
            </div>
            <i class="right_icon"></i>
          </li>
          <li class="user_line"></li>
          <li>
            <div class="user_link_item">
              <i class="quehuo_icon"></i>
              <span>缺货登记</span>
            </div>
            <i class="right_icon"></i>
          </li>
          <li>
            <div class="user_link_item">
              <i class="shoucang_icon"></i>
              <router-link to="/collection" style="    color: #646464;">我的收藏</router-link>
            </div>
            <i class="right_icon"></i>
          </li>
          <li>
            <div class="user_link_item">
              <i class="tiwen_icon"></i>
              <span>我的提问</span>
            </div>
            <i class="right_icon"></i>
          </li>
          <li>
            <div class="user_link_item">
              <i class="yanpiao_icon"></i>
              <span>在线验票</span>
            </div>
            <i class="right_icon"></i>
          </li>
        </ul>
      </div>
      
    </div>
  <h1 class="lookmore" style="margin-bottom: 0;width: 100%;background: #e12d38;color: #fff" @click="goout">安全退出</h1>
  </div>


</template>

<script>
import {mapGetters,mapActions} from 'vuex'

import VerticalNavbar from './VerticalNavBar.vue'

export default{
  data(){
    return {
      shop_category: []
    }
  },
  components: {
    VerticalNavbar
  },
  computed: mapGetters([
    'getShowIndexState'
  ]),
  mounted: function() {
    this.fetchData(); //获取数据
  },
  methods: {
    fetchData(){
      var _this = this;
      this.$http.get('/data/shop_category.data').then(function(res){
        _this.shop_category = res.data;
      }).catch(function(err) {
        console.log('ShopIndex',err);
      })
    }
  }
}
</script>



