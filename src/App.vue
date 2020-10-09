<template>
<div id="app">

  <router-view />
  <TabBar v-if="!$route.meta.isHideFooter" class="tarbar"></TabBar>
</div>
</template>

<script>
export default {
  components: {
    TabBar: () => import("./components/TabBar")
  }
}
</script>

<style lang="scss">
body {
  background-color: #fff;
  font-size: 16px !important;

}
</style>
