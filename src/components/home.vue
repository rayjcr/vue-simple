<template>
<div class="wrap flexColumn">
    <div class="Container flexBox">
        <transition name='flod'>
            <component  :is="currentView"></component>
        </transition>
    </div>
    <footer>
        <footers v-on:changeActiveIndex="changeView"></footers>
    </footer>
</div>
</template>

<script>
import footers from '../components/footers.vue'
import page_1 from '../components/page_1.vue'
import page_2 from '../components/page_2.vue'
import page_3 from '../components/page_3.vue'
import page_4 from '../components/page_4.vue'
import test from '../components/vuexTest.vue'


export default {
  name: 'home',
  data(){
      return {currentView:'page_1'}
  },
  components:{    //这里是注册你所需要的组件的地方 上面import进来,这里注册
      footers,
      page_1,
      page_2,
      page_3,
      page_4,
      test   
  },
  methods:{
     changeView(num){
        switch(num){
            case 0 : this.currentView = "page_1"; break
            case 1 : this.currentView = "page_2"; break
            case 2 : this.currentView = "page_3"; break
            case 3 : this.currentView = "page_4"; break
        }
     } 
  }
}
</script>

<style lang="scss">
    .wrap{ width:100%; height:100%; overflow: hidden;}
    .flexColumn {display: flex;flex-direction: column; }
    .flexRow {display: flex;flex-direction: row; }
    .flexBox {flex: 1; overflow: hidden; }

    .Container{width:100%; height:100%; background:#e6e6e6;position: relative;}
    footer{width:100%; height:1rem; position:relative;}
    

    .flod-enter-active{
        animation-name:zoomIn;  //这里要写个兼容UC的 -webkit-
        animation-duration:.5s;
    }

    .flod-leave-active{
        animation-name:fadeOutLeft; //这里要写个兼容UC的 -webkit-
        animation-duration:.5s;
    }



    // .fade-enter-active, .fade-leave-active {
    //     transition: opacity .5s
    // }
    // .fade-enter, .fade-leave-active {
    //     opacity: 0
    // }
</style>
