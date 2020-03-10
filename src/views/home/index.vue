<template>
  <div class="home">
    <div class="banner">
      <div class="banner__bg"></div>
      <div class="banner__title">
        <h1>{{title}}</h1>
      </div>
      <div class="banner__video">
        <video id="banner_video" muted preload="auto" autoplay controls>
          <source src="../../assets/video/home_banner.mp4" type="video/mp4">
        </video>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    
  },
  data() {
    return {
      title: '智能测量构筑高质量空间大数据'
    }
  },
  mounted() {
    // this.initVideo()
  },
  methods: {
    // initVideo() {
    //   this.$video('banner_video', {
    //     autoplay: "muted",
    //     preload: "auto",
    //   })
    // }
  }
}
</script>
<style scoped>
.banner {
  position: relative;
  transition: all ease .5s;
  height: calc(100vh - 200px);
}
.banner__bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url('../../assets/image/home_banner.jpg') no-repeat center;
  background-size: cover;
}
.banner__title {
  position: absolute;
  z-index: 100;
  width: 100%;
  top: 30px;
  text-align: center;
  font-size: 16px;
  letter-spacing: 3px;
}
.banner__video {
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
}
</style>
