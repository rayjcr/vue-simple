<template>
  <div id="app">
    <!-- 单页开发所有内容经过路由都会渲染到这里router-view -->
    <router-view>
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}
</script>

<style lang="scss">
  #app{width:100%;height:100%;}
</style>
