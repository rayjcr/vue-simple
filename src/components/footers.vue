<template>
    <div class="footers flexRow">
        <div class="fUnit flexBox" v-bind:class="{active:activeIndex==0}" v-on:click="indexFn(0)">选项1</div>
        <div class="fUnit flexBox" v-bind:class="{active:activeIndex==1}" v-on:click="indexFn(1)">选项2</div>   
        <div class="fUnit flexBox" v-bind:class="{active:activeIndex==2}" v-on:click="indexFn(2)">选项3</div>   
        <div class="fUnit flexBox" v-bind:class="{active:activeIndex==3}" v-on:click="indexFn(3)">选项4</div>          
    </div>
</template>

<script>
export default {
  name: 'footers',
  data(){
      return {activeIndex:0}
  },
  components:{
  },
  methods:{
      indexFn(index){
          this.activeIndex =  index;
          this.$emit('changeActiveIndex',this.activeIndex);
      }
  }
}
</script>

<style lang="scss">
    .flexColumn {display: flex;flex-direction: column; }
    .flexRow {display: flex;flex-direction: row; }
    .flexBox {flex: 1; overflow: hidden; }

    .footers{
        width:100%; height:100%;background:#fff;
        border-top:1px solid #e5e5e5;
        box-shadow:-2px 0 2px #aaa;
    }
    .fUnit{
        width:25%;
        height:1rem;
        border-left:1px solid #e5e5e5;
        text-align: center;
        line-height: 1rem;
    }
    .fUnit.active{
        background:#FFa200; 
        color:#FFF;
    }
    .fUnit:first-child{
        border-left:none;
    }
</style>
