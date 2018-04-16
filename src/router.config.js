import Home from './components/Home/Index.vue'

/* 菜谱 */
import Menu from './components/menu/Index.vue'
import MPopular from './components/menu/Popular.vue'  // 流行菜谱
import MNewest from './components/menu/Newest.vue'  // 最新菜谱
import MRecommend from './components/menu/Recommend.vue'  // 推荐菜谱
import MContent from './components/menu/Content.vue'  // 详情页

/* 社区 */
import Community from './components/community/Index.vue'
import CBroadcast from './components/community/Broadcast.vue'  //直播
import CBroadcastContent from './components/community/BroadcastContent.vue'  //直播
import CRecommend from './components/community/Recommend.vue'  //推荐
import CCategory from './components/community/Category.vue'  //圈子
import CList from './components/community/List.vue' //列表
import CContent from './components/community/Content.vue' //详情页

/*商城*/
import Shop from './components/shop/Index.vue'
import SCategory from './components/shop/Category.vue'
import SList from './components/shop/List.vue'
import SContent from './components/shop/Content.vue'

/*我的*/ 

import Mine from './components/My/Index.vue'
import Mine1 from './components/My/Category.vue'
import Mine2 from './components/My/List.vue'
import Mine3 from './components/My/Content.vue'
// import Mine from './components/My/Mine.vue'
// import Resgiter from './components/My/Resgiter.vue'
// import Login from './components/My/Login.vue'

export default [
  {path:'/', redirect:'./home' },
  {path:'/home', component:Home },
  {path:'/menu', component:Menu,
   children: [
     { path: '/', redirect:'/menu/newest' },
     { path: 'popular', component:MPopular },
     { path: 'newest', component:MNewest },
     { path: 'recommend', component:MRecommend },
     { path: 'popular/:id', component:MContent, name:"Popular" },
     { path: 'newest/:id', component:MContent, name:"Newest" },
     { path: 'recommend/:id', component:MContent, name:"Recommend" }
   ]
  },
  {path:'/community', component:Community,
   children: [
     { path: '/', redirect: '/community/recommend' },
     { path: 'broadcast', component: CBroadcast },
     { path: 'broadcast/:id', component: CBroadcastContent },
     { path: 'recommend', component: CRecommend },
     { path: 'category', component: CCategory },
     { path: 'category/:category', component: CList },
     { path: 'category/:category/:id', component: CContent }
   ]
  },
  {path:'/shop', component:Shop,
   children: [
     { path: '/', redirect:'/shop/0' },
     { path: ':category', component:SCategory },
     { path: ':category/:listname', component:SList },
     { path: ':category/:listname/:contentId', component:SContent }
   ]
  },
  {path:'/my', component:Mine,
   // children: [
   //   { path: '/', redirect:'/my/0' }
   //   // { path: ':category', component:Mine1 },
   //   // { path: ':category/:listname', component:Mine2 },
   //   // { path: ':category/:listname/:contentId', component:Mine3 }
   // ]
  },
]
