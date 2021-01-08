<!--
 * @Description: 
 * @Author: Wangtr
 * @Date: 2020-12-31 10:54:21
 * @LastEditTime: 2021-01-08 23:29:30
 * @LastEditors: Wangtr
 * @Reference: 
-->
<template>
  <div class="background">
    <!-- <div class="bgc">
      <img :src=bgcsrc alt="bgc">
    </div> -->
    <div class="main">
      <div class="top">
        <img :src=bgcsrc alt="logo">
      </div>
      <a-form-model :model="loginForm" :label-col="{span:4, offset: 4}" :wrapper-col="{span:8}">
        <a-form-model-item label="用户名" prop="loginName">
          <a-input v-model="loginForm.loginName"></a-input>
        </a-form-model-item>
        <a-form-model-item label="密码" prop="loginPwd">
          <a-input type="password" v-model="loginForm.loginPwd"></a-input>
        </a-form-model-item>
        <a-form-model-item label="验证码" prop="code">
          <a-input v-model="loginForm.code"></a-input>
        </a-form-model-item>
        <a-tooltip placement="top" :mouseLeaveDelay="0" overlayClassName="tip">
          <template slot="title">
            <span>点击刷新验证码</span>
          </template>
          <img class="vcode" :src=vcodeImg alt="vcode" @click="getVcode()">
        </a-tooltip>
        <a-form-model-item :wrapper-col="{ span: 6, offset: 10 }">
          <a-button
            type="primary"
            style="margin-right: 50px"
            @click="login()"
          >登陆</a-button>
          <a-button>返回</a-button>
        </a-form-model-item>
      </a-form-model>
    </div>
  </div>
  
</template>

<script>
import { Input, Button, Tooltip } from 'ant-design-vue'
export default {
  name: "Login",
  components: {
    AInput: Input,
    AButton: Button,
    ATooltip: Tooltip,
  },
  data () {
    return {
      bgcsrc: require('@/assets/image/login_bgc.jpg'),
      vcodeImg: '',
      loginForm:{
        code: '',
        codeUuid: '',
        loginName: "1111@qq.com",
        loginPwd: "123456"
      }
    };
  },
  created() {
    this.getVcode()
  },
  methods: {
    login() {
      this.$http.login(this.loginForm).then(res => {
        console.log(res);
      })
    },
    getVcode() {
      this.$http.getVerificationCode().then(res => {
        this.vcodeImg = res.code
        this.loginForm.codeUuid = res.uuid
      })
    }
  }
}
</script>

<style lang="less" scoped>
.background{
  position: fixed;
  height: 100%;
  width: 100%;
  background: url('../../assets/image/login_bgc.jpg') no-repeat;
  background-size: 100% 100%;
}
.main{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1000px;
  height: 600px;
  background-color: #fff;
  opacity: 0.9;
}
.top{
  margin: 65px 0 45px 0;
  width: 100%;
  height: 88px;
  img{
    width: 275px;
    height: 88px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
}
.vcode{
  margin: 0 0 30px 0;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
}
.tip{
  background-color: #fff;
  color: #000;
}
</style>