<template>
  <div class="wrapper">
    <div class="main">
      <div class="top">
        <top-content :getUserInfo="getUserInfo" :user="user" :is-login="isLogin"></top-content>
      </div>
      <!--嵌入页面-->
      <div class="content">
        <div class="menu">
          <LeftMenu/>
        </div>
        <div class="content-main">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TopContent from './top-content'
import LeftMenu from './left-menu'
// import BottomContent from './bottom-content.vue'
// import axios from "axios";
// import {Message} from "element-ui";

export default {
  components: {LeftMenu, TopContent},
  data() {
    return {
      user: {
        "userId": "",
        "userName": "",
        "sex": 0,
        "avatar": "",
      },
      isLogin: false
    }
  },
  methods: {
    getUserInfo() {

    },
  },
  mounted() {
    this.getUserInfo()
  }
}

</script>
<style>
.content {
  display: inline-block;
  width: 100%;
}

.menu {
  width: 15%;
  height: 100%;
  float: left;
}

.content-main {
  /*margin-top: 3%;*/
  width: 95%;
  margin-left: 20px;
}

.wrapper {
}

.top {
  width: 100%;
  /*position: fixed;*/
  /*z-index: 1000;*/
}
</style>
