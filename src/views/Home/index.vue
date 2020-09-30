<template>
<div>
    Home
</div>
</template>

<script>
export default {
  name:'Home',
  //测试使用
 async  mounted() {
    const res =await this.$API.reqCategoryList()
    console.log(res)
    
  },
}
</script>
<style scoped>
</style>