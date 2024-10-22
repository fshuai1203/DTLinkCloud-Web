<template>
  <div>
    <el-card shadow="always" id="login-top">
      <div id="logo">
        DT|云链
      </div>
    </el-card>
    <div class="center login-center-box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
</script>
<style>


.center {
  margin: 0 auto;
  width: 50%;
}

#logo {
  color: #fff;
  font-size: 18px;
  font-weight: 600;
}

.login-center-box {
  border-radius: 5px;
  width: 40%;
  padding: 20px;
  margin-top: 30px;
  background-color: #ffffff;
  box-shadow: 0 1px 10px #afafaf;
  vertical-align: middle;
}
#login-top{
  background-color:  #281c46;
}

</style>
