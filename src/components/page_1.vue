<template>
    <div class="contbox1" :data-scroll=scrollable v-scroll="['scrollBox',loadmore]">
      <div class="scrollBox">
       <ul class="topicList">
        <li v-for="(topic,index) in topicList">
          <!--
          <router-link :to="'topicInfo/'+topic.id">
          </router-link>
          -->
            <div v-on:click="ShowDetail(topic.id)">{{index+1}}-{{topic.title}}</div>
          
        </li>
       </ul>
       <div class="scrollTips">
          {{scrolltips}}
       </div>
      </div>

      <div v-show="isDetail" class="detailBox">
        <div class="detailHeader" v-on:click="CloseDetail">关闭详细页</div>
        <componentdiv :is="infoMd"></component>
      </div>

    </div>
</template>

<script>
import vscroll from '../components/vscroll'
import topicInfo from '../components/topicInfo.vue'



export default {
  name: 'page_1',
  data:function(){
    return{
      curPage:1,                                 //当前默认页码为1
      scrollable:"false",                        //是否正在加载数据(为了防止滚屏后会多次请求同一接口) false表示目前可以加载 true表示目前正在加载中
      scrolltips:"正在加载数据中",
      topicList:[],                              //文章列表数据存放变量
      isDetail:false,                            //是否显示详细页面
      infoMd:''                                  //加载的详细页面的名称在showDetail方法里赋值topicInfo
      //viewId:'5433d5e4e737cbe96dcef312'
    }
  },
  components:{
    topicInfo
  },
  methods:{
    CloseDetail(){
      this.isDetail=false;
      this.infoMd="";
    },
    ShowDetail(id){
      this.$store.dispatch('setViewId',id);
      this.infoMd="topicInfo";
      this.isDetail=true;
    },
    loadmore(){     
      this.$store.dispatch('setScrollDisable',true)
      this.scrollable = "true";

      this.$http({
      method: 'GET',
      url: 'https://cnodejs.org/api/v1/topics?page='+(this.curPage+1)+'&limit=10'
      }).then((response) => {
          this.curPage++
          for(var i=0;i<response.body.data.length;i++){
            this.topicList.push(response.body.data[i])
          }
          this.$store.dispatch('setScrollDisable',false)
          this.scrollable = "false"; 
      }, (response) => {
        console.log('error')
      })
    }

  },
  created:function() {

    this.$store.dispatch('setScrollDisable',true)
    this.scrollable = "true"; 

    this.$http({
      method: 'GET',
      url: 'https://cnodejs.org/api/v1/topics?page=1&limit=30'
    }).then((response) => {
      this.topicList = response.body.data;
      this.$store.dispatch('setScrollDisable',false)
      this.scrollable = "false";
    }, (response) => {
      console.log('error')
    })





  }
}
</script>

<style lang="scss">
   .detailHeader{height:.6rem; width:100%; font-size:.3rem; position:absolute; top:0; left:0px; z-index:20; text-align:center; line-height:.6rem; background:#eee; color:#444; transition:.4s all;}
   .detailHeader:hover{background:#FFa200; color:#FFF;}
   .detailBox{position:fixed; width: 100%; height: 100%; background:#FFF; top:0; left:0; z-index:10;}
   .contbox1{width:100%; height:100%; background: #FFF; position: absolute; overflow: hidden; overflow-y: auto; -webkit-overflow-scrolling : touch;}
   .scrollBox{width: 100%; padding:.2rem;}
   .topicList{font-size:.24rem}
   .topicList li{height:.5rem; line-height:.5rem; width:100%; overflow: hidden; text-overflow:ellipsis;}
   .scrollTips{width:100%; height:1rem; font-size:.24rem; text-align:center; line-height:1rem;}
</style>
