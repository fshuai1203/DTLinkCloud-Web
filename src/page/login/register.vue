<template>
  <div>
    <div id="content">
      <i class="el-icon-s-tools"></i>
      注册
    </div>
    <el-form label-position="right" label-width="100px">
      <el-form-item label="用户名" required>
        <el-input v-model="user.userName" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="性别" required>
        <el-select v-model="user.sex" placeholder="请选择">
          <el-option
              v-for="item in sexOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="密码" required>
        <el-input v-model="user.password" type="password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" required>
        <el-input v-model="user.password2" type="password" placeholder="请再次输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="doRegister">注册</el-button>
        <el-button type="info" @click="doLogin">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
const axios = require('axios');
import {Message} from 'element-ui'
export default {
  data() {
    return {
      user: {
        "password": "",
        "password2": "",
        "sex": null,
        "userName": ""
      },
      sexOptions: [
        {
          label: '男',
          value: 1
        },
        {
          label: '女',
          value: 2
        }
      ]
    }
  },
  methods: {
    doLogin() {
      this.$router.push("login")
    },
    doRegister() {
      let data = this.user
      if (data.userName === ''){
        Message.info("用户名不能为空")
        return
      }
      if (data.sex === null){
        Message.info("性别不能为空")
        return
      }
      if (data.password === ''){
        Message.info("密码不能为空")
        return
      }
      if (data.password !== data.password2){
        Message.info("两次密码不一致")
        return
      }
      let that = this
      axios({
        method: 'post',
        url: "/user/register",
        data: this.user
      }).then(function (response) {
        let data = response.data
        if (data.success === true) {
          // 注册成功，跳转登录
          Message.success("注册成功")
          that.$router.push("login")
        } else {
          Message.error(response.data.message)
        }
      })
    }
  },
  mounted() {
    this.updateCaptcha();
  }
}
</script>
<style>
#content {
  font-size: 20px;
  margin-bottom: 30px;
}
</style>
