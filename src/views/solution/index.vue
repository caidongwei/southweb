<template>
  <div class="solution">
    <header>
      <div class="solution__banner"></div>
      <div class="solution__title">{{$route.query.title}}</div>
      <div class="solution__title solution__title--small">{{small_title}}</div>
      <div class="solution__title solution__btn">
        <el-button icon="el-icon-video-play" @click="showVideo">观看视频</el-button>
        <el-button style="color: #fff;background: #c7000b;border:none;">资讯与合作</el-button>
      </div>
      <Modal v-if="isShowVideo">
        <div class="banner__video">
          <img src="../../assets/icon/close_video.png" alt="" @click="closeVideo">
          <video id="banner_video" muted preload="auto" autoplay controls>
            <source src="../../assets/video/home_banner.mp4" type="video/mp4">
          </video>
        </div>
      </Modal>      
    </header>
    <div class="solution__container">
      <div class="container__tab" id="container__tab" :class="{'fixed': isFixed}">
        <ul class="container__tab-ul">
          <li 
          v-for="(item, index) in tab" 
          :key="index"
          :class="{ 'container__tab-li': current == index }"
          @click="changeTab(index)">
            {{item.title}}
          </li>
        </ul>
      </div>

      <div class="container__content">
        <div class="container__content-item case" id="solution">
          <div class="item__title">{{ solution.title}}</div>
          <div class="item__content" v-html="solution.content"></div>
        </div>
        <div class="container__content-item technology" id="technology">
          <div class="item__title">{{ tab[1].title}}</div>
          <div class="item__content flex" style="background: rgba(216, 214, 214, .3);">
            <div v-for="(item, index) in technology" :key="index" class="flex__item">
              <div><img :src="item.image_url"></div>
              <div class="flex__item-title">{{item.title}}</div>
              <div class="flex__item-title--small">{{item.content}}</div>
            </div>
          </div>
        </div>
        <div class="container__content-item case--success" id="success">
          <div class="item__title">{{ tab[2].title}}</div>
          <div class="item__content flex">
            <div v-for="(item, index) in case_success" :key="index" style="padding: 0 30px;" class="flex__item">
              <div style="height: 300px;position:relative;">
                <img style="background: rgb(217, 247, 247);">
                <div class="flex__item-title">{{item.title}}</div>
              </div>              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from '@/components/modal'
export default {
  components: {
    Modal
  },
  data() {
    return {
      isShowVideo: false,
      current: 0,
      isFixed: false,
      small_title: '数据云化存储和管理，可实现跨区域，多用户，多端口共享',
      tab: [
        {
          id: 0,
          title: '解决方案'
        },
        {
          id: 1,
          title: '技术特点'
        },
        {
          id: 2,
          title: '成功案例'
        }
      ],
      solution: {
        title: '长距离隧道结构安全监测整体解决方案',
        content:
        '<p>随着城镇以及农村的发展'+
        '人居环境与自然环境融合紧密，滑坡、泥石流等地质灾害所造成的破坏性影响越来越大'+
        '对自然边坡防止工作提出了更高的要求</p>'+
        '<p>自然边坡监测系统，通过多传感器，获取数据及解算分析，对边坡进行实时“体检”，第一时间'+
        '产生预警信息，从而实现边坡灾害前防治预报，进一步为边坡整治提供决策支持，有效避免灾害发生</p>'+
        '<p>智能自然边坡监测解决方案提供所中传感器接入方式，满足环境、变形、应力全面检测，支持多网络高数据传输</p>'+
        '<img style="background: rgb(217, 247, 247);">'+
        '<p>数据云化存储和管理，可实现跨区域，多用户，多端口共享</p>'+
        '<p>智能自然边坡监测解决方案提供所中传感器接入方式，满足环境、变形、应力全面检测</p>'
      },
      technology: [
        {
          id: 0,
          title: '隧道结构安全检测',
          content: '数据云存储管理，可实现跨区域、多用户、多端口共享',
          image_url: '../../assets/image/first.png'
        },
        {
          id: 1,
          title: '隧道结构安全检测',
          content: '数据云存储管理，可实现跨区域、多用户、多端口共享',
          image_url: '../../assets/image/second.png'
        },
        {
          id: 2,
          title: '隧道结构安全检测',
          content: '数据云存储管理，可实现跨区域、多用户、多端口共享',
          image_url: '../../assets/image/third.png'
        },       
      ],
      case_success: [
        {
          id: 0,
          title: '数据云存储管理，可实现跨区域、多用户、多端口共享'
        },
        {
          id: 1,
          title: '数据云存储管理，可实现跨区域、多用户、多端口共享'
        },
        {
          id: 2,
          title: '数据云存储管理，可实现跨区域、多用户、多端口共享'
        }
      ]
    }
  },
  mounted() {
    // window.addEventListener('scroll', this.scrollTop, true)
  },
  methods: {
    showVideo() {
      this.isShowVideo = true
    },
    closeVideo() {
      this.isShowVideo = false
    },
    changeTab(index) {
      this.current = index
      let query
      switch(index) {
        case 0:
          query = 'solution'
          break
        case 1:
          query = 'technology'
          break
        case 2:
          query = 'success'
          break
      }
      console.log(query)
      let scrollTop = document.getElementById(query).offsetTop
      // Chrome
      document.body.scrollTop = scrollTop
      // Firefox
      document.documentElement.scrollTop = scrollTop
      // Safari
      window.pageYOffset = scrollTop
    },
    scrollTop() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop // 滚动条偏移量
      let offsetTop = document.getElementById('container__tab').offsetTop;  // 要滚动到顶部吸附的元素的偏移量
      this.isFixed = scrollTop > offsetTop ? true : false;  // 如果滚动到顶部了，this.isFixed就为true
    }
  }
}
</script>

<style>
.solution {
  position: relative;
  height: 70vh;
}
header {
  height: 100%;
}
.solution__banner {
  height: 100%; 
  background: url(../../assets/image/solution_banner.jpg) no-repeat center;
  background-size: 100%;
  background-position: 50% 50%;
}
.solution__title {
  position: absolute;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 36px;
  letter-spacing: 3px;
}
.solution__title--small {
  margin-top: 100px;
  font-size: 16px;
}
.solution__btn {
  margin-top: 200px;
  font-size: 14px;
}
.solution__btn--look, .solution__btn--link {
  display: inline-block;
  border: 1px solid #fff;
}
.banner__video {
  position: absolute;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
}
.banner__video img {
  position: absolute;
  top: -20px;
  right: -30px;
  width: 30px;
  height: 30px;
  cursor: pointer;
}
.solution__container {
  padding-bottom: 100px;
}
.container__tab {
  border-bottom: 1px solid #e2e3e5;
  text-align: left;
}
.fixed {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background: #fff;
}
.container__tab li {
  position: relative;
  display: inline-block;
  padding: 30px 50px;
}
.container__tab-li:after {
  position: absolute;
  left: 25%;
  bottom: 0;
  content: '';
  width: 50%;
  height: 2px;
  background: #d20a2c;
  transition: all linear .3s;
}
.container__content-item {
  border-bottom: 1px solid #e2e3e5;
}
.item__title {
  margin: 30px auto;
  font-size: 30px;
}
.item__content p {
  width: 70%;
  line-height: 1.75;
  margin: 15px auto;
  font-size: 20px;
  text-align: center;
}
.item__content img{
  width: 70%;
  height: 500px;
  max-width: 100%;
  margin-top: 30px;
}
.flex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 100px 0;
}
.flex__item {
  flex: 1
}
.flex__item img {
  width: 200px;
  height: 200px;
  padding-bottom: 20px;
}
.flex__item-title {
  padding-bottom: 20px;
  font-size: 26px;
}
.flex__item-title--small {
  font-size: 16px;
}
.case--success {
  padding: 0 200px;
}
.case--success .flex {
  padding: 0;
}
.case--success .flex__item {
  height: 300px;
}
.case--success .flex__item img {
  width: 100%;
  height: 100%;
  max-width: 100%;
  padding: 0;
  margin: 0;
}
.case--success .flex__item .flex__item-title{
  position: absolute;
  left: 20px;
  bottom: 20px;
  font-size: 16px;
  text-align: left;
}
</style>