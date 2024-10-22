<template>
  <div>
    <el-card shadow="always" id="top-card">
      <div id="top-logo" @click="goToIndex">
        DT|云链
      </div>
      <div class="userInfo" v-if="isLogin === true">
        <el-dropdown class="top-info" :hide-on-click="false">
      <span class="el-dropdown-link">
          <el-avatar
              :src="user.avatar"></el-avatar>
    </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item disabled>用户名：{{ user.userName }}</el-dropdown-item>
            <el-dropdown-item disabled v-if="user.sex === 1">性别：男</el-dropdown-item>
            <el-dropdown-item disabled v-if="user.sex === 2">性别：女</el-dropdown-item>
            <el-dropdown-item>
              <el-link :underline="false" @click="exit()">退出登录</el-link>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <div class="name">{{ user.userName }}</div>
      </div>
      <div class="userInfo" v-if="isLogin===false">

        <div class="name">
          <router-link to="/login" class="name">
            未登录
          </router-link>

        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
// import axios from 'axios'
// import {Message} from 'element-ui'


export default {
  props:['user','isLogin','getUserInfo'],
  data() {
    return {
      "name":null
    }
  },
  methods: {
    exit() {
    },
    search(){
    },
    // 路由跳转方法
    goToIndex() {
      this.$router.push('/index'); // 替换为你要跳转的路由路径
    }
  },
}
</script>
<style>
#top-card {
  background-color: #281c46;
}

#top-logo {
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  float: left;
}

.userInfo {
  color: #fff;
  float: right;
}

.name {
  float: right;
  line-height: 50px;
  text-align: center;
  font-size: 16px;
  font-weight: 300;
  margin-right: 20px;
  color: aliceblue;
}

.top-info {
  float: right;
}
#search{
  float: left;
  display: inline-block;
  margin-left: 100px;
  line-height: 30px;
  width: 200px;
}
</style>
