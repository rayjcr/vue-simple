<template>
    <div class="contbox6">
       <p>{{count}}
       <button @click="inc">+</button>
       <button @click="dec">-</button>
    </div>
</template>

<script>
import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);
/**以下是vue的写法**/
// export default {
//   name: 'vuextest',
//   data(){
//     return {
//         count:0
//     }
//   },
//   methods:{
//     inc(){
//         this.count++;
//     },
//     dec(){
//         this.count--;
//     }
//   },
//   components:{
//   }
// }


/**以下是vuex的写法**/
const store = new vuex.Store({
  state: {
    count: 0
  },
  mutations: {
      inc: state => state.count++,
      dec: state => state.count--
  }
})

export default {
  name: 'vuextest',
  computed: {
    count () {
        return store.state.count
    }
  },
  methods: {
    inc () {
        store.commit('inc')
    },
    dec () {
        store.commit('dec')
    }
  }
}




</script>

<style lang="scss">
   .contbox6{width:100%; height:100%; background: #FFF;position: absolute;}
   button{width:100px; height:40px;}
</style>