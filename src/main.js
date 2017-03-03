import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'      //vue路由插件
import VueResource from 'vue-resource'  //vue资源插件
import store from './vuex/store'

//import $ from 'jquery' 

//各种组件模版
import home from './components/home.vue'
import topicInfo from './components/topicInfo.vue'


/*
  入口js新建vue对象 el:链接的是./index.html的 id为app的元素 并不是import的App组件.
  render是渲染页面.function(h){return h(App);} 这里的App指的就是组件App
*/


Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [  
  {path: '/', component: home},      //这里是为了让输入错误路径和空路径时默认显示home的内容  
  {path: '/home', component: home},
  {path: '/topicInfo/:id', component: topicInfo }
];  
// let router = new VueRouter({      
//   routes,                           // routes:routes  传入路由参数  
//   linkActiveClass: 'active'         // 这个属性是设置当前被点击的a标签class名，为了方便设置选中项的样式  
// });    

// 声明一个路由对象                        
const router = new VueRouter({
  routes
})



new Vue({
  store,
  router,
  el: '#appx',            // 挂载点，挂载在id为appx的组件上  
  template: '<App/>',    // 模版名称
  components: { App }
  //render: h => h(App)
})



