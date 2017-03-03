<template>
    <div class="detailMain">
      <div v-html="topicData.content"></div>
    </div>
</template>

<script>

//var getTopicInfo = function getTopicInfo(id, that) {
//var getTopicInfo = (id,that) => {
  //id = '5433d5e4e737cbe96dcef312'
var getTopicInfo = (that) => {  
  let TopicData;
  var ViewId = that.$store.getters.getViewId;
  if(ViewId!=0){
    that.$http({
      method: 'GET',
      url: 'https://cnodejs.org/api/v1/topic/'+that.$store.getters.getViewId
    }).then((response) => {
      TopicData = response.body.data;
      // console.log(TopicData);
      // console.log(that);
      that.topicData = TopicData
    }, (response) => {
      console.log('error')
      that.topicData = "正在加载";
    })
  }
};


export default {
  name: 'topicInfo',
  data:function(){
    return{
      topicData:[]
    }
  },
  components:{
  },
  created() {

    //let id = this.$route.params.id
    //getTopicInfo(id, this);
    getTopicInfo(this);

  }
}
</script>

<style lang="scss">
   .detailMain{width:100%; height:100%; padding:.2rem; padding-top:.8rem; position: absolute; overflow: hidden; overflow-y:auto;}
   .detailMain img{max-width:100%;}
</style>