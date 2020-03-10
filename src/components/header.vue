<template>
  <div class="header">
    <div v-if="!isShowScrollBar">
      <div class="header__nav--highlight">
      <div class="header__nav-login">
        <span>登陆</span>
      </div>
    </div>
    <div class="header__nav clearfix">
      <div class="header__nav-logo" @click="toHome">
        <img src="../assets/logo.png" alt="">
      </div>
      <div class="header__nav-box" @click="showScrollBar">
        <i class="iconfont icon-daohang" ></i>
      </div>
      <ul class="header__nav-ul">
        <li v-for="(item, index) in navbar" :key="index" class="header__nav-li" @click="showScrollBar">{{item.title}}</li>
      </ul>
      <div class="header__search">
        <i class="iconfont icon-sousuo" @click="showScrollBar"></i>
      </div>
    </div>
    </div>
    
    <div class="header__nav-box--big slideInDown" :class="{'slideInDown': isShowScrollBar}" v-show="isShowScrollBar">
      <div class="search clearfix">
        <div class="header__nav-logo" @click="toHome">
          <img src="../assets/logo.png" alt="">
        </div>
        <el-input style="width: 500px;" class="widthSlide">
          <i
            class="iconfont icon-sousuo"
            slot="prefix"
           >
          </i>
        </el-input>
        <div class="search__close" style="margin-left: 200px;" @click="closeScrollBar">
          <img src="../assets/icon/close.png" class="lightSpeedIn"/>
        </div>        
      </div>
      <div class="clearfix" style="display: flex; height: 100%;">
        <div id="plate1" class="srcollbox" style="width: 500px;padding-left: 200px;">
        <div class="scrollContent">
          <ul class="current">
            <li v-for="(item, index) in navbar" :key="index" class="current__li" :class="{'li--active': index == current}" @mouseover="onSecondBox(item.id)">
              <span>{{item.title}}</span>
              <i class="el-icon-arrow-right"></i>
            </li>
          </ul>
        </div>
      </div>
      <div id="plate2" class="srcollbox" style="width: 500px;background: #666;padding-left: 10px;" v-if="isSecondShow">
        <div class="scrollContent">
           <ul class="current">
              <li v-for="(item, index) in secondBox" :key="item.title" class="current__li" 
              :style="index == current1 ? 'border-left: #c7000b solid 6px;background: #fff;color:#000;': ''"  
              @mouseover="onThirdBox(item.id)">
                <span>{{item.title}}</span>
                <i class="el-icon-arrow-right"></i>
              </li>
                   
           </ul>
        </div>       
      </div>
      <div id="plate3" v-if="isThirdShow" class="srcollbox" style="width: 100%;background: #fff;border: 1px solid #e5e5e5;">
        <div class="scrollContent" style="text-align:left;padding-left: 20px;">
          <div style="font-size: 30px;color: #333;margin-top: -12px;" v-if="thirdBox.child">
            {{thirdBox.title}}
            <span style="width: 60px;font-size: 14px;color: #c7000b">查看更多<i class="el-icon-arrow-right" style="position: static;"></i></span>
          </div>        
          <div v-for="item in thirdBox.child" :key="item.title">            
            <div class="thirdScrollDiv" @click="toSolution(item.title)">
              {{item.title}}           
            </div>
          </div>                    
        </div>

        <el-button style="position:absolute;bottom: 100px;right: 100px;background: #c7000b;color:#fff;">联系我们</el-button>    
      </div>
      </div>      
    </div>
  </div>
</template>

<script>
import { debounce } from '../utils'
export default {
  data() {
    return {
      isShowScrollBar: false,
      isSecondShow: false,
      isThirdShow: false,
      secondBox: [],
      thirdBox: [],
      current: 0,
      current1: 0,
      navbar:[
        {
          id: 0,
          title: '产品与服务'
        },
        {
          id: 1,
          title: '行业'
        },
        {
          id: 2,
          title: '热点话题'
        },
        {
          id: 3,
          title: '产品'
        },
        {
          id: 4,
          title: '如何购买'
        },
        {
          id: 5,
          title: '服务支持'
        },
        {
          id: 6,
          title: '关于我们'
        },
      ],
      scrollNav: [
        {
          id: 0,
          title: '产品与服务',
          child: [
            {
              id: 0,
              title: '平台',
              child: [
                {
                  id: 0,
                  title: '企业生产检测平台',
                }
              ]          
            },
            {
              id: 1,
              title: '激光扫描等',
              child: [
                {
                  id: 0,
                  title: '无人机扫描',
                },
                {
                  id: 1,
                  title: '车载扫描',
                },
                {
                  id: 2,
                  title: '安全器',
                },
                {
                  id: 3,
                  title: '旋翼',
                }
              ]           
            },
            {
              id: 2,
              title: '无人机',
              child: [
                {
                  id: 0,
                  title: '全站机器人',
                },
                {
                  id: 1,
                  title: '旋翼',
                },
              ]          
            },
            {
              id: 3,
              title: '全站仪',
              child: [
                {
                  id: 0,
                  title: '南方全站仪',
                },
                {
                  id: 1,
                  title: '锁佳全站仪',
                },
              ]           
            },
            {
              id: 4,
              title: 'GNSS产品',
              child: [
                {
                  id: 0,
                  title: 'RTK',
                },
                {
                  id: 1,
                  title: '手持机',
                },
              ]            
            },
          ]
        },
        {
          id: 1,
          title: '行业',
          child: [
            {
              id: 0,
              title: '交通',
              child: [
                {
                  id: 0,
                  title: '长距离隧道结构安全监测整体解决方案'
                },
                {
                  id: 1,
                  title: '公路、铁路边坡安全监测'
                },
                {
                  id: 2,
                  title: '隧道安全智能监测'
                },
                {
                  id: 3,
                  title: '智能隧道施工'
                },
                {
                  id: 4,
                  title: '地铁、保护区、电子围栏'
                },       
              ]         
            },
            {
              id: 1,
              title: '住建',
              child: [
                {
                  id: 0,
                  title: '基坑监测'
                },
                {
                  id: 1,
                  title: '全自动钢结构施工监测'
                },                
              ]
            },
            {
              id: 2,
              title: '国土',
              child: [
                {
                  id: 0,
                  title: '实景实测'
                }
              ]          
            },
            {
              id: 3,
              title: '地质',
              child: [
                {
                  id: 0,
                  title: '地质灾害环境智能监测'
                }
              ]  
            },
            {
              id: 4,
              title: '环境',
              child: [
                {
                  id: 0,
                  title: '环境'
                }
              ]  
            },
            {
              id: 5,
              title: '水利',
              child: [
                {
                  id: 0,
                  title: '水利'
                }
              ]  
            },
            {
              id: 6,
              title: '电力',
              child: [
                {
                  id: 0,
                  title: '电力'
                }
              ]  
            },
            {
              id: 7,
              title: '学校',
              child: [
                {
                  id: 0,
                  title: '监测实训室'
                }
              ]  
            },
            {
              id: 8,
              title: '应急',
              child: [
                {
                  id: 0,
                  title: '应急'
                }
              ]  
            }
          ]
        },
        
      ]
    }
  },
  mounted() {
    
  },
  methods: {
    showScrollBar() {
      this.isShowScrollBar = true
      this.changeSecondBox(this.current)
      this.changeThirdBox(this.current1)
    },
    closeScrollBar() {
      this.isShowScrollBar = false
      this.current = 0
      this.current1 = 0
    },
    onSecondBox:debounce(function(id) {
      this.changeSecondBox(id)
    }, 300),
    onThirdBox:debounce(function(id) {
      this.changeThirdBox(id)
    }),
    changeSecondBox(id) {
      let current  = id   
      this.secondBox = []
      let scrollNav = this.scrollNav
      let secondBox = scrollNav.filter(item => {
        return item.id == current
      })
      this.secondBox = secondBox[0] ? secondBox[0].child : []
      this.current = current 
      this.isSecondShow = true
      this.changeThirdBox(this.current1)
      this.current1 = ''
    },
    changeThirdBox(id) {
      let current  = id
      console.log(id)     
      this.thirdBox = []
      let scrollNav = this.secondBox
      let thirdBox = scrollNav.filter(item => {
        return item.id == id
      })
      this.thirdBox = thirdBox[0] ? thirdBox[0]: []
      this.current1 = current
      this.isThirdShow = true
    },
    toSolution(title) {
      this.closeScrollBar()
      this.$router.push({
        path: '/solution',
        query: {
          title
        }
      })
    },
    toHome() {
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>

<style>
.header {
  position: relative;
  z-index: 1000;
  line-height: 68px;
}
.header__nav {
  width: 100%;
}
.header__nav--highlight {
  position: relative;
  width: 100%;
  height: 28px;
  background-color: #222;
  z-index: 99;
}
.header__nav-login {
  position: absolute;
  right: 100px;
  bottom: 0;
  height: 100%;
  line-height: 28px;
  color: #fff;
  font-weight: 400;
  font-size: 12px;
}
.header__nav-logo, .header__nav-box, .header__nav-ul {
  float: left;
}
.header__search {
  margin-right: 100px;
  float: right;  
}
.header__nav-logo {
  transform: scale(.5);
}
.header__nav-li {
  display: inline-block;
  padding: 0 30px;
  color: #888;
}
.header__nav-box--big {
  width: 100%;
  height: 90vh;
  font-size: 16px;
}
.srcollbox {
  background: #111214;
  height: 100%;
  float: left;
}
.scrollContent {
  position: relative;
  padding-top: 10px;
}
.scrollContent .current {
  color: #fff;
}
.current__li {
  display: flex;
  align-items: center;
  height: 40px;
  padding-left: 20px;
  border-radius: 5px;
}
.current__li:hover {
  border-left: #c7000b solid 6px;
  border-radius: 5px;
  background: #fff;
  color: #888;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.el-icon-arrow-right {
  position: absolute;
  right: 20px;
}
.search__close {
  display: inline-block;
  width: 40px;
  height: 40px;
}
.search__close img {
  vertical-align: middle;
}
.search__close img {
  width: 30px;
  height: 30px;
}
.li--active {
  border-left: #c7000b solid 6px;
  background: rgba(228, 227, 227, .2);
}
.thirdScrollDiv {
  border-right: none;
  border-top: 1px solid #e2e3e5;
  margin-top: -10px;
}
.thirdScrollDiv:hover {
  text-decoration: underline;
}
</style>