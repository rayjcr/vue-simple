<template>
    <div class="detailMain">
      <div v-html="topicData.content"></div>
    </div>
</template>

<script>

//var getTopicInfo = function getTopicInfo(id, that) {
var getTopicInfo = (id,that) => {
  let TopicData;
  that.$http({
    method: 'GET',
    url: 'https://cnodejs.org/api/v1/topic/'+id
  }).then((response) => {
    TopicData = response.body.data;
    console.log(TopicData);
    console.log(that);
    that.topicData = TopicData
  }, (response) => {
    console.log('error')
  })
};


export default {
  el:'#example',
  name: 'topicInfo',
  data:function(){
    return{
      topicData:[]
    }
  },
  components:{
  },
  created() {

    let id = this.$route.params.id
    getTopicInfo(id, this);

  }
}
</script>

<style lang="scss">
   .detailMain{width:100%; height:100%; padding:.2rem; position: absolute; overflow: hidden; overflow-y:auto;}
   .detailMain img{max-width:100%;}
</style>