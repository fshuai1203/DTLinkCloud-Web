<template>
  <div>
    <div id="content">
      <i class="el-icon-user-solid"></i>
      登录
    </div>
    <el-form label-position="right" label-width="100px" ref="user">
      <el-form-item label="账号" prop="userName">
        <el-input v-model="user.userName" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="user.password" type="password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox >显示密码</el-checkbox>
      </el-form-item>
      <el-form-item style="margin-top: -30px">
        <el-checkbox v-model="checked">保持我的登录状态</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="doLogin">登录</el-button>
        <el-button type="info" @click="doRegister">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {Message} from 'element-ui'

const axios = require('axios');
export default {
  data() {
    return {
      user: {
        userName: '',
        password: '',
      },
    }
  },
  methods: {
    doLogin() {
      let that = this
      if (this.user.userName === '') {
        Message.info("用户名不能为空")
        return
      }
      if (this.user.password === '') {
        Message.info("密码不能为空")
        return;
      }
      axios({
        method: 'post',
        url: "/user/login",
        data: this.user
      }).then(function (response) {
        let data = response.data
        if (data.success === true) {
          // 登录成功，跳转首页
          Message.success("登录成功")
          that.$router.push("/index")
        } else {
          Message.info(response.data.message)
        }
      })
    },
    doRegister() {
      this.$router.push("/register")
    }
  },
  mounted() {
  }
}
</script>
<style>
#content {
  font-size: 20px;
  margin-bottom: 30px;
}
</style>
