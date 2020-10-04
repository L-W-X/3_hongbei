<template>
  <div class="lessonModule">

  </div>
</template>

<script>
export default {
  name: 'Lesson',
  data () {
    return {
      
    }
  },
  mounted () {
    this.$store.dispatch('getLessonList')
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>

</style>
