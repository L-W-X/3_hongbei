<template>
  <div>
      <div class="lineContainer">
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cLine',
}
</script>

<style lang="scss" scoped>
  .lineContainer{
    background-color: #fff;
    padding-left: 20px;
    .line{
      border-bottom: 1px solid;
      border-bottom-color: #F5F7F9;
      width: 335px;
    }
  }
</style>
