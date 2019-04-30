<template>
  <div class="login">

    <div class="content">

      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <p>极别科技</p>
          </div>
        </el-col>
        <el-col :span="12">
          <i class="el-icon-circle-close-outline icon" @click="closeloge"></i>
          <div class="grid-content bg-purple-light">
            <el-input type="text"
                      placeholder="请输入账号"
                      v-model="usernames"
                      clearable style="border:0" auto-completed="off" autocompleted="off" >
            </el-input>
            <el-input
              placeholder="请输入密码"
              v-model="password"
              clearable type="text" name="password" onfocus="this.type='password'" auto-completed="off"
              autocompleted="off" >
            </el-input>
            <!-- <el-input
              placeholder="请输入密码"
              v-model="password"
              clearable type="text" name="password" onfocus="this.type='password'" auto-completed="off" autocompleted="off" onblur="this.value=''">
            </el-input> -->
            <div style="position: relative;">
              <el-input
                placeholder="请输入验证码"
                v-model="yzmcodeinput"
                clearable style="margin-left:12%;width:200px;">
              </el-input>
              <span class="yzmcode" @click="randomcode">{{yzmcode}}</span>

            </div>

            <el-checkbox v-model="checked">记住账号</el-checkbox>
            <el-button @click="login">登录</el-button>
            <div class="account">
              <span>还没有账号?</span>
              <span class="now">立即注册</span>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>


    <el-dialog title="修改密码" center :visible.sync="dialogFormVisible" class="updatepassnew">
      <p style="color: #F56C6C;text-align: center;">*您的密码过于简单，请重新设置</p>
      <el-form>
        <el-form-item label="新密码:">
          <el-input v-model="updatapassword" type="text" auto-complete="off" autocompleted="off" name="password"
                    style="text-security: circle;-webkit-text-security: disc;text-security:disc;-moz-text-security: disc;-o-text-security: disc;"></el-input>
          <span style="text-align:center;display:block;color: #F56C6C;height:20px;" v-if="istipreset==true">{{tipxiaoxi}}</span>
        </el-form-item>
        <el-form-item label="确认密码:">
          <el-input v-model="updatapassword1" type="text" auto-complete="off" autocompleted="off" name="password"
                    style="text-security: circle;-webkit-text-security: disc;text-security:disc;-moz-text-security: disc;-o-text-security: disc;"></el-input>
          <span style="text-align:center;display:block;color: #F56C6C;height:20px;" v-if="istipreset==true">{{tipxiaoxi}}</span>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="updatepass">提交</el-button>
        <el-button @click="dialogFormVisible = false" style="background: #fff;color: #606266;">取 消</el-button>

      </div>
    </el-dialog>
    <!-- 密码修改成功 -->
    <div class="addrole iceout" v-if="issubmit==true">
      <div v-if="issubmitif==true">
        <p>密码修改成功</p>
        <p><i class="el-icon-circle-check"></i></p>
      </div>
      <div v-if="issubmitif==false">
        <p>密码修改失败</p>
        <p><i class="el-icon-circle-close"></i></p>
      </div>
    </div>
    <div class="addrole iceout" v-if="isloginfalse==true">
      <div style="width:250px; height: 60px;">
        <p>{{islogininfo}}</p>
        <p><i class="el-icon-circle-close"></i></p>
      </div>
    </div>

    <!--<div @click="test">123456</div>-->
  </div>
</template>


<script>

  import axios from 'axios';

  axios.defaults.withCredentials = true;
  // import $ from 'jquery'

  // import config from '../assets/js/config.js'
  // import store from '@/assets/js/store'

  export default {
    name: "login",
    data() {
      return {
        usernames: "",//用户名
        password: "",//秘密
        yzmcode: "",//验证码
        yzmcodeinput: "",//输入的验证码
        checked: true,
        dialogFormVisible: false,
        updatapassword: "",
        updatapassword1: "",
        issubmit: false,
        issubmitif: false,
        tipxiaoxi: "",
        istipreset: false,
        isloginfalse: false,
        islogininfo: ""
      };
    },

    created() {
      this.username = localStorage.getItem("username")
      sessionStorage.removeItem("oprType")
    },
    methods: {
      closeloge(){
        this.$emit('shoulogn',false)
      },

      // 登陆
      login() {
        let that = this;
        // 判断验证码是否正确
        if (that.yzmcodeinput.toUpperCase() == that.yzmcode) {

          //正式的登入
         /* axios.post(config.url + '/doLogin', {
            username: that.username,
            password: that.password
          }, {headers: {"Content-Type": "text/plain"}})*/
          // 模拟的登入
           axios.get('/doLogin')
            .then(function (response) {
              // 模拟的登入的变量
              // var response = response.data
              // 登陆正确
              if (response.data.respCode == "00000") {

                if (that.checked == true) {
                  localStorage.setItem("username", that.username)
                  localStorage.setItem('cunstName', JSON.stringify(response.data.respData.customName));//设置企业名
                  localStorage.setItem('loginurl', response.data.respData.LOGO_URL);//设置logo地址

                  // that.setCookie(that.username, that.password, 7)
                }
                // 重置密码
                if (response.data.respData.defPassword == "1") {
                  that.dialogFormVisible = true;
                } else {
                  sessionStorage.setItem("oprType", JSON.stringify(response.data.respData.permission)) //左边导航栏数据
                  sessionStorage.setItem("qxnum", response.data.respData.oprType)
                  localStorage.setItem("loginurl", response.data.respData.LOGO_URL)
                  that.$store.state.openTab = [];

                  if (response.data.respData.oprType == "0") {
                    that.$router.push({path: '/index/addcommanage'});  // 系统管理员的页面
                  }
                  if(response.data.respData.isDirectNewSystem == '1'){
                    config.parkserial().then((result) => {
                      console.log(result,'条数~~~~~');
                      if(result.data.length == 1){
                        sessionStorage.setItem('isSign','0')  //不显示
                      }else {
                        sessionStorage.setItem('isSign','1')  // 显示
                      }
                      sessionStorage.setItem('isShowSwitchBtn','0')
                      sessionStorage.setItem('isParking','newParking')  //新云平台 左边导航栏的标识
                      that.$router.push({path: '/managecloudplatform/basicinformation'});  // 新云平台
                    })

                  }else {

                    if(response.data.respData.isShowSwitchSystemButton == 1){
                      sessionStorage.setItem('isShowSwitchBtn','0')  //不显示按钮
                    }else {
                      sessionStorage.setItem('isShowSwitchBtn','1')
                    }
                    that.$router.push({path: '/index/overview'});// // 旧云平台
                  }
                }
              } else {
                that.isloginfalse = true;
                if (response.data.msg) {
                  that.islogininfo = response.data.msg
                } else {
                  that.islogininfo = response.data.respMsg
                }
                setTimeout(function () {
                  that.isloginfalse = false
                }, 1000)
                // alert(response.data.respMsg)
              }
              // sessionStorage.setItem('parkingNo','')//干掉保存的parkingNo
            })
            .catch(function (error) {

            });
        } else {
          that.islogininfo = "验证码不正确，请重新输入！"
          that.isloginfalse = true
          setTimeout(function () {
            that.isloginfalse = false
          }, 1000)
        }
      },



      setCookie(c_name, c_pwd, exdays) {
        console.log(document.cookie,'document.cookie');

        let text = document.cookie
        let obj = {}
        let stringArr = text.split('; ')
        obj[stringArr[0].split('=')[0]] = stringArr[0].split('=')[1]
        obj[stringArr[1].split('=')[0]] = stringArr[1].split('=')[1]
        console.log(obj);
        var exdate = new Date();//获取时间
        exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays);//保存的天数
        //字符串拼接cookie
        window.document.cookie = 'username'+'='+ obj.username + ";path=/;expires=" + exdate.toGMTString();
        window.document.cookie = 'xrsf'+'='+ obj.xrsf + ";path=/;expires=" + exdate.toGMTString();

        // window.document.cookie = "xrsf" + "=" + document.cookie.split(";")[0].split("=")[1] + ";path=/;expires=" + exdate.toGMTString();

      },
      // 生成验证码
      randomcode() {
        let that = this;
        that.yzmcode = "";
        let random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
        for (var i = 0; i < 4; i++) {
          //设置随机数范围,这设置为0 ~ 36
          var index = Math.floor(Math.random() * 36);
          //字符串拼接 将每次随机的字符 进行拼接
          that.yzmcode += random[index];
        }
      },
      // 密码修改
      updatepass() {
        let that = this;
        // 密码位数判断
        if (this.updatapassword.length >= 8 && this.updatapassword.length <= 16) {
          // 密码强度判断
          if (this.passstring(this.updatapassword)) {
            // 判断两次输入密码是否相同
            if (this.updatapassword == this.updatapassword1) {
              axios.post(config.url + '/changePassword', {
                password: this.updatapassword
              })
                .then(function (response) {
                  that.dialogFormVisible = false;

                  that.issubmit = true
                  if (response.data.respCode == "00000") {
                    that.issubmitif = true
                  } else {
                    that.issubmitif = false
                  }
                  setTimeout(function () {
                    that.issubmit = false
                  }, 1000)
                  that.istipreset = false
                })
                .catch(function (error) {

                });
            } else {
              that.tipxiaoxi = "两次输入密码不相同"
              that.istipreset = true
              // setTimeout(function(){
              //   that.istipreset=false
              // },1000)

              // alert("两次输入密码不相同")
            }
          } else {
            that.tipxiaoxi = "至少含字母/数字/字符中的两种"
            that.istipreset = true
            // setTimeout(function(){
            //   that.istipreset=false
            // },1000)

            // alert("至少含字母/数字/字符中的两种")
          }
        } else {
          that.tipxiaoxi = "请输入8到16位的密码"
          that.istipreset = true
          setTimeout(function () {
            that.istipreset = false
          }, 1000)

          // alert("请输入8到16位的密码")
        }

      },
      // 密码强度判断
      passstring(pwdlen) {
        let count = 0
        let p1 = /[0-9]/;
        let p2 = /[a-z]/i;
        let p3 = /[\W|_]/
        if (p1.test(pwdlen)) {
          count++
        }
        if (p2.test(pwdlen)) {
          count++
        }
        if (p3.test(pwdlen * 1)) {
          count++
        }
        if (count >= 2) {
          return 1
        } else {
          // 密码强度不够
          return 0
        }

      },
      // 密码加密
      passwordjm() {

      }
    },
    mounted() {
      // let clientHeight = document.documentElement.clientHeight;
      // document.getElementById("app").style.height = clientHeight + "px";
      this.randomcode();
      // sessionStorage.setIem('parkingNo','')//干掉保存的parkingNo

    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>



  .updatepassnew .el-dialog {
    width: 45%;
  }

  .updatepassnew .el-dialog--center .el-dialog__body {
    padding-top: 0;
  }
</style>

<style scoped>

  .login {
    width: 100%;
    height: 100%;
    background-size: 100% 100%;

  }
  .content{
    width: 680px;
    height: 360px;
    margin: auto;
    position: relative;

  }
  el-row{
    margin-top: 100px;
  }
  .icon{
    position: absolute;
    right: 4px;
    top: 4px;
    font-size: 24px;
    cursor: pointer;
  }
  .el-row {

  }

  .login .el-button {
    background: #1c5c9e;
    color: #fff;
  }

  .el-col:nth-child(1) {
    /* background: url(../assets/loginleft.png) no-repeat; */
    background: rgba(220, 220, 220, 0.8);
    background-size: 340px 360px;

    width: 340px;
    height: 360px;
    position: relative;
  }

  .el-col:nth-child(1) p {
    color: #1c5c9e;
    font-size: 26px;
    line-height: 30px;
    text-align: center;
    font-weight: 700;
  }

  .el-col:nth-child(1) .grid-content {
    margin-top: 150px;
  }

  .el-col:nth-child(2) {
    background: #fff;
    height: 360px;
  }

  .el-input,
  .el-checkbox {
    width: 260px;
    margin: 25px auto 0;
    display: block;
  }

  .el-input:nth-child(1) {
    margin-top: 20px;
  }

  .el-button {
    width: 230px;
    margin: 30px auto 0;
    display: block;

    border-radius: 30px;
  }

  .el-button:nth-child(1) {
    background: #1c5c9e;
    color: #fff;
  }
  .account{
    width: 170px;
    height: 50px;
    line-height: 50px;
    margin: auto;
    font-size: 14px;
  }
  .now{
    color: #409EFF;
    cursor: pointer;
  }
  .yzmcode {
    position: absolute;
    right: 30px;
    top: 10px;
    color: #1c5c9e;
    letter-spacing: 4px;
    font-weight: 700;
  }

  .confirmClass {
    background: #000000;
  }

  .updatepassnew .el-button {
    display: inline-block;
    width: 100px;
    margin-right: 20px;
    margin-top: 0;
  }

  .updatepassnew .el-input {
    margin-top: 0;
  }

  .addrole {
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(26, 26, 26, .2);
    width: 100%;
    height: 100%;
    z-index: 66;
  }

  .addrole > div {
    padding: 20px;
    width: 400px;
    background: #fff;
    position: absolute;
    top: 20px;
    left: 0;
    right: 0;
    margin: auto;
  }

  .iceout > div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 180px;
    height: 100px;
  }

  .iceout > div p {
    text-align: center;
  }

  .iceout > div p .el-icon-circle-check {
    color: #1989FA;
    font-size: 30px;
    padding-top: 30px;
  }

  .iceout > div p .el-icon-circle-close {
    font-size: 30px;
    padding-top: 20px;
    color: #F56C6C;
  }
</style>
