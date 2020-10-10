<template>
<div class="personCenterWrap">
  <div class="header">
    <span> ◁ </span>
    <span>举报</span>
  </div>
  <div class="detailWrap">
    <div class="personWrap">
      <div class="left">
        <img :src="cookClient.image" />
      </div>
      <div class="right">
        <p class="nameWrap">
          <span class="name"></span>
          <img src="" alt="" />
        </p>
        <div class="idWrap">
          <p class="personId"></p>
          <span>+ 关注</span>
        </div>
        <div class="expreWrap">
          <span>经验值:878/1500</span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "PersonCenter",
  data() {
    return {
      cookClient: {}
    };
  },
  props: {
    clientId: Number,
  },
  mounted() {
    this.cookClient()
  },
  methods: {
    async cookClient() {
      const res = await this.$API.reqNewStudentPersonCenter_nyt(this.clientId)
      this.cookClient = res.data.cookClient
    }
  },
  components: {},
};
</script>

<style>
</style>
