<template>
  <div>
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3" disabled>消息中心</el-menu-item>
          <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
          <el-submenu index="5">
            <template slot="title">中文</template>
            <el-menu-item index="2-1" @click="setLang('zh-CN')">中文</el-menu-item>
            <el-menu-item index="2-2" @click="setLang('en-US')">English</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-header>
      <el-container>
        <el-main>
          <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
            <el-menu-item index="0" @click="changeNavMen">
              <i class="el-icon-caret-right" v-show="isCollapse"></i>
              <span class="el-icon-caret-left">收起</span>
            </el-menu-item>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
              </template>
              <el-menu-item-group>
                <span slot="title">分组一</span>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
          <div class="main-center">
            <div class="block swiper">
               <el-carousel height="200px" :autoplay="true">
                <el-carousel-item v-for="item in imgUrl" :key="item.id">
                  <img :src="item.url" class="banner_img"/>
                </el-carousel-item>
              </el-carousel>
            </div>
            <div class="main-center-down">
              <el-tabs v-model="activeName" @tab-click="handleTabClick">
                <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
                <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
                <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
                <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
              </el-tabs>
            </div>
          </div>
          <div class="main-right">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>卡片名称</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
              </div>
              <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
              </div>
            </el-card>
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>卡片名称</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
              </div>
              <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
              </div>
            </el-card>
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>卡片名称</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
              </div>
              <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
              </div>
            </el-card>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Layout',
  data () {
    return {
      isCollapse: false,
      activeIndex: '1',
      activeName: 'second',
      imgUrl: [{
        id: '1',
        url: require('../../assets/imges/2.jpg')
        },{
          id: '2',
          url: require('../../assets/imges/4.jpg')
        },{
          id: '3',
          url: require('../../assets/imges/5.jpg')
        },{
          id: '4',
          url: require('../../assets/imges/6.jpg')
      }]
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    changeNavMen() {
      this.isCollapse=!this.isCollapse
    },
      handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleTabClick(tab,even) {

    },
    setLang(v){
//       debugger;
//       if(v==='en-US'){
// 　　　　//自己定义的国际化文件是json格式的
//         // this._i18n.locale = "en-US";
// 　　　　//引用的就是element的国际化的内置对象
// 　　    locale.use(enLocale)
//       }else{
//         // this._i18n.locale = "zh-CN";
//         locale.use(zhLocale)
//       }
　　　 //把国际化的信息写到cookie里面，防止页面的刷新和f5
　　　  //这里也可以用vuex实现因为项目问题我们采用了cookie这种办法
      // $.cookie("language", this._i18n.locale === "" ?this._i18n.locale = "zh-CN" : this._i18n.locale,{ expires: 1, path: '/' });
    }       
  },
  computed: {
    ...mapState({
      //imgUrls: state => this.$store.state.imgUrl
    })
  }
}
</script>

<style scoped>
  .el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    padding: 0;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    
    color: #333;
    text-align: left;
    /* line-height: 160px; */
    padding: 0;
    display: flex;
    flex-direction: row;
  }
  .main-center {
    width: 800px;
    border: 1px solid red;
    margin-top: 2px;
  }
  .main-right {
    width: 500px;
    border: 1px solid red;
    margin-top: 2px;
  }
  .main-center-down {
    border: 1px solid red;
    margin-top: 5px;
    height: 300px;
  }


  .red-swiper {
    border: 1px solid red;
    /* height: 500px; */
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .banner_img {
    width: 100%;
    height: 200px;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 100%;
  }

  @keyframes fadeIn {
     from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
  @keyframes fadeOut {
     from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }
  .is-active img {
    animation: fadeIn 2s
  }

</style>
